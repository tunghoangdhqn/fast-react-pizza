/* eslint-disable no-unused-vars */
import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreateItemQUantity, increateItemQUantity } from "./cartSlice";

export default function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button
        type="round"
        onClick={() => {
          dispatch(decreateItemQUantity(pizzaId));
        }}
      >
        -
      </Button>
      <span className="text-sm font-bold">{currentQuantity}</span>
      <Button
        type="round"
        onClick={() => {
          dispatch(increateItemQUantity(pizzaId));
        }}
      >
        +
      </Button>
    </div>
  );
}
