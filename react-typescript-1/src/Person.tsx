import React from "react";
type foo = {
  name: {
    first: string;
    last: string;
  };
};

export const Person = (props: foo) => {
  return (
    <div>
      Person---{props.name.first} {props.name.last}
    </div>
  );
};
