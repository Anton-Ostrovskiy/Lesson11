import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AnyAction, combineReducers } from "redux";

const cashDefaultState = {
    cash: 0,
};

export const cashSlice = createSlice({
    name: 'cash',
    initialState: cashDefaultState,
    reducers: {
        addCash: (state, action) => {
            state.cash += action.payload
        },
        getCash: (state, action) => {
            state.cash -= action.payload
        }
    }
    
});

export const cashReducers = cashSlice.reducer
export const {addCash} = cashSlice.actions
export const {getCash} = cashSlice.actions

const nickDefaultState = {
  username: "nickname",
};

export const nickSlice = createSlice({
    name: 'username',
    initialState: nickDefaultState,
    reducers: {
        changeUsername: (state, action) => {
            state.username = action.payload
        }
    }
    
});

export const nickReducers = nickSlice.reducer
export const {changeUsername} = nickSlice.actions

export interface IUsers {
    users: string[]
}

const usersDefaultState: IUsers = {
  users: [],
};

export const usersSlice = createSlice({
    name: 'users',
    initialState: usersDefaultState,
    reducers: {
        addUsers: (state, action) => {
            state.users.push(action.payload)
        },
        removeUsers: (state, action) => {
            state.users = state.users.filter(user => user !== action.payload)
        }
    }
    
});

export const usersReducers = usersSlice.reducer
export const {addUsers} = usersSlice.actions
export const {removeUsers} = usersSlice.actions

// const cashReducer = (state = cashDefaultState, action: AnyAction) => {
//   switch (action.type) {
//     case "ADD_CASH":
//       return { ...state, cash: state.cash + action.payload };
//     case "GET_CASH":
//       return { ...state, cash: state.cash - action.payload };
//     default:
//       return state;
//   }
// };

// const nickReducer = (state = nickDefaultState, action: AnyAction) => {
//   switch (action.type) {
//     case "CHANGE_NICKNAME":
//       return { ...state, username: action.payload };
//     default:
//       return state;
//   }
// };

// const usersReducer = (state = usersDefaultState, action: AnyAction) => {
//   switch (action.type) {
//     case "ADD_USER":
//       return { ...state, users: [...state.users, action.payload] };
//     case "REMOVE_USER":
//       return {
//         ...state,
//         users: state.users.filter((user: string) => user !== action.payload),
//       };
//     default:
//       return state;
//   }
// };

// export const rootReducer = combineReducers({
//   cash: cashReducer,
//   nick: nickReducer,
//   users: usersReducer,
// });