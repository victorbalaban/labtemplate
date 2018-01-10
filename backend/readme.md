# Express and sequelizejs 


## run the backend
```sh
    nodemon ./bin/www
```

after you setup the connection info for the database in src/config/config.js run
```sh
sequelize db:migrate
```
this will create the tables in your database.

for generatic models 
```sh 
sequelize model:create --name Todo --attributes title:string
sequelize model:create --name sport --attributes name:string, location:string, date:date, time:time, description:string, type:string
sequelize model:create --name sport --attributes name:string,location:string,date:date,time:time,description:string,type:string
sequelize model:create --name cinema --attributes name:string,location:string,date:date,time:time,genre:string,room:string
sequelize model:create --name concert --attributes name:string,band:string,date:date,time:time,genre:string
sequelize model:create --name food --attributes name:string,location:string,type:string,program:string
sequelize model:create --name pub --attributes name:string,location:string,program:string
``` 
more on the tutorial url
### Docs
https://scotch.io/tutorials/getting-started-with-node-express-and-postgres-using-sequelize