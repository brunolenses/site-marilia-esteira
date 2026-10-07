import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import './Mentorship.css';

const Mentorship = () => {
    return (
        <section id="mentorship" className="section mentorship-section">
            <div className="container mentorship-container">
                <div className="mentorship-content">
                    <span className="overline-light">Experiência Exclusiva</span>
                    <h2>Mentoria Presencial One on One</h2>
                    <p className="lead">
                        Você, eu e um ambiente preparado para elevar seu nível técnico e estratégico.
                    </p>

                    <div className="mentorship-details">
                        <p>
                            A mentoria individual é o formato mais nobre de aprendizado.
                            Ao contrário dos cursos em turma, aqui a atenção é 100% voltada para as suas dificuldades,
                            seus objetivos e o seu momento profissional.
                        </p>
                        <ul className="mentorship-benefits">
                            <li><CheckCircle size={20} /> Correção técnica de postura e manuseio</li>
                            <li><CheckCircle size={20} /> Análise de casos clínicos reais</li>
                            <li><CheckCircle size={20} /> Estratégias de precificação e vendas</li>
                            <li><CheckCircle size={20} /> Material didático exclusivo impresso</li>
                        </ul>
                    </div>

                    <a href="#contact" className="btn-light">
                        Solicitar Vaga <ArrowRight size={18} />
                    </a>
                    <p className="disclaimer">*Vagas limitadas devido à agenda clínica.</p>
                </div>

                <div className="mentorship-visual">
                    <div className="visual-circle"></div>
                    <div className="visual-image">
                        {/* Placeholder */}
                        <span>Ambiente Clínico</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mentorship;
