import React, { useState, useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'

import setImg from '../../utils/setImg'
import './style.css'
import api from '../../service/api'
import logoImg from '../../assets/logo.png'

export default function Ideas(){

    const [ideas, setIdeas] = useState([]);

    useEffect(() => {

        api.get('/ideias')
            .then(response => {

                setIdeas(response.data);

            });

    }, []);


    return (

        <div className="ideas-container">

            <header>
                <Link to="/">
                    <img src={logoImg} alt=""/>
                </Link>
                <nav>
                    <li><Link to="/" id="init">Início</Link></li>
                    <li><Link to="/register">Nova ideia</Link></li>
                </nav>
            </header>

            <section id="title">
                <p>em exibição</p>
                <h1>Ideias</h1>
            </section>

            <main>
                {ideas.map(idea => (
                    <section key={idea.id} id="ideas">
                        <div  className="idea">
                            <img src={setImg(idea.category)} alt=""/>
                            
                            <div className="content">
                                <h3>{idea.title}</h3>
                                <p>{idea.category}</p>
                                <div className="description">
                                    {idea.description}
                                </div>
                                <a target='_blank' href={idea.url}>Ir para a ideia</a>
                            </div>
                        </div>
                    </section>
                ))}
            </main>
        </div>
    );

} 
