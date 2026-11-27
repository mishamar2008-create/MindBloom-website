FROM oven/bun:1-alpine
WORKDIR /app
COPY server.ts telegram.ts ./
COPY public ./public
ENV NODE_ENV=production
CMD ["bun", "run", "server.ts"]
