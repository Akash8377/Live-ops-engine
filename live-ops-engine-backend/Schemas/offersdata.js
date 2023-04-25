const mongoose = require('mongoose')
const Schema = mongoose.Schema ;

const OfferSchema = new Schema ({
    offer_id : {type :String},
    offer_title :  {type :String},
    offer_description : {type :String},
    offer_image :  {type :String},
    offer_sort_order : {type : Number},
    content : {type : Array},
    schedule : {type: Object},
    target : {type : String},
    pricing : {type: Array},
    username: String
})

const OffersData = mongoose.model("Offerdata",OfferSchema);
module.exports = OffersData ;