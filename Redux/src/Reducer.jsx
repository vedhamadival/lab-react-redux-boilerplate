const initialState = {
    Like: 0
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case "INCREMENT": return{
            Like: state.Like + 1
        }
        case "DECREMENT": return {
            Like: state.Like - 1
        }
        default: return state
    }
}

export default reducer