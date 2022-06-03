// ==UserScript==
// @name         Set CTAN Mirror
// @name:zh      设置 CTAN 默认镜像
// @namespace    https://github.com/rnicrosoft-studio/
// @version      0.1
// @description  Set to use a fixed mirror when browsing CTAN files.
// @description:zh   设置浏览 CTAN 文件时使用一个固定的镜像。
// @author       rnicrosoft
// @supportURL   https://github.com/rnicrosoft-studio/tampermonkey-scripts
// @match        *://www.ctan.org/pkg/*
// @icon         https://www.ctan.org/assets/favicon/favicon-32x32.png
// @run-at       document-end
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
    'use strict';

    // First, set the endpoint of your preferred mirror host here.
    // Check <https://ctan.org/mirrors/mirmon> for the latest active CTAN mirrors list.
    var mirrorEndpoint = 'mirrors.sjtug.sjtu.edu.cn/ctan';

    document.querySelectorAll('a[href^="http://mirrors.ctan.org"], a[href^="https://mirrors.ctan.org"]').forEach(function(item) {
        //console.log(item.getAttribute('href'))
        item.setAttribute('href',
                          item.getAttribute('href').replace('mirrors.ctan.org', mirrorEndpoint))
    })
})();
