export const loadState = (key) => {
  try {
    const serializedState = localStorage.getItem('nestoria');
    if (serializedState === null) {
      return undefined;
    }
    return {...JSON.parse(serializedState)}[key];
  } catch (err) {
    return undefined;
  }
}; 

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('nestoria', serializedState);
  } catch {
    
  }
};