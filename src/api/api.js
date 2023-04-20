import axios from 'axios'

const API_BASE_URL = 'http://localhost:8000/api/'

const axiosInstance = axios.create({
  baseURL: API_BASE_URL
})

export const getAllUsers = async () => {
  try {
    const res = await axiosInstance.get('users')
    return res.data
  } catch (e) {
    console.error(e)
    throw e
  }
}

  
export const getUserById = async (userId) => {
  try {
    const res = await axiosInstance.get(`users/${userId}`)
    return res.data
  } catch (e) {
    console.error(e)
    throw e
  }
}

export const createUser = async (user) => {
  try {
    const res = await axiosInstance.post('users', user)
    return res.data
  } catch (e) {
    console.error(e)
    throw e
  }
}

export const updateUser = async (userId, user) => {
  try {
    const res = await axiosInstance.put(`users/${userId}`, user)
    return res.data
  } catch (e) {
    console.error(e)
    throw e
  }
}

export const deleteUser = async (userId) => {
  try {
    const res = await axiosInstance.delete(`users/${userId}`)
    return res.data
  } catch (e) {
    console.error(e)
    throw e
  }
}