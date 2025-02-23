"use client"
import { useEffect } from "react"

export default function AboutPage() {
    useEffect(() => console.log("render from about pageeeascscas") , [])
    return (
        <>
            <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <h3>You Are In Abouttttttt Page</h3>
            </div>
        </>
    )
}