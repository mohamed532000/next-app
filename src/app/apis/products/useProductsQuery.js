// "use client"
import { useQuery } from "@tanstack/react-query";
import axios from "axios"
const getData = async() => {
    const productsApi = `${process.env.NEXT_PUBLIC_FRONT_API}/api/products`;
    const response = await axios.get(productsApi);
    return response.data
}

export const useProductsQuery = () => {
    return useQuery({
        queryKey : ["getProducts"],
        queryFn : getData,
        retry : false,
        refetchOnWindowFocus : false
    })
}