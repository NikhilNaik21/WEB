import  express  from "express";

const app = express();            //post //put //get // delete
app.get("/" ,(req,res)=>{                         //consist of  2 parameters --> path --> domain name
    
    let list =[];
    let user1 ={id:1,name:"Nikhil"};
    list.push(user1);

    res.json(list);
})  


   //domain name/id  ----->static path        
app.get("/Nikhil/2" ,(req,res)=>{
let list1 =[];
let user2 ={id:2,name:"Nikhil"};
let user3 ={id:3,Suranme:"Naik"};
let user4 ={id:4,Place:"Goa"};
list1.push(user2 ,user3 ,user4);

res.json(list1);
})  


//dynamic path for id                  --->get: retrieve
app.get("/Nikhil/:id" ,(req,res)=>{
    let id = req.params.id
    let list1 =[];
    let user2 ={id:2,name:"Nikhil"};
    let user3 ={id:3,Suranme:"Naik"};
    let user4 ={id:4,Place:"Goa"};
    list1.push(user2 ,user3 ,user4);
    list1.push(id);
    res.json(list1);
    })  


app.listen(8000);