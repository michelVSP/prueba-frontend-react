import React from "react";
import { Link } from 'react-router-dom'


const Menu = () =>{
        <ul>
          <li>
            <Link to={'/'}> panel Estructura  </Link>
          </li>

        <li>  
            <Link to={'/app'}> App  </Link>
        </li>
      </ul>
}

export default Menu;