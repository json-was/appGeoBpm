import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../store/store';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import {FirebaseAuth} from '../firebase/config';
import {login, logout} from '../store/auth/authSlice';
import {findByIdUserData} from '../store/auth/thunks';

export const useCheckAuth = () => {
  const {status} = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async user => {
      if (!user) return dispatch(logout());

      const {uid, email} = user;
      dispatch(login({uid, email}));
      dispatch(findByIdUserData(uid));
    });
  }, []);

  return status;
};
