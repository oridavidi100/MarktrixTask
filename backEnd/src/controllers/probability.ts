import { getData } from '../helpers/fetchData';
import { NextFunction, Request, Response } from 'express';
import { Data } from '../../@types/types';

export const setResults = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name } = req.query;
    if (typeof name === 'string') {
      const result = await getData(name);
      if (result instanceof Error) {
        throw { status: 400, message: 'name not exist' };
      } else {
        return res.send(result);
      }
    }
  } catch (err) {
    next(err);
  }
};
