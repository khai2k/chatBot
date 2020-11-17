import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Message from '../Message';
import moment from 'moment';

import './MessageList.css';

const MY_USER_ID = '112588937315601';

export default function MessageList(props) {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    let scrollToBottom = () => {
      const objDiv = document.getElementById("test"
      );
      objDiv.scrollTop = objDiv.scrollHeight;
    }
    const getMessages = () => {
      var tempMessages = props.data;
      setMessages(tempMessages)
    }
    getMessages();
    scrollToBottom();
  }, [props])



  const renderMessages = () => {
    let i = 0;
    let messageCount = messages.length;
    let tempMessages = [];

    while (i < messageCount) {
      let previous = messages[i - 1];
      let current = messages[i];
      let next = messages[i + 1];
      let isMine = current.from.id === MY_USER_ID;
      let currentMoment = moment(current.created_time);
      let prevBySameAuthor = false;
      let nextBySameAuthor = false;
      let startsSequence = true;
      let endsSequence = true;
      let showTimestamp = true;

      if (previous) {
        let previousMoment = moment(previous.created_time);
        let previousDuration = moment.duration(currentMoment.diff(previousMoment));
        prevBySameAuthor = previous.from.id === current.from.id;

        if (prevBySameAuthor && previousDuration.as('hours') < 1) {
          startsSequence = false;
        }

        if (previousDuration.as('hours') < 1) {
          showTimestamp = false;
        }
      }

      if (next) {
        let nextMoment = moment(next.created_time);
        let nextDuration = moment.duration(nextMoment.diff(currentMoment));
        nextBySameAuthor = next.from.id === current.from.id;

        if (nextBySameAuthor && nextDuration.as('hours') < 1) {
          endsSequence = false;
        }
      }

      tempMessages.push(
        <Message
          key={i}
          isMine={isMine}
          startsSequence={startsSequence}
          endsSequence={endsSequence}
          showTimestamp={showTimestamp}
          data={current}
        />
      );

      // Proceed to the next message.
      i += 1;
    }

    return tempMessages;
  }

  return (
    <div className="scrollable" id="test"
    >
      <div className="message-list-container"
      >{renderMessages()}</div>
    </div>
  );
}

MessageList.propTypes = {
  data: PropTypes.array.isRequired
}