/*! (c) Andrea Giammarchi - MIT */
var html=function(t){"use strict";var e=/[&<>'"]/g,r=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g,n={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},u={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"'},c=function(t){return n[t]},a=function(t){return u[t]},o="".replace;return(t.freeze||t)({escape:function(t){return o.call(t,e,c)},unescape:function(t){return o.call(t,r,a)}})}(Object);try{module.exports=html}catch(t){}