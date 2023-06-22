import React from "react";
import UserBlock from "./UserBlock/UserBlock";
import UserRegBlock from "../../UserReg/UserRegBlock";

export default function UsersList (props) {
    // const userElement = props.usersAction.map()
     return <div className="users-block__users-list-block">
         <UserBlock name='Никита' birthday='09.02.2004'/>
         <UserBlock name='Владислав' birthday='17.08.2005'/>


     </div>;
 }