window.addEventListener('unhandledrejection',function(e){
     //监听么有处理的promise的error
})
//监听外部资源加载失败
window.addEventListener('error',function(event){
   
    if(!(event instanceof ErrorEvent)){
        //排除js运行异常 
        console.log("sdfsdfsf ",event);
        const target=event.target;
        console.log("target src is ",target.src);
    }
},true)
/**
 * 
 * @param {String} msg 
 * @param {String} url 
 * @param {Number} row 
 * @param {Number} col 
 * @param {Object} error 
 */
window.onerror=function(msg, url, row, col, error){
    //监控脚本运行报错
    console.error('err message',{
        msg,
        url,
        row,
        col,
        error
    });
}

//上报错误信息
window.uploadError=function(){
    if(navigator.sendBeacon){
        navigator.sendBeacon();
    }else{
        //向下兼容
    }
}

//采集性能指标
function getPerformanceData(){
    
    const navigation=window.performance.getEntries();
    console.log("performance is ",navigation);
}

getPerformanceData();