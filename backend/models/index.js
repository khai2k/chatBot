
var mongoose = require('mongoose')

var ChatThreadModel = new mongoose.Schema({
    FbID: {
        type: String,
        required: true,
        trim: true
    },
    CustomerName: {
        type: String,
        required: true
    },
    LastMessage: {
        type: String,
        required: true
    },
    IsReply: {
        type: Number
    },
    CurentUserSupport: {
        type: Number
    },
    ListUserSupport: {
        type: String,
    },
    BeginDate: {
        type: Date,
        required: true
    },
    UpdatedDate: {
        type: Date,
        required: true
    },
    MessageUpdatedDate: {
        type: Date,
        required: true
    }
})
const ChatThread = mongoose.model('ChatThread', ChatThreadModel, 'ChatThread')

module.exports = ChatThread
