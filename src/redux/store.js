import LZString from "lz-string";
import { createStore } from "redux";
import comments from "../comments";
import {
  ADD_COMMENT,
  ADD_REPLY,
  ATTACH_DRAW_OVER,
  ATTACH_FILE,
  ATTACH_PIN,
  BEGIN_COMMENT,
  CANCEL_COMMENT,
  CHANGE_CAMERA,
  CLOSE_THREAD,
  DESELECT_COMMENT,
  OPEN_THREAD,
  RESOLVE_COMMENT,
  RESOLVE_REPLY,
  SELECT_COMMENT,
  UNATTACH_DRAW_OVER,
  UNATTACH_FILE,
  UNATTACH_PIN,
  UPDATE_DRAWING,
  MOVE_CAMERA,
  MOVE_POINTER
} from "./actions";

export const CURSOR = {
  DEFAULT: "pointer",
  DRAWOVER: "drawover",
  PIN: "pin"
};

export const INITIAL_CAMERA_POSITION = [0, 2, 4];

const initialState = {
  cursor: CURSOR.DEFAULT,
  activeCameraPosition: { position: INITIAL_CAMERA_POSITION, focus: [0, 0, 0] },
  cameraPosition: { position: INITIAL_CAMERA_POSITION, focus: [0, 0, 0] },
  isCommenting: false,
  fileIsAttached: false,
  drawOverIsAttached: false,
  pinIsAttached: false,
  maxCommentId: 3,
  comments: comments
};

function rootReducer(state = initialState, { type, data }) {
  function cameraPositionEquals(camera1, camera2) {
    return (
      camera1 === camera2 ||
      (camera1 &&
        camera2 &&
        camera1.position.every(
          (p, i) => Math.abs(p - camera2.position[i]) < 1e-10
        ) &&
        camera1.focus.every((f, i) => Math.abs(f - camera2.focus[i]) < 1e-10))
    );
  }

  switch (type) {
    case CHANGE_CAMERA:
      const selectedComment = state.comments.find(
        ({ id }) => id === state.selectedCommentId
      );
      if (
        selectedComment &&
        !cameraPositionEquals(selectedComment.camera, data)
      ) {
        return {
          ...state,
          cameraPosition: data,
          selectedCommentId: null,
          drawing: null
        };
      }
      return { ...state, activeCameraPosition: null, cameraPosition: data };
    case MOVE_CAMERA:
      return { ...state, activeCameraPosition: data };
    case MOVE_POINTER:
      return { ...state, pointerEventData: data };
    case SELECT_COMMENT:
      return {
        ...state,
        selectedCommentId: data.id,
        drawing:
          data.drawOver &&
          JSON.parse(LZString.decompressFromEncodedURIComponent(data.drawOver))
      };
    case DESELECT_COMMENT:
      return { ...state, selectedCommentId: null, drawing: null };
    case RESOLVE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(({ id }) => id !== data.id)
      };
    case RESOLVE_REPLY:
      return {
        ...state,
        comments: state.comments.map(comment =>
          comment.id === data.comment.id
            ? {
                ...comment,
                thread: comment.thread.filter(({ id }) => id !== data.reply.id)
              }
            : comment
        )
      };
    case BEGIN_COMMENT:
      return { ...state, isCommenting: true };
    case ATTACH_FILE:
      return { ...state, fileIsAttached: true };
    case UNATTACH_FILE:
      return { ...state, fileIsAttached: false, attachedFile: null };
    case ATTACH_DRAW_OVER:
      return { ...state, drawOverIsAttached: true, cursor: CURSOR.DRAWOVER };
    case UNATTACH_DRAW_OVER:
      return {
        ...state,
        drawOverIsAttached: false,
        drawing: null,
        cursor: CURSOR.DEFAULT
      };
    case ATTACH_PIN:
      return { ...state, pinIsAttached: true, cursor: CURSOR.PIN };
    case UNATTACH_PIN:
      return {
        ...state,
        pinIsAttached: false,
        attachedPin: null,
        cursor: CURSOR.DEFAULT
      };
    case CANCEL_COMMENT:
      return {
        ...state,
        isCommenting: false,
        fileIsAttached: false,
        attachedFile: null,
        drawOverIsAttached: false,
        drawing: null,
        pinIsAttached: false,
        pin: null,
        cursor: CURSOR.DEFAULT
      };
    case ADD_COMMENT:
      return {
        ...state,
        maxCommentId: 1 + state.maxCommentId,
        comments: [
          {
            id: 1 + state.maxCommentId,
            author: "Greg Gottesman",
            date: new Date().getTime(),
            text: data,
            file: state.file,
            drawOver: LZString.compressToEncodedURIComponent(
              JSON.stringify(state.drawing)
            ),
            pin: state.pin,
            camera: state.cameraPosition,
            thread: []
          },
          ...state.comments
        ]
      };
    case ADD_REPLY:
      return {
        ...state,
        maxCommentId: 1 + state.maxCommentId,
        comments: state.comments.map(comment =>
          comment.id === data.comment.id
            ? {
                ...comment,
                thread: [
                  {
                    id: 1 + state.maxCommentId,
                    author: "Greg Gottesman",
                    date: new Date().getTime(),
                    text: data.text,
                    file: state.file,
                    drawOver: LZString.compressToEncodedURIComponent(
                      JSON.stringify(state.drawing)
                    )
                  },
                  ...comment.thread
                ]
              }
            : comment
        )
      };
    case OPEN_THREAD:
      return { ...state, activeThreadId: data.id };
    case CLOSE_THREAD:
      return { ...state, activeThreadId: null };
    case UPDATE_DRAWING:
      return { ...state, drawing: data };
    default:
      return state;
  }
}

export default createStore(rootReducer);
