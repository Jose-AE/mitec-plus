const axios = require("axios");

axios
  .get(
    "https://apigateway.tec.mx/tec-de-monterrey/api/tec/alumnos/A01028493/horario-de-cursos?claveEjercicioAcademico=202311",
    {
      headers: {
        accept: "application/vnd.api+json",
        authorization:
          "Bearer AAIgMWVmZGZmNGYyNWQ1YTZiYzhmODVjZjRhZjE0NmEyYjeXBqnY046l9dGEmvTf4XtyB3y7TqdYcYe_SGKLZvfb8OWIXlppD_dcGdND1T6jAn3cWdUeIjK7Sb6_gqClHKUwnsUTnB3e_qqH6rj1VtAhoeZfNWMB9PFNkDpFHQnxDzw",

        "x-auth-jwt":
          "eyJraWQiOiJoczI1Ni1rZXkiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBMDEwMjg0OTMiLCJzdWIiOiJBMDEwMjg0OTNAdGVjLm14IiwiYXVkIjoiQWx1bW5vIFRlY010eSIsImV4cCI6MTY4NzMyMDQzOSwiaWF0IjoxNjg3MzE2ODM5LCJ0ZWMtaWQtcGVyc29uYSI6IjAzNDIwMzU1In0.bO-RhYmo9D5AqLmEsE4T9HmUXAdkwYXOav9QHYCxDwU",
      },
    }
  )
  .then((response) => {
    // Handle success
    console.log(response.data);
  })
  .catch((error) => {
    // Handle error
    console.error(error);
  });

//https://amfs.tec.mx/nidp/portal?locale=en_US
