import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import './Message.css';

export default function Message(props) {
  const {
    data,
    isMine,
    startsSequence,
    endsSequence,
    showTimestamp
  } = props;

  const friendlyTimestamp = moment(data.created_time).format('LLLL');
  return (
    <div className={[
      'message',
      `${isMine ? 'mine' : ''}`,
      `${startsSequence ? 'start' : ''}`,
      `${endsSequence ? 'end' : ''}`
    ].join(' ')}>
      {
        showTimestamp &&
        <div className="timestamp">
          {friendlyTimestamp}
        </div>
      }

      <div className="bubble-container">
        <div className="bubble" title={friendlyTimestamp}>
          {data.message}
        </div>
      </div>
    </div>
  );
}
Message.propTypes = {
  data: PropTypes.object,
  isMine: PropTypes.bool,
  startsSequence: PropTypes.bool,
  endsSequence: PropTypes.bool,
  showTimestamp: PropTypes.bool,
}