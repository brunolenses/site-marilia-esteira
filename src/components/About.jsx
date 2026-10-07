import React from 'react';
import { Award, Clock, Heart, CheckCircle } from 'lucide-react';
import aboutImage from '../assets/marilia-eleonora-2.jpg';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container about-container">

                <div className="about-image-wrapper">
                    <img src={aboutImage} alt="Marília Eleonora Perfil" className="about-img-real" />
                    <div className="experience-badge">
                        <span className="years">23+</span>
                        <span className="label">Anos de<br />Experiência</span>
                    </div>
                </div>

                <div className="about-content-box">
                    <span className="section-subtitle">Muito prazer, sou Marília Eleonora</span>
                    <h2>A Autoridade que Nasceu da Prática</h2>

                    <div className="about-narrative">
                        <p>
                            Minha jornada não começou em livros teóricos, mas <strong>no campo de batalha</strong>.
                            Iniciei como manicure, construindo minha base com atendimento humanizado.
                        </p>
                        <p>
                            Hoje, como <strong>Podóloga Referência</strong>, transformei duas décadas vividas em um método único que une
                            <span className="text-highlight"> Saúde Clínica</span> e <span className="text-highlight">Estratégia de Negócio</span>.
                        </p>

                        <ul className="about-list">
                            <li><CheckCircle size={18} className="list-icon" /> Mentora de Profissionais da Beleza</li>
                            <li><CheckCircle size={18} className="list-icon" /> Especialista em Biossegurança</li>
                            <li><CheckCircle size={18} className="list-icon" /> Criadora do Método Padrão Ouro</li>
                        </ul>
                    </div>

                    <div className="about-stats-row">
                        <div className="stat">
                            <strong>+5k</strong>
                            <span>Alunas</span>
                        </div>
                        <div className="stat">
                            <strong>100%</strong>
                            <span>Aprovado</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
