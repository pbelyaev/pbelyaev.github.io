import { FunctionComponent } from 'react';

import { Header } from './components/header';
import { BoringMessage } from './components/boring-message';
import { Footer } from './components/footer';

export const App: FunctionComponent = () => {
  return (
    <>
      <Header />
      <BoringMessage />
      <Footer />
    </>
  );
};
