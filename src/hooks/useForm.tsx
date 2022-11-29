import React, {useState} from 'react';

export const useForm = <T extends Object>(initalState: T) => {
  const [state, setState] = useState(initalState);

  const onChange = (value: string, field: keyof T) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  return {
    ...state,
    onChange,
  };
};
