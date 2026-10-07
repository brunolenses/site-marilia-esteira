import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-content">
                <div className="logo">
                    Marília Eleonora
                </div>

                <nav className={`desktop-nav`}>
                    <a href="#about">Quem Sou</a>
                    <a href="#products">E-Books</a>
                    <a href="#mentorship">Mentoria</a>
                    <a href="#contact" className="btn-small">Contato</a>
                </nav>

                <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {isMobileMenuOpen && (
                    <nav className="mobile-nav">
                        <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>Quem Sou</a>
                        <a href="#products" onClick={() => setIsMobileMenuOpen(false)}>E-Books</a>
                        <a href="#mentorship" onClick={() => setIsMobileMenuOpen(false)}>Mentoria</a>
                        <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contato</a>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;
