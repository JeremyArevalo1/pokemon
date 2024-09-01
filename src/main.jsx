import React from "react"
import ReactDOM from 'react-dom/client'
import { PokemonApp } from "./components/PokemonApp"
import 'bootstrap/dist/css/bootstrap.min.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <PokemonApp/>
    </React.StrictMode>
)