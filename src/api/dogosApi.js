import Axios from 'axios'


// acá configure la url en axios (que siempre va a ser la misma) 

export const dogosApi = Axios.create({
    baseURL: 'https://project-doggo.herokuapp.com'
})
