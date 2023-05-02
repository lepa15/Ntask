import React, {Component} from 'react';
import UsersHeader from "./UsersHeader/UsersHeader";
import UsersTitle from "./UsersTitle/UsersTitle";
import UsersList from "./UsersList/UsersList";

class UsersBlock extends Component {
    render () {
        return (
            <div className='users-block__profile-block'>
                <UsersHeader/>
                <UsersTitle/>
                <UsersList/>
            </div>
        );
    }
}

export default UsersBlock;