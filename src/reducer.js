export const initialState = {
    user: null,
    ingredients: [],
};
  
export const actionTypes = {
    SET_USER: "SET_USER",
    SET_INGREDIENTS: "SET_INGREDIENTS",
};
  
const reducer = (state, action) => {
    switch (action.type) {
    case actionTypes.SET_USER:
        return {
        ...state,
        user: action.user,
    };
    case actionTypes.SET_INGREDIENTS:
        return {
        ...state,
        ingredients: action.ingredients,
    };
  
    default:
        return state;
    }
};

export default reducer;
