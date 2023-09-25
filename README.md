# kkammilis recruiters

FrontEnd - Amazon EC2 
BackEnd - Amazon RDS (postgres)


FrontEnd deployement - 

Make sure public folder exists and updated resume and details zip file is in public folder
yarn install
yarn build
Move contents in build folder to /var/www/github-jobs



Backend deployment -
yarn install
cd in client folder
pm2 start app.js
pm2 startup ----> execute the given command to start pm2 process on reboot
pm2 save

