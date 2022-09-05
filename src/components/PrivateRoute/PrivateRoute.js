import { Navigate, Outlet } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { getUserTokenSelector } from 'redux/auth/auth-selectors';

export default function PrivateRoute() {
  const isToken = useSelector(getUserTokenSelector);
  return <>{isToken ? <Outlet /> : <Navigate to="/login" />}</>;
}
