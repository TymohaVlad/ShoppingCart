import React from "react"
import ApiClient from "../ApiClient"
import {useState,useEffect} from 'react'
function GetProduct(){
    const [products, setProducts] = useState([])

    const apiClient = new ApiClient

    useEffect(() => {
        apiClient
        .fetch('/products')
        .then((response) => response.json())
        .then()
    },[])

    return(
        <></>
    )
}
export default GetProduct