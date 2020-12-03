const fetchData = (url, params) => {
    //const URL = process.env.NODE_ENV === 'production' ? 'https://node-douban-api.herokuapp.com' : 'http://localhost:3000/';
    const URL = 'http://localhost:3000/';
    console.log(URL + '?' + params);
    fetch(URL,{
        method: 'Post',
        headers: {
            'Accept': 'application/json;chartset=UTF-8',
            'content-type': 'application/json',
        },
        body: JSON.stringify(params)
    }).then((res) => {
        return res.json();
    }).then((res) => {
        res = {
            blogName : "sssry's",
            date: '2020-02-12',
            ForwardCount: 1,
            CommentsCount: 1,
            FavoritesCount: 1,
            blogContainerText: 'aaaaaa'
        };
        console.log(res);
        return res;
    })
}

export default fetchData;