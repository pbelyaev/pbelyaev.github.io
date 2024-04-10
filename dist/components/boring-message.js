import { jsx as _jsx, jsxs as _jsxs } from "../../_snowpack/pkg/react/jsx-runtime.js";
export const BoringMessage = () => {
  return /*#__PURE__*/_jsx("section", {
    className: "container mx-auto flex flex-col px-5 py-24 justify-center items-center text-gray-700",
    children: /*#__PURE__*/_jsxs("div", {
      className: "w-full md:w-2/3 text-center",
      children: [/*#__PURE__*/_jsx("h1", {
        className: "title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900",
        children: "Interesting things are coming"
      }), /*#__PURE__*/_jsx("p", {
        className: "mb-8 leading-relaxed",
        children: "Something interesting should appear on this page but until it does this message and a few social links are here to entertain you."
      })]
    })
  });
};