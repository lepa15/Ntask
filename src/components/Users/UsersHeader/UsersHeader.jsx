import React from "react";
import {NavLink} from "react-router-dom";

 export default function UsersHeader () {
     return <div className="users-block__header-block">
         <h2 className="users-block__header-block_title">Пользователи</h2>
         <NavLink to='/add_user' className="users-block__header-block_button">Добавить пользователя</NavLink>
     </div>;
 }