const contextReducer = (state, action) => {

    switch (action.type) {
        case 'SET_START_DATE':
            console.log(action.payload);
            return {
                startDate: action.payload,
                endDate: state.endDate
            };

        case 'SET_END_DATE':
            console.log(action.payload);
            return {
                endDate: action.payload,
                startDate: state.startDate
            };

        default:
            return state;
    }
};

export default contextReducer;