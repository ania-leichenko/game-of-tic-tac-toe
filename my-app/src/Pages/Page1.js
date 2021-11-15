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