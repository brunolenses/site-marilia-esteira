# Como Atualizar o Site da Marília Eleonora

Este guia explica como substituir as imagens e configurar o sistema de **Download Direto** após a compra.

## 1. Onde colocar seu arquivo PDF

Para que o cliente baixe o e-book, você precisa colocar o arquivo PDF dentro da pasta `public/downloads/`.

1. Crie uma pasta chamada `downloads` dentro da pasta `public`.
2. Cole seus arquivos PDF lá.
3. Se o nome do arquivo for `meu-livro.pdf`, o link será `/downloads/meu-livro.pdf`.

## 2. Como Configurar o Stripe para Redirecionar (O "Pulo do Gato")

Para que o cliente caia na "Página de Sucesso" automaticamente:

1. Acesse sua conta do Stripe ou crie o Link de Pagamento.
2. Nas configurações do Link de Pagamento:
   - Procure a opção **"Redirect after payment" (Redirecionar após pagamento)**.
   - Escolha: "Don't show confirmation page".
   - Coloque a URL do seu site com `/compra-confirmada` no final.
   - *Exemplo:* `https://seusite.com.br/compra-confirmada`

## 3. Como Atualizar os Links de Download na Página de Sucesso

1. Abra o arquivo: `src/components/SuccessPage.jsx`
2. Procure onde está escrito `href="/downloads/manual-biosseguranca.pdf"`.
3. Troque pelo nome do seu arquivo real que você colocou na pasta `public`.

## 4. Onde colocar as Imagens

Todas as imagens visuais do site devem ser salvas na pasta:
`src/assets/`

## 5. Como Alterar Fotos e Produtos

(Consulte o arquivo antigo se precisar de detalhes, mas o processo é o mesmo: editar `src/components/DigitalProducts.jsx` ou `About.jsx`).
