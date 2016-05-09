export default function counter(state = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    console.log(++state);
    return state;
  case 'DECREMENT':
    console.log(--state);
    return state;
  default:
    console.log(state);
    return state;
  }
}
