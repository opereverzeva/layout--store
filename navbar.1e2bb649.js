parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"IrAD":[function(require,module,exports) {
function n(){$(".navbar__box_burger.navbar__box_hidden").removeClass("navbar__box_hidden"),$(".navbar__open-menu.navbar__open-menu_active").removeClass("navbar__open-menu_active")}$(".navbar__burger").click(function(){$(".navbar__box_burger").addClass("navbar__box_hidden"),$(".navbar__open-menu").addClass("navbar__open-menu_active")}),$(".burger-menu__close").click(function(a){a.stopPropagation(),n()}),$(".burger-menu__list").on("click",function(a){a.stopPropagation(),n()});
},{}]},{},["IrAD"], null)
//# sourceMappingURL=navbar.1e2bb649.js.map