import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '8c96640461e348e0866d157cd757a9ef'
    }
})