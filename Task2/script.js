let api1 = 'https://jsonplaceholder.typicode.com/posts/1';
let api2 = 'https://api.some-random-api.com/animal/cat';
let api3 = 'https://randomuser.me/api/';
let api4 = 'https://api.randomdatatools.ru/';
let api5 = 'https://www.dnd5eapi.co/api/2014/ability-scores/cha';

function request(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => callback(null, JSON.parse(xhr.response));
    xhr.onerror = () => callback(new Error(`Error on request to ${url}`));
    xhr.send();
}

function requestPromise(url) {
    return new Promise((resolve, reject) => {
      request(url, (error, data) => {
        if (error) reject(error);
        else resolve(data);
        });
    });
}
  
async function doRequest() {
    try {
        let response1 = await requestPromise(api1);
        console.log(response1);
      
        let response2 = await requestPromise(api2);
        console.log(response2);
        
        let response3 = await requestPromise(api3);
        console.log(response3);

        let response4 = await requestPromise(api4);
        console.log(response4);

        let response5 = await requestPromise(api5);
        console.log(response5);
      
    } catch (error) {
      console.error(error);
    }
}

doRequest()