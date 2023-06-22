const axios = require("axios");

axios
  .get(
    "https://apigateway.tec.mx/tec-de-monterrey/api/tec/alumnos/A01028493/horario-de-cursos?claveEjercicioAcademico=202311",
    {
      headers: {
        accept: "application/vnd.api+json",
        authorization:
          "Bearer AAIgMWVmZGZmNGYyNWQ1YTZiYzhmODVjZjRhZjE0NmEyYjdc-TwWvOjgqZh_2x71G_MyQ8hPZu-nFomVT00KS5YKI25_2AecIWjX5n6hkZ3QKoefqxyMO7k-Czps8g9lLE4f7etuXQEwQoMCGChU4zWEypIR0IdqwLWHYRR7_Wv53js",
        "sec-ch-ua":
          '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "x-auth-jwt":
          "eyJraWQiOiJoczI1Ni1rZXkiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBMDEwMjg0OTMiLCJzdWIiOiJBMDEwMjg0OTNAdGVjLm14IiwiYXVkIjoiQWx1bW5vIFRlY010eSIsImV4cCI6MTY4NzM5OTMwMCwiaWF0IjoxNjg3Mzk1NzAwLCJ0ZWMtaWQtcGVyc29uYSI6IjAzNDIwMzU1In0.YHMnXa0waREMs_9wTumP_T5MUea45BcF5OSolefxKqc",
        Referer: "https://mitec.itesm.mx/",
        "Referrer-Policy": "strict-origin-when-cross-origin",
      },
    }
  )
  .then((response) => {
    // Handle the response data
    console.log(response.data);
  })
  .catch((error) => {
    // Handle the error
    console.error(error);
  });

