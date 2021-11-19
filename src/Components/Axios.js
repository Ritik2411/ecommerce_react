import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5001/clone-9356d/us-central1/api" //API Link
})

export default instance