import axios from 'axios'

// const apiBaseUrl = 'https://our-chat-outh-back-production.up.railway.app'
// const apiBaseUrl = 'https://chat-demo-4fz7.onrender.com/'
const apiBaseUrl = 'http://localhost:5500/'

const apiInstance = axios.create({
	baseURL: apiBaseUrl,
})

export { apiInstance, apiBaseUrl }
