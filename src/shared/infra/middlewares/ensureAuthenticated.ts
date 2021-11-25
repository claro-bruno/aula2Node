import { AppError } from "@shared/errors/AppError";
import { UsersRepository } from "@modules/accounts/infra/repositories/UsersRepository";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";


interface IPayload {
  sub: string;
}


export async function ensureAuthenticated (request: Request, response: Response, next: NextFunction) {

  const { authorization }  = request.headers;

  if(!authorization) {
    throw new AppError('Token missing', 401);
  }

  const [, token] = authorization.split(' ');
  try {
    const { sub: user_id } = verify(token, '33ed71cb031edc8a9dd1a09c5759eded') as IPayload;

    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(user_id);

    if(!user) {
      throw new AppError('User does not exists!', 401);
    }

    request.user = {
      id: user_id,
    };
    next();
  }
  catch (error) {
    throw new AppError('Invalid token!', 401);
  }
  
}