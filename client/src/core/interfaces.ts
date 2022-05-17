export interface ApiResponse<T> {
  route: string;
  data: T[];
}

export interface GetContinents {
  iso_code: string;
  continent: string;
}

export interface GetCountries {
  iso_code: string;
  continent: string;
  location: string;
}

export interface GetLocation {
  iso_code: string;
  continent: string;
  location: string;
  date: string;
  total_cases: number;
  total_cases_per_million: number;
  new_cases: number;
  new_cases_smoothed: number;
  new_cases_per_million: number;
  new_cases_smoothed_per_million: number;
  total_deaths: number;
  total_deaths_per_million: number;
  new_deaths: number;
  new_deaths_smoothed: number;
  new_deaths_per_million: number;
  new_deaths_smoothed_per_million: number;
  icu_patients: number;
  icu_patients_per_million: number;
  hosp_patients: number;
  hosp_patients_per_million: number;
  weekly_icu_admissions: number;
  weekly_icu_admissions_per_million: number;
  weekly_hosp_admissions: number;
  weekly_hosp_admissions_per_million: number;
  population: number;
  population_density: number;
  median_age: number;
  aged_65_older: number;
  aged_70_older: number;
  female_smokers: number;
  male_smokers: number;
  hospital_beds_per_thousand: number;
  life_expectancy: number;
  total_tests: number;
  total_tests_per_thousand: number;
  new_tests: number;
  new_tests_smoothed: number;
  new_tests_per_thousand: number;
  new_tests_smoothed_per_thousand: number;
  positive_rate: number;
  tests_per_case: number;
  tests_units: string;
  total_vaccinations: number;
  people_vaccinated: number;
  people_fully_vaccinated: number;
  total_boosters: number;
  new_vaccinations: number;
  new_vaccinations_smoothed: number;
  total_vaccinations_per_hundred: number;
  people_vaccinated_per_hundred: number;
  people_fully_vaccinated_per_hundred: number;
  total_boosters_per_hundred: number;
  new_vaccinations_smoothed_per_million: number;
  new_people_vaccinated_smoothed: number;
  new_people_vaccinated_smoothed_per_hundred: number;
}
