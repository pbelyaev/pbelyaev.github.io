import * as React from 'react';

export const Profile: React.FunctionComponent = () => {
  return (
    <div className="flex space-x-4 align-top">
      <img
        src="https://avatars1.githubusercontent.com/u/6713852"
        alt="Profile picture"
        className="h-24 rounded-md"
      />
      <div className="flex flex-col flex-wrap flex-1">
        <p className="text-2xl text-gray-800 leading-none">Pavel Beliaev</p>
        <p className="text-sm text-gray-600">Frontend Engineer</p>
        <p className="text-sm text-gray-600 mt-auto">
          <img src={require('./assets/github.svg')} />
        </p>
      </div>
    </div>
  );
};
