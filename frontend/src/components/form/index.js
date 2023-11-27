'use client';
import { useState } from 'react';

import { Button } from '../button';

import S from './form.module.css';

export const Form = () => {
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

  const handleSave = async (vehicle) => {
    await fetch('http://localhost:8080/api/v1/vehicle', {
      method: 'POST',
      body: JSON.stringify(vehicle),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => handleRefresh())
      .catch((error) => {
        console.log(error);
      });
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
};
