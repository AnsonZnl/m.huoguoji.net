/**
 * Created by asus on 2018/3/11.
 */
var nativeShare = new NativeShare();
var shareData = {
    title: '火锅鸡网',
    desc: '火锅鸡，源自沧州，走向世界！',
    // 如果是微信该link的域名必须要在微信后台配置的安全域名之内的。
    link: 'http://www.huoguoji.net/',
    icon: 'http://p0bnwspy9.bkt.clouddn.com/logo_bg.jpg',
    // 不要过于依赖以下两个回调，很多浏览器是不支持的
    success: function () {
        alert('success')
    },
    fail: function () {
        alert('fail')
    }
}
nativeShare.setShareData(shareData)

function call(command) {
    try {
        nativeShare.call(command)
    } catch (err) {
        // 如果不支持，你可以在这里做降级处理
        alert(err.message)
    }
}

function setTitle(title) {
    nativeShare.setShareData({
        title: title,
    })
}
var _hmt = _hmt || [];
(function () {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?d69321757dcfbfbe09dbddd4dca87b28";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();