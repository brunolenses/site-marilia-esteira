import React from 'react';
import { Star } from 'lucide-react';
import capaEbook1 from '../assets/capa ebook-clube-das-unhas.png';
import capaEbook2 from '../assets/capa-curso-introducao-manicure-pedicure-.png';
import capaEbook3 from '../assets/capa-curso-.png';
import capaProtocolo from '../assets/capa-protocolo-novo.jpg';
import capaAnamnese from '../assets/capa-anamnese-novo.jpg';
import './DigitalProducts.css';

const products = [
    {
        id: 1,
        title: "Introdução à Manicure & Pedicure",
        description: "O guia fundamental para iniciar do zero com a técnica correta e postura profissional.",
        pill: "INICIANTE",
        price: "R$ 9,90",
        image: capaEbook2,
        isDirectPurchase: true,
        link: "#kiwify-checkout-link-1"
    },
    {
        id: 5,
        title: "Ficha de Anamnese Profissional",
        description: "Eleve o nível do seu atendimento e proteja-se legalmente. Modelo em PDF pronto para imprimir.",
        pill: "FERRAMENTA",
        price: "R$ 9,90",
        image: capaAnamnese,
        isDirectPurchase: true,
        link: "#kiwify-checkout-link-5"
    },
    {
        id: 2,
        title: "Protocolo de Precificação",
        description: "Descubra como cobrar o valor justo pelo seu trabalho e como avisar suas clientes do reajuste sem medo.",
        pill: "ESSENCIAL",
        price: "R$ 19,90",
        image: capaProtocolo,
        isDirectPurchase: true,
        link: "#kiwify-checkout-link-2"
    },
    {
        id: 3,
        title: "Clube das Unhas",
        description: "Técnicas avançadas e os segredos do universo das unhas em um material exclusivo.",
        pill: "MAIS VENDIDO",
        price: "R$ 29,90",
        image: capaEbook1,
        isDirectPurchase: true,
        link: "#kiwify-checkout-link-3"
    },
    {
        id: 4,
        title: "Curso Especialização Premium",
        description: "Expanda suas técnicas e ofereça diferenciais artísticos. Torne-se a autoridade na sua região.",
        pill: "FORMAÇÃO",
        price: "R$ 197,00",
        image: capaEbook3,
        isDirectPurchase: false,
        link: "#kiwify-checkout-link-4"
    }
];

const DigitalProducts = () => {
    return (
        <section id="products" className="section products-section">
            <div className="container">
                <div className="products-header">
                    <span className="overline">Conhecimento que Transforma</span>
                    <h2>A Sua <span className="text-highlight">Esteira de Sucesso</span></h2>
                    <p>Do primeiro contato com o alicate até a gestão financeira do seu negócio. Escolha o seu momento.</p>
                </div>

                <div className="products-grid">
                    {products.map((product) => (
                        <div key={product.id} className="product-card">
                            <div className="card-image">
                                <img src={product.image} alt={product.title} className="product-img-real" />
                            </div>
                            <div className="card-content">
                                <div className="card-meta">
                                    <div className="value-pill">{product.pill}</div>
                                    <div className="stars">
                                        <Star size={12} fill="#C6A87C" color="#C6A87C" />
                                        <Star size={12} fill="#C6A87C" color="#C6A87C" />
                                        <Star size={12} fill="#C6A87C" color="#C6A87C" />
                                        <Star size={12} fill="#C6A87C" color="#C6A87C" />
                                        <Star size={12} fill="#C6A87C" color="#C6A87C" />
                                    </div>
                                </div>
                                <h3>{product.title}</h3>
                                <p>{product.description}</p>
                                <div className="card-footer">
                                    <span className="price">{product.price}</span>
                                    <a
                                        href={product.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={product.isDirectPurchase ? "btn-card btn-gold" : "btn-card-outline"}
                                    >
                                        {product.isDirectPurchase ? "COMPRAR AGORA" : "SAIBA MAIS"}
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
