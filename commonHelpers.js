import{a as p,i as y,S as f}from"./assets/vendor-09d7c26e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const m="/goit-js-hw-12/assets/error-icon-e5a6cca4.svg",h="43558017-e13ccc47d2aef7f917b5afe22",l=15;let i=1,d="";async function b(o){i=1,d=o;const t=document.querySelector("#images");t.innerHTML="";const a=document.querySelector(".loader");a.style.display="block",n.style.display="none";const e=`https://pixabay.com/api/?${new URLSearchParams({key:h,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:l,page:i})}`;return(await p.get(e)).data}async function w(){if(!d)return;i+=1;const t=`https://pixabay.com/api/?${new URLSearchParams({key:h,q:d,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:l,page:i})}`,a=await p.get(t);let s=a.data.totalHits,e=Math.ceil(s/l);return i>e?(n.style.display="none",y.show({class:"search-404",message:"We're sorry, but you've reached the end of search results.",position:"topRight",iconUrl:m,backgroundColor:"#EF4040",transitionIn:"bounceInDown",transitionOut:"fadeOutUp",theme:"dark",closeOnClick:!0})):a.data}const L=document.querySelector("#images");function g(o){const t=o.hits.map(s=>`<li class="images-image" >
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
            </li>`).join("");L.insertAdjacentHTML("beforeend",t);var a=new f(".gallery a",{captionsData:"title",captionDelay:350,fadeSpeed:220});a.refresh()}const u=document.querySelector(".form"),n=document.querySelector(".load-more-btn");u.addEventListener("submit",o=>{o.preventDefault();const t=document.querySelector(".loader");t.style.display="block";const a=o.currentTarget.elements.search.value.trim();if(!a){t.style.display="none";return}b(a).then(s=>{if(s.total===0){const e=document.querySelector("#images");e.innerHTML="",y.show({class:"search-404",message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",iconUrl:m,backgroundColor:"#EF4040",transitionIn:"bounceInDown",transitionOut:"fadeOutUp",theme:"dark",closeOnClick:!0}),t.style.display="none",n.style.display="none";return}g(s),t.style.display="none",n.style.display="block"}).catch(s=>{t.style.display="none",console.log(s.message)}),u.reset()});n.addEventListener("click",async()=>{const o=document.querySelector(".loader");o.style.display="block",n.style.display="none",await w().then(t=>{if(!t){o.style.display="none";return}const e=document.querySelector(".images-image").getBoundingClientRect().height;g(t),window.scrollBy(0,e*2),o.style.display="none",n.style.display="block"}).catch(t=>{console.log(t),o.style.display="none"})});
//# sourceMappingURL=commonHelpers.js.map
