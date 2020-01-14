export const loadState = (key) => {
  try {
    const serializedState = localStorage.getItem('nestoria');
    if (serializedState) {
      return {...JSON.parse(serializedState)}[key] 
    }
  } catch (err) {
    return;
  }
}; 

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('nestoria', serializedState);
  } catch (err) {
    console.log(err)
  }
}