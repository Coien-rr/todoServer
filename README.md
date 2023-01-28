<h1 align="center">
  <img
    src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png"
    height="30"
    width="0px"
  />
  🤖 todoServer
  <img
    src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png"
    height="30"
    width="0px"
  />
</h1>

## What is todoServer

This project is my practical work of learning nodejs and express.js

Maybe the todo app is very simple but I would like to implement this project as a server for the todo app that is personally available and synchronised across ends

## Technology stack
- `Web Framework` **[Express.js](http://expressjs.com/)**
- `DataBase && Tool` **[MongoDB](https://www.mongodb.com/) [Mongoose](https://mongoosejs.com/)**
- `API Management` **[Apifox](https://www.apifox.cn/)**

## Structure

```
├──      README.md
└──      config/
│  ├────      corsOptions.js
│  └────      dbConnect.js
└──      controllers/
│  ├────      usersController.js
│  └────      workplaceController.js
├──      index.js
└──      logs/
│  └────      reqLog.txt
└──      middleware/
│  ├────      errorHandler.js
│  └────      logEvents.js
└──      model/
│  ├────      User.js
│  ├────      Workplace.js
│  └────      users.json
├──      package-lock.json
├──      package.json
└──      routes/
│  └────      api/
│  │  ├────      users.js
│  │  └────      workplace.js
```
- `index.js` the entry of the project
- `config` config Database and corsOptions
- `controller` a set of controllers
- `middleware` a set of middlewares in project
- `model` Corresponding  data model in database
- `routes` Use routing to distribute requests
- `package.json` the config of the project

## Usage
`Download`
```sh
git clone https://github.com/Coien-rr/todoServer.git
cd todoServer
```
`Init`
```sh
npm install
```
`Run in dev environment`
```sh
npm run dev
```

## Tips

- Remember that you need to configure your database

