import React from 'react';
import { ShoppingBag } from 'lucide-react';
import escaldaPesImage from '../assets/produto-escalda-pes.png';
import './PhysicalProducts.css';

const PhysicalProducts = () => {
    return (
        <section className="section physical-products-section">
            <div className="container">
                <div className="centered-header">
                    <h2>Rituais e Cuidados</h2>
                    <p>Produtos físicos selecionados para prolongar a experiência de bem-estar.</p>
                </div>

                <div className="physical-grid">
                    <div className="physical-card">
                        <div className="physical-image-wrapper">
                            <img src={escaldaPesImage} alt="Escalda Pés" className="physical-img-real" />
                        </div>
                        <div className="physical-content">
                            <h3>Escalda Pés Botânico</h3>
                            <p>Blend de ervas e óleos essenciais para desinflamar e relaxar.</p>
                            <div className="tag-order">Sob Encomenda</div>
                            <a href="https://w.app/bvn2qx" target="_blank" rel="noopener noreferrer" className="btn-link">
                                Encomendar no WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Se quiser adicionar mais produtos, copie o bloco acima */}
                </div>
            </div>
        </section>
    );
};

export default PhysicalProducts;
