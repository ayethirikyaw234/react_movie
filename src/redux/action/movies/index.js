import { ActionType } from "../action-type"

export const fetchMovies =(movies)=>{
    return {
        type:ActionType.FETCH_MOVIE,
        payload:movies
    }
}

export const selectedMovie =(movie)=>{
    return {
        type:ActionType.SELECT_MOVIE,
        payload:movie
    }
}

export const unselectedMovie =(movie)=>{
    return {
        type:ActionType.REMOVE_MOVIE,
        payload:movie
    }
}