import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../consts';

type PrivateRouteProps = {
  children: JSX.Element;
  authorizationStatus: boolean;
}

function PrivateRoute (props: PrivateRouteProps): JSX.Element {
  const {authorizationStatus, children} = props;

  return authorizationStatus ? children : <Navigate to={AppRoute.LOGIN} />;
}

export default PrivateRoute;
