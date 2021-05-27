FROM nginx/unit:1.19.0-python3.7

RUN apt update && apt install -y python3-pip curl libldap2-dev libsasl2-dev && \
    rm -rf /var/lib/apt/lists/*
COPY ./authentication-api/requirements.txt /config/
RUN pip3 install -r /config/requirements.txt
RUN mkdir -p /www/src/

ENV LDAP_HOST=""

COPY ./authentication-api/ /www/
COPY config.json /docker-entrypoint.d/

EXPOSE 8000
