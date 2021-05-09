import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
})

export const getPostsVariable = () => api.get(`/getPosts`)
export const createPostsVariable = payload => api.post(`/createPosts`, payload)
export const updatePostsVariable = (id, payload) => api.patch(`/updatePosts/${id}`, payload)


const apis = {
    getPostsVariable,
    createPostsVariable,
    updatePostsVariable,
}

export default apis