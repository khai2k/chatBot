var express = require('express');
var router = express.Router();
var axios = require('axios')
var FB_CONFIG = require('../configSys')
var ChatDao = require('../dao/index')
/* GET home page. */
var linkGetALLConversations = `https://graph.facebook.com/${FB_CONFIG.PAGE_ID}/conversations?access_token=${FB_CONFIG.ACCESS_TOKEN}`
router.get('/conversations', async (req, res, next) => {
  try {
    // const { data } = await axios.get(linkGetALLConversations)
    // const data = [
    //   {
    //     conversationId: "t_2895126170744398",
    //     customerName: "khai",
    //     lastMessage: "hello"
    //   },
    //   {
    //     conversationId: "t_1476480595885765",
    //     customerName: "cuong",
    //     lastMessage: "hi"
    //   }
    // ]
    const data = await ChatDao.getListConversations();
    return res.send(data);
  } catch (error) {
    return res.send(error).status(400)

  }

})
router.get('/conversation/:conversationId', async (req, res, next) => {
  const conversationId = req.params.conversationId;
  const linkGetMessagesConversation = `https://graph.facebook.com/${conversationId}/messages?access_token=${FB_CONFIG.ACCESS_TOKEN}&fields=message,created_time,from`
  try {
    const { data } = await axios.get(linkGetMessagesConversation)
    return res.send(data)
  } catch (error) {
    return res.send(error).status(400)

  }
})
module.exports = router;
