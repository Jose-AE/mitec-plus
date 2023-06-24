import { NextResponse } from "next/server";
import axios from "axios";

const ep = process.env.NEXT_PUBLIC_TEST_SECRET as string;
const c1 = JSON.parse(ep).oA;
const c2 = JSON.parse(ep).jW;

interface UserInterface {
  id: string;
  name: string;
  surname1: string;
  surname2: string;
  birthdate: string;
  pfp: string;
}

export async function GET(request: Request) {
  let errorMsg: string[] = [];
  let resData: UserInterface | null = null;

  await axios
    .get(process.env.API_USER as string, {
      headers: {
        accept: "application/vnd.api+json",
        authorization: `Bearer ${c1}`,
        "x-auth-jwt": c2,
      },
    })
    .then((res) => {
      resData = {
        id: res.data.data.attributes.numeroMatricula,
        name: res.data.data.attributes.nombre,
        surname1: res.data.data.attributes.apellidoPaterno,
        surname2: res.data.data.attributes.apellidoMaterno,
        birthdate: res.data.data.attributes.fechaNacimiento,
        pfp: "",
      };
    })

    .catch((error) => {
      errorMsg.push(error.message);
    });

  await axios
    .get(process.env.API_PFP as string, {
      headers: {
        accept: "application/vnd.api+json",
        authorization: `Bearer ${c1}`,
        "x-auth-jwt": c2,
      },
    })
    .then((res) => {
      if (resData) {
        resData.pfp = `data:image/jpeg;base64,${res.data.data[0].attributes.contenido}`;
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
