const mongoose=require('mongoose')
const {Schema}=mongoose.Schema;
const dotenv=require('dotenv').config();
 const url=mongodb+srv://sachin:8757887103@shopdata.shpwbu2.mongodb.net/?retryWrites=true&w=majority&appName=shopdata;
 // const url=process.env.ATLASDB_URL;
main().then(()=>{
    console.log("db connected !");
}).catch((err)=>{
    console.log(err)
})
async function main() {
    await mongoose.connect(url)
    
}
