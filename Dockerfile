FROM node:20-alpine AS deps

RUN npm install -g pnpm
WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile
RUN rm -f ~/.npmrc

FROM node:20-alpine AS builder

RUN npm install -g pnpm
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG NODE_ENV
ARG API_URL
ARG SITE_URL

ENV NODE_ENV=$NODE_ENV
ENV NEXT_PUBLIC_API_URL=$API_URL
ENV SITE_URL=$SITE_URL

RUN pnpm build

FROM gcr.io/distroless/nodejs20-debian12 as runner

WORKDIR /app

COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

EXPOSE 3000
ENV HOSTNAME "0.0.0.0"

CMD ["server.js"]
