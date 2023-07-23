import jwt from "jsonwebtoken";
import { connectDB } from "@/config/dbConfig";
import User from "@/models/UserModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

connectDB();

export async function POST(request: NextRequest) {
  try {
    const requestBody = await request.json();
    //Check If User Exist
    const user = await User.findOne({ email: requestBody.email });
    if (!user) {
      throw new Error("User Does not Exist!!");
    }
    //compare Passwords
    const validPassword = await bcrypt.compare(
      requestBody.password,
      user.password
    );
    if (!validPassword) {
      throw new Error("Invalid Credentials!!");
    }

    //If User Exist and Valid Password
    const signedData = {
      userId: user._id,
      email: user.email,
    };
    const token = jwt.sign(signedData, process.env.JWT_SECRET!, {
      expiresIn: "2d",
    });

    const response = NextResponse.json({message:'Login Successfull'},{status:200});
    //Set Cookie

    response.cookies.set('token',token,{
        httpOnly:true,
        maxAge:60 * 60 * 24 * 1000,
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
