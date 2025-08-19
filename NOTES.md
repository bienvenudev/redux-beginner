# redux-beginner — notes & quick reference

Short summary

- Project uses Vite + React + Redux Toolkit (recommended modern Redux).
- Current goal: wire up a user "login" flow with a slice, store, Provider, a Login component that dispatches, and a Profile component that reads state.

What I did (compartmentalized)

- Created Login and Profile components in `components/`.
- Put both components as siblings in `App.jsx`.
- Wrapped `<App />` with `<Provider store={store}>` in `index.jsx` (inside StrictMode).
- Created a Redux store with `configureStore` and passed the reducer(s) to it.
- Created `features/userSlice.jsx` using `createSlice` with `name: "user"`, `initialState`, and a `login` reducer that sets state from `action.payload`.
- In `Profile` used `useSelector` to read from the Redux store and displayed `user.name`, `user.age`, etc.

Key concepts & clarifications

- createSlice uses Immer: reducers may "mutate" the draft state and you don't need to return a new object. Immer will produce an immutable next state for you.
- action.payload is the data you pass when you dispatch an action:
  - Example: `dispatch(login({ name: 'Alice', age: 30, email: 'a@x.com' }))`
  - Inside the reducer, `action.payload` equals that object.
- The slice initial state shape matters. If your store reducer is mounted under key `user`, then:
  - If `initialState = { user: {...} }`, select with `state.user.user`.
  - If `initialState = { value: {...} }`, select with `state.user.value`.
  - Keep shape consistent to avoid confusion.

Common bug I had

- I wrote `initialState = { value: { ... } }` but then used `state.user = action.payload`. That creates a different shape (`user` property) than I intended. Fix by using a consistent shape.

Suggested consistent pattern (recommended)

- Keep slice state as a single object for the slice (no extra nested `value` unless you want it). Example files:

```javascript
// filepath: [userSlice.jsx](http://_vscodecontentref_/0)
// ...existing code...
import { createSlice } from "@reduxjs/toolkit";

const initialState = { user: { name: "", age: 0, email: "" } };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
// ...existing code...
