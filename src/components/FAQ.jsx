import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import './FAQ.css';

const faqData = [
    {
        question: "Sou iniciante começando do zero. Esse material serve para mim?",
        answer: "Sim! Se você está começando, indico que adquira o guia de 'Introdução à Manicure & Pedicure'. Ele foi criado justamente para quem quer dar os primeiros passos com a técnica correta e sem vícios."
    },
    {
        question: "Já sou profissional, o que eu ganho com isso?",
        answer: "Muito. Profissionais travam na hora de cobrar e de atrair clientes dispostas a pagar mais. O 'Protocolo de Precificação' e o 'Clube das Unhas' são exatamente para você virar a chave da valorização e do lucro."
    },
    {
        question: "Como vou receber os e-books e PDFs?",
        answer: "Assim que o pagamento for aprovado (pagamentos via PIX ou Cartão liberam na hora), você receberá um e-mail com acesso imediato para baixar o material e ler no celular ou computador."
    },
    {
        question: "Como funciona a garantia?",
        answer: "Você tem 7 dias de garantia incondicional. Se você ler o material, aplicar as técnicas e achar que não te ajudou em nada, nós devolvemos 100% do seu dinheiro. O risco é todo meu."
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
                <h2 className="faq-title">Ainda tem dúvidas?</h2>
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
