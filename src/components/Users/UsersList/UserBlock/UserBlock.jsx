import React from "react";

 export default function UserBlock (props) {
     return <div className="users-block__user-block">
         <div className="users-block__user-block_name">{props.name}</div>
         <div className="users-block__user-block_birthday">{props.birthday}</div>
         <button className="users-block__user-block_delete-btn btn">Удалить</button>
         <button className="users-block__user-block_change-btn btn">Изменить</button>
     </div>;
 }