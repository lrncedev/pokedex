(function(){"use strict";var e={1765:function(e,t,n){var o=n(9963),s=n(6252);function i(e,t,n,o,i,a){const r=(0,s.up)("NavComponent"),l=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(r),(0,s.Wm)(l)],64)}const a={class:"nav-comp"},r=(0,s._)("h2",null,"About",-1);function l(e,t,n,o,i,l){return(0,s.wg)(),(0,s.iD)("div",a,[(0,s._)("h1",{class:"app-title",onClick:t[0]||(t[0]=(...e)=>l.gotoMain&&l.gotoMain(...e))},"PokeDex"),r])}n(7658);var c={name:"NavComponent",methods:{gotoMain(){this.$router.push("/")}}},u=n(3744);const p=(0,u.Z)(c,[["render",l]]);var d=p,h={name:"App",components:{NavComponent:d}};const m=(0,u.Z)(h,[["render",i]]);var g=m,k=n(2201),v=n.p+"img/pokeart.618764c5.png";const _={class:"hero"},f={class:"hero-text"},w=(0,s._)("div",{class:"welcome"},[(0,s._)("h2",null,"Welcome to"),(0,s._)("h1",null,"VueDex")],-1),x=(0,s._)("div",{class:"description"},[(0,s._)("p",null,[(0,s.Uk)("API consuming web app from "),(0,s._)("u",null,"PokeApi.co")]),(0,s._)("br"),(0,s._)("p",null," This web app allows you to checkout Pokémon and it's information through API calls. ")],-1),b={class:"cta-hidden"},y=(0,s._)("img",{src:v,alt:""},null,-1);function P(e,t,n,o,i,a){return(0,s.wg)(),(0,s.iD)("div",_,[(0,s._)("div",f,[w,x,(0,s._)("div",b,[(0,s._)("button",{onClick:t[0]||(t[0]=(...e)=>a.gotoPokeDex&&a.gotoPokeDex(...e))},"Let's Go")])]),y,(0,s._)("button",{class:"cta",onClick:t[1]||(t[1]=(...e)=>a.gotoPokeDex&&a.gotoPokeDex(...e))},"Let's Go")])}var L={name:"HeroView",methods:{gotoPokeDex(){this.$router.push("/pokedex")}}};const D=(0,u.Z)(L,[["render",P]]);var z=D,C=n(3577);const S={class:"grid"},O={class:"grid-item grid-1"},A={class:"search-content"},H=(0,s._)("button",{type:"submit",class:"btn"},"Search",-1),I={class:"grid-item grid-2"},T={class:"grid-header"},Z=(0,s._)("h2",null,"Pokemon",-1),j={class:"grid-results"},U=["onClick"],M={class:"pokemon-img"},V={class:"poke-img"},E=["src","alt"],N={class:"pokemon-info"},W={class:"pokemon-name"},q={class:"pokemon-types"},Y={class:"pokemon-stats"},$={class:"physical-stats"},B={class:"height"},G=(0,s._)("h3",null,"Height",-1),K={class:"weight"},F=(0,s._)("h3",null,"Weight",-1),R={class:"game-stats"},J={class:"hp"},Q=(0,s._)("h3",null,"HP",-1),X={class:"attack"},ee=(0,s._)("h3",null,"Attack",-1),te={class:"defense"},ne=(0,s._)("h3",null,"Defense",-1),oe={class:"paginate"},se=["disabled"],ie=["disabled"],ae={key:0,class:"modal"},re={class:"modal-header"},le={class:"modal-info"},ce={class:"sprites"},ue=["src"],pe=["src"],de=(0,s._)("div",null,"2",-1);function he(e,t,n,i,a,r){const l=(0,s.up)("LoaderComponent");return(0,s.wg)(),(0,s.iD)("div",S,[(0,s._)("div",O,[(0,s._)("div",A,[(0,s._)("form",{onSubmit:t[1]||(t[1]=(0,o.iM)(((...e)=>r.search&&r.search(...e)),["prevent"]))},[(0,s.wy)((0,s._)("input",{type:"text",name:"",id:"","onUpdate:modelValue":t[0]||(t[0]=e=>a.searchText=e),required:""},null,512),[[o.nr,a.searchText]]),H],32)])]),(0,s._)("div",I,[a.isLoading?((0,s.wg)(),(0,s.j4)(l,{key:0})):(0,s.kq)("",!0),(0,s._)("div",T,[Z,(0,s._)("h3",null,[(0,s.Uk)(" Result: "),(0,s._)("span",null,(0,C.zw)(a.pageSize),1),(0,s.Uk)(" of "),(0,s._)("span",null,(0,C.zw)(a.pokemonList.length),1)])]),(0,s._)("div",j,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.pagination,(e=>((0,s.wg)(),(0,s.iD)("div",{class:"pokemon",key:e.id,onClick:t=>r.passPokemon(e)},[(0,s._)("div",M,[(0,s._)("div",V,[(0,s._)("img",{src:e.sprites.front_default,alt:e.name},null,8,E)]),(0,s._)("div",N,[(0,s._)("h2",W,(0,C.zw)(e.name),1),(0,s._)("ul",q,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.types,((t,n)=>((0,s.wg)(),(0,s.iD)("li",{key:e.types[n]},(0,C.zw)(t.type.name),1)))),128))])])]),(0,s._)("div",Y,[(0,s._)("div",$,[(0,s._)("div",B,[G,(0,s._)("h4",null,(0,C.zw)(e.height)+"0 cm",1)]),(0,s._)("div",K,[F,(0,s._)("h4",null,(0,C.zw)(e.weight/10)+" kg",1)])]),(0,s._)("div",R,[(0,s._)("div",J,[Q,(0,s._)("h4",null,(0,C.zw)(e.stats[0].base_stat),1)]),(0,s._)("div",X,[ee,(0,s._)("h4",null,(0,C.zw)(e.stats[1].base_stat),1)]),(0,s._)("div",te,[ne,(0,s._)("h4",null,(0,C.zw)(e.stats[2].base_stat),1)])])])],8,U)))),128))]),(0,s._)("div",oe,[(0,s._)("button",{onClick:t[2]||(t[2]=(...e)=>r.prev&&r.prev(...e)),disabled:1==a.current},"Prev",8,se),(0,s.Uk)(" Page "+(0,C.zw)(a.current)+" of "+(0,C.zw)(r.getPageLength)+" ",1),(0,s._)("button",{onClick:t[3]||(t[3]=(...e)=>r.next&&r.next(...e)),disabled:a.current==r.getPageLength},"Next",8,ie)])]),a.modalShown?((0,s.wg)(),(0,s.iD)("div",ae,[(0,s._)("div",re,[(0,s._)("h2",null,(0,C.zw)(a.pokemonInfo.id),1),(0,s._)("button",{onClick:t[4]||(t[4]=(0,o.iM)(((...e)=>r.modalAction&&r.modalAction(...e)),["self"]))},"✖")]),(0,s._)("div",le,[(0,s._)("div",ce,[(0,s._)("img",{src:a.pokemonInfo.sprites.front_default,alt:"",class:"sprite"},null,8,ue),(0,s._)("img",{src:a.pokemonInfo.sprites.back_default,alt:"",class:"sprite"},null,8,pe)]),de])])):(0,s.kq)("",!0)])}const me={class:"lds-dual-ring"};function ge(e,t,n,o,i,a){return(0,s.wg)(),(0,s.iD)("div",me)}var ke={name:"LoaderComponent"};const ve=(0,u.Z)(ke,[["render",ge]]);var _e=ve,fe=n(594),we={name:"PokeDex",components:{LoaderComponent:_e},data(){return{pokemonList:[],current:1,pageSize:8,searchText:"",pokemonInfo:"",modalShown:!1,isLoading:!0}},methods:{prev(){this.current--},next(){this.current++},async getByUrl(e){await fe.Z.get(e).then((e=>this.pokemonList.push(e.data)))},async fetchPokemon(){const e="https://pokeapi.co/api/v2/pokemon";await fe.Z.get(e).then((e=>{const t=e.data.results;t.forEach((e=>{const t=e.url;this.getByUrl(t)}))}))},async search(){this.isLoading=!0,this.pokemonList=[];let e=this.searchText.toLowerCase();const t=`https://pokeapi.co/api/v2/pokemon/${e}`;await fe.Z.get(t).then((e=>{console.log(e.data),this.pokemonList=[],this.pokemonList.push(e.data)})),this.isLoading=!1,this.searchText=""},modalAction(){this.modalShown=!this.modalShown},passPokemon(e){this.modalAction(),console.log(e),this.pokemonInfo=e,console.log("pokemon info",this.pokemonInfo)}},computed:{indexStart(){return(this.current-1)*this.pageSize},indexEnd(){return this.indexStart+this.pageSize},pagination(){return this.pokemonList.slice(this.indexStart,this.indexEnd)},getPageLength(){return Math.ceil(this.pokemonList.length/this.pageSize)}},async mounted(){await this.fetchPokemon(),this.isLoading=!1}};const xe=(0,u.Z)(we,[["render",he]]);var be=xe;const ye=[{path:"/",redirect:{name:"HeroView"}},{path:"/",name:"HeroView",component:z},{path:"/pokedex",redirect:{name:"PokeDex"}},{path:"/pokedex",name:"PokeDex",component:be}],Pe=(0,k.p7)({history:(0,k.PO)(),routes:ye});var Le=Pe;(0,o.ri)(g).use(Le).mount("#app")}},t={};function n(o){var s=t[o];if(void 0!==s)return s.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,s,i){if(!o){var a=1/0;for(u=0;u<e.length;u++){o=e[u][0],s=e[u][1],i=e[u][2];for(var r=!0,l=0;l<o.length;l++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(r=!1,i<a&&(a=i));if(r){e.splice(u--,1);var c=s();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[o,s,i]}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/pokedex/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var s,i,a=o[0],r=o[1],l=o[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(s in r)n.o(r,s)&&(n.m[s]=r[s]);if(l)var u=l(n)}for(t&&t(o);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},o=self["webpackChunkpokedex_app"]=self["webpackChunkpokedex_app"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(1765)}));o=n.O(o)})();
//# sourceMappingURL=app.195fb38a.js.map