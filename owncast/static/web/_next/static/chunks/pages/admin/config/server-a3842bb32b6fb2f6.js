(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7722],{2976:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/config/server",function(){return a(99561)}])},86088:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var n=a(85893),r=a(67294),s=a(38376),i=a(70329),l=a(65326),o=a(53068),c=a(84443);let d=e=>{let{apiPath:t,checked:a,reversed:d=!1,configPath:u="",disabled:h=!1,fieldName:m,label:f,tip:p,useSubmit:y,onChange:x}=e,[g,v]=(0,r.useState)(null),j=null,{setFieldInConfigState:b}=(0,r.useContext)(c.a)||{},k=()=>{v(null),clearTimeout(j),j=null},w=async e=>{if(y){v((0,i.kg)(i.Jk));let a=d?!e:e;await (0,o.Si)({apiPath:t,data:{value:a},onSuccess:()=>{b({fieldName:m,value:a,path:u}),v((0,i.kg)(i.zv))},onError:e=>{v((0,i.kg)(i.Un,"There was an error: ".concat(e)))}}),j=setTimeout(k,o.sI)}x&&x(e)},N=null!==g&&g.type===i.Jk;return(0,n.jsxs)("div",{className:"formfield-container toggleswitch-container",children:[f&&(0,n.jsx)("div",{className:"label-side",children:(0,n.jsx)("span",{className:"formfield-label",children:f})}),(0,n.jsxs)("div",{className:"input-side",children:[(0,n.jsxs)("div",{className:"input-group",children:[(0,n.jsx)(s.Z,{className:"switch field-".concat(m),loading:N,onChange:w,defaultChecked:a,checked:a,checkedChildren:"ON",unCheckedChildren:"OFF",disabled:h}),(0,n.jsx)(l.E,{status:g})]}),(0,n.jsx)("p",{className:"field-tip",children:p})]})]})};d.defaultProps={apiPath:"",checked:!1,reversed:!1,configPath:"",disabled:!1,label:"",tip:"",useSubmit:!1,onChange:null}},99561:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return H}});var n=a(85893),r=a(67294),s=a(32839),i=a(47271),l=a(90163),o=a(43795),c=a(90622),d=a(45257),u=a(96652),h=a(46994),m=a(43796),f=a(5152),p=a.n(f),y=a(84443),x=a(6925),g=a(53068);let{Paragraph:v}=i.default,j=p()(()=>Promise.all([a.e(7298),a.e(7618)]).then(a.t.bind(a,7618,23)),{loadableGenerated:{webpack:()=>[7618]},ssr:!1}),b=p()(()=>Promise.all([a.e(7298),a.e(9688)]).then(a.t.bind(a,89688,23)),{loadableGenerated:{webpack:()=>[89688]},ssr:!1}),k=p()(()=>Promise.all([a.e(7298),a.e(6879)]).then(a.t.bind(a,76879,23)),{loadableGenerated:{webpack:()=>[76879]},ssr:!1}),w=async(e,t)=>{try{await (0,x.rQ)(x.um,{method:"POST",auth:!0,data:{value:e}})}catch(e){console.error(e),t(e.message)}},N=()=>{let e="",t=!1,a=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$^&*]).{8,192}$/,n="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$^&*";for(;!t;){let r=Array.apply(20,Array(30)).map(()=>n.charAt(Math.floor(Math.random()*n.length))).join("");a.test(r)&&(t=!0,e=r)}return e},C=e=>{let{setShowAddKeyForm:t,setFieldInConfigState:a,streamKeys:s,setError:i}=e,[d,u]=(0,r.useState)(!0),[h]=l.default.useForm(),{Item:m}=l.default,f=[];(0,r.useEffect)(()=>{g.RQ.forEach(e=>{f.push(e)})},[]);let p=N();return(0,n.jsxs)(l.default,{layout:"horizontal",autoComplete:"off",onFinish:e=>{let n=[...s,e];a({fieldName:"streamKeys",value:n}),w(n,i),t(!1)},form:h,style:{display:"flex",flexDirection:"row"},initialValues:{key:p,comment:"My new key"},children:[(0,n.jsx)(m,{style:{width:"60%",marginRight:"5px"},label:"Key",name:"key",tooltip:(0,n.jsx)("p",{children:"The key you provide your broadcasting software. Please note that the key must be a minimum of eight characters and must include at least one uppercase letter, at least one lowercase letter, at least one special character, and at least one number."}),rules:g.RQ,children:(0,n.jsx)(o.default,{placeholder:"your key",onChange:e=>{let t=e.target.value;g.Uq.test(t)?u(!0):u(!1)}})}),(0,n.jsx)(m,{style:{width:"60%",marginRight:"5px"},label:"Comment",name:"comment",tooltip:"For remembering why you added this key",children:(0,n.jsx)(o.default,{placeholder:"My OBS Key"})}),(0,n.jsx)(c.Z,{type:"primary",htmlType:"submit",disabled:!d,children:"Add"})]})},S=e=>{let{setShowAddKeyForm:t}=e;return(0,n.jsx)(c.Z,{type:"default",onClick:()=>t(!0),children:(0,n.jsx)(k,{})})},P=e=>{navigator.clipboard.writeText(e).then(()=>d.ZP.success("Copied to clipboard")).catch(()=>d.ZP.error("Failed to copy to clipboard"))};var E=()=>{let{serverConfig:e,setFieldInConfigState:t}=(0,r.useContext)(y.a)||{},{streamKeys:a}=e,[s,i]=(0,r.useState)(!1),[l,o]=(0,r.useState)({}),[d,f]=(0,r.useState)(null),p=e=>{let n=a.filter(t=>t!==e);t({fieldName:"streamKeys",value:n}),w(n,f)},x=e=>{o({...l,[e]:!l[e]})},g=[{title:"Key",dataIndex:"key",key:"key",render:e=>(0,n.jsxs)(u.Z,{direction:"horizontal",children:[(0,n.jsx)(v,{copyable:{text:l[e]?e:"**********",onCopy:()=>P(e)},children:l[e]?e:"**********"}),(0,n.jsx)(c.Z,{type:"link",style:{top:"-7px"},icon:(0,n.jsx)(b,{}),onClick:()=>x(e)})]})},{title:"Comment",dataIndex:"comment",key:"comment"},{title:"",key:"delete",render:e=>(0,n.jsx)(c.Z,{disabled:1===a.length,onClick:()=>p(e),icon:(0,n.jsx)(j,{})})}];return(0,n.jsxs)("div",{children:[(0,n.jsx)(v,{children:"A streaming key is used with your broadcasting software to authenticate itself to Owncast. Most people will only need one. However, if you share a server with others or you want different keys for different broadcasting sources you can add more here."}),(0,n.jsx)(v,{children:"These keys are unrelated to the admin password and will not grant you access to make changes to Owncast's configuration."}),(0,n.jsxs)(v,{children:["Read more about broadcasting at"," ",(0,n.jsx)("a",{href:"https://owncast.online/docs/broadcasting/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"the documentation"}),"."]}),(0,n.jsxs)(u.Z,{direction:"vertical",style:{width:"70%"},children:[d&&(0,n.jsx)(h.Z,{type:"error",message:"Saving Keys Error",description:d}),0===a.length&&(0,n.jsx)(h.Z,{message:"No stream keys!",description:"You will not be able to stream until you create at least one stream key and add it to your broadcasting software.",type:"error"}),(0,n.jsx)(m.Z,{rowKey:"key",columns:g,dataSource:a,pagination:!1,footer:()=>s?(0,n.jsx)(C,{setShowAddKeyForm:i,streamKeys:a,setFieldInConfigState:t,setError:f}):(0,n.jsx)(S,{setShowAddKeyForm:i})}),(0,n.jsx)("br",{})]})]})},T=a(78533),Z=a(62376),O=a(55926),K=a(65992),z=a(79870),A=a(70329),_=a(65326);let F=()=>{let{setMessage:e}=(0,r.useContext)(K.k),[t,a]=(0,r.useState)(null),s=()=>{a(null),clearTimeout(null)},l=async()=>{a((0,A.kg)(A.Jk));try{await (0,x.rQ)(x.UJ),e(""),a((0,A.kg)(A.zv)),setTimeout(s,g.sI)}catch(e){a((0,A.kg)(A.Un,"There was an error: ".concat(e))),setTimeout(s,g.sI)}};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.default.Title,{level:3,className:"section-title",children:"Reset Directory"}),(0,n.jsx)("p",{className:"description",children:'If you are experiencing issues with your listing on the Owncast Directory and were asked to "reset" your connection to the service, you can do that here. The next time you go live it will try and re-register your server with the directory from scratch.'}),(0,n.jsx)(z.Z,{placement:"topLeft",title:"Are you sure you want to reset your connection to the Owncast directory?",onConfirm:l,okText:"Yes",cancelText:"No",children:(0,n.jsx)(c.Z,{type:"primary",children:"Reset Directory Connection"})}),(0,n.jsx)("p",{children:(0,n.jsx)(_.E,{status:t})})]})},{Panel:I}=T.default;function $(){let[e,t]=(0,r.useState)(null),a=(0,r.useContext)(y.a),{setMessage:s}=(0,r.useContext)(K.k),{serverConfig:l}=a||{},{adminPassword:o,ffmpegPath:c,rtmpServerPort:d,webServerPort:u,yp:h,socketHostOverride:m,videoServingEndpoint:f}=l;if((0,r.useEffect)(()=>{t({adminPassword:o,ffmpegPath:c,rtmpServerPort:d,webServerPort:u,socketHostOverride:m,videoServingEndpoint:f})},[l]),!e)return null;let p=a=>{let{fieldName:n,value:r}=a;t({...e,[n]:r})},x=()=>{s("Updating server settings requires a restart of your Owncast server.")};return(0,n.jsxs)("div",{className:"edit-server-details-container",children:[(0,n.jsx)("div",{className:"field-container field-streamkey-container",children:(0,n.jsx)("div",{className:"left-side",children:(0,n.jsx)(O.$7,{fieldName:"adminPassword",...g.tQ,value:e.adminPassword,initialValue:o,type:Z.A8,onChange:p,onSubmit:()=>{s("Changing your password will log you out of the admin. You may want to refresh the page to force yourself to log back in if not prompted.")}})})}),(0,n.jsx)(O.$7,{fieldName:"ffmpegPath",...g.KB,value:e.ffmpegPath,initialValue:c,onChange:p,onSubmit:()=>{a.online&&s("The updated ffmpeg path will be used when starting your next live stream.")}}),(0,n.jsx)(O.$7,{fieldName:"webServerPort",...g.rE,value:e.webServerPort,initialValue:u,type:Z.mG,onChange:p,onSubmit:x}),(0,n.jsx)(O.$7,{fieldName:"rtmpServerPort",...g.lT,value:e.rtmpServerPort,initialValue:d,type:Z.mG,onChange:p,onSubmit:x}),(0,n.jsx)(T.default,{className:"advanced-settings",children:(0,n.jsxs)(I,{header:"Advanced Settings",children:[(0,n.jsx)(i.default.Paragraph,{children:"If you have a CDN in front of your entire Owncast instance, specify your origin server here for the websocket to connect to. Most people will never need to set this."}),(0,n.jsx)(O.$7,{fieldName:"socketHostOverride",...g.ME,value:e.socketHostOverride,initialValue:m||"",type:Z.xA,onChange:p}),(0,n.jsx)(O.$7,{fieldName:"videoServingEndpoint",...g.jU,value:e.videoServingEndpoint,initialValue:f||"",type:Z.xA,onChange:p}),h.enabled&&(0,n.jsx)(F,{})]},"1")})]})}function U(){return(0,n.jsxs)("div",{className:"config-server-details-form",children:[(0,n.jsx)("p",{className:"description",children:"You should change your admin password from the default and keep it safe. For most people it's likely the other settings will not need to be changed."}),(0,n.jsx)("div",{className:"form-module config-server-details-container",children:(0,n.jsx)($,{})})]})}var D=a(93967),M=a.n(D),V=a(94956),R=a(86088);let{Panel:G}=T.default;function J(){let[e,t]=(0,r.useState)(null),[a,s]=(0,r.useState)(null),[i,l]=(0,r.useState)(!1),{serverConfig:o,setFieldInConfigState:d}=(0,r.useContext)(y.a)||{},{setMessage:u}=(0,r.useContext)(K.k),{s3:h}=o,{accessKey:m="",acl:f="",bucket:p="",enabled:x=!1,endpoint:v="",region:j="",secret:b="",pathPrefix:k="",forcePathStyle:w=!1}=h;if((0,r.useEffect)(()=>{t({accessKey:m,acl:f,bucket:p,enabled:x,endpoint:v,region:j,secret:b,pathPrefix:k,forcePathStyle:w}),l(x)},[h]),!e)return null;let N=()=>{s(null),clearTimeout(null)},C=a=>{let{fieldName:n,value:r}=a;t({...e,[n]:r})},S=async()=>{if(s((0,A.kg)(A.Jk)),null==e?void 0:e.servingEndpoint){var t;e.servingEndpoint=null==e?void 0:null===(t=e.servingEndpoint)||void 0===t?void 0:t.replace(/\/+$/g,"")}await (0,g.Si)({apiPath:g.$w,data:{value:e},onSuccess:()=>{d({fieldName:"s3",value:e,path:""}),s((0,A.kg)(A.zv,"Updated.")),setTimeout(N,g.sI),u("Changing your storage configuration will take place the next time you start a new stream.")},onError:e=>{s((0,A.kg)(A.Un,e)),setTimeout(N,g.sI)}})},P=M()({"edit-storage-container":!0,"form-module":!0,enabled:i}),E=function(e,t){let{endpoint:a,accessKey:n,secret:r,bucket:s,region:i,enabled:l,acl:o,forcePathStyle:c,pathPrefix:d}=e;if(l){if(a&&(0,V.jv)(a)&&n&&r&&s&&i&&(l!==t.enabled||a!==t.endpoint||n!==t.accessKey||r!==t.secret||s!==t.bucket||i!==t.region||d!==t.pathPrefix||!t.acl&&""!==o||t.acl&&o!==t.acl||c!==t.forcePathStyle))return!0}else if(l!==t.enabled)return!0;return!1}(e,h);return(0,n.jsxs)("div",{className:P,children:[(0,n.jsx)("div",{className:"enable-switch",children:(0,n.jsx)(R.Z,{apiPath:"",fieldName:"enabled",label:"Use S3 Storage Provider",checked:e.enabled,onChange:e=>{l(e),C({fieldName:"enabled",value:e})}})}),(0,n.jsxs)("div",{className:"form-fields",children:[(0,n.jsx)("div",{className:"field-container",children:(0,n.jsx)(Z.nv,{...g.zm.endpoint,value:e.endpoint,onChange:C})}),(0,n.jsx)("div",{className:"field-container",children:(0,n.jsx)(Z.nv,{...g.zm.accessKey,value:e.accessKey,onChange:C})}),(0,n.jsx)("div",{className:"field-container",children:(0,n.jsx)(Z.nv,{...g.zm.secret,value:e.secret,onChange:C})}),(0,n.jsx)("div",{className:"field-container",children:(0,n.jsx)(Z.nv,{...g.zm.bucket,value:e.bucket,onChange:C})}),(0,n.jsx)("div",{className:"field-container",children:(0,n.jsx)(Z.nv,{...g.zm.region,value:e.region,onChange:C})}),(0,n.jsx)(T.default,{className:"advanced-section",children:(0,n.jsxs)(G,{header:"Optional Settings",children:[(0,n.jsx)("div",{className:"field-container",children:(0,n.jsx)(Z.nv,{...g.zm.acl,value:e.acl,onChange:C})}),(0,n.jsx)("div",{className:"field-container",children:(0,n.jsx)(Z.nv,{...g.zm.pathPrefix,value:e.pathPrefix,onChange:C})}),(0,n.jsx)("div",{className:"enable-switch",children:(0,n.jsx)(R.Z,{...g.zm.forcePathStyle,fieldName:"forcePathStyle",checked:e.forcePathStyle,onChange:e=>{C({fieldName:"forcePathStyle",value:e})}})})]},"1")})]}),(0,n.jsxs)("div",{className:"button-container",children:[(0,n.jsx)(c.Z,{type:"primary",onClick:S,disabled:!E,children:"Save"}),(0,n.jsx)(_.E,{status:a})]})]})}function Q(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("p",{className:"description",children:["Owncast supports optionally using external storage providers to stream your video. Learn more about this by visiting our"," ",(0,n.jsx)("a",{href:"https://owncast.online/docs/storage/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"Storage Documentation"}),"."]}),(0,n.jsx)("p",{className:"description",children:"Configuring this incorrectly will likely cause your video to be unplayable. Double check the documentation for your storage provider on how to configure the bucket you created for Owncast."}),(0,n.jsx)("p",{className:"description",children:"Keep in mind this is for live streaming, not for archival, recording or VOD purposes."}),(0,n.jsx)(J,{})]})}var Y=a(695);function H(){let{serverConfig:e}=(0,r.useContext)(y.a)||{},{streamKeyOverridden:t}=e;return(0,n.jsx)("div",{className:"config-public-details-page",children:(0,n.jsx)(s.Z,{defaultActiveKey:"1",centered:!0,items:[{label:"Server Config",key:"1",children:(0,n.jsx)(U,{})},!t&&{label:"Stream Keys",key:"2",children:(0,n.jsx)(E,{})},{label:"S3 Object Storage",key:"3",children:(0,n.jsx)(Q,{})}]})})}H.getLayout=function(e){return(0,n.jsx)(Y.l,{page:e})}}},function(e){e.O(0,[6410,8768,947,7406,4716,2862,7271,9083,811,5386,9974,8625,3796,2839,8049,695,2888,9774,179],function(){return e(e.s=2976)}),_N_E=e.O()}]);