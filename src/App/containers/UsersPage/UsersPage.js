import React from 'react';
import { connect } from 'react-redux';

import usersService from '../../core/services/users.service';
import UserList from '../../components/User/UserList';

class UsersPage extends React.Component {

    componentDidMount() {
        this.props.loadUsers();
    }

    render() {
        return (
            <div className="container">
                <h1>Users Page</h1>
                {this.props.data.result ?
                    <UserList list={this.props.data.result} /> : null
                }
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadUsers: () => {
            dispatch(usersService.loadUsers())
        }
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.usersReducer
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);