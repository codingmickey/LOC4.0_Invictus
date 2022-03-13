/* eslint-disable no-empty */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import axios from "axios";

export const accountPublicData = async (data) => {
    let options = {
        method: 'GET',
        url: `https://instagram-data4.p.rapidapi.com/api/account/public/${data}`,
        headers: {
            'x-rapidapi-key': '3ea1f76d19msh440d0c5afc3577cp12bcb8jsnff1769f87195',
            'x-rapidapi-host': 'instagram-data4.p.rapidapi.com'
        }
    };
    try {

        const response = await axios.request(options)

        if (response.data) {
            // save to context
            return response.data
        }

    } catch (error) {

    }
}
