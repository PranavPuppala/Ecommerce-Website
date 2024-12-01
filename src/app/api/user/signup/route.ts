import prisma from "@/db/db";
import { NextResponse } from "next/server";
import {hash} from 'bcrypt'
import * as z from "zod" 
//schema for input validation
const userSchema = z.object({
    email: z.string().min(1, {
      message: "Email is required",
    }).email('Invalid email'),
    password: z.string().min(1, 'Password is requied').min(8, 'Password must have 8 characters'),
  });


export async function POST(req: Request) {
    try{
        const body = await req.json();
        const {email, password} = userSchema.parse(body);

        //check if user exists
        const existingUser = await prisma.user.findUnique({
            where: {
                email: email
            }
        });
        if(existingUser){
            return NextResponse.json({user: null, message: "This email is currently in use!"}, {status: 409})
        }

        const hashedPassword = await hash(password, 10) //encrypt password


        //create user
        const newUser = await prisma.user.create({
            data:{
                email,
                password: hashedPassword
            }
        });

        //return everthing about user except password for security purposes
        const {password: newUserPassword, ...rest} = newUser;


        return NextResponse.json({user: newUser, message: "User created successfully"},{status: 200}); 
    }catch(error){
        return NextResponse.json({message: "Something went wrong"},{status: 500}); 
    }
}