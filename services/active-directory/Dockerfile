FROM ubuntu:xenial
MAINTAINER Fmstrat <fmstrat@NOSPAM.NO>

ENV DEBIAN_FRONTEND noninteractive

RUN groupadd -g 999 appuser && \
    useradd -r -u 999 -g appuser appuser

RUN apt-get update && apt-get upgrade -y

# Install all apps
# The third line is for multi-site config (ping is for testing later)
RUN apt-get install -y pkg-config
RUN apt-get install -y attr acl samba smbclient ldap-utils winbind libnss-winbind libpam-winbind krb5-user krb5-kdc supervisor
RUN apt-get install -y inetutils-ping

# Set up script and run
ADD init.sh /init.sh
ADD group_setup.sh /group_setup.sh
RUN chmod 755 /init.sh
RUN chmod 755 /group_setup.sh
#USER appuser
CMD /init.sh setup
