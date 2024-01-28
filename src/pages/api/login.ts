// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import jwt from 'jsonwebtoken'
import { db } from "@/server/db";

type Data = {
  data?: {
    token?: string;
    user?: {
      username: string;
      email: string;
      id: string;
    }
  };
  error?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if(req.method !== 'POST'){
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  const { email, password } = req.body;
  
  try {
    let user = await db.user.findUnique({ where: { email: email }})

    if(!user){
      throw new Error('User not found');
    }
  
    /**
     * Never save in database a password without encrypt, but now it's only for study next auth
     */
    if(user.password !== password){
      throw new Error('Password incorrect');
    }

    const token = jwt.sign({
      exp: 60 * 60 * 24,
      data: {
        id: user.id,
        email: user.email,
      }
    }, process.env.SECRET_TOKEN!);

    return res.status(200).json({ data: { 
      token: token,
      user: {
        username: user.name,
        email: user.email,
        id: user.id
      }
    } });
  } catch(error: any){
    return res.status(500).json({ error: error.message });
  }
}
