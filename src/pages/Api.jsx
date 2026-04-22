import { useState } from "react"
import { useEffect } from "react"
import "./style.css"
import { Link } from "react-router-dom";
import App from "./App";


function Api(){
    
    // uso de estados no react salvando e setando no objeto
    const [dragonball, setDragonBall] = useState([]);
    
    // vem primeiro antes de renderizar o componente
    useEffect(()=>{
        fetch("https://dragonball-api.com/api/characters")
        .then((res)=> res.json())
        .then((dragon) => setDragonBall(dragon.items))
        .catch((err)=> alert(`Erro: ${err}`))
    }, [])


    // apenas um return por função, com 1 elemento dentro
    return(
    <div className="body2">

    {dragonball.map((item) => {
        // .jsx -> REACT, mistura JS com HTML ficando mais fácil de se desenvolver com VirtualDOM
            return <div key={item.id} className = "main">
                        <h6>{item.name}</h6>
                        <div className="IMG">
                            <img src={item.image} alt={item.name} width="150px" />
                        </div>
                        <p>{item.description}</p>
                    </div>
    })}
    <Link to="/app">Clique para ir para nossa outra página</Link>
   </div>
);
}



export default Api