if (self.CavalryLogger) { CavalryLogger.start_js(["8WcBL"]); }

__d("GenderConst",[],(function(a,b,c,d,e,f){e.exports={NOT_A_PERSON:0,FEMALE_SINGULAR:1,MALE_SINGULAR:2,FEMALE_SINGULAR_GUESS:3,MALE_SINGULAR_GUESS:4,MIXED_SINGULAR:5,MIXED_PLURAL:5,NEUTER_SINGULAR:6,UNKNOWN_SINGULAR:7,FEMALE_PLURAL:8,MALE_PLURAL:9,NEUTER_PLURAL:10,UNKNOWN_PLURAL:11}}),null);
__d("IntlVariations",[],(function(a,b,c,d,e,f){e.exports={BITMASK_NUMBER:28,BITMASK_GENDER:3,NUMBER_ZERO:16,NUMBER_ONE:4,NUMBER_TWO:8,NUMBER_FEW:20,NUMBER_MANY:12,NUMBER_OTHER:24,GENDER_MALE:1,GENDER_FEMALE:2,GENDER_UNKNOWN:3}}),null);
__d("InlineFbtResult",["requireCond","cr:1183579"],(function(a,b,c,d,e,f){e.exports=b("cr:1183579")}),null);
__d("FbtReactUtil",[],(function(a,b,c,d,e,f){a=typeof Symbol==="function"&&Symbol["for"]&&Symbol["for"]("react.element")||60103;var g=!1;b={REACT_ELEMENT_TYPE:a,injectReactShim:function(a){var b={validated:!0};g?Object.defineProperty(a,"_store",{configurable:!1,enumerable:!1,writable:!1,value:b}):a._store=b}};e.exports=b}),null);
__d("FbtResultBase",[],(function(a,b,c,d,e,f){"use strict";var g=function(){function a(a,b){this.$1=a,this.__errorListener=b,this.$2=null}var b=a.prototype;b.flattenToArray=function(){return a.flattenToArray(this.$1)};b.getContents=function(){return this.$1};b.toString=function(){if(this.$2!=null)return this.$2;var b="",c=this.flattenToArray();for(var d=0;d<c.length;++d){var e=c[d];if(typeof e==="string"||e instanceof a)b+=e.toString();else{var f;(f=this.__errorListener)==null?void 0:f.onStringSerializationError==null?void 0:f.onStringSerializationError(e)}}Object.isFrozen(this)||(this.$2=b);return b};b.toJSON=function(){return this.toString()};a.flattenToArray=function(b){var c=[];for(var d=0;d<b.length;++d){var e=b[d];Array.isArray(e)?c.push.apply(c,a.flattenToArray(e)):e instanceof a?c.push.apply(c,e.flattenToArray()):c.push(e)}return c};return a}();["anchor","big","blink","bold","charAt","charCodeAt","codePointAt","contains","endsWith","fixed","fontcolor","fontsize","includes","indexOf","italics","lastIndexOf","link","localeCompare","match","normalize","repeat","replace","search","slice","small","split","startsWith","strike","sub","substr","substring","sup","toLocaleLowerCase","toLocaleUpperCase","toLowerCase","toUpperCase","trim","trimLeft","trimRight"].forEach(function(a){g.prototype[a]=function(){var b;(b=this.__errorListener)==null?void 0:b.onStringMethodUsed==null?void 0:b.onStringMethodUsed(a);for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return String.prototype[a].apply(this,d)}});e.exports=g}),null);
__d("FbtResult",["FbtReactUtil","FbtResultBase"],(function(a,b,c,d,e,f){var g=function(a){return a.content};a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(c,d){d=a.call(this,c,d)||this;d.$$typeof=b("FbtReactUtil").REACT_ELEMENT_TYPE;d.key=null;d.ref=null;d.type=g;d.props={content:c};return d}c.get=function(a){return new c(a.contents,a.errorListener)};return c}(b("FbtResultBase"));e.exports=a}),null);
__d("getUnwrappedFbt",["FbtResultGK"],(function(a,b,c,d,e,f){function a(a){a=a.contents;var c=b("FbtResultGK").inlineMode,d=b("FbtResultGK").shouldReturnFbtResult;if(!d&&c!=="REPORT")return(a==null?void 0:a.length)===1&&typeof a[0]==="string"?a[0]:a}e.exports=a}),null);
__d("getFbtResult",["FbtResult","FbtResultGK","InlineFbtResult","getUnwrappedFbt"],(function(a,b,c,d,e,f){function a(a){var c=b("getUnwrappedFbt")(a);if(c!=null)return c;c=a.contents;var d=a.patternString,e=a.patternHash,f=b("FbtResultGK").inlineMode;return f!=null&&f!=="NO_INLINE"?new(b("InlineFbtResult"))(c,f,d,e):b("FbtResult").get(a)}e.exports=a}),null);
__d("FBJSON",[],(function(a,b,c,d,e,f){e.exports={parse:JSON.parse,stringify:JSON.stringify}}),null);
__d("ManagedError",[],(function(a,b,c,d,e,f){a=function(a){"use strict";babelHelpers.inheritsLoose(b,a);function b(b,c){var d;d=a.call(this,b!==null&&b!==void 0?b:"")||this;b!==null&&b!==void 0?d.message=b:d.message="";d.innerError=c;return d}return b}(babelHelpers.wrapNativeSuper(Error));e.exports=a}),null);
__d("AssertionError",["ManagedError"],(function(a,b,c,d,e,f){a=function(a){"use strict";babelHelpers.inheritsLoose(b,a);function b(b){return a.call(this,b)||this}return b}(b("ManagedError"));e.exports=a}),null);
__d("Assert",["AssertionError","sprintf"],(function(a,b,c,d,e,f){function g(a,c){if(typeof a!=="boolean"||!a)throw new(b("AssertionError"))(c);return a}function h(a,c,d){var e;if(c===void 0)e="undefined";else if(c===null)e="null";else{var f=Object.prototype.toString.call(c);e=/\s(\w*)/.exec(f)[1].toLowerCase()}g(a.indexOf(e)!==-1,d||b("sprintf")("Expression is of type %s, not %s",e,a));return c}function a(a,b,c){g(b instanceof a,c||"Expression not instance of type");return b}function i(a,b){j["is"+a]=b,j["maybe"+a]=function(a,c){a!=null&&b(a,c)}}var j={isInstanceOf:a,isTrue:g,isTruthy:function(a,b){return g(!!a,b)},type:h,define:function(a,b){a=a.substring(0,1).toUpperCase()+a.substring(1).toLowerCase(),i(a,function(a,c){g(b(a),c)})}};["Array","Boolean","Date","Function","Null","Number","Object","Regexp","String","Undefined"].forEach(function(a){i(a,h.bind(null,a.toLowerCase()))});e.exports=j}),null);
__d("ObservableMixin",[],(function(a,b,c,d,e,f){function a(){this.__observableEvents={}}a.prototype={inform:function(a){var b=Array.prototype.slice.call(arguments,1),c=Array.prototype.slice.call(this.getSubscribers(a));for(var d=0;d<c.length;d++){if(c[d]===null)continue;try{c[d].apply(this,b)}catch(a){window.setTimeout(function(){throw a},0)}}return this},getSubscribers:function(a){return this.__observableEvents[a]||(this.__observableEvents[a]=[])},clearSubscribers:function(a){a&&(this.__observableEvents[a]=[]);return this},subscribe:function(a,b){a=this.getSubscribers(a);a.push(b);return this},unsubscribe:function(a,b){a=this.getSubscribers(a);for(var c=0;c<a.length;c++)if(a[c]===b){a.splice(c,1);break}return this}};e.exports=a}),null);
__d("Type",["Assert"],(function(a,b,c,d,e,f){function g(){var a=this.__mixins;if(a)for(var b=0;b<a.length;b++)a[b].apply(this,arguments)}function h(a,b){if(b instanceof a)return!0;if(b instanceof g)for(var c=0;c<b.__mixins.length;c++)if(b.__mixins[c]==a)return!0;return!1}function i(a,b){var c=a.prototype;Array.isArray(b)||(b=[b]);for(var a=0;a<b.length;a++){var d=b[a];typeof d==="function"&&(c.__mixins.push(d),d=d.prototype);Object.keys(d).forEach(function(a){c[a]=d[a]})}}function j(a,c,d){var e=c&&Object.prototype.hasOwnProperty.call(c,"constructor")?c.constructor:function(){this.parent.apply(this,arguments)};b("Assert").isFunction(e);if(a&&a.prototype instanceof g===!1)throw new Error("parent type does not inherit from Type");a=a||g;function f(){}f.prototype=a.prototype;e.prototype=new f();c&&Object.assign(e.prototype,c);e.prototype.constructor=e;e.parent=a;e.prototype.__mixins=a.prototype.__mixins?Array.prototype.slice.call(a.prototype.__mixins):[];d&&i(e,d);e.prototype.parent=function(){this.parent=a.prototype.parent,a.apply(this,arguments)};e.prototype.parentCall=function(b){return a.prototype[b].apply(this,Array.prototype.slice.call(arguments,1))};e.extend=function(a,b){return j(this,a,b)};return e}Object.assign(g.prototype,{instanceOf:function(a){return h(a,this)}});Object.assign(g,{extend:function(a,b){return typeof a==="function"?j.apply(null,arguments):j(null,a,b)},instanceOf:h});e.exports=g}),null);
__d("sdk.Model",["ObservableMixin","Type"],(function(a,b,c,d,e,f){"use strict";a=b("Type").extend({constructor:function(a){this.parent();var b={},c=this;Object.keys(a).forEach(function(d){b[d]=a[d],c["set"+d]=function(a){if(a===b[d])return c;b[d]=a;c.inform(d+".change",a);return c},c["get"+d]=function(){return b[d]}})}},b("ObservableMixin"));e.exports=a}),null);
__d("sdk.Runtime",["JSSDKRuntimeConfig","sdk.Model"],(function(a,b,c,d,e,f){var g={UNKNOWN:0,PAGETAB:1,CANVAS:2,PLATFORM:4},h=new(b("sdk.Model"))({AccessToken:"",AutoLogAppEvents:!1,ClientID:"",CookieUserID:"",EnforceHttps:!1,Environment:g.UNKNOWN,GraphDomain:"",Initialized:!1,IsVersioned:!1,KidDirectedSite:void 0,Locale:(a=b("JSSDKRuntimeConfig")).locale,LoggedIntoFacebook:void 0,LoginStatus:void 0,Revision:a.revision,Rtl:a.rtl,Scope:void 0,SDKAB:a.sdkab,SDKUrl:a.sdkurl,SDKNS:a.sdkns,UseCookie:!1,UseLocalStorage:!0,UserID:"",Version:void 0});Object.assign(h,{ENVIRONMENTS:g,isEnvironment:function(a){var b=this.getEnvironment();return(a|b)===b},isCanvasEnvironment:function(){return this.isEnvironment(g.CANVAS)||this.isEnvironment(g.PAGETAB)}});(function(){var a=/app_runner/.test(window.name)?g.PAGETAB:/iframe_canvas/.test(window.name)?g.CANVAS:g.UNKNOWN;(a|g.PAGETAB)===a&&(a|=g.CANVAS);h.setEnvironment(a)})();e.exports=h}),null);
__d("UrlMap",["invariant","UrlMapConfig","sdk.Runtime"],(function(a,b,c,d,e,f,g){a={resolve:function(a){var c="https";if(a==="graph_domain"){var d=b("sdk.Runtime").getGraphDomain();d?a="graph_".concat(d):a="graph"}if(a in b("UrlMapConfig"))return c+"://"+b("UrlMapConfig")[a];a in b("UrlMapConfig")||g(0,2511,a);return""}};e.exports=a}),null);
__d("Banzai",["requireCond","cr:1454227"],(function(a,b,c,d,e,f){e.exports=b("cr:1454227")}),null);
__d("BanzaiODS",["invariant","Banzai","Random","gkx"],(function(a,b,c,d,e,f,g){a=function(){"use strict";function a(){this.$1={},this.$2={}}var c=a.prototype;c.setEntitySample=function(a,c){this.$2[a]=b("Random").random()<c?c:0};c.bumpEntityKey=function(a,b,c,d){d===void 0&&(d=1),this.$3(a,b,c,d)};c.bumpFraction=function(a,b,c,d,e){d===void 0&&(d=1),e===void 0&&(e=1),this.$3(a,b,c,d,e)};c.flush=function(a){if(Object.keys(this.$1).length===0)return;b("Banzai").post("categorized_ods",this.$1,a);this.$1={}};c.create=function(){return new a()};c.$3=function(a,b,c,d,e){var f;d===void 0&&(d=1);e===void 0&&(e=1);var g=(f=this.$2[b])!=null?f:null;if(g!=null&&g<=0)return;var h=this.$1[a]||(this.$1[a]={}),i=h[b]||(h[b]={}),j=i[c]||(i[c]=[0]);d=Number(d);e=Number(e);g>0&&(d/=g,e/=g);if(!isFinite(d)||!isFinite(e))return;j[0]+=d;arguments.length>=5&&(j[1]||(j[1]=0),j[1]+=e)};return a}();var h=new a();b("Banzai").subscribe(b("Banzai").SEND,function(){return h.flush()});e.exports=h}),null);
__d("BanzaiScuba",["Banzai","FBLogger"],(function(a,b,c,d,e,f){var g="scuba_sample";a=function(){"use strict";function a(a,c,d){this.posted=!1,a||b("FBLogger")("BanzaiScuba").warn("Can't post a sample without a dataset"),this.dataset=a,this.$1=c,this.options=d}var c=a.prototype;c.$2=function(a,c,d){if(this.posted){b("FBLogger")("BanzaiScuba").warn("Trying to add to an already posted sample");return a}a=a||{};a[c]=d;return a};c.addNormal=function(a,b){this.normal=this.$2(this.normal,a,b);return this};c.addInteger=function(a,b){this["int"]=this.$2(this["int"],a,b);return this};c.addDenorm=function(a,b){this.denorm=this.$2(this.denorm,a,b);return this};c.addTagSet=function(a,b){this.tags=this.$2(this.tags,a,b);return this};c.addNormVector=function(a,b){this.normvector=this.$2(this.normvector,a,b);return this};c.post=function(a){if(this.posted){b("FBLogger")("BanzaiScuba").warn("Trying to re-post");return}if(!this.dataset)return;var c={};c._ds=this.dataset;c._options=this.options;this.normal&&(c.normal=this.normal);this["int"]&&(c["int"]=this["int"]);this.denorm&&(c.denorm=this.denorm);this.tags&&(c.tags=this.tags);this.normvector&&(c.normvector=this.normvector);this.$1!==null&&this.$1!==""&&this.$1!==void 0&&(c._lid=this.$1);b("Banzai").post(g,c,a);this.posted=!0};return a}();e.exports=a}),null);
__d("CurrentUser",["Cookie","CurrentUserInitialData"],(function(a,b,c,d,e,f){var g,h={getID:function(){return(g||(g=b("CurrentUserInitialData"))).USER_ID},getAccountID:function(){return(g||(g=b("CurrentUserInitialData"))).ACCOUNT_ID},getEmployeeWorkUserID:function(){return(g||(g=b("CurrentUserInitialData"))).WORK_USER_ID},getName:function(){return(g||(g=b("CurrentUserInitialData"))).NAME},getShortName:function(){return(g||(g=b("CurrentUserInitialData"))).SHORT_NAME},isLoggedIn:function(){return(g||(g=b("CurrentUserInitialData"))).USER_ID!=="0"},isLoggedInNow:function(){if(!h.isLoggedIn())return!1;if((g||(g=b("CurrentUserInitialData"))).IS_INTERN_SITE)return!0;if((g||(g=b("CurrentUserInitialData"))).IS_WORK_USER)return!0;return(g||(g=b("CurrentUserInitialData"))).ORIGINAL_USER_ID!=null&&(g||(g=b("CurrentUserInitialData"))).ORIGINAL_USER_ID!=""?(g||(g=b("CurrentUserInitialData"))).ORIGINAL_USER_ID===b("Cookie").get("c_user"):(g||(g=b("CurrentUserInitialData"))).USER_ID===b("Cookie").get("c_user")},isEmployee:function(){return!!(g||(g=b("CurrentUserInitialData"))).IS_EMPLOYEE},isTestUser:function(){return!!(g||(g=b("CurrentUserInitialData"))).IS_TEST_USER},hasWorkUser:function(){return!!(g||(g=b("CurrentUserInitialData"))).HAS_WORK_USER},isWorkUser:function(){return!!(g||(g=b("CurrentUserInitialData"))).IS_WORK_USER},isGray:function(){return!!(g||(g=b("CurrentUserInitialData"))).IS_GRAY},isUnderage:function(){return!!(g||(g=b("CurrentUserInitialData"))).IS_UNDERAGE},isMessengerOnlyUser:function(){return!!(g||(g=b("CurrentUserInitialData"))).IS_MESSENGER_ONLY_USER},isDeactivatedAllowedOnMessenger:function(){return!!(g||(g=b("CurrentUserInitialData"))).IS_DEACTIVATED_ALLOWED_ON_MESSENGER},getAppID:function(){return(g||(g=b("CurrentUserInitialData"))).APP_ID}};e.exports=h}),null);
__d("FbtNumberType",["IntlNumberTypeConfig","IntlVariations"],(function(a,b,c,d,e,f){a=new Function("IntlVariations",'"use strict"; return (function(n) {'+b("IntlNumberTypeConfig").impl+"});")(b("IntlVariations"));e.exports={getVariation:a}}),null);
__d("IntlNumberType",["FbtNumberType"],(function(a,b,c,d,e,f){a={get:function(a){return b("FbtNumberType")}};e.exports=a}),null);
__d("NumberFormatConsts",["NumberFormatConfig"],(function(a,b,c,d,e,f){a={get:function(a){return b("NumberFormatConfig")}};e.exports=a}),null);
__d("FbtErrorListenerWWW",["FBLogger","killswitch"],(function(a,b,c,d,e,f){a=function(){"use strict";function a(a){this.$1=a.hash,this.$2=a.translation}var c=a.prototype;c.onStringSerializationError=function(a){var c="Context not logged.";if(!b("killswitch")("JS_RELIABILITY_FBT_LOGGING"))try{var d=JSON.stringify(a);d!=null&&(c=d.substr(0,250))}catch(a){c=a.message}d=(a==null?void 0:(d=a.constructor)==null?void 0:d.name)||"";b("FBLogger")("fbt").blameToPreviousDirectory().blameToPreviousDirectory().mustfix('Converting to a string will drop content data. Hash="%s" Translation="%s" Content="%s" (type=%s,%s)',this.$1,this.$2,c,typeof a,d)};c.onStringMethodUsed=function(a){b("FBLogger")("fbt").blameToPreviousDirectory().blameToPreviousDirectory().mustfix("Error using fbt string. Used method %s on Fbt string. Fbt string is designed to be immutable and should not be manipulated.",a)};return a}();e.exports=a}),null);
__d("FbtHooks",[],(function(a,b,c,d,e,f){var g={};a={getErrorListener:function(a){return g.errorListener==null?void 0:g.errorListener(a)},logImpression:function(a){g.logImpression==null?void 0:g.logImpression(a)},onTranslationOverride:function(a){g.onTranslationOverride==null?void 0:g.onTranslationOverride(a)},getFbsResult:function(a){return g.getFbsResult(a)},getFbtResult:function(a){return g.getFbtResult(a)},getTranslatedInput:function(a){var b;return(b=g.getTranslatedInput==null?void 0:g.getTranslatedInput(a))!=null?b:a},register:function(a){Object.assign(g,a)}};e.exports=a}),null);
__d("FbtPureStringResult",["FbtResult"],(function(a,b,c,d,e,f){a=function(a){"use strict";babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}return b}(b("FbtResult"));e.exports=a}),null);
__d("getFbsResult",["FbtPureStringResult"],(function(a,b,c,d,e,f){function a(a){return new(b("FbtPureStringResult"))(a.contents,a.errorListener)}e.exports=a}),null);
__d("getTranslatedInput",[],(function(a,b,c,d,e,f){var g="B!N@$T",h={};function a(a){var b=a.table;typeof b==="string"&&b.startsWith(g)&&(b in h||(h[b]=JSON.parse(b.substring(g.length))),b=h[b]);return{table:b,args:a.args}}e.exports=a}),null);
__d("FbtEnv",["requireDeferred","Banzai","FbtErrorListenerWWW","FbtHooks","getFbsResult","getFbtResult","getTranslatedInput","promiseDone"],(function(a,b,c,d,e,f){"use strict";var g=b("requireDeferred")("FbtLogging");a={setup:function(){b("FbtHooks").register({errorListener:function(a){return new(b("FbtErrorListenerWWW"))(a)},getFbsResult:b("getFbsResult"),getFbtResult:b("getFbtResult"),getTranslatedInput:b("getTranslatedInput"),onTranslationOverride:function(a){return b("Banzai").post("intl_qt_event",{hash:a})},logImpression:function(a){return b("promiseDone")(g.load().then(function(b){return b==null?void 0:b.logImpression(a)}))}})}};e.exports=a}),null);
__d("FbtLogging",["requireCond","cr:1094907"],(function(a,b,c,d,e,f){"use strict";e.exports=b("cr:1094907")}),null);
__d("InlineFbtResultImpl",["cx","FbtHooks","FbtReactUtil","FbtResultBase"],(function(a,b,c,d,e,f,g){function h(a,c,d,e){var f="_4qba";e!=null&&e!=""&&(c==="TRANSLATION"?f="_4qbb":c==="APPROVE"?f="_4qbc":c==="REPORT"&&(f="_4qbd"));return{$$typeof:b("FbtReactUtil").REACT_ELEMENT_TYPE,type:"em",key:null,ref:null,props:{className:f,"data-intl-hash":e,"data-intl-translation":d,"data-intl-trid":"",children:a,suppressHydrationWarning:!0},_owner:null}}var i=function(a){return h(a.content,a.inlineMode,a.translation,a.hash)};a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(c,d,e,f){var g;g=a.call(this,c,b("FbtHooks").getErrorListener({translation:e,hash:f}))||this;g.$$typeof=b("FbtReactUtil").REACT_ELEMENT_TYPE;g.key=null;g.ref=null;g.type=i;g.props={content:c,inlineMode:d,translation:e,hash:f};return g}return c}(b("FbtResultBase"));e.exports=a}),null);
__d("IntlPhonologicalRewrites",["IntlPhonologicalRules"],(function(a,b,c,d,e,f){"use strict";a={get:function(a){return b("IntlPhonologicalRules")}};e.exports=a}),null);
__d("IntlVariationResolverImpl",["invariant","IntlNumberType","IntlVariations","IntlViewerContext"],(function(a,b,c,d,e,f,g){var h="_1";a={EXACTLY_ONE:h,getNumberVariations:function(a){var c=b("IntlNumberType").get(b("IntlViewerContext").locale).getVariation(a);c&b("IntlVariations").BITMASK_NUMBER||g(0,481);return a===1?[h,c,"*"]:[c,"*"]},getGenderVariations:function(a){a&b("IntlVariations").BITMASK_GENDER||g(0,482);return[a,"*"]}};e.exports=a}),null);
__d("IntlVariationResolver",["IntlHoldoutGK","IntlVariationResolverImpl"],(function(a,b,c,d,e,f){var g=b("IntlVariationResolverImpl").EXACTLY_ONE;a={getNumberVariations:function(a){return b("IntlHoldoutGK").inIntlHoldout?a===1?[g,"*"]:["*"]:b("IntlVariationResolverImpl").getNumberVariations(a)},getGenderVariations:function(a){return b("IntlHoldoutGK").inIntlHoldout?["*"]:b("IntlVariationResolverImpl").getGenderVariations(a)}};e.exports=a}),null);
__d("FbtTable",["invariant"],(function(a,b,c,d,e,f,g){"use strict";var h={ARG:{INDEX:0,SUBSTITUTION:1},access:function(a,b,c){if(c>=b.length){typeof a==="string"||Array.isArray(a)||g(0,21388,JSON.stringify(a));return a}var d=b[c];d=d[h.ARG.INDEX];if(d==null)return h.access(a,b,c+1);typeof a!=="string"&&!Array.isArray(a)||g(0,20954,typeof a);for(var e=0;e<d.length;++e){var f=a[d[e]];if(f==null)continue;f=h.access(f,b,c+1);if(f!=null)return f}return null}};e.exports=h}),null);
__d("FbtTableAccessor",[],(function(a,b,c,d,e,f){"use strict";a={getEnumResult:function(a){return[[a],null]},getGenderResult:function(a,b,c){return[a,b]},getNumberResult:function(a,b,c){return[a,b]},getSubstitution:function(a){return[null,a]},getPronounResult:function(a){return[[a,"*"],null]}};e.exports=a}),null);
__d("IntlPunctuation",["IntlPhonologicalRewrites","IntlViewerContext"],(function(a,b,c,d,e,f){d="[.!?\u3002\uff01\uff1f\u0964\u2026\u0eaf\u1801\u0e2f\uff0e]";var g=new RegExp(d+"[)\"'\xbb\u0f3b\u0f3d\u2019\u201d\u203a\u3009\u300b\u300d\u300f\u3011\u3015\u3017\u3019\u301b\u301e\u301f\ufd3f\uff07\uff09\uff3d\\s]*$"),h=[],i=null,j=b("IntlPhonologicalRewrites").get(b("IntlViewerContext").locale);function k(){b("IntlViewerContext").locale!=null&&b("IntlViewerContext").locale!=""&&b("IntlViewerContext").locale!==i&&(h=[],i=b("IntlViewerContext").locale,j=b("IntlPhonologicalRewrites").get(i));if(!h.length)for(var a in j.patterns){var c=j.patterns[a];for(var d in j.meta){var e=new RegExp(d.slice(1,-1),"g"),f=j.meta[d];a=a.replace(e,f);c=c.replace(e,f)}c==="javascript"&&(c=function(a){return a.slice(1).toLowerCase()});h.push([new RegExp(a.slice(1,-1),"g"),c])}return h}function a(a){var b=k();a=a;for(var c=0;c<b.length;c++){var d=b[c],e=d[0];d=d[1];a=a.replace(e,d)}return a.replace(/\x01/g,"")}function c(a){return typeof a!=="string"?!1:g.test(a)}e.exports={PUNCT_CHAR_CLASS:d,endsInPunct:c,applyPhonologicalRules:a}}),null);
__d("escapeRegex",[],(function(a,b,c,d,e,f){"use strict";function a(a){return a.replace(/([.?*+\^$\[\]\\(){}|\-])/g,"\\$1")}e.exports=a}),null);
__d("intlNumUtils",["IntlViewerContext","NumberFormatConsts","escapeRegex"],(function(a,b,c,d,e,f){var g=3;f=["\u0433\u0440\u043d.","\u0434\u0435\u043d.","\u043b\u0432.","\u043c\u0430\u043d.","\u0564\u0580.","\u062c.\u0645.","\u062f.\u0625.","\u062f.\u0627.","\u062f.\u0628.","\u062f.\u062a.","\u062f.\u062c.","\u062f.\u0639.","\u062f.\u0643.","\u062f.\u0644.","\u062f.\u0645.","\u0631.\u0633.","\u0631.\u0639.","\u0631.\u0642.","\u0631.\u064a.","\u0644.\u0633.","\u0644.\u0644.","\u0783.","B/.","Bs.","Fr.","kr.","L.","p.","S/."];var h={};function i(a){h[a]||(h[a]=new RegExp(a,"i"));return h[a]}var j=i(f.reduce(function(a,c,d){return a+(d?"|":"")+"("+b("escapeRegex")(c)+")"},""));function k(a,c,d,e,f,h,j){d===void 0&&(d="");e===void 0&&(e=".");f===void 0&&(f=0);h===void 0&&(h={primaryGroupSize:g,secondaryGroupSize:g});var k=h.primaryGroupSize||g;h=h.secondaryGroupSize||k;j=j&&j.digits;var m;c==null?m=a.toString():typeof a==="string"?m=q(a,c):m=o(a,c);a=m.split(".");c=a[0];m=a[1];if(Math.abs(parseInt(c,10)).toString().length>=f){a="$1"+d+"$2$3";f="(\\d)(\\d{"+(k-0)+"})($|\\D)";k=c.replace(i(f),a);if(k!=c){c=k;f="(\\d)(\\d{"+(h-0)+"})("+b("escapeRegex")(d)+")";h=i(f);while((k=c.replace(h,a))!=c)c=k}}j!=null&&(c=l(c,j),m=m&&l(m,j));d=c;m&&(d+=e+m);return d}function l(a,b){var c="";for(var d=0;d<a.length;++d){var e=b[a.charCodeAt(d)-48];c+=e!==void 0?e:a[d]}return c}function a(a,c){var d=b("NumberFormatConsts").get(b("IntlViewerContext").locale);return k(a,c,"",d.decimalSeparator,d.minDigitsForThousandsSeparator,d.standardDecimalPatternInfo,d.numberingSystemData)}function m(a,c){var d=b("NumberFormatConsts").get(b("IntlViewerContext").locale);return k(a,c,d.numberDelimiter,d.decimalSeparator,d.minDigitsForThousandsSeparator,d.standardDecimalPatternInfo,d.numberingSystemData)}function n(a){return a&&Math.floor(Math.log10(Math.abs(a)))}function c(a,b,c){var d=n(a),e=a;d<c&&(e=a*Math.pow(10,-d+c));a=Math.pow(10,n(e)-c+1);e=Math.round(e/a)*a;if(d<c){e/=Math.pow(10,-d+c);if(b==null)return m(e,c-d-1)}return m(e,b)}function o(a,b){b=b==null?0:b;var c=Math.pow(10,b);a=a;a=Math.round(a*c)/c;a+="";if(!b)return a;if(a.indexOf("e-")!==-1)return a;c=a.indexOf(".");var d;c==-1?(a+=".",d=b):d=b-(a.length-c-1);for(var b=0,c=d;b<c;b++)a+="0";return a}var p=function(a,b){a=a;for(var c=0;c<b;c++)a+="0";return a};function q(a,b){var c=a.indexOf("."),d=c===-1?a:a.slice(0,c);a=c===-1?"":a.slice(c+1);return b!=null?d+"."+p(a.slice(0,b),b-a.length):d}function r(a,c,d){d===void 0&&(d="");var e=t(),f=a;e&&(f=a.split("").map(function(a){return e[a]||a}).join("").trim());f=f.replace(/^[^\d]*\-/,"\x02");f=f.replace(j,"");a=b("escapeRegex")(c);c=b("escapeRegex")(d);d=i("^[^\\d]*\\d.*"+a+".*\\d[^\\d]*$");if(!d.test(f)){d=i("(^[^\\d]*)"+a+"(\\d*[^\\d]*$)");if(d.test(f)){f=f.replace(d,"$1\x01$2");return s(f)}d=i("^[^\\d]*[\\d "+b("escapeRegex")(c)+"]*[^\\d]*$");d.test(f)||(f="");return s(f)}d=i("(^[^\\d]*[\\d "+c+"]*)"+a+"(\\d*[^\\d]*$)");f=d.test(f)?f.replace(d,"$1\x01$2"):"";return s(f)}function s(a){a=a.replace(/[^0-9\u0001\u0002]/g,"").replace("\x01",".").replace("\x02","-");var b=Number(a);return a===""||isNaN(b)?null:b}function t(){var a=b("NumberFormatConsts").get(b("IntlViewerContext").locale),c={};a=a.numberingSystemData&&a.numberingSystemData.digits;if(a==null)return null;for(var d=0;d<a.length;d++)c[a.charAt(d)]=d.toString();return c}function d(a){var c=b("NumberFormatConsts").get(b("IntlViewerContext").locale);return r(a,c.decimalSeparator||".",c.numberDelimiter)}var u={formatNumber:a,formatNumberRaw:k,formatNumberWithThousandDelimiters:m,formatNumberWithLimitedSigFig:c,parseNumber:d,parseNumberRaw:r,truncateLongNumber:q,getFloatString:function(a,b,c){a=String(a);a=a.split(".");b=u.getIntegerString(a[0],b);return a.length===1?b:b+c+a[1]},getIntegerString:function(a,b){b=b;b===""&&(b=",");a=String(a);var c=/(\d+)(\d{3})/;while(c.test(a))a=a.replace(c,"$1"+b+"$2");return a}};e.exports=u}),null);
__d("substituteTokens",["invariant","IntlPunctuation"],(function(a,b,c,d,e,f,g){var h=new RegExp("\\{([^}]+)\\}("+b("IntlPunctuation").PUNCT_CHAR_CLASS+"*)","g");function i(a){return a}function a(a,c){if(c==null)return a;typeof c==="object"||g(0,6041,a);var d=[],e=[];a=a.replace(h,function(a,f,g){a=c[f];if(a!=null&&typeof a==="object"){d.push(a);e.push(f);return"\x17"+g}else if(a===null)return"";return String(a)+(b("IntlPunctuation").endsInPunct(String(a))?"":g)}).split("\x17").map(b("IntlPunctuation").applyPhonologicalRules);if(a.length===1)return a[0];var f=a[0]!==""?[a[0]]:[];for(var j=0;j<d.length;j++)f.push(i(d[j])),a[j+1]!==""&&f.push(a[j+1]);return f}e.exports=a}),null);
__d("fbt",["invariant","FbtEnv","FbtHooks","FbtQTOverrides","FbtResultBase","FbtTable","FbtTableAccessor","GenderConst","IntlVariationResolver","IntlViewerContext","intlNumUtils","substituteTokens"],(function(a,b,c,d,e,f,g){b("FbtEnv").setup();var h=b("FbtQTOverrides").overrides,i=b("IntlVariationResolver").getGenderVariations,j=b("IntlVariationResolver").getNumberVariations,k=!1,l=b("FbtTable").ARG,m={NUMBER:0,GENDER:1},n={OBJECT:0,POSSESSIVE:1,REFLEXIVE:2,SUBJECT:3},o={};c=function(){};c._=function(a,c,d){if(((d==null?void 0:d.hk)||(d==null?void 0:d.ehk))&&k)return{text:a,fbt:!0,hashKey:d.hk};a=b("FbtHooks").getTranslatedInput({table:a,args:c,options:d});c=a.table;d=a.args;a={};if(c.__vcg!=null){d=d||[];var e=b("IntlViewerContext").GENDER,f=i(e);d.unshift(b("FbtTableAccessor").getGenderResult(f,null,e))}d&&(typeof c!=="string"&&(c=b("FbtTable").access(c,d,0)),a=Object.assign.apply(Object,[{}].concat(d.map(function(a){return a[l.SUBSTITUTION]||{}}))),c!==null||g(0,479));var j;if(Array.isArray(c)){f=c[0];j=c[1];e="1_"+j;h[e]!=null&&h[e]!==""&&(f=h[e],b("FbtHooks").onTranslationOverride(j));b("FbtHooks").logImpression(j)}else if(typeof c==="string")f=c;else throw new Error("Table access did not result in string: "+(c===void 0?"undefined":JSON.stringify(c))+", Type: "+typeof c);d=o[f];e=p(a);if(d&&!e)return d;else{c=b("substituteTokens")(f,a);d=r(c,f,j);e||(o[f]=d);return d}};function p(a){for(var b in a)return!0;return!1}c._enum=function(a,c){return b("FbtTableAccessor").getEnumResult(a)};c._subject=function(a){return b("FbtTableAccessor").getGenderResult(i(a),null,a)};c._param=function(a,c,d){var e;e=(e={},e[a]=c,e);if(d)if(d[0]===m.NUMBER){var f=d.length>1?d[1]:c;typeof f==="number"||g(0,484);var h=j(f);typeof c==="number"&&(e[a]=b("intlNumUtils").formatNumberWithThousandDelimiters(c));return b("FbtTableAccessor").getNumberResult(h,e,f)}else if(d[0]===m.GENDER){d.length>1||g(0,485);a=d[1];c=i(a);return b("FbtTableAccessor").getGenderResult(c,e,a)}else g(0,486);else return b("FbtTableAccessor").getSubstitution(e)};c._plural=function(a,c,d){var e=j(a),f={};c&&(typeof d==="number"?f[c]=b("intlNumUtils").formatNumberWithThousandDelimiters(d):f[c]=d||b("intlNumUtils").formatNumberWithThousandDelimiters(a));return b("FbtTableAccessor").getNumberResult(e,f,a)};c._pronoun=function(a,c,d){c!==b("GenderConst").NOT_A_PERSON||!d||!d.human||g(0,487);d=q(a,c);return b("FbtTableAccessor").getPronounResult(d)};function q(a,c){switch(c){case b("GenderConst").NOT_A_PERSON:return a===n.OBJECT||a===n.REFLEXIVE?b("GenderConst").NOT_A_PERSON:b("GenderConst").UNKNOWN_PLURAL;case b("GenderConst").FEMALE_SINGULAR:case b("GenderConst").FEMALE_SINGULAR_GUESS:return b("GenderConst").FEMALE_SINGULAR;case b("GenderConst").MALE_SINGULAR:case b("GenderConst").MALE_SINGULAR_GUESS:return b("GenderConst").MALE_SINGULAR;case b("GenderConst").MIXED_SINGULAR:case b("GenderConst").FEMALE_PLURAL:case b("GenderConst").MALE_PLURAL:case b("GenderConst").NEUTER_PLURAL:case b("GenderConst").UNKNOWN_PLURAL:return b("GenderConst").UNKNOWN_PLURAL;case b("GenderConst").NEUTER_SINGULAR:case b("GenderConst").UNKNOWN_SINGULAR:return a===n.REFLEXIVE?b("GenderConst").NOT_A_PERSON:b("GenderConst").UNKNOWN_PLURAL}return b("GenderConst").NOT_A_PERSON}c._name=function(a,c,d){var e=i(d),f={};f[a]=c;return b("FbtTableAccessor").getGenderResult(e,f,d)};function r(a,c,d){a=typeof a==="string"?[a]:a;var e=b("FbtHooks").getErrorListener({translation:c,hash:d});a=b("FbtHooks").getFbtResult({contents:a,errorListener:e,patternString:c,patternHash:d});return a}c.enableJsonExportMode=function(){k=!0};c.disableJsonExportMode=function(){k=!1};function a(a){return a instanceof b("FbtResultBase")}c.isFbtInstance=a;e.exports=c}),null);
__d("cancelIdleCallbackBlue",["IdleCallbackImplementation","TimerStorage","TimeSlice"],(function(a,b,c,d,e,f){var g=b("TimerStorage").IDLE_CALLBACK;function a(a){b("TimerStorage").unset(g,a);var c=g+String(a);b("TimeSlice").cancelWithToken(c);b("IdleCallbackImplementation").cancelIdleCallback(a)}e.exports=a}),null);
__d("getCrossOriginTransport",["invariant","ExecutionEnvironment","ex"],(function(a,b,c,d,e,f,g){function h(){if(!b("ExecutionEnvironment").canUseDOM)throw new Error(b("ex")("getCrossOriginTransport: %s","Cross origin transport unavailable in the server environment."));try{var a=new XMLHttpRequest();!("withCredentials"in a)&&typeof XDomainRequest!=="undefined"&&(a=new XDomainRequest());return a}catch(a){throw new Error(b("ex")("getCrossOriginTransport: %s",a.message))}}h.withCredentials=function(){var a=h();"withCredentials"in a||g(0,5150);var b=a.open;a.open=function(){b.apply(this,arguments),this.withCredentials=!0};return a};e.exports=h}),null);
__d("ZeroRewrites",["URI","ZeroRewriteRules","getCrossOriginTransport","getSameOriginTransport","isFacebookURI"],(function(a,b,c,d,e,f){var g,h={rewriteURI:function(a){if(!b("isFacebookURI")(a)||h._isWhitelisted(a))return a;var c=h._getRewrittenSubdomain(a);c!==null&&c!==void 0&&(a=a.setSubdomain(c));return a},getTransportBuilderForURI:function(a){return h.isRewritten(a)?b("getCrossOriginTransport").withCredentials:b("getSameOriginTransport")},isRewriteSafe:function(a){if(Object.keys(b("ZeroRewriteRules").rewrite_rules).length===0||!b("isFacebookURI")(a))return!1;var c=h._getCurrentURI().getDomain(),d=new(g||(g=b("URI")))(a).qualify().getDomain();return c===d||h.isRewritten(a)},isRewritten:function(a){a=a.getQualifiedURI();if(Object.keys(b("ZeroRewriteRules").rewrite_rules).length===0||!b("isFacebookURI")(a)||h._isWhitelisted(a))return!1;var c=a.getSubdomain(),d=h._getCurrentURI(),e=h._getRewrittenSubdomain(d);return a.getDomain()!==d.getDomain()&&c===e},_isWhitelisted:function(a){a=a.getPath();a.endsWith("/")||(a+="/");return b("ZeroRewriteRules").whitelist&&b("ZeroRewriteRules").whitelist[a]===1},_getRewrittenSubdomain:function(a){a=a.getQualifiedURI().getSubdomain();return b("ZeroRewriteRules").rewrite_rules[a]},_getCurrentURI:function(){return new(g||(g=b("URI")))("/").qualify()}};e.exports=h}),null);