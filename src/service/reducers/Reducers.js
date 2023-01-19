import { ADD_TO_CART } from '../Constantas'

const initialState={
    cardData:[]
}
export default function cardItems(state=initialState,Action) {
    switch (Action.type) {
        case ADD_TO_CART:

            return [
                ...state,
                { cardData: Action.data }
            ]
        default:
            return state
    }
}