# Use the official MongoDB image
FROM mongo:latest

# Create the directory for the MongoDB data
RUN mkdir -p /data/db

# Copy the properties2.json file to the container
COPY app/mongodb/properties2.json /data/db/properties2.json

# Set the data directory as a volume
VOLUME /data/db

# Expose the default MongoDB port
EXPOSE 27017

# Set the command to start the MongoDB server and use the properties2.json file
CMD ["mongod", "--bind_ip_all", "--noscripting", "--quiet", "--dbpath", "/data/db"]

# 1. 'docker build -t nextjs_mongodb .'
# 2. 'docker run -d --name nextjs_mongodb -v ${PWD}/app/mongodb:/data/db -p 27017:27017 nextjs_mongodb'
# 3. Connection parameters: 'mongodb://localhost:27017/mydatabase'


