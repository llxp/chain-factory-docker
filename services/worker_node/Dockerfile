FROM python:3.8.6-alpine3.11

RUN apk add --no-cache build-base openldap-dev python2-dev python3-dev

COPY ./worker_node/requirements.txt /app/

RUN pip install -r /app/requirements.txt

COPY ./worker_node/src /app/src/
COPY ./worker_node/main.py /app/
COPY ./worker_node/workflows /app/workflows/

ENTRYPOINT python3 /app/main.py
