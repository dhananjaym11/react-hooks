import React from 'react';
import { Link } from "react-router-dom";

export default function UserList(props) {
    return (
        <div className="row">
            {props.list.map((user) => (
                <div key={user.id} className="col-sm-3">
                    <Link to={`users/${user.login}`}>
                        {user.login}
                    </Link>
                </div>
            ))}
        </div>
    )
};