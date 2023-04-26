FROM node:18

WORKDIR /app

COPY . .

# idk if i need this
#CMD ["npm", "install", "redis"]

EXPOSE 80

CMD ["node", "app.js"]