data = {
  jsonapi: { version: "2.0" },
  links: {
    self: "https://apigateway.tec.mx/tec-de-monterrey/api/tec/alumnos/A01028493/horario-de-cursos?claveEjercicioAcademico=202311",
  },
  data: [
    {
      type: "cursos",
      id: "202311-18673",
      attributes: {
        numeroReferenciaCurso: "18673",
        fechaInicioCurso: "2023-01-09",
        fechaFinCurso: "2023-06-28",
        horario: [
          {
            dias: ["M", "T", "W", "R", "F"],
            fechaInicioClase: "2023-05-08",
            fechaFinClase: "2023-05-14",
            horaInicioClase: "12:05",
            horaFinClase: "15:55",
            grupo: "205",
            claveEdificio: "Q-AII",
            descripcionEdificio: "Aulas II",
            claveSalon: "218",
          },
        ],
        claveTipoClase: "CLAS",
      },
      relationships: {
        "materia-impartida": { data: { type: "materias", id: "WKLI-1006S" } },
        "ejercicio-academico-impartido": {
          data: { type: "ejercicios-academico", id: "202311" },
        },
        "campus-relacionado": { data: { type: "campus", id: "Q" } },
        "profesor-titular": { data: { type: "profesores", id: "L00996512" } },
        "atributos-del-curso": {
          data: [
            { type: "atributos-de-curso", id: "COFI" },
            { type: "atributos-de-curso", id: "CSLI" },
            { type: "atributos-de-curso", id: "MT21" },
            { type: "atributos-de-curso", id: "PMT2" },
            { type: "atributos-de-curso", id: "STEC" },
          ],
        },
      },
    },
    {
      type: "cursos",
      id: "202311-20419",
      attributes: {
        numeroReferenciaCurso: "20419",
        fechaInicioCurso: "2023-01-09",
        fechaFinCurso: "2023-06-28",
        horario: [
          {
            dias: ["M", "R"],
            fechaInicioClase: "2023-02-13",
            fechaFinClase: "2023-03-19",
            horaInicioClase: "13:05",
            horaFinClase: "14:55",
            grupo: "127",
            claveEdificio: "Q-AII",
            descripcionEdificio: "Aulas II",
            claveSalon: "218",
          },
        ],
        claveTipoClase: "CLAS",
      },
      relationships: {
        "materia-impartida": { data: { type: "materias", id: "F-1008" } },
        "ejercicio-academico-impartido": {
          data: { type: "ejercicios-academico", id: "202311" },
        },
        "campus-relacionado": { data: { type: "campus", id: "Q" } },
        "profesor-titular": { data: { type: "profesores", id: "L01409383" } },
        "atributos-del-curso": {
          data: [
            { type: "atributos-de-curso", id: "COFI" },
            { type: "atributos-de-curso", id: "MT21" },
            { type: "atributos-de-curso", id: "PMT1" },
          ],
        },
      },
    },
    {
      type: "cursos",
      id: "202311-21852",
      attributes: {
        numeroReferenciaCurso: "21852",
        fechaInicioCurso: "2023-01-09",
        fechaFinCurso: "2023-06-07",
        horario: [
          {
            dias: ["R"],
            fechaInicioClase: "2023-03-27",
            fechaFinClase: "2023-05-07",
            horaInicioClase: "13:05",
            horaFinClase: "14:55",
            grupo: "202",
            claveEdificio: "Q-AI",
            descripcionEdificio: "Aulas I",
            claveSalon: "412",
          },
        ],
        claveTipoClase: "CLAS",
      },
      relationships: {
        "materia-impartida": { data: { type: "materias", id: "KCVC-3006" } },
        "ejercicio-academico-impartido": {
          data: { type: "ejercicios-academico", id: "202311" },
        },
        "campus-relacionado": { data: { type: "campus", id: "Q" } },
        "profesor-titular": { data: { type: "profesores", id: "L03017311" } },
        "atributos-del-curso": {
          data: [
            { type: "atributos-de-curso", id: "COFI" },
            { type: "atributos-de-curso", id: "LIFE" },
            { type: "atributos-de-curso", id: "MT21" },
            { type: "atributos-de-curso", id: "PMT2" },
          ],
        },
      },
    },
    {
      type: "cursos",
      id: "202311-22067",
      attributes: {
        numeroReferenciaCurso: "22067",
        fechaInicioCurso: "2023-01-09",
        fechaFinCurso: "2023-06-28",
        horario: [
          {
            dias: ["M", "R"],
            fechaInicioClase: "2023-05-15",
            fechaFinClase: "2023-06-18",
            horaInicioClase: "13:05",
            horaFinClase: "14:55",
            grupo: "315",
            claveEdificio: "Q-AI",
            descripcionEdificio: "Aulas I",
            claveSalon: "203",
          },
        ],
        claveTipoClase: "CLAS",
      },
      relationships: {
        "materia-impartida": { data: { type: "materias", id: "MA-1031" } },
        "ejercicio-academico-impartido": {
          data: { type: "ejercicios-academico", id: "202311" },
        },
        "campus-relacionado": { data: { type: "campus", id: "Q" } },
        "profesor-titular": { data: { type: "profesores", id: "L01460378" } },
        "atributos-del-curso": {
          data: [
            { type: "atributos-de-curso", id: "COFI" },
            { type: "atributos-de-curso", id: "MT21" },
            { type: "atributos-de-curso", id: "PMT3" },
          ],
        },
      },
    },
    {
      type: "cursos",
      id: "202311-22642",
      attributes: {
        numeroReferenciaCurso: "22642",
        fechaInicioCurso: "2023-01-09",
        fechaFinCurso: "2023-06-28",
        horario: [
          {
            dias: ["T", "W", "F"],
            fechaInicioClase: "2023-02-13",
            fechaFinClase: "2023-03-19",
            horaInicioClase: "11:05",
            horaFinClase: "14:55",
            grupo: "127",
            claveEdificio: "Q-ES",
            descripcionEdificio: "Edificio Sur",
            claveSalon: "ES-105",
          },
          {
            dias: ["T", "W", "F"],
            fechaInicioClase: "2023-02-13",
            fechaFinClase: "2023-03-19",
            horaInicioClase: "11:05",
            horaFinClase: "14:55",
            grupo: "127",
            claveEdificio: "Q-ES",
            descripcionEdificio: "Edificio Sur",
            claveSalon: "ES-105",
          },
        ],
        claveTipoClase: "CLAS",
      },
      relationships: {
        "materia-impartida": { data: { type: "materias", id: "TC-1003B" } },
        "ejercicio-academico-impartido": {
          data: { type: "ejercicios-academico", id: "202311" },
        },
        "campus-relacionado": { data: { type: "campus", id: "Q" } },
        "profesor-titular": { data: { type: "profesores", id: "L00366658" } },
        "profesores-auxiliares": {
          data: [{ type: "profesores", id: "L03508171" }],
        },
        "atributos-del-curso": {
          data: [
            { type: "atributos-de-curso", id: "COFI" },
            { type: "atributos-de-curso", id: "MT21" },
            { type: "atributos-de-curso", id: "PMT1" },
          ],
        },
      },
    },
    {
      type: "cursos",
      id: "202311-22650",
      attributes: {
        numeroReferenciaCurso: "22650",
        fechaInicioCurso: "2023-01-09",
        fechaFinCurso: "2023-06-28",
        horario: [
          {
            dias: ["T", "F"],
            fechaInicioClase: "2023-05-15",
            fechaFinClase: "2023-06-18",
            horaInicioClase: "13:05",
            horaFinClase: "14:55",
            grupo: "329",
            claveEdificio: "Q-ES",
            descripcionEdificio: "Edificio Sur",
            claveSalon: "ES-105",
          },
        ],
        claveTipoClase: "CLAS",
      },
      relationships: {
        "materia-impartida": { data: { type: "materias", id: "TC-1030" } },
        "ejercicio-academico-impartido": {
          data: { type: "ejercicios-academico", id: "202311" },
        },
        "campus-relacionado": { data: { type: "campus", id: "Q" } },
        "profesor-titular": { data: { type: "profesores", id: "L03531818" } },
        "atributos-del-curso": {
          data: [
            { type: "atributos-de-curso", id: "COFI" },
            { type: "atributos-de-curso", id: "MT21" },
            { type: "atributos-de-curso", id: "PMT3" },
          ],
        },
      },
    },
    {
      type: "cursos",
      id: "202311-26355",
      attributes: {
        numeroReferenciaCurso: "26355",
        fechaInicioCurso: "2023-01-09",
        fechaFinCurso: "2023-06-28",
        horario: [
          {
            dias: ["T", "W", "R", "F"],
            fechaInicioClase: "2023-03-21",
            fechaFinClase: "2023-03-26",
            horaInicioClase: "12:05",
            horaFinClase: "15:55",
            grupo: "104",
            claveEdificio: "Q-AI",
            descripcionEdificio: "Aulas I",
            claveSalon: "214",
          },
        ],
        claveTipoClase: "CLAS",
      },
      relationships: {
        "materia-impartida": { data: { type: "materias", id: "EM-1001S" } },
        "ejercicio-academico-impartido": {
          data: { type: "ejercicios-academico", id: "202311" },
        },
        "campus-relacionado": { data: { type: "campus", id: "Q" } },
        "profesor-titular": { data: { type: "profesores", id: "L03515167" } },
        "atributos-del-curso": {
          data: [
            { type: "atributos-de-curso", id: "COFI" },
            { type: "atributos-de-curso", id: "MT21" },
            { type: "atributos-de-curso", id: "PMT1" },
            { type: "atributos-de-curso", id: "STEC" },
          ],
        },
      },
    },
    {
      type: "cursos",
      id: "202311-26534",
      attributes: {
        numeroReferenciaCurso: "26534",
        fechaInicioCurso: "2023-01-09",
        fechaFinCurso: "2023-06-28",
        horario: [
          {
            dias: ["M", "R"],
            fechaInicioClase: "2023-02-13",
            fechaFinClase: "2023-03-19",
            horaInicioClase: "11:05",
            horaFinClase: "12:55",
            grupo: "64",
            claveEdificio: "Q-CIE1",
            descripcionEdificio: "Edificio CIE1",
            claveSalon: "410",
          },
          {
            dias: ["M", "R"],
            fechaInicioClase: "2023-05-15",
            fechaFinClase: "2023-06-18",
            horaInicioClase: "11:05",
            horaFinClase: "12:55",
            grupo: "64",
            claveEdificio: "Q-CIE1",
            descripcionEdificio: "Edificio CIE1",
            claveSalon: "409",
          },
          {
            dias: ["M", "R"],
            fechaInicioClase: "2023-03-27",
            fechaFinClase: "2023-05-07",
            horaInicioClase: "11:05",
            horaFinClase: "12:55",
            grupo: "64",
            claveEdificio: "Q-CIE1",
            descripcionEdificio: "Edificio CIE1",
            claveSalon: "409",
          },
        ],
        claveTipoClase: "CLAS",
      },
      relationships: {
        "materia-impartida": { data: { type: "materias", id: "IM-1003" } },
        "ejercicio-academico-impartido": {
          data: { type: "ejercicios-academico", id: "202311" },
        },
        "campus-relacionado": { data: { type: "campus", id: "Q" } },
        "profesor-titular": { data: { type: "profesores", id: "L01417592" } },
        "atributos-del-curso": {
          data: [
            { type: "atributos-de-curso", id: "COFI" },
            { type: "atributos-de-curso", id: "MT21" },
            { type: "atributos-de-curso", id: "PMT6" },
          ],
        },
      },
    },
    {
      type: "cursos",
      id: "202311-34632",
      attributes: {
        numeroReferenciaCurso: "34632",
        fechaInicioCurso: "2023-01-09",
        fechaFinCurso: "2023-06-28",
        horario: [
          {
            dias: ["T", "F"],
            fechaInicioClase: "2023-03-27",
            fechaFinClase: "2023-05-07",
            horaInicioClase: "11:05",
            horaFinClase: "12:55",
            grupo: "234",
            claveEdificio: "Q-AII",
            descripcionEdificio: "Aulas II",
            claveSalon: "315",
          },
        ],
        claveTipoClase: "CLAS",
      },
      relationships: {
        "materia-impartida": { data: { type: "materias", id: "BT-1013" } },
        "ejercicio-academico-impartido": {
          data: { type: "ejercicios-academico", id: "202311" },
        },
        "campus-relacionado": { data: { type: "campus", id: "Q" } },
        "profesor-titular": { data: { type: "profesores", id: "L03514336" } },
        "atributos-del-curso": {
          data: [
            { type: "atributos-de-curso", id: "COFI" },
            { type: "atributos-de-curso", id: "MT21" },
            { type: "atributos-de-curso", id: "PMT2" },
          ],
        },
      },
    },
    {
      type: "cursos",
      id: "202311-36106",
      attributes: {
        numeroReferenciaCurso: "36106",
        fechaInicioCurso: "2023-01-09",
        fechaFinCurso: "2023-06-28",
        horario: [
          {
            dias: ["M"],
            fechaInicioClase: "2023-06-19",
            fechaFinClase: "2023-06-23",
            horaInicioClase: "09:05",
            horaFinClase: "10:25",
            grupo: "301",
            claveEdificio: "Q-AI",
            descripcionEdificio: "Aulas I",
            claveSalon: "420",
          },
        ],
        claveTipoClase: "CLAS",
      },
      relationships: {
        "materia-impartida": { data: { type: "materias", id: "WKIN-1002S" } },
        "ejercicio-academico-impartido": {
          data: { type: "ejercicios-academico", id: "202311" },
        },
        "campus-relacionado": { data: { type: "campus", id: "Q" } },
        "profesor-titular": { data: { type: "profesores", id: "L00577973" } },
        "atributos-del-curso": {
          data: [
            { type: "atributos-de-curso", id: "COFI" },
            { type: "atributos-de-curso", id: "MT21" },
            { type: "atributos-de-curso", id: "PMT3" },
            { type: "atributos-de-curso", id: "STEC" },
          ],
        },
      },
    },
    {
      type: "cursos",
      id: "202311-41320",
      attributes: {
        numeroReferenciaCurso: "41320",
        fechaInicioCurso: "2023-01-09",
        fechaFinCurso: "2023-06-28",
        horario: [
          {
            dias: ["M", "R"],
            fechaInicioClase: "2023-03-27",
            fechaFinClase: "2023-05-07",
            horaInicioClase: "15:05",
            horaFinClase: "16:55",
            grupo: "417",
            claveEdificio: "Q-AI",
            descripcionEdificio: "Aulas I",
            claveSalon: "214",
          },
          {
            dias: ["M", "R"],
            fechaInicioClase: "2023-02-13",
            fechaFinClase: "2023-03-19",
            horaInicioClase: "15:05",
            horaFinClase: "16:55",
            grupo: "417",
            claveEdificio: "Q-AI",
            descripcionEdificio: "Aulas I",
            claveSalon: "214",
          },
        ],
        claveTipoClase: "CLAS",
      },
      relationships: {
        "materia-impartida": { data: { type: "materias", id: "MA-1029" } },
        "ejercicio-academico-impartido": {
          data: { type: "ejercicios-academico", id: "202311" },
        },
        "campus-relacionado": { data: { type: "campus", id: "Q" } },
        "profesor-titular": { data: { type: "profesores", id: "L03531438" } },
        "atributos-del-curso": {
          data: [
            { type: "atributos-de-curso", id: "COFI" },
            { type: "atributos-de-curso", id: "MT21" },
            { type: "atributos-de-curso", id: "PMT4" },
          ],
        },
      },
    },
    {
      type: "cursos",
      id: "202311-41421",
      attributes: {
        numeroReferenciaCurso: "41421",
        fechaInicioCurso: "2023-01-09",
        fechaFinCurso: "2023-06-28",
        horario: [
          {
            dias: ["T", "W", "F"],
            fechaInicioClase: "2023-03-27",
            fechaFinClase: "2023-05-07",
            horaInicioClase: "15:05",
            horaFinClase: "18:55",
            grupo: "217",
            claveEdificio: "Q-AII",
            descripcionEdificio: "Aulas II",
            claveSalon: "316",
          },
          {
            dias: ["T", "W", "F"],
            fechaInicioClase: "2023-03-27",
            fechaFinClase: "2023-05-07",
            horaInicioClase: "15:05",
            horaFinClase: "18:55",
            grupo: "217",
            claveEdificio: "Q-AII",
            descripcionEdificio: "Aulas II",
            claveSalon: "316",
          },
        ],
        claveTipoClase: "CLAS",
      },
      relationships: {
        "materia-impartida": { data: { type: "materias", id: "F-1013B" } },
        "ejercicio-academico-impartido": {
          data: { type: "ejercicios-academico", id: "202311" },
        },
        "campus-relacionado": { data: { type: "campus", id: "Q" } },
        "profesor-titular": { data: { type: "profesores", id: "L03040813" } },
        "profesores-auxiliares": {
          data: [{ type: "profesores", id: "L03121151" }],
        },
        "atributos-del-curso": {
          data: [
            { type: "atributos-de-curso", id: "COFI" },
            { type: "atributos-de-curso", id: "MT21" },
            { type: "atributos-de-curso", id: "PMT2" },
          ],
        },
      },
    },
    {
      type: "cursos",
      id: "202311-41428",
      attributes: {
        numeroReferenciaCurso: "41428",
        fechaInicioCurso: "2023-01-09",
        fechaFinCurso: "2023-06-28",
        horario: [
          {
            dias: ["T", "W", "F"],
            fechaInicioClase: "2023-05-15",
            fechaFinClase: "2023-06-18",
            horaInicioClase: "15:05",
            horaFinClase: "18:55",
            grupo: "317",
            claveEdificio: "Q-AI",
            descripcionEdificio: "Aulas I",
            claveSalon: "212",
          },
          {
            dias: ["T", "W", "F"],
            fechaInicioClase: "2023-05-15",
            fechaFinClase: "2023-06-18",
            horaInicioClase: "15:05",
            horaFinClase: "18:55",
            grupo: "317",
            claveEdificio: "Q-AI",
            descripcionEdificio: "Aulas I",
            claveSalon: "212",
          },
        ],
        claveTipoClase: "CLAS",
      },
      relationships: {
        "materia-impartida": { data: { type: "materias", id: "F-1014B" } },
        "ejercicio-academico-impartido": {
          data: { type: "ejercicios-academico", id: "202311" },
        },
        "campus-relacionado": { data: { type: "campus", id: "Q" } },
        "profesor-titular": { data: { type: "profesores", id: "L03515916" } },
        "profesores-auxiliares": {
          data: [{ type: "profesores", id: "L03121408" }],
        },
        "atributos-del-curso": {
          data: [
            { type: "atributos-de-curso", id: "COFI" },
            { type: "atributos-de-curso", id: "MT21" },
            { type: "atributos-de-curso", id: "PMT3" },
          ],
        },
      },
    },
  ],
  meta: { unidadesInscritas: 18, materiasInscritas: 13 },
  included: [
    {
      type: "materias",
      id: "WKLI-1006S",
      attributes: {
        claveMateria: "WKLI",
        numeroCurso: "1006S",
        descripcionMateria: "El arte de emocionarte",
      },
      relationships: {
        "tipo-de-materia": { data: { type: "tipos-de-materia", id: "ACAD" } },
      },
    },
    {
      type: "materias",
      id: "F-1008",
      attributes: {
        claveMateria: "F",
        numeroCurso: "1008",
        descripcionMateria: "Experimentación física y pensamiento estadístico",
      },
      relationships: {
        "tipo-de-materia": { data: { type: "tipos-de-materia", id: "ACAD" } },
      },
    },
    {
      type: "materias",
      id: "KCVC-3006",
      attributes: {
        claveMateria: "KCVC",
        numeroCurso: "3006",
        descripcionMateria: "Estrategias para tu vinculación profesional",
      },
      relationships: {
        "tipo-de-materia": { data: { type: "tipos-de-materia", id: "EACD" } },
      },
    },
    {
      type: "materias",
      id: "MA-1031",
      attributes: {
        claveMateria: "MA",
        numeroCurso: "1031",
        descripcionMateria: "Análisis estadístico",
      },
      relationships: {
        "tipo-de-materia": { data: { type: "tipos-de-materia", id: "ACAD" } },
      },
    },
    {
      type: "materias",
      id: "TC-1003B",
      attributes: {
        claveMateria: "TC",
        numeroCurso: "1003B",
        descripcionMateria:
          "Modelación de la ingeniería con matemática computacional",
      },
      relationships: {
        "tipo-de-materia": { data: { type: "tipos-de-materia", id: "ACAD" } },
      },
    },
    {
      type: "materias",
      id: "TC-1030",
      attributes: {
        claveMateria: "TC",
        numeroCurso: "1030",
        descripcionMateria: "Programación orientada a objetos",
      },
      relationships: {
        "tipo-de-materia": { data: { type: "tipos-de-materia", id: "ACAD" } },
      },
    },
    {
      type: "materias",
      id: "EM-1001S",
      attributes: {
        claveMateria: "EM",
        numeroCurso: "1001S",
        descripcionMateria: "Emprende con propósito",
      },
      relationships: {
        "tipo-de-materia": { data: { type: "tipos-de-materia", id: "ACAD" } },
      },
    },
    {
      type: "materias",
      id: "IM-1003",
      attributes: {
        claveMateria: "IM",
        numeroCurso: "1003",
        descripcionMateria: "Apreciación multidisciplinaria de la música",
      },
      relationships: {
        "tipo-de-materia": { data: { type: "tipos-de-materia", id: "ACAD" } },
      },
    },
    {
      type: "materias",
      id: "BT-1013",
      attributes: {
        claveMateria: "BT",
        numeroCurso: "1013",
        descripcionMateria: "Análisis de biología computacional",
      },
      relationships: {
        "tipo-de-materia": { data: { type: "tipos-de-materia", id: "ACAD" } },
      },
    },
    {
      type: "materias",
      id: "WKIN-1002S",
      attributes: {
        claveMateria: "WKIN",
        numeroCurso: "1002S",
        descripcionMateria: "Semana 18 Ingeniería-2",
      },
      relationships: {
        "tipo-de-materia": { data: { type: "tipos-de-materia", id: "ACAD" } },
      },
    },
    {
      type: "materias",
      id: "MA-1029",
      attributes: {
        claveMateria: "MA",
        numeroCurso: "1029",
        descripcionMateria: "Modelación matemática intermedia",
      },
      relationships: {
        "tipo-de-materia": { data: { type: "tipos-de-materia", id: "ACAD" } },
      },
    },
    {
      type: "materias",
      id: "F-1013B",
      attributes: {
        claveMateria: "F",
        numeroCurso: "1013B",
        descripcionMateria: "Modelación computacional de sistemas eléctricos",
      },
      relationships: {
        "tipo-de-materia": { data: { type: "tipos-de-materia", id: "ACAD" } },
      },
    },
    {
      type: "materias",
      id: "F-1014B",
      attributes: {
        claveMateria: "F",
        numeroCurso: "1014B",
        descripcionMateria:
          "Modelación computacional de sistemas electromagnéticos",
      },
      relationships: {
        "tipo-de-materia": { data: { type: "tipos-de-materia", id: "ACAD" } },
      },
    },
    {
      type: "ejercicios-academicos",
      id: "202311",
      attributes: {
        descripcionEjercicioAcademico: "Semestral Enero-Junio de 2023",
        fechaInicioEjercicioAcademico: "2023-01-02",
        fechaFinEjercicioAcademico: "2023-06-28",
      },
    },
    {
      type: "campus",
      id: "Q",
      attributes: { descripcionCampus: "Campus Ciudad de México" },
    },
    {
      type: "profesores",
      id: "L00996512",
      attributes: {
        nombreCompleto: "Maria Penelope Vargas Estrada",
        nombres: "Maria Penelope",
        apellidoMaterno: "Vargas",
        apellidoPaterno: "Estrada",
        porcentajeParticipacion: 100,
      },
    },
    {
      type: "profesores",
      id: "L01409383",
      attributes: {
        nombreCompleto: "Juan Manuel Eugenio Ramírez de Arellano Niño Rincón",
        nombres: "Juan Manuel Eugenio",
        apellidoMaterno: "Ramírez de Arellano",
        apellidoPaterno: "Niño Rincón",
        porcentajeParticipacion: 100,
      },
    },
    {
      type: "profesores",
      id: "L03017311",
      attributes: {
        nombreCompleto: "Claudia Karla Ordorica Osorio",
        nombres: "Claudia Karla",
        apellidoMaterno: "Ordorica",
        apellidoPaterno: "Osorio",
        porcentajeParticipacion: 100,
      },
    },
    {
      type: "profesores",
      id: "L01460378",
      attributes: {
        nombreCompleto: "Osvaldo Alfonso Tellez Nieto",
        nombres: "Osvaldo Alfonso",
        apellidoMaterno: "Tellez",
        apellidoPaterno: "Nieto",
        porcentajeParticipacion: 100,
      },
    },
    {
      type: "profesores",
      id: "L03508171",
      attributes: {
        nombreCompleto: "Diego López Bernal",
        nombres: "Diego",
        apellidoMaterno: "López",
        apellidoPaterno: "Bernal",
        porcentajeParticipacion: 33,
      },
    },
    {
      type: "profesores",
      id: "L00366658",
      attributes: {
        nombreCompleto: "Leopoldo Cendejas Morales",
        nombres: "Leopoldo",
        apellidoMaterno: "Cendejas",
        apellidoPaterno: "Morales",
        porcentajeParticipacion: 67,
      },
    },
    {
      type: "profesores",
      id: "L03531818",
      attributes: {
        nombreCompleto: "Raúl Jiménez Cruz",
        nombres: "Raúl",
        apellidoMaterno: "Jiménez",
        apellidoPaterno: "Cruz",
        porcentajeParticipacion: 100,
      },
    },
    {
      type: "profesores",
      id: "L03515167",
      attributes: {
        nombreCompleto: "Sergio Alberto Loza Albarran",
        nombres: "Sergio Alberto",
        apellidoMaterno: "Loza",
        apellidoPaterno: "Albarran",
        porcentajeParticipacion: 100,
      },
    },
    {
      type: "profesores",
      id: "L01417592",
      attributes: {
        nombreCompleto: "Marcela María García López",
        nombres: "Marcela María",
        apellidoMaterno: "García",
        apellidoPaterno: "López",
        porcentajeParticipacion: 100,
      },
    },
    {
      type: "profesores",
      id: "L03514336",
      attributes: {
        nombreCompleto: "Laura Lucila Gómez Romero",
        nombres: "Laura Lucila",
        apellidoMaterno: "Gómez",
        apellidoPaterno: "Romero",
        porcentajeParticipacion: 100,
      },
    },
    {
      type: "profesores",
      id: "L00577973",
      attributes: {
        nombreCompleto: "Andrés González Nucamendi",
        nombres: "Andrés",
        apellidoMaterno: "González",
        apellidoPaterno: "Nucamendi",
        porcentajeParticipacion: 100,
      },
    },
    {
      type: "profesores",
      id: "L03531438",
      attributes: {
        nombreCompleto: "Rocío Leonel Gómez",
        nombres: "Rocío",
        apellidoMaterno: "Leonel",
        apellidoPaterno: "Gómez",
        porcentajeParticipacion: 100,
      },
    },
    {
      type: "profesores",
      id: "L03040813",
      attributes: {
        nombreCompleto: "Luis Octavio Castaños Cervantes",
        nombres: "Luis Octavio",
        apellidoMaterno: "Castaños",
        apellidoPaterno: "Cervantes",
        porcentajeParticipacion: 60,
      },
    },
    {
      type: "profesores",
      id: "L03121151",
      attributes: {
        nombreCompleto: "David García Gudiño",
        nombres: "David",
        apellidoMaterno: "García",
        apellidoPaterno: "Gudiño",
        porcentajeParticipacion: 40,
      },
    },
    {
      type: "profesores",
      id: "L03121408",
      attributes: {
        nombreCompleto: "Carlos Eduardo Canto Escamilla",
        nombres: "Carlos Eduardo",
        apellidoMaterno: "Canto",
        apellidoPaterno: "Escamilla",
        porcentajeParticipacion: 40,
      },
    },
    {
      type: "profesores",
      id: "L03515916",
      attributes: {
        nombreCompleto: "Marisol Rodríguez Arcos",
        nombres: "Marisol",
        apellidoMaterno: "Rodríguez",
        apellidoPaterno: "Arcos",
        porcentajeParticipacion: 60,
      },
    },
    {
      type: "tipos-de-materia",
      id: "ACAD",
      attributes: { descripcionTipoMateria: "Materia Academica" },
    },
    {
      type: "tipos-de-materia",
      id: "EACD",
      attributes: { descripcionTipoMateria: "Materia Extra Academica" },
    },
    {
      type: "atributos-de-curso",
      id: "COFI",
      attributes: { descripcionAtributo: "Curso Oficial (SACS1)" },
    },
    {
      type: "atributos-de-curso",
      id: "CSLI",
      attributes: { descripcionAtributo: "Life" },
    },
    {
      type: "atributos-de-curso",
      id: "MT21",
      attributes: { descripcionAtributo: "UF CANVAS + ELUMEN" },
    },
    {
      type: "atributos-de-curso",
      id: "PMT2",
      attributes: { descripcionAtributo: "Período 2 MT21" },
    },
    {
      type: "atributos-de-curso",
      id: "STEC",
      attributes: { descripcionAtributo: "Semana Tec" },
    },
    {
      type: "atributos-de-curso",
      id: "PMT1",
      attributes: { descripcionAtributo: "Período 1 MT21" },
    },
    {
      type: "atributos-de-curso",
      id: "LIFE",
      attributes: { descripcionAtributo: "Liderazgo y Formación Estudian" },
    },
    {
      type: "atributos-de-curso",
      id: "PMT3",
      attributes: { descripcionAtributo: "Período 3 MT21" },
    },
    {
      type: "atributos-de-curso",
      id: "PMT6",
      attributes: { descripcionAtributo: "Períodos 1-3 MT21" },
    },
    {
      type: "atributos-de-curso",
      id: "PMT4",
      attributes: { descripcionAtributo: "Períodos 1-2 MT21" },
    },
  ],
};
