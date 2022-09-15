


const initalState = {


    companys:{
        favourites: [],
    }
}


const mainReducer = (state = initalState, action) => {

    switch (action.type) {
        case "ADD_TO_FAVORITES":
            return {
                ...state,
                companys: {
                  ...state.companys,
                  content: [...state.companys.favourites, action.payload],
                },
              };
           
    
        default:
            return state;
    }
}



export default mainReducer;