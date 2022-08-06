import { PUSH_REVIEW, SET_REVIEW_MODAL } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_REVIEW_MODAL:
      return {
        ...state,
        modalReview: action.payload,
      };
      break;
    case PUSH_REVIEW:
      return {
        ...state,
        modalReview: action.payload,
      };
    default:
      return {
        ...state,
      };
      break;
  }
};
