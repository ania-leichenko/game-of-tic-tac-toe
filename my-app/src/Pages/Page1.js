import React from 'react';
import './Page1.css';
import {
  Link,
  Outlet,
} from "react-router-dom";

function Page1() {
  
  return (
    <div className="game" >
      <h1>Tic tac toe</h1>
      <div className="game_for_one">
        <Link  to="/" className="game_for">
          Игра на одного
        </Link>
      </div>
      <div>
        <Link  to="/page2" className="game_for">
          Игра на двоих
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Page1;