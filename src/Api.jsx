import { useState } from "react"
import { useEffect } from "react"

function Api(){
    
    const [dragonball, setDragonBall] = useState([]);
    
    useEffect(()=>{
        fetch("https://dragonball-api.com/api/characters")
        .then((res)=> res.json())
        .then((dragon) => setDragonBall(dragon.items))
        .catch((err)=> alert(`Erro: ${err}`))
    }, [])


    return(
    <div>
    <div className="header">
        <h1>Dragon ball - WIKI</h1>        
    </div>

    {dragonball.map((item) => {
            return <div key={item.id} className = "main">
                        <h6>{item.name}</h6>
                        <img src={item.image} alt={item.name} width="150px" />
                        <p>{item.description}</p>
                    </div>
    })}

   </div>
);
}



export default Api