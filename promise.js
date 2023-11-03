const myResponsePromises = fetch("https://jsonplaceholder.typicode.com/posts/1")

myResponsePromises.then(hello);

function hello(res){
    const myDataPromises = res.json();
    myDataPromises.then(myDataCallback);
}

function myDataCallback(data){
    console.log(data);
}