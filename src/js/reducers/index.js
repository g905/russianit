import {
  ADD_ELEMENT,
  REMOVE_ELEMENT,
  REQUEST,
  ZOOM_IN,
  ZOOM_OUT,
  REFRESH,
} from "../constants/action-types";

const initialState = {
  isFetching: false,
  zoom: {
    w: 237.0,
    h: 331.0,
  },

  elements: [
    {
      id: 12,
      title: "initial test",
    },
  ],
};

function elements(state = initialState, action) {
  switch (action.type) {
    case ZOOM_IN:
    case ZOOM_OUT:
      return Object.assign({}, state, {
        zoom: {
          w: action.zoom.w,
          h: action.zoom.h,
        },
      });
    case REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case ADD_ELEMENT:
      let idx = state.elements.findIndex((el) => el.id == action.id);
      if (idx > -1) {
        console.log("element " + action.title + " already added");
        return state;
      }
      console.log("adding element " + action.title);
      return Object.assign({}, state, {
        isFetching: false,
        elements: [
          ...state.elements,
          {
            id: action.id,
            title: action.title,
          },
        ],
      });
    case REMOVE_ELEMENT:
      console.log("removed element " + action.id);
      return {
        ...state,
        elements: state.elements.filter(function (el) {
          return el.id !== action.id;
        }),
      };
    default:
      return state;
  }
}

export default elements;
