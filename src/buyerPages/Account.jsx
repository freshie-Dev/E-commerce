import React, {useEffect} from 'react';
import {useLocation } from 'react-router-dom';
import Details from './buyerComponents/Details';
import Orders from './buyerComponents/Orders';
import UserContextProvider from '../context/UserContext';

export default function Account() {
  const location = useLocation().pathname;
  const {fetchInfo} = UserContextProvider();

  useEffect(() => {
    fetchInfo();
  }, [])
  let content = null;

  if (location === "/details") {
    content = <Details />;
  } else if (location === "/orders") {
    content = <Orders />;
  }

  console.log(location);

  return (
    <div>
      {content}
    </div>
  );
}
