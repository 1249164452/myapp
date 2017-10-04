(function(window){var svgSprite='<svg><symbol id="icon-zhihu" viewBox="0 0 1024 1024"><path d="M303.787 182.187c-31.36 11.52-39.894 23.466-59.307 82.773-11.52 35.627-31.36 85.76-45.44 115.2-4.267 9.173-7.253 17.067-6.613 17.707 1.706 1.92 28.373-4.694 39.466-9.6 5.12-2.347 15.36-10.24 22.827-17.494 12.587-12.586 18.773-23.68 27.52-49.28 1.28-3.2 4.907-3.626 35.627-3.626H352v26.026c0 28.587-3.84 117.974-5.547 129.067l-1.066 7.04H220.16l-6.4 5.333c-6.613 5.547-17.067 26.454-18.987 38.4l-1.28 7.467 72.32 0.427 72.32 0.64-0.64 12.8c-2.773 58.026-36.266 136.96-81.493 192-13.013 15.786-50.347 52.693-65.707 65.066-9.173 7.254-9.173 7.254-4.266 10.027 11.306 6.187 51.2 1.707 82.773-9.387 13.44-4.693 18.133-7.68 28.8-18.773 25.6-26.027 51.84-72.96 67.413-120.747l9.174-28.16 8.106 9.387c4.694 5.12 12.374 14.293 17.28 20.267 45.44 55.253 57.814 70.4 69.334 85.12 18.346 23.893 23.466 29.866 24.746 28.586 2.347-2.133 5.547-29.653 5.547-47.36 0-30.72-0.853-32.426-34.773-72.106-33.707-39.467-53.974-61.654-55.894-61.654-0.853 0-7.68 5.334-15.36 11.947-7.68 6.4-14.293 11.307-14.933 10.667-0.427-0.427 0.427-5.12 2.133-10.24 3.2-9.387 11.094-50.347 13.227-68.48l1.28-10.027h136.533l-1.493-14.507c-0.853-7.893-2.987-19.2-4.907-24.96l-3.413-10.666-61.653-0.64-61.654-0.427 1.28-23.04c0.854-12.587 2.134-49.067 2.774-81.067l1.493-58.026h113.067l-1.067-17.92c-1.28-20.054-4.693-28.8-12.373-32.64-4.054-2.134-28.8-2.774-103.68-2.774H301.44l3.84-14.72c2.133-7.893 8.32-26.88 13.653-42.026 5.334-14.934 9.6-28.16 9.6-29.014 0-3.2-11.52-1.493-24.746 3.414z m260.693 79.36c-2.347 6.186-1.493 474.453 0.853 478.933 2.134 3.627 4.694 4.053 24.534 4.053h22.186l6.4 20.694c3.627 11.52 7.04 23.466 7.894 26.666 0.64 3.414 1.92 5.974 2.773 5.974 0.853 0 6.4-2.987 12.16-6.827 77.227-49.707 68.267-46.507 133.973-46.507 41.174 0 52.48-0.64 54.4-2.986 1.707-2.134 2.134-67.2 1.92-242.56l-0.64-239.787-132.48-0.64c-119.68-0.427-132.693-0.213-133.973 2.987z m213.12 238.72v189.866l-29.867 1.067-29.866 1.067-25.6 16.213c-14.08 8.747-29.227 18.133-33.494 20.907l-7.893 4.693-2.347-9.173c-1.493-5.12-4.053-14.72-5.76-21.547l-3.413-12.16h-20.693V501.76c0-104.32 0.64-190.293 1.493-190.933 0.853-0.854 36.48-1.28 79.36-1.067l78.08 0.64v189.867z" fill="#1389E9" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)