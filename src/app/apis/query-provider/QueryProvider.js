"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
const clinetQuery = new QueryClient();
export const QueryProvider = ({children}) => {
    return (
        <QueryClientProvider client={clinetQuery}>
            {children}
        </QueryClientProvider>
    )
}