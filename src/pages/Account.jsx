import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Details from './components/Details';
import Orders from './components/Orders';

export default function Account() {
  const navigate = useNavigate();
  const location = useLocation().pathname;

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
