import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import * as API from "../api/index"
import 'views/TableList.css'
import ConversationListItem from "components/ConversationListItem";
import MessageList from "components/MessageList";

class TableList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array_conversations: [],
      messages: []
    }

  }
  componentDidMount() {
    const fetchConversations = async () => {
      const data = await API.getAllConversations();
      this.setState({ array_conversations: data });
    }
    fetchConversations();
  }

  fetchMessage = async (conversationId) => {
    const { data } = await API.getMessagesConversation(conversationId);
    data.reverse();
    this.setState({ messages: data })
  }

  render() {
    return (
      <div>
        <Grid fluid>
          <Row>
            <Col md={3} className="scrollable" >
              {
                this.state.array_conversations.map(conversation =>
                  <ConversationListItem
                    key={conversation.FbID}
                    data={conversation}
                    OnFetch={this.fetchMessage}
                  />
                )
              }

            </Col>
            <Col md={6} >
              <MessageList data={this.state.messages} />

            </Col>
            <Col md={3}  >
              {
                this.state.array_conversations.map(conversation =>
                  <ConversationListItem
                    key={conversation.FbID}
                    data={conversation}
                    OnFetch={this.fetchMessage}
                  />
                )
              }

            </Col>
          </Row>

        </Grid>
      </div>
    );
  }
}

export default TableList;
