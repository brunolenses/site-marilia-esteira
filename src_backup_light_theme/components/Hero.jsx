import React from 'react';
import heroImage from '../assets/marilia-eleonora.jpg';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <span className="overline">23 Anos de Excelência em Podologia</span>
                    <h1>Autoridade, Saúde e Estratégia Profissional</h1>
                    <p>
                        Da técnica refinada à postura insubstituível.
                        Conteúdos exclusivos para quem busca posicionamento de elite no mercado da beleza e saúde.
                    </p>
                    <div className="hero-buttons">
                        <a href="#products" className="btn">Acessar Materiais</a>
                        <a href="#about" className="btn-outline">Conhecer Trajetória</a>
                    </div>
                </div>
                <div className="hero-image">
                    <img src={heroImage} alt="Marília Eleonora" className="hero-fixed-image" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
