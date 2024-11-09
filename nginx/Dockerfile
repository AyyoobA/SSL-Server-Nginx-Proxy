FROM --platform=Linux/amd64 nginx:alpine

COPY nginx.conf /etc/nginx/

COPY cert.pem /etc/nginx/

COPY key.pem /etc/nginx/

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]

