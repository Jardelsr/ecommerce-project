# Use a imagem oficial do Node.js como base
FROM node:16-alpine

# Define o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copia o package.json e package-lock.json
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia todo o código da aplicação para o diretório de trabalho do contêiner
COPY . .

# Expõe a porta que a aplicação irá rodar
EXPOSE 5000

# Comando para iniciar a aplicação
CMD ["node", "server.js"]
