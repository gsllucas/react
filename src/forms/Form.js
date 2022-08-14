import React, { useEffect, useState } from 'react';
import { APP_URL_USER } from '../config/constants/appUrls';

// nome, email, senha, cep, rua, numero, bairro, cidade e estado

const Form = () => {
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(null);

  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
  });

  // function aa() {
  //   console.log(JSON.stringify(form));
  // }

  // aa();

  function onChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  async function onSubmit(event) {
    event.preventDefault();
    try {
      setLoading(true);
      const result = await fetch(APP_URL_USER, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(form),
      });
      const resultJson = await result.json();
      console.log(resultJson);
      setIsSuccess(true);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setIsSuccess(false);
    }
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        {Object.keys(form).map((key, index) => {
          return (
            <div key={key}>
              <label htmlFor={key}>{key}</label>
              <input
                id={key}
                value={Object.values(form)[index]}
                type={
                  key === 'senha'
                    ? 'password'
                    : key === 'email'
                    ? 'email'
                    : 'text'
                }
                style={{ display: 'block', marginBottom: '24px' }}
                onChange={onChange}
              ></input>
            </div>
          );
        })}
        <button>Enviar</button>
      </form>
      <div>{isSuccess && <p>Seu formulário foi enviado com sucesso!</p>}</div>
      <div>
        {isSuccess === false && (
          <p>Ocorreu um erro ao enviar o seu formulário!</p>
        )}
      </div>
    </>
  );
};

export default Form;
