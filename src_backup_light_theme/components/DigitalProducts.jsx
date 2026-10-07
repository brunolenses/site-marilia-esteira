import React from 'react';
import { BookOpen, ArrowRight, MessageCircle } from 'lucide-react';
import capaEbook1 from '../assets/capa ebook-clube-das-unhas.png';
import capaEbook2 from '../assets/capa-curso-introducao-manicure-pedicure-.png';
import capaEbook3 from '../assets/capa-curso-.png';
import './DigitalProducts.css';

const products = [
    {
        id: 1,
        title: "Clube das Unhas",
        description: "Tudo o que você precisa saber sobre o universo das unhas em um material exclusivo.",
        pill: "Exclusivo",
        price: "R$ 39,90",
        image: capaEbook1,
        isDirectPurchase: true,
        link: "https://stripe.com" // Placeholder for Stripe
    },
    {
        id: 2,
        title: "Introdução Manicure & Pedicure",
        description: "O guia fundamental para iniciar com a técnica correta e postura profissional.",
        pill: "Fundamental",
        price: "Consulte Valores",
        image: capaEbook2,
        isDirectPurchase: false,
        link: "https://wa.me/5500000000000" // Placeholder WhatsApp
    },
    {
        id: 3,
        title: "Curso Especialização",
        description: "Expanda suas técnicas e ofereça diferenciais artísticos para suas clientes.",
        pill: "Especialização",
        price: "Consulte Valores",
        image: capaEbook3,
        isDirectPurchase: false,
        link: "https://wa.me/5500000000000" // Placeholder WhatsApp
    }
];

const DigitalProducts = () => {
    return (
        <section id="products" className="section products-section">
            <div className="container">
                <div className="products-header">
                    <span className="overline">Conhecimento que Transforma</span>
                    <h2>E-Books & Materiais Digitais</h2>
                    <p>O melhor do meu conhecimento prático, condensado em materiais diretos e aplicáveis.</p>
                </div>

                <div className="products-grid">
                    {products.map((product) => (
                        <div key={product.id} className="product-card">
                            <div className="card-image">
                                <img src={product.image} alt={product.title} className="product-img-real" />
                            </div>
                            <div className="card-content">
                                <div className="value-pill">{product.pill}</div>
                                <h3>{product.title}</h3>
                                <p>{product.description}</p>
                                <div className="card-footer">
                                    <span className="price">{product.price}</span>
                                    <a
                                        href={product.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={product.isDirectPurchase ? "btn-card" : "btn-card-outline"}
                                    >
                                        {product.isDirectPurchase ? (
                                            <>Comprar <ArrowRight size={16} /></>
                                        ) : (
                                            <>Saiba Mais <MessageCircle size={16} /></>
                                        )}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default DigitalProducts;
