FROM node:21.7.3-alpine as builder

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . .

ARG PUBLIC_URL=/
ENV PUBLIC_URL=${PUBLIC_URL}

ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=${REACT_APP_API_URL}

RUN npm run build

FROM nginx:alpine

ARG PUBLIC_URL=/

COPY --from=builder /app/build /usr/share/nginx/html/${PUBLIC_URL}

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

