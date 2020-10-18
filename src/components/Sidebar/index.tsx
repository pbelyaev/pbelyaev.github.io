import * as React from 'react';

import { Profile } from '../Profile';

export const Sidebar: React.FunctionComponent = () => {
  return (
    <aside className="h-screen bg-white shadow-md center px-4 py-8">
      <Profile />
    </aside>
  );
};
