/**
 * action types
 */

export const CHANGE_CAMERA = "CHANGE_CAMERA";
export const MOVE_CAMERA = "MOVE_CAMERA";
export const MOVE_POINTER = "MOVE_POINTER";
export const SELECT_COMMENT = "SELECT_COMMENT";
export const DESELECT_COMMENT = "DESELECT_COMMENT";

export const BEGIN_COMMENT = "BEGIN_COMMENT";
export const ATTACH_FILE = "ATTACH_FILE";
export const UNATTACH_FILE = "UNATTACH_FILE";
export const ATTACH_DRAW_OVER = "ATTACH_DRAW_OVER";
export const UNATTACH_DRAW_OVER = "UNATTACH_DRAW_OVER";
export const ATTACH_PIN = "ATTACH_PIN";
export const UNATTACH_PIN = "UNATTACH_PIN";
export const CANCEL_COMMENT = "CANCEL_COMMENT";

export const PLACE_PIN = "PLACE_PIN";
export const SET_PIN_POSITION = "SET_PIN_POSITION";

export const ADD_COMMENT = "ADD_COMMENT";
export const ADD_REPLY = "ADD_REPLY";
export const RESOLVE_COMMENT = "RESOLVE_COMMENT";
export const RESOLVE_REPLY = "RESOLVE_REPLY";

export const OPEN_THREAD = "OPEN_THREAD";
export const CLOSE_THREAD = "CLOSE_THREAD";

export const UPDATE_DRAWING = "UPDATE_DRAWING";
export const UPDATE_PIN = "UPDATE_PIN";

/**
 * action creators
 */

export function changeCamera(cameraPosition) {
  return { type: CHANGE_CAMERA, data: cameraPosition };
}
export function moveCamera(cameraPosition) {
  return { type: MOVE_CAMERA, data: cameraPosition };
}
export function movePointer(pointerData) {
  return { type: MOVE_POINTER, data: pointerData };
}
export function selectComment(comment) {
  return { type: SELECT_COMMENT, data: comment };
}
export function deselectComment() {
  return { type: DESELECT_COMMENT };
}

export function beginComment() {
  return { type: BEGIN_COMMENT };
}
export function attachFile() {
  return { type: ATTACH_FILE };
}
export function unattachFile() {
  return { type: UNATTACH_FILE };
}
export function attachDrawOver() {
  return { type: ATTACH_DRAW_OVER };
}
export function unattachDrawOver() {
  return { type: UNATTACH_DRAW_OVER };
}
export function attachPin() {
  return { type: ATTACH_PIN };
}
export function unattachPin() {
  return { type: UNATTACH_PIN };
}
export function setPinPosition(pinLocation) {
  return { type: SET_PIN_POSITION, data: pinLocation };
}
export function placePin() {
  return { type: PLACE_PIN };
}

export function cancelComment() {
  return { type: CANCEL_COMMENT };
}

export function addComment(text) {
  return { type: ADD_COMMENT, data: text };
}
export function addReply(comment, text) {
  return { type: ADD_REPLY, data: { comment, text } };
}
export function resolveComment(comment) {
  return { type: RESOLVE_COMMENT, data: comment };
}
export function resolveReply(comment, reply) {
  return { type: RESOLVE_REPLY, data: { comment, reply } };
}

export function openThread(comment) {
  return { type: OPEN_THREAD, data: comment };
}
export function closeThread() {
  return { type: CLOSE_THREAD };
}

export function updateDrawing(drawing) {
  return { type: UPDATE_DRAWING, data: drawing };
}
export function updatePin(pin) {
  return { type: UPDATE_PIN, data: pin };
}
