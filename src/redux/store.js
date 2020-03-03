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
  DESELECT_VARIATION,
  MOVE_CAMERA,
  OPEN_THREAD,
  PLACE_PIN,
  RESOLVE_COMMENT,
  RESOLVE_REPLY,
  SELECT_COMMENT,
  SELECT_VARIATION,
  SET_PIN_POSITION,
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

export const INITIAL_CAMERA_POSITION = [0, 1, 4];

const initialState = {
  cursor: CURSOR.DEFAULT,
  cameraPosition: { position: INITIAL_CAMERA_POSITION, focus: [0, 0, 0] },
  isCommenting: false,
  fileIsAttached: false,
  drawOverIsAttached: false,
  pinIsAttached: false,
  maxCommentId: 3,
  activeVariationIds: { 1: true },
  variations: [
    {
      id: 1,
      name: "Grey Sneaker",
      thumbnail: "assets/adidas_sneaker_thumbnail.png",
      model: "models/gltf/adidas_sneaker/scene.gltf"
    },
    {
      id: 2,
      name: "Lavender Sneaker",
      thumbnail: "assets/adidas_sneaker_lavender_thumbnail.png",
      model: "models/gltf/adidas_sneaker_lavender/Project Name.gltf"
    },
    {
      id: 3,
      name: "Pink Sneaker",
      thumbnail: "assets/adidas_sneaker_pink_thumbnail.png",
      model: "models/gltf/adidas_sneaker_pink/Project Name.gltf"
    },
    {
      id: 4,
      name: "Dark Blue Sneaker",
      thumbnail: "assets/adidas_sneaker_dark_blue_thumbnail.png",
      model: "models/gltf/adidas_sneaker_dark_blue/Project Name.gltf"
    },
    {
      id: 5,
      name: "Grey Jacket",
      thumbnail: "assets/grey_adidas_thumbnail.png",
      model: "models/gltf/grey_adidas/Grey Adidas.gltf"
    },
    {
      id: 6,
      name: "Blue Jacket",
      thumbnail: "assets/blue_adidas_thumbnail.png",
      model: "models/gltf/blue_adidas/Blue Adidas.gltf"
    },
    {
      id: 7,
      name: "Pink Jacket",
      thumbnail: "assets/pink_adidas_thumbnail.png",
      model: "models/gltf/pink_adidas/Pink Jacket.gltf"
    }
  ],
  comments: comments
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
          drawing: null
        };
      }
      return { ...state, cameraPosition: data };
    case MOVE_CAMERA:
      return { ...state, cameraPosition: data };
    case SELECT_COMMENT:
      return {
        ...state,
        selectedCommentId: data.id,
        cameraPosition: data.camera ? data.camera : state.cameraPosition,
        activeVariationIds: data.activeVariationIds
          ? data.activeVariationIds
          : state.activeVariationIds,
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
      return {
        ...state,
        pinIsAttached: true,
        cursor: CURSOR.PIN
      };
    case UNATTACH_PIN:
      return {
        ...state,
        pinIsAttached: false,
        attachedPin: null,
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
            profilePicture:
              "https://assets.website-files.com/5d3152346d95065922960b3a/5db769036b1dff3418bffd20_Greg.jpg",
            date: new Date().getTime(),
            text: data,
            file: state.file,
            drawOver:
              state.drawing &&
              LZString.compressToEncodedURIComponent(
                JSON.stringify(state.drawing)
              ),
            pin: state.pin,
            camera: state.cameraPosition,
            activeVariationIds: state.activeVariationIds,
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
                    profilePicture:
                      "https://assets.website-files.com/5d3152346d95065922960b3a/5db769036b1dff3418bffd20_Greg.jpg",
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
    default:
      return state;
  }
}

export default createStore(rootReducer);
