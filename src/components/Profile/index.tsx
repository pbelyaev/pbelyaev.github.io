import { FunctionComponent } from 'react';

export const Profile: FunctionComponent = () => {
  return (
    <div className="flex space-x-4 align-top p-4">
      <img
        src="https://avatars1.githubusercontent.com/u/6713852"
        alt="Profile picture"
        className="h-24 rounded-md"
      />
      <div className="flex flex-col flex-wrap flex-1">
        <p className="text-2xl text-gray-800 leading-none">Pavel Beliaev</p>
        <p className="text-sm text-gray-600">Frontend Engineer</p>
        <p className="text-sm text-gray-600 mt-auto">github</p>
      </div>
    </div>
  );
};
