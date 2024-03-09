import { ChangeEvent, useState } from 'react';

export const useForm = ( initialState: Record<string, string> ) => {
  const [ valueForm, setValueForm ] = useState( initialState );

  const handleChange = ( e: ChangeEvent<HTMLInputElement> ) => {
    setValueForm( { ...valueForm, [ e.target.name ]: e.target.value } );
  };

  return {
    handleChange,
    valueForm
  };
};