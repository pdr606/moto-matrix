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

  const handleRefresh = async () => {
    const response = await fetch('http://localhost:8080/api/v1/vehicle');
    const data = await response.json();
    setVehicles(data);
  };

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
