FROM node:16

WORKDIR /app

COPY . .

EXPOSE 80

CMD ["node", "app.js"]
