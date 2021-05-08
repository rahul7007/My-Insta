import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
})

export const getPostsVariable = () => api.get(`/getPosts`)
// export const createPostsVariable = () => api.get(`/createPosts`)
// export const getEmpDataById = id => api.get(`/getEmpDataById/${id}`)
// export const getEmpDataByName = name => api.get(`/getEmpDataByName/${name}`)
// export const getSortedSalary = filter => api.get(`/getSortedSalary/${filter}`)
// export const getNextPageStack = page => api.get(`/getNextPageStack/${page}`)
// export const getPrevPageStack = page => api.get(`/getPrevPageStack/${page}`)
export const createPostsVariable = payload => api.post(`/createPosts`, payload)
// export const getNextSearchPageStack = page => api.get(`/getNextSearchPageStack/${page}`)
// export const getPrevSearchPageStack = page => api.get(`/getPrevSearchPageStack/${page}`)
// export const getSortedNextPageStack = page => api.get(`/getSortedNextPageStack/${page}`)
// export const getSortedPrevPageStack = page => api.get(`/getSortedPrevPageStack/${page}`)


const apis = {
    getPostsVariable,
    createPostsVariable,
    // getEmpDataById,
    // getEmpDataByName,
    // getSortedSalary,
    // getNextPageStack,
    // getPrevPageStack,
    // sendSearchResponse,
    // getNextSearchPageStack,
    // getPrevSearchPageStack,
    // getSortedNextPageStack,
    // getSortedPrevPageStack
}

export default apis