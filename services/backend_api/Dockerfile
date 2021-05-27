FROM nginx/unit:1.19.0-python3.7

RUN apt update && apt install -y python3-pip curl && \
    rm -rf /var/lib/apt/lists/*
COPY ./backend_api/requirements.txt /config/
RUN pip3 install -r /config/requirements.txt

RUN mkdir -p /www/

COPY ./backend_api/ /www/
COPY config.json /docker-entrypoint.d/

ENV REDIS_HOST=""
ENV RABBITMQ_HOST=""
ENV RABBITMQ_USER=""
ENV RABBITMQ_PASSWORD=""

EXPOSE 8000
