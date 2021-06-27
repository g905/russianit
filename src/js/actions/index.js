import fetch from "cross-fetch";
import {
  ADD_ELEMENT,
  REMOVE_ELEMENT,
  REQUEST,
  ZOOM_IN,
  ZOOM_OUT,
} from "../constants/action-types";
import store from "../store";

function refresh(svg) {
  svg.height.baseVal.value = store.getState().zoom.h;
  svg.width.baseVal.value = store.getState().zoom.w;
}

export function zoomIn(svg) {
  refresh(svg);
  return {
    type: ZOOM_IN,
  };
}

export function zoomOut(svg) {
  refresh(svg);
  return {
    type: ZOOM_OUT,
  };
}

export function addEl(data) {
  return (dispatch, getState) => {
    return dispatch(fetchStatus(data));
  };
}

export function addElement(data) {
  paintElement(data);
  return {
    type: ADD_ELEMENT,
    id: data.id,
    title: data.title,
  };
}

export function removeElement(data) {
  unpaintElement(data);
  return { type: REMOVE_ELEMENT, id: data.id, title: data.title };
}

export function request(data) {
  return { type: REQUEST, data };
}

export function fetchStatus(data) {
  let status = data.id === "#path45_stroke" ? 500 : 200;
  let url = "";

  switch (status) {
    case 200:
      url = "http://127.0.0.1:8000/success";
      break;
    case 500:
      url = "http://127.0.0.1:8000/fail";
      break;
  }
  return function (dispatch) {
    dispatch(request(data));
    return fetch(url)
      .then(
        (response) => response.json(),
        (error) => console.log("error!")
      )
      .then((json) => switchAction(json, data, dispatch));
  };
}

function switchAction(json, data, dispatch) {
  if (json.status !== "fail") {
    dispatch(addElement(data));
  }
}

function paintElement(data) {
  let idd = data.id.toString().replace("#", "");
  let el = document.getElementById(idd);
  el && el.setAttribute("stroke", "#F2C94C");
}

function unpaintElement(data) {
  let idd = data.id.toString().replace("#", "");
  let el = document.getElementById(idd);
  el && el.setAttribute("stroke", "");
}
