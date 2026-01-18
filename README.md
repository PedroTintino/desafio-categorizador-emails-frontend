<<<<<<< HEAD
📧 Email Analyzer – Classificação Inteligente de Emails

Aplicação web desenvolvida como parte de um desafio técnico cujo objetivo é automatizar a leitura, classificação e sugestão de respostas para emails, utilizando Inteligência Artificial e Processamento de Linguagem Natural (NLP).

A solução ajuda empresas a lidarem com grandes volumes de emails, reduzindo trabalho manual e aumentando a produtividade das equipes.

🚀 Funcionalidades

📩 Inserção de texto do email para análise

🤖 Classificação automática em:

Produtivo

Improdutivo

💬 Geração de resposta automática sugerida

📊 Histórico dos últimos emails analisados

⏳ Feedback visual de carregamento durante a análise

🎨 Interface moderna e responsiva

🧠 Tecnologias Utilizadas
Frontend

React + TypeScript

Vite

Tailwind CSS

Fetch API para comunicação com o backend

Backend

Python

FastAPI

Pydantic

Serviço de IA para:

Classificação de emails

Geração de respostas automáticas

⚙️ Como Rodar Localmente
🔹 Backend

Clone o repositório:

git clone https://github.com/seu-usuario/seu-repo-backend.git
cd emailanalyzer-back


Crie e ative o ambiente virtual:

python -m venv venv
source venv/bin/activate   # Linux/Mac
venv\Scripts\activate      # Windows


Instale as dependências:

pip install -r requirements.txt


Inicie o servidor:

uvicorn app.main:app --reload


Backend disponível em:

http://127.0.0.1:8000

🔹 Frontend

Clone o repositório:

git clone https://github.com/seu-usuario/seu-repo-frontend.git
cd emailanalyzer-front


Instale as dependências:

npm install


Crie o arquivo .env:

VITE_API_URL=http://127.0.0.1:8000


Rode o projeto:

npm run dev


Frontend disponível em:

http://localhost:5173

🔌 Integração Frontend ↔ Backend

O frontend se comunica com o backend via requisições HTTP POST:

POST /analyze-email

Exemplo de payload:
{
  "content": "Happy new year!"
}

Exemplo de resposta:
{
  "category": "Improdutivo",
  "suggested_response": "Obrigado pela mensagem! Desejamos um ótimo ano para você."
}

☁️ Deploy

Frontend: Vercel

Backend: Render

O projeto foi configurado para uso de variáveis de ambiente, permitindo fácil adaptação entre ambientes local e produção.

