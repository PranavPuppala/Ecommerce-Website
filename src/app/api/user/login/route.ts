import prisma from "@/db/db";
import { NextResponse } from "next/server";
import {hash} from 'bcrypt'
export async function POST(req: Request) {
    try{
        const body = await req.json();
        const {email, username, password} = body;

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