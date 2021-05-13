import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
})

export const getPostsVariable = () => api.get(`/getPosts`)
export const createPostsVariable = payload => api.post(`/createPosts`, payload)
export const updatePostsVariable = (id, payload) => api.patch(`/updatePosts/${id}`, payload)
export const deletePostsVariable = (id) => api.delete(`/deletePosts/${id}`)
export const likePostsVariable = (id) => api.patch(`/likePosts/${id}`)


const apis = {
    getPostsVariable,
    createPostsVariable,
    updatePostsVariable,
    deletePostsVariable,
    likePostsVariable
}

export default apis