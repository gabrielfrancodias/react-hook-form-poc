import React from 'react';
import { useForm,  } from 'react-hook-form';
import * as yup from 'yup';

import Input from './Input';
import logo from './logo.svg';
import './App.css';

function App() {
  const validationSchema = yup.object().shape({
    email: yup.string().email('E-mail inválido').required('E-mail obrigatório'),
    password: yup.string().required('Senha obrigatória').min(6, 'A senha deve ter no mínimo 6 caracteres')
    .matches(/"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$"/, 'A senha deve conter entre 8 a 10 caracteres, letra maiúscula, minúscula e caractere especial'),
  })

  const { register, handleSubmit, errors } = useForm({
    validationSchema
  });

  function onSubmit(values) {
    console.log(values);
  }

  console.log(errors);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 300 }}>
            <form
              style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
              onSubmit={handleSubmit(onSubmit)}

            >
              <Input name="email" label="E-mail" errors={errors} ref={register} />
              <Input name="password" label="Senha" errors={errors} type="password" ref={register} />
              <button type="submit" className="button"> Enviar </button>
            </form>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
