import axios from 'axios'

export const baseUrl = 'http://3de4-34-90-204-201.ngrok.io'

export const fetchApi = async (method, api, body) => {
    const response = {}
    console.log(body);
    try {
        if (method == 'post') {
            response = await axios.post(baseUrl + api + "?from_str=" + body.from_str + "&end_str=" + body.end_str + "&stock=" + body.stock);
        }
        else {
            response = await axios.get(baseUrl + api + "?from_str=" + body.from_str + "&end_str=" + body.end_str + "&stock=" + body.stock);
        }
    } catch (error) {
        console.log(error);
    }

    return response;
}