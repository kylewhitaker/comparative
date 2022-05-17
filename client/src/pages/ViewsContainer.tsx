import { Box } from '@mui/material';
import { useCallback, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { StateContext } from '../core/StateContext';
import { useQuery } from '../core/useQuery.hook';
import { Dataset } from '../components/Dataset';

interface Props {}

export const ViewsContainer: React.FC<Props> = (props) => {
  const query = useQuery();
  const history = useHistory();
  const [isoCodes, setIsoCodes] = useState<string[]>([]);
  const { continents, countries } = useContext(StateContext);

  useEffect(() => {
    const queryIsoCodes =
      query
        .get('iso_code')
        ?.split(',')
        .filter((x) => !!x) || [];
    setIsoCodes(queryIsoCodes);
  }, [query]);

  const updateIsoCodes = useCallback(
    (newCode: string, index: number) => {
      const updatedIsoCodes = [...isoCodes];
      if (index >= updatedIsoCodes.length) updatedIsoCodes.push(newCode);
      else updatedIsoCodes[index] = newCode;
      history.push(`/?iso_code=${updatedIsoCodes.filter((x) => !!x).join(',')}`);
    },
    [history, isoCodes]
  );

  return (
    <Box style={{ display: 'flex', padding: '0.5rem' }}>
      {isoCodes.map((code, idx, arr) => {
        console.log(code);
        return (
          <Dataset
            key={`dataset-${idx}-of-${arr.length}`}
            iso_code={code}
            continents={continents}
            countries={countries}
            onChange={(newCode) => updateIsoCodes(newCode, idx)}
          />
        );
      })}
    </Box>
  );
};
