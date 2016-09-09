let initialState={
    loaded:false,
    data:[]
};

export default function (state=initialState,action) {
    switch (action.type){
        case "ADD_PRODUCT":
            return Object.assign({},state,{loaded:true},{data:action.payload})
        default:
            return state;
    }

}
