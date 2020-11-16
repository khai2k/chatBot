import axios from 'axios'

const IP_BACK_END = "http://localhost:3333"
const linkGetAllConversations = `${IP_BACK_END}/conversations`
const linkGetMessagesConversation = `${IP_BACK_END}/conversation`

export const getAllConversations = async () => {
    const { data } = await axios.get(linkGetAllConversations);
    return data;
}
export const getMessagesConversation = async (conversationId) => {
    const { data } = await axios.get(`${linkGetMessagesConversation}/${conversationId}`);
    return data;
}

