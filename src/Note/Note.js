import React from 'react';
import './Note.css';

export function Note({
  selected,
  white,
  title, author,
  comment,
  profileColor,
  onDelete,
  ...props
}) {
  return <div className="wrapper">
      <div className={selected ? 'selected-bar' : ''}></div>
      <div className={'note' + (white ? ' white' : '')} {...props}>
        <div className="title-row">
          <span className="title">{title}</span>
          <i className="close-button material-icons"
            onClick={event => {
              event.stopPropagation();
              onDelete();
            }}>
            close
          </i>
        </div>
        <div className="content-row">
          <div className="profile-image" style={{backgroundColor: profileColor}}></div>
          <div className="content-column">
            <div className="author-name">{author}</div>
            <div className="comment">{comment}</div>
            <div className="reply">
              <span className="reply-button">Reply</span>
            </div>
          </div>
        </div>
      </div>
    </div>;
}
