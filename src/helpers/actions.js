import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

//action for SERVICES
export function getServices() {
    return axios.get(`${BASE_URL}/api/service/list`)
        .then(response => response.data)
}

export function deleteService(id) {
    return axios.post(`${BASE_URL}/api/service/delete/${id}`)
        .then(response => response.data)
        .catch(err => Promise.reject(err.message));
}

export function createService(data) {
    return axios.post(`${BASE_URL}/api/service/create`, { name: data.name, time: data.time })
        .then(response => {
            return response.data
        })
        .catch(err => Promise.reject(err.message))
}

export function updateService(data, id) {
    return axios.post(`${BASE_URL}/api/service/update/${id}`, { data })
        .then(response => {
            return response.data
        })
        .catch(err => Promise.reject(err.message))
}

//action for APPOINTMENTS
export function getAppointments() {
    return axios.get(`${BASE_URL}/api/appointment/list`)
        .then(response => response.data)
}

export function deleteAppointment(id) {
    return axios.post(`${BASE_URL}/api/appointment/delete/${id}`)
        .then(response => response.data)
        .catch(err => Promise.reject(err.message))
}

export function createAppointment(data){
    return axios.post(`${BASE_URL}/api/appointment/create`, {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        contact: data.contact,
        date: data.date,
        reason: data.reason,
        note: data.note,
        status: data.status
    })
    .then(response => {
        return response.data
    })
    .catch (err => Promise.reject(err.message))
}

export function updateAppointment(data, id){
    return axios.post(`${BASE_URL}/api/appointment/update/${id}`, {data})
    .then(response => {
        return response.data
    })
    .catch(err=> Promise.reject(err.message))
}