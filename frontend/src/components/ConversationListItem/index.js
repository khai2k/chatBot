import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import shave from 'shave';
import avatar from "assets/img/faces/face-0.jpg";
import './ConversationListItem.css';


function ConversationListItem(props) {
  useEffect(() => {
    shave('.conversation-snippet', 21);
  })

  const { CustomerName, LastMessage, FbID } = props.data;
  return (
    <div className="conversation-list-item"
      onClick={() => { props.OnFetch(FbID) }
      }
    >
      <img className="conversation-photo" src={avatar} alt="conversation" />
      <div className="conversation-info">
        <h1 className="conversation-title">{CustomerName}</h1>
        <p className="conversation-snippet">{LastMessage}</p>
      </div>
    </div>
  );
}
ConversationListItem.propTypes = {
  data: PropTypes.shape({
    CustomerName: PropTypes.string.isRequired,
    LastMessage: PropTypes.string.isRequired,
    FbID: PropTypes.string.isRequired
  }),
  OnFetch: PropTypes.func
}
export default ConversationListItem