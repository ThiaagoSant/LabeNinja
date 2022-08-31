import React from "react";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main>
        <p>
          Torne sua vida rápida e prática <span>como um ninja.</span>
        </p>

        <button>
          <Link to={"/services"}>Contratar Serviço</Link>
        </button>
        <button>
          <Link to={"/register"}>Registar Serviço</Link>
        </button>
      </main>
    </>
  );
};

export default Home;
