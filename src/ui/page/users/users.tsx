import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Pagination } from 'antd';

import { getAllUsersApi } from "../../../core/api/user-api";
import { LOADING } from '../../../core/store/actions';
import { Constants } from '../../../core/helper/constants';
import UserMapper from '../../../core/mappers/user-mapper';
import User from '../../../core/models/user';
import UserCard from "../../component/user-card/user-card"
import CardContainer from "../../shared-component/card/card-container";
import './users.scss';

const Users: React.FC = () => {
    const dispatch = useDispatch();
    const userMapper = new UserMapper();
    const [usersArray, setUsersArray] = useState<User[]>([]);
    const [totalUsers, setTotalUsers] = useState<number>();

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async (pageIndex: number = Constants.LIST_PAGE_INDEX, pageSize: number = Constants.LIST_PAGE_SIZE) => {
        dispatch({type: LOADING});
        const response = await getAllUsersApi(pageIndex, pageSize);
        setTotalUsers(response.data.total);
        setUsersArray(userMapper.fromList(response.data.data));
        dispatch({type: LOADING});
    } 

    return (
        <div className="container flex column">
            <CardContainer>
                <div className="users-container flex column">
                    <div className="header flex justify-space-between align-center">
                        <h3>Users</h3>
                        <button className="button">
                            <Link to="/add-user">+ Add New</Link>
                        </button>
                    </div>
                    <div className="users-items flex wrap">
                        {usersArray.map(user => (
                            <UserCard key={user.id} user={user} />
                        ))}
                    </div>
                </div>
            </CardContainer>
            <Pagination defaultCurrent={1} defaultPageSize={20} pageSizeOptions={['10','20','50','100']} responsive={true} total={totalUsers} onChange={getUsers} />
        </div>
    )
}

export default Users;