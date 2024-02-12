import React from "react";

export type profileProps = {
  name: string;
};
export const Profile = ({ name }: profileProps) => {
  return <div>prvate profile component name is {name}</div>;
};
