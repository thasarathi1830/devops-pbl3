FROM node:18-alpine
WORKDIR /app
COPY package.json app.js ./
RUN npm install --omit=dev
USER 1000
EXPOSE 3000
CMD ["node", "app.js"]
