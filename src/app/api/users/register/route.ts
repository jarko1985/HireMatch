import { connectDB } from "@/config/dbConfig";
import User from "@/models/UserModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
connectDB();

export async function POST(request: NextRequest) {
  try {
    const requestBody = await request.json();
    //Check If User Exists
    const user = await User.findOne({ email: requestBody.email });
    if (user) {
      throw new Error("User Already exists!!");
    }

    //Hash Passowrd
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(requestBody.password, salt);
    requestBody.password = hashedPassword;

    //Create New User
    await User.create(requestBody);
    return NextResponse.json(
      { message: "User Created Successfully!!", success: true },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
