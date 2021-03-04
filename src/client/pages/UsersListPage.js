import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";

import { fetchUsers } from "../actions";

const UsersList = () => {
  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const head = () => {
    return (
      <Helmet>
        <title>{`${users.length} Users Loaded`}</title>
        <meta property="og:title" content="Users List" />
      </Helmet>
    );
  };

  return (
    <div>
      {head()}
      List of Users
      <ul>
        {users.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

const loadData = (store) => {
  return store.dispatch(fetchUsers());
};

export default { loadData, component: UsersList };
