import { FunctionComponent } from 'react';

export const Footer: FunctionComponent = () => {
  return (
    <footer className="container px-4 py-8 mx-auto">
      <p className="text-sm text-gray-500 text-center">
        Made with <span className="text-red-600">&hearts;</span> using{' '}
        <a
          href="https://tailwindcss.com/"
          rel="noopener noreferrer"
          className="hover:underline"
          title="Tailwindcss website"
        >
          Tailwindcss
        </a>{' '}
        and{' '}
        <a
          href="https://mertjf.github.io/tailblocks/"
          rel="noopener noreferrer"
          className="hover:underline"
          title="Tailblocks website"
        >
          Tailblocks
        </a>
        .
      </p>
    </footer>
  );
};
