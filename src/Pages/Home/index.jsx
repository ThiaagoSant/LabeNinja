import React from "react";

import { Link } from "react-router-dom";

import { Main, ContainerButton } from "./style";
import bg from "../../assets/imgs/freelancer-peoples.jpg";

const Home = () => {
  return (
    <Main>
      <img src={bg} alt={"fundo"} />

      <div>
        <p>
          Torne sua vida rápida e prática <span>como um ninja.</span>
          <p>Encontre o melhor freelancer aqui!</p>
        </p>
        <ContainerButton>
          <Link to={"/services"}>
            <button>Contratar Serviço</button>
          </Link>
          <Link to={"/register"}>
            <button>Registar Serviço</button>
          </Link>
        </ContainerButton>
      </div>
    </Main>
  );
};

export default Home;
