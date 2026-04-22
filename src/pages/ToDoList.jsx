    import { useEffect } from "react";
    import { useState } from "react";

    function ToDoList(){
        const [tarefa, setTarefa] = useState("")

        function handleSubmit(e){
            e.preventDefault()
            setListaDeTarefas([...lista_de_tarefas, tarefa])
            setTarefa("")
        }

        // inicilializa com as tarefas salvas do local storage
        const [lista_de_tarefas, setListaDeTarefas] = useState(() => {
        const tarefas_storage = localStorage.getItem('@tarefas');
        return tarefas_storage ? JSON.parse(tarefas_storage) : [];
        }); 
        

        useEffect(() => {
        localStorage.setItem("@tarefas", JSON.stringify(lista_de_tarefas));
        }, [lista_de_tarefas]);
        
        
        return(
            <div>
                <form method="POST" onSubmit={handleSubmit}>
                    <label htmlFor="tarefa">Adicione uma tarefa:</label>
                    <br />
                    <input 
                    type="text" 
                    id="tarefa"
                    placeholder="Adicione uma tarefa!"
                    value={tarefa}
                    onChange={(e)=> setTarefa(e.target.value)}
                    />
                    <br />
                    <br />
                    <button type="submit"> Adicionar </button>
                </form>
                <div>
                    <ul>
                        {lista_de_tarefas.map((item, index)=>
                            (<li key={index}>{item}</li>)
                        )}
                    </ul>
                </div>
            </div>
        );
    }

    export default ToDoList