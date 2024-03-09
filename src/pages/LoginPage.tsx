import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { useForm } from '../hooks';
import { FormErrorMessage } from '../components';
import { AuthContext } from '../context/auth/authContext';

const initialFormValue = {
  email: '',
  password: ''
};

export const LoginPage = () => {

  const navigate = useNavigate();

  const { handleChange, valueForm } = useForm( initialFormValue );
  const { email, password } = valueForm;

  const [ passwordType, setPasswordType ] = useState( 'password' );
  const [ errorMessage, setErrorMessage ] = useState( '' );

  const { handleLogIn } = useContext( AuthContext );

  const handleChangePasswordType = ( e: ChangeEvent<HTMLInputElement> ) => {
    if ( e.target.checked ) {
      setPasswordType( 'text' );
    } else {
      setPasswordType( 'password' );
    }

  };

  const handleSubmit = ( e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault();

    setErrorMessage( '' );

    if ( !email || !password ) {
      return setErrorMessage( 'Please enter your credentials' );
    }

    handleLogIn();
    navigate( '/', { replace: true } );
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-b from-blue-950 to-blue-600 flex justify-center items-center">
      <form className="bg-white py-8 px-16 rounded-md shadow-md" onSubmit={ handleSubmit }>

        <h2 className="font-semibold text-3xl text-center">Log in</h2>
        <br />
        <p>Please enter your email and password</p>

        <div className="flex flex-col gap-2 mt-4">
          <label
            className="font-light"
          >Email:
          </label>
          <input
            className="p-2 border-2 bg-indigo-100 border-transparent focus:outline-none focus:border-b-blue-950 transition-colors duration-300 ease-in-out"
            name="email"
            type="email"
            onChange={ handleChange }
            value={ email }
            placeholder='Email'
          />

          <label
            className="font-light"
          >Password:</label>
          <input
            className="p-2 border-2 bg-indigo-100 border-transparent focus:outline-none focus:border-b-blue-950 transition-colors duration-300 ease-in-out"
            name="password"
            type={ passwordType }
            onChange={ handleChange }
            value={ password }
            placeholder='Password'
          />

          <label htmlFor="changeTypePassword" className="cursor-pointer">
            <input type="checkbox" id="changeTypePassword" onChange={ handleChangePasswordType } /> Show password
          </label>
        </div>

        <div className="mt-3 flex justify-center">
          <button
            type="submit"
            className="text-white w-2/4 rounded-lg px-4 py-3 font-semibold bg-gradient-to-r from-blue-950 to-blue-800 hover:from-blue-800 hover:to-blue-500"
          >
            Log in
          </button>
        </div>


        {
          errorMessage &&
          (
            <div className="flex justify-center mt-3">
              <FormErrorMessage message={ errorMessage } />
            </div>
          )
        }
      </form>
    </div>
  );
};