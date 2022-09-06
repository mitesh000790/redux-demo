export const createUser = (data) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: "CREATE_USER",
                payload: data
            })
        } catch (error) {
            console.log(error)
        }
    }
}
