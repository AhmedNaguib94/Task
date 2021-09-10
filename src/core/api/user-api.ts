import User from "../models/user";
import axios from "./base-api";

export const getAllUsersApi = (pageIndex: number, pageSize: number) => 
    axios({
        method: 'get',
        url: `/user?page=${pageIndex - 1}&limit=${pageSize}`
    })

export const addUserApi = (user: User) => {
    const body = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
    }

    return axios({
        method: 'post',
        url: '/user/create',
        data: body
    })
}

export const getUserById = (userId: string) => 
    axios({
        method: 'get',
        url: `/user/${userId}`
    })