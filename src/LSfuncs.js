export const loadState = (key) => {
  try {
    const serializedState = localStorage.getItem('nestoria');
    if (serializedState === null) {
      return undefined;
    }
    const result = {...JSON.parse(serializedState)};
    return result[key];
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