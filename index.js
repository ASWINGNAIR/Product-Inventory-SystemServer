// import json library
const jsonServer = require ('json-server')

// create the server
const ProductsServer = jsonServer.create()

// middleware to parse the json format
const middleware = jsonServer.defaults()

// setup the path to store data
const router = jsonServer.router('db.json')

// Ask the server to use the middleware
ProductsServer.use(middleware)
ProductsServer.use(router)

// set port for server
const PORT = 4000 || process.env.PORT

// Listen to the port
ProductsServer.listen(PORT,()=>{
    console.log(`Server running successfully at PORT NO ${PORT}`);
})