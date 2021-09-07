import React,  { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'; 

import './style.css';
import logoImg from '../../assets/logoLojaPeças.png'; 

import api from '../../services/api';

export default function New() {
    const [name, setName] = useState(''); 
    const [description, setDescription] = useState(''); 
    const [price, setPrice] = useState(''); 
    
    const history = useHistory(); 

    async function register(e) {
        e.preventDefault(); 

        const data = {
            name,
            description,
            price
        };

        try {
            const response = await api.post('/api/product', data); 

            alert('Cadastrado'); 

            history.push('/'); 
        } catch (error) {
            alert('Erro no cadastro tente novamente'); 
        }
    }

    return (
        <div className="new-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Auto-peças"/>

                    <h1>Cadastro</h1>
                    <p>Cadastre a nova peça na loja informando seu nome, preço e descrição</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar!
                    </Link>
                </section>

                <form onSubmit={register}>
                    <input 
                        placeholder="Nome da peça" 
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input 
                        placeholder="Descrição" 
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input 
                        placeholder="Preço" 
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                    />

                    <button className="button" type="submit"> Cadastrar </button>
                </form>
            </div>
        </div>
    );
}