// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { db } from "@/server/db";
import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

type Data = {
  message: string;
}

const User = z.object({
  name: z.string(
    {
      required_error: 'Name is required',
      invalid_type_error: "Name must be a string",
    }
  ),
  email: z.string({
    required_error: 'Email is required',
    invalid_type_error: "Email must be a string",
  }).email(
    { message: "Invalid email address" }
  ),
  password: z.string(
    {
      required_error: 'Password is required',
      invalid_type_error: "Password must be a string",
    }
  ),
})

const EMAIL_ALREADY_REGISTERED = 'Email already registered';
const VALIDATION_ERROR = 'Validation error';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  try{
    const { name, email, password } = req.body;

    const user = User.safeParse(req.body);
    
    if(user.success) {
      const hasEmailRegistered = await db.user.findUnique({ where: { email: email }})

      if(hasEmailRegistered){
        throw new Error(EMAIL_ALREADY_REGISTERED);
      }
  
      await db.user.create({
        data: {
          name: name,
          email: email,
          password: password
        }
      })
    } else {

      throw new Error(VALIDATION_ERROR);
    }
  } catch (err: any) {
    res.status(500).json({ message: err.message });
    return
  }
  
  res.status(200).json({ message: 'ok'});
}
