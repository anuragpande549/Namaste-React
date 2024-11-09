import Heading from "./Heading";
import { Outlet } from "react-router-dom";

const Container = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b bg-orange-100">
      <header className="sticky top-0 z-50 bg-orange-100 shadow-md p-4">
        <Heading />
      </header>
      <main className="p-4 w-[90vw] h-auto md:p-8 mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Container;
