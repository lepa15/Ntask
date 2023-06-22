import React, {useState} from "react";
import './App.css';
import UsersBlock from "./components/Users/UsersBlock";
import UserRegBlock from "./components/UserReg/UserRegBlock";
import {BrowserRouter, Route, Routes, NavLink} from "react-router-dom";

const MyContext = React.createContext();

function App () {
    const [user, setUser] = useState ( "" );
    const [birthday, setBirthday] = useState ( "" );
    const [users, setUsers] = useState ( [] );
    const [birthdays, setBirthdays] = useState ( [] );
    const addUser = () => {
        if (user !== "" && birthday !== "") {
            setUsers ( [...users, user] );
            setUser ( "" );
            setBirthdays ( [...birthdays, birthdays] );
            setBirthday ( "" );
        }
    };
    return (
        <BrowserRouter>
            <div className='wrapper-block'>
                <div className='container'>
                    <div className='users-block'>
                        <div className='users-block__sidebar-block'>
                            <h2 className='users-block__sidebar-block_title'><span>N</span>Task</h2>
                            <NavLink to='/' className='users-block__sidebar-block_tagline'>Пользователи</NavLink>
                            <p className='users-block__sidebar-block_tagline'>Галерея</p>
                        </div>

                        <Routes>
                            <MyContext.Provider value={user}>
                            <Route path='/' element={ <UsersBlock/> }></Route>
                            <Route path='/add_user' element={ <UserRegBlock/> }></Route>
                            </MyContext.Provider>
                        </Routes>


                </div>
            </div>
        </div>
</BrowserRouter>
)
    ;
}

export default App;
