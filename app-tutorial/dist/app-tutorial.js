!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("styled-components")):"function"==typeof define&&define.amd?define("app-tutorial",["react","styled-components"],t):"object"==typeof exports?exports["app-tutorial"]=t(require("react"),require("styled-components")):e["app-tutorial"]=t(e.React,e["styled-components"])}("undefined"!=typeof self?self:this,((e,t)=>(()=>{"use strict";var r={12:t=>{t.exports=e},104:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});var o=r(12),n={};const a=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];var u=[],l=[],i=function(e){var t=(0,o.createContext)(n);u.push(t),l.push(function(e){return function(){return(0,o.useContext)(e)}}(t))};r.length?r.forEach((function(e){return i(e.name)})):i(e.name);return[function(t){for(var n=t.children,a=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(t,["children"]),l=e(a),i=n,d=0;d<u.length;d+=1){var c=u[d],s=r[d]||function(e){return e};i=(0,o.createElement)(c.Provider,{value:s(l)},i)}return i}].concat(l)}},123:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(974);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o(n).default}})},134:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(146);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o(n).default}})},146:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=o(r(12)),a=r(529);t.default=()=>n.default.createElement(a.StyledOverlay,null)},167:(e,t)=>{var r;Object.defineProperty(t,"__esModule",{value:!0}),t.TutorialStatus=void 0,(r=t.TutorialStatus||(t.TutorialStatus={})).PLAYING="PLAYING",r.DONE="DONE";const o={storeTutorialStatus:e=>!!window.localStorage&&window.localStorage.setItem("tutorialStatus",e),getTutorialStatus:()=>!!window.localStorage&&window.localStorage.getItem("tutorialStatus"),clearTutorialStatus:()=>!!window.localStorage&&window.localStorage.removeItem("tutorialStatus")};t.default=o},206:function(e,t,r){var o=this&&this.__createBinding||(Object.create?function(e,t,r,o){void 0===o&&(o=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,o,n)}:function(e,t,r,o){void 0===o&&(o=r),e[o]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&o(t,e,r);return n(t,e),t},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useTutorialContext=t.TutorialProvider=void 0;const l=r(12),i=u(r(104)),d=a(r(167)),[c,s]=(0,i.default)((function(){const[e,t]=(0,l.useState)(null),[r,o]=(0,l.useState)(!1),n=()=>{o(!1),d.default.storeTutorialStatus(d.TutorialStatus.DONE),t(null)};return{nextStep:(e=!1)=>{e&&n(),t((e=>e||0===e?e+1:null))},activeStep:e,setActiveStep:t,isTutorialStarted:r,setIsTutorialStarted:o,startTutorial:(e=0)=>{o(!0),d.default.storeTutorialStatus(d.TutorialStatus.PLAYING),t(e)},endTutorial:n,resetTutorial:()=>{o(!1),d.default.clearTutorialStatus(),t(null)}}}));t.TutorialProvider=c,t.useTutorialContext=s},210:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(422);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o(n).default}})},230:e=>{e.exports=t},422:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=o(r(12)),a=r(230),u=o(r(865)),l=r(206);t.default=function({children:e,theme:t=u.default}){return n.default.createElement(a.ThemeProvider,{theme:t},n.default.createElement(l.TutorialProvider,null,e))}},451:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=r(12);t.default=function(e,t,r){const[n,a]=(0,o.useState)({top:0,left:0}),[u,l]=(0,o.useState)();return(0,o.useLayoutEffect)((()=>{function r(){const r=document.documentElement.clientWidth||0;if((null==e?void 0:e.current)&&(null==t?void 0:t.current)){const{current:o}=e,{current:n}=t,u=o.getBoundingClientRect(),i=n.getBoundingClientRect(),d=window.getComputedStyle(n),c=Number.parseInt(d.marginTop),s=Number.parseInt(d.marginRight),f=Number.parseInt(d.marginLeft),p=i.width+f+s;r<p||u.left<p&&r-u.left<p?(l(r-(f+s)),a({top:u.height+c,left:-u.left})):a({top:u.height+c,left:r-u.left>=p?0:-i.width-s})}}return r(),window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}}),[e,t,r]),{position:n,computedWidth:u}}},529:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.StyledOverlay=t.Button=t.ButtonsWrapper=t.StyledTutorialTooltip=t.ChildElementWrapper=t.Wrapper=void 0;const n=o(r(230));t.Wrapper=n.default.div`
  position: relative;
  z-index: ${({active:e})=>e?2147483647:"auto"}; //Max z-index value by default
`,t.ChildElementWrapper=n.default.div`
  background-color: ${({theme:e,active:t})=>t?e.colors.common.white:"inherit"};
  padding: 10px;
  border-radius: 8px;
`,t.StyledTutorialTooltip=n.default.div`
  display: ${({active:e})=>e?"block":"none"};
  position: absolute;
  top: ${({top:e})=>e+"px"};
  left: ${({left:e})=>e+"px"};
  min-width: 300px;
  max-width: 500px;
  box-sizing: border-box;
  width: ${({width:e})=>e?e+"px":"auto"};
  background-color: ${({theme:e})=>e.colors.primary.main};
  color: ${({theme:e})=>e.colors.common.white};
  border-radius: 16px;
  color: white;
  padding: 16px;
  margin-top: 8px;

  * {
    color: ${({theme:e})=>e.colors.common.white};
  }

  h1 {
    margin: 0px;
    text-align: left;
  }

  p {
    font-size: 16px;
  }
`,t.ButtonsWrapper=n.default.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`,t.Button=n.default.button`
  padding: 8px 32px;
  border-radius: 32px;
  border: ${({theme:e,active:t})=>`1px ${t?e.colors.common.white:e.colors.disabled.main} solid`};
  color: ${({theme:e,active:t})=>t?e.colors.common.white:e.colors.disabled.main};
  font-size: 18px;
  background-color: ${({theme:e,active:t})=>t?e.colors.primary.main:e.colors.primary.dark};
  cursor: ${({active:e})=>e?"pointer":"auto"};
  transition: ${({active:e})=>e?"all 0.3s":"none"};

  &:hover {
    background-color: ${({theme:e,active:t})=>t?e.colors.primary.light:e.colors.primary.dark};
  }
