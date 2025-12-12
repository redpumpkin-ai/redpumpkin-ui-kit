FROM node:22-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 6006 

CMD ["npm", "run", "storybook", "--", "--no-open"]