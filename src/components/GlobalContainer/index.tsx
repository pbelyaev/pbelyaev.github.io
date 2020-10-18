import * as React from 'react';

export const GlobalContainer: React.FunctionComponent = ({ children }) => {
  return <div className="grid grid-cols-global-container">{children}</div>;
};
