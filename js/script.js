//banner 点击隐藏
function bannerHide() {
    var hb=document.getElementById("hb");
    var jsBox=document.getElementById("js_box");
    hb.style.display="none";
    jsBox.style.top="1.01rem"
}
// // 选项卡
var tabNav =document.querySelectorAll(".tab_nav .li_list");
var boxList =document.querySelectorAll(".box .box_list");
for (var i=0;i<tabNav.length;i++){
    tabNav[i].index=i;
    tabNav[i].onclick=function (ev) {
        for(var i=0;i<boxList.length;i++){//先清空所有的样式
            tabNav[i].classList.remove("box_active");  //循环清空li样式
            boxList[i].style.display='none';  //循环隐藏所有div
        }
        this.classList.add("box_active");  //当前点击的元素样式变成active
        boxList[this.index].style.display='block';    //this.index 获取当前li对应的索引
    }
}
// //导航
function NavHide() {
    var box=document.getElementById("js_box");
    if(box.className==="nav"){
        box.className="nav none"
    }else {
        box.className="nav"
    }
}

//点击展开
var newstop=document.getElementById("newstop");
var newstext=document.getElementById("newstext");
newstop.onclick=function (){
    if(newstop.innerHTML=="﹀"){
        newstop.innerHTML="︿";
        newstext.style.height="auto";
    }else {
        newstop.innerHTML="﹀";
        newstext.style.height="3rem";
    }
};
//收藏
var shouc=document.getElementById("shouc");
function shou() {
    var last1=shouc.children[0];
    var file1=shouc.children[1];
    console.log(last1);
    last1.src="../images/shou.jpg";
    num=parseInt(file1.innerHTML);
    file1.innerHTML=num+1;
}
