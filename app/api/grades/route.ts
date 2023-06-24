import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

interface GradesInterface {
  periods: string[];
  grades: {
    id: string;
    name: string;
    group: string;
    period: string;
    grade: string;
  }[];
}

interface TokenInterface {
  JWT: string;
  oAuth: string;
}

export async function GET(req: NextRequest) {
  let errorMsg: string[] = [];
  let resData: GradesInterface = { periods: [], grades: [] };

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
    .get((process.env.API_CLASS_NAMES as string).replace("A0000", userId), {
      headers: {
        accept: "application/vnd.api+json",
        authorization: `Bearer ${token?.oAuth}`,
        "x-auth-jwt": token?.JWT,
      },
    })
    .then((response) => {
      //console.log(response.data);
      const allPeriods: string[] = [];
      for (let data of response.data.data) {
        const splitName = data.attributes.descripcionGrupo.split(" (");
        resData.grades.push({
          id: data.relationships["curso-unificado"].data.id,
          grade: "NA",
          group: splitName[1].slice(0, -1).match(/\d+/)[0],
          name: splitName[0],
          period: data.relationships["ejercicio-academico"].data.id,
        });

        allPeriods.push(data.relationships["ejercicio-academico"].data.id);
      }
      resData.periods = Array.from(new Set(allPeriods));
    })

    .catch((error) => {
      errorMsg.push(error.message);
    });

  for (let period of resData.periods) {
    await axios
      .get(
        (process.env.API_GRADES as string)
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
        for (let c of response.data.data) {
          if (c.relationships) {
            const id = c.relationships["curso-unificado"].data.id;
            const selectedClass = resData.grades.find(
              (grade) => grade.id === id
            );
            if (selectedClass && c.attributes.calificacionFinal) {
              selectedClass.grade = c.attributes.calificacionFinal;
            }
          }
        }
      })
      .catch((error) => {
        errorMsg.push(error.message);
      });
  }

  if (errorMsg.length === 0) {
    return NextResponse.json(resData, { status: 200 });
  } else {
    return NextResponse.json({ error: errorMsg }, { status: 401 });
  }
}
