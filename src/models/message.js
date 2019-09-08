const mongoose = require('../database/index');

const MessageSchema = mongoose.Schema({
    id:{
        type: mongoose.Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true,
    },
    username: {
        type: String,
        require: false,
    },
    status: {
        type: String,
        require: false,
    },
    message:{
        type:String, 
        require:false,
    },
    status: {
        type:String, 
        require: false,
    },
    time: {
        type: Date,
        default: Date.now,
    },
    token:{
        type:Number,
        required:true
    }
})


const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;

