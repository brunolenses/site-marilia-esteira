import React, { useEffect, useRef } from 'react';
import capaEbook1 from './assets/capa ebook-clube-das-unhas.png';
import capaEbook2 from './assets/capa-curso-introducao-manicure-pedicure-.png';
import capaEbook3 from './assets/capa-curso-.png';
import capaProtocolo from './assets/capa-protocolo-novo.jpg';
import capaAnamnese from './assets/capa-anamnese-novo.jpg';
import './Editorial.css';

// Hook de animação suave (Fade-in e Translate-up)
const Reveal = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            if(ref.current) ref.current.classList.add('is-visible');
          }, delay);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);
  return <div ref={ref} className="reveal">{children}</div>;
};

// Componente simples de Accordion para FAQ
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className={`faq-item ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
      <div className="faq-question">
        {question} <span>{isOpen ? '−' : '+'}</span>
      </div>
      <div className="faq-answer">{answer}</div>
    </div>
  );
};

const products = [
  {
      id: 1,
      title: "Introdução à Manicure",
      description: "O guia fundamental para iniciar do zero com a técnica correta e postura profissional.",
      pill: "INICIANTE",
      price: "R$ 9,90",
      image: capaEbook2,
      link: "#kiwify-checkout-link-1"
  },
  {
      id: 5,
      title: "Ficha de Anamnese Profissional",
      description: "Eleve o nível do seu atendimento com uma ficha profissional, organizada e pronta para uso.",
      pill: "FERRAMENTA",
      price: "R$ 9,90",
      image: capaAnamnese,
      link: "https://pay.cakto.com.br/a363aqv_1181037"
  },
  {
      id: 2,
      title: "Protocolo de Precificação",
      description: "Descubra como cobrar o valor justo pelo seu trabalho e reajustar sem medo.",
      pill: "ESSENCIAL",
      price: "R$ 19,90",
      image: capaProtocolo,
      link: "#kiwify-checkout-link-2"
  },
  {
      id: 3,
      title: "Clube das Unhas",
      description: "Técnicas avançadas, spa dos pés premium e os segredos do universo das unhas.",
      pill: "AVANÇADO",
      price: "R$ 29,90",
      image: capaEbook1,
      link: "#kiwify-checkout-link-3"
  },
  {
      id: 4,
      title: "Curso Presencial Premium",
      description: "Expanda suas técnicas e ofereça diferenciais artísticos na sua região.",
      pill: "FORMAÇÃO PRESENCIAL",
      price: "R$ 1.497,00",
      image: capaEbook3,
      link: "#kiwify-checkout-link-4"
  }
];

function App() {
  return (
    <div className="editorial-app">
      {/* HEADER */}
      <header className="header">
        <div className="container header-content">
          <div>
            <div className="logo-text">MARÍLIA ELEONORA</div>
            <div className="logo-sub">PODÓLOGA</div>
          </div>
          <nav className="nav-desktop">
            <a href="#esteira">Protocolos</a>
            <a href="#metodologia">Manifesto</a>
            <a href="#duvidas">Dúvidas</a>
            <a href="#esteira" className="cta" style={{ padding: '12px 24px' }}>Ver Produtos</a>
          </nav>
          <div className="nav-mobile">☰</div>
        </div>
      </header>

      {/* HERO (Vitrine de Marca) */}
      <section className="hero container">
        <div className="hero-text">
          <Reveal>
            <h1>Conheça os Protocolos Marília Eleonora.</h1>
          </Reveal>
          <Reveal delay={200}>
            <p>Ferramentas e conhecimento para profissionais que querem elevar o padrão do próprio atendimento.</p>
          </Reveal>
          <Reveal delay={400}>
            <a href="#esteira" className="cta">Conhecer os Protocolos</a>
          </Reveal>
        </div>
        <Reveal delay={600}>
          <div className="hero-image">
            <img src={capaProtocolo} alt="Unhas Premium" />
          </div>
        </Reveal>
      </section>

      {/* MICRO PROOF */}
      <div className="micro-proof">
        <Reveal>
          <span>TÉCNICA • BIOSSEGURANÇA • POSICIONAMENTO • LUXO</span>
        </Reveal>
      </div>

      {/* ESTEIRA DE PRODUTOS */}
      <section className="esteira-section" id="esteira">
        <div className="container">
          <Reveal>
            <div className="esteira-header">
              <h2>A Sua Esteira de Sucesso</h2>
              <p>Escolha o seu momento. Uma biblioteca de recursos para quem não aceita ser apenas mais uma no mercado.</p>
            </div>
          </Reveal>
          
          <div className="esteira-grid">
            {products.map((product, index) => (
              <Reveal key={product.id} delay={index * 100}>
                <div className="ed-card">
                  <div className="ed-card-img-wrapper">
                    <img src={product.image} alt={product.title} />
                  </div>
                  <div className="ed-card-pill">{product.pill}</div>
                  <h3 className="ed-card-title">{product.title}</h3>
                  <p className="ed-card-desc">{product.description}</p>
                  <div className="ed-card-footer">
                    <span className="ed-card-price">{product.price}</span>
                    <a href={product.link} className="btn-card">Adquirir →</a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFESTO DA MARCA */}
      <section className="highlight-banner" id="metodologia">
        <div className="container highlight-grid">
          <Reveal>
            <div className="highlight-img">
              <img src={capaAnamnese} alt="Manifesto de Marca" />
            </div>
          </Reveal>
          <div className="highlight-text">
            <Reveal delay={200}>
              <h2>Profissionalismo é intencional.</h2>
              <p>Você não precisa investir muito para começar a profissionalizar seu processo. O que separa um atendimento comum de um serviço de excelência não é o tamanho da sua clínica, mas a estruturação de cada etapa.</p>
              <p>Nossos materiais e ferramentas foram desenhados para que você tenha segurança técnica, organização e um posicionamento irresistível para as suas clientes.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="duvidas">
        <div className="faq-container">
          <Reveal>
            <h2>Dúvidas Frequentes</h2>
          </Reveal>
          <Reveal delay={200}>
            <FaqItem question="Como recebo o acesso?" answer="O acesso a todos os materiais e arquivos em PDF é enviado imediatamente para o seu e-mail logo após a confirmação do pagamento na plataforma Kiwify." />
            <FaqItem question="Os e-books podem ser impressos?" answer="Sim. Todos os nossos protocolos, incluindo a Ficha de Anamnese Profissional, possuem qualidade e formatação prontas para impressão." />
            <FaqItem question="Posso personalizar a Ficha de Anamnese?" answer="Sim! A ficha é enviada limpa, sem a nossa logomarca no cabeçalho, com um espaço em branco perfeito para você adicionar o seu próprio logotipo." />
            <FaqItem question="Quais as formas de pagamento?" answer="Você pode adquirir qualquer material no PIX (acesso imediato), Cartão de Crédito ou Boleto Bancário." />
            <FaqItem question="Para quem os materiais são indicados?" answer="Para manicures iniciantes, profissionais avançadas e podólogas que desejam refinar sua técnica, organizar o atendimento e precificar corretamente seus serviços." />
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-logo">MARÍLIA ELEONORA</div>
          <div className="footer-motto">Cuidado • Organização • Profissionalismo</div>
          <div className="footer-links">
            <a href="#">Termos</a>
            <a href="#">Privacidade</a>
            <a href="#">Contato</a>
          </div>
          <div className="footer-copy">© 2026 Marília Eleonora</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
