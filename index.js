const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
   console.log("connection open")
})
.catch(err=>{console.log('Error')
      console.log(err)
})

const movieSchema = new mongoose.Schema({
      title: String,
      year: Number,
      score: Number,
      rating: String
})

// To insert one object!
const Movie = mongoose.model('Movie',movieSchema)
//const piano = new Movie({title:"Piano",year:1986,score:9.1,rating:"R"})

// To insert many objects
Movie.insertMany([
    {title:"Amelie",year:2001,score:8.4,rating:"G"},
    {title:"Jaws",year:1985,score:8.4,rating:"R"},
    {title:"Exorcist",year:1973,score:8.4,rating:"R"},
    {title:"Anand",year:1975,score:8.5,rating:"R"}
])
.then(data=>{
      console.log(data)
})