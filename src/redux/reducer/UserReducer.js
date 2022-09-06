const initialState = {
    userData: []
}

export const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_USER":
            return {
                ...state,
                userData: [...state.userData, action.payload]
            }
        default:
            return state
    }
}
