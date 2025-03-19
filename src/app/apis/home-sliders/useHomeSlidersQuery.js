import { useQuery } from "@tanstack/react-query";
import axios from "axios"

const getData = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_FRONT_API}/api/sliders`);
    return response.data
    console.log(response)
}

export const useHomeSlidersQuery = () => {
    return (
        useQuery({
            queryKey : ['homeSliders'],
            queryFn : getData,
            refetchOnWindowFocus : false,
        })
    )
}