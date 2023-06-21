const axios = require("axios");

const url =
  "https://apigateway.tec.mx/tec-de-monterrey/api/analitica/alumnos/A01028493/grupos";
const headers = {
  accept: "application/vnd.api+json",
  authorization:
    "Bearer AAIgMWVmZGZmNGYyNWQ1YTZiYzhmODVjZjRhZjE0NmEyYjfK_VjZ2Zc-qysHoVbEXpETjXUla_VhSla2vRPZi0HujZEyXsFoA0Hz9VkolOLhniNPJP_LF1wkFJdT2y5BB0VNqo_86wyEY1ujIjKW0aYHa8udpXGQqLERm1PhrVGiG1o",
  "sec-ch-ua":
    '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-platform": '"Windows"',
  "x-auth-jwt":
    "eyJraWQiOiJoczI1Ni1rZXkiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBMDEwMjg0OTMiLCJzdWIiOiJBMDEwMjg0OTNAdGVjLm14IiwiYXVkIjoiQWx1bW5vIFRlY010eSIsImV4cCI6MTY4NzMzMTU2OCwiaWF0IjoxNjg3MzI3OTY4LCJ0ZWMtaWQtcGVyc29uYSI6IjAzNDIwMzU1In0.2C_8iNXhbbTPQ9Wxvoequa-pzY-LHWAkoND1-X0F3VE",
  Referer: "https://mitec.itesm.mx/",
  "Referrer-Policy": "strict-origin-when-cross-origin",
};

axios
  .get(url, { headers })
  .then((response) => {
    // Handle response data here
    console.log(response.data);
  })
  .catch((error) => {
    // Handle error here
    console.error(error);
  });
