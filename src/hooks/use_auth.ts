import { useSelector } from 'react-redux';
import { RootState } from '../store';

const useAuth = () => {
  return useSelector((state: RootState) => state.auth.isAuthenticated);
};

export default useAuth;
