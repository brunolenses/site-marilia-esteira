import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import './FAQ.css';

const faqData = [
    {
        question: "Para quem é este material?",
        answer: "Para profissionais (manicures, pedicures, podólogas) que desejam elevar seu nível técnico, posicionamento e faturamento. Não é voltado para amadores curiosos, mas para quem encara a profissão como negócio."
    },
    {
        question: "Preciso ser podóloga formada?",
        answer: "Não necessariamente. Os materiais de posicionamento e biossegurança servem para qualquer profissional da beleza. Os conteúdos técnicos específicos indicam o nível de conhecimento prévio necessário na descrição."
    },
    {
        question: "Como recebo o acesso?",
        answer: "Imediatamente após a confirmação do pagamento, você receberá um e-mail com o link de download ou acesso à área de membros. É simples e automático."
    },
    {
        question: "Os e-books substituem cursos presenciais?",
        answer: "Os e-books são aprofundamentos teóricos e estratégicos essenciais. Eles aceleram seu aprendizado e servem como guia de consulta rápida. Para correções de postura e prática manual, recomendo minha Mentoria Presencial."
    }
];

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
            <div className="faq-question">
                <h4>{question}</h4>
                {isOpen ? <Minus size={20} /> : <Plus size={20} />}
            </div>
            <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
                <p>{answer}</p>
            </div>
        </div>
    );
};

const FAQ = () => {
    return (
        <section className="section faq-section">
            <div className="container">
                <h2 className="faq-title">Perguntas Frequentes</h2>
                <div className="faq-grid">
                    {faqData.map((item, index) => (
                        <FAQItem key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
