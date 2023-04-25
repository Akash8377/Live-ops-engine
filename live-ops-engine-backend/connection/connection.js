const mongoose = require('mongoose');
 
const url = 'mongodb+srv://akashchoudhary8377:<Akash@1234>@instclonewebsite.kaimhep.mongodb.net/test'
const connection=async()=>{
    mongoose.set('strictQuery', false);

   try {
     await mongoose.connect(url)
     console.log("mongodb is connected successfully ");

   } catch (e) {
    console.log(e);

   }
}

 module.exports = connection ;