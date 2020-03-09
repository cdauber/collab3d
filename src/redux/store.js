import { Converter } from "aws-sdk/clients/dynamodb";
import LZString from "lz-string";
import { createStore } from "redux";
import { v4 as uuidV4 } from "uuid";
import authors from "../authors";
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
  DESELECT_VARIATION,
  HIDE_PINS,
  MOVE_CAMERA,
  OPEN_THREAD,
  PLACE_PIN,
  RESOLVE_COMMENT,
  RESOLVE_REPLY,
  SELECT_COMMENT,
  SELECT_VARIATION,
  setComments,
  SET_COMMENTS,
  SET_PIN_POSITION,
  SHOW_PINS,
  UNATTACH_DRAW_OVER,
  UNATTACH_FILE,
  UNATTACH_PIN,
  UPDATE_DRAWING
} from "./actions";

export const CURSOR = {
  DEFAULT: "pointer",
  DRAWOVER: "drawover",
  PIN: "pin"
};

export const author = authors[Math.floor(Math.random() * authors.length)];

const initialState = {
  cursor: CURSOR.DEFAULT,
  cameraPosition: { position: [0, 1, 4], focus: [0, 0, 0] },
  isCommenting: false,
  fileIsAttached: false,
  drawOverIsAttached: false,
  pinIsAttached: false,
  showPins: true,
  activeVariationIds: { 1: true },
  variations: [
    {
      id: 1,
      name: "Original",
      thumbnail: "assets/nike_shoe_thumbnail.png",
      model: "models/gltf/nike_shoe/scene.gltf"
    },
    {
      id: 2,
      name: "Magenta",
      thumbnail: "assets/nike_shoe_pink_thumbnail.png",
      model: "models/gltf/nike_shoe_pink/scene.gltf"
    },
    {
      id: 3,
      name: "Turquoise",
      thumbnail: "assets/nike_shoe_turquoise_thumbnail.png",
      model: "models/gltf/nike_shoe_turquoise/scene.gltf"
    },
    {
      id: 4,
      name: "Black",
      thumbnail: "assets/nike_shoe_black_thumbnail.png",
      model: "models/gltf/nike_shoe_black/scene.gltf"
    }
  ],
  comments: []
};

