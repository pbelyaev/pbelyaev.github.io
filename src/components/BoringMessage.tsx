import { FunctionComponent } from 'react';

export const BoringMessage: FunctionComponent = () => {
  return (
    <section className="container mx-auto flex flex-col px-5 py-24 justify-center items-center text-gray-700">
      <div className="w-full md:w-2/3 text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Interesting things are comming
        </h1>
        <p className="mb-8 leading-relaxed">
          Something interesting should appear on this page but until it does
          this message and a few social links are here to intertain you.
        </p>
      </div>
    </section>
  );
};
