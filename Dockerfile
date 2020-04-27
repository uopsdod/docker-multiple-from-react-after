### 1st FROM - build environment

FROM node
# after downloading node image, we now have node as our build environment
COPY package.json .
RUN npm install
# after npm install, we now have useful scripts in node_modules folder (ex. npm run build, npm start)
COPY . .
# after copy, we now have our front-end project code inside the container 
RUN npm run build
# after npm run build, we now have deployable artifact of our project 
# ENTRYPOINT ["npm", "start"]
# remove the entrypoint here 

### 2nd FROM - deploy environment 

FROM nginx
# after downloading nginx image, we now have node as our deploy environment
COPY --from=0  ./build/ /usr/share/nginx/html/
# after copy, we now copy our front-end project code from the 1st-FROM image to the current container
COPY nginx.conf /etc/nginx/
# after copy, we now copy the nginx configuration file from the 1st-FROM image to the current container
ENTRYPOINT ["nginx", "-g", "daemon off;"]
# after entrypoint, we use nginx server to run our front-end project when our container is up 

