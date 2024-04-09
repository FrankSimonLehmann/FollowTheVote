FROM node:20 AS builder

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install --no-save

COPY nuxt.config.ts ./
COPY app.config.ts ./
COPY tailwind.config.js ./
COPY app.vue ./
#COPY error.vue ./
#COPY middleware middleware
COPY assets assets
COPY plugins plugins
COPY server server
#COPY layouts layouts
#COPY graphql-types.ts ./
#COPY composables composables
COPY components components
COPY pages pages
COPY public public

RUN npm run build

#FROM node:18-alpine
FROM node:20

WORKDIR /app

USER node

COPY --from=builder /app/.output .output
COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json ./

ENTRYPOINT ["npm", "run", "start"]
