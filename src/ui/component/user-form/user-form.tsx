import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Form, Input, Button } from 'antd';
import { toast } from 'react-toastify';
import { LOADING } from "../../../core/store/actions";
import { addUserApi } from '../../../core/api/user-api';

import 'react-toastify/dist/ReactToastify.css';
import User from '../../../core/models/user';
import { FormEvent } from "react";

toast.configure();
const UserForm: React.FC = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const onFinish = async (values: any) => {
        dispatch({type: LOADING});
        const user: User = new User();
        user.firstName = values.firstName;
        user.lastName = values.lastName;
        user.email = values.email;
        try {
            const response = await addUserApi(user);
            toast.success('user has been added successfully', {position: toast.POSITION.BOTTOM_CENTER});
            history.push('/users');
        } catch (error) {
            toast.error('something went wrong please try again!', {position: toast.POSITION.BOTTOM_CENTER});
        }
        dispatch({type: LOADING});
    };

    const test = (event: React.FormEvent) => {
        console.log(event.target);
        
    }


    return (
        <div className="user-form-container flex full-width">
            <Form
                name="basic"
                role="form"
                onFinish={onFinish}
                autoComplete="off"
                layout="vertical"
            >
                <Form.Item
                    label="FirstName"
                    name="firstName"
                    rules={[{ required: true, message: 'Please input your first name!' }]}
                >
                    <Input placeholder="Type First Name" role="first-name" onKeyUp={(event) => test(event)} />
                </Form.Item>

                <Form.Item
                    label="LastName"
                    name="lastName"
                    rules={[{ required: true, message: 'Please input your last name!' }]}
                >
                    <Input placeholder="Type Last Name" role="last-name" onChange={(event) => test(event)} />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, type: 'email', message: 'Please input your email!' }]}
                >
                    <Input placeholder="Type Email" role="email" />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" role="button" className="button" style={{marginTop: '20px'}}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default UserForm;