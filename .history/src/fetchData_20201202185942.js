//const URL = process.env.NODE_ENV === 'production' ? 'https://node-douban-api.herokuapp.com' : 'http://localhost:3000/';
const URL = 'http://localhost:3000/';
console.log(URL + '?');

const fetchData = (url, params) => {
    let result = fetch(url, {
        method: 'POST',
            headers: {
                'Accept': 'application/json;charset=UTF-8',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify('BLOG_DETAILS')
    }).then((res) => {
        return res.json();
    }).then((res) => {
        console.log(res)
        return res;
    })
    
    return result
}

export default fetchData;