import { NextResponse, NextRequest } from "next/server";
import axios from "axios";

interface ClassInterface {
  id: string;
  name: string;
  classStartDate: string;
  classEndDate: string;
  classStartTime: string;
  classEndTime: string;
  days: string[];
  group: string;
  classBuilding: string;
  classroom: string;
  teachers: { id: string; name: string }[];
}

interface TokenInterface {
  JWT: string;
  oAuth: string;
}

export async function GET(req: NextRequest) {
  let errorMsg: string[] = [];
  let resData: ClassInterface[] = [];

  let token: TokenInterface | undefined;
  const tokenString = req.cookies.get("token")?.value;
  if (tokenString !== undefined) {
    try {
      token = JSON.parse(tokenString);
    } catch (err: any) {
      errorMsg.push(err.message);
    }
  }
  const userId = token?.JWT
    ? JSON.parse(Buffer.from(token.JWT.split(".")[1], "base64").toString()).iss
    : "";

  await axios
    .get(process.env.NEXT_PUBLIC_DOMAIN + "/api/grades", {
      headers: {
        Cookie: `token=${tokenString}`,
      },
    })
    .then(async (response1) => {
      for (let period of response1.data.periods) {
        await axios
          .get(
            (process.env.API_CLASSES as string)
              .replace("PERIOD", period)
              .replace("A0000", userId),
            {
              headers: {
                accept: "application/vnd.api+json",
                authorization: `Bearer ${token?.oAuth}`,
                "x-auth-jwt": token?.JWT,
              },
            }
          )
          .then((response) => {
            for (let curso of response.data.data) {
              for (let horario of curso.attributes.horario) {
                const temp: ClassInterface = {
                  id: curso.relationships["materia-impartida"].data.id,
                  name: "NA",
                  classStartDate: horario.fechaInicioClase,
                  classEndDate: horario.fechaFinClase,
                  classStartTime: horario.horaInicioClase,
                  classEndTime: horario.horaFinClase,
                  days: horario.dias,
                  group: horario.grupo,
                  classBuilding: horario.descripcionEdificio,
                  classroom: horario.claveSalon,
                  teachers: [
                    {
                      id: curso.relationships["profesor-titular"].data.id,
                      name: "NA",
                    },
                  ],
                };

                if (curso.relationships["profesores-auxiliares"]) {
                  for (let prof of curso.relationships["profesores-auxiliares"]
                    .data) {
                    temp.teachers.push({
                      id: prof.id,
                      name: "NA",
                    });
                  }
                }

                for (let t of temp.teachers) {
                  const foundTeacher = response.data.included.find(
                    (item: any) =>
                      item.type === "profesores" && item.id === t.id
                  );

                  if (foundTeacher) {
                    t.name = foundTeacher.attributes.nombreCompleto;
                  }
                }

                const foundClass = response.data.included.find(
                  (item: any) => item.type === "materias" && item.id === temp.id
                );

                if (foundClass) {
                  temp.name = foundClass.attributes.descripcionMateria;
                }

                resData.push(temp);
              }
            }
          })
          .catch((error) => {
            errorMsg.push(error.message);
          });
      }
    })
    .catch((error) => {
      errorMsg.push(error.message);
    });

  if (errorMsg.length === 0) {
    return NextResponse.json(resData, { status: 200 });
  } else {
    return NextResponse.json({ error: errorMsg }, { status: 401 });
  }
}
