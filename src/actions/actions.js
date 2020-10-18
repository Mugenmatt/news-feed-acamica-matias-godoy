
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

export const incrementValue = () => ({
    type: INCREMENT
})

export const decrementValue = () => ({
    type: DECREMENT
})

export const resetValue = () => ({
    type: RESET
})
