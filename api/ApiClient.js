export class ApiClient {
    constructor(request, baseURL) {
        this.request = request;
        this.baseURL = baseURL;
    }

    async get(endPoint) {
        return await this.request.get(
            `${this.baseURL}${endPoint}`
        );
    }

    async post(endPoint, data){
        return await this.request.post(
            `${this.baseURL}${endPoint}`,
            { data }
        );
    }

    async put(endPoint, data){
        return await this.request.put(
            `${this.baseURL}${endPoint}`,
            { data }
        );
    }

    async delete(endpoint) {
        return await this.request.delete(
            `${this.baseURL}${endpoint}`
        );
    }
}