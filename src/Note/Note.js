import React from 'react';
import './Note.css';

function replyString(thread) {
  if (thread && thread.length > 0) {
    if (thread.length > 1) {
      return `${thread.length} Replies`;
    } else {
      return '1 Reply';
    }
  } else {
    return 'Reply';
  }
}

export function Note({
  selected,
  white,
  author,
  comment,
  profileColor,
  thread,
  onDelete,
  onReply,
  showReply=true,
  ...props
}) {
  return <div className="wrapper">
      <div className={selected ? 'selected-bar' : ''}></div>
      <div className={'note' + (white ? ' white' : '')} {...props}>
        <div className="content-row">
          <div className="profile-image" style={{ backgroundColor: profileColor }}></div>
          <div className="content-column">
            <div className="author-row">
              <div className="author-name">{author}</div>
              <i className="close-button material-icons"
                onClick={event => {
                  event.stopPropagation();
                  onDelete();
                }}>
                close
              </i>
            </div>
            <div className="comment">{comment}</div>
            {props.children}
            {showReply ? <div className="reply">
              <span className="reply-button"
                onClick={event => {
                  event.stopPropagation();
                  onReply()
                }}>
                {replyString(thread)}
              </span>
            </div> : null}
          </div>
        </div>
      </div>
    </div>;
}
