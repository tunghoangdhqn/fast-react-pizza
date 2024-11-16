import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="bg-stone-600 p-4 uppercase text-stone-50">
      <p className="space-x-2 font-semibold text-stone-300">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
