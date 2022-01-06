FROM node:14

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

# Copying source files
COPY . .

# Installing dependencies
RUN yarn

# Building app
RUN yarn run build

# Running the app
CMD [ "yarn", "start" ]