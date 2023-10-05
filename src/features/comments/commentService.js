import axios from 'axios';
import { config } from 'dotenv';

const API_URL = 'https://perfect-erin-goldfish.cyclic.app/api/comments/'


//crear una nuevo comentario
const createComment = async (commentData, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    try {
        const response = await axios.post(API_URL, commentData);
        return response.data;
    } catch (error) {
        throw new Error('Failed to create comment: ' + error.message);
    }
};


//obtener comentarios
const getComment = async (movieData) => {
    const id = movieData
    const response = await axios.get(API_URL + id)
    return response.data
}

//delete comentarios
const deleteComment = async (id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    console.log(id)
    const response = await axios.delete(API_URL + id)

    return response.data
}

const commentService = {
    createComment,
    getComment,
    deleteComment
}

export default commentService