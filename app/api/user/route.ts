import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

interface UserInterface {
  id: string;
  name: string;
  surname1: string;
  surname2: string;
  birthdate: string;
  pfp: string;
}

interface TokenInterface {
  JWT: string;
  oAuth: string;
}

export async function GET(req: NextRequest) {
  let errorMsg: string[] = [];
  let resData: UserInterface | null = null;

  let token: TokenInterface | undefined;
  const tokenString = req.cookies.get("token");
  if (tokenString !== undefined) {
    try {
      token = JSON.parse(tokenString.value);
    } catch (err: any) {
      errorMsg.push(err.message);
    }
  }
  const userId = token?.JWT
    ? JSON.parse(Buffer.from(token.JWT.split(".")[1], "base64").toString()).iss
    : "";

  await axios
    .get((process.env.API_USER as string).replace("A0000", userId), {
      headers: {
        accept: "application/vnd.api+json",
        authorization: `Bearer ${token?.oAuth}`,
        "x-auth-jwt": token?.JWT,
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
    .get((process.env.API_PFP as string).replace("A0000", userId), {
      headers: {
        accept: "application/vnd.api+json",
        authorization: `Bearer ${token?.oAuth}`,
        "x-auth-jwt": token?.JWT,
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
