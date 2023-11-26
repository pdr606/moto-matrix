'use client';
import { useState } from 'react';

import { Button } from '../button';

import S from './form.module.css';

export function Form({ handleSave }) {
  const [formData, setFormData] = useState({
    employee: '',
    model: '',
    plate: '',
  });

  const handleChange = (e) => {
    setFormData((oldValue) => ({
      ...oldValue,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className={S.form}>
      <h2 className={S.title}>Cadastre seu veículo</h2>
      <div className={S.input__box}>
        <input
          className={S.input__field}
          type="text"
          name="employee"
          id="employee"
          placeholder="Nome"
          onChange={handleChange}
        />
      </div>
      <div className={S.input__box}>
        <input
          className={S.input__field}
          type="text"
          name="model"
          placeholder="Modelo"
          onChange={handleChange}
        />
      </div>
      <div className={S.input__box}>
        <input
          className={S.input__field}
          type="text"
          name="plate"
          placeholder="Placa"
          onChange={handleChange}
        />
      </div>
      <div className={S.button__box}>
        <Button primary label="Salvar" onClick={() => handleSave(formData)} />
      </div>
    </div>
  );
}
