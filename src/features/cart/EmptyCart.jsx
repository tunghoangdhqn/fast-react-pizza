import Button from "../../ui/Button";

function EmptyCart() {
  return (
    <div className="px-3 py-4">
      <Button to="/menu" type="primary">
        &larr; Back to menu
      </Button>

      <p className="mt-7 font-semibold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
