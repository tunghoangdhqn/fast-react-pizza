/* eslint-disable no-unused-vars */
import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  console.log(navigation);

  return (
    <div className="grid h-screen grid-rows-[auto_1fr,auto] bg-stone-100">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <div className="overflow-y-scroll">
            <main className="mx-auto max-w-3xl">
              <Outlet />
            </main>
          </div>
          <CartOverview />
        </>
      )}
    </div>
  );
}
