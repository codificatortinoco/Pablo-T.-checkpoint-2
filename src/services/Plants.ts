// TODO: arregla typos de "error", maneja caso de error y exito
import {Plants} from '../types/Plant'

export async function getPlants(): Promise <Plants[]> {
    const url= `http://192.168.131.101:8080/dca/api/plants`;
    const response= await fetch(url);
    const data= await response.json();
    return data
}