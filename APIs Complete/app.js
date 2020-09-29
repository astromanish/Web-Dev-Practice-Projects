axios({
    method : "get",
    url : "https://jsonplaceholder.typicode.com/todos",
    params: {
        _limit : 10
    }
})
.then(res => console.log(res))
.catch(err => console.error(err))