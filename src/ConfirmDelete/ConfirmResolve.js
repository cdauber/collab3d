import React from "react";
import "./ConfirmResolve.css";

export function ConfirmResolve({ isModalOpen, onCancel, onResolve, ...props }) {
  return (
    <div id="modal" className={isModalOpen ? "" : "hide"} onClick={onCancel}>
      <div
        id="modal-dialog"
        onClick={event => event.stopPropagation()}
        {...props}
      >
        <span id="modal-warning">Are you sure you want to resolve?</span>
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
            id="modal-submit"
            onClick={event => {
              event.stopPropagation();
              onResolve();
            }}
          >
            Submit
          </span>
        </div>
      </div>
    </div>
  );
}
