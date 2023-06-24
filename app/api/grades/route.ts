import { NextResponse } from "next/server";
import axios from "axios";

const ep = process.env.NEXT_PUBLIC_TEST_SECRET as string;
const c1 = JSON.parse(ep).oA;
const c2 = JSON.parse(ep).jW;

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

export async function GET(request: Request) {
  let res;
  let resData: GradesInterface = { periods: [], grades: [] };

  await axios
    .get(
      (process.env.NEXT_PUBLIC_API_CLASS_NAMES as string).replace(
        "PERIOD",
        true ? "" : `?ejercicio-academico=${202311}`
      ),
      {
        headers: {
          accept: "application/vnd.api+json",
          authorization: `Bearer ${c1}`,
          "x-auth-jwt": c2,
        },
      }
    )
    .then((response) => {
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
      res = resData;
    })

    .catch((error) => {
      res = { error: error.message };
    });

  for (let period of resData.periods) {
    await axios
      .get(
        (process.env.NEXT_PUBLIC_API_GRADES as string).replace(
          "PERIOD",
          period
        ),
        {
          headers: {
            accept: "application/vnd.api+json",
            authorization: `Bearer ${c1}`,
            "x-auth-jwt": c2,
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
        res = { error: error.message };
      });
  }

  return NextResponse.json(res);
}
/*





{
    "type": "cursos",
    "id": "202311-18673",
    "attributes": {
        "numeroReferenciaCurso": "18673",
        "calificacionFinal": "SA",
        "indicador": "L"
    },
    "relationships": {
        "curso-unificado": {
            "data": {
                "type": "curso-unificado",
                "id": "CCM.WKLI1006S.205.2311.18673"
            }
        }
    }
}






axios
      .get(
        (process.env.NEXT_PUBLIC_API_GRADES as string).replace(
          "PERIOD",
          period === "" ? "" : `?ejercicio-academico=${period}`
        ),
        {
          headers: {
            accept: "application/vnd.api+json",
            authorization: `Bearer ${c1}`,
            "x-auth-jwt": c2,
          },
        }
      )
      .then((response) => {
        console.log(response.data);

        const formattedGrades: GradesInterface[] = [];
        const allPeriods: string[] = [];
        for (let data of response.data.data) {
          formattedGrades.push({
            grade: data.attributes.promedioUnidadFormacion,
            name: data.attributes.descripcionGrupo,
          });

          allPeriods.push(data.relationships["ejercicio-academico"].data.id);
        }
        if (period === "") {
          setPeriods(Array.from(new Set(allPeriods)));
        }
        setGrades(formattedGrades);
      })
      .catch((error) => {
        console.error(error);
      });

*/
