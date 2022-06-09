import axios, { AxiosInstance } from "axios";
import { GeoApiInterface } from "./GeoApiInterface";

export class ViaCep implements GeoApiInterface{

    BASE_URL: string = 'http://viacep.com.br/';
    private api: AxiosInstance;
    
    constructor(){
        this.api = axios.create({
        baseURL: this.BASE_URL

        })
    }
    
    async getAddress(cep: string) {
    let response = await this.api.get(`ws/${cep}/json/`);
    return response.data;        
    }

}