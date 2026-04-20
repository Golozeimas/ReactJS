import { useState } from "react"

function App2(){

    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState(0)
    const [email, setEmail] = useState("")
    const [user, setUser] = useState({}) // inicializo um estado para um objeto

    function handleSubmit(e){
        e.preventDefault();

        alert("Usuário registrado com sucesso! ")

        setUser({
            nome: nome,
            idade: idade, 
            email: email
        })

    }
    return(
        <div>
            <h2> Cadastro de usuário </h2>
            <form method="POST" onSubmit={handleSubmit}>
                <label htmlFor="nome">Nome: </label>
                <br />
                <input 
                type="text" 
                id="nome" 
                placeholder="Coloque seu nome" 
                value={nome} // por padrão será em branco
                onChange={(e)=> setNome(e.target.value)} // pega o valor que for digitado
                />
                <br />
                
                <label htmlFor="idade"> Idade: </label>
                <br />
                <input 
                type="number" 
                id="idade" 
                placeholder="Coloque sua idade"
                value={idade}
                onChange={(e)=> setIdade(e.target.value)}
                />
                <br />

                <label htmlFor="email"> Email: </label>
                <br />
                <input 
                type="email" 
                placeholder="Coloque seu email"
                id="email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)} // ao evento (nesse caso seria digitar) 
                                                        // chegar, pegue o valor
                />
                
                <br />
                <br />
                
                <button type="submit"> Registrar usuário </button>
            </form>
            <div>
                <h1>Seu nome é: {user.nome}</h1>
                <h2>Sua idade é: {user.idade}</h2>
                <h3>Seu email é: {user.email}</h3>
            </div>
        </div>
    )
}

export default App2