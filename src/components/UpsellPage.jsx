import React, { useEffect } from 'react';
import './UpsellPage.css';
import capaClube from '../assets/capa ebook-clube-das-unhas.png';

const UpsellPage = () => {
  useEffect(() => {
    // Injeta o script da Cakto na página
    const script = document.createElement('script');
    script.src = "https://caktoscripts.nyc3.cdn.digitaloceanspaces.com/upsell.js";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="upsell-container">
      <div className="upsell-header">
        <div className="progress-bar"><div className="progress-fill"></div></div>
        <p><strong>ESPERE!</strong> Seu pedido foi aprovado, mas não feche essa página ainda!</p>
      </div>
      
      <div className="upsell-content">
        <h1>Você acaba de dar o primeiro passo para profissionalizar seu atendimento.</h1>
        <p>Já que você está levando a sua profissão a sério, eu quero te fazer um <strong>convite exclusivo</strong>.</p>
        
        <div className="upsell-product-card">
          <img src={capaClube} alt="Clube das Unhas" />
          <div className="upsell-text">
            <h2>Clube das Unhas: Estratégias Premium</h2>
            <p>O seu passaporte para o mercado de alto padrão. Domine a ciência por trás da esmaltação em gel, monte um Spa dos Pés lucrativo e aprenda a tirar fotos que vendem no Instagram.</p>
            <p className="upsell-price">Adicione ao seu pedido agora por apenas <strong>R$ 29,90</strong></p>
          </div>
        </div>

        <div className="cakto-buttons-wrapper">
          {/* Componentes Customizados gerados pela Cakto */}
          <cakto-upsell-buttons>
            <cakto-upsell-accept
              bg-color="#27ae60"
              text-color="#FFFFFF"
              upsell-accept-url="members_area"
              offer-id="36qmanm"
              app-base-url="https://app.cakto.com.br"
              offer-type="upsell"
              upsell-reject-url="members_area"   
            >
              SIM, QUERO ADICIONAR O CLUBE DAS UNHAS (R$ 29,90)
            </cakto-upsell-accept>
            
            <cakto-upsell-reject
              upsell-reject-url="members_area"       
            >
              Não, prefiro continuar com o atendimento comum
            </cakto-upsell-reject>
          </cakto-upsell-buttons>
        </div>
      </div>
    </div>
  );
};

export default UpsellPage;
