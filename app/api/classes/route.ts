import { NextResponse } from "next/server";
import axios from "axios";

const ep = process.env.NEXT_PUBLIC_TEST_SECRET as string;
const c1 = JSON.parse(ep).oA;
const c2 = JSON.parse(ep).jW;

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

export async function GET(request: Request) {
  let res;
  let resData: ClassInterface[] = [];

  await axios
    .get(process.env.NEXT_PUBLIC_DOMAIN + "/api/grades")
    .then(async (response1) => {
      for (let period of response1.data.periods) {
        await axios
          .get((process.env.API_CLASSES as string).replace("PERIOD", period), {
            headers: {
              accept: "application/vnd.api+json",
              authorization: `Bearer ${c1}`,
              "x-auth-jwt": c2,
            },
          })
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
            console.error(error);
          });

        res = resData;
      }
    })
    .catch((error) => {
      console.error(error);
    });

  return NextResponse.json(res);
}
