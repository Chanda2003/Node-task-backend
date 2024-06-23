const express=require("express")
const cors=require("cors")

const app=express()
const db=require("./db.js")

const port=8080
app.use(express.json())
app.use(cors())

app.listen(port,()=>{
    console.log("port is running")
})

app.get("/getdata",(req,res)=>{
    db.getdata()
    .then((data)=>{
        res.json(data)
    })
    .catch((err)=>{
        res.json(err)
    })
    
})

app.post("/postdata",(req,res)=>{
   try{ console.log(req.body)
    db.postdata(req.body.Alternate_Payee_1,req.body.Alternate_Payee_2,req.body.City,req.body.Street,req.body.Country,req.body.Bank_ifsc_code,req.body.Bank_Acc_No,req.body.Reference)
    .then((data)=>{
        res.json(data)
    })
    .catch((err)=>{
        res.json(err)
    })}catch(err){
        res.send("err while sending")
    }
   
})










// app.post("/postdata", (req, res) => {
//     try {
//         console.log(req.body);

//         const {
//             Alternate_Payee_1,
//             Alternate_Payee_2,
//             City,
//             Street,
//             Country,
//             Bank_ifsc_code,
//             Bank_Acc_No,
//             Reference
//         } = req.body;

//         // Validate required fields
//         if (!Alternate_Payee_1 || !City || !Street || !Country || !Bank_ifsc_code || !Bank_Acc_No) {
//             return res.status(400).json({ error: "Missing required fields" });
//         }

//         db.postdata(Alternate_Payee_1, Alternate_Payee_2, City, Street, Country, Bank_ifsc_code, Bank_Acc_No, Reference)
//             .then((data) => {
//                 res.status(200).json(data);
//             })
//             .catch((err) => {
//                 console.error("Database error:", err);
//                 res.status(500).json({ error: "Internal Server Error", details: err });
//             });
//     } catch (err) {
//         console.error("Error while processing request:", err);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// });



