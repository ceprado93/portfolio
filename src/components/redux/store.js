import { createStore } from "redux";
import { toggleReducer } from "./reducer";

export const store = createStore(toggleReducer, false);

export const selectOption = (state) => state;
