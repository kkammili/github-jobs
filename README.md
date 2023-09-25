# kkammilis recruiters

FrontEnd - Amazon EC2 
BackEnd - Amazon RDS (Postgres)


FrontEnd deployment - 

Make sure the public folder exists and the updated resume and details zip file is in the public folder
yarn install
yarn build
Move contents in the build folder to /var/www/github-jobs
Note: Configured Nginx root folder as /var/www/github-jobs to serve the website in /etc/nginx/sites-available$ cat default

Backend deployment -
yarn install
cd to the client folder
pm2 start app.js
pm2 startup ----> execute the given command to start pm2 process on reboot
pm2 save

