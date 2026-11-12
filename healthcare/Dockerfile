FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY app.js ./

USER 1000:1000

EXPOSE 3000

CMD ["node", "app.js"]
