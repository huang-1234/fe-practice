import { any } from "prop-types";
import { createStore } from "redux";
import { EnthusiasmAction } from "../actions";
import { enthusiasm } from "../reducers";
import { StoreState } from "../types";

const store = createStore<StoreState, EnthusiasmAction, any, any>(enthusiasm as any, {
  enthusiasmLevel: 1,
  languageName: 'TS',
})

