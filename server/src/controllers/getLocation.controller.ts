import { Request, Response } from 'express';
import { db, IsoCode, SELECT_ALL } from '../core';
import { buildResponse } from '../core/utils';

export function getLocation(iso_code?: IsoCode) {
  return async function (req: Request, res: Response) {
    const data = await db.findMany({
      where: { iso_code: iso_code || req.params.iso_code },
      select: SELECT_ALL,
    });
    res.json(buildResponse(req, data));
  };
}
