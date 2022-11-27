import axios from 'axios'

export const baseUrl = 'https://stockvisualizer-api.herokuapp.com'

export const fetchApi = async (method, api, body) => {
    const response = {}
    console.log(body);
    try {
        if (method == 'post') {
            response = await axios.post(baseUrl + api,
                JSON.stringify(body), {
                "headers": {
                    "content-type": "application/json",
                }
            });
        }
        else {
            response = await axios.get(baseUrl + api,
                JSON.stringify(body), {
                "headers": {
                    "content-type": "application/json",
                }
            });
        }
    } catch (error) {
        console.log(error);
    }

    return response;
}