import { Prisma } from '../../prisma/generated';
import { Grouping } from './enums';

// https://github.com/owid/covid-19-data/blob/master/public/data/README.md#the-complete-our-world-in-data-covid-19-dataset

export const SELECT: Record<Grouping, Partial<Prisma.OwidCovidLatestSelect>> = {
  BASE: {
    iso_code: true,
    continent: true,
    location: true,
    date: true,
  },
  CASES: {
    total_cases: true,
    total_cases_per_million: true,
    new_cases: true,
    new_cases_smoothed: true,
    new_cases_per_million: true,
    new_cases_smoothed_per_million: true,
  },
  DEATHS: {
    total_deaths: true,
    total_deaths_per_million: true,
    new_deaths: true,
    new_deaths_smoothed: true,
    new_deaths_per_million: true,
    new_deaths_smoothed_per_million: true,
  },
  HOSPITALS: {
    icu_patients: true,
    icu_patients_per_million: true,
    hosp_patients: true,
    hosp_patients_per_million: true,
    weekly_icu_admissions: true,
    weekly_icu_admissions_per_million: true,
    weekly_hosp_admissions: true,
    weekly_hosp_admissions_per_million: true,
  },
  TESTS: {
    total_tests: true,
    total_tests_per_thousand: true,
    new_tests: true,
    new_tests_smoothed: true,
    new_tests_per_thousand: true,
    new_tests_smoothed_per_thousand: true,
    positive_rate: true,
    tests_per_case: true,
    tests_units: true,
  },
  VACCINATIONS: {
    total_vaccinations: true,
    people_vaccinated: true,
    people_fully_vaccinated: true,
    total_boosters: true,
    new_vaccinations: true,
    new_vaccinations_smoothed: true,
    total_vaccinations_per_hundred: true,
    people_vaccinated_per_hundred: true,
    people_fully_vaccinated_per_hundred: true,
    total_boosters_per_hundred: true,
    new_vaccinations_smoothed_per_million: true,
    new_people_vaccinated_smoothed: true,
    new_people_vaccinated_smoothed_per_hundred: true,
  },
  OTHERS: {
    population: true,
    population_density: true,
    median_age: true,
    aged_65_older: true,
    aged_70_older: true,
    female_smokers: true,
    male_smokers: true,
    hospital_beds_per_thousand: true,
    life_expectancy: true,
  },
};

export const SELECT_ALL = {
  ...SELECT.BASE,
  ...SELECT.CASES,
  ...SELECT.DEATHS,
  ...SELECT.HOSPITALS,
  ...SELECT.OTHERS,
  ...SELECT.TESTS,
  ...SELECT.VACCINATIONS,
};
