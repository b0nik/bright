import 'whatwg-fetch';

export function getData() {
    return dispatch=>{
        fetch('/product', {
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            }
        })
            .then(
                response=>{return response.json()},
                err=>{console.log(err)}
            )
            .then(
                data=>{dispatch({
                    type:'ADD_PRODUCT',
                    payload:data
                })}
            )
            .catch(e=>{
                console.log(e)
            })

    }

}
