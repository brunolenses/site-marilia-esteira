import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="container footer-container">
                <div className="footer-brand">
                    <span className="logo-text">Marília Eleonora</span>
                    <p>Podologia, Saúde e Estratégia.</p>
                </div>

                <div className="footer-links">
                    <h4>Navegação</h4>
                    <a href="#about">Quem Sou</a>
                    <a href="#products">E-Books</a>
                    <a href="#mentorship">Mentoria</a>
                </div>

                <div className="footer-social">
                    <h4>Contato</h4>
                    <a href="mailto:contato@mariliaeleonora.com">contato@mariliaeleonora.com.br</a>
                    <a href="#">Instagram</a>
                    <a href="#">WhatsApp</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Marília Eleonora. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
