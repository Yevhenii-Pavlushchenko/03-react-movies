import axios, { type AxiosRequestConfig } from "axios";
import {type Movie} from '../types/movie'

const BASE_URL = "https://api.themoviedb.org/3/";
axios.defaults.baseURL = BASE_URL;

const endpoint = "search/movie";

const APIKEY = import.meta.env.VITE_TMDB_TOKEN;