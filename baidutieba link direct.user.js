// ==UserScript==
// @name         baidutieba link direct
// @namespace    http://defia.me/
// @version      0.1
// @description  去除sb的百度贴吧外链的问题
// @author       defia
// @include      /^https?://tieba\.baidu\./
// @grant        none
// ==/UserScript==
//setTimeout(function(){
var jquery=$.noConflict(true);
//var jquery=jQuery;
jquery("a").each(function(){
    var href1=jquery(this).attr("href");
    if (href1===undefined) {return;}
    if (href1.indexOf("safecheck")>-1){
    jquery(this).attr("href",jquery(this).text());
                              //$(this).unbind();
    };
});

