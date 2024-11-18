/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function Button({ disabled, children, to, type }) {
  const base =
    "inline-block rounded-full bg-yellow-500 font-semibold uppercase tracking-wide text-stone-700 outline-none transition-colors duration-300 hover:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 active:bg-stone-100 sm:py-4 md:px-6";

  const styles = {
    primary: base + "px-4 py-3 md:px-6 md:py-4",
    small: base + "px-2 py-2 md:px-3 md:py-2 text-xs"
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
