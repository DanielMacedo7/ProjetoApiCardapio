// esse diretório hooks será o responsável por pegar esses dados do back end
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { foodData } from '../interface/foodData';

const API_URL = 'http://localhost:8080';

//dentro desse bloco, mais especificamente dentro da variável response vai ficar a resposta do back end

const fetchData = async (): AxiosPromise<foodData[]> => {
    const response = axios.get(API_URL + '/food');
    return response;
}


export function usefoodData(){

    //objeto de retorno dos dados da requisição
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['food-data'],
        retry: 2
    })
    return {
    // esse retorno corta o caminho e simplifica esses dados e coloca direto no nosso objeto de retorno    
        ...query,
        data: query.data?.data
    }


}
