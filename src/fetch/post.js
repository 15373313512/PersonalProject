 //post请求方式
 export default postHttp = function(url,params){
    var result = fetch(url,{
       method: "post",
       headers: {
           "Accept": 'application/json, text/plain,*/*',
           "Content-Type": "application/x-www-form-urlencoded"
       },
       body: stringify(params)
    })
    result.then((res) => {
        return res.json();
    })
    .then((data) => {
        return data;
    })
}

//参数处理的函数
function stringify(obj){
    var result = "";
    var item;
    for(item in obj){
        result += "&"+item+"="+encodeURIComponent(obj[item]);
    } 
    if(result){
        result = result.slice(1)
    }
    return result;
}
