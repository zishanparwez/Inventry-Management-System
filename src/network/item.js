import {config} from '../config/index'
import axios from 'axios';

export const _createItem = async (payload) => {

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("_token")}`
    }
    
    try {
        const response = await axios({
            method: 'post',
            url: `${config.API_BASE_URL}/item/add-item`,
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

export const _getItems = async () => {

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("_token")}`
    }
    
    try {
        const response = await axios({
            method: 'get',
            url: `${config.API_BASE_URL}/item/get-items`,
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

export const _getItem = async (itemId) => {

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("_token")}`
    }
    
    try {
        const response = await axios({
            method: 'get',
            url: `${config.API_BASE_URL}/item/get-item/${itemId}`,
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

export const _updateItem = async (payload, itemId) => {

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("_token")}`
    }
    
    try {
        const response = await axios({
            method: 'patch',
            url: `${config.API_BASE_URL}/item/update-item/${itemId}`,
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

export const _deleteItem = async (itemId) => {

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("_token")}`
    }
    
    try {
        const response = await axios({
            method: 'delete',
            url: `${config.API_BASE_URL}/item/delete-item/${itemId}`,
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