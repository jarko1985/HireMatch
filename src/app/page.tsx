import axios from "axios";
import { cookies } from "next/headers";

export async function getUser() {
  try {
    const token = cookies().get("token");
    const response = await axios.get(
      "http://localhost:3000/api/users/currentuser",
      {
        headers: {
          Cookie: `token=${token?.value}`
        },
      }
    );
    return response.data.data;
    console.log(response.data.data);
  } catch (error: any) {
    console.log(error);
  }
}

export default async function Home() {
  const user: any = await getUser();
  return <h1>current User Name : {user && user.name}</h1>;
}


