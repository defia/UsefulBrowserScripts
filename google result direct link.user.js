// ==UserScript==
// @name         google result direct link
// @namespace    http://defia.me
// @version      0.1
// @description  enter something useful
// @author       You
// @include      /^https?://www\.google\./
// @grant       defia.me
//@require	http://cdnjscn.b0.upaiyun.com/libs/jquery/1.9.1/jquery.min.js
// ==/UserScript==
//setTimeout(function(){
$("#rso .r a").each(function(){
    $(this).removeAttr("onmousedown");
    $(this).attr("href",$(this).attr("data-href"));
});
