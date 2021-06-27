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
  let zW, zH;
  switch (action.type) {
    case ZOOM_IN:
      zW = state.zoom.w += (state.zoom.w / 100) * 5;
      zH = state.zoom.h += (state.zoom.h / 100) * 5;
      return Object.assign({}, state, {
        zoom: {
          w: zW,
          h: zH,
        },
      });
    case ZOOM_OUT:
      zW = state.zoom.w -= (state.zoom.w / 100) * 5;
      zH = state.zoom.h -= (state.zoom.h / 100) * 5;
      return Object.assign({}, state, {
        zoom: {
          w: zW,
          h: zH,
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
