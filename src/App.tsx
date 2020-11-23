import { FunctionComponent } from 'react';

import { Header } from './components/Header';
import { BoringMessage } from './components/BoringMessage';
import { Footer } from './components/Footer';

export const App: FunctionComponent = () => {
  return (
    <>
      <Header />
      <BoringMessage />
      <Footer />
    </>
  );
};
