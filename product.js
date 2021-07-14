const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
   console.log("connection open")
})
.catch(err=>{console.log('Error')
      console.log(err)
})

const productSchema = new mongoose.Schema({
    name:{
       type:String,
       required:true,
       maxLength:50
    },

    price:{
        type:Number,
        required:true

    },
    category:{
        type:String,
        required:true
    },
    onSale:{
        type:Boolean,
        default:false
    },
     online:{
         type:Number,
         default:0
     },
     inStore:{
         type:Number,
         default:0
     }
        
})

const Product = mongoose.model('Product',productSchema)
const bike = new Product({name:"Mountain Bike",price:"600",category:"Adventure",online:5,inStore:3})
bike.save()
//Product.findOneAndUpdate({name:"Mountain Bike"},{price:350},{new:true})
.then(data=>{
    console.log(data)
})
.catch(err=>{
    console.log(err)
})
