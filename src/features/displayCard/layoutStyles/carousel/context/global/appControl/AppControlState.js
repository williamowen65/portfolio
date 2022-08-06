import React, { useReducer } from "react";
import AppControlContext from "./appControlContext";
import appControlReducer from "./appControlReducer";
// import lastEdited from "../../lastEdited";

import {
  TOGGLE_SIDENAV,
  SET_DETAIL,
  SET_MOBILE,
  CHANGE_THEME,
  MINIMIZE,
  FORCE_SB,
  SET_VIEW,
  PAGE_LOAD,
  SET_LASTEDIT,
  SET_CAROUSEL_NOTOUCH_SCROLL,
} from "../types.js";

let lastEdited = "dsfsdf"
const AppControlState = (props) => {
  const initialState = {
    opening:
      "If you are interested in your own project, this is a good time to contact me.<br><br>My work is discounted since I am still learning and building a portfolio",
    sidenavToggle: false,
    mobile: false,
    theme: "default",
    minimized: true,
    detail: {
      id: "", //ID is = "_" + "#" + "Title of project"
      openDetail: false,
    },
    forceSB: false,
    inView: ["Client Projects"],
    pageLoaded: false,
    lastEdit: lastEdited,
    carouselScrollNoTouch: {
      section: "",
      mousePos: [],
      dragging: false,
    },
  };
  const [state, dispatch] = useReducer(appControlReducer, initialState);

  setTimeout(() => {
    if (!state.pageLoaded) {
      dispatch({
        type: PAGE_LOAD,
        payload: true,
      });
    }
  }, 1000);

  const toggle = (bool) => {
    // console.log("side nav toggled");
    dispatch({
      type: TOGGLE_SIDENAV,
      payload: bool,
    });
  };

  const setMobile = (bool) => {
    // console.log("setMobile", bool);
    dispatch({
      type: SET_MOBILE,
      payload: bool,
    });
  };

  const changeTheme = (theme) => {
    dispatch({
      type: CHANGE_THEME,
      payload: theme,
    });
    // console.log(theme);
  };

  const minimize = (bool) => {
    dispatch({
      type: MINIMIZE,
      payload: bool,
    });
  };

  const setDetail = (id, title) => {
    if (state.detail.id == `${id}_${title}`.toString()) {
      // console.log("match");
      return dispatch({
        type: SET_DETAIL,
        payload: {
          openDetail: !state.detail.openDetail,
          id: `${id}_${title}`,
        },
      });
    }
    dispatch({
      type: SET_DETAIL,
      payload: {
        openDetail: true,
        id: `${id}_${title}`,
      },
    });
  };

  const setForceSB = (bool) => {
    dispatch({
      type: FORCE_SB,
      payload: bool,
    });
  };

  const setInView = (content) => {
    dispatch({
      type: SET_VIEW,
      payload: content,
    });
  };

  const setLastEdit = () => {
    // console.log(lastEdited);
    dispatch({
      type: SET_LASTEDIT,
      payload: lastEdited,
    });
  };

  const setCarouselScrollNoTouch = (object) => {
    console.log(object);

    dispatch({
      type: SET_CAROUSEL_NOTOUCH_SCROLL,
      payload: object,
    });
  };

  return (
    <AppControlContext.Provider
      value={{
        sidenavToggle: state.sidenavToggle,
        mobile: state.mobile,
        theme: state.theme,
        minimized: state.minimized,
        detail: state.detail,
        forceSB: state.forceSB,
        opening: state.opening,
        inView: state.inView,
        pageLoaded: state.pageLoaded,
        lastEdit: state.lastEdit,
        carouselScrollNoTouch: state.carouselScrollNoTouch,
        minimize,
        toggle,
        setMobile,
        changeTheme,
        setDetail,
        setForceSB,
        setInView,
        setLastEdit,
        setCarouselScrollNoTouch,
      }}
    >
      {props.children}
    </AppControlContext.Provider>
  );
};

export default AppControlState;
