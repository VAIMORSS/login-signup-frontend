# pull official base image
FROM node:alpine

# set working directory
WORKDIR /client

# add `/app/node_modules/.bin` to $PATH
ENV PATH /client/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --silent
RUN yarn global add react-scripts

# add app
COPY . ./

# start app
CMD ["yarn", "start"]