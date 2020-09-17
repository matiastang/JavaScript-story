// var postItemTool = require('./postTool.js')
//
// var testConten = '<p>iQOO 3搭载了基于安卓10的iQOO UI，在Monster UI的基础上对系统图标和界面进行了调整或重绘，采用了新的操作逻辑，整体仍是简约与自然的风格。iQOO UI延续了Funtouch OS一贯的成熟稳定与流畅好用，贴心的智慧功能也一如既往，下面就与我一起了解一下强大的iQOO UI吧。</p><p><img alt="https://blue-demo.imdo.co/uploadFile/images/20200328/1baa2961e380e4c4237408b6d938ee16.jpg" src="https://blue-demo.imdo.co/uploadFile/images/20200328/1baa2961e380e4c4237408b6d938ee16.jpg"></p><p><br></p><p><img alt="https://blue-demo.imdo.co/uploadFile/images/20200328/2a548d673bf143fa179e538c91fe55a0.jpg" src="https://blue-demo.imdo.co/uploadFile/images/20200328/2a548d673bf143fa179e538c91fe55a0.jpg"><br><p><img alt="https://blue-demo.imdo.co/uploadFile/images/20200328/312e300d06837911aee62fb172ae5502.jpg" src="https://blue-demo.imdo.co/uploadFile/images/20200328/312e300d06837911aee62fb172ae5502.jpg"></p><p><a target="_self" href="https://www.vivo.com.cn">https://www.vivo.com.cn</a></p></p>';
// console.log(postItemTool.getPostType(testConten))
// console.log(postItemTool.getPostImageSrc(testConten))
//
// testConten = '阿斯顿发送到<p style="text-align: center;"><span style="text-align: start;">《灵兽》</span></p ><p style="text-align: center;"><br></p ><p style="text-align: center;"><iframe frameborder="0" src="https://v.qq.com/iframe/player.html?vid=p0033x7mst9&amp;auto=0" allowfullscreen=""></iframe></p >';
// console.log(postItemTool.getPostType(testConten))
// console.log(postItemTool.getPostVideoVid(testConten))
//
// testConten = '阿斯顿发送到<p style="text-align: center;"><span style="text-align: start;">《灵兽》</span></p ><p style="text-align: center;"><br></p ><p style="text-align: center;"><iframe frameborder="0" src="https://v.qq.com/iframe/player.html?vid=p0033x7mst9" allowfullscreen=""></iframe></p >';
// console.log(postItemTool.getPostType(testConten))
// console.log(postItemTool.getPostVideoVid(testConten))
//
// return

// ES6

// 如何创建一个包含当前URL参数的对象
const mtGetURLParameters = url => (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce((a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a),{});


// 平滑滚动到页面顶部
// const scrollToTop = (element) => {
//     const c = $().scrollTop || document.body.scrollTop;
//     if (c > 0) {
//       window.requestAnimationFrame(scrollToTop);
//       window.scrollTo(0, c - c / 8);
//     }
// }

// 平滑滚动到页面顶部
const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
}
/*
复制代码window.requestAnimationFrame() 告诉浏览器-你希望执行一个动画，并且要求浏览器在下一重绘之前调用指定的函数更新动画。该方法需要放置一个替换函数作为参数，该变量函数会在浏览器下一次重绘之前执行。
requestAnimationFrame：优势：由系统决定决定功能的执行时机。60Hz的刷新频率，然后每次刷新的间隔中会执行一次替换函数，不会引起丢帧，不会卡顿。
*/

/*
如何用js判断一个对象是不是Array
1.Array.isArray(obj) 调用数组的isArray方法
2.obj instanceof Array  判断对象是否是Array的实例
3.Object.prototype.toString.call(obj) ===‘[object Array]’  
    Object.prototype.toString方法会取得对象的一个内部属性［［Class］］，然后依据这个属性，返回一个类似于［object Array］的字符串作为结果，call用来改变toString的this指向为待检测的对象
4.判断对象是否有push等数组的一些方法。（这个方法有兼容问题，但也是一个简单易用的方法）
    
5.obj.constructor===Array   //true
*/
// console.log($('#activity-signup-modal-form').serialize())
// console.log($('#activity-signup-modal-form').serializeArray())
// let infoSignup = $('#activity-signup-modal-form').serializeObject()
// console.log(infoSignup)
// 表单对象
$.fn.serializeObject = function () {
  var ct = this.serializeArray();
  var obj = {};
  $.each(ct, function () {
      if (obj[this.name] !== undefined) {
          if (!obj[this.name].push) {
              obj[this.name] = [obj[this.name]];
          }
          obj[this.name].push(this.value || "");
      } else {
          obj[this.name] = this.value || "";
      }
  });
  return obj;
};

//扩展jquery的格式化方法
$.fn.parseForm=function(){
  var serializeObj={};
  var array=this.serializeArray();
  var str=this.serialize();
  $(array).each(function(){
      if(serializeObj[this.name]){
          if($.isArray(serializeObj[this.name])){
              serializeObj[this.name].push(this.value);
          }else{
              serializeObj[this.name]=[serializeObj[this.name],this.value];
          }
      }else{
          serializeObj[this.name]=this.value; 
      }
  });
  return serializeObj;
};