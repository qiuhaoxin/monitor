window.addEventListener('unhandledrejection',function(err){
     //监听么有处理的promise的error
     console.log("promise bao cuo!!",err.reason);
})
//监听外部资源加载失败  注意要排除 ErrorEvent 的错误类型，避免重复监听
window.addEventListener('error',function(event){
     // 如果样式外部文件，通过<link />标签进行加载 要加上rel="stylesheet" 才能监控加载失败，否则不行
    if(!(event instanceof ErrorEvent)){
        //排除js运行异常 
        const target=event.target;
        const tagName=target.tagName;
        if(tagName=='LINK'){
            console.log(`外部样式${target.href} 加载失败!`);
        }else {
            console.log(`链接 ${target.src} 加载失败!`);
        } 
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
    const per=window.performance;
    const memory=per.memory;
    const timing=per.timing;
    const n=per.navigation;
    console.log("memory "+JSON.stringify(memory)+" and timing is "+JSON.stringify(timing)+" and n is "+JSON.stringify(n));
    const navigation=window.performance.getEntries();
    console.log("performance is ",navigation);
}

getPerformanceData();

//封装上报的方法
(function(win){
    
})(window)