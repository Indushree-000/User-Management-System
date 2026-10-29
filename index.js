const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");
const express = require("express");
const app = express();

const methodOverride = require("method-override");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended : true}));  //this is to parse the form data

require("dotenv").config();
const connection = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD
});

//1. Home route which displays the total number of users on home page
app.get("/", (req,res) => {
    let q = "SELECT COUNT(*) FROM user";
    try{
        connection.query(q,(err,result) => {
            if(err) throw err;

            let count = result[0]["COUNT(*)"];
            res.render("home.ejs", { count });
        });
    }
    catch(err){
        console.log(err);
    }
});

//2. Show Route which displays all the users
app.get("/users" , (req,res) => {
    let q = "SELECT id,username,email FROM USER";
    try{
        connection.query( q, (err,users) => {
            if(err) throw err;
            res.render("showusers.ejs", { users });
        });
    }
    catch(err){
        console.log(err);
    }
});

//3.  Edit Route
app.get("/users/:id/edit" , (req,res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id='${id}'`;
    try{
        connection.query( q, (err,result) => {
            if(err) throw err;
            let user = result[0];
            res.render("edit.ejs" , { user });
        });
    }
    catch(err){
        console.log(err);
    }
});

//4. Update (DB) Route
app.patch("/users/:id" , (req,res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id='${id}'`;
    let { password : formPass, username : newUserName } = req.body;
    try{
        connection.query(q, (err,result) => {
            if(err) throw err;
            let user = result[0];
            if( formPass != user.password){
                res.send("Wrong Password!");
            }
            else{
                let q2 = `UPDATE user SET username='${newUserName}' WHERE id='${id}'`;
                connection.query( q2, (err,result) => {
                            if(err) throw err;
                            res.redirect("/users");
                });
            }
        });
    }
    catch(err){
        console.log(err);
    }
});

app.listen("3000" , () => {
    console.log("app is listening on port 3000");
});