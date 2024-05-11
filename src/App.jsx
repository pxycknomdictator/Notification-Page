import React from "react";
import Header from "./components/Header/Header";
import Comments from "./components/Comments/Comments";

const App = () => {
  return (
    <>
      <main className="w-full h-full grid place-items-center bg-Very-light-grayish-blue">
        <section
          id="shadow"
          className="sm:w-full bg-White ssm:px-2 rounded-md md:w-[600px] lg:w-[660px] py-4 px-6 sm:px-6"
        >
          <Header></Header>
          <div className="mt-6 grid gap-3">
            <Comments></Comments>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
