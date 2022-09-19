const initalState = {
  companys: {
    Favorites: [],
  },
};

const mainReducer = (state = initalState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return {
        companys: {
          ...state.companys,
          Favorites: [...state.companys.Favorites, action.payload],
        },
      };
    case "REMOVE_FROM_COMPANYS":
      return {
        ...state,
        companys: {
          ...state.companys,
          Favorites: [
            ...state.companys.Favorites.slice(0, action.payload),
            ...state.companys.Favorites.slice(action.payload + 1),
          ],
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
