FROM node:0.12.7
EXPOSE 5001

# Create app directory
ADD . /code
WORKDIR /code

RUN npm install bower -g --allow-root
RUN npm install gulp -g 

#RUN npm install

CMD ["sleep", "infinity"]
#CMD ["npm", "start"]

