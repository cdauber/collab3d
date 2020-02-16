import React from "react";
import "./ConfirmDelete.css";

export function ConfirmDelete({ isModalOpen, onCancel, onDelete, ...props }) {
  return (
    <div id="modal" className={isModalOpen ? "" : "hide"} onClick={onCancel}>
      <div
        id="modal-dialog"
        onClick={event => event.stopPropagation()}
        {...props}
      >
        <span id="modal-warning">Are you sure you want to delete?</span>
        <div id="modal-actions">
          <span
            id="modal-cancel"
            onClick={event => {
              event.stopPropagation();
              onCancel();
            }}
          >
            Cancel
          </span>
          <span
            id="modal-delete"
            onClick={event => {
              event.stopPropagation();
              onDelete();
            }}
          >
            Delete
          </span>
        </div>
      </div>
    </div>
  );
}
