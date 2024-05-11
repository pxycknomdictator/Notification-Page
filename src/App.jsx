import React from "react";
import Header from "./components/Header/Header";
import Comments from "./components/Comments/Comments";

const App = () => {
  return (
    <>
      <main className="w-full h-full grid place-items-center">
        <section className="sm:w-full md:w-[600px] lg:w-[660px] shadow-lg py-4 px-6">
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
