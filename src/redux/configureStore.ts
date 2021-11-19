import {createStore} from 'redux';

import counter from "./reducers/Counter.redux";

export const store = createStore(counter);