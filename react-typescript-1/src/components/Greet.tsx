import React from "react";
type grote = {
  name: string;
  isLoggedin: boolean;
};

export const Greet = (props: grote) => {
  return (
    <div>
      {props.isLoggedin ? ` hello wowo ${props.name}` : "go back and sign in"}
    </div>
  );
};
