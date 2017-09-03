FROM node:6.2.0
EXPOSE 5001

# Create app directory
ADD . /polisClientParticipation
WORKDIR /polisClientParticipation

RUN git config --global url."https://".insteadOf git://
RUN npm install bower -g --allow-root
RUN npm install gulp@3.8 -g 
RUN npm install
RUN bower install --allow-root

CMD ./start.sh
