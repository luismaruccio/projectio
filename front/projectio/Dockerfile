FROM node:18.16.1

WORKDIR /

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

RUN yarn build

CMD ["yarn", "start"]