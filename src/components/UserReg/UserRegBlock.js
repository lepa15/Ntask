import React from "react";
import {useState} from "react";

export default function UserRegBlock () {
    // const [user, setUser] = useState ( "" );
    // const [birthday, setBirthday] = useState ( "" );
    // const [users, setUsers] = useState ( [] );
    // const [birthdays, setBirthdays] = useState ( [] );
    // const addUser = () => {
    //     if (user !== "" && birthday !== "") {
    //         setUsers ( [...users, user] );
    //         setUser ( "" );
    //         setBirthdays ( [...birthdays, birthdays] );
    //         setBirthday ( "" );
    //     }
    // };


    return <div className="user-reg-block">
        <h2 className="user-reg-block__header-block_title">Пользователь</h2>
        <div className="user-reg-block__main-block">
            <form>
                <div className="user-reg-block__main-block_description">
                    <p>Имя</p>
                    <input type="text"
                           name="name"
                           placeholder="Никита"
                           value={ user }
                           onChange={ e => {
                               setUser ( e.target.value )
                           } }/>
                </div>
                <div className="user-reg-block__main-block_description">
                    <p>Дата рождения</p>
                    <input type="text"
                           name="birthday"
                           value={ birthday }
                           placeholder="01.02.2004" onChange={ e => {
                        setBirthday ( e.target.value )
                    } }/>
                </div>
            </form>
        </div>
        <div className="user-reg-block__buttons-block">
            <button className="user-reg-block__buttons-block_button cansel-button">Отмена</button>
            <button className="user-reg-block__buttons-block_button change-button"
                    onClick={ addUser }>Изменить
            </button>
        </div>
    </div>;
}