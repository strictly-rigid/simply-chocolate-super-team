(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}})();src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js";$(document).ready(function(){$("a[href*='#']").on("click",function(r){var t=$(this);return $("html, body").stop().animate({scrollTop:$(t.attr("href")).offset().top},777),r.preventDefault(),!1})});(function(r){typeof r.matches!="function"&&(r.matches=r.msMatchesSelector||r.mozMatchesSelector||r.webkitMatchesSelector||function(t){for(var o=this,c=(o.document||o.ownerDocument).querySelectorAll(t),e=0;c[e]&&c[e]!==o;)++e;return Boolean(c[e])}),typeof r.closest!="function"&&(r.closest=function(t){for(var o=this;o&&o.nodeType===1;){if(o.matches(t))return o;o=o.parentNode}return null})})(window.Element.prototype);document.addEventListener("DOMContentLoaded",function(){var r=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),o=document.querySelectorAll(".js-modal-close");r.forEach(function(c){c.addEventListener("click",function(e){e.preventDefault();var n=this.getAttribute("data-modal"),l=document.querySelector('.modal[data-modal="'+n+'"]');l.classList.add("active"),t.classList.add("active")})}),o.forEach(function(c){c.addEventListener("click",function(e){var n=this.closest(".modal");n.classList.remove("active"),t.classList.remove("active")})}),document.body.addEventListener("keyup",function(c){var e=c.keyCode;e==27&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))},!1),t.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")})});(()=>{const r=document.querySelector(".subscribe"),t={openModalBtn:r.querySelector("[data-modal-open]"),closeModalBtn:r.querySelector("[data-modal-close]"),modal:r.querySelector("[data-modal]"),closeModalSubmit:r.querySelector("[data-modal-close-submit]")};t.openModalBtn.addEventListener("click",o),t.closeModalBtn.addEventListener("click",o),t.closeModalSubmit.addEventListener("click",o);function o(){t.modal.classList.toggle("is-hidden")}})();new Swiper(".swiper",{pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{1200:{slidesPerView:3},768:{slidesPerView:2},320:{slidesPerView:1}}});
