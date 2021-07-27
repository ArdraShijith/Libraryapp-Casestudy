const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://ArdraShijith:ARDRAammu11@ardrashijith.uzs2z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

//Schema definition
const Schema=mongoose.Schema;

const BookSchema= new Schema({
    title:String,
    author:String,
    genre:String,
    image:String
});


//Model creation
const Bookdata=mongoose.model('bookdata',BookSchema);

module.exports=Bookdata;