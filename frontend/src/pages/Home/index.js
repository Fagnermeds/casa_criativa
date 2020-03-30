import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import api from '../../service/api'

import setImg from '../../utils/setImg'
import './style.css'
import logoImg from '../../assets/logo.png'

export default function Home(){

    const [ideas, setIdeas] = useState([]);

    useEffect(()=>{

        api.get('ideias')
            .then(response => {

                setIdeas(response.data);

            });

    },[])

    const history = useHistory();



    const pageRegister = () => {

        history.push('/register');

    }

    const nextPage = () => history.push('/ideias');

    return(

        <div className="home-container">        
            
           
            <section id="left">
                <header>
                    <img src={logoImg} alt=""/>
                </header>
            
                <main>
                    <p>Ficar em casa em períodos longos, não deve ser nada fácil.</p>
                    <p>Por isso, iremos catalogar ideias, <strong>brincadeiras, 
                        jogos, filmes, livros, cursos, dicas</strong> e tudo 
                        que for necessário para tornar esse momento mais interessante. 
                    </p>
                    <p>Comece clicando em ver ideias para ver as ideias cadastradas 
                        e contribua adicionando a sua ideia.
                    </p>
                </main>

                <div>
                    <button onClick={pageRegister}>+ Adicionar ideia</button>
                    <button onClick={nextPage}>Ver ideias</button>
                </div>        
            </section>


                
            <section  id="right">
                    
                {ideas.map(idea => (
                    
                    <div key={idea.id} className="home-idea">
                        
                        <img src={setImg(idea.category)} alt=""/>
                        
                        <div>
                            <h3>{idea.title}</h3>
                            <p>{idea.category}</p>
                            <div>
                                {idea.description}
                            </div>
                            <a target="_blank" href={idea.url}>Ir para a ideia</a>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );

}