import React from 'react';
import './MentorshipPage.css';
import mariliaPhoto from '../assets/marilia-eleonora.jpg';

const MentorshipPage = () => {
  return (
    <div className="mentorship-container">
      <section className="mentorship-hero">
        <div className="hero-content">
          <h1>Formação Presencial Premium</h1>
          <p className="hero-subtitle">Eleve o seu padrão. Aprenda as técnicas exclusivas e a mentalidade que me permitiram construir uma agenda lotada e um posicionamento de luxo.</p>
          <a href="https://wa.me/5515997438347?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Formação%20Presencial%20Premium." target="_blank" rel="noreferrer" className="btn-primary">Aplicar para a Mentoria</a>
        </div>
        <div className="hero-image-wrapper">
          <img src={mariliaPhoto} alt="Marília Eleonora" className="hero-image" />
        </div>
      </section>

      <section className="mentorship-about">
        <div className="about-text">
          <h2>Quem é Marília Eleonora?</h2>
          <p>Especialista em Podologia e Estética, com anos de experiência em transformar a saúde e a autoestima de centenas de clientes.</p>
          <p>Meu foco não é apenas ensinar a "fazer unhas". Minha missão é formar profissionais de excelência que dominam a técnica perfeita (como o Spa dos Pés e a Esmaltação em Gel) e que sabem se posicionar no mercado para cobrar o valor justo que realmente merecem.</p>
        </div>
      </section>

      <section className="mentorship-program">
        <h2>O que você vai dominar</h2>
        <div className="program-grid">
          <div className="program-card">
            <h3>Biossegurança e Postura</h3>
            <p>O alicerce de um atendimento impecável. Aprenda os protocolos oficiais para garantir a segurança clínica que atrai clientes de alto padrão.</p>
          </div>
          <div className="program-card">
            <h3>Técnica Premium</h3>
            <p>Esmaltação em gel sem falhas, cutilagem perfeita e o Spa dos Pés que vai se tornar o serviço mais desejado e rentável do seu espaço.</p>
          </div>
          <div className="program-card">
            <h3>Posicionamento de Valor</h3>
            <p>Descubra como criar uma experiência única de atendimento, tirar fotos que vendem no Instagram e aplicar a precificação correta na sua tabela.</p>
          </div>
        </div>
      </section>

      <section className="mentorship-cta">
        <h2>Pronta para o próximo nível?</h2>
        <p>A Formação Presencial é exclusiva, feita para lapidar a sua técnica de perto. Possuímos vagas limitadíssimas para garantir atenção máxima ao seu desenvolvimento.</p>
        <p className="price-tag">Investimento: R$ 1.497,00</p>
        <a href="https://wa.me/5515997438347?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Formação%20Presencial%20Premium." target="_blank" rel="noreferrer" className="btn-primary-large">Falar com a Equipe no WhatsApp</a>
      </section>
    </div>
  );
};

export default MentorshipPage;
