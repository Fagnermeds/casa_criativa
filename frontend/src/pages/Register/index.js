import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import api from '../../service/api'
import './style.css'

export default function Register() {

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');

    const history = useHistory();

    const clearFields = () => {

        setTitle('');
        setCategory('');
        setDescription('');
        setUrl('');

    }

    const backPage = () => history.push('/');

    async function handlerRegister(e){

        e.preventDefault();

        const data = {
            title,
            category,
            description,
            url
        };

        await api.post('/ideias', data);

        
        clearFields();

    }

    return (

        <div className="register-container">
            
            <div>
               
                <h1>NOVA IDEIA</h1>

                <form onSubmit={handlerRegister}>

                    <section className="inputs-header">
                        <input onChange={e => setTitle(e.target.value)} name="title" placeholder="Título" />
                        <input onChange={e => setCategory(e.target.value)} name="category" placeholder="Categoria"/> 
                    </section>

                    <textarea onChange={e => setDescription(e.target.value)} placeholder="Descrição" name="description" id="" cols="30" rows="3"></textarea>

                    <input type="url" onChange={e => setUrl(e.target.value)} name="image" placeholder="URL"/>

                    <div className="buttons">
                        <button onClick={backPage} id="cancel">Cancelar</button>
                        <button type="submit">Salvar</button>
                    </div>
                </form>
            </div>
        </div>

    );

}