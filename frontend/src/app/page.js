import React from 'react';

import S from './page.module.css';

import { LandingPage } from '@/components/views/home';

export default function Home() {
  return (
    <main className={S.main}>
      <div className={S.nav}>
        <h1>MotoMatrix</h1>
      </div>
      <LandingPage />
    </main>
  );
}
