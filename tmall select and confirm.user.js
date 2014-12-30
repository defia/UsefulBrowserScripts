// ==UserScript==
// @name         tmall select and confirm
// @namespace    http://your.homepage/
// @version      0.1
// @description  天猫自动刷新，选择宝贝，如果还有货的话确认，用于双11。。
// @author       You
// @match        http://detail.tmall.com/*
// @grant        none
// @require http://code.jquery.com/jquery-1.11.1.min.js
// ==/UserScript==

var it=setInterval(function(){
         
        var abc=jQuery(".tb-prop");
        if (abc.length<1){return;}
        clearInterval(it);
        
        $('span:contains(175)').click();//选型号
    $('span:contains(翠绿色)').click();

    setTimeout(function(){location.reload();},5000); 

},500); 
setInterval(
    function(){$(".ensureText").click();},500);

