FROM caddy:2-alpine
COPY Caddyfile /etc/caddy/Caddyfile
COPY index.html favicon.svg /srv/
COPY assets /srv/assets
