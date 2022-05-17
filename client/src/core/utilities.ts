import { ApiResponse, GetContinents, GetCountries, GetLocation } from './interfaces';

const customFetch =
  <T>(slug: string) =>
  async (): Promise<T[]> => {
    return fetch(`${process.env.REACT_APP_API_URL}${slug}`)
      .then((response) => response.json() as Promise<ApiResponse<T>>)
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
        return [];
      });
  };

export const fetchContinents = customFetch<GetContinents>('/continents');
export const fetchCountries = customFetch<GetCountries>('/countries');
export const fetchLocation = (isoCode: string) => customFetch<GetLocation>(`/location/${isoCode}`);

export const stringSort = (a: string, b: string): number => {
  if (a < b) return -1;
  if (b < a) return 1;
  return 0;
};
