import {
  CHANGE_THEME,
  SET_DETAIL,
  MINIMIZE,
  SET_MOBILE,
  TOGGLE_SIDENAV,
  FORCE_SB,
  SET_VIEW,
  PAGE_LOAD,
  SET_LASTEDIT,
  SET_CAROUSEL_NOTOUCH_SCROLL,
} from "../types";

// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case TOGGLE_SIDENAV:
      return {
        ...state,
        sidenavToggle: action.payload,
      };
    case SET_MOBILE:
      return {
        ...state,
        mobile: action.payload,
      };
    case CHANGE_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    case MINIMIZE:
      return {
        ...state,
        minimized: action.payload,
      };
    case SET_DETAIL:
      // console.log(action.payload);
      return {
        ...state,
        detail: {
          id: `${action.payload.id}`,
          openDetail: action.payload.openDetail,
        },
      };
    case FORCE_SB:
      return {
        ...state,
        forceSB: action.payload,
      };
    case SET_VIEW:
      return {
        ...state,
        inView: [action.payload],
      };
    case PAGE_LOAD:
      return {
        ...state,
        pageLoaded: action.payload,
      };
    case SET_LASTEDIT:
      // console.log("hi");
      return {
        ...state,
        lastEdit: action.payload,
      };
    case SET_CAROUSEL_NOTOUCH_SCROLL:
      return {
        ...state,
        carouselScrollNoTouch: action.payload,
      };
    default:
      return state;
  }
};
