import{a as f,S as p,i as s}from"./assets/vendor-EBklf52_.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m="52822111-b1008b71650d3ce195bc41da7",g="https://pixabay.com/api/";function d(i){return f(g,{params:{key:m,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>{if(r.data.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");return r.data}).catch(r=>{throw r})}const c=document.querySelector(".gallery"),u=document.querySelector(".loader");document.querySelector(".spinner");document.querySelector(".spinner-btn");let y=new p(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function h(i=[]){c.innerHTML=i.map(({webformatURL:r,tags:o,largeImageURL:n,likes:e,views:t,comments:a,downloads:l})=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${n}">
                <img  class="gallery-image" src="${r}" alt="${o}" loading="lazy" 
                title="Title: ${o.split(",")[0].trim()}  |  
                Likes: ${e.toLocaleString()}  |  
                View: ${t.toLocaleString()}  |  
                Comments: ${a.toLocaleString()}  |  
                Downloads: ${l.toLocaleString()}"/>
            </a>
            <ul class="info-container">
                <li class="info-box">
                    <p class="info-title">Likes</p>
                    <p class="info-value">${e.toLocaleString()}</p>
                </li>
                <li class="info-box">
                    <p class="info-title">View</p>
                    <p class="info-value">${t.toLocaleString()}</p>
                </li>
                 <li class="info-box">
                    <p class="info-title">Comments</p>
                    <p class="info-value">${a.toLocaleString()}</p>
                </li>
                <li class="info-box">
                    <p class="info-title">Downloads</p>
                    <p class="info-value">${l.toLocaleString()}</p>
                </li>
            </ul>
        </li>
    `).join(""),y.refresh()}function L(){c.innerHTML=""}function S(){u.hidden=!1}function b(){u.hidden=!0}const q=document.querySelector(".form");q.addEventListener("submit",i=>{i.preventDefault();const r=i.target.elements.query.value.trim();if(r===""){s.warning({message:"Please enter a search query!",position:"topCenter",timeout:3e3,backgroundColor:"#FFA000",messageColor:"white"});return}L(),S(),d(r).then(o=>{if(!o.hits.length)throw new Error("Sorry, there are no images matching your search query. Please try again!");h(o.hits)}).catch(o=>{s.error({message:o.message,position:"topCenter",timeout:3e3,backgroundColor:"#EF4040",messageColor:"white",close:!1})}).finally(()=>{i.target.elements.query.value="",b()})});
//# sourceMappingURL=index.js.map
