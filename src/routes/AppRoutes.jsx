import { BrowserRouter, Routes, Route} from "react-router-dom";
import Api from "../pages/Api";
import App from "../pages/App";

function Rotas(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <Api/> } />        
                    <Route path="/app" element={<App/> } />
                    <Route path="*" element={<h1>404 - não foi encontrada a página desejada</h1>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Rotas;