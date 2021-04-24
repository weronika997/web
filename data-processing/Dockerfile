FROM python:3.8

USER root
RUN mkdir /home/data-processing
WORKDIR /home/data-processing

COPY ./requirements.txt /home/data-processing
RUN /usr/local/bin/python -m pip install --upgrade pip
RUN apt-get update
RUN apt-get -y install curl
RUN apt-get install -y libspatialindex-dev
RUN git clone https://github.com/arup-group/genet.git
RUN pip install -e genet/.
RUN pip install -r /home/data-processing/requirements.txt

RUN mkdir /home/data-processing/data
RUN mkdir /home/data-processing/scripts