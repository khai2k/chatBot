var express = require('express');
var router = express.Router();
var axios = require('axios')
var FB_CONFIG = require('../configSys')
/* GET home page. */
var linkGetALLConversations = `https://graph.facebook.com/${FB_CONFIG.PAGE_ID}/conversations?access_token=${FB_CONFIG.ACCESS_TOKEN}`
router.get('/conversations', async (req, res, next) => {
  try {
    const { data } = await axios.get(linkGetALLConversations)
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
