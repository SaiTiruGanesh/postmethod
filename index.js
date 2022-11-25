const express=require("express")
const app=express()
const cors=require("cors")
const bodyParser=require("body-parser")
const port=3000

app.use(bodyParser.urlencoded({
	extended:true
}))

app.use(bodyParser.json())

app.use(cors())

app.get("/",(req,res)=>{
	res.send("server is yet yet to be started")
})

app.post("/newData",(req,res)=>{
	console.log(req.body)
	const {name,password,selectedcar}=req.body
	res.send("Added succesfully")
})

app.listen(port,()=>console.log("server is running on port 3000"))