import { Link } from 'react-router-dom';

import UserForm from '../../component/user-form/user-form';
import CardContainer from '../../shared-component/card/card-container';
import './add-user.scss';

const AddUser: React.FC = () => {
    return (
        <CardContainer>
            <div className="add-user-container flex column">
                <div className="header flex align-center">
                    <Link to="/users"><img src={process.env.PUBLIC_URL + '/assets/images/arrow-right.svg'} alt="" /></Link>
                    <h3>Add User</h3>
                </div>
                <div className="user-form flex">
                    <UserForm />
                </div>
            </div>
        </CardContainer>
    )
}

export default AddUser;