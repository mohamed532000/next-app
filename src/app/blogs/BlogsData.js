"use client"
import { useEffect } from "react";
import { useProductsQuery } from "../apis/products/useProductsQuery";

export default function BlogsData() {
    const {isLoading , data} = useProductsQuery();
    useEffect(() => data && console.log(data?.data?.products?.data) , [data])
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-red-200">
            {
                data
                &&
                data?.data?.products?.data?.map((item , index) => (
                    <h3 key={index} className={`transition-all blog animate`} style={{transitionDuration: `.${index+3}s`}}>{item.title}</h3>
                ))
            }
        </div>
    )
}