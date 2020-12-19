# Basic API with express
## Main purpose
* Provide some basic concepts about APIs with express.js and node.js.
## Useful links
* [How does most web applications work?](https://chunksofco.de/front-end-vs-back-end-vs-client-side-vs-server-side-7a04b3ec8764)
* [Communication between backend and frontend.](https://codewithhugo.com/in-simple-terms-code-on-the-backend-frontend-and-how-they-interact/)
## Structure
* **./src**\
Content all source files
* **./src/api**\
Content all files to support the API app
* **./src/api/controllers**\
All routes available on API must be in this folder.\
Each entity must have a controller file.\
Controllers can access the service layer.
* **./src/api/services**\
This layer is accessed by controller layer.\
This layer can access the repository layer.
* **./src/api/repositories**\
This layer is accessed by service layer.\
This layer can access the database.
## How to run?
1. Install node.js engine.
2. Install the packages with this command:
```shell
npm i
```
```shell
yarn
```
3. Run the start command:
```shell
npm start
```
4. Visit the host in a web browser:
```
http://localhost:3000/
```