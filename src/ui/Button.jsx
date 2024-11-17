import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function Button({ disabled, children, to }) {
  const className =
    "inline-block rounded-full bg-yellow-500 px-4 py-3 font-semibold uppercase tracking-wide text-stone-700 outline-none transition-colors duration-300 hover:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 active:bg-stone-100 sm:py-4 md:px-6";
  if (to)
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
}
