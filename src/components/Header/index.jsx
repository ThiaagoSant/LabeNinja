import React from "react";

import { Link } from "react-router-dom";
import { HeaderHome } from "./style";

const Header = () => {
  return (
    <HeaderHome>
      <nav>
        <h1>
          <Link to={"/"}>LabeNinja</Link>
        </h1>
        <button>
          <Link to={"/cart"}>Carrinho</Link>
        </button>
      </nav>
    </HeaderHome>
  );
};

export default Header;
