export function getLinks(data) {
    let result=data.map(item=>{
        return {
            name:item.name,
            link:item.link
        }
    });
    return {
        type:'GET_LINKS',
        payload:result
    }
}
