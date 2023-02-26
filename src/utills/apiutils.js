
function getuserposts(){
    return fetch("http://localhost:4000/getposts")
    .then(res => res.json())
    // return 
}

export {
    getuserposts
}