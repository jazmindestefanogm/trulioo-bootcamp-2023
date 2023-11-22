"use client"
import DemoTrulioo from "../components/DemoTrulio"
import { useSearchParams } from "next/navigation"
const Authentication = () => {
    const params = useSearchParams()
    return(
        <>
        <h1>this is authentication page</h1>
        <DemoTrulioo shortCode={params.get("code")}/>
        </>
    )
}
export default Authentication