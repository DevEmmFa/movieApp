import axios from "axios";

const API_KEY = 'd5524eba57fe88dc7d3462e3e3e2180a'
const BASE_URL = 'https://api.themoviedb.org/3'

export const getData = async (category,options) => {

    const url = `${BASE_URL}/${category}/${options}?api_key=${API_KEY}`
    console.log(url)
    const response = await axios.get(url);
    const results = response.data.results
    return results
}

export const getSearch = async (category,options, query) => {

    const url = `${BASE_URL}/${category}/${options}?api_key=${API_KEY}&query=${query}`
    console.log(url)
    const response = await axios.get(url);
    const results = response.data.results
    return results
}

export const getOne = async (category,id) => {

    const url = `${BASE_URL}/${category}/${id}?api_key=${API_KEY}`
    console.log(url)
    const response = await axios.get(url);
    const results = response.data
    return results
}