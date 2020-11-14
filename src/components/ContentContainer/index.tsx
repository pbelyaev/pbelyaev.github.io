import { FunctionComponent } from 'react';

export const ContentContainer: FunctionComponent = ({ children }) => {
  return <div className="px-8 py-4 overflow-x-scroll h-screen">{children}</div>;
};
