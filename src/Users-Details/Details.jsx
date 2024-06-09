// import React from 'react';

import { useLoaderData } from "react-router-dom";

const Details = () => {
  const user = useLoaderData();
  const {name,email,username}=user;
  console.log(user);
  return (
    <div>
      <h2>Details for users: {name}</h2>
      <p>{email}</p>
      <p>{username}</p>
    </div>
  );
};

export default Details;
