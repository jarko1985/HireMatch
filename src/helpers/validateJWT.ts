import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

export const validateJWT = async (request: NextRequest) => {
  try {
    const token = request.cookies.get("token")?.value;
    if (!token) {
      throw new Error("Token not Found!!");
    }
    const decodedData: any = await jwt.verify(token, process.env.JWT_SECRET!);
    return decodedData.userId;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