`,t.StyledOverlay=n.default.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2147483646; // Almost max z-index value by default
  background-color: rgba(0, 0, 0, 0.4);
`},862:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.TutorialStatus=t.AppTutorialProvider=t.useTutorialContext=t.TutorialTooltip=t.theme=void 0;var n=r(865);Object.defineProperty(t,"theme",{enumerable:!0,get:function(){return o(n).default}});var a=r(123);Object.defineProperty(t,"TutorialTooltip",{enumerable:!0,get:function(){return o(a).default}});var u=r(206);Object.defineProperty(t,"useTutorialContext",{enumerable:!0,get:function(){return u.useTutorialContext}});var l=r(210);Object.defineProperty(t,"AppTutorialProvider",{enumerable:!0,get:function(){return o(l).default}});var i=r(167);Object.defineProperty(t,"TutorialStatus",{enumerable:!0,get:function(){return i.TutorialStatus}})},865:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default={colors:{primary:{main:"#008080",light:"#009999",dark:"#006666"},common:{black:"#000000",white:"#ffffff"},disabled:{main:"#9e9e9e"}}}},974:function(e,t,r){var o=this&&this.__createBinding||(Object.create?function(e,t,r,o){void 0===o&&(o=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,o,n)}:function(e,t,r,o){void 0===o&&(o=r),e[o]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&o(t,e,r);return n(t,e),t},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=a(r(12)),i=r(529),d=r(206),c=u(r(134)),s=a(r(167)),f=u(r(451));t.default=function({children:e,step:t,content:r,className:o,skipTutorialBtnText:n="Skip tutorial",nextBtnText:a="Next",autostart:u=!1,lastStep:p=!1,nextButtonDisabled:m=!1,hideButtons:v=!1,hideNextButton:h=!1,hideSkipTutorialButton:b=!1}){const{nextStep:_,setActiveStep:y,activeStep:g,setIsTutorialStarted:x,isTutorialStarted:S,endTutorial:T}=(0,d.useTutorialContext)(),O=(0,l.useRef)(null),P=(0,l.useRef)(null),{position:w,computedWidth:j}=(0,f.default)(O,P,g);(0,l.useEffect)((()=>{const e=s.default.getTutorialStatus();u&&!S&&e!==s.TutorialStatus.DONE&&e!==s.TutorialStatus.PLAYING&&(y(t),x(!0),s.default.storeTutorialStatus(s.TutorialStatus.PLAYING))}),[x,u,S,t,y]);const M=l.default.useMemo((()=>g===t&&S),[g,t,S]);return l.default.createElement(l.default.Fragment,null,M&&l.default.createElement(c.default,null),l.default.createElement(i.Wrapper,{className:o,active:M},l.default.createElement(i.ChildElementWrapper,{ref:O,className:"child-element-wrapper",active:M},e),l.default.createElement(i.StyledTutorialTooltip,{ref:P,className:"tutorial-tooltip",active:M,top:w.top,left:w.left,width:j},(null==r?void 0:r.title)&&l.default.createElement("h1",{className:"title"},r.title),(null==r?void 0:r.text)&&l.default.createElement("p",{className:"text"},r.text),null==r?void 0:r.component,!v&&l.default.createElement(l.default.Fragment,null,l.default.createElement(i.ButtonsWrapper,{className:"buttons-wrapper"},!b&&l.default.createElement(i.Button,{className:"skip-tutorial-btn",active:!0,onClick:T},n),!h&&l.default.createElement(i.Button,{className:"next-btn",active:!m,onClick:_.bind(null,p),disabled:m},a))))))}}},o={};function n(e){var t=o[e];if(void 0!==t)return t.exports;var a=o[e]={exports:{}};return r[e].call(a.exports,a,a.exports,n),a.exports}return n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(862)})()));