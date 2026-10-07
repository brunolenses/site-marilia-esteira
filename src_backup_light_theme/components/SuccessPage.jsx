import React from 'react';
import { Download, CheckCircle, ArrowLeft } from 'lucide-react';
import './SuccessPage.css';

const SuccessPage = () => {
    return (
        <div className="success-page">
            <div className="container success-container">
                <div className="success-card">
                    <div className="icon-wrapper">
                        <CheckCircle size={64} className="success-icon" />
                    </div>

                    <h1>Compra Confirmada!</h1>
                    <p className="subtitle">Seja bem-vinda ao próximo nível da sua carreira.</p>

                    <div className="download-area">
                        <p>Seu material já está liberado para download.</p>

                        <div className="download-item">
                            <span className="file-name">E-book: Clube das Unhas (Arte 1)</span>
                            <a href="/downloads/ARTE1.pdf.pdf" download className="btn-download">
                                <Download size={18} /> Baixar Agora
                            </a>
                        </div>

                        <div className="download-item">
                            <span className="file-name">Guia de Decoração</span>
                            <a href="/downloads/Ebook Guia de Decoração .pdf" download className="btn-download">
                                <Download size={18} /> Baixar Agora
                            </a>
                        </div>

                        <p className="note">
                            Recomendamos salvar o arquivo em um local seguro (Google Drive ou computador).
                            Qualquer dúvida, entre em contato pelo WhatsApp.
                        </p>
                    </div>

                    <a href="/" className="btn-back">
                        <ArrowLeft size={16} /> Voltar para o início
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SuccessPage;
