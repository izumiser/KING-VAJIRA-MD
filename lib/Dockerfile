FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/Maccoder3/MAC-MD /root/Maccoder3
WORKDIR /root/Maccoder3/
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
