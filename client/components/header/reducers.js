
let initialState={
    loaded:false,
    links:[]
};

export default function (state=initialState,action) {

    switch (action.type){
        case 'GET_LINKS':
            return Object.assign({},state,{loaded:true},{links:action.payload})

        default :
            return state;
    }
}
