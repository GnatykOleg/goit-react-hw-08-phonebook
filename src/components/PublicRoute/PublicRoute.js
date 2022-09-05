import { Outlet, Navigate } from 'react-router-dom';
import { getUserTokenSelector } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

export default function PublicRoute() {
  const isToken = useSelector(getUserTokenSelector);
  return <>{isToken ? <Navigate to="/contacts" /> : <Outlet />}</>;
}
