
# redux-beginner

Lightweight Vite + React project practicing Redux Toolkit patterns (slice, store, Provider, dispatch, selectors).

Tutorial: [React Redux Tutorial For Beginners | Redux Toolkit Tutorial 2021](https://www.youtube.com/watch?v=k68j9xlbHHk&ab_channel=PedroTech)

## Quick summary

- Uses Vite + React + Redux Toolkit (`@reduxjs/toolkit`) and `react-redux`.
- Goal: implement a simple user login flow with a `user` slice, `Login` and `Profile` components.

## Setup

Install dependencies and start dev server:

```bash
npm install
npm run dev
```

The project was created with Vite — Redux code and RTK usage are the same regardless of bundler.

## Important files

- `features/userSlice.jsx` — the slice for user state (initial state, reducers, actions).
- `src/app/store.js` (or similar) — `configureStore` and reducer registration.
- `src/index.jsx` — wraps `<App />` with `<Provider store={store}>`.
- `src/components/Login.jsx` — dispatches the `login` action.
- `src/components/Profile.jsx` — reads state with `useSelector`.

## Slice & state shape notes

The shape you choose for slice state determines your selectors. Two common patterns:

- Pattern A (current in this repo):

```js
// features/userSlice.jsx
const initialState = { value: { name: "", age: 0, email: "" } };
// reducer sets: state.value = action.payload
```

When registered under the `user` key in the store, select with:

```js
const user = useSelector(state => state.user.value);
```

- Pattern B (alternative, slightly clearer):

```js
 initialState = { user: { name: "", age: 0, email: "" } };
 reducer sets: state.user = action.payload
```

Then select with:

```js
const user = useSelector(state => state.user.user);
```

Pick one shape and keep it consistent across slice, store registration, and selectors.

## Dispatching actions

Action payloads are the data you pass into the action creator. Example:

```js
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';

const dispatch = useDispatch();
dispatch(login({ name: 'Alice', age: 30, email: 'alice@example.com' }));
```

Inside the reducer `action.payload` will be that object. With RTK and Immer you can directly assign into the draft state (no need to return a new object).

## Common pitfalls

- Mismatched state shape (e.g., initialState uses `value` but you set `state.user = ...`) — pick a single shape.
- Wrong selector path — verify `state.<sliceKey>.<field>` matches your `initialState`.

## Next steps

- Implement `Login` to dispatch the `login` action.
- Confirm `Profile` uses the correct selector and updates when login is dispatched.
- Add `logout` reducer to clear the user.

## Notes

- RTK (`createSlice`, `configureStore`) is the recommended modern Redux approach — it reduces boilerplate and uses Immer for safe mutations.
