(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[81,137],{1140:function(e,t,a){"use strict";a.r(t);t.default=({condition:e,wrapper:t,children:a})=>e?t(a):a},1175:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var t=a(0),v=a.n(t),t=a(2),t=a.n(t),N=a(876),E=a(1140),w=a(242);const n=({children:e,bgColor:t,maxWidth:a,maxWidthContainer:n,setCurrColor:s,noPadding:o,centered:r,zIndex:i,cover:c,borderBottom:l,bgVideo:d,margin:m,marginLeft:g,width:p,position:u,borderTop:h,name:f,addClass:y,onWayPointEnter:C,slug:k})=>v.a.createElement("section",{className:Object(w.a)("section__container",o&&"noPadding",f&&"section__"+f,y),id:k,style:{maxWidth:n?n+"px":"initial",margin:m,borderTop:h,position:u,width:p,backgroundColor:t||"#ffffff",zIndex:i||"initial",marginLeft:g||"initial",height:c?"100vh":"auto",borderBottom:l||"none",clear:"both"}},v.a.createElement(N.a,{onEnter:()=>{s&&s(t),C&&C(u)},topOffset:"-50%"}),d&&v.a.createElement("div",{style:{width:"100%",margin:"0 auto"}},v.a.createElement("video",{className:"section__video",autoPlay:!0,muted:!0,loop:!0},v.a.createElement("source",{src:d}),"Sorry, this browser does not support the `video` element.")),v.a.createElement(E.default,{condition:d,wrapper:e=>v.a.createElement("div",{className:"section__videoWrapper"},e)},v.a.createElement("div",{className:"section__inner",style:{maxWidth:a?a+"px":"initial",margin:r?"0 auto":"initial"}},e)));n.propTypes={bgColor:t.a.string,children:t.a.any,maxWidth:t.a.number,margin:t.a.string,setCurrColor:t.a.func,noPadding:t.a.bool,centered:t.a.bool,maxWidthContainer:t.a.string,borderTop:t.a.string,position:t.a.string,width:t.a.string,cover:t.a.bool,zIndex:t.a.number,borderBottom:t.a.string,marginLeft:t.a.string,bgVideo:t.a.string,name:t.a.string,addClass:t.a.string},n.defaultProps={bgColor:void 0,maxWidth:null,maxWidthContainer:null,margin:null,noPadding:!1,centered:!0}},1271:function(e,t,a){"use strict";a.r(t);var k=a(0),v=a.n(k),N=a(1175),E=a(246),n=a(2),a=a.n(n),n=({className:e,onChange:t,isChecked:a,imgUrl:n,imgAlt:s,description:o,frequency:r})=>v.a.createElement("section",{className:e},v.a.createElement("div",{className:"timeFrame"},v.a.createElement("p",null,r),v.a.createElement("label",{className:"inputgroup"},v.a.createElement("input",{type:"checkbox",checked:a,onChange:t}),v.a.createElement("span",{className:"checkbox"}))),v.a.createElement("img",{src:n,alt:s}),v.a.createElement("p",{className:"description"},o)),w=(n.defaultProps={className:void 0},n.propTypes={className:a.a.string,onChange:a.a.func.isRequired,isChecked:a.a.bool.isRequired,imgUrl:a.a.string.isRequired,imgAlt:a.a.string.isRequired,description:a.a.string.isRequired,frequency:a.a.string.isRequired},n),n=({handleSubmission:e})=>{const[t,a]=Object(k.useState)(!0),[n,s]=Object(k.useState)(!0),[o,r]=Object(k.useState)(!0),[i,c]=Object(k.useState)(!0),[l,d]=Object(k.useState)(!0),[m,g]=Object(k.useState)(!0),[p,u]=Object(k.useState)(!0),[h,f]=Object(k.useState)(!0),[y,C]=Object(k.useState)(!0);return v.a.createElement(N.a,{bgColor:"#F4F4F4",noPadding:!0},v.a.createElement("div",{className:"newsletters__page__marketo"},v.a.createElement("div",{className:"newsletters__page__marketo__form__container"},v.a.createElement("div",{className:"options"},v.a.createElement(w,{onChange:()=>{a(e=>!e);var e=document.getElementsByName("formOptInFCCompassNewsletter")[0];e&&(t?e.checked=!1:e.checked=!0)},isChecked:t,imgUrl:"https://assets.fastcompany.com/image/upload/v1670274719/fc-newsletter-logo.svg",imgAlt:"Compass Newsletter",description:"Fast Company’s trending stories delivered to you daily",frequency:"Daily"}),v.a.createElement(w,{onChange:()=>{s(e=>!e);var e=document.getElementsByName("formOptInFCCoDesignNewsletter")[0];e&&(n?e.checked=!1:e.checked=!0)},isChecked:n,imgUrl:"https://assets.fastcompany.com/image/upload/v1670274604/fc-newsletter-logo_CoDesign.svg",imgAlt:"CoDesign Newsletter",description:"The latest innovations in design brought to you every weekday",frequency:"Weekdays"}),v.a.createElement(w,{className:"ai-decoded",onChange:()=>{f(e=>!e);var e=document.getElementsByName("formOptInFCAIDecdedNewsletter optInFCAIDecodedNewsletter")[0];0!==!e.length&&(i?e.checked=!1:e.checked=!0)},isChecked:h,imgUrl:"https://assets.fastcompany.com/image/upload/v1705678917/aiDecoded_Logo_horizontal_outlined.svg",imgAlt:"AI Decoded Newsletter",description:"Making sense of the rapidly evolving world of generative AI. ",frequency:"Weekly"}),v.a.createElement(w,{className:"work-smarter",onChange:()=>{u(e=>!e);var e=document.getElementsByName("formOptInFCWorkLifeNewsletter")[0];e&&(p?e.checked=!1:e.checked=!0)},isChecked:p,imgUrl:"https://assets.fastcompany.com/image/upload/v1691431471/newsletters/fc-worksmarter-logo2.svg",imgAlt:"Work Smarter Newsletter",description:"Career, leadership, and productivity advice, curated by our editors",frequency:"Weekly"}),v.a.createElement(w,{className:"modern-ceo",onChange:()=>{d(e=>!e);var e=document.getElementsByName("formOptInFCModernCEONewsletter")[0];e&&(l?e.checked=!1:e.checked=!0)},isChecked:l,imgUrl:"https://assets.fastcompany.com/image/upload/v1680285557/newsletters/modernCEOBlack.svg",imgAlt:"Modern CEO Newsletter",description:"A refreshed look at leadership from CEO and chief content officer Stephanie Mehta",frequency:"Weekly"}),v.a.createElement(w,{onChange:()=>{r(e=>!e);var e=document.getElementsByName("formOptInFCImpactNewsletter")[0];e&&(o?e.checked=!1:e.checked=!0)},isChecked:o,imgUrl:"https://assets.fastcompany.com/image/upload/v1670274672/fc-newsletter-logo_impact.svg",imgAlt:"Impact Newsletter",description:"A weekly look at the people and ideas making an impact in society and business",frequency:"Weekly"}),v.a.createElement(w,{onChange:()=>{c(e=>!e);var e=document.getElementsByName("formOptInFCPluggedInNewsletter")[0];0!==!e.length&&(i?e.checked=!1:e.checked=!0)},isChecked:i,imgUrl:"https://assets.fastcompany.com/image/upload/v1670274702/fc-newsletter-logo_pluggedin.svg",imgAlt:"Plugged In Newsletter",description:"Tech insights, news, and trends from global technology editor Harry McCracken",frequency:"Weekly"}),v.a.createElement(w,{className:"podcasts",onChange:()=>{C(e=>!e);var e=document.getElementsByName("formOptInFCPodcastVideoNewsletter")[0];e&&(y?e.checked=!1:e.checked=!0)},isChecked:y,imgUrl:"https://assets.fastcompany.com/image/upload/v1691431852/newsletters/fc-podcasts-logo.svg",imgAlt:"Podcasts Newsletter",description:"The most fascinating topics and trends in culture covered by our podcast team",frequency:"Monthly"}),v.a.createElement(w,{className:"top-ten",onChange:()=>{g(e=>!e);var e=document.getElementsByName("formOptInFCTop10Newsletter")[0];e&&(m?e.checked=!1:e.checked=!0)},isChecked:m,imgUrl:"https://assets.fastcompany.com/image/upload/v1680283662/newsletters/fcTopTen.svg",imgAlt:"FastCompany Top10 Newsletter logo",description:"Fast Company’s Top 10 trending stories of the week, delivered to you each Sunday",frequency:"Weekly"})),v.a.createElement(E.a,{assetId:1363,onSubmitHandler:e}))))};t.default=n;n.propTypes={handleSubmission:a.a.func.isRequired}}}]);
//# sourceMappingURL=MarketoNewsletterForm.6f8d429c1336dadd166d.js.map