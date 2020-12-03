//const URL = process.env.NODE_ENV === 'production' ? 'https://node-douban-api.herokuapp.com' : 'http://localhost:3000/';

console.log(URL + '?');

const fetchData = (url, params) => {
    const URL = 'http://localhost:3000/' + url;
    let result = fetch(URL).then((res) => {
        return res.json();
    }).then((res) => {
        console.log(res)
        return res;
    })
    
    return result
}

export default fetchData;