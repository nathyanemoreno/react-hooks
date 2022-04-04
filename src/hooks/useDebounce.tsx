import React from "react";

type DebounceTypes = {
  delay: number | 1000;
};

export interface DebounceProps extends DebounceTypes {
  callback: () => void;
}

export const useDebounce = (props: DebounceProps) => {
  let timeout = setTimeout(props.callback, props.delay);

  return (...args: []) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      props.callback(...args);
    }, props.delay);
  };
};
