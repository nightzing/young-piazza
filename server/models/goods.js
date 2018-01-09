/**
 * Created by Bo.Xiao on 2018/1/3.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    "productId" : String,
    "productName" : String,
    "salePrice" : Number,
    "productImage" : String,
});

module.exports = mongoose.model('Good',productSchema);
