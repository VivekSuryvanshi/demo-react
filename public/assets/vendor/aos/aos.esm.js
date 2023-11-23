import throttle from"lodash.throttle";import debounce from"lodash.debounce";var callback=function(){};function containsAOSNode(e){var t=void 0,o=void 0;for(t=0;t<e.length;t+=1){if((o=e[t]).dataset&&o.dataset.aos)return!0;if(o.children&&containsAOSNode(o.children))return!0}return!1}function check(e){e&&e.forEach((function(e){var t=Array.prototype.slice.call(e.addedNodes),o=Array.prototype.slice.call(e.removedNodes);if(containsAOSNode(t.concat(o)))return callback()}))}function getMutationObserver(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function isSupported(){return!!getMutationObserver()}function ready(e,t){var o=window.document,n=new(getMutationObserver())(check);callback=t,n.observe(o.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}var observer={isSupported:isSupported,ready:ready},classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},createClass=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},fullNameRe=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,prefixRe=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,fullNameMobileRe=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,prefixMobileRe=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function ua(){return navigator.userAgent||navigator.vendor||window.opera||""}var Detector=function(){function e(){classCallCheck(this,e)}return createClass(e,[{key:"phone",value:function(){var e=ua();return!(!fullNameRe.test(e)&&!prefixRe.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=ua();return!(!fullNameMobileRe.test(e)&&!prefixMobileRe.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),e}(),detect=new Detector,addClasses=function(e,t){return t&&t.forEach((function(t){return e.classList.add(t)}))},removeClasses=function(e,t){return t&&t.forEach((function(t){return e.classList.remove(t)}))},fireEvent=function(e,t){var o=void 0;return detect.ie11()?(o=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,{detail:t}):o=new CustomEvent(e,{detail:t}),document.dispatchEvent(o)},applyClasses=function(e,t){var o=e.options,n=e.position,i=e.node,a=(e.data,function(){e.animated&&(removeClasses(i,o.animatedClassNames),fireEvent("aos:out",i),e.options.id&&fireEvent("aos:in:"+e.options.id,i),e.animated=!1)});o.mirror&&t>=n.out&&!o.once?a():t>=n.in?e.animated||(addClasses(i,o.animatedClassNames),fireEvent("aos:in",i),e.options.id&&fireEvent("aos:in:"+e.options.id,i),e.animated=!0):e.animated&&!o.once&&a()},handleScroll=function(e){return e.forEach((function(e,t){return applyClasses(e,window.pageYOffset)}))},offset=function(e){for(var t=0,o=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),o+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:o,left:t}},getInlineOption=function(e,t,o){var n=e.getAttribute("data-aos-"+t);if(void 0!==n){if("true"===n)return!0;if("false"===n)return!1}return n||o},getPositionIn=function(e,t,o){var n=window.innerHeight,i=getInlineOption(e,"anchor"),a=getInlineOption(e,"anchor-placement"),r=Number(getInlineOption(e,"offset",a?0:t)),s=a||o,c=e;i&&document.querySelectorAll(i)&&(c=document.querySelectorAll(i)[0]);var l=offset(c).top-n;switch(s){case"top-bottom":break;case"center-bottom":l+=c.offsetHeight/2;break;case"bottom-bottom":l+=c.offsetHeight;break;case"top-center":l+=n/2;break;case"center-center":l+=n/2+c.offsetHeight/2;break;case"bottom-center":l+=n/2+c.offsetHeight;break;case"top-top":l+=n;break;case"bottom-top":l+=n+c.offsetHeight;break;case"center-top":l+=n+c.offsetHeight/2;break}return l+r},getPositionOut=function(e,t){window.innerHeight;var o=getInlineOption(e,"anchor"),n=getInlineOption(e,"offset",t),i=e;return o&&document.querySelectorAll(o)&&(i=document.querySelectorAll(o)[0]),offset(i).top+i.offsetHeight-n},prepare=function(e,t){return e.forEach((function(e,o){var n=getInlineOption(e.node,"mirror",t.mirror),i=getInlineOption(e.node,"once",t.once),a=getInlineOption(e.node,"id"),r=t.useClassNames&&e.node.getAttribute("data-aos"),s=[t.animatedClassName].concat(r?r.split(" "):[]).filter((function(e){return"string"==typeof e}));t.initClassName&&e.node.classList.add(t.initClassName),e.position={in:getPositionIn(e.node,t.offset,t.anchorPlacement),out:n&&getPositionOut(e.node,t.offset)},e.options={once:i,mirror:n,animatedClassNames:s,id:a}})),e},elements=function(){var e=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(e,(function(e){return{node:e}}))},$aosElements=[],initialized=!1,options={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},isBrowserNotSupported=function(){return document.all&&!window.atob},initializeScroll=function(){return $aosElements=prepare($aosElements,options),handleScroll($aosElements),window.addEventListener("scroll",throttle((function(){handleScroll($aosElements,options.once)}),options.throttleDelay)),$aosElements},refresh=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&(initialized=!0),initialized&&initializeScroll()},refreshHard=function(){if($aosElements=elements(),isDisabled(options.disable)||isBrowserNotSupported())return disable();refresh()},disable=function(){$aosElements.forEach((function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay"),options.initClassName&&e.node.classList.remove(options.initClassName),options.animatedClassName&&e.node.classList.remove(options.animatedClassName)}))},isDisabled=function(e){return!0===e||"mobile"===e&&detect.mobile()||"phone"===e&&detect.phone()||"tablet"===e&&detect.tablet()||"function"==typeof e&&!0===e()},init=function(e){return options=_extends(options,e),$aosElements=elements(),options.disableMutationObserver||observer.isSupported()||(options.disableMutationObserver=!0),options.disableMutationObserver||observer.ready("[data-aos]",refreshHard),isDisabled(options.disable)||isBrowserNotSupported()?disable():(document.querySelector("body").setAttribute("data-aos-easing",options.easing),document.querySelector("body").setAttribute("data-aos-duration",options.duration),document.querySelector("body").setAttribute("data-aos-delay",options.delay),-1===["DOMContentLoaded","load"].indexOf(options.startEvent)?document.addEventListener(options.startEvent,(function(){refresh(!0)})):window.addEventListener("load",(function(){refresh(!0)})),"DOMContentLoaded"===options.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1&&refresh(!0),window.addEventListener("resize",debounce(refresh,options.debounceDelay,!0)),window.addEventListener("orientationchange",debounce(refresh,options.debounceDelay,!0)),$aosElements)},aos={init:init,refresh:refresh,refreshHard:refreshHard};export default aos;