export function cameraPositionEquals(camera1, camera2) {
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

function rootReducer(state = initialState, { type, data }) {
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
          drawing: undefined
        };
      }
      return { ...state, cameraPosition: data };
    case MOVE_CAMERA:
      return { ...state, cameraPosition: data };
    case SELECT_COMMENT:
      return {
        ...state,
        selectedCommentId: data.id,
        cameraPosition: data.camera,
        activeVariationIds: data.activeVariationIds || state.activeVariationIds,
        drawing:
          data.drawOver &&
          JSON.parse(LZString.decompressFromEncodedURIComponent(data.drawOver))
      };
    case DESELECT_COMMENT:
      return { ...state, selectedCommentId: null, drawing: undefined };
    case RESOLVE_COMMENT:
      conn.send("deletecomment", { id: data.id });
      return {
        ...state,
        comments: state.comments.filter(({ id }) => id !== data.id)
      };
    case RESOLVE_REPLY:
      conn.send("deletecomment", { id: data.reply.id });
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
      return { ...state, fileIsAttached: false, attachedFile: undefined };
    case ATTACH_DRAW_OVER:
      return { ...state, drawOverIsAttached: true, cursor: CURSOR.DRAWOVER };
    case UNATTACH_DRAW_OVER:
      return {
        ...state,
        drawOverIsAttached: false,
        drawing: undefined,
        cursor: CURSOR.DEFAULT
      };
    case ATTACH_PIN:
      return {
        ...state,
        pinIsAttached: true,
        cursor: CURSOR.PIN
      };
    case UNATTACH_PIN:
      return {
        ...state,
        pinIsAttached: false,
        attachedPin: undefined,
        cursor: CURSOR.DEFAULT
      };
    case SET_PIN_POSITION:
      return { ...state, pin: data };
    case PLACE_PIN:
      return { ...state, cursor: CURSOR.DEFAULT };
    case CANCEL_COMMENT:
      return {
        ...state,
        isCommenting: false,
        fileIsAttached: false,
        attachedFile: undefined,
        drawOverIsAttached: false,
        drawing: undefined,
        pinIsAttached: false,
        pin: undefined,
        cursor: CURSOR.DEFAULT
      };
    case ADD_COMMENT:
      if (typeof data === "string" && data.trim().length === 0) {
        data = undefined;
      }
      const comment = {
        id: uuidV4(),
        author: author.name,
        profilePicture: author.profilePicture,
        date: new Date().getTime(),
        text: data,
        file: state.file,
        drawOver:
          state.drawing &&
          LZString.compressToEncodedURIComponent(JSON.stringify(state.drawing)),
        pin: state.pin,
        camera: state.cameraPosition,
        activeVariationIds: state.activeVariationIds,
        thread: []
      };
      conn.send("addcomment", comment);
      return { ...state, comments: [comment, ...state.comments] };
    case ADD_REPLY:
      if (typeof data === "string" && data.trim().length === 0) {
        data = undefined;
      }
      const reply = {
        id: uuidV4(),
        author: author.name,
        profilePicture: author.profilePicture,
        date: new Date().getTime(),
        text: data.text,
        file: state.file,
        drawOver:
          state.drawing &&
          LZString.compressToEncodedURIComponent(JSON.stringify(state.drawing)),
        camera: state.camera,
        activeVariationIds: state.activeVariationIds,
        // needed for API
        parent_id: data.comment.id
      };
      conn.send("addcomment", reply);
      return {
        ...state,
        comments: state.comments.map(comment =>
          comment.id === data.comment.id
            ? {
                ...comment,
                thread: [reply, ...comment.thread]
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
    case SELECT_VARIATION:
      return {
        ...state,
        activeVariationIds: { ...state.activeVariationIds, [data.id]: true }
      };
    case DESELECT_VARIATION:
      return {
        ...state,
        activeVariationIds: { ...state.activeVariationIds, [data.id]: false }
      };
    case SHOW_PINS:
      return { ...state, showPins: true };
    case HIDE_PINS:
      return { ...state, showPins: false };
    case SET_COMMENTS:
      return { ...state, comments: data };
    default:
      return state;
  }
}

const store = createStore(rootReducer);

class AWSConnection {
  constructor(url, onOpen, onMessage, onError = null, onClose = null) {
    if (url) {
      this.ws = new WebSocket(url);
      this.ws.onopen = onOpen;
      this.ws.onmessage =
        onMessage &&
        function({ data, ...event }) {
          onMessage({ data: JSON.parse(data), ...event });
        };
      this.ws.onerror = onError;
      this.ws.onclose = onClose;
    }
  }

  send(action, data) {
    if (this.ws) {
      this.ws.send(JSON.stringify({ commentAction: action, ...data }));
    }
  }
}

const conn = new AWSConnection(
  "wss://m4wsvsc677.execute-api.us-east-1.amazonaws.com/poctest",
  function() {
    conn.send("fetchcomments");
  },
  function({ data }) {
    if (Array.isArray(data)) {
      data = data.map(comment => Converter.unmarshall(comment));
      data = data
        .filter(({ parent_id }) => !parent_id)
        .map(comment => ({
          ...comment,
          thread: data
            .filter(({ parent_id }) => parent_id === comment.id)
            .sort((comment1, comment2) => comment2.date - comment1.date)
        }))
        .sort((comment1, comment2) => comment2.date - comment1.date);
      console.log(data);
      store.dispatch(setComments(data));
    } else {
      conn.send("fetchcomments");
    }
  },
  console.log
);

export default store;
