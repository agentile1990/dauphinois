FROM node:14-alpine
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY ["package.json", "yarn.lock*", "./"]
RUN yarn build && mv node_modules ../
COPY . .
CMD yarn start
