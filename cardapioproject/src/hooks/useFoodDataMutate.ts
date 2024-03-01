import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { foodData } from '../interface/foodData';

const API_URL = 'http://localhost:8080';

const postData = async (data: foodData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/food', data);
    return response;
}

export function useFoodDataMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries( ['food-data'] ) // para invalidar todos os dados buscados do get
        }
    })

    return mutate;
}