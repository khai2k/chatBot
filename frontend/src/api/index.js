import axios from 'axios'

import { CONFIG } from "configSys"

const IP_BACK_END = CONFIG.IP_BACK_END
const linkGetAllConversations = `${IP_BACK_END}/conversations`
const linkGetMessagesConversation = `${IP_BACK_END}/conversation`
const linkLogin = `${IP_BACK_END}/login`

export const getAllConversations = async () => {
    const { data } = await axios.get(linkGetAllConversations);
    return data;
}
export const getMessagesConversation = async (conversationId) => {
    const { data } = await axios.get(`${linkGetMessagesConversation}/${conversationId}`);
    return data;
}
export const login = async ({ user, password }) => {
    const { data } = await axios.post(linkLogin, { user, password })
    return data;
}
