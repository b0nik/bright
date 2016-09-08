let initialState={
    loaded:false,
    data:[]
};

export default function (state=initialState, action) {
    switch (action.type){
        case 'ADD_SOCIAL':
            return Object.assign({},{loaded:true},{data:action.payload});
        default:
            return state
    }
}

