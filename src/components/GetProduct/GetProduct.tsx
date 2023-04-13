import React from "react"
import ApiClient from "../ApiClient"
import {useState,useEffect} from 'react'
function GetProduct(){
    const [products, setProducts] = useState([])
    const [error, setError] = useState('');
    const apiClient = new ApiClient

    useEffect(() => {
        apiClient
        .fetch('/products')
        .then((response) => response.json())
        .then((product) => setProducts(product))
        .catch((error) => console.log(error.message))
    },[])
    if (error) {
        return <span className="error__text">Error: {error}</span>;
      }
    return(
        <>
        </>
    )
}
export default GetProduct