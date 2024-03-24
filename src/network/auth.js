import {config} from '../config/index'
import axios from 'axios';

export const _registerUser = async (payload) => {

    const headers = {
        'Content-Type': 'application/json'
    }
    
    try {
        const response = await axios({
            method: 'post',
            url: `${config.API_BASE_URL}/auth/user/signup`,
            data: payload,
            headers
        })
        return response;
    } catch(err) {
        return {
            status: err.status,
            message: err.message
        }
    }
}

export const _loginUser = async (payload) => {

    const headers = {
        'Content-Type': 'application/json',
    }
    
    try {
        const response = await axios({
            method: 'post',
            url: `${config.API_BASE_URL}/auth/user/login`,
            data: payload,
            headers
        })
        return response;
    } catch(err) {
        return {
            status: err.status,
            message: err.message
        }
    }
}