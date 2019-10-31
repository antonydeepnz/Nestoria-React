const initialState = () => {
 return {
    town: 'london'
    }
}

export default function query(state = initialState(), action){
  switch (action.type){
    case "MAKE_QUERY_STRING": {
      if (action.payload !== ''){
        const newTown = action.payload.toLowerCase();
        state.town = newTown;
        return state;
      } else {
        state = initialState();
        return state; 
      } 
    }
  }
  return state;
}