import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { GetContinents, GetCountries } from './interfaces';
import { fetchContinents, fetchCountries, stringSort } from './utilities';

interface StateContextProps {
  continents: GetContinents[];
  countries: GetCountries[];
  routes: string[];
}

export const StateContext = createContext<StateContextProps>({
  continents: [],
  countries: [],
  routes: [],
} as StateContextProps);

export const StateProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [continents, setContinents] = useState<GetContinents[]>([]);
  const [countries, setCountries] = useState<GetCountries[]>([]);
  const [routes, setRoutes] = useState<string[]>([]);

  useEffect(() => {
    fetchContinents().then((data) => setContinents(data.sort((a, b) => stringSort(a.continent, b.continent))));
    fetchCountries().then((data) => setCountries(data.sort((a, b) => stringSort(a.location, b.location))));
  }, []);

  useEffect(() => {
    if (continents.length > 0 && countries.length > 0) {
      setRoutes([...continents, ...countries].map((x) => x.iso_code));
    }
  }, [countries, continents]);

  return <StateContext.Provider value={{ continents, countries, routes }}>{children}</StateContext.Provider>;
};
