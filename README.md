A> Creating a new repo & linking into the project 
steps to create - Open a new Terminal 
1> git init
2>git branch -M  main (Changing the branch)
3>git add . (Adding into git)
4>git commit -m "creating the food delivery app" 
// Adding local git into a created git repo
5>git remote add origin https://github.com/nikshitham/Suggi.git
6>git push origin main 

B> Initializing NPM / Creating our own create-react-app 
1>npm init

Installing our dependency/package/Bundler
2>npm install -D parcel (development dependency)

To run a project 
3> npx parcel index.html

Installing React package using npm
4>npm install react
5>npm install react-dom

Note : 
brower cannot understand import/export hence need to mention the type of the script 
// <script type="module" src="App.js"></script>

Craeting scripts
// "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html",
  }
  now we can use "npm start" to run the project 
  "npm run build" to build the project

