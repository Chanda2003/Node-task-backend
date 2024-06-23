
const sql=require("mysql2")


const con=sql.createConnection({
    host:"Localhost",
    user:"root",
    password:"123456789",
    database:"nodetask"
})
con.connect((err)=>{
    if(err){
        console.log("error: "+err)
    }else{
        console.log("DB conncetd")
    }
})

function getdata(){

    return new Promise((reslove,reject)=>{
        con.query("select * from customer1",(err,res)=>{
            if(err){
                reject(err)
            }
            else{
                reslove(res)
            }
        })
    })
}

const Query="INSERT INTO customer1 (Alternate_payee_1,Alternate_payee_2,City,Street,Country,Bank_ifsc_code,Bank_Acc_No,Reference) VALUES (?,?,?,?,?,?,?,?)"

function postdata(Alternate_payee_1,payee_2,city,street,country,ifsc_code,acc_no,ref){
    return new Promise((reslove,reject)=>{
    con.query(Query,[Alternate_payee_1,payee_2,city,street,country,ifsc_code,acc_no,ref],(err,res)=>{
        if(err){
            reject(err)
        }
        else{
            reslove(res)
        }
    })
})
}

module.exports={
    getdata,postdata
}














