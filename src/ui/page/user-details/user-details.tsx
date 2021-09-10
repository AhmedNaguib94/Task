import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getUserById } from '../../../core/api/user-api';
import User from '../../../core/models/user';
import { LOADING } from '../../../core/store/actions';

import UserMapper from '../../../core/mappers/user-mapper';
import CardContainer from '../../shared-component/card/card-container';
import './user-details.scss';


const UserDetails: React.FC = () => {
    const { id } = useParams<{id: string}>();
    const dispatch = useDispatch();
    const userMapper = new UserMapper();
    const [user, setUser] = useState<User>();

    useEffect(() => {
        getUser();
    }, [])

    const getUser = async () => {
        dispatch({type: LOADING});
        const response = await getUserById(id);
        setUser(userMapper.fromJson(response.data));
        dispatch({type: LOADING});
    }

    return(
        <CardContainer>
            <div className="user-details-container flex column">
                <div className="header flex align-center">
                    <Link to="/users"><img src={process.env.PUBLIC_URL + '/assets/images/arrow-right.svg'} alt="" /></Link>
                    <h3>User Details</h3>
                </div>
                <div className="content flex justify-space-between align-center">
                    <div className="item flex">
                    {
                        user?.picture ? 
                        <img src={user.picture} alt={user.userName} /> :
                        <img src={process.env.PUBLIC_URL + '/assets/images/user.png'} alt={user?.userName} />
                    }
                    </div>
                    <div className="item flex column">
                        <h4>Name</h4>
                        <p>{user?.userName}</p>
                    </div>
                    <div className="item flex column">
                        <h4>Title</h4>
                        <p>{user?.title}</p>
                    </div>
                    <div className="item flex column">
                        <h4>Gender</h4>
                        <p>{user?.gender}</p>
                    </div>
                    <div className="item flex column">
                        <h4>Email</h4>
                        <p>{user?.email}</p>
                    </div>
                    <div className="item flex column">
                        <h4>Phone</h4>
                        <p>{user?.phone}</p>
                    </div>
                </div>
            </div>
        </CardContainer>
    )
}

export default UserDetails;