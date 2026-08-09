import axios from "axios";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = 'https://youtube138.p.rapidapi.com';


const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': 'youtube138.p.rapidapi.com'
    }
};

export const fetchData = async (url:string) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/${url}`, options);
        return data;
    } catch (error) {
        console.error("error fetching api data: ", error);
        throw error;
    }
}

// const options = {
// 	method: 'GET',
// 	hostname: 'youtube138.p.rapidapi.com',
// 	port: null,
// 	path: '/auto-complete/?q=desp&hl=en&gl=US',
// 	headers: {
// 		'x-rapidapi-key': '0c25497879msh92fa15206cc0c6ep12a508jsn98c749b9fa63',
// 		'x-rapidapi-host': 'youtube138.p.rapidapi.com'
// 	}
// };

// const options = {
// 	method: 'GET',
// 	url: 'https://youtube138.p.rapidapi.com/auto-complete/',
// 	params: {
// 	  q: 'desp',
// 	  hl: 'en',
// 	  gl: 'US'
// 	},
// 	headers: {
// 	  'x-rapidapi-key': '0c25497879msh92fa15206cc0c6ep12a508jsn98c749b9fa63',
// 	  'x-rapidapi-host': 'youtube138.p.rapidapi.com'
// 	}
//   };