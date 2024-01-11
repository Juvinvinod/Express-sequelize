This app is builded using expressJS with sequelize as ORM using POSTGRES as database.
To RUN this application follow these steps:
1) Run npm install 
2) Rename file "example.config.json" to "config.json" present inside config folder
3) Enter the username,password,database,host details of postgres inside the file
4) Rename file name ".env.example" to ".env"
5) Enter the port number inside .env
6) App can be started using the command "npm run dev"
7) migrations and seeding are done using sequelize-cli
8) create a db using the command "npx sequelize db:create"
9) next perform migration using "npx sequelize db:migrate"
10) seeding of dummy data done using "npx sequelize db:seed:all"
 Note: The password for all the dummy data is "asdf1234",The token is added in dummy data.Token can be used for protected routes