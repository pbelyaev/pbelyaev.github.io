import * as React from 'react';

import { GlobalContainer } from './components/GlobalContainer';
import { Sidebar } from './components/Sidebar';

export const App: React.FC = () => {
  return (
    <GlobalContainer>
      <Sidebar />
    </GlobalContainer>
  );
};
