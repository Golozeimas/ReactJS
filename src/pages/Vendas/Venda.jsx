import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"

function Venda(){

    // isso serve para buscar algo na API também por ser um elemento único 
    const {id} = useParams()
    
    const [produto, setProdutos] = useState([])

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res)=> res.json())
        .then((json)=> setProdutos(json))
        .catch((err)=> console.log(err))

    }, [id])


    if(!produto){
        return <h2> Carregando... </h2>
    }
    
    return(
        <div>
            <h1> Nome do produto: </h1>
            <p>{produto.title}</p>
            <h2> Imagem do produto </h2>
            <img src={produto.image} alt="Imagem do produto" />
            <h3>Preço do produto</h3>
            <p>{produto.price + "$"}</p>
        </div>
    )
}

export default Venda