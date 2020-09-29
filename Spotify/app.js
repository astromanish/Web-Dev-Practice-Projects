axios({
    method : "get",
    url : "https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks",
    params : {
        market : "ES",
        limit : 10,
        offset : 5
    },
    headers : {
        Authorization : "Bearer BQBhAuo-Sg-M8OHPGV21UF7ON--rbQfvDXwLxhQ-AULWFWMkQHz5iucPz_Ms8xWXBftU-KgZi8ghszMBWrkbLgWLgUGAoaHghto9IWAV9S8yiGVUNtaJyfx-XTwyA0gwxG2wEHaYDfSu9FV5mmXUm4BuXGxugt5vWfY"
    }
})

.then(res => console.log(res))
.catch(err => console.error(err))