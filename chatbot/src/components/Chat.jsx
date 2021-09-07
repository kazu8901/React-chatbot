import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Profile from '../assets/img/unnamed.png'
import Icon from '../assets/img/nike-wmns-air-max-97-og-qs-silver-bullet-246jll.jpg';

const Chat = (props) => {
  const isQuestion = (props.type === 'question');
  const classes = isQuestion ? 'p-chat__row': 'p-chat__reverse'

  return (
    <ListItem  className={classes}>
      <ListItemAvatar>
        {isQuestion ? (
          <Avatar alt="icon" src={Profile} />
        ) : (
          <Avatar alt="icon" src={Icon} />
        )}
      </ListItemAvatar>
      <div className="p-chat__bubble">{props.text}</div>
    </ListItem>
  )

}

export default Chat