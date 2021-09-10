import { Link } from 'react-router-dom';

import User from '../../../core/models/user';
import './user-card.scss';

const UserCard: React.FC<{user: User}> = ({user}) => {
    return(
        <div className="user-container flex justify-space-between">
            <div className="right flex">
                {
                    user.picture ? 
                    <img src={user.picture} alt={user.userName} /> :
                    <img src={process.env.PUBLIC_URL + '/assets/images/user.png'} alt={user.userName} />
                }
                <div className="name column">
                    <h3>Name</h3>
                    <p>{user.userName}</p>
                </div>
            </div>
            <div className="left flex center">
                <div className="flex center">
                    <Link to={`/user/${user.id}`}>
                        <img src={process.env.PUBLIC_URL + '/assets/images/arrow-left.svg'} alt="user details" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UserCard;