import React, { Component } from "react";
import { Login } from "./Login";
import { profileProps } from "./Profile";
type privateProps = {
  isLoggedin: boolean;
  component: React.ComponentType<profileProps>;
};

export const Private = ({ isLoggedin, component: Component }: privateProps) => {
  if (isLoggedin) {
    return <Component name="dina" />;
  } else {
    return <Login />;
  }
};
