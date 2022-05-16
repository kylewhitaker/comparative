import { useEffect, useState } from 'react';

export const Home: React.FC = (props) => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    fetch('http://localhost:4200/')
      .then((response) => response.json())
      .then((body) => setData(body));
  });

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Location</th>
            <th>Date</th>
            <th>New Cases</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row: any) => {
            return (
              <tr key={`${row.iso_code}_${row.date}`}>
                <td>{row.iso_code}</td>
                <td>{row.location}</td>
                <td>{row.date}</td>
                <td>{row.new_cases}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
