import React from "react";

export default function UserRegBlock () {
    return <div className="user-reg-block">
        <h2 className="user-reg-block__header-block_title">Пользователь</h2>
        <div className="user-reg-block__main-block">
            <div className="user-reg-block__main-block_description">
                <p>Имя</p>
                <input placeholder="Никита"/>
            </div>
            <div className="user-reg-block__main-block_description">
                <p>Дата рождения</p>
                <input placeholder="01.02.2004"/>
            </div>
        </div>
        <div className="user-reg-block__buttons-block">
            <button className="user-reg-block__buttons-block_button cansel-button">Отмена</button>
            <button className="user-reg-block__buttons-block_button change-button">Изменить</button>
        </div>
    </div>;
}