FROM node:20
WORKDIR /docker-app
copy . .
RUN npm install
EXPOSE 3000
CMD ["npm", "run","dev"]