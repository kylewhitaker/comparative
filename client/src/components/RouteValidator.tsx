import { PropsWithChildren, useContext, useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { StateContext } from '../core/StateContext';

export const RouteValidator: React.FC<PropsWithChildren<{}>> = (props) => {
  const { iso_code } = useParams<{ iso_code: string }>();
  const { routes } = useContext(StateContext);
  const [isValid, setIsValid] = useState<boolean>(true);

  useEffect(() => {
    if (routes.length === 0) return;
    if (routes.includes(iso_code)) return;
    setIsValid(false);
  }, [iso_code, routes]);

  if (!isValid) return <Redirect to="/" />;

  return <>{props.children}</>;
};
