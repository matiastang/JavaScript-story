/*
 * @Descripttion: 
 * @version: 
 * @Author: matias tang
 * @Date: 2020-09-17 11:23:03
 * @LastEditors: matias tang
 * @LastEditTime: 2020-09-17 11:59:16
 */
/**
 * @name: 
 * @test: test font
 * @msg: 
 * @param {type} 
 * @return {type} 
 */
// TODO: - 优化
// FIXME:- 注意(只是测试,没问题)
// MARK:- 提示、说明
function getURLParameters() {

    var nowurl = window.location.href;
    var urlParameters = {}
    var parameters = nowurl.replace(/[?&]+([^?&=]+)=([^?&]+)/gi, function (one, two, three, four, five) {
        urlParameters[two] = decodeURI(three)
        return two + '->' + three;
    });
    return urlParameters
}

// 如何创建一个包含当前URL参数的对象
const mtGetURLParameters = url => (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce((a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a),{});

let testURL = 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=ios%20FIXME&fenlei=256&oq=FIXM%2526gt%253B&rsv_pq=c35d3e9200007e6b&rsv_t=1a02lWJV0CKgyx8hzHmJpqHpbmV4rYkSoe8r%2BD6dv66QUEa2ayVyz8mTvb0&rqlang=cn&rsv_enter=1&rsv_dl=tb&rsv_btype=t&inputT=1402&rsv_sug3=606&rsv_sug1=377&rsv_sug7=100&rsv_sug2=0&prefixsug=ios%2520FIXM%2526gt%253B&rsp=1&rsv_sug4=2530'
let parameters = testURL.match(/([^?=&]+)(=([^&]*))/g)
console.log(parameters)