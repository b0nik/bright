import 'whatwg-fetch';

export function addItems() {
    return dispatch=>{
        fetch('/social', {
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
                    type:'ADD_SOCIAL',
                    payload:data
                })}
            )
            .catch(e=>{
                console.log(e)
            })

    }

}
