import React from "react";

interface ComponentProps {
  title: string;
}

const Component = (props: ComponentProps) => {
  return <div>{props.title}</div>;
};

export default Component;
