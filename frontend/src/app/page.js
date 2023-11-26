'use client';
import React, { useEffect, useState } from 'react';

import { Form } from '@/components/form';
import { Table } from '@/components/table';

import S from './page.module.css';

export default function Home() {
  const [vehicles, setVehicles] = useState([]);

  const handleSave = async (vehicle) => {
    await fetch('http://localhost:8080/api/v1/vehicle', {
      method: 'POST',
      body: {
        model: 'CAR',
        plate: '1',
        employee: 'José',
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/vehicle', {
      mode: 'no-cors',
    }).then((response) => {
      console.log(response);
    });
  }, []);

  return (
    <main className={S.main}>
      <div className={S.nav}>
        <h1>MotoMatrix</h1>
      </div>
      <Form handleSave={handleSave} />
      <Table vehicles={vehicles} />
    </main>
  );
}
