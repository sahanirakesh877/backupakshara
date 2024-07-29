import { configureStore } from "@reduxjs/toolkit";
import noticeReducer from "./Notice/NoticeSlice";
import heroPhotoReducer from "./Hero/HeroSlice";

export const store = configureStore({
  reducer: {
    notices: noticeReducer,
    herophoto: heroPhotoReducer,
  },
});
