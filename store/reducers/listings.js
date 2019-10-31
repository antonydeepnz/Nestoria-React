const initialState = () => {
  return {
    listings: [],
    loading: true,
    error: '',
    queryTown: 'london'
  }
} 

export function listings(state = initialState(), action){
  switch (action.type){
    case "GET_LISTINGS": {
      return {...state, loading: action.payload};
    }
    case "GET_LISTINGS_FULFILED": {
      return {...state, listings: action.payload, loading: action.loading};
    }
    case "GET_LISTINGS_REJECTED": {
      return {...state, errorMessage: action.payload, loading: action.loading};
    } 
    default: 
      return state
  }
}

export const requestData = (bool) => {
    return {
        type: "GET_LISTINGS",
        payload: bool,
    };
}

export const requestDataFulfilled = (data) => {
    return {
        type: "GET_LISTINGS_FULFILED",
        payload: data,
        loading: false,
    };
}

export const requestDataRejected = (error) => {
    return {
        type: "GET_LISTINGS_REJECTED",
        payload: error,
        loading: false,
    };
}