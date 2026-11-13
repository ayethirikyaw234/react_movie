import axios from 'axios';

export const api=axios.create({
    
    baseURL:"https://api.themoviedb.org/3"
});

export const api_key='8bd799c04056fc7bb9aeadee148491d2'