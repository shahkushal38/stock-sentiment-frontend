const contextReducer = (state, action) => {

    switch (action.type) {
        case 'SET_START_DATE':
            console.log(action.payload);
            return {
                startDate: action.payload,
                ...state
            };

        case 'SET_END_DATE':
            console.log(action.payload);
            return {
                endDate: action.payload,
                ...state
            };

        default:
            return state;
    }
};

export default contextReducer;