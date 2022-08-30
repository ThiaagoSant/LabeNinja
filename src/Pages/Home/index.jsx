import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <header>
        <h1>
          Labe<span>Ninja</span>
        </h1>

        <nav>
          <button>
            <Link to={"/cart"}>Carrinho</Link>
          </button>
        </nav>
      </header>

      <main>
        <p>
          Torne sua vida rápida e prática <span>como um ninja.</span>
        </p>

        <Link to={"/services"}>Contratar Serviço</Link>
        <Link to={"/register"}>Registar Serviço</Link>
      </main>
    </>
  );
};

export default Home;
