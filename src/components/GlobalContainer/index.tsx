import { FunctionComponent } from 'react';

export const GlobalContainer: FunctionComponent = ({ children }) => {
  return <div className="grid grid-cols-global-container">{children}</div>;
};
