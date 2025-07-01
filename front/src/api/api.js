import axios from 'axios'
const API = axios.create({
  baseURL: 'http://localhost:5000/api/'
});

export const generateImage = async(prompt) => {
    const response = await API.post('generate',{prompt});
    return response;
}

export const getPosts = async() => {
    const response = await API.get('posts');
    return response;
}

export const newPost = async(prompt,imageUrl) => {
    const response = await API.post('post',{prompt,imageBase64:`data:image/png;base64,${imageUrl}`});
    return response;
}
