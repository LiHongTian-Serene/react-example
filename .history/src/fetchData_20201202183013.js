const fetchData = (url, params) => {
    //const URL = process.env.NODE_ENV === 'production' ? 'https://node-douban-api.herokuapp.com' : 'http://localhost:3000/';
    const URL = 'http://localhost:3000/';
    console.log(URL + '?' + params);
    fetch(url,{
        // method: 'GET',
        // headers: {
        //     'Accept': 'application/json;chartset=UTF-8',
        //     'content-type': 'application/json',
        // },
        body: JSON.stringify(params)
    }).then((res) => {
        return res.json();
    }).then((res) => {
        
        return res;
    })
}

export default fetchData;