import React from 'react';
import { ArrowRight } from 'lucide-react';
import heroImage from '../assets/marilia-eleonora.jpg';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <div className="hero-badge">A SUA JORNADA PARA O TOPO COMEÇA AQUI</div>
                    <h1>
                        Deixe de ser uma "fazedora de unhas" e torne-se uma <span className="text-highlight">Profissional de Elite</span>
                    </h1>
                    <p className="hero-lead">
                        Descubra os segredos, a técnica e o posicionamento que me fizeram construir uma carreira sólida em 23 anos. 
                        Pare de perder clientes por preço e comece a ser disputada pelo seu valor.
                    </p>
                    <div className="hero-buttons">
                        <a href="#products" className="btn btn-primary-gold">
                            QUERO MUDAR MINHA CARREIRA <ArrowRight size={20} />
                        </a>
                    </div>
                    <div className="hero-trust">
                        <span>Transformando a realidade de quem vive da Estética</span>
                    </div>
                </div>

                <div className="hero-image-wrapper">
                    <img src={heroImage} alt="Marília Eleonora" className="hero-img-cutout" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
