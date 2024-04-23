import { BadRequestError, IAuthPayload, NotAuthorizedError } from '@cedricngoune/shared';
import { config } from '@gateway/config';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

class AuthMiddleware {
  public verifyUser(req: Request, _res: Response, next: NextFunction) {
    if (!req.session?.jwt) {
      throw new NotAuthorizedError('Token is not available. Please login again', 'GatewayService verifyUser() method error');
    }
    try {
      const payload: IAuthPayload = verify(req.session?.jwt, `${config.JWT_TOKEN}`) as IAuthPayload;
      req.currentUser = payload;
    } catch (error) {
      throw new NotAuthorizedError('Something went wrong', 'GatewayService verifyUser() method error');
    }
    next();
  }

  checkAuthentication(req: Request, _res: Response, next: NextFunction) {
    if (!req.currentUser) {
      throw new BadRequestError('Authentication is required to access this route', 'GatewayService checkAuthentication() method error');
    }
    next();
  }
}

export const authMiddleware = new AuthMiddleware();
