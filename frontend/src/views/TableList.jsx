/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import axios from "axios"
import { Grid, Row, Col, Table } from "react-bootstrap";
import * as API from "../api/index"
import { useCountdownTimer } from 'use-countdown-timer';


import Card from "components/Card/Card.jsx";
import { thArray, tdArray, thArray2, tdArray2 } from "variables/Variables.jsx";
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
      <div className="content">

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
