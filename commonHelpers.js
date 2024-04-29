import{a as p,i as m,S as f}from"./assets/vendor-09d7c26e.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(t){if(t.ep)return;t.ep=!0;const a=r(t);fetch(t.href,a)}})();const y="/goit-js-hw-12/assets/error-icon-e5a6cca4.svg",h="43558017-e13ccc47d2aef7f917b5afe22",c=15;let n=1,l="";async function b(o){n=1,l=o;const e=document.querySelector("#images");e.innerHTML="";const r=document.querySelector(".loader");r.style.display="block";const t=`https://pixabay.com/api/?${new URLSearchParams({key:h,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:c,page:n})}`;return(await p.get(t)).data}async function L(){if(!l)return;n+=1;const e=`https://pixabay.com/api/?${new URLSearchParams({key:h,q:l,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:c,page:n})}`,r=await p.get(e);let s=r.data.totalHits,t=Math.ceil(s/c);return n>t?(u.style.display="none",m.show({class:"search-404",message:"We're sorry, but you've reached the end of search results.",position:"topRight",iconUrl:y,backgroundColor:"#EF4040",transitionIn:"bounceInDown",transitionOut:"fadeOutUp",theme:"dark",closeOnClick:!0})):r.data}const w=document.querySelector("#images");function g(o){const e=o.hits.map(s=>`<li class="images-image" >
                        <div class="gallery">
         <a href="${s.largeImageURL}">
          <img class="img" src="${s.webformatURL}" alt="${s.tags}" title="${s.tags}"/>
         </a>
                          </div>
                    <ul class="image-details-container">
                        <li>
                            <h2 class="image-heading">Likes</h2>
                            <p class="image-description">${s.likes}</p>
                        </li>
                        <li>
                            <h2 class="image-heading">Views</h2>
                            <p class="image-description">${s.views}</p>
                        </li>
                        <li>
                            <h2 class="image-heading">Comments</h2>
                            <p class="image-description">${s.comments}</p>
                        </li>
                        <li>
                            <h2 class="image-heading">Downloads</h2>
                            <p class="image-description">${s.downloads}</p>
                        </li>
                    </ul>
            </li>`).join("");w.insertAdjacentHTML("beforeend",e);var r=new f(".gallery a",{captionsData:"title",captionDelay:350});r.refresh()}const d=document.querySelector(".form"),u=document.querySelector(".load-more-btn");d.addEventListener("submit",o=>{const e=document.querySelector(".loader");e.style.display="block",console.log(e),o.preventDefault();const r=o.currentTarget.elements.search.value.trim();if(!r){e.style.display="none";return}b(r).then(s=>{if(s.total===0){const t=document.querySelector("#images");t.innerHTML="",m.show({class:"search-404",message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",iconUrl:y,backgroundColor:"#EF4040",transitionIn:"bounceInDown",transitionOut:"fadeOutUp",theme:"dark",closeOnClick:!0}),e.style.display="none";return}g(s),e.style.display="none",u.style.display="block"}).catch(s=>{e.style.display="none",console.log(s.message)}),d.reset()});u.addEventListener("click",async()=>{const o=document.querySelector(".loader");o.style.display="block",await L().then(e=>{if(!e){o.style.display="none";return}g(e),o.style.display="none"}).catch(e=>{console.log(e),o.style.display="none"})});
//# sourceMappingURL=commonHelpers.js.map
