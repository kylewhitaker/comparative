import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { fetchLocation, GetContinents, GetCountries, GetLocation } from '../core';
import { MultiChart } from './MultiChart';
import { InputAutocomplete } from './InputAutocomplete';
import { InputToggleButtons } from './InputToggleButtons';

interface Props {
  iso_code: string;
  continents: GetContinents[];
  countries: GetCountries[];
  onChange: (newCode: string) => void;
}

export const Dataset: React.FC<Props> = (props) => {
  const { iso_code, continents, countries } = props;
  const [continent, setContinent] = useState<string | null>(null);
  const [country, setCountry] = useState<string | null>(null);
  const [locationToggle, setLocationToggle] = useState<string | null>(null);
  const [locationData, setLocationData] = useState<GetLocation[]>([]);

  useEffect(() => {
    setContinent([...continents, ...countries].find((x) => x.iso_code === iso_code)?.continent || null);
    setCountry(countries.find((x) => x.iso_code === iso_code)?.location || null);
    if (continents.map((x) => x.iso_code).includes(iso_code)) setLocationToggle('continent');
    else setLocationToggle('country');
  }, [iso_code, continents, countries]);

  useEffect(() => {
    fetchLocation(iso_code)().then((data) => setLocationData(data));
  }, [iso_code]);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" width="100%">
      <InputToggleButtons
        options={['continent', 'country']}
        value={locationToggle}
        setValue={setLocationToggle}
        onChange={(newValue) => {
          switch (newValue) {
            case 'continent':
              setContinent(null);
              break;
            case 'country':
              setCountry(null);
              break;
            default:
              break;
          }
        }}
      />
      <Box style={{ display: 'flex', flexDirection: 'column', padding: '1rem' }}>
        {locationToggle === 'continent' && (
          <InputAutocomplete
            id="continent"
            label="Continent"
            options={continents.map((x) => x.continent)}
            value={continent}
            setValue={setContinent}
            onChange={(newValue) => {
              if (newValue === null) return;
              props.onChange(continents.find((x) => x.continent === newValue)?.iso_code || '');
            }}
            style={{ width: '20%', minWidth: '250px', padding: '1rem' }}
          />
        )}
        {locationToggle === 'country' && (
          <InputAutocomplete
            id="country"
            label="Country"
            options={countries.map((x) => x.location)}
            value={country}
            setValue={setCountry}
            onChange={(newValue) => {
              if (newValue === null) return;
              props.onChange(countries.find((x) => x.location === newValue)?.iso_code || '');
            }}
            style={{ width: '20%', minWidth: '250px', padding: '1rem' }}
          />
        )}
      </Box>
      <Box style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <MultiChart
          title="Cases"
          axisX={locationData.map((x) => x.date)}
          dataBar={locationData.map((x) => x.new_cases)}
          dataLine={locationData.map((x) => x.new_cases_smoothed)}
        />
        <MultiChart
          title="Deaths"
          axisX={locationData.map((x) => x.date)}
          dataBar={locationData.map((x) => x.new_deaths)}
          dataLine={locationData.map((x) => x.new_deaths_smoothed)}
        />
        <MultiChart
          title="Vaccinations"
          axisX={locationData.map((x) => x.date)}
          dataBar={locationData.map((x) => x.new_vaccinations)}
          dataLine={locationData.map((x) => x.new_vaccinations_smoothed)}
        />
        <MultiChart
          title="Tests"
          axisX={locationData.map((x) => x.date)}
          dataBar={locationData.map((x) => x.new_tests)}
          dataLine={locationData.map((x) => x.new_tests_smoothed)}
        />
      </Box>
    </Box>
  );
};
