


const initalState = {


    companys:{
        favourites: [],
    }
}


const mainReducer = (state = initalState, action) => {

    switch (action.type) {
        case "ADD_TO_FAVORITES":
            return {
                companys: {
                  ...state.companys,
                  favourites: [...state.companys.favourites, action.payload],
                },
              };
           
    
        default:
            return state;
    }
}



export default mainReducer;