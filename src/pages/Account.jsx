import React, {useEffect} from 'react';
import {useLocation } from 'react-router-dom';
import Details from './components/Details';
import Orders from './components/Orders';
import UserContextProvider from '../context/UserContext';

export default function Account() {
  const location = useLocation().pathname;
  const {fetchInfo} = UserContextProvider();

  useEffect(() => {
    fetchInfo();
  }, [])
  let content = null;

  if (location === "/account/details") {
    content = <Details />;
  } else if (location === "/account/orders") {
    content = <Orders />;
  }

  console.log(location);

  return (
    <div>
      {content}
    </div>
  );
}
