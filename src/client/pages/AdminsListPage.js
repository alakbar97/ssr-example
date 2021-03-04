import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchAdmins } from "../actions";
import requireAuth from "../components/hocs/requireAuth";

const AdminsListPage = () => {
  const dispatch = useDispatch();

  const admins = useSelector((state) => state.admins);

  useEffect(() => {
    dispatch(fetchAdmins());
  }, []);

  return (
    <div>
      <h2>Protected Data</h2>
      <ul>
        {admins.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

const loadData = (store) => {
  store.dispatch(fetchAdmins());
};

export default {
  component: requireAuth(AdminsListPage),
  loadData,
};
