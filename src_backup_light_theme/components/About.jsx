import React from 'react';
import { Award, Clock, Heart } from 'lucide-react';
import aboutImage from '../assets/marilia-eleonora-2.jpg';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container about-container">
                <div className="about-text">
                    <span className="section-subtitle">Sobre Marília Eleonora</span>
                    <h2>A Autoridade que Nasceu da Prática</h2>

                    <div className="about-narrative">
                        <p>
                            Minha jornada não começou em livros teóricos, mas no contato real com cada cliente.
                            Iniciei como manicure e pedicure, construindo minha base com atendimento humanizado e cuidado aos detalhes.
                        </p>
                        <p>
                            Ao longo de <strong>23 anos</strong>, transformei experiência em especialização.
                            Hoje, como <strong>Podóloga Formada</strong>, uno a visão estética à saúde clínica, entregando não apenas beleza,
                            mas bem-estar e estratégia profissional.
                        </p>
                        <p>
                            Não falo com quem busca atalhos. Falo com profissionais que, assim como eu, sabem que a excelência
                            se constrói com conhecimento, técnica e posicionamento.
                        </p>
                    </div>

                    <div className="about-stats">
                        <div className="stat-item">
                            <Clock className="stat-icon" size={32} />
                            <span className="stat-number">23+</span>
                            <span className="stat-label">Anos de Experiência</span>
                        </div>
                        <div className="stat-item">
                            <Award className="stat-icon" size={32} />
                            <span className="stat-number">Ref.</span>
                            <span className="stat-label">Autoridade Técnica</span>
                        </div>
                        <div className="stat-item">
                            <Heart className="stat-icon" size={32} />
                            <span className="stat-number">Elite</span>
                            <span className="stat-label">Cuidado Personalizado</span>
                        </div>
                    </div>
                </div>

                <div className="about-image">
                    <div className="image-frame">
                        <img src={aboutImage} alt="Marília Eleonora Perfil" className="about-img-real" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
