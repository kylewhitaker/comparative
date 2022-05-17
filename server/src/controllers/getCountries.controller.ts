import { Request, Response } from 'express';
import { db } from '../core';
import { buildResponse } from '../core/utils';

export function getCountries() {
  return async function (req: Request, res: Response) {
    const countries = await db.findMany({
      where: { NOT: { continent: '' } },
      distinct: ['location'],
      select: { iso_code: true, continent: true, location: true },
    });

    res.json(buildResponse(req, countries));
  };
}
