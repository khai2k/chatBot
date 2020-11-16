var ChatThreadModel = require('../models/index')

const ChatDao = {

    async getListConversations() {
        const result = await ChatThreadModel.find({})
        return result;
    }
}

module.exports = ChatDao;