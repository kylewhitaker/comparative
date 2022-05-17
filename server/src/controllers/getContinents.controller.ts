import { Request, Response } from 'express';
import { db } from '../core';
import { buildResponse } from '../core/utils';

export function getContinents() {
  return async function (req: Request, res: Response) {
    const continentsRaw = await db
      .findMany({
        where: { NOT: { continent: '' } },
        distinct: ['continent'],
        select: { continent: true },
      })
      .then((results) => results.map((o) => o.continent));

    const continents = await db
      .findMany({
        where: { location: { in: [...continentsRaw, 'World'] } },
        distinct: ['location'],
        select: { iso_code: true, location: true },
      })
      .then((results) => results.map((o) => ({ iso_code: o.iso_code, continent: o.location })));

    res.json(buildResponse(req, continents));
  };
}
