import Heading from "./Heading";
import { Outlet } from "react-router-dom";
import {Provider} from "react-redux"
import appStore from "./redux/appStore";

const Container = () => {
  return (
    <Provider store={appStore}>
    <div className="min-h-screen h-[max-vontan] ">
      <header className="sticky top-0 z-50 bg-orange-100  shadow-md p-4">
        <Heading />
      </header>
      <main className="p-4 w-[90vw] h-auto md:p-8 mx-auto">
        <Outlet />
      </main>
    </div>
    </Provider>
  );
};

export default Container;
