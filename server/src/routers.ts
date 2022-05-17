import { Router } from 'express';
import { getCountries, getLocation } from './controllers';
import { getContinents } from './controllers/getContinents.controller';
import { IsoCode } from './core';

const continents = Router();
continents.get('/', getContinents());

const countries = Router();
countries.get('/', getCountries());

const location = Router();
location.get('/', getLocation(IsoCode.World));
location.get('/:iso_code', getLocation());

export const ROUTER = {
  continents,
  countries,
  location,
};
