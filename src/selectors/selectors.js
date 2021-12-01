import photoReducer from "../redux/photoReducer";

export const getAll = (state) => {
    return state.photoReducer.photographers;
}
