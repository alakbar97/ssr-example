import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

export default (Child) => {
  const RequireAuth = (props) => {
    const auth = useSelector((state) => state.auth);

    switch (auth) {
      case false:
        return <Redirect to="/" />;

      case null:
        return <div>Loading...</div>;

      default:
        return <Child {...props} />;
    }
  };

  return RequireAuth;
};
