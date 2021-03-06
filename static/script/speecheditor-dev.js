(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,d=e.filter,g=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,_=Object.keys,j=i.bind,w=function(n){return n instanceof w?n:this instanceof w?(this._wrapped=n,void 0):new w(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=w),exports._=w):n._=w,w.VERSION="1.4.4";var A=w.each=w.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a in n)if(w.has(n,a)&&t.call(e,n[a],a,n)===r)return};w.map=w.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e[e.length]=t.call(r,n,u,i)}),e)};var O="Reduce of empty array with no initial value";w.reduce=w.foldl=w.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=w.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(O);return r},w.reduceRight=w.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=w.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=w.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(O);return r},w.find=w.detect=function(n,t,r){var e;return E(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},w.filter=w.select=function(n,t,r){var e=[];return null==n?e:d&&n.filter===d?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&(e[e.length]=n)}),e)},w.reject=function(n,t,r){return w.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},w.every=w.all=function(n,t,e){t||(t=w.identity);var u=!0;return null==n?u:g&&n.every===g?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var E=w.some=w.any=function(n,t,e){t||(t=w.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};w.contains=w.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:E(n,function(n){return n===t})},w.invoke=function(n,t){var r=o.call(arguments,2),e=w.isFunction(t);return w.map(n,function(n){return(e?t:n[t]).apply(n,r)})},w.pluck=function(n,t){return w.map(n,function(n){return n[t]})},w.where=function(n,t,r){return w.isEmpty(t)?r?null:[]:w[r?"find":"filter"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},w.findWhere=function(n,t){return w.where(n,t,!0)},w.max=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.max.apply(Math,n);if(!t&&w.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>=e.computed&&(e={value:n,computed:a})}),e.value},w.min=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.min.apply(Math,n);if(!t&&w.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;e.computed>a&&(e={value:n,computed:a})}),e.value},w.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=w.random(r++),e[r-1]=e[t],e[t]=n}),e};var k=function(n){return w.isFunction(n)?n:function(t){return t[n]}};w.sortBy=function(n,t,r){var e=k(t);return w.pluck(w.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index<t.index?-1:1}),"value")};var F=function(n,t,r,e){var u={},i=k(t||w.identity);return A(n,function(t,a){var o=i.call(r,t,a,n);e(u,o,t)}),u};w.groupBy=function(n,t,r){return F(n,t,r,function(n,t,r){(w.has(n,t)?n[t]:n[t]=[]).push(r)})},w.countBy=function(n,t,r){return F(n,t,r,function(n,t){w.has(n,t)||(n[t]=0),n[t]++})},w.sortedIndex=function(n,t,r,e){r=null==r?w.identity:k(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;u>r.call(e,n[o])?i=o+1:a=o}return i},w.toArray=function(n){return n?w.isArray(n)?o.call(n):n.length===+n.length?w.map(n,w.identity):w.values(n):[]},w.size=function(n){return null==n?0:n.length===+n.length?n.length:w.keys(n).length},w.first=w.head=w.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},w.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},w.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},w.rest=w.tail=w.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},w.compact=function(n){return w.filter(n,w.identity)};var R=function(n,t,r){return A(n,function(n){w.isArray(n)?t?a.apply(r,n):R(n,t,r):r.push(n)}),r};w.flatten=function(n,t){return R(n,t,[])},w.without=function(n){return w.difference(n,o.call(arguments,1))},w.uniq=w.unique=function(n,t,r,e){w.isFunction(t)&&(e=r,r=t,t=!1);var u=r?w.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:w.contains(a,r))||(a.push(r),i.push(n[e]))}),i},w.union=function(){return w.uniq(c.apply(e,arguments))},w.intersection=function(n){var t=o.call(arguments,1);return w.filter(w.uniq(n),function(n){return w.every(t,function(t){return w.indexOf(t,n)>=0})})},w.difference=function(n){var t=c.apply(e,o.call(arguments,1));return w.filter(n,function(n){return!w.contains(t,n)})},w.zip=function(){for(var n=o.call(arguments),t=w.max(w.pluck(n,"length")),r=Array(t),e=0;t>e;e++)r[e]=w.pluck(n,""+e);return r},w.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},w.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=w.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},w.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},w.range=function(n,t,r){1>=arguments.length&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=Array(e);e>u;)i[u++]=n,n+=r;return i},w.bind=function(n,t){if(n.bind===j&&j)return j.apply(n,o.call(arguments,1));var r=o.call(arguments,2);return function(){return n.apply(t,r.concat(o.call(arguments)))}},w.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},w.bindAll=function(n){var t=o.call(arguments,1);return 0===t.length&&(t=w.functions(n)),A(t,function(t){n[t]=w.bind(n[t],n)}),n},w.memoize=function(n,t){var r={};return t||(t=w.identity),function(){var e=t.apply(this,arguments);return w.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},w.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},w.defer=function(n){return w.delay.apply(w,[n,1].concat(o.call(arguments,1)))},w.throttle=function(n,t){var r,e,u,i,a=0,o=function(){a=new Date,u=null,i=n.apply(r,e)};return function(){var c=new Date,l=t-(c-a);return r=this,e=arguments,0>=l?(clearTimeout(u),u=null,a=c,i=n.apply(r,e)):u||(u=setTimeout(o,l)),i}},w.debounce=function(n,t,r){var e,u;return function(){var i=this,a=arguments,o=function(){e=null,r||(u=n.apply(i,a))},c=r&&!e;return clearTimeout(e),e=setTimeout(o,t),c&&(u=n.apply(i,a)),u}},w.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},w.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},w.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},w.after=function(n,t){return 0>=n?t():function(){return 1>--n?t.apply(this,arguments):void 0}},w.keys=_||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)w.has(n,r)&&(t[t.length]=r);return t},w.values=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push(n[r]);return t},w.pairs=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push([r,n[r]]);return t},w.invert=function(n){var t={};for(var r in n)w.has(n,r)&&(t[n[r]]=r);return t},w.functions=w.methods=function(n){var t=[];for(var r in n)w.isFunction(n[r])&&t.push(r);return t.sort()},w.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},w.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},w.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)w.contains(r,u)||(t[u]=n[u]);return t},w.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)null==n[r]&&(n[r]=t[r])}),n},w.clone=function(n){return w.isObject(n)?w.isArray(n)?n.slice():w.extend({},n):n},w.tap=function(n,t){return t(n),n};var I=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof w&&(n=n._wrapped),t instanceof w&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==t+"";case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;r.push(n),e.push(t);var a=0,o=!0;if("[object Array]"==u){if(a=n.length,o=a==t.length)for(;a--&&(o=I(n[a],t[a],r,e)););}else{var c=n.constructor,f=t.constructor;if(c!==f&&!(w.isFunction(c)&&c instanceof c&&w.isFunction(f)&&f instanceof f))return!1;for(var s in n)if(w.has(n,s)&&(a++,!(o=w.has(t,s)&&I(n[s],t[s],r,e))))break;if(o){for(s in t)if(w.has(t,s)&&!a--)break;o=!a}}return r.pop(),e.pop(),o};w.isEqual=function(n,t){return I(n,t,[],[])},w.isEmpty=function(n){if(null==n)return!0;if(w.isArray(n)||w.isString(n))return 0===n.length;for(var t in n)if(w.has(n,t))return!1;return!0},w.isElement=function(n){return!(!n||1!==n.nodeType)},w.isArray=x||function(n){return"[object Array]"==l.call(n)},w.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){w["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),w.isArguments(arguments)||(w.isArguments=function(n){return!(!n||!w.has(n,"callee"))}),"function"!=typeof/./&&(w.isFunction=function(n){return"function"==typeof n}),w.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},w.isNaN=function(n){return w.isNumber(n)&&n!=+n},w.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},w.isNull=function(n){return null===n},w.isUndefined=function(n){return n===void 0},w.has=function(n,t){return f.call(n,t)},w.noConflict=function(){return n._=t,this},w.identity=function(n){return n},w.times=function(n,t,r){for(var e=Array(n),u=0;n>u;u++)e[u]=t.call(r,u);return e},w.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var M={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};M.unescape=w.invert(M.escape);var S={escape:RegExp("["+w.keys(M.escape).join("")+"]","g"),unescape:RegExp("("+w.keys(M.unescape).join("|")+")","g")};w.each(["escape","unescape"],function(n){w[n]=function(t){return null==t?"":(""+t).replace(S[n],function(t){return M[n][t]})}}),w.result=function(n,t){if(null==n)return null;var r=n[t];return w.isFunction(r)?r.call(n):r},w.mixin=function(n){A(w.functions(n),function(t){var r=w[t]=n[t];w.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),D.call(this,r.apply(w,n))}})};var N=0;w.uniqueId=function(n){var t=++N+"";return n?n+t:t},w.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var T=/(.)^/,q={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},B=/\\|'|\r|\n|\t|\u2028|\u2029/g;w.template=function(n,t,r){var e;r=w.defaults({},r,w.templateSettings);var u=RegExp([(r.escape||T).source,(r.interpolate||T).source,(r.evaluate||T).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(B,function(n){return"\\"+q[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,w);var c=function(n){return e.call(this,n,w)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},w.chain=function(n){return w(n).chain()};var D=function(n){return this._chain?w(n).chain():n};w.mixin(w),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];w.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],D.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];w.prototype[n]=function(){return D.call(this,t.apply(this._wrapped,arguments))}}),w.extend(w.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);
//fgnass.github.com/spin.js#v1.2.8
!function(window, document, undefined) {

  /**
   * Copyright (c) 2011 Felix Gnass [fgnass at neteye dot de]
   * Licensed under the MIT license
   */

  var prefixes = ['webkit', 'Moz', 'ms', 'O'] /* Vendor prefixes */
    , animations = {} /* Animation rules keyed by their name */
    , useCssAnimations

  /**
   * Utility function to create elements. If no tag name is given,
   * a DIV is created. Optionally properties can be passed.
   */
  function createEl(tag, prop) {
    var el = document.createElement(tag || 'div')
      , n

    for(n in prop) el[n] = prop[n]
    return el
  }

  /**
   * Appends children and returns the parent.
   */
  function ins(parent /* child1, child2, ...*/) {
    for (var i=1, n=arguments.length; i<n; i++)
      parent.appendChild(arguments[i])

    return parent
  }

  /**
   * Insert a new stylesheet to hold the @keyframe or VML rules.
   */
  var sheet = function() {
    var el = createEl('style', {type : 'text/css'})
    ins(document.getElementsByTagName('head')[0], el)
    return el.sheet || el.styleSheet
  }()

  /**
   * Creates an opacity keyframe animation rule and returns its name.
   * Since most mobile Webkits have timing issues with animation-delay,
   * we create separate rules for each line/segment.
   */
  function addAnimation(alpha, trail, i, lines) {
    var name = ['opacity', trail, ~~(alpha*100), i, lines].join('-')
      , start = 0.01 + i/lines*100
      , z = Math.max(1 - (1-alpha) / trail * (100-start), alpha)
      , prefix = useCssAnimations.substring(0, useCssAnimations.indexOf('Animation')).toLowerCase()
      , pre = prefix && '-'+prefix+'-' || ''

    if (!animations[name]) {
      sheet.insertRule(
        '@' + pre + 'keyframes ' + name + '{' +
        '0%{opacity:' + z + '}' +
        start + '%{opacity:' + alpha + '}' +
        (start+0.01) + '%{opacity:1}' +
        (start+trail) % 100 + '%{opacity:' + alpha + '}' +
        '100%{opacity:' + z + '}' +
        '}', sheet.cssRules.length)

      animations[name] = 1
    }
    return name
  }

  /**
   * Tries various vendor prefixes and returns the first supported property.
   **/
  function vendor(el, prop) {
    var s = el.style
      , pp
      , i

    if(s[prop] !== undefined) return prop
    prop = prop.charAt(0).toUpperCase() + prop.slice(1)
    for(i=0; i<prefixes.length; i++) {
      pp = prefixes[i]+prop
      if(s[pp] !== undefined) return pp
    }
  }

  /**
   * Sets multiple style properties at once.
   */
  function css(el, prop) {
    for (var n in prop)
      el.style[vendor(el, n)||n] = prop[n]

    return el
  }

  /**
   * Fills in default values.
   */
  function merge(obj) {
    for (var i=1; i < arguments.length; i++) {
      var def = arguments[i]
      for (var n in def)
        if (obj[n] === undefined) obj[n] = def[n]
    }
    return obj
  }

  /**
   * Returns the absolute page-offset of the given element.
   */
  function pos(el) {
    var o = { x:el.offsetLeft, y:el.offsetTop }
    while((el = el.offsetParent))
      o.x+=el.offsetLeft, o.y+=el.offsetTop

    return o
  }

  var defaults = {
    lines: 12,            // The number of lines to draw
    length: 7,            // The length of each line
    width: 5,             // The line thickness
    radius: 10,           // The radius of the inner circle
    rotate: 0,            // Rotation offset
    corners: 1,           // Roundness (0..1)
    color: '#000',        // #rgb or #rrggbb
    speed: 1,             // Rounds per second
    trail: 100,           // Afterglow percentage
    opacity: 1/4,         // Opacity of the lines
    fps: 20,              // Frames per second when using setTimeout()
    zIndex: 2e9,          // Use a high z-index by default
    className: 'spinner', // CSS class to assign to the element
    top: 'auto',          // center vertically
    left: 'auto',         // center horizontally
    position: 'relative'  // element position
  }

  /** The constructor */
  function Spinner(o) {
    if (!this.spin) return new Spinner(o)
    this.opts = merge(o || {}, Spinner.defaults, defaults)
  }

  Spinner.defaults = {}

  merge(Spinner.prototype, {
    spin: function(target) {
      this.stop()
      var self = this
        , o = self.opts
        , el = self.el = css(createEl(0, {className: o.className}), {position: o.position, width: 0, zIndex: o.zIndex})
        , mid = o.radius+o.length+o.width
        , ep // element position
        , tp // target position

      if (target) {
        target.insertBefore(el, target.firstChild||null)
        tp = pos(target)
        ep = pos(el)
        css(el, {
          left: (o.left == 'auto' ? tp.x-ep.x + (target.offsetWidth >> 1) : parseInt(o.left, 10) + mid) + 'px',
          top: (o.top == 'auto' ? tp.y-ep.y + (target.offsetHeight >> 1) : parseInt(o.top, 10) + mid)  + 'px'
        })
      }

      el.setAttribute('aria-role', 'progressbar')
      self.lines(el, self.opts)

      if (!useCssAnimations) {
        // No CSS animation support, use setTimeout() instead
        var i = 0
          , fps = o.fps
          , f = fps/o.speed
          , ostep = (1-o.opacity) / (f*o.trail / 100)
          , astep = f/o.lines

        ;(function anim() {
          i++;
          for (var s=o.lines; s; s--) {
            var alpha = Math.max(1-(i+s*astep)%f * ostep, o.opacity)
            self.opacity(el, o.lines-s, alpha, o)
          }
          self.timeout = self.el && setTimeout(anim, ~~(1000/fps))
        })()
      }
      return self
    },

    stop: function() {
      var el = this.el
      if (el) {
        clearTimeout(this.timeout)
        if (el.parentNode) el.parentNode.removeChild(el)
        this.el = undefined
      }
      return this
    },

    lines: function(el, o) {
      var i = 0
        , seg

      function fill(color, shadow) {
        return css(createEl(), {
          position: 'absolute',
          width: (o.length+o.width) + 'px',
          height: o.width + 'px',
          background: color,
          boxShadow: shadow,
          transformOrigin: 'left',
          transform: 'rotate(' + ~~(360/o.lines*i+o.rotate) + 'deg) translate(' + o.radius+'px' +',0)',
          borderRadius: (o.corners * o.width>>1) + 'px'
        })
      }

      for (; i < o.lines; i++) {
        seg = css(createEl(), {
          position: 'absolute',
          top: 1+~(o.width/2) + 'px',
          transform: o.hwaccel ? 'translate3d(0,0,0)' : '',
          opacity: o.opacity,
          animation: useCssAnimations && addAnimation(o.opacity, o.trail, i, o.lines) + ' ' + 1/o.speed + 's linear infinite'
        })

        if (o.shadow) ins(seg, css(fill('#000', '0 0 4px ' + '#000'), {top: 2+'px'}))

        ins(el, ins(seg, fill(o.color, '0 0 1px rgba(0,0,0,.1)')))
      }
      return el
    },

    opacity: function(el, i, val) {
      if (i < el.childNodes.length) el.childNodes[i].style.opacity = val
    }

  })

  /////////////////////////////////////////////////////////////////////////
  // VML rendering for IE
  /////////////////////////////////////////////////////////////////////////

  /**
   * Check and init VML support
   */
  ;(function() {

    function vml(tag, attr) {
      return createEl('<' + tag + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', attr)
    }

    var s = css(createEl('group'), {behavior: 'url(#default#VML)'})

    if (!vendor(s, 'transform') && s.adj) {

      // VML support detected. Insert CSS rule ...
      sheet.addRule('.spin-vml', 'behavior:url(#default#VML)')

      Spinner.prototype.lines = function(el, o) {
        var r = o.length+o.width
          , s = 2*r

        function grp() {
          return css(
            vml('group', {
              coordsize: s + ' ' + s,
              coordorigin: -r + ' ' + -r
            }),
            { width: s, height: s }
          )
        }

        var margin = -(o.width+o.length)*2 + 'px'
          , g = css(grp(), {position: 'absolute', top: margin, left: margin})
          , i

        function seg(i, dx, filter) {
          ins(g,
            ins(css(grp(), {rotation: 360 / o.lines * i + 'deg', left: ~~dx}),
              ins(css(vml('roundrect', {arcsize: o.corners}), {
                  width: r,
                  height: o.width,
                  left: o.radius,
                  top: -o.width>>1,
                  filter: filter
                }),
                vml('fill', {color: o.color, opacity: o.opacity}),
                vml('stroke', {opacity: 0}) // transparent stroke to fix color bleeding upon opacity change
              )
            )
          )
        }

        if (o.shadow)
          for (i = 1; i <= o.lines; i++)
            seg(i, -2, 'progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)')

        for (i = 1; i <= o.lines; i++) seg(i)
        return ins(el, g)
      }

      Spinner.prototype.opacity = function(el, i, val, o) {
        var c = el.firstChild
        o = o.shadow && o.lines || 0
        if (c && i+o < c.childNodes.length) {
          c = c.childNodes[i+o]; c = c && c.firstChild; c = c && c.firstChild
          if (c) c.opacity = val
        }
      }
    }
    else
      useCssAnimations = vendor(s, 'animation')
  })()

  if (typeof define == 'function' && define.amd)
    define(function() { return Spinner })
  else
    window.Spinner = Spinner

}(window, document);

/** @license


 SoundManager 2: JavaScript Sound for the Web
 ----------------------------------------------
 http://schillmania.com/projects/soundmanager2/

 Copyright (c) 2007, Scott Schiller. All rights reserved.
 Code provided under the BSD License:
 http://schillmania.com/projects/soundmanager2/license.txt

 V2.97a.20130101
*/
(function(j,g){function aa(aa,pa){function ba(a){return c.preferFlash&&z&&!c.ignoreFlash&&c.flash[a]!==g&&c.flash[a]}function q(a){return function(d){var e=this._s;!e||!e._a?(e&&e.id?c._wD(e.id+": Ignoring "+d.type):c._wD(pb+"Ignoring "+d.type),d=null):d=a.call(this,d);return d}}this.setupOptions={url:aa||null,flashVersion:8,debugMode:!0,debugFlash:!1,useConsole:!0,consoleOnly:!0,waitForWindowLoad:!1,bgColor:"#ffffff",useHighPerformance:!1,flashPollingInterval:null,html5PollingInterval:null,flashLoadTimeout:1E3,
wmode:null,allowScriptAccess:"always",useFlashBlock:!1,useHTML5Audio:!0,html5Test:/^(probably|maybe)$/i,preferFlash:!0,noSWFCache:!1};this.defaultOptions={autoLoad:!1,autoPlay:!1,from:null,loops:1,onid3:null,onload:null,whileloading:null,onplay:null,onpause:null,onresume:null,whileplaying:null,onposition:null,onstop:null,onfailure:null,onfinish:null,multiShot:!0,multiShotEvents:!1,position:null,pan:0,stream:!0,to:null,type:null,usePolicyFile:!1,volume:100};this.flash9Options={isMovieStar:null,usePeakData:!1,
useWaveformData:!1,useEQData:!1,onbufferchange:null,ondataerror:null};this.movieStarOptions={bufferTime:3,serverURL:null,onconnect:null,duration:null};this.audioFormats={mp3:{type:['audio/mpeg; codecs="mp3"',"audio/mpeg","audio/mp3","audio/MPA","audio/mpa-robust"],required:!0},mp4:{related:["aac","m4a","m4b"],type:['audio/mp4; codecs="mp4a.40.2"',"audio/aac","audio/x-m4a","audio/MP4A-LATM","audio/mpeg4-generic"],required:!1},ogg:{type:["audio/ogg; codecs=vorbis"],required:!1},wav:{type:['audio/wav; codecs="1"',
"audio/wav","audio/wave","audio/x-wav"],required:!1}};this.movieID="sm2-container";this.id=pa||"sm2movie";this.debugID="soundmanager-debug";this.debugURLParam=/([#?&])debug=1/i;this.versionNumber="V2.97a.20130101";this.altURL=this.movieURL=this.version=null;this.enabled=this.swfLoaded=!1;this.oMC=null;this.sounds={};this.soundIDs=[];this.didFlashBlock=this.muted=!1;this.filePattern=null;this.filePatterns={flash8:/\.mp3(\?.*)?$/i,flash9:/\.mp3(\?.*)?$/i};this.features={buffering:!1,peakData:!1,waveformData:!1,
eqData:!1,movieStar:!1};this.sandbox={type:null,types:{remote:"remote (domain-based) rules",localWithFile:"local with file access (no internet access)",localWithNetwork:"local with network (internet access only, no local access)",localTrusted:"local, trusted (local+internet access)"},description:null,noRemote:null,noLocal:null};this.html5={usingFlash:null};this.flash={};this.ignoreFlash=this.html5Only=!1;var Pa,c=this,Qa=null,i=null,pb="HTML5::",A,s=navigator.userAgent,R=j.location.href.toString(),
h=document,qa,Ra,ra,l,C=[],sa=!0,x,S=!1,T=!1,n=!1,r=!1,ca=!1,k,qb=0,U,v,ta,K,ua,I,L,M,Sa,va,da,F,ea,wa,N,xa,V,fa,ga,O,Ta,ya,Ua=["log","info","warn","error"],Va,za,Wa,W=null,Aa=null,p,Ba,P,Xa,ha,ia,Q,t,X=!1,Ca=!1,Ya,Za,$a,ja=0,Y=null,ka,J=[],B=null,ab,la,Z,G,Da,Ea,bb,u,cb=Array.prototype.slice,D=!1,Fa,z,Ga,db,E,eb,Ha,ma=s.match(/(ipad|iphone|ipod)/i),fb=s.match(/android/i),H=s.match(/msie/i),rb=s.match(/webkit/i),Ia=s.match(/safari/i)&&!s.match(/chrome/i),Ja=s.match(/opera/i),Ka=s.match(/(mobile|pre\/|xoom)/i)||
ma||fb,La=!R.match(/usehtml5audio/i)&&!R.match(/sm2\-ignorebadua/i)&&Ia&&!s.match(/silk/i)&&s.match(/OS X 10_6_([3-7])/i),gb=j.console!==g&&console.log!==g,Ma=h.hasFocus!==g?h.hasFocus():null,na=Ia&&(h.hasFocus===g||!h.hasFocus()),hb=!na,ib=/(mp3|mp4|mpa|m4a|m4b)/i,$=h.location?h.location.protocol.match(/http/i):null,jb=!$?"http://":"",kb=/^\s*audio\/(?:x-)?(?:mpeg4|aac|flv|mov|mp4||m4v|m4a|m4b|mp4v|3gp|3g2)\s*(?:$|;)/i,lb="mpeg4 aac flv mov mp4 m4v f4v m4a m4b mp4v 3gp 3g2".split(" "),sb=RegExp("\\.("+
lb.join("|")+")(\\?.*)?$","i");this.mimePattern=/^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i;this.useAltURL=!$;var Na;try{Na=Audio!==g&&(Ja&&opera!==g&&10>opera.version()?new Audio(null):new Audio).canPlayType!==g}catch(ub){Na=!1}this.hasHTML5=Na;this.setup=function(a){var d=!c.url;a!==g&&(n&&B&&c.ok()&&(a.flashVersion!==g||a.url!==g||a.html5Test!==g))&&Q(p("setupLate"));ta(a);d&&(V&&a.url!==g)&&c.beginDelayedInit();!V&&(a.url!==g&&"complete"===h.readyState)&&setTimeout(N,1);return c};this.supported=
this.ok=function(){return B?n&&!r:c.useHTML5Audio&&c.hasHTML5};this.getMovie=function(c){return A(c)||h[c]||j[c]};this.createSound=function(a,d){function e(){f=ha(f);c.sounds[f.id]=new Pa(f);c.soundIDs.push(f.id);return c.sounds[f.id]}var b,f;b=null;b="soundManager.createSound(): "+p(!n?"notReady":"notOK");if(!n||!c.ok())return Q(b),!1;d!==g&&(a={id:a,url:d});f=v(a);f.url=ka(f.url);f.id.toString().charAt(0).match(/^[0-9]$/)&&c._wD("soundManager.createSound(): "+p("badID",f.id),2);c._wD("soundManager.createSound(): "+
f.id+" ("+f.url+")",1);if(t(f.id,!0))return c._wD("soundManager.createSound(): "+f.id+" exists",1),c.sounds[f.id];la(f)?(b=e(),c._wD(f.id+": Using HTML5"),b._setup_html5(f)):(8<l&&(null===f.isMovieStar&&(f.isMovieStar=!(!f.serverURL&&!(f.type&&f.type.match(kb)||f.url.match(sb)))),f.isMovieStar&&(c._wD("soundManager.createSound(): using MovieStar handling"),1<f.loops&&k("noNSLoop"))),f=ia(f,"soundManager.createSound(): "),b=e(),8===l?i._createSound(f.id,f.loops||1,f.usePolicyFile):(i._createSound(f.id,
f.url,f.usePeakData,f.useWaveformData,f.useEQData,f.isMovieStar,f.isMovieStar?f.bufferTime:!1,f.loops||1,f.serverURL,f.duration||null,f.autoPlay,!0,f.autoLoad,f.usePolicyFile),f.serverURL||(b.connected=!0,f.onconnect&&f.onconnect.apply(b))),!f.serverURL&&(f.autoLoad||f.autoPlay)&&b.load(f));!f.serverURL&&f.autoPlay&&b.play();return b};this.destroySound=function(a,d){if(!t(a))return!1;var e=c.sounds[a],b;e._iO={};e.stop();e.unload();for(b=0;b<c.soundIDs.length;b++)if(c.soundIDs[b]===a){c.soundIDs.splice(b,
1);break}d||e.destruct(!0);delete c.sounds[a];return!0};this.load=function(a,d){return!t(a)?!1:c.sounds[a].load(d)};this.unload=function(a){return!t(a)?!1:c.sounds[a].unload()};this.onposition=this.onPosition=function(a,d,e,b){return!t(a)?!1:c.sounds[a].onposition(d,e,b)};this.clearOnPosition=function(a,d,e){return!t(a)?!1:c.sounds[a].clearOnPosition(d,e)};this.start=this.play=function(a,d){var e=!1;return!n||!c.ok()?(Q("soundManager.play(): "+p(!n?"notReady":"notOK")),e):!t(a)?(d instanceof Object||
(d={url:d}),d&&d.url&&(c._wD('soundManager.play(): attempting to create "'+a+'"',1),d.id=a,e=c.createSound(d).play()),e):c.sounds[a].play(d)};this.setPosition=function(a,d){return!t(a)?!1:c.sounds[a].setPosition(d)};this.stop=function(a){if(!t(a))return!1;c._wD("soundManager.stop("+a+")",1);return c.sounds[a].stop()};this.stopAll=function(){var a;c._wD("soundManager.stopAll()",1);for(a in c.sounds)c.sounds.hasOwnProperty(a)&&c.sounds[a].stop()};this.pause=function(a){return!t(a)?!1:c.sounds[a].pause()};
this.pauseAll=function(){var a;for(a=c.soundIDs.length-1;0<=a;a--)c.sounds[c.soundIDs[a]].pause()};this.resume=function(a){return!t(a)?!1:c.sounds[a].resume()};this.resumeAll=function(){var a;for(a=c.soundIDs.length-1;0<=a;a--)c.sounds[c.soundIDs[a]].resume()};this.togglePause=function(a){return!t(a)?!1:c.sounds[a].togglePause()};this.setPan=function(a,d){return!t(a)?!1:c.sounds[a].setPan(d)};this.setVolume=function(a,d){return!t(a)?!1:c.sounds[a].setVolume(d)};this.mute=function(a){var d=0;a instanceof
String&&(a=null);if(a){if(!t(a))return!1;c._wD('soundManager.mute(): Muting "'+a+'"');return c.sounds[a].mute()}c._wD("soundManager.mute(): Muting all sounds");for(d=c.soundIDs.length-1;0<=d;d--)c.sounds[c.soundIDs[d]].mute();return c.muted=!0};this.muteAll=function(){c.mute()};this.unmute=function(a){a instanceof String&&(a=null);if(a){if(!t(a))return!1;c._wD('soundManager.unmute(): Unmuting "'+a+'"');return c.sounds[a].unmute()}c._wD("soundManager.unmute(): Unmuting all sounds");for(a=c.soundIDs.length-
1;0<=a;a--)c.sounds[c.soundIDs[a]].unmute();c.muted=!1;return!0};this.unmuteAll=function(){c.unmute()};this.toggleMute=function(a){return!t(a)?!1:c.sounds[a].toggleMute()};this.getMemoryUse=function(){var c=0;i&&8!==l&&(c=parseInt(i._getMemoryUse(),10));return c};this.disable=function(a){var d;a===g&&(a=!1);if(r)return!1;r=!0;k("shutdown",1);for(d=c.soundIDs.length-1;0<=d;d--)Va(c.sounds[c.soundIDs[d]]);U(a);u.remove(j,"load",L);return!0};this.canPlayMIME=function(a){var d;c.hasHTML5&&(d=Z({type:a}));
!d&&B&&(d=a&&c.ok()?!!(8<l&&a.match(kb)||a.match(c.mimePattern)):null);return d};this.canPlayURL=function(a){var d;c.hasHTML5&&(d=Z({url:a}));!d&&B&&(d=a&&c.ok()?!!a.match(c.filePattern):null);return d};this.canPlayLink=function(a){return a.type!==g&&a.type&&c.canPlayMIME(a.type)?!0:c.canPlayURL(a.href)};this.getSoundById=function(a,d){if(!a)throw Error("soundManager.getSoundById(): sID is null/_undefined");var e=c.sounds[a];!e&&!d&&c._wD('"'+a+'" is an invalid sound ID.',2);return e};this.onready=
function(a,d){if("function"===typeof a)n&&c._wD(p("queue","onready")),d||(d=j),ua("onready",a,d),I();else throw p("needFunction","onready");return!0};this.ontimeout=function(a,d){if("function"===typeof a)n&&c._wD(p("queue","ontimeout")),d||(d=j),ua("ontimeout",a,d),I({type:"ontimeout"});else throw p("needFunction","ontimeout");return!0};this._writeDebug=function(a,d){var e,b;if(!c.debugMode)return!1;if(gb&&c.useConsole){if(d&&"object"===typeof d)console.log(a,d);else if(Ua[d]!==g)console[Ua[d]](a);
else console.log(a);if(c.consoleOnly)return!0}e=A("soundmanager-debug");if(!e)return!1;b=h.createElement("div");0===++qb%2&&(b.className="sm2-alt");d=d===g?0:parseInt(d,10);b.appendChild(h.createTextNode(a));d&&(2<=d&&(b.style.fontWeight="bold"),3===d&&(b.style.color="#ff3333"));e.insertBefore(b,e.firstChild);return!0};-1!==R.indexOf("sm2-debug=alert")&&(this._writeDebug=function(c){j.alert(c)});this._wD=this._writeDebug;this._debug=function(){var a,d;k("currentObj",1);a=0;for(d=c.soundIDs.length;a<
d;a++)c.sounds[c.soundIDs[a]]._debug()};this.reboot=function(a,d){c.soundIDs.length&&c._wD("Destroying "+c.soundIDs.length+" SMSound objects...");var e,b,f;for(e=c.soundIDs.length-1;0<=e;e--)c.sounds[c.soundIDs[e]].destruct();if(i)try{H&&(Aa=i.innerHTML),W=i.parentNode.removeChild(i),k("flRemoved")}catch(g){k("badRemove",2)}Aa=W=B=i=null;c.enabled=V=n=X=Ca=S=T=r=D=c.swfLoaded=!1;c.soundIDs=[];c.sounds={};if(a)C=[];else for(e in C)if(C.hasOwnProperty(e)){b=0;for(f=C[e].length;b<f;b++)C[e][b].fired=
!1}d||c._wD("soundManager: Rebooting...");c.html5={usingFlash:null};c.flash={};c.html5Only=!1;c.ignoreFlash=!1;j.setTimeout(function(){wa();d||c.beginDelayedInit()},20);return c};this.reset=function(){k("reset");return c.reboot(!0,!0)};this.getMoviePercent=function(){return i&&"PercentLoaded"in i?i.PercentLoaded():null};this.beginDelayedInit=function(){ca=!0;N();setTimeout(function(){if(Ca)return!1;ga();ea();return Ca=!0},20);M()};this.destruct=function(){c._wD("soundManager.destruct()");c.disable(!0)};
Pa=function(a){var d,e,b=this,f,j,mb,m,h,n,q=!1,y=[],s=0,Oa,u,r=null;e=d=null;this.sID=this.id=a.id;this.url=a.url;this._iO=this.instanceOptions=this.options=v(a);this.pan=this.options.pan;this.volume=this.options.volume;this.isHTML5=!1;this._a=null;this.id3={};this._debug=function(){c._wD(b.id+": Merged options:",b.options)};this.load=function(a){var d=null;a!==g?b._iO=v(a,b.options):(a=b.options,b._iO=a,r&&r!==b.url&&(k("manURL"),b._iO.url=b.url,b.url=null));b._iO.url||(b._iO.url=b.url);b._iO.url=
ka(b._iO.url);a=b.instanceOptions=b._iO;c._wD(b.id+": load ("+a.url+")");if(a.url===b.url&&0!==b.readyState&&2!==b.readyState)return k("onURL",1),3===b.readyState&&a.onload&&a.onload.apply(b,[!!b.duration]),b;b.loaded=!1;b.readyState=1;b.playState=0;b.id3={};if(la(a))d=b._setup_html5(a),d._called_load?c._wD(b.id+": Ignoring request to load again"):(b._html5_canplay=!1,b.url!==a.url&&(c._wD(k("manURL")+": "+a.url),b._a.src=a.url,b.setPosition(0)),b._a.autobuffer="auto",b._a.preload="auto",b._a._called_load=
!0,a.autoPlay&&b.play());else try{b.isHTML5=!1,b._iO=ia(ha(a)),a=b._iO,8===l?i._load(b.id,a.url,a.stream,a.autoPlay,a.usePolicyFile):i._load(b.id,a.url,!!a.stream,!!a.autoPlay,a.loops||1,!!a.autoLoad,a.usePolicyFile)}catch(e){k("smError",2),x("onload",!1),O({type:"SMSOUND_LOAD_JS_EXCEPTION",fatal:!0})}b.url=a.url;return b};this.unload=function(){0!==b.readyState&&(c._wD(b.id+": unload()"),b.isHTML5?(m(),b._a&&(b._a.pause(),Da(b._a,"about:blank"),r="about:blank")):8===l?i._unload(b.id,"about:blank"):
i._unload(b.id),f());return b};this.destruct=function(a){c._wD(b.id+": Destruct");b.isHTML5?(m(),b._a&&(b._a.pause(),Da(b._a),D||mb(),b._a._s=null,b._a=null)):(b._iO.onfailure=null,i._destroySound(b.id));a||c.destroySound(b.id,!0)};this.start=this.play=function(a,d){var e,f,w=!0,w=null;e=b.id+": play(): ";d=d===g?!0:d;a||(a={});b.url&&(b._iO.url=b.url);b._iO=v(b._iO,b.options);b._iO=v(a,b._iO);b._iO.url=ka(b._iO.url);b.instanceOptions=b._iO;if(b._iO.serverURL&&!b.connected)return b.getAutoPlay()||
(c._wD(e+" Netstream not connected yet - setting autoPlay"),b.setAutoPlay(!0)),b;la(b._iO)&&(b._setup_html5(b._iO),h());1===b.playState&&!b.paused&&((f=b._iO.multiShot)?c._wD(e+"Already playing (multi-shot)",1):(c._wD(e+"Already playing (one-shot)",1),w=b));if(null!==w)return w;a.url&&a.url!==b.url&&b.load(b._iO);b.loaded?c._wD(e):0===b.readyState?(c._wD(e+"Attempting to load"),b.isHTML5||(b._iO.autoPlay=!0),b.load(b._iO),b.instanceOptions=b._iO):2===b.readyState?(c._wD(e+"Could not load - exiting",
2),w=b):c._wD(e+"Loading - attempting to play...");if(null!==w)return w;!b.isHTML5&&(9===l&&0<b.position&&b.position===b.duration)&&(c._wD(e+"Sound at end, resetting to position:0"),a.position=0);if(b.paused&&0<=b.position&&(!b._iO.serverURL||0<b.position))c._wD(e+"Resuming from paused state",1),b.resume();else{b._iO=v(a,b._iO);if(null!==b._iO.from&&null!==b._iO.to&&0===b.instanceCount&&0===b.playState&&!b._iO.serverURL){f=function(){b._iO=v(a,b._iO);b.play(b._iO)};if(b.isHTML5&&!b._html5_canplay)c._wD(e+
"Beginning load for from/to case"),b.load({oncanplay:f}),w=!1;else if(!b.isHTML5&&!b.loaded&&(!b.readyState||2!==b.readyState))c._wD(e+"Preloading for from/to case"),b.load({onload:f}),w=!1;if(null!==w)return w;b._iO=u()}c._wD(e+"Starting to play");(!b.instanceCount||b._iO.multiShotEvents||!b.isHTML5&&8<l&&!b.getAutoPlay())&&b.instanceCount++;b._iO.onposition&&0===b.playState&&n(b);b.playState=1;b.paused=!1;b.position=b._iO.position!==g&&!isNaN(b._iO.position)?b._iO.position:0;b.isHTML5||(b._iO=ia(ha(b._iO)));
b._iO.onplay&&d&&(b._iO.onplay.apply(b),q=!0);b.setVolume(b._iO.volume,!0);b.setPan(b._iO.pan,!0);b.isHTML5?(h(),e=b._setup_html5(),b.setPosition(b._iO.position),e.play()):(w=i._start(b.id,b._iO.loops||1,9===l?b._iO.position:b._iO.position/1E3,b._iO.multiShot),9===l&&!w&&(c._wD(e+"No sound hardware, or 32-sound ceiling hit"),b._iO.onplayerror&&b._iO.onplayerror.apply(b)))}return b};this.stop=function(a){var d=b._iO;1===b.playState&&(c._wD(b.id+": stop()"),b._onbufferchange(0),b._resetOnPosition(0),
b.paused=!1,b.isHTML5||(b.playState=0),Oa(),d.to&&b.clearOnPosition(d.to),b.isHTML5?b._a&&(a=b.position,b.setPosition(0),b.position=a,b._a.pause(),b.playState=0,b._onTimer(),m()):(i._stop(b.id,a),d.serverURL&&b.unload()),b.instanceCount=0,b._iO={},d.onstop&&d.onstop.apply(b));return b};this.setAutoPlay=function(a){c._wD(b.id+": Autoplay turned "+(a?"on":"off"));b._iO.autoPlay=a;b.isHTML5||(i._setAutoPlay(b.id,a),a&&(!b.instanceCount&&1===b.readyState)&&(b.instanceCount++,c._wD(b.id+": Incremented instance count to "+
b.instanceCount)))};this.getAutoPlay=function(){return b._iO.autoPlay};this.setPosition=function(a){a===g&&(a=0);var d=b.isHTML5?Math.max(a,0):Math.min(b.duration||b._iO.duration,Math.max(a,0));b.position=d;a=b.position/1E3;b._resetOnPosition(b.position);b._iO.position=d;if(b.isHTML5){if(b._a)if(b._html5_canplay){if(b._a.currentTime!==a){c._wD(b.id+": setPosition("+a+")");try{b._a.currentTime=a,(0===b.playState||b.paused)&&b._a.pause()}catch(e){c._wD(b.id+": setPosition("+a+") failed: "+e.message,
2)}}}else c._wD(b.id+": setPosition("+a+"): Cannot seek yet, sound not ready")}else a=9===l?b.position:a,b.readyState&&2!==b.readyState&&i._setPosition(b.id,a,b.paused||!b.playState,b._iO.multiShot);b.isHTML5&&b.paused&&b._onTimer(!0);return b};this.pause=function(a){if(b.paused||0===b.playState&&1!==b.readyState)return b;c._wD(b.id+": pause()");b.paused=!0;b.isHTML5?(b._setup_html5().pause(),m()):(a||a===g)&&i._pause(b.id,b._iO.multiShot);b._iO.onpause&&b._iO.onpause.apply(b);return b};this.resume=
function(){var a=b._iO;if(!b.paused)return b;c._wD(b.id+": resume()");b.paused=!1;b.playState=1;b.isHTML5?(b._setup_html5().play(),h()):(a.isMovieStar&&!a.serverURL&&b.setPosition(b.position),i._pause(b.id,a.multiShot));!q&&a.onplay?(a.onplay.apply(b),q=!0):a.onresume&&a.onresume.apply(b);return b};this.togglePause=function(){c._wD(b.id+": togglePause()");if(0===b.playState)return b.play({position:9===l&&!b.isHTML5?b.position:b.position/1E3}),b;b.paused?b.resume():b.pause();return b};this.setPan=
function(a,c){a===g&&(a=0);c===g&&(c=!1);b.isHTML5||i._setPan(b.id,a);b._iO.pan=a;c||(b.pan=a,b.options.pan=a);return b};this.setVolume=function(a,d){a===g&&(a=100);d===g&&(d=!1);b.isHTML5?b._a&&(b._a.volume=Math.max(0,Math.min(1,a/100))):i._setVolume(b.id,c.muted&&!b.muted||b.muted?0:a);b._iO.volume=a;d||(b.volume=a,b.options.volume=a);return b};this.mute=function(){b.muted=!0;b.isHTML5?b._a&&(b._a.muted=!0):i._setVolume(b.id,0);return b};this.unmute=function(){b.muted=!1;var a=b._iO.volume!==g;
b.isHTML5?b._a&&(b._a.muted=!1):i._setVolume(b.id,a?b._iO.volume:b.options.volume);return b};this.toggleMute=function(){return b.muted?b.unmute():b.mute()};this.onposition=this.onPosition=function(a,c,d){y.push({position:parseInt(a,10),method:c,scope:d!==g?d:b,fired:!1});return b};this.clearOnPosition=function(b,a){var c,b=parseInt(b,10);if(isNaN(b))return!1;for(c=0;c<y.length;c++)if(b===y[c].position&&(!a||a===y[c].method))y[c].fired&&s--,y.splice(c,1)};this._processOnPosition=function(){var a,c;
a=y.length;if(!a||!b.playState||s>=a)return!1;for(a-=1;0<=a;a--)c=y[a],!c.fired&&b.position>=c.position&&(c.fired=!0,s++,c.method.apply(c.scope,[c.position]));return!0};this._resetOnPosition=function(b){var a,c;a=y.length;if(!a)return!1;for(a-=1;0<=a;a--)c=y[a],c.fired&&b<=c.position&&(c.fired=!1,s--);return!0};u=function(){var a=b._iO,d=a.from,e=a.to,f,g;g=function(){c._wD(b.id+': "To" time of '+e+" reached.");b.clearOnPosition(e,g);b.stop()};f=function(){c._wD(b.id+': Playing "from" '+d);if(null!==
e&&!isNaN(e))b.onPosition(e,g)};null!==d&&!isNaN(d)&&(a.position=d,a.multiShot=!1,f());return a};n=function(){var a,c=b._iO.onposition;if(c)for(a in c)if(c.hasOwnProperty(a))b.onPosition(parseInt(a,10),c[a])};Oa=function(){var a,c=b._iO.onposition;if(c)for(a in c)c.hasOwnProperty(a)&&b.clearOnPosition(parseInt(a,10))};h=function(){b.isHTML5&&Ya(b)};m=function(){b.isHTML5&&Za(b)};f=function(a){a||(y=[],s=0);q=!1;b._hasTimer=null;b._a=null;b._html5_canplay=!1;b.bytesLoaded=null;b.bytesTotal=null;b.duration=
b._iO&&b._iO.duration?b._iO.duration:null;b.durationEstimate=null;b.buffered=[];b.eqData=[];b.eqData.left=[];b.eqData.right=[];b.failures=0;b.isBuffering=!1;b.instanceOptions={};b.instanceCount=0;b.loaded=!1;b.metadata={};b.readyState=0;b.muted=!1;b.paused=!1;b.peakData={left:0,right:0};b.waveformData={left:[],right:[]};b.playState=0;b.position=null;b.id3={}};f();this._onTimer=function(a){var c,f=!1,g={};if(b._hasTimer||a){if(b._a&&(a||(0<b.playState||1===b.readyState)&&!b.paused))c=b._get_html5_duration(),
c!==d&&(d=c,b.duration=c,f=!0),b.durationEstimate=b.duration,c=1E3*b._a.currentTime||0,c!==e&&(e=c,f=!0),(f||a)&&b._whileplaying(c,g,g,g,g);return f}};this._get_html5_duration=function(){var a=b._iO;return(a=b._a&&b._a.duration?1E3*b._a.duration:a&&a.duration?a.duration:null)&&!isNaN(a)&&Infinity!==a?a:null};this._apply_loop=function(b,a){!b.loop&&1<a&&c._wD("Note: Native HTML5 looping is infinite.",1);b.loop=1<a?"loop":""};this._setup_html5=function(a){var a=v(b._iO,a),c=decodeURI,d=D?Qa:b._a,e=
c(a.url),g;D?e===Fa&&(g=!0):e===r&&(g=!0);if(d){if(d._s)if(D)d._s&&(d._s.playState&&!g)&&d._s.stop();else if(!D&&e===c(r))return b._apply_loop(d,a.loops),d;g||(f(!1),d.src=a.url,Fa=r=b.url=a.url,d._called_load=!1)}else b._a=a.autoLoad||a.autoPlay?new Audio(a.url):Ja&&10>opera.version()?new Audio(null):new Audio,d=b._a,d._called_load=!1,D&&(Qa=d);b.isHTML5=!0;b._a=d;d._s=b;j();b._apply_loop(d,a.loops);a.autoLoad||a.autoPlay?b.load():(d.autobuffer=!1,d.preload="auto");return d};j=function(){if(b._a._added_events)return!1;
var a;b._a._added_events=!0;for(a in E)E.hasOwnProperty(a)&&b._a&&b._a.addEventListener(a,E[a],!1);return!0};mb=function(){var a;c._wD(b.id+": Removing event listeners");b._a._added_events=!1;for(a in E)E.hasOwnProperty(a)&&b._a&&b._a.removeEventListener(a,E[a],!1)};this._onload=function(a){var d=!!a||!b.isHTML5&&8===l&&b.duration,a=b.id+": ";c._wD(a+(d?"onload()":"Failed to load? - "+b.url),d?1:2);!d&&!b.isHTML5&&(!0===c.sandbox.noRemote&&c._wD(a+p("noNet"),1),!0===c.sandbox.noLocal&&c._wD(a+p("noLocal"),
1));b.loaded=d;b.readyState=d?3:2;b._onbufferchange(0);b._iO.onload&&b._iO.onload.apply(b,[d]);return!0};this._onbufferchange=function(a){if(0===b.playState||a&&b.isBuffering||!a&&!b.isBuffering)return!1;b.isBuffering=1===a;b._iO.onbufferchange&&(c._wD(b.id+": Buffer state change: "+a),b._iO.onbufferchange.apply(b));return!0};this._onsuspend=function(){b._iO.onsuspend&&(c._wD(b.id+": Playback suspended"),b._iO.onsuspend.apply(b));return!0};this._onfailure=function(a,d,e){b.failures++;c._wD(b.id+": Failures = "+
b.failures);if(b._iO.onfailure&&1===b.failures)b._iO.onfailure(b,a,d,e);else c._wD(b.id+": Ignoring failure")};this._onfinish=function(){var a=b._iO.onfinish;b._onbufferchange(0);b._resetOnPosition(0);if(b.instanceCount&&(b.instanceCount--,b.instanceCount||(Oa(),b.playState=0,b.paused=!1,b.instanceCount=0,b.instanceOptions={},b._iO={},m(),b.isHTML5&&(b.position=0)),(!b.instanceCount||b._iO.multiShotEvents)&&a))c._wD(b.id+": onfinish()"),a.apply(b)};this._whileloading=function(a,c,d,e){var f=b._iO;
b.bytesLoaded=a;b.bytesTotal=c;b.duration=Math.floor(d);b.bufferLength=e;b.durationEstimate=!b.isHTML5&&!f.isMovieStar?f.duration?b.duration>f.duration?b.duration:f.duration:parseInt(b.bytesTotal/b.bytesLoaded*b.duration,10):b.duration;b.isHTML5||(b.buffered=[{start:0,end:b.duration}]);(3!==b.readyState||b.isHTML5)&&f.whileloading&&f.whileloading.apply(b)};this._whileplaying=function(a,c,d,e,f){var m=b._iO;if(isNaN(a)||null===a)return!1;b.position=Math.max(0,a);b._processOnPosition();!b.isHTML5&&
8<l&&(m.usePeakData&&(c!==g&&c)&&(b.peakData={left:c.leftPeak,right:c.rightPeak}),m.useWaveformData&&(d!==g&&d)&&(b.waveformData={left:d.split(","),right:e.split(",")}),m.useEQData&&(f!==g&&f&&f.leftEQ)&&(a=f.leftEQ.split(","),b.eqData=a,b.eqData.left=a,f.rightEQ!==g&&f.rightEQ&&(b.eqData.right=f.rightEQ.split(","))));1===b.playState&&(!b.isHTML5&&(8===l&&!b.position&&b.isBuffering)&&b._onbufferchange(0),m.whileplaying&&m.whileplaying.apply(b));return!0};this._oncaptiondata=function(a){c._wD(b.id+
": Caption data received.");b.captiondata=a;b._iO.oncaptiondata&&b._iO.oncaptiondata.apply(b,[a])};this._onmetadata=function(a,d){c._wD(b.id+": Metadata received.");var e={},f,g;f=0;for(g=a.length;f<g;f++)e[a[f]]=d[f];b.metadata=e;b._iO.onmetadata&&b._iO.onmetadata.apply(b)};this._onid3=function(a,d){c._wD(b.id+": ID3 data received.");var e=[],f,g;f=0;for(g=a.length;f<g;f++)e[a[f]]=d[f];b.id3=v(b.id3,e);b._iO.onid3&&b._iO.onid3.apply(b)};this._onconnect=function(a){a=1===a;c._wD(b.id+": "+(a?"Connected.":
"Failed to connect? - "+b.url),a?1:2);if(b.connected=a)b.failures=0,t(b.id)&&(b.getAutoPlay()?b.play(g,b.getAutoPlay()):b._iO.autoLoad&&b.load()),b._iO.onconnect&&b._iO.onconnect.apply(b,[a])};this._ondataerror=function(a){0<b.playState&&(c._wD(b.id+": Data error: "+a),b._iO.ondataerror&&b._iO.ondataerror.apply(b))};this._debug()};fa=function(){return h.body||h._docElement||h.getElementsByTagName("div")[0]};A=function(a){return h.getElementById(a)};v=function(a,d){var e=a||{},b,f;b=d===g?c.defaultOptions:
d;for(f in b)b.hasOwnProperty(f)&&e[f]===g&&(e[f]="object"!==typeof b[f]||null===b[f]?b[f]:v(e[f],b[f]));return e};K={onready:1,ontimeout:1,defaultOptions:1,flash9Options:1,movieStarOptions:1};ta=function(a,d){var e,b=!0,f=d!==g,h=c.setupOptions;if(a===g){b=[];for(e in h)h.hasOwnProperty(e)&&b.push(e);for(e in K)K.hasOwnProperty(e)&&("object"===typeof c[e]?b.push(e+": {...}"):c[e]instanceof Function?b.push(e+": function() {...}"):b.push(e));c._wD(p("setup",b.join(", ")));return!1}for(e in a)if(a.hasOwnProperty(e))if("object"!==
typeof a[e]||null===a[e]||a[e]instanceof Array||a[e]instanceof RegExp)f&&K[d]!==g?c[d][e]=a[e]:h[e]!==g?(c.setupOptions[e]=a[e],c[e]=a[e]):K[e]===g?(Q(p(c[e]===g?"setupUndef":"setupError",e),2),b=!1):c[e]instanceof Function?c[e].apply(c,a[e]instanceof Array?a[e]:[a[e]]):c[e]=a[e];else if(K[e]===g)Q(p(c[e]===g?"setupUndef":"setupError",e),2),b=!1;else return ta(a[e],e);return b};var nb=function(a){var a=cb.call(a),c=a.length;oa?(a[1]="on"+a[1],3<c&&a.pop()):3===c&&a.push(!1);return a},ob=function(a,
c){var e=a.shift(),b=[tb[c]];if(oa)e[b](a[0],a[1]);else e[b].apply(e,a)},oa=j.attachEvent,tb={add:oa?"attachEvent":"addEventListener",remove:oa?"detachEvent":"removeEventListener"};u={add:function(){ob(nb(arguments),"add")},remove:function(){ob(nb(arguments),"remove")}};E={abort:q(function(){c._wD(this._s.id+": abort")}),canplay:q(function(){var a=this._s,d;if(a._html5_canplay)return!0;a._html5_canplay=!0;c._wD(a.id+": canplay");a._onbufferchange(0);d=a._iO.position!==g&&!isNaN(a._iO.position)?a._iO.position/
1E3:null;if(a.position&&this.currentTime!==d){c._wD(a.id+": canplay: Setting position to "+d);try{this.currentTime=d}catch(e){c._wD(a.id+": canplay: Setting position of "+d+" failed: "+e.message,2)}}a._iO._oncanplay&&a._iO._oncanplay()}),canplaythrough:q(function(){var a=this._s;a.loaded||(a._onbufferchange(0),a._whileloading(a.bytesLoaded,a.bytesTotal,a._get_html5_duration()),a._onload(!0))}),ended:q(function(){var a=this._s;c._wD(a.id+": ended");a._onfinish()}),error:q(function(){c._wD(this._s.id+
": HTML5 error, code "+this.error.code);this._s._onload(!1)}),loadeddata:q(function(){var a=this._s;c._wD(a.id+": loadeddata");!a._loaded&&!Ia&&(a.duration=a._get_html5_duration())}),loadedmetadata:q(function(){c._wD(this._s.id+": loadedmetadata")}),loadstart:q(function(){c._wD(this._s.id+": loadstart");this._s._onbufferchange(1)}),play:q(function(){c._wD(this._s.id+": play()");this._s._onbufferchange(0)}),playing:q(function(){c._wD(this._s.id+": playing");this._s._onbufferchange(0)}),progress:q(function(a){var d=
this._s,e,b,f;e=0;var g="progress"===a.type,h=a.target.buffered,m=a.loaded||0,j=a.total||1;d.buffered=[];if(h&&h.length){e=0;for(b=h.length;e<b;e++)d.buffered.push({start:1E3*h.start(e),end:1E3*h.end(e)});e=1E3*(h.end(0)-h.start(0));m=e/(1E3*a.target.duration);if(g&&1<h.length){f=[];b=h.length;for(e=0;e<b;e++)f.push(1E3*a.target.buffered.start(e)+"-"+1E3*a.target.buffered.end(e));c._wD(this._s.id+": progress, timeRanges: "+f.join(", "))}g&&!isNaN(m)&&c._wD(this._s.id+": progress, "+Math.floor(100*
m)+"% loaded")}isNaN(m)||(d._onbufferchange(0),d._whileloading(m,j,d._get_html5_duration()),m&&(j&&m===j)&&E.canplaythrough.call(this,a))}),ratechange:q(function(){c._wD(this._s.id+": ratechange")}),suspend:q(function(a){var d=this._s;c._wD(this._s.id+": suspend");E.progress.call(this,a);d._onsuspend()}),stalled:q(function(){c._wD(this._s.id+": stalled")}),timeupdate:q(function(){this._s._onTimer()}),waiting:q(function(){var a=this._s;c._wD(this._s.id+": waiting");a._onbufferchange(1)})};la=function(a){return a.serverURL||
a.type&&ba(a.type)?!1:a.type?Z({type:a.type}):Z({url:a.url})||c.html5Only};Da=function(a,c){a&&(a.src=c,a._called_load=!1);D&&(Fa=null)};Z=function(a){if(!c.useHTML5Audio||!c.hasHTML5)return!1;var d=a.url||null,a=a.type||null,e=c.audioFormats,b;if(a&&c.html5[a]!==g)return c.html5[a]&&!ba(a);if(!G){G=[];for(b in e)e.hasOwnProperty(b)&&(G.push(b),e[b].related&&(G=G.concat(e[b].related)));G=RegExp("\\.("+G.join("|")+")(\\?.*)?$","i")}b=d?d.toLowerCase().match(G):null;!b||!b.length?a&&(d=a.indexOf(";"),
b=(-1!==d?a.substr(0,d):a).substr(6)):b=b[1];b&&c.html5[b]!==g?d=c.html5[b]&&!ba(b):(a="audio/"+b,d=c.html5.canPlayType({type:a}),d=(c.html5[b]=d)&&c.html5[a]&&!ba(a));return d};bb=function(){function a(a){var b,e,f=b=!1;if(!d||"function"!==typeof d.canPlayType)return b;if(a instanceof Array){b=0;for(e=a.length;b<e;b++)if(c.html5[a[b]]||d.canPlayType(a[b]).match(c.html5Test))f=!0,c.html5[a[b]]=!0,c.flash[a[b]]=!!a[b].match(ib);b=f}else a=d&&"function"===typeof d.canPlayType?d.canPlayType(a):!1,b=
!(!a||!a.match(c.html5Test));return b}if(!c.useHTML5Audio||!c.hasHTML5)return!1;var d=Audio!==g?Ja&&10>opera.version()?new Audio(null):new Audio:null,e,b,f={},h;h=c.audioFormats;for(e in h)if(h.hasOwnProperty(e)&&(b="audio/"+e,f[e]=a(h[e].type),f[b]=f[e],e.match(ib)?(c.flash[e]=!0,c.flash[b]=!0):(c.flash[e]=!1,c.flash[b]=!1),h[e]&&h[e].related))for(b=h[e].related.length-1;0<=b;b--)f["audio/"+h[e].related[b]]=f[e],c.html5[h[e].related[b]]=f[e],c.flash[h[e].related[b]]=f[e];f.canPlayType=d?a:null;c.html5=
v(c.html5,f);return!0};F={notReady:"Unavailable - wait until onready() has fired.",notOK:"Audio support is not available.",domError:"soundManagerexception caught while appending SWF to DOM.",spcWmode:"Removing wmode, preventing known SWF loading issue(s)",swf404:"soundManager: Verify that %s is a valid path.",tryDebug:"Try soundManager.debugFlash = true for more security details (output goes to SWF.)",checkSWF:"See SWF output for more debug info.",localFail:"soundManager: Non-HTTP page ("+h.location.protocol+
" URL?) Review Flash player security settings for this special case:\nhttp://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html\nMay need to add/allow path, eg. c:/sm2/ or /users/me/sm2/",waitFocus:"soundManager: Special case: Waiting for SWF to load with window focus...",waitForever:"soundManager: Waiting indefinitely for Flash (will recover if unblocked)...",waitSWF:"soundManager: Waiting for 100% SWF load...",needFunction:"soundManager: Function object expected for %s",
badID:'Warning: Sound ID "%s" should be a string, starting with a non-numeric character',currentObj:"soundManager: _debug(): Current sound objects",waitOnload:"soundManager: Waiting for window.onload()",docLoaded:"soundManager: Document already loaded",onload:"soundManager: initComplete(): calling soundManager.onload()",onloadOK:"soundManager.onload() complete",didInit:"soundManager: init(): Already called?",secNote:"Flash security note: Network/internet URLs will not load due to security restrictions. Access can be configured via Flash Player Global Security Settings Page: http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html",
badRemove:"soundManager: Failed to remove Flash node.",shutdown:"soundManager.disable(): Shutting down",queue:"soundManager: Queueing %s handler",smError:"SMSound.load(): Exception: JS-Flash communication failed, or JS error.",fbTimeout:"No flash response, applying .swf_timedout CSS...",fbLoaded:"Flash loaded",flRemoved:"soundManager: Flash movie removed.",fbHandler:"soundManager: flashBlockHandler()",manURL:"SMSound.load(): Using manually-assigned URL",onURL:"soundManager.load(): current URL already assigned.",
badFV:'soundManager.flashVersion must be 8 or 9. "%s" is invalid. Reverting to %s.',as2loop:"Note: Setting stream:false so looping can work (flash 8 limitation)",noNSLoop:"Note: Looping not implemented for MovieStar formats",needfl9:"Note: Switching to flash 9, required for MP4 formats.",mfTimeout:"Setting flashLoadTimeout = 0 (infinite) for off-screen, mobile flash case",needFlash:"soundManager: Fatal error: Flash is needed to play some required formats, but is not available.",gotFocus:"soundManager: Got window focus.",
policy:"Enabling usePolicyFile for data access",setup:"soundManager.setup(): allowed parameters: %s",setupError:'soundManager.setup(): "%s" cannot be assigned with this method.',setupUndef:'soundManager.setup(): Could not find option "%s"',setupLate:"soundManager.setup(): url, flashVersion and html5Test property changes will not take effect until reboot().",noURL:"soundManager: Flash URL required. Call soundManager.setup({url:...}) to get started.",sm2Loaded:"SoundManager 2: Ready.",reset:"soundManager.reset(): Removing event callbacks",
mobileUA:"Mobile UA detected, preferring HTML5 by default.",globalHTML5:"Using singleton HTML5 Audio() pattern for this device."};p=function(){var a=cb.call(arguments),c=a.shift(),c=F&&F[c]?F[c]:"",e,b;if(c&&a&&a.length){e=0;for(b=a.length;e<b;e++)c=c.replace("%s",a[e])}return c};ha=function(a){8===l&&(1<a.loops&&a.stream)&&(k("as2loop"),a.stream=!1);return a};ia=function(a,d){if(a&&!a.usePolicyFile&&(a.onid3||a.usePeakData||a.useWaveformData||a.useEQData))c._wD((d||"")+p("policy")),a.usePolicyFile=
!0;return a};Q=function(a){console!==g&&console.warn!==g?console.warn(a):c._wD(a)};qa=function(){return!1};Va=function(a){for(var c in a)a.hasOwnProperty(c)&&"function"===typeof a[c]&&(a[c]=qa)};za=function(a){a===g&&(a=!1);(r||a)&&c.disable(a)};Wa=function(a){var d=null;if(a)if(a.match(/\.swf(\?.*)?$/i)){if(d=a.substr(a.toLowerCase().lastIndexOf(".swf?")+4))return a}else a.lastIndexOf("/")!==a.length-1&&(a+="/");a=(a&&-1!==a.lastIndexOf("/")?a.substr(0,a.lastIndexOf("/")+1):"./")+c.movieURL;c.noSWFCache&&
(a+="?ts="+(new Date).getTime());return a};va=function(){l=parseInt(c.flashVersion,10);8!==l&&9!==l&&(c._wD(p("badFV",l,8)),c.flashVersion=l=8);var a=c.debugMode||c.debugFlash?"_debug.swf":".swf";c.useHTML5Audio&&(!c.html5Only&&c.audioFormats.mp4.required&&9>l)&&(c._wD(p("needfl9")),c.flashVersion=l=9);c.version=c.versionNumber+(c.html5Only?" (HTML5-only mode)":9===l?" (AS3/Flash 9)":" (AS2/Flash 8)");8<l?(c.defaultOptions=v(c.defaultOptions,c.flash9Options),c.features.buffering=!0,c.defaultOptions=
v(c.defaultOptions,c.movieStarOptions),c.filePatterns.flash9=RegExp("\\.(mp3|"+lb.join("|")+")(\\?.*)?$","i"),c.features.movieStar=!0):c.features.movieStar=!1;c.filePattern=c.filePatterns[8!==l?"flash9":"flash8"];c.movieURL=(8===l?"soundmanager2.swf":"soundmanager2_flash9.swf").replace(".swf",a);c.features.peakData=c.features.waveformData=c.features.eqData=8<l};Ta=function(a,c){if(!i)return!1;i._setPolling(a,c)};ya=function(){c.debugURLParam.test(R)&&(c.debugMode=!0);if(A(c.debugID))return!1;var a,
d,e,b;if(c.debugMode&&!A(c.debugID)&&(!gb||!c.useConsole||!c.consoleOnly)){a=h.createElement("div");a.id=c.debugID+"-toggle";d={position:"fixed",bottom:"0px",right:"0px",width:"1.2em",height:"1.2em",lineHeight:"1.2em",margin:"2px",textAlign:"center",border:"1px solid #999",cursor:"pointer",background:"#fff",color:"#333",zIndex:10001};a.appendChild(h.createTextNode("-"));a.onclick=Xa;a.title="Toggle SM2 debug console";s.match(/msie 6/i)&&(a.style.position="absolute",a.style.cursor="hand");for(b in d)d.hasOwnProperty(b)&&
(a.style[b]=d[b]);d=h.createElement("div");d.id=c.debugID;d.style.display=c.debugMode?"block":"none";if(c.debugMode&&!A(a.id)){try{e=fa(),e.appendChild(a)}catch(f){throw Error(p("domError")+" \n"+f.toString());}e.appendChild(d)}}};t=this.getSoundById;k=function(a,d){return!a?"":c._wD(p(a),d)};Xa=function(){var a=A(c.debugID),d=A(c.debugID+"-toggle");if(!a)return!1;sa?(d.innerHTML="+",a.style.display="none"):(d.innerHTML="-",a.style.display="block");sa=!sa};x=function(a,c,e){if(j.sm2Debugger!==g)try{sm2Debugger.handleEvent(a,
c,e)}catch(b){}return!0};P=function(){var a=[];c.debugMode&&a.push("sm2_debug");c.debugFlash&&a.push("flash_debug");c.useHighPerformance&&a.push("high_performance");return a.join(" ")};Ba=function(){var a=p("fbHandler"),d=c.getMoviePercent(),e={type:"FLASHBLOCK"};if(c.html5Only)return!1;c.ok()?(c.didFlashBlock&&c._wD(a+": Unblocked"),c.oMC&&(c.oMC.className=[P(),"movieContainer","swf_loaded"+(c.didFlashBlock?" swf_unblocked":"")].join(" "))):(B&&(c.oMC.className=P()+" movieContainer "+(null===d?"swf_timedout":
"swf_error"),c._wD(a+": "+p("fbTimeout")+(d?" ("+p("fbLoaded")+")":""))),c.didFlashBlock=!0,I({type:"ontimeout",ignoreInit:!0,error:e}),O(e))};ua=function(a,c,e){C[a]===g&&(C[a]=[]);C[a].push({method:c,scope:e||null,fired:!1})};I=function(a){a||(a={type:c.ok()?"onready":"ontimeout"});if(!n&&a&&!a.ignoreInit||"ontimeout"===a.type&&(c.ok()||r&&!a.ignoreInit))return!1;var d={success:a&&a.ignoreInit?c.ok():!r},e=a&&a.type?C[a.type]||[]:[],b=[],f,d=[d],g=B&&!c.ok();a.error&&(d[0].error=a.error);a=0;for(f=
e.length;a<f;a++)!0!==e[a].fired&&b.push(e[a]);if(b.length){a=0;for(f=b.length;a<f;a++)b[a].scope?b[a].method.apply(b[a].scope,d):b[a].method.apply(this,d),g||(b[a].fired=!0)}return!0};L=function(){j.setTimeout(function(){c.useFlashBlock&&Ba();I();"function"===typeof c.onload&&(k("onload",1),c.onload.apply(j),k("onloadOK",1));c.waitForWindowLoad&&u.add(j,"load",L)},1)};Ga=function(){if(z!==g)return z;var a=!1,c=navigator,e=c.plugins,b,f=j.ActiveXObject;if(e&&e.length)(c=c.mimeTypes)&&(c["application/x-shockwave-flash"]&&
c["application/x-shockwave-flash"].enabledPlugin&&c["application/x-shockwave-flash"].enabledPlugin.description)&&(a=!0);else if(f!==g&&!s.match(/MSAppHost/i)){try{b=new f("ShockwaveFlash.ShockwaveFlash")}catch(h){}a=!!b}return z=a};ab=function(){var a,d,e=c.audioFormats;if(ma&&s.match(/os (1|2|3_0|3_1)/i))c.hasHTML5=!1,c.html5Only=!0,c.oMC&&(c.oMC.style.display="none");else if(c.useHTML5Audio){if(!c.html5||!c.html5.canPlayType)c._wD("SoundManager: No HTML5 Audio() support detected."),c.hasHTML5=!1;
La&&c._wD("soundManager: Note: Buggy HTML5 Audio in Safari on this OS X release, see https://bugs.webkit.org/show_bug.cgi?id=32159 - "+(!z?" would use flash fallback for MP3/MP4, but none detected.":"will use flash fallback for MP3/MP4, if available"),1)}if(c.useHTML5Audio&&c.hasHTML5)for(d in e)if(e.hasOwnProperty(d)&&(e[d].required&&!c.html5.canPlayType(e[d].type)||c.preferFlash&&(c.flash[d]||c.flash[e[d].type])))a=!0;c.ignoreFlash&&(a=!1);c.html5Only=c.hasHTML5&&c.useHTML5Audio&&!a;return!c.html5Only};
ka=function(a){var d,e,b=0;if(a instanceof Array){d=0;for(e=a.length;d<e;d++)if(a[d]instanceof Object){if(c.canPlayMIME(a[d].type)){b=d;break}}else if(c.canPlayURL(a[d])){b=d;break}a[b].url&&(a[b]=a[b].url);a=a[b]}return a};Ya=function(a){a._hasTimer||(a._hasTimer=!0,!Ka&&c.html5PollingInterval&&(null===Y&&0===ja&&(Y=j.setInterval($a,c.html5PollingInterval)),ja++))};Za=function(a){a._hasTimer&&(a._hasTimer=!1,!Ka&&c.html5PollingInterval&&ja--)};$a=function(){var a;if(null!==Y&&!ja)return j.clearInterval(Y),
Y=null,!1;for(a=c.soundIDs.length-1;0<=a;a--)c.sounds[c.soundIDs[a]].isHTML5&&c.sounds[c.soundIDs[a]]._hasTimer&&c.sounds[c.soundIDs[a]]._onTimer()};O=function(a){a=a!==g?a:{};"function"===typeof c.onerror&&c.onerror.apply(j,[{type:a.type!==g?a.type:null}]);a.fatal!==g&&a.fatal&&c.disable()};db=function(){if(!La||!Ga())return!1;var a=c.audioFormats,d,e;for(e in a)if(a.hasOwnProperty(e)&&("mp3"===e||"mp4"===e))if(c._wD("soundManager: Using flash fallback for "+e+" format"),c.html5[e]=!1,a[e]&&a[e].related)for(d=
a[e].related.length-1;0<=d;d--)c.html5[a[e].related[d]]=!1};this._setSandboxType=function(a){var d=c.sandbox;d.type=a;d.description=d.types[d.types[a]!==g?a:"unknown"];"localWithFile"===d.type?(d.noRemote=!0,d.noLocal=!1,k("secNote",2)):"localWithNetwork"===d.type?(d.noRemote=!1,d.noLocal=!0):"localTrusted"===d.type&&(d.noRemote=!1,d.noLocal=!1)};this._externalInterfaceOK=function(a,d){if(c.swfLoaded)return!1;var e;x("swf",!0);x("flashtojs",!0);c.swfLoaded=!0;na=!1;La&&db();if(!d||d.replace(/\+dev/i,
"")!==c.versionNumber.replace(/\+dev/i,""))return e='soundManager: Fatal: JavaScript file build "'+c.versionNumber+'" does not match Flash SWF build "'+d+'" at '+c.url+". Ensure both are up-to-date.",setTimeout(function(){throw Error(e);},0),!1;setTimeout(ra,H?100:1)};ga=function(a,d){function e(){var a=[],b,d=[];b="SoundManager "+c.version+(!c.html5Only&&c.useHTML5Audio?c.hasHTML5?" + HTML5 audio":", no HTML5 audio support":"");c.html5Only?c.html5PollingInterval&&a.push("html5PollingInterval ("+
c.html5PollingInterval+"ms)"):(c.preferFlash&&a.push("preferFlash"),c.useHighPerformance&&a.push("useHighPerformance"),c.flashPollingInterval&&a.push("flashPollingInterval ("+c.flashPollingInterval+"ms)"),c.html5PollingInterval&&a.push("html5PollingInterval ("+c.html5PollingInterval+"ms)"),c.wmode&&a.push("wmode ("+c.wmode+")"),c.debugFlash&&a.push("debugFlash"),c.useFlashBlock&&a.push("flashBlock"));a.length&&(d=d.concat([a.join(" + ")]));c._wD(b+(d.length?" + "+d.join(", "):""),1);eb()}function b(a,
b){return'<param name="'+a+'" value="'+b+'" />'}if(S&&T)return!1;if(c.html5Only)return va(),e(),c.oMC=A(c.movieID),ra(),T=S=!0,!1;var f=d||c.url,j=c.altURL||f,i=fa(),m=P(),l=null,l=h.getElementsByTagName("html")[0],k,q,n,l=l&&l.dir&&l.dir.match(/rtl/i),a=a===g?c.id:a;va();c.url=Wa($?f:j);d=c.url;c.wmode=!c.wmode&&c.useHighPerformance?"transparent":c.wmode;if(null!==c.wmode&&(s.match(/msie 8/i)||!H&&!c.useHighPerformance)&&navigator.platform.match(/win32|win64/i))J.push(F.spcWmode),c.wmode=null;i=
{name:a,id:a,src:d,quality:"high",allowScriptAccess:c.allowScriptAccess,bgcolor:c.bgColor,pluginspage:jb+"www.macromedia.com/go/getflashplayer",title:"JS/Flash audio component (SoundManager 2)",type:"application/x-shockwave-flash",wmode:c.wmode,hasPriority:"true"};c.debugFlash&&(i.FlashVars="debug=1");c.wmode||delete i.wmode;if(H)f=h.createElement("div"),q=['<object id="'+a+'" data="'+d+'" type="'+i.type+'" title="'+i.title+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="'+jb+'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0">',
b("movie",d),b("AllowScriptAccess",c.allowScriptAccess),b("quality",i.quality),c.wmode?b("wmode",c.wmode):"",b("bgcolor",c.bgColor),b("hasPriority","true"),c.debugFlash?b("FlashVars",i.FlashVars):"","</object>"].join("");else for(k in f=h.createElement("embed"),i)i.hasOwnProperty(k)&&f.setAttribute(k,i[k]);ya();m=P();if(i=fa())if(c.oMC=A(c.movieID)||h.createElement("div"),c.oMC.id)n=c.oMC.className,c.oMC.className=(n?n+" ":"movieContainer")+(m?" "+m:""),c.oMC.appendChild(f),H&&(k=c.oMC.appendChild(h.createElement("div")),
k.className="sm2-object-box",k.innerHTML=q),T=!0;else{c.oMC.id=c.movieID;c.oMC.className="movieContainer "+m;k=m=null;c.useFlashBlock||(c.useHighPerformance?m={position:"fixed",width:"8px",height:"8px",bottom:"0px",left:"0px",overflow:"hidden"}:(m={position:"absolute",width:"6px",height:"6px",top:"-9999px",left:"-9999px"},l&&(m.left=Math.abs(parseInt(m.left,10))+"px")));rb&&(c.oMC.style.zIndex=1E4);if(!c.debugFlash)for(n in m)m.hasOwnProperty(n)&&(c.oMC.style[n]=m[n]);try{H||c.oMC.appendChild(f),
i.appendChild(c.oMC),H&&(k=c.oMC.appendChild(h.createElement("div")),k.className="sm2-object-box",k.innerHTML=q),T=!0}catch(r){throw Error(p("domError")+" \n"+r.toString());}}S=!0;e();return!0};ea=function(){if(c.html5Only)return ga(),!1;if(i)return!1;if(!c.url)return k("noURL"),!1;i=c.getMovie(c.id);i||(W?(H?c.oMC.innerHTML=Aa:c.oMC.appendChild(W),W=null,S=!0):ga(c.id,c.url),i=c.getMovie(c.id));"function"===typeof c.oninitmovie&&setTimeout(c.oninitmovie,1);Ha();return!0};M=function(){setTimeout(Sa,
1E3)};Sa=function(){var a,d=!1;if(!c.url||X)return!1;X=!0;u.remove(j,"load",M);if(na&&!Ma)return k("waitFocus"),!1;n||(a=c.getMoviePercent(),0<a&&100>a&&(d=!0));setTimeout(function(){a=c.getMoviePercent();if(d)return X=!1,c._wD(p("waitSWF")),j.setTimeout(M,1),!1;n||(c._wD("soundManager: No Flash response within expected time. Likely causes: "+(0===a?"SWF load failed, ":"")+"Flash blocked or JS-Flash security error."+(c.debugFlash?" "+p("checkSWF"):""),2),!$&&a&&(k("localFail",2),c.debugFlash||k("tryDebug",
2)),0===a&&c._wD(p("swf404",c.url),1),x("flashtojs",!1,": Timed out"+$?" (Check flash security or flash blockers)":" (No plugin/missing SWF?)"));!n&&hb&&(null===a?c.useFlashBlock||0===c.flashLoadTimeout?(c.useFlashBlock&&Ba(),k("waitForever")):(k("waitForever"),I({type:"ontimeout",ignoreInit:!0})):0===c.flashLoadTimeout?k("waitForever"):za(!0))},c.flashLoadTimeout)};da=function(){if(Ma||!na)return u.remove(j,"focus",da),!0;Ma=hb=!0;k("gotFocus");X=!1;M();u.remove(j,"focus",da);return!0};Ha=function(){J.length&&
(c._wD("SoundManager 2: "+J.join(" "),1),J=[])};eb=function(){Ha();var a,d=[];if(c.useHTML5Audio&&c.hasHTML5){for(a in c.audioFormats)c.audioFormats.hasOwnProperty(a)&&d.push(a+" = "+c.html5[a]+(!c.html5[a]&&z&&c.flash[a]?" (using flash)":c.preferFlash&&c.flash[a]&&z?" (preferring flash)":!c.html5[a]?" ("+(c.audioFormats[a].required?"required, ":"")+"and no flash support)":""));c._wD("SoundManager 2 HTML5 support: "+d.join(", "),1)}};U=function(a){if(n)return!1;if(c.html5Only)return k("sm2Loaded"),
n=!0,L(),x("onload",!0),!0;var d=!0,e;if(!c.useFlashBlock||!c.flashLoadTimeout||c.getMoviePercent())n=!0,r&&(e={type:!z&&B?"NO_FLASH":"INIT_TIMEOUT"});c._wD("SoundManager 2 "+(r?"failed to load":"loaded")+" ("+(r?"Flash security/load error":"OK")+")",r?2:1);r||a?(c.useFlashBlock&&c.oMC&&(c.oMC.className=P()+" "+(null===c.getMoviePercent()?"swf_timedout":"swf_error")),I({type:"ontimeout",error:e,ignoreInit:!0}),x("onload",!1),O(e),d=!1):x("onload",!0);r||(c.waitForWindowLoad&&!ca?(k("waitOnload"),
u.add(j,"load",L)):(c.waitForWindowLoad&&ca&&k("docLoaded"),L()));return d};Ra=function(){var a,d=c.setupOptions;for(a in d)d.hasOwnProperty(a)&&(c[a]===g?c[a]=d[a]:c[a]!==d[a]&&(c.setupOptions[a]=c[a]))};ra=function(){if(n)return k("didInit"),!1;if(c.html5Only)return n||(u.remove(j,"load",c.beginDelayedInit),c.enabled=!0,U()),!0;ea();try{i._externalInterfaceTest(!1),Ta(!0,c.flashPollingInterval||(c.useHighPerformance?10:50)),c.debugMode||i._disableDebug(),c.enabled=!0,x("jstoflash",!0),c.html5Only||
u.add(j,"unload",qa)}catch(a){return c._wD("js/flash exception: "+a.toString()),x("jstoflash",!1),O({type:"JS_TO_FLASH_EXCEPTION",fatal:!0}),za(!0),U(),!1}U();u.remove(j,"load",c.beginDelayedInit);return!0};N=function(){if(V)return!1;V=!0;Ra();ya();var a=null,a=null,d=j.console!==g&&"function"===typeof console.log,e=R.toLowerCase();-1!==e.indexOf("sm2-usehtml5audio=")&&(a="1"===e.charAt(e.indexOf("sm2-usehtml5audio=")+18),d&&console.log((a?"Enabling ":"Disabling ")+"useHTML5Audio via URL parameter"),
c.setup({useHTML5Audio:a}));-1!==e.indexOf("sm2-preferflash=")&&(a="1"===e.charAt(e.indexOf("sm2-preferflash=")+16),d&&console.log((a?"Enabling ":"Disabling ")+"preferFlash via URL parameter"),c.setup({preferFlash:a}));!z&&c.hasHTML5&&(c._wD("SoundManager: No Flash detected"+(!c.useHTML5Audio?", enabling HTML5.":". Trying HTML5-only mode."),1),c.setup({useHTML5Audio:!0,preferFlash:!1}));bb();c.html5.usingFlash=ab();B=c.html5.usingFlash;!z&&B&&(J.push(F.needFlash),c.setup({flashLoadTimeout:1}));h.removeEventListener&&
h.removeEventListener("DOMContentLoaded",N,!1);ea();return!0};Ea=function(){"complete"===h.readyState&&(N(),h.detachEvent("onreadystatechange",Ea));return!0};xa=function(){ca=!0;u.remove(j,"load",xa)};wa=function(){if(Ka&&((!c.setupOptions.useHTML5Audio||c.setupOptions.preferFlash)&&J.push(F.mobileUA),c.setupOptions.useHTML5Audio=!0,c.setupOptions.preferFlash=!1,ma||fb&&!s.match(/android\s2\.3/i)))J.push(F.globalHTML5),ma&&(c.ignoreFlash=!0),D=!0};wa();Ga();u.add(j,"focus",da);u.add(j,"load",M);u.add(j,
"load",xa);h.addEventListener?h.addEventListener("DOMContentLoaded",N,!1):h.attachEvent?h.attachEvent("onreadystatechange",Ea):(x("onload",!1),O({type:"NO_DOM2_EVENTS",fatal:!0}))}var pa=null;if(void 0===j.SM2_DEFER||!SM2_DEFER)pa=new aa;j.SoundManager=aa;j.soundManager=pa})(window);
// Chosen, a Select Box Enhancer for jQuery and Protoype
// by Patrick Filler for Harvest, http://getharvest.com
//
// Version 0.9.12
// Full source at https://github.com/harvesthq/chosen
// Copyright (c) 2011 Harvest http://getharvest.com

// MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md
// This file is generated by `cake build`, do not edit it by hand.
(function(){var e;e=function(){function e(){this.options_index=0,this.parsed=[]}return e.prototype.add_node=function(e){return e.nodeName.toUpperCase()==="OPTGROUP"?this.add_group(e):this.add_option(e)},e.prototype.add_group=function(e){var t,n,r,i,s,o;t=this.parsed.length,this.parsed.push({array_index:t,group:!0,label:e.label,children:0,disabled:e.disabled}),s=e.childNodes,o=[];for(r=0,i=s.length;r<i;r++)n=s[r],o.push(this.add_option(n,t,e.disabled));return o},e.prototype.add_option=function(e,t,n){if(e.nodeName.toUpperCase()==="OPTION")return e.text!==""?(t!=null&&(this.parsed[t].children+=1),this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,value:e.value,text:e.text,html:e.innerHTML,selected:e.selected,disabled:n===!0?n:e.disabled,group_array_index:t,classes:e.className,style:e.style.cssText})):this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,empty:!0}),this.options_index+=1},e}(),e.select_to_array=function(t){var n,r,i,s,o;r=new e,o=t.childNodes;for(i=0,s=o.length;i<s;i++)n=o[i],r.add_node(n);return r.parsed},this.SelectParser=e}).call(this),function(){var e,t;t=this,e=function(){function e(e,t){this.form_field=e,this.options=t!=null?t:{},this.is_multiple=this.form_field.multiple,this.set_default_text(),this.set_default_values(),this.setup(),this.set_up_html(),this.register_observers(),this.finish_setup()}return e.prototype.set_default_values=function(){var e=this;return this.click_test_action=function(t){return e.test_active_click(t)},this.activate_action=function(t){return e.activate_field(t)},this.active_field=!1,this.mouse_on_container=!1,this.results_showing=!1,this.result_highlighted=null,this.result_single_selected=null,this.allow_single_deselect=this.options.allow_single_deselect!=null&&this.form_field.options[0]!=null&&this.form_field.options[0].text===""?this.options.allow_single_deselect:!1,this.disable_search_threshold=this.options.disable_search_threshold||0,this.disable_search=this.options.disable_search||!1,this.enable_split_word_search=this.options.enable_split_word_search!=null?this.options.enable_split_word_search:!0,this.search_contains=this.options.search_contains||!1,this.choices=0,this.single_backstroke_delete=this.options.single_backstroke_delete||!1,this.max_selected_options=this.options.max_selected_options||Infinity,this.inherit_select_classes=this.options.inherit_select_classes||!1},e.prototype.set_default_text=function(){return this.form_field.getAttribute("data-placeholder")?this.default_text=this.form_field.getAttribute("data-placeholder"):this.is_multiple?this.default_text=this.options.placeholder_text_multiple||this.options.placeholder_text||"Select Some Options":this.default_text=this.options.placeholder_text_single||this.options.placeholder_text||"Select an Option",this.results_none_found=this.form_field.getAttribute("data-no_results_text")||this.options.no_results_text||"No results match"},e.prototype.mouse_enter=function(){return this.mouse_on_container=!0},e.prototype.mouse_leave=function(){return this.mouse_on_container=!1},e.prototype.input_focus=function(e){var t=this;if(this.is_multiple){if(!this.active_field)return setTimeout(function(){return t.container_mousedown()},50)}else if(!this.active_field)return this.activate_field()},e.prototype.input_blur=function(e){var t=this;if(!this.mouse_on_container)return this.active_field=!1,setTimeout(function(){return t.blur_test()},100)},e.prototype.result_add_option=function(e){var t,n;return e.disabled?"":(e.dom_id=this.container_id+"_o_"+e.array_index,t=e.selected&&this.is_multiple?[]:["active-result"],e.selected&&t.push("result-selected"),e.group_array_index!=null&&t.push("group-option"),e.classes!==""&&t.push(e.classes),n=e.style.cssText!==""?' style="'+e.style+'"':"",'<li id="'+e.dom_id+'" class="'+t.join(" ")+'"'+n+">"+e.html+"</li>")},e.prototype.results_update_field=function(){return this.is_multiple||this.results_reset_cleanup(),this.result_clear_highlight(),this.result_single_selected=null,this.results_build()},e.prototype.results_toggle=function(){return this.results_showing?this.results_hide():this.results_show()},e.prototype.results_search=function(e){return this.results_showing?this.winnow_results():this.results_show()},e.prototype.keyup_checker=function(e){var t,n;t=(n=e.which)!=null?n:e.keyCode,this.search_field_scale();switch(t){case 8:if(this.is_multiple&&this.backstroke_length<1&&this.choices>0)return this.keydown_backstroke();if(!this.pending_backstroke)return this.result_clear_highlight(),this.results_search();break;case 13:e.preventDefault();if(this.results_showing)return this.result_select(e);break;case 27:return this.results_showing&&this.results_hide(),!0;case 9:case 38:case 40:case 16:case 91:case 17:break;default:return this.results_search()}},e.prototype.generate_field_id=function(){var e;return e=this.generate_random_id(),this.form_field.id=e,e},e.prototype.generate_random_char=function(){var e,t,n;return e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",n=Math.floor(Math.random()*e.length),t=e.substring(n,n+1)},e}(),t.AbstractChosen=e}.call(this),function(){var e,t,n,r,i={}.hasOwnProperty,s=function(e,t){function r(){this.constructor=e}for(var n in t)i.call(t,n)&&(e[n]=t[n]);return r.prototype=t.prototype,e.prototype=new r,e.__super__=t.prototype,e};r=this,e=jQuery,e.fn.extend({chosen:function(n){var r,i,s;return s=navigator.userAgent.toLowerCase(),i=/(msie) ([\w.]+)/.exec(s)||[],r={name:i[1]||"",version:i[2]||"0"},r.name==="msie"&&(r.version==="6.0"||r.version==="7.0"&&document.documentMode===7)?this:this.each(function(r){var i;i=e(this);if(!i.hasClass("chzn-done"))return i.data("chosen",new t(this,n))})}}),t=function(t){function i(){return i.__super__.constructor.apply(this,arguments)}return s(i,t),i.prototype.setup=function(){return this.form_field_jq=e(this.form_field),this.current_value=this.form_field_jq.val(),this.is_rtl=this.form_field_jq.hasClass("chzn-rtl")},i.prototype.finish_setup=function(){return this.form_field_jq.addClass("chzn-done")},i.prototype.set_up_html=function(){var t,r,i,s,o,u;return this.container_id=this.form_field.id.length?this.form_field.id.replace(/[^\w]/g,"_"):this.generate_field_id(),this.container_id+="_chzn",t=["chzn-container"],t.push("chzn-container-"+(this.is_multiple?"multi":"single")),this.inherit_select_classes&&this.form_field.className&&t.push(this.form_field.className),this.is_rtl&&t.push("chzn-rtl"),this.f_width=this.form_field_jq.outerWidth(),i={id:this.container_id,"class":t.join(" "),style:"width: "+this.f_width+"px;",title:this.form_field.title},r=e("<div />",i),this.is_multiple?r.html('<ul class="chzn-choices"><li class="search-field"><input type="text" value="'+this.default_text+'" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chzn-drop" style="left:-9000px;"><ul class="chzn-results"></ul></div>'):r.html('<a href="javascript:void(0)" class="chzn-single chzn-default" tabindex="-1"><span>'+this.default_text+'</span><div><b></b></div></a><div class="chzn-drop" style="left:-9000px;"><div class="chzn-search"><input type="text" autocomplete="off" /></div><ul class="chzn-results"></ul></div>'),this.form_field_jq.hide().after(r),this.container=e("#"+this.container_id),this.dropdown=this.container.find("div.chzn-drop").first(),s=this.container.height(),o=this.f_width-n(this.dropdown),this.dropdown.css({width:o+"px",top:s+"px"}),this.search_field=this.container.find("input").first(),this.search_results=this.container.find("ul.chzn-results").first(),this.search_field_scale(),this.search_no_results=this.container.find("li.no-results").first(),this.is_multiple?(this.search_choices=this.container.find("ul.chzn-choices").first(),this.search_container=this.container.find("li.search-field").first()):(this.search_container=this.container.find("div.chzn-search").first(),this.selected_item=this.container.find(".chzn-single").first(),u=o-n(this.search_container)-n(this.search_field),this.search_field.css({width:u+"px"})),this.results_build(),this.set_tab_index(),this.form_field_jq.trigger("liszt:ready",{chosen:this})},i.prototype.register_observers=function(){var e=this;return this.container.mousedown(function(t){return e.container_mousedown(t)}),this.container.mouseup(function(t){return e.container_mouseup(t)}),this.container.mouseenter(function(t){return e.mouse_enter(t)}),this.container.mouseleave(function(t){return e.mouse_leave(t)}),this.search_results.mouseup(function(t){return e.search_results_mouseup(t)}),this.search_results.mouseover(function(t){return e.search_results_mouseover(t)}),this.search_results.mouseout(function(t){return e.search_results_mouseout(t)}),this.form_field_jq.bind("liszt:updated",function(t){return e.results_update_field(t)}),this.form_field_jq.bind("liszt:activate",function(t){return e.activate_field(t)}),this.form_field_jq.bind("liszt:open",function(t){return e.container_mousedown(t)}),this.search_field.blur(function(t){return e.input_blur(t)}),this.search_field.keyup(function(t){return e.keyup_checker(t)}),this.search_field.keydown(function(t){return e.keydown_checker(t)}),this.search_field.focus(function(t){return e.input_focus(t)}),this.is_multiple?this.search_choices.click(function(t){return e.choices_click(t)}):this.container.click(function(e){return e.preventDefault()})},i.prototype.search_field_disabled=function(){this.is_disabled=this.form_field_jq[0].disabled;if(this.is_disabled)return this.container.addClass("chzn-disabled"),this.search_field[0].disabled=!0,this.is_multiple||this.selected_item.unbind("focus",this.activate_action),this.close_field();this.container.removeClass("chzn-disabled"),this.search_field[0].disabled=!1;if(!this.is_multiple)return this.selected_item.bind("focus",this.activate_action)},i.prototype.container_mousedown=function(t){var n;if(!this.is_disabled)return n=t!=null?e(t.target).hasClass("search-choice-close"):!1,t&&t.type==="mousedown"&&!this.results_showing&&t.preventDefault(),!this.pending_destroy_click&&!n?(this.active_field?!this.is_multiple&&t&&(e(t.target)[0]===this.selected_item[0]||e(t.target).parents("a.chzn-single").length)&&(t.preventDefault(),this.results_toggle()):(this.is_multiple&&this.search_field.val(""),e(document).click(this.click_test_action),this.results_show()),this.activate_field()):this.pending_destroy_click=!1},i.prototype.container_mouseup=function(e){if(e.target.nodeName==="ABBR"&&!this.is_disabled)return this.results_reset(e)},i.prototype.blur_test=function(e){if(!this.active_field&&this.container.hasClass("chzn-container-active"))return this.close_field()},i.prototype.close_field=function(){return e(document).unbind("click",this.click_test_action),this.active_field=!1,this.results_hide(),this.container.removeClass("chzn-container-active"),this.winnow_results_clear(),this.clear_backstroke(),this.show_search_field_default(),this.search_field_scale()},i.prototype.activate_field=function(){return this.container.addClass("chzn-container-active"),this.active_field=!0,this.search_field.val(this.search_field.val()),this.search_field.focus()},i.prototype.test_active_click=function(t){return e(t.target).parents("#"+this.container_id).length?this.active_field=!0:this.close_field()},i.prototype.results_build=function(){var e,t,n,i,s;this.parsing=!0,this.results_data=r.SelectParser.select_to_array(this.form_field),this.is_multiple&&this.choices>0?(this.search_choices.find("li.search-choice").remove(),this.choices=0):this.is_multiple||(this.selected_item.addClass("chzn-default").find("span").text(this.default_text),this.disable_search||this.form_field.options.length<=this.disable_search_threshold?this.container.addClass("chzn-container-single-nosearch"):this.container.removeClass("chzn-container-single-nosearch")),e="",s=this.results_data;for(n=0,i=s.length;n<i;n++)t=s[n],t.group?e+=this.result_add_group(t):t.empty||(e+=this.result_add_option(t),t.selected&&this.is_multiple?this.choice_build(t):t.selected&&!this.is_multiple&&(this.selected_item.removeClass("chzn-default").find("span").text(t.text),this.allow_single_deselect&&this.single_deselect_control_build()));return this.search_field_disabled(),this.show_search_field_default(),this.search_field_scale(),this.search_results.html(e),this.parsing=!1},i.prototype.result_add_group=function(t){return t.disabled?"":(t.dom_id=this.container_id+"_g_"+t.array_index,'<li id="'+t.dom_id+'" class="group-result">'+e("<div />").text(t.label).html()+"</li>")},i.prototype.result_do_highlight=function(e){var t,n,r,i,s;if(e.length){this.result_clear_highlight(),this.result_highlight=e,this.result_highlight.addClass("highlighted"),r=parseInt(this.search_results.css("maxHeight"),10),s=this.search_results.scrollTop(),i=r+s,n=this.result_highlight.position().top+this.search_results.scrollTop(),t=n+this.result_highlight.outerHeight();if(t>=i)return this.search_results.scrollTop(t-r>0?t-r:0);if(n<s)return this.search_results.scrollTop(n)}},i.prototype.result_clear_highlight=function(){return this.result_highlight&&this.result_highlight.removeClass("highlighted"),this.result_highlight=null},i.prototype.results_show=function(){var e;if(!this.is_multiple)this.selected_item.addClass("chzn-single-with-drop"),this.result_single_selected&&this.result_do_highlight(this.result_single_selected);else if(this.max_selected_options<=this.choices)return this.form_field_jq.trigger("liszt:maxselected",{chosen:this}),!1;return e=this.is_multiple?this.container.height():this.container.height()-1,this.form_field_jq.trigger("liszt:showing_dropdown",{chosen:this}),this.dropdown.css({top:e+"px",left:0}),this.results_showing=!0,this.search_field.focus(),this.search_field.val(this.search_field.val()),this.winnow_results()},i.prototype.results_hide=function(){return this.is_multiple||this.selected_item.removeClass("chzn-single-with-drop"),this.result_clear_highlight(),this.form_field_jq.trigger("liszt:hiding_dropdown",{chosen:this}),this.dropdown.css({left:"-9000px"}),this.results_showing=!1},i.prototype.set_tab_index=function(e){var t;if(this.form_field_jq.attr("tabindex"))return t=this.form_field_jq.attr("tabindex"),this.form_field_jq.attr("tabindex",-1),this.search_field.attr("tabindex",t)},i.prototype.show_search_field_default=function(){return this.is_multiple&&this.choices<1&&!this.active_field?(this.search_field.val(this.default_text),this.search_field.addClass("default")):(this.search_field.val(""),this.search_field.removeClass("default"))},i.prototype.search_results_mouseup=function(t){var n;n=e(t.target).hasClass("active-result")?e(t.target):e(t.target).parents(".active-result").first();if(n.length)return this.result_highlight=n,this.result_select(t),this.search_field.focus()},i.prototype.search_results_mouseover=function(t){var n;n=e(t.target).hasClass("active-result")?e(t.target):e(t.target).parents(".active-result").first();if(n)return this.result_do_highlight(n)},i.prototype.search_results_mouseout=function(t){if(e(t.target).hasClass("active-result"))return this.result_clear_highlight()},i.prototype.choices_click=function(t){t.preventDefault();if(this.active_field&&!e(t.target).hasClass("search-choice")&&!this.results_showing)return this.results_show()},i.prototype.choice_build=function(t){var n,r,i,s=this;return this.is_multiple&&this.max_selected_options<=this.choices?(this.form_field_jq.trigger("liszt:maxselected",{chosen:this}),!1):(n=this.container_id+"_c_"+t.array_index,this.choices+=1,t.disabled?r='<li class="search-choice search-choice-disabled" id="'+n+'"><span>'+t.html+"</span></li>":r='<li class="search-choice" id="'+n+'"><span>'+t.html+'</span><a href="javascript:void(0)" class="search-choice-close" rel="'+t.array_index+'"></a></li>',this.search_container.before(r),i=e("#"+n).find("a").first(),i.click(function(e){return s.choice_destroy_link_click(e)}))},i.prototype.choice_destroy_link_click=function(t){return t.preventDefault(),this.is_disabled?t.stopPropagation:(this.pending_destroy_click=!0,this.choice_destroy(e(t.target)))},i.prototype.choice_destroy=function(e){if(this.result_deselect(e.attr("rel")))return this.choices-=1,this.show_search_field_default(),this.is_multiple&&this.choices>0&&this.search_field.val().length<1&&this.results_hide(),e.parents("li").first().remove(),this.search_field_scale()},i.prototype.results_reset=function(){this.form_field.options[0].selected=!0,this.selected_item.find("span").text(this.default_text),this.is_multiple||this.selected_item.addClass("chzn-default"),this.show_search_field_default(),this.results_reset_cleanup(),this.form_field_jq.trigger("change");if(this.active_field)return this.results_hide()},i.prototype.results_reset_cleanup=function(){return this.current_value=this.form_field_jq.val(),this.selected_item.find("abbr").remove()},i.prototype.result_select=function(e){var t,n,r,i;if(this.result_highlight)return t=this.result_highlight,n=t.attr("id"),this.result_clear_highlight(),this.is_multiple?this.result_deactivate(t):(this.search_results.find(".result-selected").removeClass("result-selected"),this.result_single_selected=t,this.selected_item.removeClass("chzn-default")),t.addClass("result-selected"),i=n.substr(n.lastIndexOf("_")+1),r=this.results_data[i],r.selected=!0,this.form_field.options[r.options_index].selected=!0,this.is_multiple?this.choice_build(r):(this.selected_item.find("span").first().text(r.text),this.allow_single_deselect&&this.single_deselect_control_build()),(!e.metaKey&&!e.ctrlKey||!this.is_multiple)&&this.results_hide(),this.search_field.val(""),(this.is_multiple||this.form_field_jq.val()!==this.current_value)&&this.form_field_jq.trigger("change",{selected:this.form_field.options[r.options_index].value}),this.current_value=this.form_field_jq.val(),this.search_field_scale()},i.prototype.result_activate=function(e){return e.addClass("active-result")},i.prototype.result_deactivate=function(e){return e.removeClass("active-result")},i.prototype.result_deselect=function(t){var n,r;return r=this.results_data[t],this.form_field.options[r.options_index].disabled?!1:(r.selected=!1,this.form_field.options[r.options_index].selected=!1,n=e("#"+this.container_id+"_o_"+t),n.removeClass("result-selected").addClass("active-result").show(),this.result_clear_highlight(),this.winnow_results(),this.form_field_jq.trigger("change",{deselected:this.form_field.options[r.options_index].value}),this.search_field_scale(),!0)},i.prototype.single_deselect_control_build=function(){if(this.allow_single_deselect&&this.selected_item.find("abbr").length<1)return this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>')},i.prototype.winnow_results=function(){var t,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y;this.no_results_clear(),f=0,l=this.search_field.val()===this.default_text?"":e("<div/>").text(e.trim(this.search_field.val())).html(),o=this.search_contains?"":"^",s=new RegExp(o+l.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),"i"),p=new RegExp(l.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),"i"),y=this.results_data;for(d=0,m=y.length;d<m;d++){n=y[d];if(!n.disabled&&!n.empty)if(n.group)e("#"+n.dom_id).css("display","none");else if(!this.is_multiple||!n.selected){t=!1,a=n.dom_id,u=e("#"+a);if(s.test(n.html))t=!0,f+=1;else if(this.enable_split_word_search&&(n.html.indexOf(" ")>=0||n.html.indexOf("[")===0)){i=n.html.replace(/\[|\]/g,"").split(" ");if(i.length)for(v=0,g=i.length;v<g;v++)r=i[v],s.test(r)&&(t=!0,f+=1)}t?(l.length?(c=n.html.search(p),h=n.html.substr(0,c+l.length)+"</em>"+n.html.substr(c+l.length),h=h.substr(0,c)+"<em>"+h.substr(c)):h=n.html,u.html(h),this.result_activate(u),n.group_array_index!=null&&e("#"+this.results_data[n.group_array_index].dom_id).css("display","list-item")):(this.result_highlight&&a===this.result_highlight.attr("id")&&this.result_clear_highlight(),this.result_deactivate(u))}}return f<1&&l.length?this.no_results(l):this.winnow_results_set_highlight()},i.prototype.winnow_results_clear=function(){var t,n,r,i,s;this.search_field.val(""),n=this.search_results.find("li"),s=[];for(r=0,i=n.length;r<i;r++)t=n[r],t=e(t),t.hasClass("group-result")?s.push(t.css("display","auto")):!this.is_multiple||!t.hasClass("result-selected")?s.push(this.result_activate(t)):s.push(void 0);return s},i.prototype.winnow_results_set_highlight=function(){var e,t;if(!this.result_highlight){t=this.is_multiple?[]:this.search_results.find(".result-selected.active-result"),e=t.length?t.first():this.search_results.find(".active-result").first();if(e!=null)return this.result_do_highlight(e)}},i.prototype.no_results=function(t){var n;return n=e('<li class="no-results">'+this.results_none_found+' "<span></span>"</li>'),n.find("span").first().html(t),this.search_results.append(n)},i.prototype.no_results_clear=function(){return this.search_results.find(".no-results").remove()},i.prototype.keydown_arrow=function(){var t,n;this.result_highlight?this.results_showing&&(n=this.result_highlight.nextAll("li.active-result").first(),n&&this.result_do_highlight(n)):(t=this.search_results.find("li.active-result").first(),t&&this.result_do_highlight(e(t)));if(!this.results_showing)return this.results_show()},i.prototype.keyup_arrow=function(){var e;if(!this.results_showing&&!this.is_multiple)return this.results_show();if(this.result_highlight)return e=this.result_highlight.prevAll("li.active-result"),e.length?this.result_do_highlight(e.first()):(this.choices>0&&this.results_hide(),this.result_clear_highlight())},i.prototype.keydown_backstroke=function(){var e;if(this.pending_backstroke)return this.choice_destroy(this.pending_backstroke.find("a").first()),this.clear_backstroke();e=this.search_container.siblings("li.search-choice").last();if(e.length&&!e.hasClass("search-choice-disabled"))return this.pending_backstroke=e,this.single_backstroke_delete?this.keydown_backstroke():this.pending_backstroke.addClass("search-choice-focus")},i.prototype.clear_backstroke=function(){return this.pending_backstroke&&this.pending_backstroke.removeClass("search-choice-focus"),this.pending_backstroke=null},i.prototype.keydown_checker=function(e){var t,n;t=(n=e.which)!=null?n:e.keyCode,this.search_field_scale(),t!==8&&this.pending_backstroke&&this.clear_backstroke();switch(t){case 8:this.backstroke_length=this.search_field.val().length;break;case 9:this.results_showing&&!this.is_multiple&&this.result_select(e),this.mouse_on_container=!1;break;case 13:e.preventDefault();break;case 38:e.preventDefault(),this.keyup_arrow();break;case 40:this.keydown_arrow()}},i.prototype.search_field_scale=function(){var t,n,r,i,s,o,u,a,f;if(this.is_multiple){r=0,u=0,s="position:absolute; left: -1000px; top: -1000px; display:none;",o=["font-size","font-style","font-weight","font-family","line-height","text-transform","letter-spacing"];for(a=0,f=o.length;a<f;a++)i=o[a],s+=i+":"+this.search_field.css(i)+";";return n=e("<div />",{style:s}),n.text(this.search_field.val()),e("body").append(n),u=n.width()+25,n.remove(),u>this.f_width-10&&(u=this.f_width-10),this.search_field.css({width:u+"px"}),t=this.container.height(),this.dropdown.css({top:t+"px"})}},i.prototype.generate_random_id=function(){var t;t="sel"+this.generate_random_char()+this.generate_random_char()+this.generate_random_char();while(e("#"+t).length>0)t+=this.generate_random_char();return t},i}(AbstractChosen),r.Chosen=t,n=function(e){var t;return t=e.outerWidth()-e.width()},r.get_side_border_padding=n}.call(this);
/*
 Rangy Text Inputs, a cross-browser textarea and text input library plug-in for jQuery.

 Part of Rangy, a cross-browser JavaScript range and selection library
 http://code.google.com/p/rangy/

 Depends on jQuery 1.0 or later.

 Copyright 2010, Tim Down
 Licensed under the MIT license.
 Version: 0.1.205
 Build date: 5 November 2010
*/
;(function(n){function o(e,g){var a=typeof e[g];return a==="function"||!!(a=="object"&&e[g])||a=="unknown"}function p(e,g,a){if(g<0)g+=e.value.length;if(typeof a=="undefined")a=g;if(a<0)a+=e.value.length;return{start:g,end:a}}function k(){return typeof document.body=="object"&&document.body?document.body:document.getElementsByTagName("body")[0]}var i,h,q,l,r,s,t,u,m;n(document).ready(function(){function e(a,b){return function(){var c=this.jquery?this[0]:this,d=c.nodeName.toLowerCase();if(c.nodeType==
1&&(d=="textarea"||d=="input"&&c.type=="text")){c=[c].concat(Array.prototype.slice.call(arguments));c=a.apply(this,c);if(!b)return c}if(b)return this}}var g=document.createElement("textarea");k().appendChild(g);if(typeof g.selectionStart!="undefined"&&typeof g.selectionEnd!="undefined"){i=function(a){return{start:a.selectionStart,end:a.selectionEnd,length:a.selectionEnd-a.selectionStart,text:a.value.slice(a.selectionStart,a.selectionEnd)}};h=function(a,b,c){b=p(a,b,c);a.selectionStart=b.start;a.selectionEnd=
b.end};m=function(a,b){if(b)a.selectionEnd=a.selectionStart;else a.selectionStart=a.selectionEnd}}else if(o(g,"createTextRange")&&typeof document.selection=="object"&&document.selection&&o(document.selection,"createRange")){i=function(a){var b=0,c=0,d,f,j;if((j=document.selection.createRange())&&j.parentElement()==a){f=a.value.length;d=a.value.replace(/\r\n/g,"\n");c=a.createTextRange();c.moveToBookmark(j.getBookmark());j=a.createTextRange();j.collapse(false);if(c.compareEndPoints("StartToEnd",j)>
-1)b=c=f;else{b=-c.moveStart("character",-f);b+=d.slice(0,b).split("\n").length-1;if(c.compareEndPoints("EndToEnd",j)>-1)c=f;else{c=-c.moveEnd("character",-f);c+=d.slice(0,c).split("\n").length-1}}}return{start:b,end:c,length:c-b,text:a.value.slice(b,c)}};h=function(a,b,c){b=p(a,b,c);c=a.createTextRange();var d=b.start-(a.value.slice(0,b.start).split("\r\n").length-1);c.collapse(true);if(b.start==b.end)c.move("character",d);else{c.moveEnd("character",b.end-(a.value.slice(0,b.end).split("\r\n").length-
1));c.moveStart("character",d)}c.select()};m=function(a,b){var c=document.selection.createRange();c.collapse(b);c.select()}}else{k().removeChild(g);window.console&&window.console.log&&window.console.log("TextInputs module for Rangy not supported in your browser. Reason: No means of finding text input caret position");return}k().removeChild(g);l=function(a,b,c,d){var f;if(b!=c){f=a.value;a.value=f.slice(0,b)+f.slice(c)}d&&h(a,b,b)};q=function(a){var b=i(a);l(a,b.start,b.end,true)};u=function(a){var b=
i(a),c;if(b.start!=b.end){c=a.value;a.value=c.slice(0,b.start)+c.slice(b.end)}h(a,b.start,b.start);return b.text};r=function(a,b,c,d){var f=a.value;a.value=f.slice(0,c)+b+f.slice(c);if(d){b=c+b.length;h(a,b,b)}};s=function(a,b){var c=i(a),d=a.value;a.value=d.slice(0,c.start)+b+d.slice(c.end);c=c.start+b.length;h(a,c,c)};t=function(a,b,c){var d=i(a),f=a.value;a.value=f.slice(0,d.start)+b+d.text+c+f.slice(d.end);b=d.start+b.length;h(a,b,b+d.length)};n.fn.extend({getSelection:e(i,false),setSelection:e(h,
true),collapseSelection:e(m,true),deleteSelectedText:e(q,true),deleteText:e(l,true),extractSelectedText:e(u,false),insertText:e(r,true),replaceSelectedText:e(s,true),surroundSelectedText:e(t,true)})})})(jQuery);
/*
    tabSlideOUt v1.3
    
    By William Paoli: http://wpaoli.building58.com

    To use you must have an image ready to go as your tab
    Make sure to pass in at minimum the path to the image and its dimensions:
    
    example:
    
        $('.slide-out-div').tabSlideOut({
                tabHandle: '.handle',                         //class of the element that will be your tab -doesnt have to be an anchor
                pathToTabImage: 'images/contact_tab.gif',     //relative path to the image for the tab
                imageHeight: '133px',                         //height of tab image
                imageWidth: '44px',                           //width of tab image   
        });

    or you can leave out these options
    and set the image properties using css
    
*/


(function($){
    
    var defaults = {
        tabHandle: '.handle',
        speed: 300, 
        action: 'click',
        tabLocation: 'left',
        topPos: '200px',
        leftPos: '20px',
        fixedPosition: false,
        positioning: 'absolute',
        pathToTabImage: null,
        imageHeight: null,
        imageWidth: null,
        onLoadSlideOut: false,
        topReferenceElement: null,
        height: null  
    };
    
    var recomputeProperties = function (obj, settings) {
        var height = obj.outerHeight();
        if (typeof(settings.height) === "function") {
            height = settings.height(obj);
        }
            
        return {
                containerWidth: parseInt(obj.outerWidth(), 10) + 'px',
                containerHeight: parseInt(height, 10) + 20 + 'px',
                tabWidth: parseInt(settings.tabHandle.outerWidth(), 10) + 'px',
                tab
                : parseInt(settings.tabHandle.outerHeight(), 10) + 'px'
        };
    };
    
    var setBoxCSS = function (obj, settings, properties) {
        //set calculated css
        if(settings.tabLocation === 'top' || settings.tabLocation === 'bottom') {
            obj.css({'left' : settings.leftPos});
            settings.tabHandle.css({'right' : 0});
        }
        
        if(settings.tabLocation === 'top') {
            obj.css({'top' : '-' + properties.containerHeight});
            settings.tabHandle.css({'bottom' : '-' + properties.tabHeight});
        }

        if(settings.tabLocation === 'bottom') {
            obj.css({'bottom' : '-' + properties.containerHeight, 'position' : 'fixed'});
            settings.tabHandle.css({'top' : '-' + properties.tabHeight});
            
        }
        
        if(settings.tabLocation === 'left' || settings.tabLocation === 'right') {
            var top = parseInt(settings.topPos, 10);
            var topPos = parseInt(settings.topPos, 10);
            var diff = 0;
            if (settings.topReferenceElement) {
                top = $(settings.topReferenceElement).position().top;
                diff = topPos - top;
            }
                
            console.log("diff", diff, "top", top, "topPos", topPos, "height", 
                properties.containerHeight);
                
            obj.css({
                'height' : properties.containerHeight,
                'top' : top
            });
            
            settings.tabHandle.css({'top' : topPos + "px"});
        }
        
        if(settings.tabLocation === 'left') {
            obj.css({ 'left': '-' + properties.containerWidth});
            settings.tabHandle.css({'right' : '-' + properties.tabWidth});
        }

        if(settings.tabLocation === 'right') {
            obj.css({ 'right': '-' + properties.containerWidth});
            settings.tabHandle.css({'left' : '-' + properties.tabWidth});
            
            $('html').css('overflow-x', 'hidden');
        }
    };
    
    var methods = {
        refresh: function () {
            console.log("this", $(this))
            var data = $(this).data('tabSlideOut');
            if (data) {
                var properties = recomputeProperties($(this), data);
                setBoxCSS(this, data, properties);
                console.log("reset", properties)
            } else {
                
            }
        }
    };
    
    $.fn.tabSlideOut = function(callerSettings) {
        
        if (typeof(callerSettings) === "string") {
            if (methods[callerSettings]) {
                return methods[callerSettings].apply(
                    this, Array.prototype.slice.call(arguments, 1));
            }
            return;
        }
        
        var settings = $.extend(defaults, callerSettings||{});

        var data = $(this).data('tabSlideOut');
        if (!data) {
            $(this).data('tabSlideOut', settings);
        }

        settings.tabHandle = $(settings.tabHandle);
        var obj = this;
        if (settings.fixedPosition === true) {
            settings.positioning = 'fixed';
        } else {
            settings.positioning = 'absolute';
        }
        
        //ie6 doesn't do well with the fixed option
        if (document.all && !window.opera && !window.XMLHttpRequest) {
            settings.positioning = 'absolute';
        }
        

        
        //set initial tabHandle css
        
        if (settings.pathToTabImage != null) {
            settings.tabHandle.css({
            'background' : 'url('+settings.pathToTabImage+') no-repeat',
            'width' : settings.imageWidth,
            'height': settings.imageHeight
            });
        }
        
        settings.tabHandle.css({ 
            'display': 'block',
            'textIndent' : '-99999px',
            'outline' : 'none',
            'position' : 'absolute'
        });
        
        obj.css({
            'line-height' : '1',
            'position' : settings.positioning
        });
        
        var properties = recomputeProperties(obj, settings);
        setBoxCSS(obj, settings, properties);
        
        //functions for animation events
        
        settings.tabHandle.click(function(event){
            event.preventDefault();
        });
        
        var slideIn = function() {
            
            if (obj.hasClass('open')) {
                var properties = recomputeProperties(obj, settings);

                console.log("props", properties)
            
                if (settings.tabLocation === 'top') {
                    obj.animate({top:'-' + properties.containerHeight}, settings.speed).removeClass('open');
                } else if (settings.tabLocation === 'left') {
                    obj.animate({left: '-' + properties.containerWidth}, settings.speed).removeClass('open');
                } else if (settings.tabLocation === 'right') {
                    obj.animate({right: '-' + properties.containerWidth}, settings.speed).removeClass('open');
                } else if (settings.tabLocation === 'bottom') {
                    obj.animate({bottom: '-' + properties.containerHeight}, settings.speed).removeClass('open');
                }    
            }
        };
        
        var slideOut = function() {
            var properties = recomputeProperties(obj, settings);
            setBoxCSS(obj, settings, properties);
            console.log("props out", properties)
            console.log(obj[0].scrollHeight)
            
            if (settings.tabLocation == 'top') {
                obj.animate({top:'-3px'},  settings.speed).addClass('open');
            } else if (settings.tabLocation == 'left') {
                obj.animate({left:'-3px'},  settings.speed).addClass('open');
            } else if (settings.tabLocation == 'right') {
                obj.animate({right:'-3px'},  settings.speed).addClass('open');
            } else if (settings.tabLocation == 'bottom') {
                obj.animate({bottom:'-3px'},  settings.speed).addClass('open');
            }
        };

        var clickScreenToClose = function() {
            obj.click(function(event){
                event.stopPropagation();
            });
            
            $(document).click(function(){
                slideIn();
            });
        };
        
        var clickAction = function(){
            settings.tabHandle.click(function(event){
                if (obj.hasClass('open')) {
                    slideIn();
                } else {
                    slideOut();
                }
            });
            
            clickScreenToClose();
        };
        
        var hoverAction = function(){
            obj.hover(
                function(){
                    slideOut();
                },
                
                function(){
                    slideIn();
                });
                
                settings.tabHandle.click(function(event){
                    if (obj.hasClass('open')) {
                        slideIn();
                    }
                });
                clickScreenToClose();
                
        };
        
        var slideOutOnLoad = function(){
            slideIn();
            setTimeout(slideOut, 500);
        };
        
        //choose which type of action to bind
        if (settings.action === 'click') {
            clickAction();
        }
        
        if (settings.action === 'hover') {
            hoverAction();
        }
        
        if (settings.onLoadSlideOut) {
            slideOutOnLoad();
        };
        
    };
})(jQuery);

/**
 * Copyright (c) 2007-2012 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * @author Ariel Flesler
 * @version 1.4.4
 */
;(function($){var h=$.scrollTo=function(a,b,c){$(window).scrollTo(a,b,c)};h.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:true};h.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(e,f,g){if(typeof f=='object'){g=f;f=0}if(typeof g=='function')g={onAfter:g};if(e=='max')e=9e9;g=$.extend({},h.defaults,g);f=f||g.duration;g.queue=g.queue&&g.axis.length>1;if(g.queue)f/=2;g.offset=both(g.offset);g.over=both(g.over);return this._scrollable().each(function(){if(e==null)return;var d=this,$elem=$(d),targ=e,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}$.each(g.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=h.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(g.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=g.offset[pos]||0;if(g.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*g.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(g.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&g.queue){if(old!=attr[key])animate(g.onAfterFirst);delete attr[key]}});animate(g.onAfter);function animate(a){$elem.animate(attr,f,g.easing,a&&function(){a.call(this,e,g)})}}).end()};h.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);
/*
 * zClip :: jQuery ZeroClipboard v1.1.1
 * http://steamdev.com/zclip
 *
 * Copyright 2011, SteamDev
 * Released under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Date: Wed Jun 01, 2011
 */


(function ($) {

    $.fn.zclip = function (params) {

        if (typeof params == "object" && !params.length) {

            var settings = $.extend({

                path: 'ZeroClipboard.swf',
                copy: null,
                beforeCopy: null,
                afterCopy: null,
                clickAfter: true,
                setHandCursor: true,
                setCSSEffects: true

            }, params);
			

            return this.each(function () {

                var o = $(this);

                if (o.is(':visible') && (typeof settings.copy == 'string' || $.isFunction(settings.copy))) {

                    ZeroClipboard.setMoviePath(settings.path);
                    var clip = new ZeroClipboard.Client();
                    
                    if($.isFunction(settings.copy)){
                    	o.bind('zClip_copy',settings.copy);
                    }
                    if($.isFunction(settings.beforeCopy)){
                    	o.bind('zClip_beforeCopy',settings.beforeCopy);
                    }
                    if($.isFunction(settings.afterCopy)){
                    	o.bind('zClip_afterCopy',settings.afterCopy);
                    }                    

                    clip.setHandCursor(settings.setHandCursor);
                    clip.setCSSEffects(settings.setCSSEffects);
                    clip.addEventListener('mouseOver', function (client) {
                        o.trigger('mouseenter');
                    });
                    clip.addEventListener('mouseOut', function (client) {
                        o.trigger('mouseleave');
                    });
                    clip.addEventListener('mouseDown', function (client) {

                        o.trigger('mousedown');
                        
			if(!$.isFunction(settings.copy)){
			   clip.setText(settings.copy);
			} else {
			   clip.setText(o.triggerHandler('zClip_copy'));
			}                        
                        
                        if ($.isFunction(settings.beforeCopy)) {
                            o.trigger('zClip_beforeCopy');                            
                        }

                    });

                    clip.addEventListener('complete', function (client, text) {

                        if ($.isFunction(settings.afterCopy)) {
                            
                            o.trigger('zClip_afterCopy');

                        } else {
                            if (text.length > 500) {
                                text = text.substr(0, 500) + "...\n\n(" + (text.length - 500) + " characters not shown)";
                            }
							
			    o.removeClass('hover');
                            alert("Copied text to clipboard:\n\n " + text);
                        }

                        if (settings.clickAfter) {
                            o.trigger('click');
                        }

                    });

					
                    clip.glue(o[0], o.parent()[0]);
					
		    $(window).bind('load resize',function(){clip.reposition();});
					

                }

            });

        } else if (typeof params == "string") {

            return this.each(function () {

                var o = $(this);

                params = params.toLowerCase();
                var zclipId = o.data('zclipId');
                var clipElm = $('#' + zclipId + '.zclip');

                if (params == "remove") {

                    clipElm.remove();
                    o.removeClass('active hover');

                } else if (params == "hide") {

                    clipElm.hide();
                    o.removeClass('active hover');

                } else if (params == "show") {

                    clipElm.show();

                }

            });

        }

    }	
	
	

})(jQuery);







// ZeroClipboard
// Simple Set Clipboard System
// Author: Joseph Huckaby
var ZeroClipboard = {

    version: "1.0.7",
    clients: {},
    // registered upload clients on page, indexed by id
    moviePath: 'ZeroClipboard.swf',
    // URL to movie
    nextId: 1,
    // ID of next movie
    $: function (thingy) {
        // simple DOM lookup utility function
        if (typeof(thingy) == 'string') thingy = document.getElementById(thingy);
        if (!thingy.addClass) {
            // extend element with a few useful methods
            thingy.hide = function () {
                this.style.display = 'none';
            };
            thingy.show = function () {
                this.style.display = '';
            };
            thingy.addClass = function (name) {
                this.removeClass(name);
                this.className += ' ' + name;
            };
            thingy.removeClass = function (name) {
                var classes = this.className.split(/\s+/);
                var idx = -1;
                for (var k = 0; k < classes.length; k++) {
                    if (classes[k] == name) {
                        idx = k;
                        k = classes.length;
                    }
                }
                if (idx > -1) {
                    classes.splice(idx, 1);
                    this.className = classes.join(' ');
                }
                return this;
            };
            thingy.hasClass = function (name) {
                return !!this.className.match(new RegExp("\\s*" + name + "\\s*"));
            };
        }
        return thingy;
    },

    setMoviePath: function (path) {
        // set path to ZeroClipboard.swf
        this.moviePath = path;
    },

    dispatch: function (id, eventName, args) {
        // receive event from flash movie, send to client		
        var client = this.clients[id];
        if (client) {
            client.receiveEvent(eventName, args);
        }
    },

    register: function (id, client) {
        // register new client to receive events
        this.clients[id] = client;
    },

    getDOMObjectPosition: function (obj, stopObj) {
        // get absolute coordinates for dom element
        var info = {
            left: 0,
            top: 0,
            width: obj.width ? obj.width : obj.offsetWidth,
            height: obj.height ? obj.height : obj.offsetHeight
        };

        if (obj && (obj != stopObj)) {
			info.left += obj.offsetLeft;
            info.top += obj.offsetTop;
        }

        return info;
    },

    Client: function (elem) {
        // constructor for new simple upload client
        this.handlers = {};

        // unique ID
        this.id = ZeroClipboard.nextId++;
        this.movieId = 'ZeroClipboardMovie_' + this.id;

        // register client with singleton to receive flash events
        ZeroClipboard.register(this.id, this);

        // create movie
        if (elem) this.glue(elem);
    }
};

ZeroClipboard.Client.prototype = {

    id: 0,
    // unique ID for us
    ready: false,
    // whether movie is ready to receive events or not
    movie: null,
    // reference to movie object
    clipText: '',
    // text to copy to clipboard
    handCursorEnabled: true,
    // whether to show hand cursor, or default pointer cursor
    cssEffects: true,
    // enable CSS mouse effects on dom container
    handlers: null,
    // user event handlers
    glue: function (elem, appendElem, stylesToAdd) {
        // glue to DOM element
        // elem can be ID or actual DOM element object
        this.domElement = ZeroClipboard.$(elem);

        // float just above object, or zIndex 99 if dom element isn't set
        var zIndex = 99;
        if (this.domElement.style.zIndex) {
            zIndex = parseInt(this.domElement.style.zIndex, 10) + 1;
        }

        if (typeof(appendElem) == 'string') {
            appendElem = ZeroClipboard.$(appendElem);
        } else if (typeof(appendElem) == 'undefined') {
            appendElem = document.getElementsByTagName('body')[0];
        }

        // find X/Y position of domElement
        var box = ZeroClipboard.getDOMObjectPosition(this.domElement, appendElem);

        // create floating DIV above element
        this.div = document.createElement('div');
        this.div.className = "zclip";
        this.div.id = "zclip-" + this.movieId;
        $(this.domElement).data('zclipId', 'zclip-' + this.movieId);
        var style = this.div.style;
        style.position = 'absolute';
        style.left = '' + box.left + 'px';
        style.top = '' + box.top + 'px';
        style.width = '' + box.width + 'px';
        style.height = '' + box.height + 'px';
        style.zIndex = zIndex;

        if (typeof(stylesToAdd) == 'object') {
            for (addedStyle in stylesToAdd) {
                style[addedStyle] = stylesToAdd[addedStyle];
            }
        }

        // style.backgroundColor = '#f00'; // debug
        appendElem.appendChild(this.div);

        this.div.innerHTML = this.getHTML(box.width, box.height);
    },

    getHTML: function (width, height) {
        // return HTML for movie
        var html = '';
        var flashvars = 'id=' + this.id + '&width=' + width + '&height=' + height;

        if (navigator.userAgent.match(/MSIE/)) {
            // IE gets an OBJECT tag
            var protocol = location.href.match(/^https/i) ? 'https://' : 'http://';
            html += '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="' + protocol + 'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="' + width + '" height="' + height + '" id="' + this.movieId + '" align="middle"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="' + ZeroClipboard.moviePath + '" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="' + flashvars + '"/><param name="wmode" value="transparent"/></object>';
        } else {
            // all other browsers get an EMBED tag
            html += '<embed id="' + this.movieId + '" src="' + ZeroClipboard.moviePath + '" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="' + width + '" height="' + height + '" name="' + this.movieId + '" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="' + flashvars + '" wmode="transparent" />';
        }
        return html;
    },

    hide: function () {
        // temporarily hide floater offscreen
        if (this.div) {
            this.div.style.left = '-2000px';
        }
    },

    show: function () {
        // show ourselves after a call to hide()
        this.reposition();
    },

    destroy: function () {
        // destroy control and floater
        if (this.domElement && this.div) {
            this.hide();
            this.div.innerHTML = '';

            var body = document.getElementsByTagName('body')[0];
            try {
                body.removeChild(this.div);
            } catch (e) {;
            }

            this.domElement = null;
            this.div = null;
        }
    },

    reposition: function (elem) {
        // reposition our floating div, optionally to new container
        // warning: container CANNOT change size, only position
        if (elem) {
            this.domElement = ZeroClipboard.$(elem);
            if (!this.domElement) this.hide();
        }

        if (this.domElement && this.div) {
            var box = ZeroClipboard.getDOMObjectPosition(this.domElement);
            var style = this.div.style;
            style.left = '' + box.left + 'px';
            style.top = '' + box.top + 'px';
        }
    },

    setText: function (newText) {
        // set text to be copied to clipboard
        this.clipText = newText;
        if (this.ready) {
            this.movie.setText(newText);
        }
    },

    addEventListener: function (eventName, func) {
        // add user event listener for event
        // event types: load, queueStart, fileStart, fileComplete, queueComplete, progress, error, cancel
        eventName = eventName.toString().toLowerCase().replace(/^on/, '');
        if (!this.handlers[eventName]) {
            this.handlers[eventName] = [];
        }
        this.handlers[eventName].push(func);
    },

    setHandCursor: function (enabled) {
        // enable hand cursor (true), or default arrow cursor (false)
        this.handCursorEnabled = enabled;
        if (this.ready) {
            this.movie.setHandCursor(enabled);
        }
    },

    setCSSEffects: function (enabled) {
        // enable or disable CSS effects on DOM container
        this.cssEffects = !! enabled;
    },

    receiveEvent: function (eventName, args) {
        // receive event from flash
        eventName = eventName.toString().toLowerCase().replace(/^on/, '');

        // special behavior for certain events
        switch (eventName) {
        case 'load':
            // movie claims it is ready, but in IE this isn't always the case...
            // bug fix: Cannot extend EMBED DOM elements in Firefox, must use traditional function
            this.movie = document.getElementById(this.movieId);
            if (!this.movie) {
                var self = this;
                setTimeout(function () {
                    self.receiveEvent('load', null);
                }, 1);
                return;
            }

            // firefox on pc needs a "kick" in order to set these in certain cases
            if (!this.ready && navigator.userAgent.match(/Firefox/) && navigator.userAgent.match(/Windows/)) {
                var self = this;
                setTimeout(function () {
                    self.receiveEvent('load', null);
                }, 100);
                this.ready = true;
                return;
            }

            this.ready = true;
            try {
                this.movie.setText(this.clipText);
            } catch (e) {}
            try {
                this.movie.setHandCursor(this.handCursorEnabled);
            } catch (e) {}
            break;

        case 'mouseover':
            if (this.domElement && this.cssEffects) {
                this.domElement.addClass('hover');
                if (this.recoverActive) {
                    this.domElement.addClass('active');
                }


            }


            break;

        case 'mouseout':
            if (this.domElement && this.cssEffects) {
                this.recoverActive = false;
                if (this.domElement.hasClass('active')) {
                    this.domElement.removeClass('active');
                    this.recoverActive = true;
                }
                this.domElement.removeClass('hover');

            }
            break;

        case 'mousedown':
            if (this.domElement && this.cssEffects) {
                this.domElement.addClass('active');
            }
            break;

        case 'mouseup':
            if (this.domElement && this.cssEffects) {
                this.domElement.removeClass('active');
                this.recoverActive = false;
            }
            break;
        } // switch eventName
        if (this.handlers[eventName]) {
            for (var idx = 0, len = this.handlers[eventName].length; idx < len; idx++) {
                var func = this.handlers[eventName][idx];

                if (typeof(func) == 'function') {
                    // actual function reference
                    func(this, args);
                } else if ((typeof(func) == 'object') && (func.length == 2)) {
                    // PHP style object + method, i.e. [myObject, 'myMethod']
                    func[0][func[1]](this, args);
                } else if (typeof(func) == 'string') {
                    // name of function
                    window[func](this, args);
                }
            } // foreach event handler defined
        } // user defined handler for event
    }

};	


/**
* Bootstrap.js by @fat & @mdo
* plugins: bootstrap-transition.js, bootstrap-modal.js, bootstrap-dropdown.js, bootstrap-button.js, bootstrap-typeahead.js
* Copyright 2012 Twitter, Inc.
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/
!function(a){a(function(){a.support.transition=function(){var a=function(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},c;for(c in b)if(a.style[c]!==undefined)return b[c]}();return a&&{end:a}}()})}(window.jQuery),!function(a){var b=function(b,c){this.options=c,this.$element=a(b).delegate('[data-dismiss="modal"]',"click.dismiss.modal",a.proxy(this.hide,this)),this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)};b.prototype={constructor:b,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var b=this,c=a.Event("show");this.$element.trigger(c);if(this.isShown||c.isDefaultPrevented())return;this.isShown=!0,this.escape(),this.backdrop(function(){var c=a.support.transition&&b.$element.hasClass("fade");b.$element.parent().length||b.$element.appendTo(document.body),b.$element.show(),c&&b.$element[0].offsetWidth,b.$element.addClass("in").attr("aria-hidden",!1),b.enforceFocus(),c?b.$element.one(a.support.transition.end,function(){b.$element.focus().trigger("shown")}):b.$element.focus().trigger("shown")})},hide:function(b){b&&b.preventDefault();var c=this;b=a.Event("hide"),this.$element.trigger(b);if(!this.isShown||b.isDefaultPrevented())return;this.isShown=!1,this.escape(),a(document).off("focusin.modal"),this.$element.removeClass("in").attr("aria-hidden",!0),a.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal()},enforceFocus:function(){var b=this;a(document).on("focusin.modal",function(a){b.$element[0]!==a.target&&!b.$element.has(a.target).length&&b.$element.focus()})},escape:function(){var a=this;this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.modal",function(b){b.which==27&&a.hide()}):this.isShown||this.$element.off("keyup.dismiss.modal")},hideWithTransition:function(){var b=this,c=setTimeout(function(){b.$element.off(a.support.transition.end),b.hideModal()},500);this.$element.one(a.support.transition.end,function(){clearTimeout(c),b.hideModal()})},hideModal:function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden")})},removeBackdrop:function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},backdrop:function(b){var c=this,d=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var e=a.support.transition&&d;this.$backdrop=a('<div class="modal-backdrop '+d+'" />').appendTo(document.body),this.$backdrop.click(this.options.backdrop=="static"?a.proxy(this.$element[0].focus,this.$element[0]):a.proxy(this.hide,this)),e&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in");if(!b)return;e?this.$backdrop.one(a.support.transition.end,b):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b):b()):b&&b()}};var c=a.fn.modal;a.fn.modal=function(c){return this.each(function(){var d=a(this),e=d.data("modal"),f=a.extend({},a.fn.modal.defaults,d.data(),typeof c=="object"&&c);e||d.data("modal",e=new b(this,f)),typeof c=="string"?e[c]():f.show&&e.show()})},a.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());b.preventDefault(),e.modal(f).one("hide",function(){c.focus()})})}(window.jQuery),!function(a){function d(){a(b).each(function(){e(a(this)).removeClass("open")})}function e(b){var c=b.attr("data-target"),d;c||(c=b.attr("href"),c=c&&/#/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,"")),d=c&&a(c);if(!d||!d.length)d=b.parent();return d}var b="[data-toggle=dropdown]",c=function(b){var c=a(b).on("click.dropdown.data-api",this.toggle);a("html").on("click.dropdown.data-api",function(){c.parent().removeClass("open")})};c.prototype={constructor:c,toggle:function(b){var c=a(this),f,g;if(c.is(".disabled, :disabled"))return;return f=e(c),g=f.hasClass("open"),d(),g||f.toggleClass("open"),c.focus(),!1},keydown:function(c){var d,f,g,h,i,j;if(!/(38|40|27)/.test(c.keyCode))return;d=a(this),c.preventDefault(),c.stopPropagation();if(d.is(".disabled, :disabled"))return;h=e(d),i=h.hasClass("open");if(!i||i&&c.keyCode==27)return c.which==27&&h.find(b).focus(),d.click();f=a("[role=menu] li:not(.divider):visible a",h);if(!f.length)return;j=f.index(f.filter(":focus")),c.keyCode==38&&j>0&&j--,c.keyCode==40&&j<f.length-1&&j++,~j||(j=0),f.eq(j).focus()}};var f=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var d=a(this),e=d.data("dropdown");e||d.data("dropdown",e=new c(this)),typeof b=="string"&&e[b].call(d)})},a.fn.dropdown.Constructor=c,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=f,this},a(document).on("click.dropdown.data-api",d).on("click.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.dropdown-menu",function(a){a.stopPropagation()}).on("click.dropdown.data-api",b,c.prototype.toggle).on("keydown.dropdown.data-api",b+", [role=menu]",c.prototype.keydown)}(window.jQuery),!function(a){var b=function(b,c){this.$element=a(b),this.options=a.extend({},a.fn.button.defaults,c)};b.prototype.setState=function(a){var b="disabled",c=this.$element,d=c.data(),e=c.is("input")?"val":"html";a+="Text",d.resetText||c.data("resetText",c[e]()),c[e](d[a]||this.options[a]),setTimeout(function(){a=="loadingText"?c.addClass(b).attr(b,b):c.removeClass(b).removeAttr(b)},0)},b.prototype.toggle=function(){var a=this.$element.closest('[data-toggle="buttons-radio"]');a&&a.find(".active").removeClass("active"),this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("button"),f=typeof c=="object"&&c;e||d.data("button",e=new b(this,f)),c=="toggle"?e.toggle():c&&e.setState(c)})},a.fn.button.defaults={loadingText:"loading..."},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle")})}(window.jQuery),!function(a){var b=function(b,c){this.$element=a(b),this.options=a.extend({},a.fn.typeahead.defaults,c),this.matcher=this.options.matcher||this.matcher,this.sorter=this.options.sorter||this.sorter,this.highlighter=this.options.highlighter||this.highlighter,this.updater=this.options.updater||this.updater,this.source=this.options.source,this.$menu=a(this.options.menu),this.shown=!1,this.listen()};b.prototype={constructor:b,select:function(){var a=this.$menu.find(".active").attr("data-value");return this.$element.val(this.updater(a)).change(),this.hide()},updater:function(a){return a},show:function(){var b=a.extend({},this.$element.position(),{height:this.$element[0].offsetHeight});return this.$menu.insertAfter(this.$element).css({top:b.top+b.height,left:b.left}).show(),this.shown=!0,this},hide:function(){return this.$menu.hide(),this.shown=!1,this},lookup:function(b){var c;return this.query=this.$element.val(),!this.query||this.query.length<this.options.minLength?this.shown?this.hide():this:(c=a.isFunction(this.source)?this.source(this.query,a.proxy(this.process,this)):this.source,c?this.process(c):this)},process:function(b){var c=this;return b=a.grep(b,function(a){return c.matcher(a)}),b=this.sorter(b),b.length?this.render(b.slice(0,this.options.items)).show():this.shown?this.hide():this},matcher:function(a){return~a.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(a){var b=[],c=[],d=[],e;while(e=a.shift())e.toLowerCase().indexOf(this.query.toLowerCase())?~e.indexOf(this.query)?c.push(e):d.push(e):b.push(e);return b.concat(c,d)},highlighter:function(a){var b=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");return a.replace(new RegExp("("+b+")","ig"),function(a,b){return"<strong>"+b+"</strong>"})},render:function(b){var c=this;return b=a(b).map(function(b,d){return b=a(c.options.item).attr("data-value",d),b.find("a").html(c.highlighter(d)),b[0]}),b.first().addClass("active"),this.$menu.html(b),this},next:function(b){var c=this.$menu.find(".active").removeClass("active"),d=c.next();d.length||(d=a(this.$menu.find("li")[0])),d.addClass("active")},prev:function(a){var b=this.$menu.find(".active").removeClass("active"),c=b.prev();c.length||(c=this.$menu.find("li").last()),c.addClass("active")},listen:function(){this.$element.on("focus",a.proxy(this.focus,this)).on("blur",a.proxy(this.blur,this)).on("keypress",a.proxy(this.keypress,this)).on("keyup",a.proxy(this.keyup,this)),this.eventSupported("keydown")&&this.$element.on("keydown",a.proxy(this.keydown,this)),this.$menu.on("click",a.proxy(this.click,this)).on("mouseenter","li",a.proxy(this.mouseenter,this)).on("mouseleave","li",a.proxy(this.mouseleave,this))},eventSupported:function(a){var b=a in this.$element;return b||(this.$element.setAttribute(a,"return;"),b=typeof this.$element[a]=="function"),b},move:function(a){if(!this.shown)return;switch(a.keyCode){case 9:case 13:case 27:a.preventDefault();break;case 38:a.preventDefault(),this.prev();break;case 40:a.preventDefault(),this.next()}a.stopPropagation()},keydown:function(b){this.suppressKeyPressRepeat=~a.inArray(b.keyCode,[40,38,9,13,27]),this.move(b)},keypress:function(a){if(this.suppressKeyPressRepeat)return;this.move(a)},keyup:function(a){switch(a.keyCode){case 40:case 38:case 16:case 17:case 18:break;case 9:case 13:if(!this.shown)return;this.select();break;case 27:if(!this.shown)return;this.hide();break;default:this.lookup()}a.stopPropagation(),a.preventDefault()},focus:function(a){this.focused=!0},blur:function(a){this.focused=!1,!this.mousedover&&this.shown&&this.hide()},click:function(a){a.stopPropagation(),a.preventDefault(),this.select(),this.$element.focus()},mouseenter:function(b){this.mousedover=!0,this.$menu.find(".active").removeClass("active"),a(b.currentTarget).addClass("active")},mouseleave:function(a){this.mousedover=!1,!this.focused&&this.shown&&this.hide()}};var c=a.fn.typeahead;a.fn.typeahead=function(c){return this.each(function(){var d=a(this),e=d.data("typeahead"),f=typeof c=="object"&&c;e||d.data("typeahead",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1},a.fn.typeahead.Constructor=b,a.fn.typeahead.noConflict=function(){return a.fn.typeahead=c,this},a(document).on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(b){var c=a(this);if(c.data("typeahead"))return;c.typeahead(c.data())})}(window.jQuery)
/**
* Bootstrap.js by @mdo and @fat, extended by @ArnoldDaniels.
* plugins: bootstrap-fileupload.js
* Copyright 2012 Twitter, Inc.
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/
!function(a){var b=function(b,c){this.$element=a(b),this.type=this.$element.data("uploadtype")||(this.$element.find(".thumbnail").length>0?"image":"file"),this.$input=this.$element.find(":file");if(this.$input.length===0)return;this.name=this.$input.attr("name")||c.name,this.$hidden=this.$element.find('input[type=hidden][name="'+this.name+'"]'),this.$hidden.length===0&&(this.$hidden=a('<input type="hidden" />'),this.$element.prepend(this.$hidden)),this.$preview=this.$element.find(".fileupload-preview");var d=this.$preview.css("height");this.$preview.css("display")!="inline"&&d!="0px"&&d!="none"&&this.$preview.css("line-height",d),this.original={exists:this.$element.hasClass("fileupload-exists"),preview:this.$preview.html(),hiddenVal:this.$hidden.val()},this.$remove=this.$element.find('[data-dismiss="fileupload"]'),this.$element.find('[data-trigger="fileupload"]').on("click.fileupload",a.proxy(this.trigger,this)),this.listen()};b.prototype={listen:function(){this.$input.on("change.fileupload",a.proxy(this.change,this)),a(this.$input[0].form).on("reset.fileupload",a.proxy(this.reset,this)),this.$remove&&this.$remove.on("click.fileupload",a.proxy(this.clear,this))},change:function(a,b){if(b==="clear")return;var c=a.target.files!==undefined?a.target.files[0]:a.target.value?{name:a.target.value.replace(/^.+\\/,"")}:null;if(!c){this.clear();return}this.$hidden.val(""),this.$hidden.attr("name",""),this.$input.attr("name",this.name);if(this.type==="image"&&this.$preview.length>0&&(typeof c.type!="undefined"?c.type.match("image.*"):c.name.match("\\.(gif|png|jpe?g)$"))&&typeof FileReader!="undefined"){var d=new FileReader,e=this.$preview,f=this.$element;d.onload=function(a){e.html('<img src="'+a.target.result+'" '+(e.css("max-height")!="none"?'style="max-height: '+e.css("max-height")+';"':"")+" />"),f.addClass("fileupload-exists").removeClass("fileupload-new")},d.readAsDataURL(c)}else this.$preview.text(c.name),this.$element.addClass("fileupload-exists").removeClass("fileupload-new")},clear:function(a){this.$hidden.val(""),this.$hidden.attr("name",this.name),this.$input.attr("name","");if(navigator.userAgent.match(/msie/i)){var b=this.$input.clone(!0);this.$input.after(b),this.$input.remove(),this.$input=b}else this.$input.val("");this.$preview.html(""),this.$element.addClass("fileupload-new").removeClass("fileupload-exists"),a&&(this.$input.trigger("change",["clear"]),a.preventDefault())},reset:function(a){this.clear(),this.$hidden.val(this.original.hiddenVal),this.$preview.html(this.original.preview),this.original.exists?this.$element.addClass("fileupload-exists").removeClass("fileupload-new"):this.$element.addClass("fileupload-new").removeClass("fileupload-exists")},trigger:function(a){this.$input.trigger("click"),a.preventDefault()}},a.fn.fileupload=function(c){return this.each(function(){var d=a(this),e=d.data("fileupload");e||d.data("fileupload",e=new b(this,c)),typeof c=="string"&&e[c]()})},a.fn.fileupload.Constructor=b,a(document).on("click.fileupload.data-api",'[data-provides="fileupload"]',function(b){var c=a(this);if(c.data("fileupload"))return;c.fileupload(c.data());var d=a(b.target).closest('[data-dismiss="fileupload"],[data-trigger="fileupload"]');d.length>0&&(d.trigger("click.fileupload"),b.preventDefault())})}(window.jQuery)
/*
 * jquery.ui draggable snap2
 * allow selection of sides to snap to
 * Steve Rubin - srubin@cs.berkeley.edu
 *
 * based directly on:
 * jQuery UI Draggable @VERSION
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/draggable/
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 *  jquery.ui.draggable.js
 */

;$.ui.plugin.add("draggable", "snap2", {
    start: function() {

        var i = $(this).data("ui-draggable"),
            o = i.options;

        i.snap2Elements = [];

        $(o.snap2.constructor !== String ? ( o.snap2.items || ":data(ui-draggable)" ) : o.snap2).each(function() {
            var $t = $(this),
                $o = $t.offset();
            if(this !== i.element[0]) {
                i.snap2Elements.push({
                    item: this,
                    width: $t.outerWidth(), height: $t.outerHeight(),
                    top: $o.top, left: $o.left
                });
            }
        });

    },
    drag: function(event, ui) {

        var ts, bs, ls, rs, l, r, t, b, i, first,
            inst = $(this).data("ui-draggable"),
            o = inst.options,
            d = o.snap2Tolerance,
            sides = o.snap2Sides,
            x1 = ui.offset.left, x2 = x1 + inst.helperProportions.width,
            y1 = ui.offset.top, y2 = y1 + inst.helperProportions.height;

        for (i = inst.snap2Elements.length - 1; i >= 0; i--){

            l = inst.snap2Elements[i].left;
            r = l + inst.snap2Elements[i].width;
            t = inst.snap2Elements[i].top;
            b = t + inst.snap2Elements[i].height;

            //Yes, I know, this is insane ;)
            if(!((l-d < x1 && x1 < r+d && t-d < y1 && y1 < b+d) || (l-d < x1 && x1 < r+d && t-d < y2 && y2 < b+d) || (l-d < x2 && x2 < r+d && t-d < y1 && y1 < b+d) || (l-d < x2 && x2 < r+d && t-d < y2 && y2 < b+d))) {
                if(inst.snap2Elements[i].snapping) {
                    (inst.options.snap2.release && inst.options.snap2.release.call(inst.element, event, $.extend(inst._uiHash(), { snap2Item: inst.snap2Elements[i].item })));
                }
                inst.snap2Elements[i].snapping = false;
                continue;
            }
            
            if(o.snap2Mode !== "inner") {
                ts = Math.abs(t - y2) <= d && sides.indexOf('t') !== -1;
                bs = Math.abs(b - y1) <= d && sides.indexOf('b') !== -1;
                ls = Math.abs(l - x2) <= d && sides.indexOf('l') !== -1;
                rs = Math.abs(r - x1) <= d && sides.indexOf('r') !== -1;
                if(ts) {
                    ui.position.top = inst._convertPositionTo("relative", { top: t - inst.helperProportions.height, left: 0 }).top - inst.margins.top;
                }
                if(bs) {
                    ui.position.top = inst._convertPositionTo("relative", { top: b, left: 0 }).top - inst.margins.top;
                }
                if(ls) {
                    ui.position.left = inst._convertPositionTo("relative", { top: 0, left: l - inst.helperProportions.width }).left - inst.margins.left;
                }
                if(rs) {
                    ui.position.left = inst._convertPositionTo("relative", { top: 0, left: r }).left - inst.margins.left;
                }
            }

            first = (ts || bs || ls || rs);

            if(o.snap2Mode !== "outer") {
                ts = Math.abs(t - y1) <= d && sides.indexOf('t') !== -1;
                bs = Math.abs(b - y2) <= d && sides.indexOf('b') !== -1;
                ls = Math.abs(l - x1) <= d && sides.indexOf('l') !== -1;
                rs = Math.abs(r - x2) <= d && sides.indexOf('r') !== -1;
                if(ts) {
                    ui.position.top = inst._convertPositionTo("relative", { top: t, left: 0 }).top - inst.margins.top;
                }
                if(bs) {
                    ui.position.top = inst._convertPositionTo("relative", { top: b - inst.helperProportions.height, left: 0 }).top - inst.margins.top;
                }
                if(ls) {
                    ui.position.left = inst._convertPositionTo("relative", { top: 0, left: l }).left - inst.margins.left;
                }
                if(rs) {
                    ui.position.left = inst._convertPositionTo("relative", { top: 0, left: r - inst.helperProportions.width }).left - inst.margins.left;
                }
            }

            if(!inst.snap2Elements[i].snapping && (ts || bs || ls || rs || first)) {
                (inst.options.snap2.snap2 && inst.options.snap2.snap2.call(inst.element, event, $.extend(inst._uiHash(), { snap2Item: inst.snap2Elements[i].item })));
            }
            inst.snap2Elements[i].snapping = (ts || bs || ls || rs || first);

        }

    }
});
// MultiCanvas and MultiContext
// This allows canvases to extend past the browser-defined
// width limit, while still treating the canvas like normal.

var EDIBLE = EDIBLE || {};

EDIBLE.namespace = function (ns_string) {
    var parts = ns_string.split('.');
    var parent = EDIBLE;
    var i;
    
    // strip redundant leading global
    if (parts[0] === "EDIBLE") {
        parts = parts.lice(1);
    }
    
    for (i = 0; i < parts.length; i += 1) {
        // create a property if it doesn't exist
        if (typeof parent[parts[i]] === "undefined") {
            parent[parts[i]] = {};
        }
        parent = parent[parts[i]];
    }
    return parent;
};

EDIBLE.namespace('modules.multiCanvas');
EDIBLE.namespace('modules.multiContext');

// module with constructor pattern
EDIBLE.modules.MultiContext = (function () {
    
    var updateContexts = function () {
        this.contexts = this.canvas.canvases.map(function (canv) {
            return canv.getContext('2d');
        });

        if (this._fillStyle !== undefined) {
            this.fillStyle = this._fillStyle;            
        }
        if (this._strokeStyle !== undefined) {
            this.strokeStyle = this._strokeStyle;
        }
        if (this._lineWidth !== undefined) {
            this.lineWidth = this._lineWidth;
        }
        
        this._position = {
            ctx: this.contexts[0],
            x: 0,
            y: 0,
            gx: 0,
            gy: 0
        }
        
    };
    
    var pointInContext = function (x, y, c_i) {
        var ctx = this.contexts[c_i];
        var left = c_i * this._maxWidth;
        var right = left + this._maxWidth;
        if (c_i === this.contexts.length - 1) {
            right = left + this.canvas.canvases[c_i].width;
        }
                
        if (x >= left && x < right) {
            return x - left;
        }
        return undefined;
    };
    
    var rectFuncFactory = function (funcName) {
        return function (x, y, width, height) {
            var i, lPt;
            var left = false;
            for (i = 0; i < this.contexts.length; i += 1) {
                lPt = this._pointInContext(x, y, i);
                rPt = this._pointInContext(x + width, y, i);
                
                if (lPt !== undefined && rPt !== undefined) {
                    this.contexts[i][funcName](lPt, y, width, height);
                    break;
                }
                
                if (lPt !== undefined) {
                    this.contexts[i][funcName](lPt, y,
                        this._maxWidth - lPt, height);
                    left = true;
                } else if (rPt !== undefined) {
                    this.contexts[i][funcName](0, y, rPt, height);
                    break;
                } else if (left) {
                    this.contexts[i][funcName](0, y, this._maxWidth, height);
                } 
            }
        }
    };
    
    var propSetter = function (propName) {
        return function (val) {
            var i;
            this['_' + propName] = val;
            if (val instanceof Array) {
                for (i = 0; i < this.contexts.length; i += 1) {
                    this.contexts[i][propName] = val[i];
                }
            } else {
                for (i = 0; i < this.contexts.length; i += 1) {
                    this.contexts[i][propName] = val;
                }

            }
            return val;
        }

    };
    
    var propGetter = function (propName) {
        return function () {
            return this['_' + propName];
        }
    };
    
    var universalFunc = function (funcName) {
        return function () {
            this.contexts.forEach(function (ctx) {
                ctx[funcName]();
            })
        };
    };
     
    // public API -- constructor
    MultiContext = function (mcanv, maxWidth) {
        var i;
        this.canvas = mcanv;
        this._maxWidth = maxWidth;
        this._updateContexts = updateContexts.bind(this);
        this._pointInContext = pointInContext.bind(this);
        this._updateContexts();
        this._position = {
            ctx: this.contexts[0],
            x: 0,
            y: 0,
            gx: 0,
            gy: 0
        }
    };
    
    // public API -- prototype
    MultiContext.prototype = {
        constructor: EDIBLE.modules.MultiContext,
        version: '0.1',
        
        createLinearGradient: function (x1, y1, x2, y2) {
            var i;
            var linearGradients = [];

            linearGradients = this.contexts.map(function (ctx) {
                return ctx.createLinearGradient(x1, y1, x2, y2);
            });

            linearGradients.addColorStop = function (position, color) {
                this.map(function (linGrad) {
                    linGrad.addColorStop(position, color);
                })
            };
            
            return linearGradients;
        }
    }
    
    var universals = ["save", "restore", "closePath", "beginPath", "stroke", "fill"];
    
    universals.forEach(function (univ) {
        MultiContext.prototype[univ] = universalFunc(univ);
    });
    
    var rectFuncs = ["clearRect", "strokeRect", "fillRect", "rect"];
    
    rectFuncs.forEach(function (rf) {
        MultiContext.prototype[rf] = rectFuncFactory(rf);
    });
    
    var moveTo = function (x, y) {
        var i;
        for (i = 0; i < this.contexts.length; i++) {
            pt = this._pointInContext(x, y, i);
            if (pt !== undefined) {
                this._position = {
                    ctx: this.contexts[i],
                    x: pt,
                    y: y,
                    gx: x,
                    gy: y
                };
                this.contexts[i].moveTo(pt, y);
            }
        }
    };
    
    var lineTo = function (x, y) {
        var i;
        var ctx;
        var offset = 0;
        for (i = 0; i < this.contexts.length; i++) {
            ctx = this.contexts[i]
            pt = this._pointInContext(x, y, i);
            if (pt !== undefined && ctx === this._position.ctx) {
                ctx.lineTo(pt, y);
                this._position = {
                    ctx: ctx,
                    x: pt,
                    y: y,
                    gx: x,
                    gy: y
                };
                break;
            }
            
            if (pt !== undefined && x < this._position.gx) {
                // line to the left
                m = (y - this._position.gy) / parseFloat(x - this._position.gx);
                var f = function (_x) { return m * (_x - x) + y };
                
                var newPos = {
                    ctx: ctx,
                    x: pt,
                    y: y,
                    gx: x,
                    gy: y
                };
                
                while (i < this.contexts.indexOf(this._position.ctx)) {
                    newY = f(offset + this.canvas.canvases[i].width);
                    ctx.moveTo(this.canvas.canvases[i].width, newY);
                    ctx.lineTo(pt, y);
                    pt = 0;
                    y = newY;
                    offset += this.canvas.canvases[i].width;
                    i += 1;
                    ctx = this.contexts[i];
                }
                
                this._position.ctx.lineTo(pt, y);
                
                this._position = newPos;
                break;
            }
            
            if (pt !== undefined && x > this._position.gx) {
                // line to the right
                console.log("line to the right");
                m = (y - this._position.gy) / parseFloat(x - this._position.gx);
                console.log("slope", m);
                var f = function (_x) { return m * (_x - x) + y };
                
                var newPos = {
                    ctx: ctx,
                    x: pt,
                    y: y,
                    gx: x,
                    gy: y
                };
                
                while (i > this.contexts.indexOf(this._position.ctx)) {
                    newY = f(offset);
                    console.log("ctx", i, "moveto", 0, newY, "lineto", pt, y);
                    ctx.moveTo(0, newY);
                    ctx.lineTo(pt, y);
                    pt = this.canvas.canvases[i - 1].width;
                    y = newY;
                    offset -= this.canvas.canvases[i - 1].width;
                    i -= 1;
                    ctx = this.contexts[i];
                }
                
                this._position.ctx.lineTo(pt, y);
                
                this._position = newPos;
                break;
            }
            
            offset += this.canvas.canvases[i].width;
        }
    };
    
    MultiContext.prototype.moveTo = moveTo;
    MultiContext.prototype.lineTo = lineTo;
    
    var props = ["fillStyle", "font", "globalAlpha", "globalCompositeOperation", 
                 "lineCap", "lineDashOffset", "lineJoin", "lineWidth",
                 "miterLimit", "shadowBlur", "shadowColor", "shadowOffsetX",
                 "shadowOffsetY", "strokeStyle", "textAlign", "textBaseline"];
    
    props.forEach(function (prop) {
        MultiContext.prototype.__defineSetter__(prop, propSetter(prop));
        MultiContext.prototype.__defineGetter__(prop, propGetter(prop));
    });
    
    return MultiContext;

}());

EDIBLE.modules.MultiCanvas = (function () {
    
    // public API -- constructor
    MultiCanvas = function (o, maxW) {
        if (maxW !== undefined) {
            this._maxWidth = parseFloat(maxW);
        } else {
            this._maxWidth = 30000.0;
        }
        this.canvases = [o];
        this.mctx = new EDIBLE.modules.MultiContext(this, this._maxWidth);
    };
    
    // public API -- prototype
    MultiCanvas.prototype = {
        constructor: EDIBLE.modules.MultiCanvas,
        version: '0.1',
        
        clone: function (mc) {
            this.width = mc.width;
            this.height = mc.height;
            var i;
            var ctx;
            for (i = 0; i < mc.canvases.length; i++) {
                // copy each canvas
                ctx = this.canvases[i].getContext('2d');
                ctx.drawImage(mc.canvases[0], 0, 0,
                    mc.canvases[0].width, mc.canvases[0].height)
            }
        },
        
        destroy: function () {
            var i;
            var parent = this.canvases[0].parentNode;
            for (i = 0; i < this.canvases.length; i++) {
                parent.removeChild(this.canvases[i]);
            }
        },
        
        getContext: function (val) {
            if (val === '2d') {
                return this.mctx;
            } else {
                throw "Only '2d' contexts are supported."
            }
        },
        
        get height () {
            return this._height;
        },
        
        set height (height) {
            var i;
            for (i = 0; i < this.canvases.length; i++) {
                this.canvases[i].height = height;
            }
            this._height = height;
            return height;
        },
        
        get width () {
            return this._width;
        },
        
        set width (width) {
            var i;
            var newCanv;
            var nCanvs = parseInt(width / this._maxWidth + 1);
            var parent = this.canvases[0].parentNode;
            
            for (i = 0; i < this.canvases.length; i += 1) {
                parent.removeChild(this.canvases[i]);
            }
            this.canvases = this.canvases.slice(0,1);
            this.canvases = [];
            
            for (i = 0; i < nCanvs; i += 1) {
                if (i >= this.canvases.length) {
                    newCanv = document.createElement("canvas");
                    newCanv.height = this._height;
                    newCanv.style.display = "inline-block";
                    parent.appendChild(newCanv);
                    this.canvases.push(newCanv);
                }
                if (i === nCanvs - 1) {
                    this.canvases[i].width =
                        width - this._maxWidth * (nCanvs - 1);
                } else {
                    this.canvases[i].width = this._maxWidth;
                }
            }
            this._width = width;
            this.mctx._updateContexts();
            return width;  
        }
    };
    
    return MultiCanvas;
    
}());
// this is to support polymorphism with different types of waveforms
;(function ($, window, document, undefined) {
    "use strict";
    $.widget("edible.wfBase", {
        _create: function () {
            // support widget polymorphism
            console.log("REGISTERING AS NAME", this.widgetName)
            this.element.data('waveformClass', this.widgetName);
        },
        _destroy: function () {
            this.element.removeData('waveformClass');
            this._super('destroy');
        }
    });
}(jQuery, window, document));

// access waveform methods through .wf() now
$.fn.wf = function () {
    return this[this.data('waveformClass')].apply(this, arguments);
};
/*jslint browser: true nomen: true devel: true vars: true */
/*global jQuery, _ */

/*!
 * waveform
 * part of edible in-browser media timeline
 * Author: Steve Rubin
 */
 
 
 // uses waveform.js from waveformjs.org
 // ...maybe

;(function ($, window, document, undefined) {
    "use strict";
    $.widget("edible.waveform", $.edible.wfBase, {
        options: {
            data: [],
            height: "90px",
            canvHeight: "75px",
            topBarHeight: 15,
            dur: 1000.0,       // millseconds, doesn't change
            len: 1000.0,       // milliseconds, visible length from start
            start: 0.0,        // milliseconds
            pxPerMs: .1,
            name: "audio",
            filename: "audio.mp3",
            innerColor: undefined,
            fixed: false,
            mute: false,
            globalVolume: 1.0,
            _dirty: true,
            volume: {
                x: [0],
                y: [1]
            }
        },
        
        // public
        width: function () {
            return this.options.len * this.options.pxPerMs;
        },
        
        waveformClass: function () { return "waveform" },
        
        isDirty: function () {
            return this.options._dirty;
        },

        addVolumeMarker: function () { return; },

        exportExtras: function () {
            this.options._dirty = false;
            return {};
        },
        
        debugInfo: function () {
            return JSON.stringify(this.options, null, 4);
        },
        
        slice: function (event) {
            // create a copy of this waveform
            var offset = this.element.offset(); 
            var relX = event.pageX - offset.left;
            var newWaveform = document.createElement('div');
            var msOfClick = relX / this.options.pxPerMs;

            // initialize the new waveform
            var $nwf = $(newWaveform)[this.waveformClass](
                $.extend(true, {},
                    this.options, {
                        start: this.options.start + msOfClick,
                        len: this.options.len - msOfClick
                    })
                );

            this._setOptions({
                len: relX / this.options.pxPerMs
            });
            return {
                waveform: newWaveform,
                pos: relX / this.options.pxPerMs
            };
        },
        
        // private 
        _computePosFromResize: function (event, ui) {
            console.log("ui", ui);
            var leftDiff = ui.position.left - ui.originalPosition.left;
            // hypothetical position of start of waveform
            var startLeft = ui.originalPosition.left -
                this.options.start * this.options.pxPerMs;

            var maxWidth = (this.options.dur - this.options.start) *
                this.options.pxPerMs;
            var start = this.options.start;
            var len = ui.size.width / this.options.pxPerMs;
            var left = ui.position.left;
                    
            if (leftDiff !== 0) {
                // left handle
                start = this.options.start +
                    leftDiff / this.options.pxPerMs;
                // handle pulled past hypothetical start
                if (start < 0) {
                    start = 0;
                    left = startLeft;
                    len = this.options.len + this.options.start;
                }
            } else {
                // right handle
                // handle pulled past hypothetical end
                if (ui.size.width > maxWidth) {
                    len = this.options.dur - this.options.start;
                }
            }

            console.log("orig element offset", ui.originalElement.offset());
            this.element.css("left",
                left - this.element.parent().offset().left);
    
            return {
                len: len,
                start: start
            }
        },
        
        _create: function () {
            // for polymorphism!
            this._super("_create");

            var that = this;
            var wfTemplate = $("#waveformTemplate").html();
            var $canv;
            var $topBar;
            this.element.addClass('edible-waveform')
                .append(_.template(wfTemplate, this.options));

            $canv = this.element.find('.displayCanvas');
            $topBar = this.element.find('.topBar');
            
            this.element.find('.removeWaveform')
                .click(function (event) {
                    that._trigger("destroy");
                    that._destroy();
                    event.preventDefault();
                    return false;
                });
            
            // TODO: don't hardcode the snap tolerance
            if (!this.options.fixed) {
                this.element.draggable({
                    handle: $topBar,
                    snap2: ".track",
                    snap2Mode: "inner",
                    snap2Tolerance: 46,
                    snap2Sides: "tb",
                    stack: ".edible-waveform"
                }).resizable({
                    handles: "e, w",
                    stop: function (event, ui) {
                        var newOpts = that._computePosFromResize(event, ui);
                        console.log("setting new len", newOpts.len,
                            "and start", newOpts.start);
                        that._setOptions(newOpts);                    
                    },
                    helper: "resizable-helper"
                })
            }
            
            this.element.disableSelection().css("position", "absolute");
            
            this.options._mcanv = new EDIBLE.modules.MultiCanvas($canv[0]);
            
            this._refresh();
        },
        
        /*
         _drawWaveform will update the displayCanvas with the current waveform
         */
        _drawWaveform: function () {
            var nsamples = this.options.data.length;
            var sampPerMs = nsamples / this.options.dur;
            var startSample = this.options.start * sampPerMs;
            var endSample = startSample + this.options.len * sampPerMs;
            
            // var canv = this.element.find('.displayCanvas')[0];
            var canv = this.options._mcanv;
            
            var innerColor = "#4BF2A7";
            if (this.options.innerColor !== undefined && canv !== undefined) {
                innerColor = this.options.innerColor(canv);
            } else if (innerColor === undefined) {
                innerColor = "#4BF2A7";
                if (canv !== undefined) {
                    innerColor = canv.getContext('2d')
                        .createLinearGradient(0, 0, 0, parseInt(this.options.canvHeight));
                    innerColor.addColorStop(0.0, "#4BF2A7" );
                    innerColor.addColorStop(1.0, "#32CD32" );
                }
            }

            var wf = new Waveform({
                canvas: canv,
                data: this.options.data.slice(startSample, endSample),
                innerColor: innerColor,
                outerColor: "#333",
                height: this.options.canvHeight,
                interpolate: true,
                width: this.width()
            });
        },
        
        _refresh: function () {
            // console.log("_refresh-ing");
            this.options._mcanv.width = this.width();
            this.options._mcanv.height = parseInt(this.options.canvHeight);
            
            // this.element.find(".displayCanvas")
            //     .attr("width", this.width())
            //     .attr("height", this.options.canvHeight);
            
            this.element.find(".topBar")
                .css("width", this.width());
            this.element.width(this.width())
                .height(this.options.height);
            this._drawWaveform();
        },
        
        _destroy: function () {
            this._super("destroy");
            this.element.remove();
        },
        
        _setOptions: function () {
            // _super and _superApply handle keeping the right this-context
            this._superApply(arguments);
            this._refresh();
            this._trigger("changed", null, arguments);
        },
        
        _setOption: function (key, value) {
            // console.log("in _setOption with key:", key, "value:", value);
            this.options._dirty = true;
            switch (key) {
            case "currentWords":
                this.options.highlightedWordsRange = undefined;
                this.options.currentWords = value;
                break;
            case "oogielove":
                break;
            default:
                this.options[key] = value;
                break;
            }
            
            this._super("_setOption", key, value);
        }
        
    });

}(jQuery, window, document));

/* text-aligned waveform
 * part of the edible timeline editor
 */
 
;(function ($, window, document, undefined) {
    "use strict";
    $.widget("edible.textAlignedWaveform", $.edible.waveform, {
        _create: function () {
            this._super("_create");
        },
        
        waveformClass: function () { return "textAlignedWaveform" },
        
        // draws the waveform according to the current text
        _drawWaveform: function () {
            var that = this;
            var i, start, end, delta, tmpSamples, tsi;
            var hasData = (this.options.data.length > 0);
            
            // get sample info
            var nsamples = this.options.data.length;
            var sampPerMs = nsamples / this.options.dur;
            var startSample = this.options.start * sampPerMs;
            var endSample = startSample + this.options.len * sampPerMs;
            var currentSamples = [];
            
            // keep track of the position of each word
            var wordPositions = [];
            
            // get the duration of the words
            var currentDuration = 0;
            $.each(this.options.currentWords, function (j, word) {
                
                // position used for rendering text on waveform
                wordPositions.push(currentDuration);
                
                if (word.alignedWord === "gp") {
                    currentDuration += parseInt(word.pauseLength * 1000.0);
                    // just some zeros for padding
                    tmpSamples = [];
                    for (tsi = 0; tsi < word.pauseLength * 1000.0 * sampPerMs; tsi++) {
                        tmpSamples[tsi] = 0;
                    }

                    // add them to the samples array
                    currentSamples.push.apply(currentSamples, tmpSamples);
                } else {
                    start = word.start * 1000.0;
                    end = word.end * 1000.0
                    delta = end - start;
                    currentDuration += parseInt(delta);
                    
                    // get the waveform samples for the word
                    if (hasData) {
                        startSample = parseInt(start * sampPerMs);
                        endSample = parseInt(end * sampPerMs);
                        tmpSamples = that.options.data.slice(startSample, endSample);
                        currentSamples.push.apply(currentSamples, tmpSamples);
                    }
                }
            });
            
            // set the length of the waveform
            this.options.len = currentDuration;
            
            // draw the waveform
            // var canv = this.element.find('.displayCanvas')[0];
            
            // var canv = new EDIBLE.modules.MultiCanvas(this.element.find('.displayCanvas')[0]);
            // console.log("CANVAS", canv);

            var canv = this.options._mcanv;
            
            // lame width update
            // $(canv).attr("width", this.width());
            canv.getContext('2d').canvas.width = this.width();
            canv.getContext('2d').canvas.height = parseInt(this.options.canvHeight);
            
            this.element.find('.topBar').css("width", this.width());
            
            var gradient = "#4BF2A7";
            if (canv !== undefined) {
                gradient = canv.getContext('2d')
                    .createLinearGradient(0, 0, 0, parseInt(this.options.canvHeight));

                gradient.addColorStop(0.0, "#333");
                gradient.addColorStop(1.0, "#777");

                // gradient.addColorStop(0.0, "#4BF2A7" );
                // gradient.addColorStop(1.0, "#32CD32" );
            }
            
            if (!hasData) {
                currentSamples = [];
            }
            
            var selectedGradient = "#FF7F24";
            if (canv !== undefined) {
                selectedGradient = canv.getContext('2d')
                    .createLinearGradient(0, 0, 0, parseInt(this.options.canvHeight));
                selectedGradient.addColorStop(0.0, "#FF7F24");
                selectedGradient.addColorStop(1.0, "#FA9A50");
            }
            

            var colorFunc = gradient;
            
            // highlight words
            if ("highlightedWordsRange" in this.options &&
                this.options.highlightedWordsRange !== undefined) {
                var hwRange = this.options.highlightedWordsRange;
                var pxPerMs = this.options.pxPerMs;
                var hwStart = wordPositions[hwRange[0]] * pxPerMs;
                var hwStop;
                if (hwRange[1] + 1 >= wordPositions.length) {
                    hwStop = that.width();
                } else {
                    hwStop = wordPositions[hwRange[1] + 1] * pxPerMs;
                }
                colorFunc = function (x, y) {
                    var pxX = x * that.width();
                    if (pxX >= hwStart && pxX < hwStop) {
                        return selectedGradient;
                    }
                    return gradient;
                };
            }
            
            var wf = new Waveform({
                canvas: canv,
                data: currentSamples,
                innerColor: colorFunc,
                outerColor: "#eee",
                // outerColor: "#333333",
                height: this.options.canvHeight,
                interpolate: true,
                width: this.width()
            });
            
            var drawMarker = function (x, y, ctx) {
                ctx.save();
                ctx.fillStyle = "red";
                ctx.strokeStyle = "#cccccc";
                ctx.beginPath();
                ctx.moveTo(x - 5, y - 15);
                ctx.lineTo(x - 5, y - 5);
                ctx.lineTo(x, y);
                ctx.lineTo(x + 5, y - 5);
                ctx.lineTo(x + 5, y - 15);
                ctx.lineTo(x - 5, y - 15);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
            };

            var hitBox = function (x, y, width, height) {
                var ePtBox = document.createElement('div');
                return $(ePtBox)
                    .addClass('emphasisPointBox')
                    .width(width)
                    .height(height)
                    .css({
                        "left": x,
                        "top": y
                    })
                    .appendTo(that.element);
            };

            // render emphasis points on the waveform
            $(this.element).find('.emphasisPointBox').remove();
            $.each(this.options.currentWords, function (j, word) {
                if (word.hasOwnProperty('emphasisPoint') &&
                    word.emphasisPoint) {
                    // label the emphasis point at the end of the word
                    var x = wordPositions[j + 1] * that.options.pxPerMs;
                    var y = 20;
                    drawMarker(x, y, canv.getContext('2d'));
                    var hb = hitBox(x - 5, y, 10, 15);
                    hb.data("wordIndex", j);

                    hb.click(function () {
                        // create musical underlay
                        that.options.emphasisPointFunc($(this).data("wordIndex"));
                    });
                }
            });

            // render text on waveform
            // don't do it for now... need to figure out problem
            // with canvas width limitations
            if (false) {
                var ctx = canv.getContext('2d');
                ctx.save();
                ctx.font = "6pt Silkscreen";
                ctx.fillStyle = "#fff";
                ctx.textAlign = "center";
                $.each(this.options.currentWords, function (j, word) {
                    var xPos = wordPositions[j] * that.options.pxPerMs;
                    var xNext;
                    if (j + 1 < that.options.currentWords.length) {
                        xNext = wordPositions[j + 1] * that.options.pxPerMs;
                        ctx.fillText(word.word, xPos + (xNext - xPos) / 2,
                            15, xNext - xPos);
                    } else {
                        ctx.textAlign = "left";
                        ctx.fillText(word.word, xPos, 15);
                    }
                });
                ctx.restore();
            }
        },
        
    });
}(jQuery, window, document));
(function(){function h(a){throw a;}var aa=void 0,k=!0,l=null,n=!1;function ba(a){return function(){return a}}var p,ca=this;
function q(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function r(a){return a!==aa}function da(a){return a!=l}function ea(a){return"array"==q(a)}function s(a){var b=q(a);return"array"==b||"object"==b&&"number"==typeof a.length}function u(a){return"string"==typeof a}function v(a){return"boolean"==typeof a}function fa(a){var b=typeof a;return"object"==b&&a!=l||"function"==b}var ga="closure_uid_"+(1E9*Math.random()>>>0),ha=0;
function w(a,b){var c=a.split("."),d=ca;!(c[0]in d)&&d.execScript&&d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&r(b)?d[e]=b:d=d[e]?d[e]:d[e]={}}function ia(a,b){function c(){}c.prototype=b.prototype;a.Va=b.prototype;a.prototype=new c;a.prototype.constructor=a};var z=Array.prototype,ja=z.indexOf?function(a,b,c){return z.indexOf.call(a,b,c)}:function(a,b,c){c=c==l?0:0>c?Math.max(0,a.length+c):c;if(u(a))return!u(b)||1!=b.length?-1:a.indexOf(b,c);for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ka=z.forEach?function(a,b,c){z.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=u(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},la=z.filter?function(a,b,c){return z.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=u(a)?
a.split(""):a,j=0;j<d;j++)if(j in g){var m=g[j];b.call(c,m,j,a)&&(e[f++]=m)}return e},A=z.map?function(a,b,c){return z.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=u(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e};function na(a){return z.concat.apply(z,arguments)}function oa(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}function pa(a,b,c){return 2>=arguments.length?z.slice.call(a,b):z.slice.call(a,b,c)}
function qa(a,b,c){if(!s(a)||!s(b)||a.length!=b.length)return n;var d=a.length;c=c||ra;for(var e=0;e<d;e++)if(!c(a[e],b[e]))return n;return k}function sa(a,b){return a>b?1:a<b?-1:0}function ra(a,b){return a===b}function ta(a){if(!arguments.length)return[];for(var b=[],c=0;;c++){for(var d=[],e=0;e<arguments.length;e++){var f=arguments[e];if(c>=f.length)return b;d.push(f[c])}b.push(d)}};var B="StopIteration"in ca?ca.StopIteration:Error("StopIteration");function C(){}C.prototype.next=function(){h(B)};C.prototype.t=function(){return this};function ua(a){if(a instanceof C)return a;if("function"==typeof a.t)return a.t(n);if(s(a)){var b=0,c=new C;c.next=function(){for(;;){b>=a.length&&h(B);if(b in a)return a[b++];b++}};return c}h(Error("Not implemented"))}
function E(a,b,c){if(s(a))try{ka(a,b,c)}catch(d){d!==B&&h(d)}else{a=ua(a);try{for(;;)b.call(c,a.next(),aa,a)}catch(e){e!==B&&h(e)}}}function F(a,b,c){var d=ua(a);a=new C;a.next=function(){for(;;){var a=d.next();return b.call(c,a,aa,d)}};return a}function va(a){if(s(a))return oa(a);a=ua(a);var b=[];E(a,function(a){b.push(a)});return b}function wa(a,b){try{return ua(a).next()}catch(c){return c!=B&&h(c),b}};function xa(){}xa.ca=function(){return xa.ea?xa.ea:xa.ea=new xa};xa.prototype.va=0;xa.ca();var ya={};function Aa(a){if(!s(a))return n;for(var b=0,c=a.length;b<c;b++)if(window.isNaN(a[b]))return n;return k}w("jsnx.utils.is_list_of_ints",Aa);w("jsnx.utils.cumulative_sum",function(a){var b=0;return F(a,function(a){return b+=a})});w("jsnx.utils.generate_unique_node",function(){return":"+(xa.ca().va++).toString(36)});function G(a,b,c){for(var d in a)b.call(c,a[d],d,a)}function Ba(a,b,c){var d={},e;for(e in a)d[e]=b.call(c,a[e],e,a);return d}function H(a){var b=0,c;for(c in a)b++;return b}function Ca(a){for(var b in a)return b}function I(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function J(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}function Da(a){for(var b in a)delete a[b]}function K(a,b){b in a&&delete a[b]}function L(a,b,c){return b in a?a[b]:c}
function Ea(a){var b={},c;for(c in a)b[c]=a[c];return b}var Fa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Fa.length;f++)c=Fa[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
function Ga(a){var b=arguments.length;if(1==b&&ea(arguments[0]))return Ga.apply(l,arguments[0]);b%2&&h(Error("Uneven number of arguments"));for(var c={},d=0;d<b;d+=2)c[arguments[d]]=arguments[d+1];return c};function Ha(a){if("function"==typeof a.w)return a.w();if(u(a))return a.split("");if(s(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return I(a)};function Ia(a,b){this.e={};this.g=[];var c=arguments.length;if(1<c){c%2&&h(Error("Uneven number of arguments"));for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&this.W(a)}p=Ia.prototype;p.u=0;p.Q=0;p.c=function(){return this.u};p.w=function(){Ja(this);for(var a=[],b=0;b<this.g.length;b++)a.push(this.e[this.g[b]]);return a};p.J=function(){return 0==this.u};p.clear=function(){this.e={};this.Q=this.u=this.g.length=0};
p.remove=function(a){return Object.prototype.hasOwnProperty.call(this.e,a)?(delete this.e[a],this.u--,this.Q++,this.g.length>2*this.u&&Ja(this),k):n};function Ja(a){if(a.u!=a.g.length){for(var b=0,c=0;b<a.g.length;){var d=a.g[b];Object.prototype.hasOwnProperty.call(a.e,d)&&(a.g[c++]=d);b++}a.g.length=c}if(a.u!=a.g.length){for(var e={},c=b=0;b<a.g.length;)d=a.g[b],Object.prototype.hasOwnProperty.call(e,d)||(a.g[c++]=d,e[d]=1),b++;a.g.length=c}}
p.set=function(a,b){Object.prototype.hasOwnProperty.call(this.e,a)||(this.u++,this.g.push(a),this.Q++);this.e[a]=b};p.W=function(a){var b;a instanceof Ia?(Ja(a),b=a.g.concat(),a=a.w()):(b=J(a),a=I(a));for(var c=0;c<b.length;c++)this.set(b[c],a[c])};p.R=function(){return new Ia(this)};
p.t=function(a){Ja(this);var b=0,c=this.g,d=this.e,e=this.Q,f=this,g=new C;g.next=function(){for(;;){e!=f.Q&&h(Error("The map has changed since the iterator was created"));b>=c.length&&h(B);var g=c[b++];return a?g:d[g]}};return g};function N(a){this.e=new Ia;a&&this.W(a)}function Ka(a){var b=typeof a;return"object"==b&&a||"function"==b?"o"+(a[ga]||(a[ga]=++ha)):b.substr(0,1)+a}p=N.prototype;p.c=function(){return this.e.c()};p.add=function(a){this.e.set(Ka(a),a)};p.W=function(a){a=Ha(a);for(var b=a.length,c=0;c<b;c++)this.add(a[c])};p.remove=function(a){return this.e.remove(Ka(a))};p.clear=function(){this.e.clear()};p.J=function(){return this.e.J()};
p.contains=function(a){a=Ka(a);return Object.prototype.hasOwnProperty.call(this.e.e,a)};function La(a,b){for(var c=new N,d=Ha(b),e=0;e<d.length;e++){var f=d[e];a.contains(f)&&c.add(f)}return c}function Ma(a,b){for(var c=a.R(),d=Ha(b),e=d.length,f=0;f<e;f++)c.remove(d[f]);return c}p.w=function(){return this.e.w()};p.R=function(){return new N(this)};p.t=function(){return this.e.t(n)};function Na(a){if(a!=l)try{a.clear()}catch(b){h(Error("Input graph is not a jsnx graph type"))}else a=new ya.Ba;return a}
function Oa(a,b,c){var d;if(a.hasOwnProperty("adj"))try{return d=Pa(a.adj,b,a.f()),"graph"in a&&"object"===q(a.graph)&&(d.graph=Ea(a.graph)),"node"in a&&"object"===q(a.node)&&(d.node=Ba(a.node,function(a){return Ea(a)})),d}catch(e){h(Error("Input is not a correct jsnx graph"))}if("object"===q(a))try{return Pa(a,b,c)}catch(f){try{var g=Na(b);g.i(a);if(g.f()&&!g.d()){var j={};G(a,function(a,b){ka(a,function(a){a in j||g.h(b,a)});j[b]=1})}else{var m=[];G(a,function(a,b){ka(a,function(a){m.push([b,a])})});
g.a(m)}return g}catch(y){h(Error("Input is not known type."))}}if(s(a))try{var x=Na(b);x.a(a);return x}catch(t){h(Error("Input is not valid edge list"))}}w("jsnx.to_networkx_graph",Oa);w("jsnx.convert_to_undirected",ya.Ia);w("jsnx.convert_to_undirected",ya.Ha);w("jsnx.to_dict_of_lists",ya.Wa);
function Pa(a,b,c){var d=Na(b),e,f;d.i(a);c?d.d()?(d.f()?(e=[],G(a,function(a,b){s(a)&&h(Error());G(a,function(a,c){G(a,function(a,d){e.push([b,c,d,a])})})})):(e=[],G(a,function(a,b){s(a)&&h(Error());G(a,function(a,c){G(a,function(a){e.push([b,c,a])})})})),d.a(e)):d.f()?(f=new N,G(a,function(a,b){s(a)&&h(Error());G(a,function(a,c){f.contains([b,c].toString())||(e=[],G(a,function(a,d){e.push([b,c,d,a])}),d.a(e),f.add([c,b].toString()))})})):(f=new N,G(a,function(a,b){s(a)&&h(Error());G(a,function(a,
c){f.contains([b,c].toString())||(e=[],G(a,function(a){e.push([b,c,a])}),d.a(e),f.add([c,b].toString()))})})):d.f()&&!d.d()?(f=new N,G(a,function(a,b){s(a)&&h(Error());G(a,function(a,c){f.contains([b,c].toString())||(d.h(b,c,a),f.add([c,b].toString()))})})):(e=[],G(a,function(a,b){s(a)&&h(Error());G(a,function(a,c){e.push([b,c,a])})}),d.a(e));return d};function Qa(a){this.name="JSNetworkXException";this.message=a}Qa.prototype=Error();Qa.prototype.constructor=Qa;w("jsnx.JSNetworkXException",Qa);function O(a){Qa.call(this,a);this.name="JSNetworkXError"}ia(O,Qa);w("jsnx.JSNetworkXError",O);function Ra(a){Qa.call(this,a);this.name="JSNetworkXPointlessConcept"}ia(Ra,Qa);w("jsnx.JSNetworkXPointlessConcept",Ra);function Sa(a){Qa.call(this,a);this.name="JSNetworkXAlgorithmError"}ia(Sa,Qa);w("jsnx.JSNetworkXAlgorithmError",Sa);
function Ta(a){Sa.call(this,a);this.name="JSNetworkXUnfeasible"}ia(Ta,Sa);w("jsnx.JSNetworkXUnfeasible",Ta);function Ua(a){Ta.call(this,a);this.name="JSNetworkXNoPath"}ia(Ua,Ta);w("jsnx.JSNetworkXNoPath",Ua);function Va(a){Sa.call(this,a);this.name="JSNetworkXUnbounded"}ia(Va,Sa);w("jsnx.JSNetworkXUnbounded",Va);function Wa(a){function b(a,b){a[b[0]]=b[1];return a}a=Xa(a);var c={};E(a,function(a){c=b.call(aa,c,a)});return c}function Ya(a){return a instanceof C||"function"==q(a.t)}function Za(a){if(u(a)||s(a)||"length"in a)return a.length;if($a(a))return H(a);h(new TypeError)}function P(a,b,c,d){v(c)&&(d=c,c=l);if(d){var e=b;b=function(a){e.apply(this,a)}}Ya(a)?E(a,b,c):s(a)||u(a)?ka(a,b,c):fa(a)&&P(J(a),b,c)}w("jsnx.forEach",P);
function Q(a,b,c){if(s(a))return A(a,b,c);if(Ya(a))return F(a,b,c);if(fa(a))return Ba(a,b,c);h(new TypeError)}function ab(){var a=arguments,b=a[0];if(s(b))return ta.apply(l,a);if(Ya(b)){var b=new C,c=a.length;b.next=function(){for(var b=[],e=0;e<c;e++)b.push(a[e].next());return b};return b}if(fa(b))return ta.apply(l,A(a,J));h(new TypeError)}
function bb(a,b,c){if(0===arguments.length)return[];1===arguments.length?(b=a,a=0,c=1):2===arguments.length?c=1:3===arguments.length&&0===arguments[2]&&h("range() step argument must not be zero");var d=new C,e=0>c,f=a,g;d.next=function(){(e&&f<=b||!e&&f>=b)&&h(B);g=f;f+=c;return g};return d}
function cb(a){var b=R(a),c=b.length;if(2>c)return new C;var d=R(bb(2));a=new C;a.next=function(){var a=A(d,function(a){return b[a]});this.next=function(){var a=n,e;for(e=2;e--;)if(d[e]!=e+c-2){a=k;break}a||h(B);d[e]+=1;for(a=e+1;2>a;a++)d[a]=d[a-1]+1;return A(d,function(a){return b[a]})};return a};return a}
function db(a){var b=R(a),c=b.length;if(2>c)return new C;var d=R(bb(c)),e=R(bb(c,c-2,-1));a=new C;var f=new C,g,j=k;a.next=function(){this.next=g.next;return A(d.slice(0,2),function(a){return b[a]})};f.next=function(){return j};g=S(f,function(a){a||h(B);j=n;return bb(1,-1,-1)},function(a){if(!j)if(e[a]-=1,0===e[a])d.splice.apply(d,[a,d.length].concat(d.slice(a+1).concat([d[a]]))),e[a]=c-a;else{var f=e[a],g=d[a];d[a]=d[d.length-f];d[d.length-f]=g;j=k;return Xa([A(d.slice(0,2),function(a){return b[a]})])}},
function(a){return a});return a}function R(a){if(s(a))return oa(a);if(Ya(a))return va(a);if(fa(a))return J(a);h(new TypeError)}w("jsnx.toArray",R);function eb(a){var b=[];G(a,function(a,d){b.push([d,a])});return b}function T(a){var b=new C,c=ua(J(a));b.next=function(){var b=c.next();return[b,a[b]]};return b}function Xa(a){"object"===q(a)&&(!s(a)&&!Ya(a))&&(a=J(a));return ua(a)}
function S(a){var b=new C,c=pa(arguments,1);if(0===c.length)return a;try{a=ua(a)}catch(d){return b.next=function(){"Not implemented"===d.message&&h(new TypeError)},b}var e=l;b.next=function(){var d,g;try{for(;!r(d);)d=e.next()}catch(j){for(;!r(g)||!r(d);)g=a.next(),d=c[0](g);if(Ya(d))return e=S.apply(l,na([d],pa(c,1))),b.next();e=l}return d};return b}w("jsnx.sentinelIterator",function(a,b){var c=new C;c.next=function(){return wa(a,b)};return c});
function $a(a){var b=Object.prototype.hasOwnProperty;if(!a||"object"!==q(a)||a.nodeType||a==a.window)return n;try{if(a.constructor&&!b.call(a,"constructor")&&!b.call(a.constructor.prototype,"isPrototypeOf"))return n}catch(c){return n}for(var d in a);return d===aa||b.call(a,d)}
function U(a,b){b=b||[];var c=q(a);if("object"==c&&$a(a)||"array"==c){var d;d=b;var e;a:{e=function(b){return a===b[0]};for(var f=d.length,g=u(d)?d.split(""):d,j=0;j<f;j++)if(j in g&&e.call(aa,g[j])){e=j;break a}e=-1}d=0>e?l:u(d)?d.charAt(e):d[e];if(d!==l)return d[1];if(a.R)return d=[a,a.R()],b.push(d),d[1];c="array"==c?[]:{};d=[a,c];b.push(d);for(var m in a)c[m]=U(a[m],b);return c}return a}
function fb(a){function b(){}var c={},d;b.prototype=a.constructor.prototype;for(d in a)a.hasOwnProperty(d)&&(c[d]=a[d]);c=U(c);a=new b;for(d in c)a[d]=c[d];return a};function gb(a){var b=[];hb(new ib,a,b);return b.join("")}function ib(){this.V=aa}
function hb(a,b,c){switch(typeof b){case "string":jb(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(b==l){c.push("null");break}if(ea(b)){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),e=b[f],hb(a,a.V?a.V.call(b,String(f),e):e,c),e=",";c.push("]");break}c.push("{");d="";for(f in b)Object.prototype.hasOwnProperty.call(b,f)&&(e=b[f],"function"!=typeof e&&(c.push(d),jb(f,c),c.push(":"),
hb(a,a.V?a.V.call(b,f,e):e,c),d=","));c.push("}");break;case "function":break;default:h(Error("Unknown type: "+typeof b))}}var kb={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},lb=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;
function jb(a,b){b.push('"',a.replace(lb,function(a){if(a in kb)return kb[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return kb[a]=e+b.toString(16)}),'"')};var V={Qa:function(a){return Math.floor(Math.random()*a)},Ya:function(a,b){return a+Math.random()*(b-a)},Ga:function(a,b,c){return Math.min(Math.max(a,b),c)},ua:function(a,b){var c=a%b;return 0>c*b?c+b:c},Na:function(a,b,c){return a+c*(b-a)},Pa:function(a,b,c){return Math.abs(a-b)<=(c||1E-6)},aa:function(a){return V.ua(a,360)},ha:function(a){return a*Math.PI/180},Aa:function(a){return 180*a/Math.PI},Ea:function(a,b){return b*Math.cos(V.ha(a))},Fa:function(a,b){return b*Math.sin(V.ha(a))},Ca:function(a,
b,c,d){return V.aa(V.Aa(Math.atan2(d-b,c-a)))},Da:function(a,b){var c=V.aa(b)-V.aa(a);180<c?c-=360:-180>=c&&(c=360+c);return c},Ta:function(a){return 0==a?0:0>a?-1:1},Oa:function(a,b,c,d){c=c||function(a,b){return a==b};d=d||function(b){return a[b]};for(var e=a.length,f=b.length,g=[],j=0;j<e+1;j++)g[j]=[],g[j][0]=0;for(var m=0;m<f+1;m++)g[0][m]=0;for(j=1;j<=e;j++)for(m=1;m<=e;m++)g[j][m]=c(a[j-1],b[m-1])?g[j-1][m-1]+1:Math.max(g[j-1][m],g[j][m-1]);for(var y=[],j=e,m=f;0<j&&0<m;)c(a[j-1],b[m-1])?(y.unshift(d(j-
1,m-1)),j--,m--):g[j-1][m]>g[j][m-1]?j--:m--;return y},n:function(a){var b;b=arguments;var c=function(a,b){return a+b};if(b.reduce)b=b.reduce(c,0);else{var d=0;ka(b,function(a){d=c.call(aa,d,a)});b=d}return b},oa:function(a){return V.n.apply(l,arguments)/arguments.length},Ua:function(a){var b=arguments.length;if(2>b)return 0;var c=V.oa.apply(l,arguments),b=V.n.apply(l,A(arguments,function(a){return Math.pow(a-c,2)}))/(b-1);return Math.sqrt(b)},Ma:function(a){return isFinite(a)&&0==a%1},La:function(a){return isFinite(a)&&
!isNaN(a)},Sa:function(a,b){return Math.floor(a+(b||2E-15))},Ra:function(a,b){return Math.ceil(a-(b||2E-15))}};function W(a,b){if(!(this instanceof W))return new W(a,b);this.graph={};this.node={};this.adj={};a!=l&&Oa(a,this);M(this.graph,b||{});this.edge=this.adj}w("jsnx.classes.Graph",W);w("jsnx.Graph",W);W.__name__="Graph";W.prototype.ra=l;W.prototype.graph=W.prototype.ra;W.prototype.Z=l;W.prototype.node=W.prototype.Z;W.prototype.ma=l;W.prototype.adj=W.prototype.ma;W.prototype.pa=l;W.prototype.edge=W.prototype.pa;
W.prototype.name=function(a){if(r(a))this.graph.name=a.toString();else return this.graph.name||""};W.prototype.name=W.prototype.name;W.prototype.toString=function(){return this.name()};W.prototype.toString=W.prototype.toString;W.prototype.t=function(){return Xa(this.adj)};W.prototype.__iterator__=W.prototype.t;W.prototype.k=function(a){a in this.adj||h({name:"KeyError",message:"Graph does not contain node "+a+"."});return this.adj[a]};W.prototype.get_node=W.prototype.k;
W.prototype.F=function(a,b){b!=l||(b={});"object"!==q(b)&&h(new O("The attr_dict argument must be an object."));a in this.adj?M(this.node[a],b||{}):(this.adj[a]={},this.node[a]=b||{})};W.prototype.add_node=W.prototype.F;W.prototype.i=function(a,b){var c,d,e,f,g;b=b||{};P(a,function(a){c=!(a in this.adj);ea(a)?(d=a[0],e=a[1],d in this.adj?(g=this.node[d],M(g,b,e)):(this.adj[d]={},f=Ea(b),M(f,e),this.node[d]=f)):c?(this.adj[a]={},this.node[a]=Ea(b)):M(this.node[a],b)},this)};
W.prototype.add_nodes_from=W.prototype.i;W.prototype.N=function(a){var b=this.adj,c;a in this.node||h(new O("The node "+a+" is not in the graph"));c=J(b[a]);K(this.node,a);ka(c,function(c){K(b[c],a)});K(b,a)};W.prototype.remove_node=W.prototype.N;W.prototype.U=function(a){var b=this.adj;P(a,function(a){try{K(this.node,a),G(b[a],function(d,f){K(b[f],a)}),K(b,a)}catch(d){}},this)};W.prototype.remove_nodes_from=W.prototype.U;W.prototype.K=function(a){return a?T(this.node):Xa(J(this.adj))};
W.prototype.nodes_iter=W.prototype.K;W.prototype.z=function(a){return va(this.K(a))};W.prototype.nodes=W.prototype.z;W.prototype.L=function(){return H(this.adj)};W.prototype.number_of_nodes=W.prototype.L;W.prototype.v=function(){return H(this.adj)};W.prototype.order=W.prototype.v;W.prototype.q=function(a){return!ea(a)&&a in this.adj};W.prototype.has_node=W.prototype.q;
W.prototype.h=function(a,b,c){c=c||{};"object"!==q(c)&&h(new O("The attr_dict argument must be an object."));a in this.adj||(this.adj[a]={},this.node[a]={});b in this.adj||(this.adj[b]={},this.node[b]={});var d=L(this.adj[a],b,{});M(d,c);this.adj[a][b]=d;this.adj[b][a]=d};W.prototype.add_edge=W.prototype.h;
W.prototype.a=function(a,b){b=b||{};"object"!==q(b)&&h(new O("The attr_dict argument must be an object."));P(a,function(a){var d=Za(a),e,f,g;3===d?(e=a[0],f=a[1],g=a[2]):2===d?(e=a[0],f=a[1],g={}):h(new O("Edge tuple "+a.toString()+" must be a 2-tuple or 3-tuple."));e in this.adj||(this.adj[e]={},this.node[e]={});f in this.adj||(this.adj[f]={},this.node[f]={});a=L(this.adj[e],f,{});M(a,b,g);this.adj[e][f]=a;this.adj[f][e]=a},this)};W.prototype.add_edges_from=W.prototype.a;
W.prototype.la=function(a,b,c){c=c||{};u(b)||(c=b,b="weight");this.a(Q(a,function(a){var c={};c[b]=a[2];r(c[b])||h(new TypeError("Values must consist of three elements: "+gb(a)));return[a[0],a[1],c]}),c)};W.prototype.add_weighted_edges_from=W.prototype.la;W.prototype.s=function(a,b){try{K(this.adj[a],b),a!=b&&K(this.adj[b],a)}catch(c){c instanceof TypeError&&h(new O("The edge "+a+"-"+b+" is not in the graph")),h(c)}};W.prototype.remove_edge=W.prototype.s;
W.prototype.A=function(a){P(a,function(a){var c=a[0];a=a[1];c in this.adj&&a in this.adj[c]&&(K(this.adj[c],a),c!=a&&K(this.adj[a],c))},this)};W.prototype.remove_edges_from=W.prototype.A;W.prototype.S=function(a,b){return a in this.adj&&b in this.adj[a]};W.prototype.has_edge=W.prototype.S;W.prototype.C=function(a){a in this.adj||h(new O("The node "+a+" is not in the graph."));return R(this.adj[a])};W.prototype.neighbors=W.prototype.C;
W.prototype.Y=function(a){a in this.adj||h(new O("The node "+a+" is not in the graph."));return Xa(this.adj[a])};W.prototype.neighbors_iter=W.prototype.Y;W.prototype.p=function(a,b){return R(this.j(a,b))};W.prototype.edges=W.prototype.p;
W.prototype.j=function(a,b){v(a)&&(b=a,a=l);var c={},d,e;d=a!=l?Q(this.b(a),function(a){return[a,this.adj[a]]},this):T(this.adj);return b?S(d,function(a){e=a[0];var b=new C,d=T(a[1]);b.next=function(){try{return d.next()}catch(a){a===B&&(c[e]=1),h(a)}};return b},function(a){if(!(a[0]in c))return[e,a[0],a[1]]}):S(d,function(a){e=a[0];var b=new C,d=Xa(a[1]);b.next=function(){try{return d.next()}catch(a){a===B&&(c[e]=1),h(a)}};return b},function(a){if(!(a in c))return[e,a]})};
W.prototype.edges_iter=W.prototype.j;W.prototype.X=function(a,b,c){r(c)||(c=l);return a in this.adj?L(this.adj[a],b,c):c};W.prototype.get_edge_data=W.prototype.X;W.prototype.na=function(){return R(Q(this.o(),function(a){return J(a[1])}))};W.prototype.adjacency_list=W.prototype.na;W.prototype.o=function(){return T(this.adj)};W.prototype.adjacency_iter=W.prototype.o;W.prototype.l=function(a,b){return this.q(a)?this.m(a,b).next()[1]:Wa(va(this.m(a,b)))};W.prototype.degree=W.prototype.l;
W.prototype.m=function(a,b){var c;c=a!=l?Q(this.b(a),function(a){return[a,this.adj[a]]},this):T(this.adj);return b?Q(c,function(a){var c=a[0];a=a[1];var f=0,g;for(g in a)f+=+L(a[g],b,1);f+=+(c in a&&L(a[c],b,1));return[c,f]}):Q(c,function(a){return[a[0],H(a[1])+ +(a[0]in a[1])]})};W.prototype.degree_iter=W.prototype.m;W.prototype.clear=function(){this.name("");Da(this.adj);Da(this.node);Da(this.graph)};W.prototype.clear=W.prototype.clear;W.prototype.copy=function(){return fb(this)};
W.prototype.copy=W.prototype.copy;W.prototype.f=ba(n);W.prototype.is_multigraph=W.prototype.f;W.prototype.d=ba(n);W.prototype.is_directed=W.prototype.d;W.prototype.B=function(){var a=new X;a.name(this.name());a.i(this);a.a(function(){var a;return S(this.o(),function(c){a=c[0];return T(c[1])},function(c){return[a,c[0],U(c[1])]})}.call(this));a.graph=U(this.graph);a.node=U(this.node);return a};W.prototype.to_directed=W.prototype.B;W.prototype.P=function(){return fb(this)};
W.prototype.to_undirected=W.prototype.P;W.prototype.r=function(a){a=this.b(a);var b=new this.constructor,c=b.adj,d=this.adj;P(a,function(a){var b={};c[a]=b;G(d[a],function(d,j){j in c&&(b[j]=d,c[j][a]=d)})});P(b,function(a){b.node[a]=this.node[a]},this);b.graph=this.graph;return b};W.prototype.subgraph=W.prototype.r;W.prototype.wa=function(){return A(la(eb(this.adj),function(a){return a[0]in a[1]}),function(a){return a[0]})};W.prototype.nodes_with_selfloops=W.prototype.wa;
W.prototype.O=function(a){return a?A(la(eb(this.adj),function(a){return a[0]in a[1]}),function(a){var c=a[0];return[c,c,a[1][c]]}):A(la(eb(this.adj),function(a){return a[0]in a[1]}),function(a){return[a[0],a[0]]})};W.prototype.selfloop_edges=W.prototype.O;W.prototype.xa=function(){return this.O().length};W.prototype.number_of_selfloops=W.prototype.xa;W.prototype.size=function(a){var b=V.n.apply(l,I(this.l(l,a)))/2;return a!=l?b:Math.floor(b)};W.prototype.size=W.prototype.size;
W.prototype.D=function(a,b){return a==l?Math.floor(this.size()):b in this.adj[a]?1:0};W.prototype.number_of_edges=W.prototype.D;W.prototype.ka=function(a,b){var c=R(a),d=c[0],c=Q(pa(c,1),function(a){return[d,a]});this.a(c,b)};W.prototype.add_star=W.prototype.ka;W.prototype.ja=function(a,b){var c=R(a),c=ta(pa(c,0,c.length-1),pa(c,1));this.a(c,b)};W.prototype.add_path=W.prototype.ja;W.prototype.ia=function(a,b){var c=R(a),c=ta(c,na(pa(c,1),[c[0]]));this.a(c,b)};W.prototype.add_cycle=W.prototype.ia;
W.prototype.b=function(a){if(a!=l)if(this.q(a))a=Xa([a.toString()]);else{var b=this.adj,c=new C,d=S(a,function(a){if(a in b)return a.toString()});c.next=function(){try{return d.next()}catch(a){a instanceof TypeError&&h(new O("nbunch is not a node or a sequence of nodes")),h(a)}};a=c}else a=Xa(this.adj);return a};W.prototype.nbunch_iter=W.prototype.b;function X(a,b){if(!(this instanceof X))return new X(a,b);this.graph={};this.node={};this.adj={};this.pred={};this.succ=this.adj;a!=l&&Oa(a,this);M(this.graph,b||{});this.edge=this.adj}w("jsnx.classes.DiGraph",X);w("jsnx.DiGraph",X);ia(X,W);X.__name__="DiGraph";X.prototype.F=function(a,b){b!=l||(b={});"object"!==q(b)&&h(new O("The attr_dict argument must be an object."));a in this.succ?M(this.node[a],b):(this.succ[a]={},this.pred[a]={},this.node[a]=b)};X.prototype.add_node=X.prototype.F;
X.prototype.i=function(a,b){var c,d,e,f,g;b=b||{};P(Xa(a),function(a){c=!(a in this.succ);ea(a)?(d=a[0],e=a[1],d in this.succ?(g=this.node[d],M(g,b,e)):(this.succ[d]={},this.pred[d]={},f=Ea(b),M(f,e),this.node[d]=f)):c?(this.succ[a]={},this.pred[a]={},this.node[a]=Ea(b)):M(this.node[a],b)},this)};X.prototype.add_nodes_from=X.prototype.i;
X.prototype.N=function(a){a in this.node||h(new O("The node "+a+" is not in the graph"));var b=this.succ[a];K(this.node,a);G(b,function(b,d){K(this.pred[d],a)},this);K(this.succ,a);G(this.pred[a],function(b,d){K(this.succ[d],a)},this);K(this.pred,a)};X.prototype.remove_node=X.prototype.N;
X.prototype.U=function(a){var b;P(a,function(a){a in this.succ&&(b=this.succ[a],K(this.node,a),G(b,function(b,e){K(this.pred[e],a)},this),K(this.succ,a),G(this.pred[a],function(b,e){K(this.succ[e],a)},this),K(this.pred,a))},this)};X.prototype.remove_nodes_from=X.prototype.U;
X.prototype.h=function(a,b,c){c=c||{};"object"!==q(c)&&h(new O("The attr_dict argument must be an object."));a in this.succ||(this.succ[a]={},this.pred[a]={},this.node[a]={});b in this.succ||(this.succ[b]={},this.pred[b]={},this.node[b]={});var d=L(this.adj[a],b,{});M(d,c);this.succ[a][b]=d;this.pred[b][a]=d};X.prototype.add_edge=X.prototype.h;
X.prototype.a=function(a,b){b=b||{};"object"!==q(b)&&h(new O("The attr_dict argument must be an object."));P(a,function(a){var d=Za(a),e,f,g;3===d?(e=a[0],f=a[1],g=a[2]):2===d?(e=a[0],f=a[1],g={}):h(new O("Edge tuple "+a.toString()+" must be a 2-tuple or 3-tuple."));e in this.succ||(this.succ[e]={},this.pred[e]={},this.node[e]={});f in this.succ||(this.succ[f]={},this.pred[f]={},this.node[f]={});a=L(this.adj[e],f,{});M(a,b,g);this.succ[e][f]=a;this.pred[f][e]=a},this)};
X.prototype.add_edges_from=X.prototype.a;X.prototype.s=function(a,b){try{K(this.succ[a],b),K(this.pred[b],a)}catch(c){c instanceof TypeError&&h(new O("The edge "+a+"-"+b+" is not in the graph")),h(c)}};X.prototype.remove_edge=X.prototype.s;X.prototype.A=function(a){P(a,function(a){var c=a[0];a=a[1];c in this.succ&&a in this.succ[c]&&(K(this.succ[c],a),K(this.pred[a],c))},this)};X.prototype.remove_edges_from=X.prototype.A;X.prototype.ta=function(a,b){return a in this.succ&&b in this.succ[a]};
X.prototype.has_successor=X.prototype.ta;X.prototype.sa=function(a,b){return a in this.pred&&b in this.pred[a]};X.prototype.has_predecessor=X.prototype.sa;X.prototype.ga=function(a){a in this.succ||h(new O("The node "+a+" is not in the digraph."));return Xa(this.succ[a])};X.prototype.successors_iter=X.prototype.ga;X.prototype.za=function(a){a in this.pred||h(new O("The node "+a+" is not in the digraph."));return Xa(this.pred[a])};X.prototype.predecessors_iter=X.prototype.za;
X.prototype.ba=function(a){a in this.succ||h(new O("The node "+a+" is not in the digraph."));return R(this.succ[a])};X.prototype.successors=X.prototype.ba;X.prototype.ya=function(a){a in this.succ||h(new O("The node "+a+" is not in the digraph."));return R(this.pred[a])};X.prototype.predecessors=X.prototype.ya;X.prototype.C=X.prototype.ba;X.prototype.neighbors=X.prototype.C;X.prototype.Y=X.prototype.ga;X.prototype.neighbors_iter=X.prototype.Y;
X.prototype.j=function(a,b){v(a)&&(b=a,a=l);var c,d,e;c=a!=l?Q(this.b(a),function(a){return[a,this.adj[a]]},this):eb(this.adj);return b?S(c,function(a){d=a[0];e=a[1];return T(e)},function(a){return[d,a[0],a[1]]}):S(c,function(a){d=a[0];e=a[1];return T(e)},function(a){return[d,a[0]]})};X.prototype.edges_iter=X.prototype.j;X.prototype.T=X.prototype.j;X.prototype.out_edges_iter=X.prototype.T;X.prototype.$=W.prototype.p;X.prototype.out_edges=X.prototype.$;
X.prototype.I=function(a,b){v(a)&&(b=a,a=l);var c,d;c=a!=l?Q(this.b(a),function(a){return[a,this.pred[a]]},this):eb(this.pred);return b?S(c,function(a){d=a[0];return T(a[1])},function(a){return[a[0],d,a[1]]}):S(c,function(a){d=a[0];return T(a[1])},function(a){return[a[0],d]})};X.prototype.in_edges_iter=X.prototype.I;X.prototype.H=function(a,b){return R(this.I(a,b))};X.prototype.in_edges=X.prototype.H;
X.prototype.m=function(a,b){var c;c=a!=l?ab(Q(this.b(a),function(a){return[a,this.succ[a]]},this),Q(this.b(a),function(a){return[a,this.pred[a]]},this)):ab(T(this.succ),T(this.pred));return b?Q(c,function(a){var c=a[0][1],f=a[1][1],g=0,j;for(j in c)g+=+L(c[j],b,1);for(j in f)g+=+L(f[j],b,1);return[a[0][0],g]}):Q(c,function(a){return[a[0][0],Za(a[0][1])+Za(a[1][1])]})};X.prototype.degree_iter=X.prototype.m;
X.prototype.G=function(a,b){var c;c=a!=l?Q(this.b(a),function(a){return[a,this.pred[a]]},this):T(this.pred);return b?Q(c,function(a){var c=0,f=a[1],g;for(g in f)c+=+L(f[g],b,1);return[a[0],c]}):Q(c,function(a){return[a[0],H(a[1])]})};X.prototype.in_degree_iter=X.prototype.G;X.prototype.M=function(a,b){var c;c=a!=l?Q(this.b(a),function(a){return[a,this.succ[a]]},this):T(this.succ);return b?Q(c,function(a){var c=0,f=a[1],g;for(g in f)c+=+L(f[g],b,1);return[a[0],c]}):Q(c,function(a){return[a[0],H(a[1])]})};
X.prototype.out_degree_iter=X.prototype.M;X.prototype.da=function(a,b){return this.q(a)?this.G(a,b).next()[1]:Wa(this.G(a,b))};X.prototype.in_degree=X.prototype.da;X.prototype.fa=function(a,b){return this.q(a)?this.M(a,b).next()[1]:Wa(this.M(a,b))};X.prototype.out_degree=X.prototype.fa;X.prototype.clear=function(){Da(this.succ);Da(this.pred);Da(this.node);Da(this.graph)};X.prototype.clear=X.prototype.clear;X.prototype.f=ba(n);X.prototype.is_multigraph=X.prototype.f;X.prototype.d=ba(k);
X.prototype.is_directed=X.prototype.d;X.prototype.B=function(){return fb(this)};X.prototype.to_directed=X.prototype.B;X.prototype.P=function(a){var b=new W;b.name(this.name());b.i(this);var c=this.pred,d;a?b.a(S(this.o(),function(a){d=a[0];return T(a[1])},function(a){if(a[0]in c[d])return[d,a[0],U(a[1])]})):b.a(S(this.o(),function(a){d=a[0];return T(a[1])},function(a){return[d,a[0],U(a[1])]}));b.graph=U(this.graph);b.node=U(this.node);return b};X.prototype.to_undirected=X.prototype.P;
X.prototype.reverse=function(a){(a=!r(a)||a)?(a=new this.constructor(l,{name:"Reverse of ("+this.name()+")"}),a.i(this),a.a(Q(this.j(k),function(a){return[a[1],a[0],U(a[2])]})),a.graph=U(this.graph),a.node=U(this.node)):(a=this.succ,this.succ=this.pred,this.pred=a,this.adj=this.succ,a=this);return a};X.prototype.reverse=X.prototype.reverse;
X.prototype.r=function(a){a=this.b(a);var b=new this.constructor,c=b.succ,d=b.pred,e=this.succ;P(a,function(a){c[a]={};d[a]={}});P(c,function(a){var b=c[a];G(e[a],function(e,m){m in c&&(b[m]=e,d[m][a]=e)})});P(b,function(a){b.node[a]=this.node[a]},this);b.graph=this.graph;return b};X.prototype.subgraph=X.prototype.r;function Y(a,b){if(!(this instanceof Y))return new Y(a,b);W.call(this,a,b)}ia(Y,W);w("jsnx.classes.MultiGraph",Y);w("jsnx.MultiGraph",Y);Y.__name__="MultiGraph";
Y.prototype.h=function(a,b,c,d){var e,f;c!=l&&(!u(c)&&"number"!=typeof c)&&(d=c,c=l);d=d||{};"object"!==q(d)&&h(new O("The attr_dict argument must be an object."));a in this.adj||(this.adj[a]={},this.node[a]={});b in this.adj||(this.adj[b]={},this.node[b]={});if(b in this.adj[a]){f=this.adj[a][b];if(c==l)for(c=H(f);c in f;)c+=1;e=L(f,c,{});M(e,d);f[c]=e}else c!=l||(c=0),e={},M(e,d),f=Ga(c,e),this.adj[a][b]=f,this.adj[b][a]=f};Y.prototype.add_edge=Y.prototype.h;
Y.prototype.a=function(a,b){b=b||{};"object"!==q(b)&&h(new O("The attr_dict argument must be an object."));P(a,function(a){var d=Za(a),e,f,g=l,j={};4===d?(e=a[0],f=a[1],g=a[2],j=a[3]):3===d?(e=a[0],f=a[1],j=a[2]):2===d?(e=a[0],f=a[1]):h(new O("Edge tuple "+gb(a)+" must be a 2-tuple, 3-tuple or 4-tuple."));a=e in this.adj?L(this.adj[e],f,{}):{};if(g==l)for(g=H(a);g in a;)g+=1;a=L(a,g,{});M(a,b,j);this.h(e,f,g,a)},this)};Y.prototype.add_edges_from=Y.prototype.a;
Y.prototype.s=function(a,b,c){(!(a in this.adj)||!(b in this.adj[a]))&&h(new O("The edge "+a+"-"+b+" is not in the graph"));var d=this.adj[a][b];c!=l?(c in d||h(new O("The edge "+a+"-"+b+" with key "+c+" is not in the graph")),K(d,c)):K(d,Ca(d));0===H(d)&&(K(this.adj[a],b),a!=b&&K(this.adj[b],a))};Y.prototype.remove_edge=Y.prototype.s;Y.prototype.A=function(a){P(a,function(a){try{this.s(a[0],a[1],a[2])}catch(c){c instanceof O||h(c)}},this)};Y.prototype.remove_edges_from=Y.prototype.A;
Y.prototype.S=function(a,b,c){return c!=l?a in this.adj&&b in this.adj[a]&&c in this.adj[a][b]:a in this.adj&&b in this.adj[a]};Y.prototype.has_edge=Y.prototype.S;Y.prototype.p=function(a,b,c){return va(this.j(a,b,c))};Y.prototype.edges=Y.prototype.p;
Y.prototype.j=function(a,b,c){v(a)&&(v(b)&&(c=b),b=a,a=l);var d={},e,f;a=a!=l?Q(this.b(a),function(a){return[a,this.adj[a]]},this):T(this.adj);return b?S(a,function(a){e=a[0];var b=new C,c=T(a[1]);b.next=function(){try{return c.next()}catch(a){a===B&&(d[e]=1),h(a)}};return b},function(a){f=a[0];if(!(f in d))return T(a[1])},function(a){return c?[e,f,a[0],a[1]]:[e,f,a[1]]}):S(a,function(a){e=a[0];var b=new C,c=T(a[1]);b.next=function(){try{return c.next()}catch(a){a===B&&(d[e]=1),h(a)}};return b},function(a){f=
a[0];if(!(f in d))return T(a[1])},function(a){return c?[e,f,a[0]]:[e,f]})};Y.prototype.edges_iter=Y.prototype.j;Y.prototype.X=function(a,b,c,d){r(d)||(d=l);return a in this.adj&&b in this.adj[a]?c!=l?L(this.adj[a][b],c,d):this.adj[a][b]:d};Y.prototype.get_edge_data=Y.prototype.X;
Y.prototype.m=function(a,b){var c;c=a!=l?Q(this.b(a),function(a){return[a,this.adj[a]]},this):T(this.adj);return b!=l?F(c,function(a){var c=a[0];a=a[1];var f=0;G(a,function(a){G(a,function(a){f+=L(a,b,1)})});c in a&&G(a[c],function(a){f+=L(a,b,1)});return[c,f]}):F(c,function(a){var b=a[0];a=a[1];var c=0;G(a,function(a){c+=H(a)});return[b,c+ +(b in a&&H(a[b]))]})};Y.prototype.degree_iter=Y.prototype.m;Y.prototype.f=ba(k);Y.prototype.is_multigraph=Y.prototype.f;Y.prototype.d=ba(n);
Y.prototype.is_directed=Y.prototype.d;Y.prototype.B=function(){var a=new $;a.i(this);a.a(function(){var a,c;return S(this.o(),function(c){a=c[0];return T(c[1])},function(a){c=a[0];return T(a[1])},function(d){return[a,c,d[0],U(d[1])]})}.call(this));a.graph=U(this.graph);a.node=U(this.node);return a};Y.prototype.to_directed=Y.prototype.B;
Y.prototype.O=function(a,b){var c=[];a?b?G(this.adj,function(a,b){b in a&&G(a[b],function(a,d){c.push([b,b,d,a])})}):G(this.adj,function(a,b){b in a&&G(a[b],function(a){c.push([b,b,a])})}):b?G(this.adj,function(a,b){b in a&&G(a[b],function(a,d){c.push([b,b,d])})}):G(this.adj,function(a,b){b in a&&G(a[b],function(){c.push([b,b])})});return c};Y.prototype.selfloop_edges=Y.prototype.O;Y.prototype.D=function(a,b){return a==l?this.size():a in this.adj&&b in this.adj[a]?H(this.adj[a][b]):0};
Y.prototype.number_of_edges=Y.prototype.D;Y.prototype.r=function(a){a=this.b(a);var b=new this.constructor,c=b.adj,d=this.adj;E(a,function(a){var b={};c[a]=b;G(d[a],function(d,j){if(j in c){var m=Ea(d);b[j]=m;c[j][a]=m}})});G(this.node,function(a,c){b.node[c]=a});b.graph=this.graph;return b};Y.prototype.subgraph=Y.prototype.r;function $(a,b){if(!(this instanceof $))return new $(a,b);X.call(this,a,b)}ia($,X);var mb=$.prototype,nb=Y.prototype,ob;for(ob in nb)nb.hasOwnProperty(ob)&&"constructor"!==ob&&(mb[ob]=nb[ob]);w("jsnx.classes.MultiDiGraph",$);w("jsnx.MultiDiGraph",$);$.__name__="MultiDiGraph";
$.prototype.h=function(a,b,c,d){var e,f;c!=l&&(!u(c)&&"number"!=typeof c)&&(d=c,c=l);d=d||{};"object"!==q(d)&&h(new O("The attr_dict argument must be an object."));a in this.succ||(this.succ[a]={},this.pred[a]={},this.node[a]={});b in this.succ||(this.succ[b]={},this.pred[b]={},this.node[b]={});if(b in this.succ[a]){f=this.adj[a][b];if(c==l)for(c=H(f);c in f;)c+=1;e=L(f,c,{});M(e,d);f[c]=e}else c!=l||(c=0),e={},M(e,d),f=Ga(c,e),this.succ[a][b]=f,this.pred[b][a]=f};$.prototype.add_edge=$.prototype.h;
$.prototype.s=function(a,b,c){(!(a in this.adj)||!(b in this.adj[a]))&&h(new O("The edge "+a+"-"+b+" is not in the graph"));var d=this.adj[a][b];c!=l?(c in d||h(new O("The edge "+a+"-"+b+" with key "+c+" is not in the graph")),K(d,c)):K(d,Ca(d));0===H(d)&&(K(this.succ[a],b),K(this.pred[b],a))};$.prototype.remove_edge=$.prototype.s;
$.prototype.j=function(a,b,c){v(a)&&(v(b)&&(c=b),b=a,a=l);var d,e;a=a!=l?Q(this.b(a),function(a){return[a,this.adj[a]]},this):eb(this.adj);return b?S(a,function(a){d=a[0];return T(a[1])},function(a){e=a[0];return T(a[1])},function(a){return c?[d,e,a[0],a[1]]:[d,e,a[1]]}):S(a,function(a){d=a[0];return T(a[1])},function(a){e=a[0];return T(a[1])},function(a){return c?[d,e,a[0]]:[d,e]})};$.prototype.edges_iter=$.prototype.j;$.prototype.T=$.prototype.j;$.prototype.out_edges_iter=$.prototype.T;
$.prototype.$=function(a,b,c){return va(this.T(a,b,c))};$.prototype.out_edges=$.prototype.$;$.prototype.I=function(a,b,c){v(a)&&(b=a,a=l);var d,e;a=da?Q(this.b(a),function(a){return[a,this.pred[a]]},this):eb(this.pred);return b?S(a,function(a){d=a[0];return T(a[1])},function(a){e=a[0];return T(a[1])},function(a){return c?[e,d,a[0],a[1]]:[e,d,a[1]]}):S(a,function(a){d=a[0];return T(a[1])},function(a){e=a[0];return T(a[1])},function(a){return c?[e,d,a[0]]:[e,d]})};$.prototype.in_edges_iter=$.prototype.I;
$.prototype.H=function(a,b,c){return va(this.I(a,b,c))};$.prototype.in_edges=$.prototype.H;
$.prototype.m=function(a,b){var c;c=a!=l?ab(F(this.b(a),function(a){return[a,this.succ[a]]},this),F(this.b(a),function(a){return[a,this.pred[a]]},this)):ab(T(this.succ),T(this.pred));return b!=l?Q(c,function(a){var c=a[0][1],f=0;G(a[1][1],function(a){G(a,function(a){f+=+L(a,b,1)})});G(c,function(a){G(a,function(a){f+=+L(a,b,1)})});return[a[0][0],f]}):Q(c,function(a){var b=0,c=0;G(a[1][1],function(a){b+=Za(a)});G(a[0][1],function(a){c+=Za(a)});return[a[0][0],b+c]})};$.prototype.degree_iter=$.prototype.m;
$.prototype.G=function(a,b){var c;c=a!=l?Q(this.b(a),function(a){return[a,this.pred[a]]},this):T(this.pred);return b!=l?Q(c,function(a){var c=0;G(a[1],function(a){G(a,function(a){c+=+L(a,b,1)})});return[a[0][0],c]}):Q(c,function(a){var b=0;G(a[1],function(a){b+=H(a)});return[a[0],b]})};$.prototype.in_degree_iter=$.prototype.G;
$.prototype.M=function(a,b){var c;c=a!=l?Q(this.b(a),function(a){return[a,this.succ[a]]},this):T(this.succ);return b!=l?Q(c,function(a){var c=0;G(a[1],function(a){G(a,function(a){c+=+L(a,b,1)})});return[a[0][0],c]}):Q(c,function(a){var b=0;G(a[1],function(a){b+=H(a)});return[a[0],b]})};$.prototype.out_degree_iter=$.prototype.M;$.prototype.f=ba(k);$.prototype.is_multigraph=$.prototype.f;$.prototype.d=ba(k);$.prototype.is_directed=$.prototype.d;$.prototype.B=function(){return fb(this)};
$.prototype.to_directed=$.prototype.B;$.prototype.P=function(a){var b=new Y;b.name(this.name());b.i(this);var c=this,d,e;a?b.a(S(this.o(),function(a){d=a[0];return T(a[1])},function(a){e=a[0];return T(a[1])},function(a){if(c.S(e,d,a[0]))return[d,e,a[0],U(a[1])]})):b.a(S(this.o(),function(a){d=a[0];return T(a[1])},function(a){e=a[0];return T(a[1])},function(a){return[d,e,a[0],U(a[1])]}));b.graph=U(this.graph);b.node=U(this.node);return b};$.prototype.to_undirected=$.prototype.P;
$.prototype.r=function(a){a=this.b(a);var b=new this.constructor,c=b.succ,d=b.pred,e=this.succ;E(a,function(a){c[a]={};d[a]={}});P(c,function(a){var b=c[a];G(e[a],function(e,m){if(m in c){var y=Ea(e);b[m]=y;d[m][a]=y}})});P(b,function(a){b.node[a]=this.node[a]},this);b.graph=this.graph;return b};$.prototype.subgraph=$.prototype.r;
$.prototype.reverse=function(a){(a=!r(a)||a)?(a=new this.constructor(l,{name:"Reverse of ("+this.name()+")"}),a.i(this),a.a(F(this.j(k,k),function(a){return[a[1],a[0],a[2],U(a[3])]})),a.graph=U(this.graph),a.node=U(this.node)):(a=this.succ,this.succ=this.pred,this.pred=a,this.adj=this.succ,a=this);return a};$.prototype.reverse=$.prototype.reverse;w("jsnx.nodes",function(a){return a.z()});w("jsnx.nodes_iter",function(a){return a.K()});w("jsnx.edges",function(a,b){return a.p(b)});w("jsnx.edges_iter",function(a,b){return a.j(b)});w("jsnx.degree",function(a,b,c){return a.l(b,c)});w("jsnx.neighbors",function(a,b){return a.C(b)});w("jsnx.number_of_nodes",function(a){return a.L()});w("jsnx.number_of_edges",function(a){return a.D()});w("jsnx.density",function(a){var b=a.L(),c=a.D();return 0===c?0:a.d()?c/(b*(b-1)):2*c/(b*(b-1))});
w("jsnx.degree_histogram",function(a){a=I(a.l());for(var b=Math.max.apply(Math,a)+1,c=[],d=0;d<b;d++)c[d]=0;ka(a,function(a){c[a]+=1});return c});w("jsnx.is_directed",function(a){return a.d()});w("jsnx.freeze",function(a){function b(){h(new O("Frozen graph can't be modified"))}a.F=b;a.i=b;a.N=b;a.U=b;a.h=b;a.a=b;a.s=b;a.A=b;a.clear=b;a.qa=k;return a});w("jsnx.is_frozen",function(a){return!!a.qa});w("jsnx.subgraph",function(a,b){return a.r(b)});
w("jsnx.create_empty_copy",function(a,b){r(b)||(b=k);var c=new a.constructor;b&&c.i(a);return c});
w("jsnx.info",function(a,b){var c="";if(b!=l)a.q(b)||h(new O("node "+b+" not in graph")),c=c+("Node "+b+" has the following properties:\n")+("Degree: "+a.l(b)+"\n"),c+="Neighbors: "+a.C(b).join(" ");else{var c=c+("Name: "+a.name()+"\n"),c=c+("Type: "+a.constructor.__name__+"\n"),c=c+("Number of nodes: "+a.L()+"\n"),c=c+("Number of edges: "+a.D()+"\n"),d=a.L();if(0<d)if(a.d())c+="Average in degree: "+(V.n.apply(l,I(a.da()))/d).toFixed(4)+"\n",c+="Average out degree: "+(V.n.apply(l,I(a.fa()))/d).toFixed(4);
else var e=V.n.apply(l,I(a.l())),c=c+("Average degree: "+(e/d).toFixed(4))}return c});w("jsnx.set_node_attributes",function(a,b,c){G(c,function(c,e){a.Z[e][b]=c})});function pb(a,b){var c={};G(a.Z,function(a,e){b in a&&(c[e]=a[b])});return c}w("jsnx.get_node_attributes",pb);w("jsnx.set_edge_attributes",function(a,b,c){G(c,function(b,c){c=c.split(",");a.k(c[0])[c[1]]=b})});pb=function(a,b){var c={};G(a.p(k),function(a){b in a[2]&&(c[[a[0],a[1]]]=a[2][b])});return c};w("jsnx.get_edge_attributes",{}.Ka);var rb={};function sb(a,b){a.d()&&h(new O("triangles() is not defined for directed graphs."));if(a.q(b))return Math.floor(tb(a,b).next()[2]/2);var c={};E(tb(a,b),function(a){c[a[0]]=Math.floor(a[2]/2)});return c}w("jsnx.triangles",sb);
function tb(a,b){a.f()&&h(new O("Not defined for multigraphs."));var c;c=b!=l?S(a.b(b),function(b){return[b,a.k(b)]}):T(a.adj);return F(c,function(b){var c=new N(J(b[1])),f=0;c.remove(b[0]);E(c,function(b){var d=new N(J(a.k(b)));d.remove(b);f+=La(c,d).c()});return[b[0],c.c(),f]})}
w("jsnx.average_clustering",function(a,b,c,d){2===arguments.length?u(b)?(c=b,b=l):v(b)&&(d=b,b=l):3===arguments.length&&v(c)&&(d=c,c=l);c!=l||(c=l);d!=l||(d=k);var e=I(ub(a,b,c));d||(e=la(e,function(a){return 0<a}));return V.n.apply(V,e)/e.length});
function ub(a,b,c){a.d()&&h(new O("Clustering algorithms are not defined for directed graphs."));if(c!=l){var d=c;a.f()&&h(new O("Not defined for multigraphs."));r(d)||(d="weight");var e;if(0===a.p().length)c=1;else{c=a.p(k);var f=function(a){return L(a[2],d,1)};c="function"==q(f)?Q(c,function(){return f.apply(l,arguments)}):R(c);c=Math.max.apply(l,c)}e=c;c=b!=l?S(a.b(b),function(b){return[b,a.k(b)]}):T(a.adj);c=F(c,function(b){var c=b[0],f=new N(J(b[1]));f.remove(c);var g=0,t=new N;E(f,function(b){var j=
L(a.k(c)[b],d,1)/e;t.add(b);var Z=Ma(new N(J(a.k(b))),t);E(La(f,Z),function(f){var y=L(a.k(b)[f],d,1)/e;f=L(a.k(c)[f],d,1)/e;g+=Math.pow(j*y*f,1/3)})});return[c,f.c(),2*g]})}else c=tb(a,b);var g={};E(c,function(a){g[a[0]]=0===a[2]?0:a[2]/(a[1]*(a[1]-1))});return a.q(b)?I(g)[0]:g}w("jsnx.clustering",ub);w("jsnx.transitivity",function(a){var b=0,c=0;E(tb(a),function(a){c+=a[1]*(a[1]-1);b+=a[2]});return 0===b?0:b/c});
w("jsnx.square_clustering",function(a,b){var c=b==l?a:a.b(b),d={};E(c,function(b){var c=d[b]=0;E(cb(J(a.k(b))),function(g){var j=g[0];g=g[1];var m=La(new N(J(a.k(j))),J(a.k(g)));m.remove(b);m=m.c();d[b]+=m;var y=m+1,x=a.k(j);g in x&&(y+=1);c+=(H(a.k(j))-y)*(H(a.k(g))-y)+m});0<c&&(d[b]/=c)});return a.q(b)?I(d)[0]:d});function vb(a){var b=-1,c={},d=new N;E(a.o(),function(a){var e=new N(J(a[1]));e.remove(a[0]);var f=e.c();f>b?(c[a[0]]=d=e,b=f):c[a[0]]=e});var e=new N(J(c)),f=Ma(e,d),g=new N,j=[],m=[];a=new C;a.next=function(){0===f.c()&&0===j.length&&h(B);var a,x;if(0<f.c())a=wa(f),f.remove(a);else{var t=j.pop();e=t[0];g=t[1];f=t[2];m.pop();return this.next()}m.push(a);e.remove(a);g.add(a);var D=c[a],t=La(e,D),D=La(g,D);if(0===t.c()&&(0===D.c()&&(x=oa(m)),m.pop(),x))return x;if(0===D.c()&&1===t.c())return x=na(m,
t.w()),m.pop(),x;var ma=t.c(),Z=-1,qb,za;for(x=ua(D);(a=wa(x,l))!==l&&!(a=La(t,c[a]),za=a.c(),za>Z&&(qb=a,Z=za,Z===ma)););if(Z===ma)return m.pop(),this.next();b=-1;for(x=ua(t);(a=wa(x,l))!==l&&!(a=La(t,c[a]),za=a.c(),za>b&&(d=a,b=za,b===ma-1)););Z>b&&(d=qb);j.push([e,g,f]);e=t;g=D;f=Ma(e,d);return this.next()};return a}w("jsnx.find_cliques",vb);
w("jsnx.find_cliques_recursive",function(a){var b={};E(a.o(),function(a){var c=new N(J(a[1]));c.remove(a[0]);b[a[0]]=c});a:{for(var c in b){a=n;break a}a=k}if(a)return[];a=new N(J(b));c=new N;var d=[];wb(b,a,c,[],d);return d});
function wb(a,b,c,d,e){var f=-1,g=b.c(),j,m,y,x;for(m=ua(c);(y=wa(m,l))!==l;)if(y=La(b,a[y]),x=y.c(),x>f&&(j=y,f=x,x===g))return;E(b,function(c){c=La(b,a[c]);var d=c.c();d>f&&(j=c,f=d)});g=Ma(b,j);E(g,function(f){b.remove(f);d.push(f);var g=a[f];f=La(b,g);g=La(c,g);f.J()&&g.J()?e.push(oa(d)):g.J()&&1===f.c()?e.push(na(d,f.w())):wb(a,f,g,d,e);c.add(d.pop())})}w("jsnx.graph_clique_number",function(a,b){b!=l||(b=vb(a));var c=0;P(b,function(a){c=a.length>c?a.length:c});return c});
w("jsnx.graph_number_of_cliques",function(a,b){b!=l||(b=vb(a));return R(b).length});function xb(a,b,c){c!=l||(c=va(vb(a)));b!=l||(b=a.z());var d;if(ea(b))d={},ka(b,function(a){d[a]=la(c,function(b){return 0<=ja(b,a)||0<=ja(b,a+"")}).length});else{var e=b;d=la(c,function(a){return 0<=ja(a,e)||0<=ja(a,e+"")}).length}return d}w("jsnx.number_of_cliques",xb);function yb(a,b){if(a.v()!=b.v())return n;var c=a.l(),d=sb(a),e=xb(a),f=[],g;for(g in c)f.push([c[g],d[g],e[g]]);f.sort(function(a,b){return a[0]!==b[0]?a[0]-b[0]:a[1]!==b[1]?a[1]-b[1]:a[2]-b[2]});var c=b.l(),d=sb(b),e=xb(b),j=[];for(g in c)j.push([c[g],d[g],e[g]]);j.sort(function(a,b){return a[0]!==b[0]?a[0]-b[0]:a[1]!==b[1]?a[1]-b[1]:a[2]-b[2]});return!qa(f,j,function(a,b){return qa(a,b)})?n:k}w("jsnx.algorithms.isomorphism.could_be_isomorphic",yb);w("jsnx.could_be_isomorphic",yb);
function zb(a,b){if(a.v()!=b.v())return n;var c=a.l(),d=sb(a),e=[],f;for(f in c)e.push([c[f],d[f]]);e.sort(function(a,b){return a[0]!==b[0]?a[0]-b[0]:a[1]-b[1]});var c=b.l(),d=sb(b),g=[];for(f in c)g.push([c[f],d[f]]);g.sort(function(a,b){return a[0]!==b[0]?a[0]-b[0]:a[1]-b[1]});return!qa(e,g,function(a,b){return qa(a,b)})?n:k}w("jsnx.algorithms.isomorphism.fast_could_be_isomorphic",zb);w("jsnx.fast_could_be_isomorphic",zb);
function Ab(a,b){if(a.v()!=b.v())return n;var c=I(a.l());c.sort();var d=I(b.l());d.sort();return!qa(c,d)?n:k}w("jsnx.algorithms.isomorphism.faster_could_be_isomorphic",Ab);w("jsnx.faster_could_be_isomorphic",Ab);function Bb(a,b){if("eg"===b)return Cb(a);if(b==l||"hh"===b)return Db(a);h(new Qa("`opt_method` must be 'eg' or 'hh'"))}w("jsnx.is_valid_degree_sequence",Bb);function Db(a){if(0===a.length)return k;if(!Aa(a)||0>Math.min.apply(l,a)||0!==V.n.apply(l,a)%2)return n;for(a=oa(a);0<a.length;){z.sort.call(a,sa);if(0>a[0])break;var b=a.pop();if(0===b)return k;if(b>a.length)break;for(var c=a.length-1,b=a.length-(b+1);c>b;c--)a[c]-=1}return n}w("jsnx.is_valid_degree_sequence_havel_hakimi",Db);
function Cb(a){if(0===a.length)return k;if(!Aa(a)||0>Math.min.apply(l,a)||0!==V.n.apply(l,a)%2)return n;var b=a.length,c=oa(a).sort(function(a,b){return b-a}),d=[],e;e=1;for(a=c.length;e<a;e++)c[e]<c[e-1]&&d.push(e);var f,g;e=0;for(a=d.length;e<a;e++)if(f=V.n.apply(l,c.slice(0,d[e])),g=d[e]*(d[e]-1)+V.n.apply(l,va(F(bb(d[e],b),function(a){return Math.min(d[e],c[a])}))),f>g)return n;return k}w("jsnx.is_valid_degree_sequence_erdos_gallai",Cb);function Eb(a){var b={},c={},d=new N,e=[],f=[],g=0,j=n;E(a.K(),function(m){var y,x,t,D;if(!d.contains(m))for(D=[m];0<D.length;){m=D[D.length-1];m in b||(g+=1,b[m]=g);j=k;y=a.C(m);for(t=0;t<y.length;t++)if(x=y[t],!(x in b)){D.push(x);j=n;break}if(j){c[m]=b[m];for(t=0;t<y.length;t++)x=y[t],d.contains(x)||(c[m]=b[x]>b[m]?Math.min(c[m],c[x]):Math.min(c[m],b[x]));D.pop();if(c[m]===b[m]){d.add(m);for(y=[m];0<e.length&&b[e[e.length-1]]>b[m];)x=e.pop(),d.add(x),y.push(x);f.push(y)}else e.push(m)}}});f.sort(function(a,
b){return b.length-a.length});return f}w("jsnx.strongly_connected_components",Eb);w("jsnx.simple_cycles",function(a){function b(a){function g(a){var b;for(e.remove(a);0<d[a].length;)b=d[a].pop(),e.contains(b)&&g(b)}var j=n,m,D,t=c.ba(a);y.push(a);e.add(a);for(m=0;m<t.length;m++)D=t[m],D===f?(j=y.slice(0),j.push(f),x.push(j),j=k):e.contains(D)||b(D)&&(j=k);if(j)g(a);else for(m=0;m<t.length;m++)D=t[m],0<=ja(d[D],a)||d[D].push(a);a!==y.pop()&&console.log("DANGER WILL ROBINSON!");return j}a.d()||h(new O("simple_cycles() is not defined for undirected graphs."));var c,d={},e=new N,f,
g,j,m=a.z(),y=[],x=[],t,D,ma,Z={};for(j=0;j<m.length;j++)d[m[j]]=[],Z[m[j]]=j;for(g=0;g<m.length-1;)if(f=m[g],j=a.r(m.slice(g)),t=Eb(j),0===t.length)g=m.length;else{c=ma=D=aa;for(j=0;j<t.length;j++)for(g=0;g<t[j].length;g++)D===aa?(D=t[j][g],c=t[j],ma=Z[D]):Z[t[j][g]]<ma&&(D=t[j][g],c=t[j],ma=Z[D]);c=a.r(c);f=D;g=Z[D];t=c.z();for(j=0;j<t.length;j++)e.remove(t[j]),d[t[j]]=[];b(f);g++}return x});function Fb(a,b){var c=Gb(a,b);c.name("complete_graph("+a+")");1<a&&c.a(c.d()?db(bb(a)):cb(bb(a)));return c}w("jsnx.complete_graph",Fb);w("jsnx.cycle_graph",function(a,b){var c=Hb(a,b);c.name("cycle_graph("+a+")");1<a&&c.h(a-1,0);return c});function Gb(a,b){a instanceof W&&(b=a,a=l);a!=l||(a=0);var c;b!=l?(c=b,c.clear()):c=new W;c.i(bb(a));c.name("empty_graph("+a+")");return c}w("jsnx.empty_graph",Gb);w("jsnx.null_graph",function(a){a=Gb(0,a);a.name("null_graph()");return a});
function Hb(a,b){var c=Gb(a,b);c.name("path_graph("+a+")");c.a(F(bb(a-1),function(a){return[a,a+1]}));return c}w("jsnx.path_graph",Hb);w("jsnx.trivial_graph",function(a){a=Gb(1,a);a.name("null_graph()");return a});w("jsnx.fast_gnp_random_graph",function(a,b,c){c!=l||(c=n);var d=Gb(a);d.name("fast_gnp_random_graph("+a+","+b+")");if(0>=b||1<=b)return Ib(a,b,c);var e=1,f=-1;b=Math.log(1-b);if(c)for(d=X(d);e<a;){c=Math.log(1-Math.random());f=f+1+Math.floor(c/b);for(e===f&&(f+=1);f>=a&&e<a;)f-=a,e+=1,e==f&&(f+=1);e<a&&d.h(e,f)}else for(;e<a;){c=Math.log(1-Math.random());for(f=f+1+Math.floor(c/b);f>=e&&e<a;)f-=e,e+=1;e<a&&d.h(e,f)}return d});
function Ib(a,b,c){var d;d=c?X():W();d.i(bb(a));d.name("gnp_random_graph("+a+","+b+")");if(0>=b)return d;if(1<=b)return Fb(a,d);a=d.d()?db(bb(a)):cb(bb(a));E(a,function(a){Math.random()<b&&d.h(a[0],a[1])});return d}w("jsnx.gnp_random_graph",Ib);w("jsnx.binomial_graph",Ib);w("jsnx.erdos_renyi_graph",Ib);w("jsnx.havel_hakimi_graph",function(a,b){Bb(a)||h(new O("Invalid degree sequence"));b!=l&&(b.d()&&h(new O("Directed Graph not supported")),b.f()&&h(new O("Havel-Hakimi requires simple graph")));var c=a.length,d=Gb(c,b);if(0===c||0===Math.max.apply(l,a))return d;for(c=va(F(d,function(b){return[a[b],b]}));0<c.length;){c.sort(function(a,b){return a[0]!==b[0]?a[0]-b[0]:+a[1]-+b[1]});if(0>c[0][0])return n;var e=c.pop();if(0===e[0])break;if(e[0]>c.length)return n;for(var f=c.length,g=f-e[0];g<f;g++)d.h(e[1],
c[g][1]),c[g][0]-=1}d.name("havel_hakimi_graph "+d.v()+" nodes "+d.size()+" edges");return d});function Jb(a,b,c){var d=b;"function"==q(b)&&(d={},E(a.K(),function(a){d[a]=b(a)}));var e;if(!r(c)||c){var f=d,g=new a.constructor;g.name("("+a.name()+")");a.f()?g.a(F(a.j(k,k),function(a){return[L(f,a[0],a[0]),L(f,a[1],a[1]),a[2],Ea(a[3])]})):g.a(F(a.j(k),function(a){return[L(f,a[0],a[0]),L(f,a[1],a[1]),Ea(a[2])]}));g.i(F(a,function(a){return L(f,a,a)}));c={};for(e in a.node)c[L(f,e,e)]=Ea(a.node[e]);M(g.node,c);M(g.graph,Ea(a.graph));e=g}else{var j=d;e=new N(J(j));if(0<La(e,j).c()){e=X(eb(j));e.A(e.O());
try{g=rb.Ja.Xa(e)}catch(m){m instanceof Ta&&h(new Ta("The node label sets are overlapping and no ordering can resolve the mapping. Use copy=True."))}g.reverse()}else g=e;var y=a.f(),x=a.d(),t;E(g,function(b){var c;b in j&&(c=j[b],a.q(b)||h(new O("Node "+b+" is not in the graph.")),a.F(c,a.node[b]),y?(t=A(a.p(b,k,k),function(a){return[c,a[1],a[2],a[3]]}),x&&(t=na(t,A(a.H(b,k,k),function(a){return[a[0],c,a[2],a[3]]})))):(t=A(a.p(b,k),function(a){return[c,a[1],a[2]]}),x&&(t=na(t,A(a.H(b,k),function(a){return[a[0],
c,a[2]]})))),a.N(b),a.a(t))});e=a}return e}w("jsnx.relabel_nodes",Jb);
w("jsnx.convert_node_labels_to_integers",function(a,b,c,d){3===arguments.length&&v(c)?(d=c,c=l):2===arguments.length&&(v(b)?(d=b,b=l):u(b)&&(c=b,b=l));b!=l||(b=0);c!=l||(c="default");d!=l||(d=k);var e={},f,g,j,m;if("default"===c){f=a.z();g=0;j=b;for(m=f.length;g<m;g++,j++)e[f[g]]=j}else if("sorted"===c){f=a.z();f.sort();g=0;j=b;for(m=f.length;g<m;g++,j++)e[f[g]]=j}else if("increasing degree"===c){f=va(a.m());f.sort(function(a,b){return a[1]-b[1]});g=0;j=b;for(m=f.length;g<m;g++,j++)e[f[g][0]]=j}else if("decreasing degree"===
c){f=va(a.m());f.sort(function(a,b){return b[1]-a[1]});g=0;j=b;for(m=f.length;g<m;g++,j++)e[f[g][0]]=j}else h(new O("Unkown node ordering: "+c));g=Jb(a,e);g.name("("+a.name()+")_with_int_labels");d||(g.node_labels=e);return g});}());

(function() {
  var MonotonicCubicSpline;

  MonotonicCubicSpline = (function() {

    function MonotonicCubicSpline(x, y) {
      var alpha, beta, delta, dist, i, m, n, tau, to_fix, _i, _j, _k, _l, _len, _len1, _m, _n, _ref, _ref1, _ref2, _ref3;
      n = x.length;
      delta = [];
      m = [];
      alpha = [];
      beta = [];
      dist = [];
      tau = [];
      for (i = _i = 0, _ref = n - 1; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
        delta[i] = (y[i + 1] - y[i]) / (x[i + 1] - x[i]);
        if (i > 0) {
          m[i] = (delta[i - 1] + delta[i]) / 2;
        }
      }
      m[0] = delta[0];
      m[n - 1] = delta[n - 2];
      to_fix = [];
      for (i = _j = 0, _ref1 = n - 1; 0 <= _ref1 ? _j < _ref1 : _j > _ref1; i = 0 <= _ref1 ? ++_j : --_j) {
        if (delta[i] === 0) {
          to_fix.push(i);
        }
      }
      for (_k = 0, _len = to_fix.length; _k < _len; _k++) {
        i = to_fix[_k];
        m[i] = m[i + 1] = 0;
      }
      for (i = _l = 0, _ref2 = n - 1; 0 <= _ref2 ? _l < _ref2 : _l > _ref2; i = 0 <= _ref2 ? ++_l : --_l) {
        alpha[i] = m[i] / delta[i];
        beta[i] = m[i + 1] / delta[i];
        dist[i] = Math.pow(alpha[i], 2) + Math.pow(beta[i], 2);
        tau[i] = 3 / Math.sqrt(dist[i]);
      }
      to_fix = [];
      for (i = _m = 0, _ref3 = n - 1; 0 <= _ref3 ? _m < _ref3 : _m > _ref3; i = 0 <= _ref3 ? ++_m : --_m) {
        if (dist[i] > 9) {
          to_fix.push(i);
        }
      }
      for (_n = 0, _len1 = to_fix.length; _n < _len1; _n++) {
        i = to_fix[_n];
        m[i] = tau[i] * alpha[i] * delta[i];
        m[i + 1] = tau[i] * beta[i] * delta[i];
      }
      this.x = x.slice(0, n);
      this.y = y.slice(0, n);
      this.m = m;
    }

    MonotonicCubicSpline.prototype.interpolate = function(x) {
      var h, h00, h01, h10, h11, i, t, t2, t3, y, _i, _ref;
      for (i = _i = _ref = this.x.length - 2; _ref <= 0 ? _i <= 0 : _i >= 0; i = _ref <= 0 ? ++_i : --_i) {
        if (this.x[i] <= x) {
          break;
        }
      }
      h = this.x[i + 1] - this.x[i];
      t = (x - this.x[i]) / h;
      t2 = Math.pow(t, 2);
      t3 = Math.pow(t, 3);
      h00 = 2 * t3 - 3 * t2 + 1;
      h10 = t3 - 2 * t2 + t;
      h01 = -2 * t3 + 3 * t2;
      h11 = t3 - t2;
      y = h00 * this.y[i] + h10 * h * this.m[i] + h01 * this.y[i + 1] + h11 * h * this.m[i + 1];
      return y;
    };

    return MonotonicCubicSpline;

  })();

  window.MonotonicCubicSpline = MonotonicCubicSpline;

}).call(this);

/* music waveform
 * part of the edible timeline editor
 * - requires jsnetworkx
 */
 
;(function ($, window, document, undefined) {
    "use strict";
    $.widget("edible.musicWaveform", $.edible.waveform, {
        
        MAX_VOL: 1.5,
        
        _create: function () {
            var cbi;
            var cb;
            var i;

            this.options._graph = this._createGraph();
            var allBeats = this.options._graph.nodes().slice(0)
                    .sort(function (a, b){
                        return parseFloat(a) - parseFloat(b);
                    });
            this.options._beatOrder = allBeats.slice(0);

            if (this.options.currentBeats === undefined) {
                this.options.currentBeats = allBeats;
                console.log(this.options.currentBeats);

                if (this.options.start !== 0.0 ||
                    this.options.dur !== this.options.len) {
                    cb = this.options.currentBeats.slice(0);
                    this.options.currentBeats = [];
                    for (i = 0; i < cb.length; i++) {
                        cbi = parseFloat(cb[i]) * 1000.0;
                        if (cbi >= this.options.start &&
                            cbi < this.options.start + this.options.len) {
                            this.options.currentBeats.push(cb[i]);
                        }
                    }
                    this.options.start =
                        parseFloat(this.options.currentBeats[0]) * 1000.0;
                }
            } else {
                this.options.start =
                    parseFloat(this.options.currentBeats[0]) * 1000.0;
            }
            
            // the super...
            this._super("_create");
            
            // change the resizing
            var that = this;
            this.element.resizable({
                stop: function (event, ui) {
                    var oldLen = that.options.len;
                    var oldStart = that.options.start;
                    var newOpts = that._computePosFromResize(event, ui);
                    
                    console.log("setting new len", newOpts.len,
                        "and start", newOpts.start);
                    
                    that._updateCurrentBeatsFromResize(oldLen, oldStart,
                        newOpts.len, newOpts.start);
                    that._setOptions(newOpts);    
                    that._refresh();
                } 
            })
        },
        
        _updateCurrentBeatsFromResize: function (ol, os, nl, ns) {
            var ds, dl, newBeat, t;
            var firstBeat = this.options.currentBeats[0];
            var currentBeats = this.options.currentBeats;
            var idx;
            if (ns > os) {
                ds = ns - os;
                newBeat = this._msToBeat(ds);
                console.log("old BEATS", currentBeats);
                this.options.currentBeats = currentBeats.slice(newBeat);
                console.log("new BEATS", currentBeats);
                return;
            }
            if (ns < os) {
                // unclear how exactly this should behave
                ds = os - ns;
                t = parseFloat(firstBeat) * 1000.0 - ds
                if (t >= 0) {
                    idx = this.options._beatOrder.indexOf(firstBeat);
                    console.log("old BEATS", currentBeats);
                    while (parseFloat(currentBeats[0]) * 1000.0 >
                        t && idx > 0) {
                        currentBeats.unshift(this.options._beatOrder[--idx]);
                    }
                    console.log("new BEATS", currentBeats);
                    return;
                } else {
                    throw "RESIZED TOO FAR! CLEAN UP THE MUSIC RESIZE CODE, STEVE";
                }
            }
            if (nl > ol) {
                idx = this.options._beatOrder.indexOf(currentBeats[currentBeats.length - 1]);
                console.log("old BEATS (nl > ol)", currentBeats);
                while (parseFloat(currentBeats[currentBeats.length - 1]) *
                    1000.0 < ns + nl &&
                    idx < this.options._beatOrder.length - 1) {
                    
                    currentBeats.push(this.options._beatOrder[++idx]);
                }
                console.log("new BEATS", currentBeats);
                return;
            }
            if (nl < ol) {
                console.log("old BEATS (nl < ol)", currentBeats);
                newBeat = this._msToBeat(nl);
                this.options.currentBeats = currentBeats.slice(0, newBeat);
                console.log("new BEATS", currentBeats);
                return;
            }
        },
        
        waveformClass: function () { return "musicWaveform" },
        
        _updateBeatSet: function () {
            var i;
            var beatSet = {};
            var count = 0;
            var currentBeats = this.options.currentBeats;
            for (i = 0; i < currentBeats.length; i++) {
                beatSet[currentBeats[i]] = true;
            }
            this.options._beatSet = beatSet;
        },
        
        _refresh: function () {
            this._super("_refresh");
            this._updateBeatSet();
            this.findLoops();
        },
        
        addLoop: function (direction) {
            var cyc;
            var origLen = this.options.len;
            var origStart = this.options.start;
            var currentBeats = this.options.currentBeats;
            var i;
            var cycleStart;
            var args;
            var cycleLen = 0.0;
            var graph = this.options._graph;
            
            if (this.options._simpleCycles === undefined) {
                return;
            } else {
                cyc = this.options._simpleCycles[0];
                for (i = 0; i < currentBeats.length; i++) {
                    if (currentBeats[i] === cyc[0]) {
                        cycleStart = i;
                        break;
                    }
                }
                args = [cycleStart, 1].concat(cyc);
                Array.prototype.splice.apply(this.options.currentBeats, args);
                
                $.each(cyc.slice(0,-1), function (idx, beat) {
                    cycleLen += graph.succ[beat][cyc[idx + 1]].duration * 1000.0;
                });
                
                console.log("OLD LEN", origLen, "CYC LEN", cycleLen, "NEW LEN", origLen + cycleLen);
                
                this._setOptions({
                    len: origLen + cycleLen
                });
                
                if (direction === "left") {
                    // change waveform pos in timeline
                    var newStart = origStart - (this.options.len - origLen)
                }

                if (this.options.hasOwnProperty("loopCallback")) {
                    this.options.loopCallback();
                }

                return;
            }
        },
        
        _linearCycles: function () {
            var currentBeats = this.options.currentBeats;
            var subgraph = this.options._graph.subgraph(currentBeats);
            var beatOrder = this.options._beatOrder;
            var beatSet = this.options._beatSet;
            var i, j;
            var startBeat, endBeat;
            var cycles = [];
            var cyc;
            
            for (i = 0; i < beatOrder.length; i++) {
                startBeat = beatOrder[i];
                if (startBeat in beatSet) {
                    for (j = i + 1; j < beatOrder.length; j++) {
                        endBeat = beatOrder[j];
                        if (endBeat in beatSet) {
                            if (startBeat in subgraph.succ[endBeat]) {
                                // there's a jump backwards from
                                // endBeat to startBeat
                                cyc = beatOrder.slice(i, j + 1);
                                cyc.push(startBeat);
                                cycles.push(cyc);
                            }
                        }
                    }
                }
            }
            
            cycles.sort(function (a, b) {
                return a.length - b.length;
            });
            
            return cycles;
        },
        
        findLoops: function () {
            if (!this.options.hasOwnProperty("musicGraph")) {
                return [];
            }
            
            this.element.find('.loopControlLeft').remove();
            this.element.find('.loopControlRight').remove();
            
            if (Object.keys(this.options._beatSet).length > 140) {
                return;
            }
                        
            var nodes = [];
            var graph = this.options._graph;
            var loopL, loopR;
            var that = this;
            
            var cycles = this._linearCycles();
            
            console.log("cycles", cycles);
            if (cycles.length > 0) {
                that.options._simpleCycles = cycles;

                loopR = document.createElement('div');
                $(loopR).html('<i class="icon-repeat icon-white"></i>')
                    .addClass("loopControlRight")
                    .click(function () {
                        that.addLoop("right");
                        event.preventDefault();
                        return false;
                    });
                that.element.append(loopR);
            } else {
                that.options._simpleCycles = undefined;
                that.element.find('.loopControlLeft').remove();
                that.element.find('.loopControlRight').remove();
            }

        },
        
        exportExtras: function () {
            this.options._dirty = false;
            var mainctx = this.options._mcanv.getContext('2d');
            var vx = this.options.volume.x.slice(0);
            var vy = this.options.volume.y.slice(0);
            var pxPerMs = this.options.pxPerMs;
            
            vx.splice(0, 0, 0);
            vx.push((mainctx.canvas.width - 1) / pxPerMs);
            
            vy.splice(0, 0, vy[0]);
            vy.push(vy[vy.length - 1]);

            return {
                starts: this.options._exportStarts,
                durations: this.options._exportDurations,
                distances: this.options._exportDistances,
                volume: {
                    x: vx,
                    y: vy
                }
            };
        },
        
        // slice on the beat
        slice: function (event) {
            // create a copy of this waveform
            var offset = this.element.offset(); 
            var relX = event.pageX - offset.left;
            var newWaveform = document.createElement('div');
            var msOfClick = relX / this.options.pxPerMs;
            
            var beatIndex = this._msToBeat(msOfClick);
            var sliceTime = this.options._beatToTime[beatIndex];
            
            console.log("beat index", beatIndex, "slice time", sliceTime);

            var newOptions = $.extend(true, {},
                this.options, {
                    start: sliceTime,
                    len: this.options.len - sliceTime,
            });
            var newBeats = this.options.currentBeats.slice(beatIndex);
            newOptions.currentBeats = newBeats;
            console.log("new beats", newBeats);
            
            // initialize the new waveform
            var $nwf = $(newWaveform)[this.waveformClass()](newOptions);

            this._setOptions({
                currentBeats: this.options.currentBeats.slice(0, beatIndex),
                len: sliceTime,
                _nextBeatHidden: this.options.currentBeats[beatIndex]
            });
            return {
                waveform: newWaveform,
                pos: sliceTime
            };
        },
        
        // helper to get beat at slice
        _msToBeat: function (ms) {
            if (!this.options.hasOwnProperty("_timeToBeat")) {
                throw "No _timeToBeat in options";
            }
            var ttb = this.options._timeToBeat;
            var closest = null;
            var closestBeat = null;
            $.each(ttb, function (t, beat) {
                if (closest == null || Math.abs(t - ms) < Math.abs(closest - ms)) {
                    closest = t;
                    closestBeat = beat;
                }
            });
            return closestBeat;
        },
        
        // draw waveform according to the current beats
        _drawWaveform: function () {
            // check for the beat graph
            if (!this.options.hasOwnProperty("_graph")) {
                this._super("_drawWaveform");
                return;
            }
            
            var that = this;
            var i, start, end, delta, tmpSamples, tsi, closest, deltaSec, dist;
            var hasData = (this.options.data.length > 0);
            
            // get sample info
            var nsamples = this.options.data.length;
            var sampPerMs = nsamples / this.options.dur;
            var startSample = this.options.start * sampPerMs;
            var endSample = startSample + this.options.len * sampPerMs;
            var currentSamples = [];
            var graph = this.options._graph;
            var currentBeats = this.options.currentBeats;
            console.log("CURRENT BEATS LEN", currentBeats.length, currentBeats);

            // get the duration of the beats
            var currentDuration = 0.0;
            
            this.options._timeToBeat = {};
            this.options._beatToTime = [];
            this.options._exportStarts = [];
            this.options._exportDurations = [];
            this.options._exportDistances = [];

            // if the first beat is the starting beat, render the beginning
            if (currentBeats[0] === this.options._beatOrder[0]) {
                that.options._timeToBeat[currentDuration] = 0;
                that.options._exportStarts.push(0);
                that.options._exportDurations.push(parseFloat(currentBeats[0]));
                that.options._exportDistances.push(0);
                
                console.log("Using the intro", currentBeats[0]);
                end = parseFloat(currentBeats[0]) * 1000.0;
                currentDuration += end;
                // currentDuration += parseInt(end);
                
                if (hasData) {
                    endSample = parseInt(end * sampPerMs);
                    tmpSamples = that.options.data.slice(0, endSample);
                    currentSamples.push.apply(currentSamples, tmpSamples);
                }
            }
        
            $.each(currentBeats, function (j, beat) {
                if (j === currentBeats.length - 1 &&
                    beat === that.options._beatOrder[that.options._beatOrder.length - 1]) {
                        
                    // if the final beat is the ultimate beat, render the ending
                    
                    start = parseFloat(beat) * 1000.0;
                    end = parseFloat(that.options.dur);
                    delta = end - start;
                    deltaSec = parseFloat(that.options.dur) /
                        1000.0 - parseFloat(beat);
                    dist = 0;
                } else if (j === currentBeats.length - 1) {
                    
                    // if the final beat is not the ultimate beat
                    console.log("hanging final beat", "len", that.options.len);
                    start = parseFloat(beat) * 1000.0;
                    delta = that.options.len - currentDuration;
                    if (delta < 0) {
                        delta = 0;
                    }
                    deltaSec = delta / 1000.0;
                    end = start + delta;
                    
                    console.log("current duration", currentDuration);
                    console.log("start", start, "end", end);

                    dist = 0;
                } else {
                    
                    // normal beats
                    // (where the next beat is also in the currentBeats)
                    
                    start = parseFloat(beat) * 1000.0;

                    if (graph.succ[beat].hasOwnProperty(currentBeats[j + 1])) {
                        // transition to next beat is in the graph
                        deltaSec = graph.succ[beat][currentBeats[j + 1]].duration;
                        dist = graph.succ[beat][currentBeats[j + 1]].distance;
                    } else {
                        // transition to next beat isn't in our graph!
                        // this can happen when we manually specify a beat order
                        var firstKey = Object.keys(graph.succ[beat])[0];
                        deltaSec = graph.succ[beat][firstKey].duration;
                        dist = 1; // just has to not be zero...
                    }

                    delta = deltaSec * 1000.0;
                    end = start + delta;
                }
                
                
                that.options._timeToBeat[currentDuration] = j;
                that.options._beatToTime[j] = currentDuration;
                
                that.options._exportStarts.push(parseFloat(beat));
                that.options._exportDurations.push(deltaSec);
                that.options._exportDistances.push(dist);
                    
                currentDuration += delta;
                // currentDuration += parseInt(delta);
                    
                // get the waveform samples for the beat
                if (hasData) {
                    startSample = parseInt(start * sampPerMs);
                    endSample = parseInt(end * sampPerMs);
                    tmpSamples = that.options.data.slice(startSample, endSample);
                    currentSamples.push.apply(currentSamples, tmpSamples);
                }

            });
            
            // set the length of the waveform
            this.options.len = currentDuration;
            
            // draw the waveform
            // var canv = this.element.find('.displayCanvas')[0];
            var canv = this.options._mcanv;
            
            // lame width update
            $(canv).attr("width", this.width());
            this.element.find('.topBar').css("width", this.width());
            
            var gradient = "#4BF2A7";
            if (canv !== undefined) {
                gradient = canv.getContext('2d')
                    .createLinearGradient(0, 0, 0, parseInt(this.options.canvHeight, 10));
                // gradient.addColorStop(0.0, "#4BF2A7" );
                // gradient.addColorStop(1.0, "#32CD32" );

                gradient.addColorStop(0.0, "#333");
                gradient.addColorStop(1.0, "#777");
            }
            
            if (!hasData) {
                currentSamples = [];
            }
            
            var wf = new Waveform({
                canvas: canv,
                data: currentSamples,
                innerColor: gradient,
                outerColor: "#eee",
                // outerColor: "#333",
                height: this.options.canvHeight,
                interpolate: true,
                width: this.width()
            });
            
            // set up cached canvas
            if (this.options._tmpCanv !== undefined) {
                this.options._tmpCanv.destroy();
            }
            var tmpCanv = document.createElement('canvas');
            $(tmpCanv).appendTo("body");
            this.options._tmpCanv = new EDIBLE.modules.MultiCanvas(tmpCanv);
            this.options._tmpCanv.clone(canv);
            this.options._tmpCanv.canvases.forEach(function (canv) {
                $(canv).css("display", "none");
            });
            
            setTimeout(function () {
                that._drawVolume(true);
            }, 0);
        },
        
        addVolumeMarker: function (event) {
            var offset = this.element.offset(); 
            var relX = event.pageX - offset.left;
            var relY = event.pageY - offset.top - this.options.topBarHeight;
            var msOfClick = relX / this.options.pxPerMs;
            
            // var beatIndex = this._msToBeat(msOfClick);
            // var sliceTime = this.options._beatToTime[beatIndex];
            
            var mainctx = this.options._mcanv.getContext('2d');
            var self = this;
            var vy = function (y) {
                return self.MAX_VOL -
                    (self.MAX_VOL * y) / mainctx.canvas.height;
            };
            
            var i;
            var vx = this.options.volume.x;
            for (i = 0; i < vx.length; i++) {
                if (vx[i] > msOfClick) {
                    vx.splice(i, 0, msOfClick);
                    this.options.volume.y.splice(i, 0, vy(relY));
                    break;
                }
            }
            if (i === vx.length) {
                vx.push(msOfClick);
                this.options.volume.y.push(vy(relY));
            }
            this._drawVolume(true);
        },
        
        _drawVolume: function (handles) {
            var self = this;
            this.options._mcanv.clone(this.options._tmpCanv);
            var mainctx = this.options._mcanv.getContext('2d');

            // mainctx.save();
            mainctx.strokeStyle = "#CFB52B";
            mainctx.lineWidth = 3;
            mainctx.beginPath();

            var vx = this.options.volume.x.slice(0);
            var vy = this.options.volume.y.slice(0);
            var pxPerMs = this.options.pxPerMs;
            
            var i;
            var msLen = (mainctx.canvas.width - 1) / pxPerMs;
            var prune = false;
            for (i = 0; i < vx.length; i++) {
                if (vx[i] >= msLen) {
                    prune = true;
                    break;
                }
            }
            if (prune) {
                this.options.volume.x = vx.slice(0, i);
                this.options.volume.y = vy.slice(0, i);
            }
            
            vx.splice(0, 0, 0);
            vx.push((mainctx.canvas.width - 1) / pxPerMs);
            
            vy.splice(0, 0, vy[0]);
            vy.push(vy[vy.length - 1]);
            
            var y = function (vy) {
                return mainctx.canvas.height -
                    (mainctx.canvas.height * vy / self.MAX_VOL)
            };
            
            var x = function (vx) {
                return vx * pxPerMs;
            };
            
            var newx = vx.map(x);
            var newy = vy.map(y);
            
            mainctx.moveTo(x(vx[0]), y(vy[0]));
            
            var cdf = new MonotonicCubicSpline(newx, newy);
            
            var jump = 3;
            var i;
            for (i = 0; i < mainctx.canvas.width; i += jump) {
                mainctx.lineTo(i, cdf.interpolate(i));
            }
            mainctx.stroke();
            
            if (handles !== undefined && handles) {
                // destroy old handles
                $(this.element).find('.volumeHandle').remove();
                
                var updateVolume = function (event, ui) {
                    // update the volume position
                    var left = ui.position.left + 4;
                    var top = ui.position.top + 4
                         - self.options.topBarHeight;
                    var msPos = left / self.options.pxPerMs;
                    var mainctx = self.options._mcanv.getContext('2d');
                    var vy = function (y) {
                        return self.MAX_VOL -
                            (self.MAX_VOL * y) / mainctx.canvas.height;
                    };
                    
                    var i = ui.helper.data("i");
                    
                    var validPos = true;
                    if (i > 0 && self.options.volume.x[i - 1] >= msPos) {
                        validPos = false;
                    }
                    if (i < self.options.volume.x.length - 1 &&
                        self.options.volume.x[i + 1] <= msPos) {
                        validPos = false;
                    }
                    if (validPos) {
                        self.options.volume.x[i] = msPos;
                        self.options.volume.y[i] = vy(top);
                    }
                };
                
                // create handles
                var h;
                vx = this.options.volume.x;
                vy = this.options.volume.y;
                for (i = 0; i < vx.length; i++) {
                    h = document.createElement('div');
                    $(h).addClass("volumeHandle")
                        .data("vx", vx[i])
                        .data("vy", vy[i])
                        .data("i", i)
                        .css({
                            left: x(vx[i]) - 4,
                            top: y(vy[i]) + this.options.topBarHeight - 4
                        })
                        .appendTo(this.element)
                        .draggable({
                            containment: $(this.element),
                            drag: function (event, ui) {
                                updateVolume(event, ui);
                                self._drawVolume(false);
                            },
                            stop: function (event, ui) {
                                updateVolume(event, ui);
                                self._drawVolume(true);
                            }
                        });
                }
            }
        },

        _createGraph: function() {
            if (!this.options.hasOwnProperty("musicGraph")) {
                return undefined;
            }
            var graph = this.options.musicGraph;
            var G = new jsnx.DiGraph();
            G.add_nodes_from(graph.nodes);
            console.log("nodes", G);
            G.add_edges_from(graph.edges);
            console.log("with edges", G);
            return G;
        },
        
        _setOption: function (key, value) {
            this.options._dirty = true;
            // console.log("in _setOption with key:", key, "value:", value);
            switch (key) {
            case "musicGraph":
                this.options["musicGraph"] = value;
                this.options["_graph"] = this._createGraph();
                break;
            default:
                this.options[key] = value;
                break;
            }
            
            this._super("_setOption", key, value);
        }
        
    });
}(jQuery, window, document));
/*jslint browser: true nomen: true devel: true vars: true */
/*global jQuery, _ */

/*!
 * timeline
 * part of edible in-browser media timeline
 * this is a container widget that contains several waveforms
 * Author: Steve Rubin
 */


;(function ($, window, document, undefined) {
    "use strict";
    $.widget("edible.timeline", {
        options: {
            width: "1200px",
            tracks: 4,
            wf: [],
            _dirtyWaveforms: [],
            pxPerMs: .05,
            sound: undefined,
            position: 0.0,
            clickMode: "volume",
            linkGroups: [],
            _dirty: true
        },
        
        _create: function () {
            var that = this;
            console.log("in timeline _create");
            
            var trackTemplate = $("#trackTemplate").html();
            var i;
            this.element.addClass("edible-timeline");
            for (i = 0; i < this.options.tracks; i++) {
                this.element.append(_.template(trackTemplate));
            }
            this.element.css("height", this.options.tracks * 95 + "px");
            this.element.find(".track").each(function (index) {
                $(this).css("top", 95 * index + "px");
            }).droppable({
                    accept: ".edible-waveform",
                    drop: function (event, ui) {
                        var $kid = ui.draggable;
                        var $dad = $(this);
                        if ($kid.parent() !== $dad) {
                            $kid.appendTo($dad);
                            $kid.css('top', 0);
                        }
                        // update pos for the dropped waveform
                        $.each(that.options.wf, function (i, wf) {
                            if (wf.elt === $kid[0]) {
                                var oldpos = wf.pos;
                                wf.pos = that.pxToMs($kid.position().left);
                                var deltapos = wf.pos - oldpos;
                                var deltapx = that.msToPx(deltapos);
                                $.each(that.element.find('.track'), function (i, track) {
                                    if ($dad[0] === track) {
                                        wf.track = i;
                                        return false;
                                    }
                                });
                                // TOO MUCH NESTING. NO TIME TO CLEAN :-(
                                // update link group wfs too (in any)
                                $.each(that.options.linkGroups, function (j, lg) {
                                    if (lg.indexOf(wf.elt) !== -1) {
                                        $.each(that.options.wf, function(k, wf2) {
                                            if (wf2.elt !== wf.elt &&
                                                lg.indexOf(wf2.elt) !== -1) {
                                                wf2.pos += deltapos;
                                                $(wf2.elt)
                                                .css("left", "+=" + deltapx + "px");
                                            }
                                        });
                                        return false;
                                    } 
                                })

                                return;
                            }
                        });
                    },
                    hoverClass: "track-drop-hover"
            }).bind("click.edibletimeline", function (event) {
                var offset = that.element.offset();
                var relX = event.pageX - offset.left;
                var scrollLeft = that.element.scrollLeft();
                var msOfClick = (relX + scrollLeft) / that.options.pxPerMs;
                that._setOptions({
                    position: msOfClick
                });
                if (that.options.sound !== undefined) {
                    that.options.sound.setPosition(msOfClick);
                } 
            });
            
            this.element.css("height",
                this.element[0].scrollHeight + 20 + "px");
            
            var playhead = document.createElement('div');
            $(playhead).addClass("playhead")
                .css("height", this.options.tracks * 95 + "px")
                .appendTo(this.element);
            
            this.options._dirtyWaveforms = this.options.wf.slice(0);
            this._refresh();
        },
        
        _refresh: function () {
            // console.log("timeline _refresh");
            var that = this;
            $.each(this.options._dirtyWaveforms, function (i, wf) {
                that.element.find(".track:eq(" + wf.track + ")")
                    .append(wf.elt);
                $(wf.elt).css("left", that.msToPx(wf.pos));
                
                // pin this waveform if necessary
                if (!$(wf.elt).wf("option", "fixed")) {
                    $(wf.elt).draggable({
                        containment: ".edible-timeline"
                    });
                };
                
                $(wf.elt).wf({
                    pxPerMs: that.options.pxPerMs,
                    changed: function (event, args) {
                        // only invoke this function if we didn't just add the
                        // changed callback
                        if (args[0].changed === undefined) {
                            // console.log("CHANGING POS FROM", wf.pos, 
                            //   "TO", that.pxToMs($(wf.elt).position().left));
                            // TODO: figure out why this was here in 
                            // the first place. Maybe it was 
                            // because of stretching tracks?
                            wf.pos = that.pxToMs($(wf.elt).position().left);
                        }                     
                    },
                    destroy: function () {
                        var i;
                        for (i = 0; i < that.options.wf.length; i++) {
                            if (that.options.wf[i] === wf) {
                                that.options.wf.splice(i, 1);
                                that._refresh();
                                break;
                            }
                        }
                    }
                });
            });
            
            $.each(this.options.wf, function (i, wf) {
                $(wf.elt).unbind('click.edibletimeline');
                
                if (that.options.clickMode === "split") {
                    $(wf.elt).bind('click.edibletimeline', function (event) {
                        var res = $(this).wf("slice", event);
                        console.log("POS OF NEW WF", wf.pos + res.pos);
                        console.log("POS OF OLD WF", wf.pos);
                        that.addWaveform({
                            elt: res.waveform,
                            track: wf.track,
                            pos: wf.pos + res.pos
                        });
                        console.log("POS OF OLD WF", wf.pos);
                    });
                } else if (that.options.clickMode === "volume") {
                    $(wf.elt).bind('click.edibletimeline', function (event) {
                       $(this).wf("addVolumeMarker", event); 
                    });
                }
                
            });
            
            this.options._dirtyWaveforms = [];
            this.element.width(this.options.width);
            
            // draw the time indicator
            var currentPosition;
            currentPosition = this.options.position * this.options.pxPerMs;
            this.element.find('.playhead').css("left", currentPosition + "px");
        },

        _destroy: function () {
            $.each(this.options.wf, function (i, wf) {
                $(wf.elt).unbind('.edibletimeline').wf("destroy");
            })
            this.element.removeClass("edible-timeline").html("");
        },

        addWaveform: function (waveform) {
            this.options.wf.push(waveform);
            this.options._dirtyWaveforms.push(waveform);
            this._refresh();
        },

        msToPx: function (ms) {
            return parseFloat(ms) * this.options.pxPerMs;
        },

        pxToMs: function (px) {
            return parseFloat(px) / this.options.pxPerMs;
        },

        export: function () {
            var that = this;
            this.options._dirty = false;
            var exportOpts = [];
            $.each(this.options.wf, function (i, wf) {
                console.log("SCORE START", wf.pos / 1000.0, "WF POS", wf.pos);
                if (!$(wf.elt).wf("option", "mute")) {
                    var $wf = $(wf.elt);
                    exportOpts.push({
                        globalVolume: $wf.wf("option", "globalVolume"),
                        waveformClass: $wf.wf("waveformClass"),
                        extra: $wf.wf("exportExtras"),
                        filename: $wf.wf("option", "filename"),
                        name: $wf.wf("option", "name"),
                        scoreStart: wf.pos / 1000.0,
                        wfStart: $wf.wf("option", "start") / 1000.0,
                        duration: $wf.wf("option", "len") / 1000.0
                    });
                }
            });
            return exportOpts;
        },

        isDirty: function () {
            if (this.options._dirty) {
                return true;
            }
            var i;
            for (i = 0; i < this.options.wf.length; i++) {
                if ($(wf.elt).wf("isDirty")) {
                    return true;
                }
            }
            return false;
        },

        _setOptions: function () {
            // _super and _superApply handle keeping the right this-context
            this._superApply(arguments);
            this._refresh();
        },

        _setOption: function (key, value) {
            // console.log("in _setOption with key:", key, "value:", value);
            this.options._dirty = true;
            switch (key) {
            case "pxPerMs":
                this.options._dirtyWaveforms = this.options.wf.slice(0);
                this.options[key] = value;   
                break; 
            default:
                this.options[key] = value;
                break;
            }
            
            this._super("_setOption", key, value);
            this._refresh();
        }
        
    });

}(jQuery, window, document));

;(function() {
  var JSONP, Waveform,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  window.Waveform = Waveform = (function() {

    Waveform.name = 'Waveform';

    function Waveform(options) {
      this.redraw = __bind(this.redraw, this);
      this.container = options.container;
      this.canvas = options.canvas;
      this.data = options.data || [];
      this.outerColor = options.outerColor || "transparent";
      this.innerColor = options.innerColor || "#000000";
      this.interpolate = true;
      if (options.interpolate === false) {
        this.interpolate = false;
      }
      if (this.canvas == null) {
        if (this.container) {
          this.canvas = this.createCanvas(this.container, options.width || this.container.clientWidth, options.height || this.container.clientHeight);
        } else {
          throw "Either canvas or container option must be passed";
        }
      }
      this.patchCanvasForIE(this.canvas);
      this.context = this.canvas.getContext("2d");
      this.width = parseInt(this.context.canvas.width, 10);
      this.height = parseInt(this.context.canvas.height, 10);
      if (options.data) {
        this.update(options);
      }
    }

    Waveform.prototype.setData = function(data) {
      return this.data = data;
    };

    Waveform.prototype.setDataInterpolated = function(data) {
      return this.setData(this.interpolateArray(data, this.width));
    };

    Waveform.prototype.setDataCropped = function(data) {
      return this.setData(this.expandArray(data, this.width));
    };

    Waveform.prototype.update = function(options) {
      if (options.interpolate != null) {
        this.interpolate = options.interpolate;
      }
      if (this.interpolate === false) {
        this.setDataCropped(options.data);
      } else {
        this.setDataInterpolated(options.data);
      }
      return this.redraw();
    };

    Waveform.prototype.redraw = function() {
      var d, i, middle, t, _i, _len, _ref, _results;
      this.clear();
      this.context.fillStyle = this.innerColor;
      middle = this.height / 2;
      i = 0;
      _ref = this.data;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        d = _ref[_i];
        t = this.width / this.data.length;
        if (typeof this.innerColor === "function") {
          this.context.fillStyle = this.innerColor(i / this.width, d);
        }
        this.context.clearRect(t * i, middle - middle * d, t, middle * d * 2);
        this.context.fillRect(t * i, middle - middle * d, t, middle * d * 2);
        _results.push(i++);
      }
      return _results;
    };

    Waveform.prototype.clear = function() {
      this.context.fillStyle = this.outerColor;
      this.context.clearRect(0, 0, this.width, this.height);
      return this.context.fillRect(0, 0, this.width, this.height);
    };

    Waveform.prototype.patchCanvasForIE = function(canvas) {
      var oldGetContext;
      if (typeof window.G_vmlCanvasManager !== "undefined") {
        canvas = window.G_vmlCanvasManager.initElement(canvas);
        oldGetContext = canvas.getContext;
        return canvas.getContext = function(a) {
          var ctx;
          ctx = oldGetContext.apply(canvas, arguments);
          canvas.getContext = oldGetContext;
          return ctx;
        };
      }
    };

    Waveform.prototype.createCanvas = function(container, width, height) {
      var canvas;
      canvas = document.createElement("canvas");
      container.appendChild(canvas);
      canvas.width = width;
      canvas.height = height;
      return canvas;
    };

    Waveform.prototype.expandArray = function(data, limit, defaultValue) {
      var i, newData, _i, _ref;
      if (defaultValue == null) {
        defaultValue = 0.0;
      }
      newData = [];
      if (data.length > limit) {
        newData = data.slice(data.length - limit, data.length);
      } else {
        for (i = _i = 0, _ref = limit - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
          newData[i] = data[i] || defaultValue;
        }
      }
      return newData;
    };

    Waveform.prototype.linearInterpolate = function(before, after, atPoint) {
      return before + (after - before) * atPoint;
    };

    Waveform.prototype.interpolateArray = function(data, fitCount) {
      var after, atPoint, before, i, newData, springFactor, tmp;
      newData = new Array();
      springFactor = new Number((data.length - 1) / (fitCount - 1));
      newData[0] = data[0];
      i = 1;
      while (i < fitCount - 1) {
        tmp = i * springFactor;
        before = new Number(Math.floor(tmp)).toFixed();
        after = new Number(Math.ceil(tmp)).toFixed();
        atPoint = tmp - before;
        newData[i] = this.linearInterpolate(data[before], data[after], atPoint);
        i++;
      }
      newData[fitCount - 1] = data[data.length - 1];
      return newData;
    };

    Waveform.prototype.optionsForSyncedStream = function(options) {
      var innerColorWasSet, that;
      if (options == null) {
        options = {};
      }
      innerColorWasSet = false;
      that = this;
      return {
        whileplaying: this.redraw,
        whileloading: function() {
          var stream;
          if (!innerColorWasSet) {
            stream = this;
            that.innerColor = function(x, y) {
              if (x < stream.position / stream.durationEstimate) {
                return options.playedColor || "rgba(255,  102, 0, 0.8)";
              } else if (x < stream.bytesLoaded / stream.bytesTotal) {
                return options.loadedColor || "rgba(0, 0, 0, 0.8)";
              } else {
                return options.defaultColor || "rgba(0, 0, 0, 0.4)";
              }
            };
            innerColorWasSet = true;
          }
          return this.redraw;
        }
      };
    };

    Waveform.prototype.dataFromSoundCloudTrack = function(track) {
      var _this = this;
      return JSONP.get("http://waveformjs.org/w", {
        url: track.waveform_url
      }, function(data) {
        return _this.update({
          data: data
        });
      });
    };

    return Waveform;

  })();

  JSONP = (function() {
    var config, counter, encode, head, jsonp, key, load, query, setDefaults, window;
    load = function(url) {
      var done, head, script;
      script = document.createElement("script");
      done = false;
      script.src = url;
      script.async = true;
      script.onload = script.onreadystatechange = function() {
        if (!done && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
          done = true;
          script.onload = script.onreadystatechange = null;
          if (script && script.parentNode) {
            return script.parentNode.removeChild(script);
          }
        }
      };
      if (!head) {
        head = document.getElementsByTagName("head")[0];
      }
      return head.appendChild(script);
    };
    encode = function(str) {
      return encodeURIComponent(str);
    };
    jsonp = function(url, params, callback, callbackName) {
      var key, query;
      query = ((url || "").indexOf("?") === -1 ? "?" : "&");
      params = params || {};
      for (key in params) {
        if (params.hasOwnProperty(key)) {
          query += encode(key) + "=" + encode(params[key]) + "&";
        }
      }
      jsonp = "json" + (++counter);
      window[jsonp] = function(data) {
        callback(data);
        try {
          delete window[jsonp];
        } catch (_error) {}
        return window[jsonp] = null;
      };
      load(url + query + (callbackName || config["callbackName"] || "callback") + "=" + jsonp);
      return jsonp;
    };
    setDefaults = function(obj) {
      var config;
      return config = obj;
    };
    counter = 0;
    head = void 0;
    query = void 0;
    key = void 0;
    window = this;
    config = {};
    return {
      get: jsonp,
      init: setDefaults
    };
  })();

}).call(this);

//
// LESS - Leaner CSS v1.3.3
// http://lesscss.org
// 
// Copyright (c) 2009-2013, Alexis Sellier
// Licensed under the Apache 2.0 License.
//
;(function(e,t){function n(t){return e.less[t.split("/")[1]]}function f(){r.env==="development"?(r.optimization=0,r.watchTimer=setInterval(function(){r.watchMode&&g(function(e,t,n,r,i){t&&S(t.toCSS(),r,i.lastModified)})},r.poll)):r.optimization=3}function m(){var e=document.getElementsByTagName("style");for(var t=0;t<e.length;t++)e[t].type.match(p)&&(new r.Parser({filename:document.location.href.replace(/#.*$/,""),dumpLineNumbers:r.dumpLineNumbers})).parse(e[t].innerHTML||"",function(n,r){var i=r.toCSS(),s=e[t];s.type="text/css",s.styleSheet?s.styleSheet.cssText=i:s.innerHTML=i})}function g(e,t){for(var n=0;n<r.sheets.length;n++)w(r.sheets[n],e,t,r.sheets.length-(n+1))}function y(e,t){var n=b(e),r=b(t),i,s,o,u,a="";if(n.hostPart!==r.hostPart)return"";s=Math.max(r.directories.length,n.directories.length);for(i=0;i<s;i++)if(r.directories[i]!==n.directories[i])break;u=r.directories.slice(i),o=n.directories.slice(i);for(i=0;i<u.length-1;i++)a+="../";for(i=0;i<o.length-1;i++)a+=o[i]+"/";return a}function b(e,t){var n=/^((?:[a-z-]+:)?\/\/(?:[^\/\?#]*\/)|([\/\\]))?((?:[^\/\\\?#]*[\/\\])*)([^\/\\\?#]*)([#\?].*)?$/,r=e.match(n),i={},s=[],o,u;if(!r)throw new Error("Could not parse sheet href - '"+e+"'");if(!r[1]||r[2]){u=t.match(n);if(!u)throw new Error("Could not parse page url - '"+t+"'");r[1]=u[1],r[2]||(r[3]=u[3]+r[3])}if(r[3]){s=r[3].replace("\\","/").split("/");for(o=0;o<s.length;o++)s[o]===".."&&o>0&&(s.splice(o-1,2),o-=2)}return i.hostPart=r[1],i.directories=s,i.path=r[1]+s.join("/"),i.fileUrl=i.path+(r[4]||""),i.url=i.fileUrl+(r[5]||""),i}function w(t,n,i,s){var o=t.contents||{},u=t.files||{},a=b(t.href,e.location.href),f=a.url,c=l&&l.getItem(f),h=l&&l.getItem(f+":timestamp"),p={css:c,timestamp:h},d;r.relativeUrls?r.rootpath?t.entryPath?d=b(r.rootpath+y(a.path,t.entryPath)).path:d=r.rootpath:d=a.path:r.rootpath?d=r.rootpath:t.entryPath?d=t.entryPath:d=a.path,x(f,t.type,function(e,l){v+=e.replace(/@import .+?;/ig,"");if(!i&&p&&l&&(new Date(l)).valueOf()===(new Date(p.timestamp)).valueOf())S(p.css,t),n(null,null,e,t,{local:!0,remaining:s},f);else try{o[f]=e,(new r.Parser({optimization:r.optimization,paths:[a.path],entryPath:t.entryPath||a.path,mime:t.type,filename:f,rootpath:d,relativeUrls:t.relativeUrls,contents:o,files:u,dumpLineNumbers:r.dumpLineNumbers})).parse(e,function(r,i){if(r)return k(r,f);try{n(r,i,e,t,{local:!1,lastModified:l,remaining:s},f),N(document.getElementById("less-error-message:"+E(f)))}catch(r){k(r,f)}})}catch(c){k(c,f)}},function(e,t){throw new Error("Couldn't load "+t+" ("+e+")")})}function E(e){return e.replace(/^[a-z]+:\/\/?[^\/]+/,"").replace(/^\//,"").replace(/\.[a-zA-Z]+$/,"").replace(/[^\.\w-]+/g,"-").replace(/\./g,":")}function S(e,t,n){var r,i=t.href||"",s="less:"+(t.title||E(i));if((r=document.getElementById(s))===null){r=document.createElement("style"),r.type="text/css",t.media&&(r.media=t.media),r.id=s;var o=t&&t.nextSibling||null;(o||document.getElementsByTagName("head")[0]).parentNode.insertBefore(r,o)}if(r.styleSheet)try{r.styleSheet.cssText=e}catch(u){throw new Error("Couldn't reassign styleSheet.cssText.")}else(function(e){r.childNodes.length>0?r.firstChild.nodeValue!==e.nodeValue&&r.replaceChild(e,r.firstChild):r.appendChild(e)})(document.createTextNode(e));if(n&&l){C("saving "+i+" to cache.");try{l.setItem(i,e),l.setItem(i+":timestamp",n)}catch(u){C("failed to save")}}}function x(e,t,n,i){function a(t,n,r){t.status>=200&&t.status<300?n(t.responseText,t.getResponseHeader("Last-Modified")):typeof r=="function"&&r(t.status,e)}var s=T(),u=o?r.fileAsync:r.async;typeof s.overrideMimeType=="function"&&s.overrideMimeType("text/css"),s.open("GET",e,u),s.setRequestHeader("Accept",t||"text/x-less, text/css; q=0.9, */*; q=0.5"),s.send(null),o&&!r.fileAsync?s.status===0||s.status>=200&&s.status<300?n(s.responseText):i(s.status,e):u?s.onreadystatechange=function(){s.readyState==4&&a(s,n,i)}:a(s,n,i)}function T(){if(e.XMLHttpRequest)return new XMLHttpRequest;try{return new ActiveXObject("MSXML2.XMLHTTP.3.0")}catch(t){return C("browser doesn't support AJAX."),null}}function N(e){return e&&e.parentNode.removeChild(e)}function C(e){r.env=="development"&&typeof console!="undefined"&&console.log("less: "+e)}function k(e,t){var n="less-error-message:"+E(t),i='<li><label>{line}</label><pre class="{class}">{content}</pre></li>',s=document.createElement("div"),o,u,a=[],f=e.filename||t,l=f.match(/([^\/]+(\?.*)?)$/)[1];s.id=n,s.className="less-error-message",u="<h3>"+(e.message||"There is an error in your .less file")+"</h3>"+'<p>in <a href="'+f+'">'+l+"</a> ";var c=function(e,t,n){e.extract[t]&&a.push(i.replace(/\{line\}/,parseInt(e.line)+(t-1)).replace(/\{class\}/,n).replace(/\{content\}/,e.extract[t]))};e.stack?u+="<br/>"+e.stack.split("\n").slice(1).join("<br/>"):e.extract&&(c(e,0,""),c(e,1,"line"),c(e,2,""),u+="on line "+e.line+", column "+(e.column+1)+":</p>"+"<ul>"+a.join("")+"</ul>"),s.innerHTML=u,S([".less-error-message ul, .less-error-message li {","list-style-type: none;","margin-right: 15px;","padding: 4px 0;","margin: 0;","}",".less-error-message label {","font-size: 12px;","margin-right: 15px;","padding: 4px 0;","color: #cc7777;","}",".less-error-message pre {","color: #dd6666;","padding: 4px 0;","margin: 0;","display: inline-block;","}",".less-error-message pre.line {","color: #ff0000;","}",".less-error-message h3 {","font-size: 20px;","font-weight: bold;","padding: 15px 0 5px 0;","margin: 0;","}",".less-error-message a {","color: #10a","}",".less-error-message .error {","color: red;","font-weight: bold;","padding-bottom: 2px;","border-bottom: 1px dashed red;","}"].join("\n"),{title:"error-message"}),s.style.cssText=["font-family: Arial, sans-serif","border: 1px solid #e00","background-color: #eee","border-radius: 5px","-webkit-border-radius: 5px","-moz-border-radius: 5px","color: #e00","padding: 15px","margin-bottom: 15px"].join(";"),r.env=="development"&&(o=setInterval(function(){document.body&&(document.getElementById(n)?document.body.replaceChild(s,document.getElementById(n)):document.body.insertBefore(s,document.body.firstChild),clearInterval(o))},10))}Array.isArray||(Array.isArray=function(e){return Object.prototype.toString.call(e)==="[object Array]"||e instanceof Array}),Array.prototype.forEach||(Array.prototype.forEach=function(e,t){var n=this.length>>>0;for(var r=0;r<n;r++)r in this&&e.call(t,this[r],r,this)}),Array.prototype.map||(Array.prototype.map=function(e){var t=this.length>>>0,n=new Array(t),r=arguments[1];for(var i=0;i<t;i++)i in this&&(n[i]=e.call(r,this[i],i,this));return n}),Array.prototype.filter||(Array.prototype.filter=function(e){var t=[],n=arguments[1];for(var r=0;r<this.length;r++)e.call(n,this[r])&&t.push(this[r]);return t}),Array.prototype.reduce||(Array.prototype.reduce=function(e){var t=this.length>>>0,n=0;if(t===0&&arguments.length===1)throw new TypeError;if(arguments.length>=2)var r=arguments[1];else do{if(n in this){r=this[n++];break}if(++n>=t)throw new TypeError}while(!0);for(;n<t;n++)n in this&&(r=e.call(null,r,this[n],n,this));return r}),Array.prototype.indexOf||(Array.prototype.indexOf=function(e){var t=this.length,n=arguments[1]||0;if(!t)return-1;if(n>=t)return-1;n<0&&(n+=t);for(;n<t;n++){if(!Object.prototype.hasOwnProperty.call(this,n))continue;if(e===this[n])return n}return-1}),Object.keys||(Object.keys=function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}),String.prototype.trim||(String.prototype.trim=function(){return String(this).replace(/^\s\s*/,"").replace(/\s\s*$/,"")});var r,i,s;typeof environment=="object"&&{}.toString.call(environment)==="[object Environment]"?(typeof e=="undefined"?r={}:r=e.less={},i=r.tree={},r.mode="rhino"):typeof e=="undefined"?(r=exports,i=n("./tree"),r.mode="node"):(typeof e.less=="undefined"&&(e.less={}),r=e.less,i=e.less.tree={},r.mode="browser"),r.Parser=function(t){function g(){a=c[u],f=o,h=o}function y(){c[u]=a,o=f,h=o}function b(){o>h&&(c[u]=c[u].slice(o-h),h=o)}function w(e){var t=e.charCodeAt(0);return t===32||t===10||t===9}function E(e){var t,n,r,i,a;if(e instanceof Function)return e.call(p.parsers);if(typeof e=="string")t=s.charAt(o)===e?e:null,r=1,b();else{b();if(!(t=e.exec(c[u])))return null;r=t[0].length}if(t)return S(r),typeof t=="string"?t:t.length===1?t[0]:t}function S(e){var t=o,n=u,r=o+c[u].length,i=o+=e;while(o<r){if(!w(s.charAt(o)))break;o++}return c[u]=c[u].slice(e+(o-i)),h=o,c[u].length===0&&u<c.length-1&&u++,t!==o||n!==u}function x(e,t){var n=E(e);if(!!n)return n;T(t||(typeof e=="string"?"expected '"+e+"' got '"+s.charAt(o)+"'":"unexpected token"))}function T(e,t){var n=new Error(e);throw n.index=o,n.type=t||"Syntax",n}function N(e){return typeof e=="string"?s.charAt(o)===e:e.test(c[u])?!0:!1}function C(e,t){return e.filename&&t.filename&&e.filename!==t.filename?p.imports.contents[e.filename]:s}function k(e,t){for(var n=e,r=-1;n>=0&&t.charAt(n)!=="\n";n--)r++;return{line:typeof e=="number"?(t.slice(0,e).match(/\n/g)||"").length:null,column:r}}function L(e){return r.mode==="browser"||r.mode==="rhino"?e.filename:n("path").resolve(e.filename)}function A(e,t,n){return{lineNumber:k(e,t).line+1,fileName:L(n)}}function O(e,t){var n=C(e,t),r=k(e.index,n),i=r.line,s=r.column,o=n.split("\n");this.type=e.type||"Syntax",this.message=e.message,this.filename=e.filename||t.filename,this.index=e.index,this.line=typeof i=="number"?i+1:null,this.callLine=e.call&&k(e.call,n).line+1,this.callExtract=o[k(e.call,n).line],this.stack=e.stack,this.column=s,this.extract=[o[i-1],o[i],o[i+1]]}var s,o,u,a,f,l,c,h,p,d=this,t=t||{};t.contents||(t.contents={}),t.rootpath=t.rootpath||"",t.files||(t.files={});var v=function(){},m=this.imports={paths:t.paths||[],queue:[],files:t.files,contents:t.contents,mime:t.mime,error:null,push:function(e,n){var i=this;this.queue.push(e),r.Parser.importer(e,this.paths,function(t,r,s){i.queue.splice(i.queue.indexOf(e),1);var o=s in i.files;i.files[s]=r,t&&!i.error&&(i.error=t),n(t,r,o),i.queue.length===0&&v(i.error)},t)}};return this.env=t=t||{},this.optimization="optimization"in this.env?this.env.optimization:1,this.env.filename=this.env.filename||null,p={imports:m,parse:function(e,a){var f,d,m,g,y,b,w=[],S,x=null;o=u=h=l=0,s=e.replace(/\r\n/g,"\n"),s=s.replace(/^\uFEFF/,""),c=function(e){var n=0,r=/(?:@\{[\w-]+\}|[^"'`\{\}\/\(\)\\])+/g,i=/\/\*(?:[^*]|\*+[^\/*])*\*+\/|\/\/.*/g,o=/"((?:[^"\\\r\n]|\\.)*)"|'((?:[^'\\\r\n]|\\.)*)'|`((?:[^`]|\\.)*)`/g,u=0,a,f=e[0],l;for(var c=0,h,p;c<s.length;){r.lastIndex=c,(a=r.exec(s))&&a.index===c&&(c+=a[0].length,f.push(a[0])),h=s.charAt(c),i.lastIndex=o.lastIndex=c;if(a=o.exec(s))if(a.index===c){c+=a[0].length,f.push(a[0]);continue}if(!l&&h==="/"){p=s.charAt(c+1);if(p==="/"||p==="*")if(a=i.exec(s))if(a.index===c){c+=a[0].length,f.push(a[0]);continue}}switch(h){case"{":if(!l){u++,f.push(h);break};case"}":if(!l){u--,f.push(h),e[++n]=f=[];break};case"(":if(!l){l=!0,f.push(h);break};case")":if(l){l=!1,f.push(h);break};default:f.push(h)}c++}return u!=0&&(x=new O({index:c-1,type:"Parse",message:u>0?"missing closing `}`":"missing opening `{`",filename:t.filename},t)),e.map(function(e){return e.join("")})}([[]]);if(x)return a(x,t);try{f=new i.Ruleset([],E(this.parsers.primary)),f.root=!0}catch(T){return a(new O(T,t))}f.toCSS=function(e){var s,o,u;return function(s,o){var u=[],a;s=s||{},typeof o=="object"&&!Array.isArray(o)&&(o=Object.keys(o).map(function(e){var t=o[e];return t instanceof i.Value||(t instanceof i.Expression||(t=new i.Expression([t])),t=new i.Value([t])),new i.Rule("@"+e,t,!1,0)}),u=[new i.Ruleset(null,o)]);try{var f=e.call(this,{frames:u}).toCSS([],{compress:s.compress||!1,dumpLineNumbers:t.dumpLineNumbers})}catch(l){throw new O(l,t)}if(a=p.imports.error)throw a instanceof O?a:new O(a,t);return s.yuicompress&&r.mode==="node"?n("ycssmin").cssmin(f):s.compress?f.replace(/(\s)+/g,"$1"):f}}(f.eval);if(o<s.length-1){o=l,b=s.split("\n"),y=(s.slice(0,o).match(/\n/g)||"").length+1;for(var N=o,C=-1;N>=0&&s.charAt(N)!=="\n";N--)C++;x={type:"Parse",message:"Syntax Error on line "+y,index:o,filename:t.filename,line:y,column:C,extract:[b[y-2],b[y-1],b[y]]}}this.imports.queue.length>0?v=function(e){e=x||e,e?a(e):a(null,f)}:a(x,f)},parsers:{primary:function(){var e,t=[];while((e=E(this.mixin.definition)||E(this.rule)||E(this.ruleset)||E(this.mixin.call)||E(this.comment)||E(this.directive))||E(/^[\s\n]+/)||E(/^;+/))e&&t.push(e);return t},comment:function(){var e;if(s.charAt(o)!=="/")return;if(s.charAt(o+1)==="/")return new i.Comment(E(/^\/\/.*/),!0);if(e=E(/^\/\*(?:[^*]|\*+[^\/*])*\*+\/\n?/))return new i.Comment(e)},entities:{quoted:function(){var e,t=o,n;s.charAt(t)==="~"&&(t++,n=!0);if(s.charAt(t)!=='"'&&s.charAt(t)!=="'")return;n&&E("~");if(e=E(/^"((?:[^"\\\r\n]|\\.)*)"|'((?:[^'\\\r\n]|\\.)*)'/))return new i.Quoted(e[0],e[1]||e[2],n)},keyword:function(){var e;if(e=E(/^[_A-Za-z-][_A-Za-z0-9-]*/))return i.colors.hasOwnProperty(e)?new i.Color(i.colors[e].slice(1)):new i.Keyword(e)},call:function(){var e,n,r,s,a=o;if(!(e=/^([\w-]+|%|progid:[\w\.]+)\(/.exec(c[u])))return;e=e[1],n=e.toLowerCase();if(n==="url")return null;o+=e.length;if(n==="alpha"){s=E(this.alpha);if(typeof s!="undefined")return s}E("("),r=E(this.entities.arguments);if(!E(")"))return;if(e)return new i.Call(e,r,a,t.filename)},arguments:function(){var e=[],t;while(t=E(this.entities.assignment)||E(this.expression)){e.push(t);if(!E(","))break}return e},literal:function(){return E(this.entities.ratio)||E(this.entities.dimension)||E(this.entities.color)||E(this.entities.quoted)||E(this.entities.unicodeDescriptor)},assignment:function(){var e,t;if((e=E(/^\w+(?=\s?=)/i))&&E("=")&&(t=E(this.entity)))return new i.Assignment(e,t)},url:function(){var e;if(s.charAt(o)!=="u"||!E(/^url\(/))return;return e=E(this.entities.quoted)||E(this.entities.variable)||E(/^(?:(?:\\[\(\)'"])|[^\(\)'"])+/)||"",x(")"),new i.URL(e.value!=null||e instanceof i.Variable?e:new i.Anonymous(e),t.rootpath)},variable:function(){var e,n=o;if(s.charAt(o)==="@"&&(e=E(/^@@?[\w-]+/)))return new i.Variable(e,n,t.filename)},variableCurly:function(){var e,n,r=o;if(s.charAt(o)==="@"&&(n=E(/^@\{([\w-]+)\}/)))return new i.Variable("@"+n[1],r,t.filename)},color:function(){var e;if(s.charAt(o)==="#"&&(e=E(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/)))return new i.Color(e[1])},dimension:function(){var e,t=s.charCodeAt(o);if(t>57||t<43||t===47||t==44)return;if(e=E(/^([+-]?\d*\.?\d+)(px|%|em|pc|ex|in|deg|s|ms|pt|cm|mm|rad|grad|turn|dpi|dpcm|dppx|rem|vw|vh|vmin|vm|ch)?/))return new i.Dimension(e[1],e[2])},ratio:function(){var e,t=s.charCodeAt(o);if(t>57||t<48)return;if(e=E(/^(\d+\/\d+)/))return new i.Ratio(e[1])},unicodeDescriptor:function(){var e;if(e=E(/^U\+[0-9a-fA-F?]+(\-[0-9a-fA-F?]+)?/))return new i.UnicodeDescriptor(e[0])},javascript:function(){var e,t=o,n;s.charAt(t)==="~"&&(t++,n=!0);if(s.charAt(t)!=="`")return;n&&E("~");if(e=E(/^`([^`]*)`/))return new i.JavaScript(e[1],o,n)}},variable:function(){var e;if(s.charAt(o)==="@"&&(e=E(/^(@[\w-]+)\s*:/)))return e[1]},shorthand:function(){var e,t;if(!N(/^[@\w.%-]+\/[@\w.-]+/))return;g();if((e=E(this.entity))&&E("/")&&(t=E(this.entity)))return new i.Shorthand(e,t);y()},mixin:{call:function(){var e=[],n,r,u=[],a=[],f,l,c,h,p,d,v,m=o,b=s.charAt(o),w,S,C=!1;if(b!=="."&&b!=="#")return;g();while(n=E(/^[#.](?:[\w-]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+/))e.push(new i.Element(r,n,o)),r=E(">");if(E("(")){p=[];while(c=E(this.expression)){h=null,S=c;if(c.value.length==1){var k=c.value[0];k instanceof i.Variable&&E(":")&&(p.length>0&&(d&&T("Cannot mix ; and , as delimiter types"),v=!0),S=x(this.expression),h=w=k.name)}p.push(S),a.push({name:h,value:S});if(E(","))continue;if(E(";")||d)v&&T("Cannot mix ; and , as delimiter types"),d=!0,p.length>1&&(S=new i.Value(p)),u.push({name:w,value:S}),w=null,p=[],v=!1}x(")")}f=d?u:a,E(this.important)&&(C=!0);if(e.length>0&&(E(";")||N("}")))return new i.mixin.Call(e,f,m,t.filename,C);y()},definition:function(){var e,t=[],n,r,u,a,f,c=!1;if(s.charAt(o)!=="."&&s.charAt(o)!=="#"||N(/^[^{]*\}/))return;g();if(n=E(/^([#.](?:[\w-]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+)\s*\(/)){e=n[1];do{E(this.comment);if(s.charAt(o)==="."&&E(/^\.{3}/)){c=!0,t.push({variadic:!0});break}if(!(u=E(this.entities.variable)||E(this.entities.literal)||E(this.entities.keyword)))break;if(u instanceof i.Variable)if(E(":"))a=x(this.expression,"expected expression"),t.push({name:u.name,value:a});else{if(E(/^\.{3}/)){t.push({name:u.name,variadic:!0}),c=!0;break}t.push({name:u.name})}else t.push({value:u})}while(E(",")||E(";"));E(")")||(l=o,y()),E(this.comment),E(/^when/)&&(f=x(this.conditions,"expected condition")),r=E(this.block);if(r)return new i.mixin.Definition(e,t,r,f,c);y()}}},entity:function(){return E(this.entities.literal)||E(this.entities.variable)||E(this.entities.url)||E(this.entities.call)||E(this.entities.keyword)||E(this.entities.javascript)||E(this.comment)},end:function(){return E(";")||N("}")},alpha:function(){var e;if(!E(/^\(opacity=/i))return;if(e=E(/^\d+/)||E(this.entities.variable))return x(")"),new i.Alpha(e)},element:function(){var e,t,n,r;n=E(this.combinator),e=E(/^(?:\d+\.\d+|\d+)%/)||E(/^(?:[.#]?|:*)(?:[\w-]|[^\x00-\x9f]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+/)||E("*")||E("&")||E(this.attribute)||E(/^\([^()@]+\)/)||E(/^[\.#](?=@)/)||E(this.entities.variableCurly),e||E("(")&&(r=E(this.entities.variableCurly)||E(this.entities.variable)||E(this.selector))&&E(")")&&(e=new i.Paren(r));if(e)return new i.Element(n,e,o)},combinator:function(){var e,t=s.charAt(o);if(t===">"||t==="+"||t==="~"||t==="|"){o++;while(s.charAt(o).match(/\s/))o++;return new i.Combinator(t)}return s.charAt(o-1).match(/\s/)?new i.Combinator(" "):new i.Combinator(null)},selector:function(){var e,t,n=[],r,u;if(E("("))return e=E(this.entity),E(")")?new i.Selector([new i.Element("",e,o)]):null;while(t=E(this.element)){r=s.charAt(o),n.push(t);if(r==="{"||r==="}"||r===";"||r===","||r===")")break}if(n.length>0)return new i.Selector(n)},attribute:function(){var e="",t,n,r;if(!E("["))return;if(t=E(/^(?:[_A-Za-z0-9-]|\\.)+/)||E(this.entities.quoted))(r=E(/^[|~*$^]?=/))&&(n=E(this.entities.quoted)||E(/^[\w-]+/))?e=[t,r,n.toCSS?n.toCSS():n].join(""):e=t;if(!E("]"))return;if(e)return"["+e+"]"},block:function(){var e;if(E("{")&&(e=E(this.primary))&&E("}"))return e},ruleset:function(){var e=[],n,r,u,a;g(),t.dumpLineNumbers&&(a=A(o,s,t));while(n=E(this.selector)){e.push(n),E(this.comment);if(!E(","))break;E(this.comment)}if(e.length>0&&(r=E(this.block))){var f=new i.Ruleset(e,r,t.strictImports);return t.dumpLineNumbers&&(f.debugInfo=a),f}l=o,y()},rule:function(){var e,t,n=s.charAt(o),r,a;g();if(n==="."||n==="#"||n==="&")return;if(e=E(this.variable)||E(this.property)){e.charAt(0)!="@"&&(a=/^([^@+\/'"*`(;{}-]*);/.exec(c[u]))?(o+=a[0].length-1,t=new i.Anonymous(a[1])):e==="font"?t=E(this.font):t=E(this.value),r=E(this.important);if(t&&E(this.end))return new i.Rule(e,t,r,f);l=o,y()}},"import":function(){var e,n,r=o;g();var s=E(/^@import(?:-(once))?\s+/);if(s&&(e=E(this.entities.quoted)||E(this.entities.url))){n=E(this.mediaFeatures);if(E(";"))return new i.Import(e,m,n,s[1]==="once",r,t.rootpath)}y()},mediaFeature:function(){var e,t,n=[];do if(e=E(this.entities.keyword))n.push(e);else if(E("(")){t=E(this.property),e=E(this.entity);if(!E(")"))return null;if(t&&e)n.push(new i.Paren(new i.Rule(t,e,null,o,!0)));else{if(!e)return null;n.push(new i.Paren(e))}}while(e);if(n.length>0)return new i.Expression(n)},mediaFeatures:function(){var e,t=[];do if(e=E(this.mediaFeature)){t.push(e);if(!E(","))break}else if(e=E(this.entities.variable)){t.push(e);if(!E(","))break}while(e);return t.length>0?t:null},media:function(){var e,n,r,u;t.dumpLineNumbers&&(u=A(o,s,t));if(E(/^@media/)){e=E(this.mediaFeatures);if(n=E(this.block))return r=new i.Media(n,e),t.dumpLineNumbers&&(r.debugInfo=u),r}},directive:function(){var e,n,r,u,a,f,l,c,h,p;if(s.charAt(o)!=="@")return;if(n=E(this["import"])||E(this.media))return n;g(),e=E(/^@[a-z-]+/);if(!e)return;l=e,e.charAt(1)=="-"&&e.indexOf("-",2)>0&&(l="@"+e.slice(e.indexOf("-",2)+1));switch(l){case"@font-face":c=!0;break;case"@viewport":case"@top-left":case"@top-left-corner":case"@top-center":case"@top-right":case"@top-right-corner":case"@bottom-left":case"@bottom-left-corner":case"@bottom-center":case"@bottom-right":case"@bottom-right-corner":case"@left-top":case"@left-middle":case"@left-bottom":case"@right-top":case"@right-middle":case"@right-bottom":c=!0;break;case"@page":case"@document":case"@supports":case"@keyframes":c=!0,h=!0;break;case"@namespace":p=!0}h&&(e+=" "+(E(/^[^{]+/)||"").trim());if(c){if(r=E(this.block))return new i.Directive(e,r)}else if((n=p?E(this.expression):E(this.entity))&&E(";")){var d=new i.Directive(e,n);return t.dumpLineNumbers&&(d.debugInfo=A(o,s,t)),d}y()},font:function(){var e=[],t=[],n,r,s,o;while(o=E(this.shorthand)||E(this.entity))t.push(o);e.push(new i.Expression(t));if(E(","))while(o=E(this.expression)){e.push(o);if(!E(","))break}return new i.Value(e)},value:function(){var e,t=[],n;while(e=E(this.expression)){t.push(e);if(!E(","))break}if(t.length>0)return new i.Value(t)},important:function(){if(s.charAt(o)==="!")return E(/^! *important/)},sub:function(){var e;if(E("(")&&(e=E(this.expression))&&E(")"))return e},multiplication:function(){var e,t,n,r;if(e=E(this.operand)){while(!N(/^\/[*\/]/)&&(n=E("/")||E("*"))&&(t=E(this.operand)))r=new i.Operation(n,[r||e,t]);return r||e}},addition:function(){var e,t,n,r;if(e=E(this.multiplication)){while((n=E(/^[-+]\s+/)||!w(s.charAt(o-1))&&(E("+")||E("-")))&&(t=E(this.multiplication)))r=new i.Operation(n,[r||e,t]);return r||e}},conditions:function(){var e,t,n=o,r;if(e=E(this.condition)){while(E(",")&&(t=E(this.condition)))r=new i.Condition("or",r||e,t,n);return r||e}},condition:function(){var e,t,n,r,s=o,u=!1;E(/^not/)&&(u=!0),x("(");if(e=E(this.addition)||E(this.entities.keyword)||E(this.entities.quoted))return(r=E(/^(?:>=|=<|[<=>])/))?(t=E(this.addition)||E(this.entities.keyword)||E(this.entities.quoted))?n=new i.Condition(r,e,t,s,u):T("expected expression"):n=new i.Condition("=",e,new i.Keyword("true"),s,u),x(")"),E(/^and/)?new i.Condition("and",n,E(this.condition)):n},operand:function(){var e,t=s.charAt(o+1);s.charAt(o)==="-"&&(t==="@"||t==="(")&&(e=E("-"));var n=E(this.sub)||E(this.entities.dimension)||E(this.entities.color)||E(this.entities.variable)||E(this.entities.call);return e?new i.Operation("*",[new i.Dimension(-1),n]):n},expression:function(){var e,t,n=[],r;while(e=E(this.addition)||E(this.entity))n.push(e);if(n.length>0)return new i.Expression(n)},property:function(){var e;if(e=E(/^(\*?-?[_a-z0-9-]+)\s*:/))return e[1]}}}};if(r.mode==="browser"||r.mode==="rhino")r.Parser.importer=function(e,t,n,r){!/^([a-z-]+:)?\//.test(e)&&t.length>0&&(e=t[0]+e),w({href:e,title:e,type:r.mime,contents:r.contents,files:r.files,rootpath:r.rootpath,entryPath:r.entryPath,relativeUrls:r.relativeUrls},function(e,i,s,o,u,a){e&&typeof r.errback=="function"?r.errback.call(null,a,t,n,r):n.call(null,e,i,a)},!0)};(function(e){function t(t){return e.functions.hsla(t.h,t.s,t.l,t.a)}function n(t,n){return t instanceof e.Dimension&&t.unit=="%"?parseFloat(t.value*n/100):r(t)}function r(t){if(t instanceof e.Dimension)return parseFloat(t.unit=="%"?t.value/100:t.value);if(typeof t=="number")return t;throw{error:"RuntimeError",message:"color functions take numbers as parameters"}}function i(e){return Math.min(1,Math.max(0,e))}e.functions={rgb:function(e,t,n){return this.rgba(e,t,n,1)},rgba:function(t,i,s,o){var u=[t,i,s].map(function(e){return n(e,256)});return o=r(o),new e.Color(u,o)},hsl:function(e,t,n){return this.hsla(e,t,n,1)},hsla:function(e,t,n,i){function u(e){return e=e<0?e+1:e>1?e-1:e,e*6<1?o+(s-o)*e*6:e*2<1?s:e*3<2?o+(s-o)*(2/3-e)*6:o}e=r(e)%360/360,t=r(t),n=r(n),i=r(i);var s=n<=.5?n*(t+1):n+t-n*t,o=n*2-s;return this.rgba(u(e+1/3)*255,u(e)*255,u(e-1/3)*255,i)},hsv:function(e,t,n){return this.hsva(e,t,n,1)},hsva:function(e,t,n,i){e=r(e)%360/360*360,t=r(t),n=r(n),i=r(i);var s,o;s=Math.floor(e/60%6),o=e/60-s;var u=[n,n*(1-t),n*(1-o*t),n*(1-(1-o)*t)],a=[[0,3,1],[2,0,1],[1,0,3],[1,2,0],[3,1,0],[0,1,2]];return this.rgba(u[a[s][0]]*255,u[a[s][1]]*255,u[a[s][2]]*255,i)},hue:function(t){return new e.Dimension(Math.round(t.toHSL().h))},saturation:function(t){return new e.Dimension(Math.round(t.toHSL().s*100),"%")},lightness:function(t){return new e.Dimension(Math.round(t.toHSL().l*100),"%")},red:function(t){return new e.Dimension(t.rgb[0])},green:function(t){return new e.Dimension(t.rgb[1])},blue:function(t){return new e.Dimension(t.rgb[2])},alpha:function(t){return new e.Dimension(t.toHSL().a)},luma:function(t){return new e.Dimension(Math.round((.2126*(t.rgb[0]/255)+.7152*(t.rgb[1]/255)+.0722*(t.rgb[2]/255))*t.alpha*100),"%")},saturate:function(e,n){var r=e.toHSL();return r.s+=n.value/100,r.s=i(r.s),t(r)},desaturate:function(e,n){var r=e.toHSL();return r.s-=n.value/100,r.s=i(r.s),t(r)},lighten:function(e,n){var r=e.toHSL();return r.l+=n.value/100,r.l=i(r.l),t(r)},darken:function(e,n){var r=e.toHSL();return r.l-=n.value/100,r.l=i(r.l),t(r)},fadein:function(e,n){var r=e.toHSL();return r.a+=n.value/100,r.a=i(r.a),t(r)},fadeout:function(e,n){var r=e.toHSL();return r.a-=n.value/100,r.a=i(r.a),t(r)},fade:function(e,n){var r=e.toHSL();return r.a=n.value/100,r.a=i(r.a),t(r)},spin:function(e,n){var r=e.toHSL(),i=(r.h+n.value)%360;return r.h=i<0?360+i:i,t(r)},mix:function(t,n,r){r||(r=new e.Dimension(50));var i=r.value/100,s=i*2-1,o=t.toHSL().a-n.toHSL().a,u=((s*o==-1?s:(s+o)/(1+s*o))+1)/2,a=1-u,f=[t.rgb[0]*u+n.rgb[0]*a,t.rgb[1]*u+n.rgb[1]*a,t.rgb[2]*u+n.rgb[2]*a],l=t.alpha*i+n.alpha*(1-i);return new e.Color(f,l)},greyscale:function(t){return this.desaturate(t,new e.Dimension(100))},contrast:function(e,t,n,r){return e.rgb?(typeof n=="undefined"&&(n=this.rgba(255,255,255,1)),typeof t=="undefined"&&(t=this.rgba(0,0,0,1)),typeof r=="undefined"?r=.43:r=r.value,(.2126*(e.rgb[0]/255)+.7152*(e.rgb[1]/255)+.0722*(e.rgb[2]/255))*e.alpha<r?n:t):null},e:function(t){return new e.Anonymous(t instanceof e.JavaScript?t.evaluated:t)},escape:function(t){return new e.Anonymous(encodeURI(t.value).replace(/=/g,"%3D").replace(/:/g,"%3A").replace(/#/g,"%23").replace(/;/g,"%3B").replace(/\(/g,"%28").replace(/\)/g,"%29"))},"%":function(t){var n=Array.prototype.slice.call(arguments,1),r=t.value;for(var i=0;i<n.length;i++)r=r.replace(/%[sda]/i,function(e){var t=e.match(/s/i)?n[i].value:n[i].toCSS();return e.match(/[A-Z]$/)?encodeURIComponent(t):t});return r=r.replace(/%%/g,"%"),new e.Quoted('"'+r+'"',r)},unit:function(t,n){return new e.Dimension(t.value,n?n.toCSS():"")},round:function(e,t){var n=typeof t=="undefined"?0:t.value;return this._math(function(e){return e.toFixed(n)},e)},ceil:function(e){return this._math(Math.ceil,e)},floor:function(e){return this._math(Math.floor,e)},_math:function(t,n){if(n instanceof e.Dimension)return new e.Dimension(t(parseFloat(n.value)),n.unit);if(typeof n=="number")return t(n);throw{type:"Argument",message:"argument must be a number"}},argb:function(t){return new e.Anonymous(t.toARGB())},percentage:function(t){return new e.Dimension(t.value*100,"%")},color:function(t){if(t instanceof e.Quoted)return new e.Color(t.value.slice(1));throw{type:"Argument",message:"argument must be a string"}},iscolor:function(t){return this._isa(t,e.Color)},isnumber:function(t){return this._isa(t,e.Dimension)},isstring:function(t){return this._isa(t,e.Quoted)},iskeyword:function(t){return this._isa(t,e.Keyword)},isurl:function(t){return this._isa(t,e.URL)},ispixel:function(t){return t instanceof e.Dimension&&t.unit==="px"?e.True:e.False},ispercentage:function(t){return t instanceof e.Dimension&&t.unit==="%"?e.True:e.False},isem:function(t){return t instanceof e.Dimension&&t.unit==="em"?e.True:e.False},_isa:function(t,n){return t instanceof n?e.True:e.False},multiply:function(e,t){var n=e.rgb[0]*t.rgb[0]/255,r=e.rgb[1]*t.rgb[1]/255,i=e.rgb[2]*t.rgb[2]/255;return this.rgb(n,r,i)},screen:function(e,t){var n=255-(255-e.rgb[0])*(255-t.rgb[0])/255,r=255-(255-e.rgb[1])*(255-t.rgb[1])/255,i=255-(255-e.rgb[2])*(255-t.rgb[2])/255;return this.rgb(n,r,i)},overlay:function(e,t){var n=e.rgb[0]<128?2*e.rgb[0]*t.rgb[0]/255:255-2*(255-e.rgb[0])*(255-t.rgb[0])/255,r=e.rgb[1]<128?2*e.rgb[1]*t.rgb[1]/255:255-2*(255-e.rgb[1])*(255-t.rgb[1])/255,i=e.rgb[2]<128?2*e.rgb[2]*t.rgb[2]/255:255-2*(255-e.rgb[2])*(255-t.rgb[2])/255;return this.rgb(n,r,i)},softlight:function(e,t){var n=t.rgb[0]*e.rgb[0]/255,r=n+e.rgb[0]*(255-(255-e.rgb[0])*(255-t.rgb[0])/255-n)/255;n=t.rgb[1]*e.rgb[1]/255;var i=n+e.rgb[1]*(255-(255-e.rgb[1])*(255-t.rgb[1])/255-n)/255;n=t.rgb[2]*e.rgb[2]/255;var s=n+e.rgb[2]*(255-(255-e.rgb[2])*(255-t.rgb[2])/255-n)/255;return this.rgb(r,i,s)},hardlight:function(e,t){var n=t.rgb[0]<128?2*t.rgb[0]*e.rgb[0]/255:255-2*(255-t.rgb[0])*(255-e.rgb[0])/255,r=t.rgb[1]<128?2*t.rgb[1]*e.rgb[1]/255:255-2*(255-t.rgb[1])*(255-e.rgb[1])/255,i=t.rgb[2]<128?2*t.rgb[2]*e.rgb[2]/255:255-2*(255-t.rgb[2])*(255-e.rgb[2])/255;return this.rgb(n,r,i)},difference:function(e,t){var n=Math.abs(e.rgb[0]-t.rgb[0]),r=Math.abs(e.rgb[1]-t.rgb[1]),i=Math.abs(e.rgb[2]-t.rgb[2]);return this.rgb(n,r,i)},exclusion:function(e,t){var n=e.rgb[0]+t.rgb[0]*(255-e.rgb[0]-e.rgb[0])/255,r=e.rgb[1]+t.rgb[1]*(255-e.rgb[1]-e.rgb[1])/255,i=e.rgb[2]+t.rgb[2]*(255-e.rgb[2]-e.rgb[2])/255;return this.rgb(n,r,i)},average:function(e,t){var n=(e.rgb[0]+t.rgb[0])/2,r=(e.rgb[1]+t.rgb[1])/2,i=(e.rgb[2]+t.rgb[2])/2;return this.rgb(n,r,i)},negation:function(e,t){var n=255-Math.abs(255-t.rgb[0]-e.rgb[0]),r=255-Math.abs(255-t.rgb[1]-e.rgb[1]),i=255-Math.abs(255-t.rgb[2]-e.rgb[2]);return this.rgb(n,r,i)},tint:function(e,t){return this.mix(this.rgb(255,255,255),e,t)},shade:function(e,t){return this.mix(this.rgb(0,0,0),e,t)}}})(n("./tree")),function(e){e.colors={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgrey:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",grey:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen
:"#9acd32"}}(n("./tree")),function(e){e.Alpha=function(e){this.value=e},e.Alpha.prototype={toCSS:function(){return"alpha(opacity="+(this.value.toCSS?this.value.toCSS():this.value)+")"},eval:function(e){return this.value.eval&&(this.value=this.value.eval(e)),this}}}(n("../tree")),function(e){e.Anonymous=function(e){this.value=e.value||e},e.Anonymous.prototype={toCSS:function(){return this.value},eval:function(){return this},compare:function(e){if(!e.toCSS)return-1;var t=this.toCSS(),n=e.toCSS();return t===n?0:t<n?-1:1}}}(n("../tree")),function(e){e.Assignment=function(e,t){this.key=e,this.value=t},e.Assignment.prototype={toCSS:function(){return this.key+"="+(this.value.toCSS?this.value.toCSS():this.value)},eval:function(t){return this.value.eval?new e.Assignment(this.key,this.value.eval(t)):this}}}(n("../tree")),function(e){e.Call=function(e,t,n,r){this.name=e,this.args=t,this.index=n,this.filename=r},e.Call.prototype={eval:function(t){var n=this.args.map(function(e){return e.eval(t)}),r;if(this.name in e.functions)try{r=e.functions[this.name].apply(e.functions,n);if(r!=null)return r}catch(i){throw{type:i.type||"Runtime",message:"error evaluating function `"+this.name+"`"+(i.message?": "+i.message:""),index:this.index,filename:this.filename}}return new e.Anonymous(this.name+"("+n.map(function(e){return e.toCSS(t)}).join(", ")+")")},toCSS:function(e){return this.eval(e).toCSS()}}}(n("../tree")),function(e){e.Color=function(e,t){Array.isArray(e)?this.rgb=e:e.length==6?this.rgb=e.match(/.{2}/g).map(function(e){return parseInt(e,16)}):this.rgb=e.split("").map(function(e){return parseInt(e+e,16)}),this.alpha=typeof t=="number"?t:1},e.Color.prototype={eval:function(){return this},toCSS:function(){return this.alpha<1?"rgba("+this.rgb.map(function(e){return Math.round(e)}).concat(this.alpha).join(", ")+")":"#"+this.rgb.map(function(e){return e=Math.round(e),e=(e>255?255:e<0?0:e).toString(16),e.length===1?"0"+e:e}).join("")},operate:function(t,n){var r=[];n instanceof e.Color||(n=n.toColor());for(var i=0;i<3;i++)r[i]=e.operate(t,this.rgb[i],n.rgb[i]);return new e.Color(r,this.alpha+n.alpha)},toHSL:function(){var e=this.rgb[0]/255,t=this.rgb[1]/255,n=this.rgb[2]/255,r=this.alpha,i=Math.max(e,t,n),s=Math.min(e,t,n),o,u,a=(i+s)/2,f=i-s;if(i===s)o=u=0;else{u=a>.5?f/(2-i-s):f/(i+s);switch(i){case e:o=(t-n)/f+(t<n?6:0);break;case t:o=(n-e)/f+2;break;case n:o=(e-t)/f+4}o/=6}return{h:o*360,s:u,l:a,a:r}},toARGB:function(){var e=[Math.round(this.alpha*255)].concat(this.rgb);return"#"+e.map(function(e){return e=Math.round(e),e=(e>255?255:e<0?0:e).toString(16),e.length===1?"0"+e:e}).join("")},compare:function(e){return e.rgb?e.rgb[0]===this.rgb[0]&&e.rgb[1]===this.rgb[1]&&e.rgb[2]===this.rgb[2]&&e.alpha===this.alpha?0:-1:-1}}}(n("../tree")),function(e){e.Comment=function(e,t){this.value=e,this.silent=!!t},e.Comment.prototype={toCSS:function(e){return e.compress?"":this.value},eval:function(){return this}}}(n("../tree")),function(e){e.Condition=function(e,t,n,r,i){this.op=e.trim(),this.lvalue=t,this.rvalue=n,this.index=r,this.negate=i},e.Condition.prototype.eval=function(e){var t=this.lvalue.eval(e),n=this.rvalue.eval(e),r=this.index,i,i=function(e){switch(e){case"and":return t&&n;case"or":return t||n;default:if(t.compare)i=t.compare(n);else{if(!n.compare)throw{type:"Type",message:"Unable to perform comparison",index:r};i=n.compare(t)}switch(i){case-1:return e==="<"||e==="=<";case 0:return e==="="||e===">="||e==="=<";case 1:return e===">"||e===">="}}}(this.op);return this.negate?!i:i}}(n("../tree")),function(e){e.Dimension=function(e,t){this.value=parseFloat(e),this.unit=t||null},e.Dimension.prototype={eval:function(){return this},toColor:function(){return new e.Color([this.value,this.value,this.value])},toCSS:function(){var e=this.value+this.unit;return e},operate:function(t,n){return new e.Dimension(e.operate(t,this.value,n.value),this.unit||n.unit)},compare:function(t){return t instanceof e.Dimension?t.value>this.value?-1:t.value<this.value?1:t.unit&&this.unit!==t.unit?-1:0:-1}}}(n("../tree")),function(e){e.Directive=function(t,n){this.name=t,Array.isArray(n)?(this.ruleset=new e.Ruleset([],n),this.ruleset.allowImports=!0):this.value=n},e.Directive.prototype={toCSS:function(e,t){return this.ruleset?(this.ruleset.root=!0,this.name+(t.compress?"{":" {\n  ")+this.ruleset.toCSS(e,t).trim().replace(/\n/g,"\n  ")+(t.compress?"}":"\n}\n")):this.name+" "+this.value.toCSS()+";\n"},eval:function(t){var n=this;return this.ruleset&&(t.frames.unshift(this),n=new e.Directive(this.name),n.ruleset=this.ruleset.eval(t),t.frames.shift()),n},variable:function(t){return e.Ruleset.prototype.variable.call(this.ruleset,t)},find:function(){return e.Ruleset.prototype.find.apply(this.ruleset,arguments)},rulesets:function(){return e.Ruleset.prototype.rulesets.apply(this.ruleset)}}}(n("../tree")),function(e){e.Element=function(t,n,r){this.combinator=t instanceof e.Combinator?t:new e.Combinator(t),typeof n=="string"?this.value=n.trim():n?this.value=n:this.value="",this.index=r},e.Element.prototype.eval=function(t){return new e.Element(this.combinator,this.value.eval?this.value.eval(t):this.value,this.index)},e.Element.prototype.toCSS=function(e){var t=this.value.toCSS?this.value.toCSS(e):this.value;return t==""&&this.combinator.value.charAt(0)=="&"?"":this.combinator.toCSS(e||{})+t},e.Combinator=function(e){e===" "?this.value=" ":this.value=e?e.trim():""},e.Combinator.prototype.toCSS=function(e){return{"":""," ":" ",":":" :","+":e.compress?"+":" + ","~":e.compress?"~":" ~ ",">":e.compress?">":" > ","|":e.compress?"|":" | "}[this.value]}}(n("../tree")),function(e){e.Expression=function(e){this.value=e},e.Expression.prototype={eval:function(t){return this.value.length>1?new e.Expression(this.value.map(function(e){return e.eval(t)})):this.value.length===1?this.value[0].eval(t):this},toCSS:function(e){return this.value.map(function(t){return t.toCSS?t.toCSS(e):""}).join(" ")}}}(n("../tree")),function(e){e.Import=function(t,n,r,i,s,o){var u=this;this.once=i,this.index=s,this._path=t,this.features=r&&new e.Value(r),this.rootpath=o,t instanceof e.Quoted?this.path=/(\.[a-z]*$)|([\?;].*)$/.test(t.value)?t.value:t.value+".less":this.path=t.value.value||t.value,this.css=/css([\?;].*)?$/.test(this.path),this.css||n.push(this.path,function(t,n,r){t&&(t.index=s),r&&u.once&&(u.skip=r),u.root=n||new e.Ruleset([],[])})},e.Import.prototype={toCSS:function(e){var t=this.features?" "+this.features.toCSS(e):"";return this.css?(typeof this._path.value=="string"&&!/^(?:[a-z-]+:|\/)/.test(this._path.value)&&(this._path.value=this.rootpath+this._path.value),"@import "+this._path.toCSS()+t+";\n"):""},eval:function(t){var n,r=this.features&&this.features.eval(t);return this.skip?[]:this.css?this:(n=new e.Ruleset([],this.root.rules.slice(0)),n.evalImports(t),this.features?new e.Media(n.rules,this.features.value):n.rules)}}}(n("../tree")),function(e){e.JavaScript=function(e,t,n){this.escaped=n,this.expression=e,this.index=t},e.JavaScript.prototype={eval:function(t){var n,r=this,i={},s=this.expression.replace(/@\{([\w-]+)\}/g,function(n,i){return e.jsify((new e.Variable("@"+i,r.index)).eval(t))});try{s=new Function("return ("+s+")")}catch(o){throw{message:"JavaScript evaluation error: `"+s+"`",index:this.index}}for(var u in t.frames[0].variables())i[u.slice(1)]={value:t.frames[0].variables()[u].value,toJS:function(){return this.value.eval(t).toCSS()}};try{n=s.call(i)}catch(o){throw{message:"JavaScript evaluation error: '"+o.name+": "+o.message+"'",index:this.index}}return typeof n=="string"?new e.Quoted('"'+n+'"',n,this.escaped,this.index):Array.isArray(n)?new e.Anonymous(n.join(", ")):new e.Anonymous(n)}}}(n("../tree")),function(e){e.Keyword=function(e){this.value=e},e.Keyword.prototype={eval:function(){return this},toCSS:function(){return this.value},compare:function(t){return t instanceof e.Keyword?t.value===this.value?0:1:-1}},e.True=new e.Keyword("true"),e.False=new e.Keyword("false")}(n("../tree")),function(e){e.Media=function(t,n){var r=this.emptySelectors();this.features=new e.Value(n),this.ruleset=new e.Ruleset(r,t),this.ruleset.allowImports=!0},e.Media.prototype={toCSS:function(e,t){var n=this.features.toCSS(t);return this.ruleset.root=e.length===0||e[0].multiMedia,"@media "+n+(t.compress?"{":" {\n  ")+this.ruleset.toCSS(e,t).trim().replace(/\n/g,"\n  ")+(t.compress?"}":"\n}\n")},eval:function(t){t.mediaBlocks||(t.mediaBlocks=[],t.mediaPath=[]);var n=new e.Media([],[]);return this.debugInfo&&(this.ruleset.debugInfo=this.debugInfo,n.debugInfo=this.debugInfo),n.features=this.features.eval(t),t.mediaPath.push(n),t.mediaBlocks.push(n),t.frames.unshift(this.ruleset),n.ruleset=this.ruleset.eval(t),t.frames.shift(),t.mediaPath.pop(),t.mediaPath.length===0?n.evalTop(t):n.evalNested(t)},variable:function(t){return e.Ruleset.prototype.variable.call(this.ruleset,t)},find:function(){return e.Ruleset.prototype.find.apply(this.ruleset,arguments)},rulesets:function(){return e.Ruleset.prototype.rulesets.apply(this.ruleset)},emptySelectors:function(){var t=new e.Element("","&",0);return[new e.Selector([t])]},evalTop:function(t){var n=this;if(t.mediaBlocks.length>1){var r=this.emptySelectors();n=new e.Ruleset(r,t.mediaBlocks),n.multiMedia=!0}return delete t.mediaBlocks,delete t.mediaPath,n},evalNested:function(t){var n,r,i=t.mediaPath.concat([this]);for(n=0;n<i.length;n++)r=i[n].features instanceof e.Value?i[n].features.value:i[n].features,i[n]=Array.isArray(r)?r:[r];return this.features=new e.Value(this.permute(i).map(function(t){t=t.map(function(t){return t.toCSS?t:new e.Anonymous(t)});for(n=t.length-1;n>0;n--)t.splice(n,0,new e.Anonymous("and"));return new e.Expression(t)})),new e.Ruleset([],[])},permute:function(e){if(e.length===0)return[];if(e.length===1)return e[0];var t=[],n=this.permute(e.slice(1));for(var r=0;r<n.length;r++)for(var i=0;i<e[0].length;i++)t.push([e[0][i]].concat(n[r]));return t},bubbleSelectors:function(t){this.ruleset=new e.Ruleset(t.slice(0),[this.ruleset])}}}(n("../tree")),function(e){e.mixin={},e.mixin.Call=function(t,n,r,i,s){this.selector=new e.Selector(t),this.arguments=n,this.index=r,this.filename=i,this.important=s},e.mixin.Call.prototype={eval:function(t){var n,r,i,s=[],o=!1,u,a,f,l,c;i=this.arguments&&this.arguments.map(function(e){return{name:e.name,value:e.value.eval(t)}});for(u=0;u<t.frames.length;u++)if((n=t.frames[u].find(this.selector)).length>0){c=!0;for(a=0;a<n.length;a++){r=n[a],l=!1;for(f=0;f<t.frames.length;f++)if(!(r instanceof e.mixin.Definition)&&r===(t.frames[f].originalRuleset||t.frames[f])){l=!0;break}if(l)continue;if(r.matchArgs(i,t)){if(!r.matchCondition||r.matchCondition(i,t))try{Array.prototype.push.apply(s,r.eval(t,i,this.important).rules)}catch(h){throw{message:h.message,index:this.index,filename:this.filename,stack:h.stack}}o=!0}}if(o)return s}throw c?{type:"Runtime",message:"No matching definition was found for `"+this.selector.toCSS().trim()+"("+(i?i.map(function(e){var t="";return e.name&&(t+=e.name+":"),e.value.toCSS?t+=e.value.toCSS():t+="???",t}).join(", "):"")+")`",index:this.index,filename:this.filename}:{type:"Name",message:this.selector.toCSS().trim()+" is undefined",index:this.index,filename:this.filename}}},e.mixin.Definition=function(t,n,r,i,s){this.name=t,this.selectors=[new e.Selector([new e.Element(null,t)])],this.params=n,this.condition=i,this.variadic=s,this.arity=n.length,this.rules=r,this._lookups={},this.required=n.reduce(function(e,t){return!t.name||t.name&&!t.value?e+1:e},0),this.parent=e.Ruleset.prototype,this.frames=[]},e.mixin.Definition.prototype={toCSS:function(){return""},variable:function(e){return this.parent.variable.call(this,e)},variables:function(){return this.parent.variables.call(this)},find:function(){return this.parent.find.apply(this,arguments)},rulesets:function(){return this.parent.rulesets.apply(this)},evalParams:function(t,n,r,i){var s=new e.Ruleset(null,[]),o,u,a=this.params.slice(0),f,l,c,h,p,d;if(r){r=r.slice(0);for(f=0;f<r.length;f++){u=r[f];if(h=u&&u.name){p=!1;for(l=0;l<a.length;l++)if(!i[l]&&h===a[l].name){i[l]=u.value.eval(t),s.rules.unshift(new e.Rule(h,u.value.eval(t))),p=!0;break}if(p){r.splice(f,1),f--;continue}throw{type:"Runtime",message:"Named argument for "+this.name+" "+r[f].name+" not found"}}}}d=0;for(f=0;f<a.length;f++){if(i[f])continue;u=r&&r[d];if(h=a[f].name)if(a[f].variadic&&r){o=[];for(l=d;l<r.length;l++)o.push(r[l].value.eval(t));s.rules.unshift(new e.Rule(h,(new e.Expression(o)).eval(t)))}else{c=u&&u.value;if(c)c=c.eval(t);else{if(!a[f].value)throw{type:"Runtime",message:"wrong number of arguments for "+this.name+" ("+r.length+" for "+this.arity+")"};c=a[f].value.eval(n)}s.rules.unshift(new e.Rule(h,c)),i[f]=c}if(a[f].variadic&&r)for(l=d;l<r.length;l++)i[l]=r[l].value.eval(t);d++}return s},eval:function(t,n,r){var i=[],s=this.frames.concat(t.frames),o=this.evalParams(t,{frames:s},n,i),u,a,f,l;return o.rules.unshift(new e.Rule("@arguments",(new e.Expression(i)).eval(t))),a=r?this.parent.makeImportant.apply(this).rules:this.rules.slice(0),l=(new e.Ruleset(null,a)).eval({frames:[this,o].concat(s)}),l.originalRuleset=this,l},matchCondition:function(e,t){return this.condition&&!this.condition.eval({frames:[this.evalParams(t,{frames:this.frames.concat(t.frames)},e,[])].concat(t.frames)})?!1:!0},matchArgs:function(e,t){var n=e&&e.length||0,r,i;if(!this.variadic){if(n<this.required)return!1;if(n>this.params.length)return!1;if(this.required>0&&n>this.params.length)return!1}r=Math.min(n,this.arity);for(var s=0;s<r;s++)if(!this.params[s].name&&!this.params[s].variadic&&e[s].value.eval(t).toCSS()!=this.params[s].value.eval(t).toCSS())return!1;return!0}}}(n("../tree")),function(e){e.Operation=function(e,t){this.op=e.trim(),this.operands=t},e.Operation.prototype.eval=function(t){var n=this.operands[0].eval(t),r=this.operands[1].eval(t),i;if(n instanceof e.Dimension&&r instanceof e.Color){if(this.op!=="*"&&this.op!=="+")throw{name:"OperationError",message:"Can't substract or divide a color from a number"};i=r,r=n,n=i}if(!n.operate)throw{name:"OperationError",message:"Operation on an invalid type"};return n.operate(this.op,r)},e.operate=function(e,t,n){switch(e){case"+":return t+n;case"-":return t-n;case"*":return t*n;case"/":return t/n}}}(n("../tree")),function(e){e.Paren=function(e){this.value=e},e.Paren.prototype={toCSS:function(e){return"("+this.value.toCSS(e)+")"},eval:function(t){return new e.Paren(this.value.eval(t))}}}(n("../tree")),function(e){e.Quoted=function(e,t,n,r){this.escaped=n,this.value=t||"",this.quote=e.charAt(0),this.index=r},e.Quoted.prototype={toCSS:function(){return this.escaped?this.value:this.quote+this.value+this.quote},eval:function(t){var n=this,r=this.value.replace(/`([^`]+)`/g,function(r,i){return(new e.JavaScript(i,n.index,!0)).eval(t).value}).replace(/@\{([\w-]+)\}/g,function(r,i){var s=(new e.Variable("@"+i,n.index)).eval(t);return s instanceof e.Quoted?s.value:s.toCSS()});return new e.Quoted(this.quote+r+this.quote,r,this.escaped,this.index)},compare:function(e){if(!e.toCSS)return-1;var t=this.toCSS(),n=e.toCSS();return t===n?0:t<n?-1:1}}}(n("../tree")),function(e){e.Ratio=function(e){this.value=e},e.Ratio.prototype={toCSS:function(e){return this.value},eval:function(){return this}}}(n("../tree")),function(e){e.Rule=function(t,n,r,i,s){this.name=t,this.value=n instanceof e.Value?n:new e.Value([n]),this.important=r?" "+r.trim():"",this.index=i,this.inline=s||!1,t.charAt(0)==="@"?this.variable=!0:this.variable=!1},e.Rule.prototype.toCSS=function(e){return this.variable?"":this.name+(e.compress?":":": ")+this.value.toCSS(e)+this.important+(this.inline?"":";")},e.Rule.prototype.eval=function(t){return new e.Rule(this.name,this.value.eval(t),this.important,this.index,this.inline)},e.Rule.prototype.makeImportant=function(){return new e.Rule(this.name,this.value,"!important",this.index,this.inline)},e.Shorthand=function(e,t){this.a=e,this.b=t},e.Shorthand.prototype={toCSS:function(e){return this.a.toCSS(e)+"/"+this.b.toCSS(e)},eval:function(){return this}}}(n("../tree")),function(e){e.Ruleset=function(e,t,n){this.selectors=e,this.rules=t,this._lookups={},this.strictImports=n},e.Ruleset.prototype={eval:function(t){var n=this.selectors&&this.selectors.map(function(e){return e.eval(t)}),r=new e.Ruleset(n,this.rules.slice(0),this.strictImports),i;r.originalRuleset=this,r.root=this.root,r.allowImports=this.allowImports,this.debugInfo&&(r.debugInfo=this.debugInfo),t.frames.unshift(r),(r.root||r.allowImports||!r.strictImports)&&r.evalImports(t);for(var s=0;s<r.rules.length;s++)r.rules[s]instanceof e.mixin.Definition&&(r.rules[s].frames=t.frames.slice(0));var o=t.mediaBlocks&&t.mediaBlocks.length||0;for(var s=0;s<r.rules.length;s++)r.rules[s]instanceof e.mixin.Call&&(i=r.rules[s].eval(t),r.rules.splice.apply(r.rules,[s,1].concat(i)),s+=i.length-1,r.resetCache());for(var s=0,u;s<r.rules.length;s++)u=r.rules[s],u instanceof e.mixin.Definition||(r.rules[s]=u.eval?u.eval(t):u);t.frames.shift();if(t.mediaBlocks)for(var s=o;s<t.mediaBlocks.length;s++)t.mediaBlocks[s].bubbleSelectors(n);return r},evalImports:function(t){var n,r;for(n=0;n<this.rules.length;n++)this.rules[n]instanceof e.Import&&(r=this.rules[n].eval(t),typeof r.length=="number"?(this.rules.splice.apply(this.rules,[n,1].concat(r)),n+=r.length-1):this.rules.splice(n,1,r),this.resetCache())},makeImportant:function(){return new e.Ruleset(this.selectors,this.rules.map(function(e){return e.makeImportant?e.makeImportant():e}),this.strictImports)},matchArgs:function(e){return!e||e.length===0},resetCache:function(){this._rulesets=null,this._variables=null,this._lookups={}},variables:function(){return this._variables?this._variables:this._variables=this.rules.reduce(function(t,n){return n instanceof e.Rule&&n.variable===!0&&(t[n.name]=n),t},{})},variable:function(e){return this.variables()[e]},rulesets:function(){return this._rulesets?this._rulesets:this._rulesets=this.rules.filter(function(t){return t instanceof e.Ruleset||t instanceof e.mixin.Definition})},find:function(t,n){n=n||this;var r=[],i,s,o=t.toCSS();return o in this._lookups?this._lookups[o]:(this.rulesets().forEach(function(i){if(i!==n)for(var o=0;o<i.selectors.length;o++)if(s=t.match(i.selectors[o])){t.elements.length>i.selectors[o].elements.length?Array.prototype.push.apply(r,i.find(new e.Selector(t.elements.slice(1)),n)):r.push(i);break}}),this._lookups[o]=r)},toCSS:function(t,n){var r=[],i=[],s=[],o=[],u=[],a,f,l;this.root||this.joinSelectors(u,t,this.selectors);for(var c=0;c<this.rules.length;c++){l=this.rules[c];if(l.rules||l instanceof e.Media)o.push(l.toCSS(u,n));else if(l instanceof e.Directive){var h=l.toCSS(u,n);if(l.name==="@charset"){if(n.charset){l.debugInfo&&(o.push(e.debugInfo(n,l)),o.push((new e.Comment("/* "+h.replace(/\n/g,"")+" */\n")).toCSS(n)));continue}n.charset=!0}o.push(h)}else l instanceof e.Comment?l.silent||(this.root?o.push(l.toCSS(n)):i.push(l.toCSS(n))):l.toCSS&&!l.variable?i.push(l.toCSS(n)):l.value&&!l.variable&&i.push(l.value.toString())}o=o.join("");if(this.root)r.push(i.join(n.compress?"":"\n"));else if(i.length>0){f=e.debugInfo(n,this),a=u.map(function(e){return e.map(function(e){return e.toCSS(n)}).join("").trim()}).join(n.compress?",":",\n");for(var c=i.length-1;c>=0;c--)s.indexOf(i[c])===-1&&s.unshift(i[c]);i=s,r.push(f+a+(n.compress?"{":" {\n  ")+i.join(n.compress?"":"\n  ")+(n.compress?"}":"\n}\n"))}return r.push(o),r.join("")+(n.compress?"\n":"")},joinSelectors:function(e,t,n){for(var r=0;r<n.length;r++)this.joinSelector(e,t,n[r])},joinSelector:function(t,n,r){var i,s,o,u,a,f,l,c,h,p,d,v,m,g,y;for(i=0;i<r.elements.length;i++)f=r.elements[i],f.value==="&"&&(u=!0);if(!u){if(n.length>0)for(i=0;i<n.length;i++)t.push(n[i].concat(r));else t.push([r]);return}g=[],a=[[]];for(i=0;i<r.elements.length;i++){f=r.elements[i];if(f.value!=="&")g.push(f);else{y=[],g.length>0&&this.mergeElementsOnToSelectors(g,a);for(s=0;s<a.length;s++){l=a[s];if(n.length==0)l.length>0&&(l[0].elements=l[0].elements.slice(0),l[0].elements.push(new e.Element(f.combinator,"",0))),y.push(l);else for(o=0;o<n.length;o++)c=n[o],h=[],p=[],v=!0,l.length>0?(h=l.slice(0),m=h.pop(),d=new e.Selector(m.elements.slice(0)),v=!1):d=new e.Selector([]),c.length>1&&(p=p.concat(c.slice(1))),c.length>0&&(v=!1,d.elements.push(new e.Element(f.combinator,c[0].elements[0].value,0)),d.elements=d.elements.concat(c[0].elements.slice(1))),v||h.push(d),h=h.concat(p),y.push(h)}a=y,g=[]}}g.length>0&&this.mergeElementsOnToSelectors(g,a);for(i=0;i<a.length;i++)t.push(a[i])},mergeElementsOnToSelectors:function(t,n){var r,i;if(n.length==0){n.push([new e.Selector(t)]);return}for(r=0;r<n.length;r++)i=n[r],i.length>0?i[i.length-1]=new e.Selector(i[i.length-1].elements.concat(t)):i.push(new e.Selector(t))}}}(n("../tree")),function(e){e.Selector=function(e){this.elements=e},e.Selector.prototype.match=function(e){var t=this.elements,n=t.length,r,i,s,o;r=e.elements.slice(e.elements.length&&e.elements[0].value==="&"?1:0),i=r.length,s=Math.min(n,i);if(i===0||n<i)return!1;for(o=0;o<s;o++)if(t[o].value!==r[o].value)return!1;return!0},e.Selector.prototype.eval=function(t){return new e.Selector(this.elements.map(function(e){return e.eval(t)}))},e.Selector.prototype.toCSS=function(e){return this._css?this._css:(this.elements[0].combinator.value===""?this._css=" ":this._css="",this._css+=this.elements.map(function(t){return typeof t=="string"?" "+t.trim():t.toCSS(e)}).join(""),this._css)}}(n("../tree")),function(e){e.UnicodeDescriptor=function(e){this.value=e},e.UnicodeDescriptor.prototype={toCSS:function(e){return this.value},eval:function(){return this}}}(n("../tree")),function(e){e.URL=function(e,t){this.value=e,this.rootpath=t},e.URL.prototype={toCSS:function(){return"url("+this.value.toCSS()+")"},eval:function(t){var n=this.value.eval(t),r;return typeof n.value=="string"&&!/^(?:[a-z-]+:|\/)/.test(n.value)&&(r=this.rootpath,n.quote||(r=r.replace(/[\(\)'"\s]/g,function(e){return"\\"+e})),n.value=r+n.value),new e.URL(n,this.rootpath)}}}(n("../tree")),function(e){e.Value=function(e){this.value=e,this.is="value"},e.Value.prototype={eval:function(t){return this.value.length===1?this.value[0].eval(t):new e.Value(this.value.map(function(e){return e.eval(t)}))},toCSS:function(e){return this.value.map(function(t){return t.toCSS(e)}).join(e.compress?",":", ")}}}(n("../tree")),function(e){e.Variable=function(e,t,n){this.name=e,this.index=t,this.file=n},e.Variable.prototype={eval:function(t){var n,r,i=this.name;i.indexOf("@@")==0&&(i="@"+(new e.Variable(i.slice(1))).eval(t).value);if(this.evaluating)throw{type:"Name",message:"Recursive variable definition for "+i,filename:this.file,index:this.index};this.evaluating=!0;if(n=e.find(t.frames,function(e){if(r=e.variable(i))return r.value.eval(t)}))return this.evaluating=!1,n;throw{type:"Name",message:"variable "+i+" is undefined",filename:this.file,index:this.index}}}}(n("../tree")),function(e){e.debugInfo=function(t,n){var r="";if(t.dumpLineNumbers&&!t.compress)switch(t.dumpLineNumbers){case"comments":r=e.debugInfo.asComment(n);break;case"mediaquery":r=e.debugInfo.asMediaQuery(n);break;case"all":r=e.debugInfo.asComment(n)+e.debugInfo.asMediaQuery(n)}return r},e.debugInfo.asComment=function(e){return"/* line "+e.debugInfo.lineNumber+", "+e.debugInfo.fileName+" */\n"},e.debugInfo.asMediaQuery=function(e){return"@media -sass-debug-info{filename{font-family:"+("file://"+e.debugInfo.fileName).replace(/[\/:.]/g,"\\$&")+"}line{font-family:\\00003"+e.debugInfo.lineNumber+"}}\n"},e.find=function(e,t){for(var n=0,r;n<e.length;n++)if(r=t.call(e,e[n]))return r;return null},e.jsify=function(e){return Array.isArray(e.value)&&e.value.length>1?"["+e.value.map(function(e){return e.toCSS(!1)}).join(", ")+"]":e.toCSS(!1)}}(n("./tree"));var o=/^(file|chrome(-extension)?|resource|qrc|app):/.test(location.protocol);r.env=r.env||(location.hostname=="127.0.0.1"||location.hostname=="0.0.0.0"||location.hostname=="localhost"||location.port.length>0||o?"development":"production"),r.async=r.async||!1,r.fileAsync=r.fileAsync||!1,r.poll=r.poll||(o?1e3:1500);if(r.functions)for(var u in r.functions)r.tree.functions[u]=r.functions[u];var a=/!dumpLineNumbers:(comments|mediaquery|all)/.exec(location.hash);a&&(r.dumpLineNumbers=a[1]),r.watch=function(){return r.watchMode||(r.env="development",f()),this.watchMode=!0},r.unwatch=function(){return clearInterval(r.watchTimer),this.watchMode=!1},/!watch/.test(location.hash)&&r.watch();var l=null;if(r.env!="development")try{l=typeof e.localStorage=="undefined"?null:e.localStorage}catch(c){}var h=document.getElementsByTagName("link"),p=/^text\/(x-)?less$/;r.sheets=[];for(var d=0;d<h.length;d++)(h[d].rel==="stylesheet/less"||h[d].rel.match(/stylesheet/)&&h[d].type.match(p))&&r.sheets.push(h[d]);var v="";r.modifyVars=function(e){var t=v;for(name in e)t+=(name.slice(0,1)==="@"?"":"@")+name+": "+(e[name].slice(-1)===";"?e[name]:e[name]+";");(new r.Parser).parse(t,function(e,t){S(t.toCSS(),r.sheets[r.sheets.length-1])})},r.refresh=function(e){var t,n;t=n=new Date,g(function(e,r,i,s,o){o.local?C("loading "+s.href+" from cache."):(C("parsed "+s.href+" successfully."),S(r.toCSS(),s,o.lastModified)),C("css for "+s.href+" generated in "+(new Date-n)+"ms"),o.remaining===0&&C("css generated in "+(new Date-t)+"ms"),n=new Date},e),m()},r.refreshStyles=m,r.refresh(r.env==="development"),typeof define=="function"&&define.amd&&define("less",[],function(){return r})})(window);
(function() {
  var $, DEBUG, ScriptArea, TextAreaManager,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
    __slice = [].slice;

  $ = jQuery;

  DEBUG = false;

  ScriptArea = (function() {
    function ScriptArea(tam, name, speaker, settings) {
      var containers,
        _this = this;
      this.tam = tam;
      this.name = name;
      this.speaker = speaker;
      this.adjustSelection = __bind(this.adjustSelection, this);
      if (settings == null) {
        settings = {};
      }
      this.locked = "locked" in settings ? settings.locked : false;
      this.el = $("<div>\n<div class=\"emContainerTAM\">\n    <div class=\"emphasisTAM\"></div>\n</div>\n<div class=\"hlContainerTAM\">\n    <div class=\"highlightsTAM\"></div>\n</div>\n<div class=\"taContainerTAM\">\n    <textarea class=\"txtAreaTAM\" name=\"area" + name + "\"></textarea>\n</div>\n<div class=\"overlayContainerTAM\">\n    <div class=\"overlaysTAM\"></div>\n</div>\n</div>");
      this.hlContainer = this.el.find('.hlContainerTAM');
      this.highlights = this.el.find('.highlightsTAM');
      this.emContainer = this.el.find('.emContainerTAM');
      this.emphasis = this.el.find('.emphasisTAM');
      this.overlayContainer = this.el.find('.overlayContainerTAM');
      this.overlays = this.el.find('.overlaysTAM');
      this.taContainer = this.el.find('.taContainerTAM');
      this.area = this.el.find(".txtAreaTAM");
      containers = [this.area, this.hlContainer, this.highlights, this.emContainer, this.emphasis, this.overlayContainer, this.overlays, this.taContainer];
      this.$containers = $(_.map(containers, function(c) {
        return c[0];
      }));
      this.area.bind('copy', function(e) {
        return _this.tam.processCopy(_this);
      }).bind('cut', function(e) {
        console.log("Cut not supported at this time");
        e.preventDefault();
        return false;
        return _this.tam.processCut(_this);
      }).bind('paste', function(e) {
        if (_this.locked) {
          return e.preventDefault();
        } else {
          return _this.tam.processPaste(_this, _this.area.val());
        }
      }).keypress(function(e) {
        if (e.which >= 32) {
          e.preventDefault;
        }
        return false;
      }).keydown(function(e) {
        var tai;
        switch (e.which) {
          case 8:
            e.preventDefault();
            if (!_this.locked) {
              _this.tam.processDelete(_this, "backward");
            }
            return false;
          case 46:
            e.preventDefault();
            if (!_this.locked) {
              _this.tam.processDelete(_this, "forward");
            }
            return false;
          case 37:
          case 38:
          case 39:
          case 40:
            if (e.shiftKey) {
              return _.defer(_this.snapSelectionToWord);
            }
            break;
          case 13:
            "reauthor";
            return e.preventDefault();
          case 90:
            return false;
          case 190:
            e.preventDefault();
            if (!_this.locked) {
              return _this.addPeriod();
            }
            break;
          case 69:
            e.preventDefault();
            return _this.insertEmphasisPoint();
          case 87:
            tai = _this.tam.tas.indexOf(_this);
            if (tai > 0) {
              _this.tam.tas[tai - 1].area.setSelection(0);
              _this.tam.lastFocused = _this.tam.tas[tai - 1];
              _this.tam.container.stop().scrollTo($(_this.tam.tas[tai - 1].area), 200, {
                offset: -200
              });
            }
            return e.preventDefault();
          case 83:
            tai = _this.tam.tas.indexOf(_this);
            if (tai + 1 < _this.tam.tas.length) {
              _this.tam.tas[tai + 1].area.setSelection(0);
              _this.tam.lastFocused = _this.tam.tas[tai + 1];
              _this.tam.container.stop().scrollTo($(_this.tam.tas[tai + 1].area), 200, {
                offset: -200
              });
            }
            return e.preventDefault();
        }
      }).bind('mousemove', function() {}).bind('mouseup', this.adjustSelection);
      this.overlays.bind('mouseup', this.adjustSelection);
    }

    ScriptArea.prototype.adjustSelection = function() {
      var endInd, sel, startInd, _ref;
      this.tam.lastFocused = this;
      this.snapSelectionToWord();
      sel = this.area.getSelection();
      _ref = this.rangeIndices(sel.start, sel.end), startInd = _ref[0], endInd = _ref[1];
      return this.tam.highlightWordsInWaveform(startInd, endInd, this);
    };

    ScriptArea.prototype._renderWord = function(word, isTextArea, wrapLeft, wrapRight) {
      var ending, quoteEnd, _ref;
      if (wrapLeft == null) {
        wrapLeft = "";
      }
      if (wrapRight == null) {
        wrapRight = "";
      }
      ending = ['.', '?', '!'];
      quoteEnd = '."';
      if ((_ref = word.word[word.word.length - 1], __indexOf.call(ending, _ref) >= 0) || word.word.slice(-2) === quoteEnd) {
        if (isTextArea) {
          return "" + wrapLeft + word.word + wrapRight + "\n";
        }
        return "" + wrapLeft + word.word + wrapRight + "<br />";
      }
      return "" + wrapLeft + word.word + wrapRight + " ";
    };

    ScriptArea.prototype.updateWords = function(words) {
      var badWords, content, rw,
        _this = this;
      if (DEBUG) {
        console.log("UPDATE WORDS");
      }
      if (words) {
        this.words = words;
      }
      rw = this._renderWord;
      badWords = ["UH", "UM", "AH"];
      content = _.reduce(this.words, (function(memo, word) {
        var _ref;
        if (_ref = word.alignedWord, __indexOf.call(badWords, _ref) >= 0) {
          word.emph = true;
        }
        return "" + memo + (rw(word, true));
      }), "");
      this.val(content);
      this.tam.dirtyTas.push(this);
      this.refresh();
      return _.defer(function() {
        if (_this.words.length === 0 && _this.tam.tas.length !== 1) {
          return _this.tam.removeTA(_this);
        }
      });
    };

    ScriptArea.prototype.height = function() {
      return this.area.height();
    };

    ScriptArea.prototype.val = function(str) {
      return this.area.val(str);
    };

    ScriptArea.prototype.refresh = function() {
      if (DEBUG) {
        console.log("SA REFRESH");
      }
      this.updatePos();
      return this.adjustHeight();
    };

    ScriptArea.prototype.adjustHeight = function() {
      var scrHeight;
      if (DEBUG) {
        console.log("ADJUST HEIGHT OF", this);
      }
      this.area.height("20px");
      scrHeight = this.area.prop("scrollHeight") + 'px';
      this.$containers.height(scrHeight);
      return scrHeight;
    };

    ScriptArea.prototype.snapSelectionToWord = function() {
      var doneEnd, doneStart, oldLen, sel, spaces, text, _ref, _ref1, _ref2, _ref3;
      sel = this.area.getSelection();
      console.log(sel);
      doneEnd = false;
      doneStart = false;
      if (sel.length === 0) {
        return;
      }
      if (/^\s+$/.exec(sel.text)) {
        this.area.collapseSelection();
      }
      text = this.area.val();
      spaces = [" ", "\n"];
      if (sel.length > 0) {
        while (_ref = text.charAt(sel.start), __indexOf.call(spaces, _ref) >= 0) {
          doneStart = true;
          if (sel.start + 1 < sel.end) {
            this.area.setSelection(sel.start + 1, sel.end);
            sel = this.area.getSelection();
          } else {
            break;
          }
        }
        while ((_ref1 = text.charAt(sel.start - 1), __indexOf.call(spaces, _ref1) < 0) && text.charAt(sel.start - 1) !== "" && oldLen !== sel.length && !doneStart) {
          oldLen = sel.length;
          this.area.setSelection(sel.start - 1, sel.end);
          sel = this.area.getSelection();
        }
        while (_ref2 = text.charAt(sel.end - 1), __indexOf.call(spaces, _ref2) >= 0) {
          doneEnd = true;
          if (sel.start < sel.end - 1) {
            this.area.setSelection(sel.start, sel.end - 1);
            sel = this.area.getSelection();
          } else {
            break;
          }
        }
        while ((_ref3 = text.charAt(sel.end), __indexOf.call(spaces, _ref3) < 0) && text.charAt(sel.end) !== '' && oldLen !== sel.length && !doneEnd) {
          oldLen = sel.length;
          this.area.setSelection(sel.start, sel.end + 1);
          sel = this.area.getSelection();
        }
      }
      return console.log("end of snap", sel);
    };

    ScriptArea.prototype.insertEmphasisPoint = function() {
      var sel, word;
      TAAPP.use("addEmphasisPoint");
      this.selectWord("backward");
      sel = this.area.getSelection();
      this.area.setSelection(sel.end);
      word = this.range(sel.start, sel.end)[0];
      word.emphasisPoint = true;
      this.tam.dirtyTas.push(this);
      return this.tam.refresh();
    };

    ScriptArea.prototype.selectWord = function(direction) {
      var other, spaces, start, text, _ref, _ref1;
      if (direction == null) {
        direction = "backward";
      }
      start = this.area.getSelection().start;
      text = this.area.val();
      spaces = [" ", "\n"];
      if (direction === "backward") {
        other = start - 1;
        while ((_ref = text.charAt(other), __indexOf.call(spaces, _ref) >= 0) && text.charAt(other) !== '') {
          other -= 1;
        }
        this.area.setSelection(other, start);
      } else if (direction === "forward") {
        other = start + 2;
        while ((_ref1 = text.charAt(other), __indexOf.call(spaces, _ref1) >= 0) && text.charAt(other) !== '') {
          other += 1;
        }
        this.area.setSelection(start, other);
      }
      return this.snapSelectionToWord();
    };

    ScriptArea.prototype.updatePos = function() {
      var name;
      name = this.name;
      return _.each(this.words, (function(elt, i, words) {
        words[i].taPos = this.total;
        words[i].taIdx = name;
        return this.total += elt.word.length + 1;
      }), {
        "total": 0
      });
    };

    ScriptArea.prototype.rangeIndices = function(start, end) {
      var endInd, i, startInd, w, _i, _j, _len, _len1, _ref, _ref1;
      _ref = this.words;
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        w = _ref[i];
        if (w.taPos >= start) {
          startInd = i;
          break;
        }
      }
      _ref1 = this.words;
      for (i = _j = 0, _len1 = _ref1.length; _j < _len1; i = ++_j) {
        w = _ref1[i];
        if (w.taPos < end) {
          endInd = i;
        }
      }
      return [startInd, endInd];
    };

    ScriptArea.prototype.range = function(start, end) {
      var first, i, word, _i, _len, _ref;
      if (end == null) {
        _ref = this.words;
        for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
          word = _ref[i];
          if (word.taPos >= start) {
            first = word.taPos;
            break;
          }
        }
        return [first, i];
      }
      return _.filter(this.words, function(word) {
        return word.taPos >= start && word.taPos < end;
      });
    };

    ScriptArea.prototype.addPeriod = function() {
      var addInds, breath, breathInds, gp1, gp2, i, range, sel, topBreaths,
        _this = this;
      TAAPP.use("addPeriod");
      console.log("Adding a period");
      sel = this.area.getSelection();
      range = this.range(sel.end);
      if (range[1] === 0) {
        return;
      }
      i = range[1] - 1;
      console.log("adding period to word", this.words[i]);
      if (__indexOf.call(this.words[i].word, '.') < 0) {
        this.words[i].word += '.';
      }
      breathInds = this.tam.breathInds[this.speaker];
      topBreaths = _.sortBy(breathInds, function(bi) {
        return -_this.tam.words[bi].likelihood;
      });
      breath = topBreaths[Math.floor(Math.random() * topBreaths.length)];
      addInds = [breath];
      if (TAAPP.roomTone != null) {
        gp1 = '{gp-0.02}';
        gp2 = '{gp-0.05}';
        addInds = [gp1, breath, gp2];
      }
      return this.tam.insertWords(addInds, range.end, this);
    };

    ScriptArea.prototype.highlightWords = function(start, end) {
      var hlHTML, rw;
      rw = this._renderWord;
      hlHTML = _.reduce(this.words, (function(memo, word, idx) {
        var wrapLeft, wrapRight;
        wrapLeft = "";
        wrapRight = "";
        if (idx === start && (idx === end - 1 || (end == null))) {
          wrapLeft = "<span class='hl'>";
          wrapRight = "</span>";
        } else if (idx === start) {
          wrapLeft = "<span class='hl'>";
        } else if (idx === end - 1) {
          wrapRight = "</span>";
        }
        return "" + memo + (rw(word, false, wrapLeft, wrapRight));
      }), "");
      return this.highlights.html(hlHTML);
    };

    ScriptArea.prototype.emphasizeWords = function() {
      var ctx, emphHTML, rw,
        _this = this;
      ctx = [-1];
      rw = this._renderWord;
      emphHTML = _.reduce(this.words, (function(memo, word, idx) {
        var wrapLeft, wrapRight, _ref, _ref1;
        wrapLeft = "";
        wrapRight = "";
        if ((word.origPos != null) && word.origPos - 1 !== _this[0]) {
          wrapLeft += "<span class='editLocation'>";
          wrapRight += "</span>";
        }
        if ((word.emph != null) && word.emph) {
          wrapLeft += "<span class='emph'>";
          wrapRight += "</span>";
        }
        if ((word.emphasisPoint != null) && word.emphasisPoint) {
          wrapLeft += "<span class='ePt'>";
          wrapRight += "</span>";
        }
        if (word.alignedWord === "sp" || word.alignedWord === "gp") {
          wrapLeft += "<span class='pause'>";
          wrapRight += "</span>";
        } else if (word.alignedWord === "{BR}") {
          wrapLeft += "<span class='breath'>";
          wrapRight += "</span>";
        } else if (word.alignedWord === ((_ref = _this.words[idx - 1]) != null ? _ref.alignedWord : void 0) || ((_ref1 = _this.words[idx + 1]) != null ? _ref1.alignedWord : void 0) === word.alignedWord) {
          wrapLeft += "<span class='repeatedWord'>";
          wrapRight += "</span>";
        }
        _this[0] = word.origPos;
        return "" + memo + (rw(word, false, wrapLeft, wrapRight));
      }), "", ctx);
      return this.emphasis.html(emphHTML);
    };

    ScriptArea.prototype.insertDupeOverlays = function(dupes, dupeInfo) {
      var box, boxHTML, context, dupeDropdownWrapLeft, dupeDropdownWrapRight, dupeOrder, dupeStarts, dupeStartsFirsts, locked, offset, rw, self, taWidth;
      if (DEBUG) {
        console.log("SA INSERT DUPE OVERLAYS", this);
      }
      box = this.overlays;
      context = {
        dupeOrder: [],
        bounds: []
      };
      dupeOrder = [];
      dupeStartsFirsts = dupeInfo.firsts;
      dupeStarts = dupeInfo.starts;
      offset = this.tam.taIndexSpan[this.tam.tas.indexOf(this)];
      dupeDropdownWrapLeft = "<span class=\"dropdown overlay\">\n    <span class=\"dropdown-toggle\">";
      dupeDropdownWrapRight = "    </span>\n    <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dLabel\">\n        <li class=\"disabled\"><a><%= header %></a></li>\n        <% _.each(dupes[dupeIdx], function (elt) { %>\n            <li><span \n                   class=\"dupeOpt\"\n                   tabindex=\"-1\">\n                   <i class=\"icon-play dupePlayButton\"></i>\n                   <div style=\"position:relative; display:inline-block\">\n                   <span class=\"copyButton\"><%= elt[1] %></span>\n                   </div>\n                </span>\n            </li>\n        <% }) %>\n    </ul>\n</span>";
      rw = this._renderWord;
      locked = this.locked;
      boxHTML = _.reduce(this.words, (function(memo, word, idx, words) {
        var allIdx, d, dupeIdx, header, sentenceEnd, wrapLeft, wrapRight;
        dupeIdx = dupeStartsFirsts.indexOf(word.origPos);
        wrapLeft = "";
        wrapRight = "";
        if (dupeIdx !== -1) {
          sentenceEnd = idx;
          d = dupeStarts[dupeIdx];
          allIdx = d.idxInDupes;
          while (sentenceEnd < words.length && words[sentenceEnd].origPos >= d.dElt[0][0] && words[sentenceEnd].origPos <= d.dElt[0][1]) {
            sentenceEnd += 1;
          }
          this.dupeOrder.push(allIdx);
          this.bounds.push([idx, sentenceEnd - 1]);
          wrapLeft = dupeDropdownWrapLeft;
          header = locked ? "Similar sentences (click to copy)" : "Similar sentences";
          wrapRight = _.template(dupeDropdownWrapRight, {
            header: header,
            dupeIdx: allIdx,
            dupes: dupes
          });
        }
        if (word.alignedWord === "sp" || word.alignedWord === "gp") {
          wrapLeft += "<span class='pauseOverlay'>";
          wrapRight += "</span>";
        }
        if (word.alignedWord === "{BR}") {
          wrapLeft += "<span class='breathOverlay'>";
          wrapRight += "</span>";
        }
        return "" + memo + (rw(word, false, wrapLeft, wrapRight));
      }), "", context);
      box.html(boxHTML);
      self = this;
      taWidth = this.area.width();
      this.area.unbind('.tam').bind('click.tam', function() {
        console.log("clicked on the box");
        return $('.dropdown.open').removeClass('open');
      });
      return box.find('.dropdown-toggle').dropdown().each(function(i) {
        var dupe, eltPos, end, pos, start;
        pos = $(this).offset();
        eltPos = self.area.offset();
        dupe = dupes[context.dupeOrder[i]];
        start = context.bounds[i][0];
        end = context.bounds[i][1];
        return $(this).click(function() {
          TAAPP.use("viewSimilarSentences");
          console.log("start", start, "end", end);
          return self.area.setSelection(self.words[start].taPos, self.words[end].taPos + self.words[end].word.length);
        }).next('.dropdown-menu').css({
          left: "" + (-pos.left + eltPos.left + 10) + "px",
          width: "" + (taWidth - 20) + "px"
        }).find('span.dupeOpt').each(function(j) {
          var indices, _i, _ref, _ref1, _results;
          if (locked) {
            $(this).closest('.dropdown').addClass('open');
            "zero clipboard is obnoxious for now";
            indices = (function() {
              _results = [];
              for (var _i = _ref = dupe[j][0][0], _ref1 = dupe[j][0][1]; _ref <= _ref1 ? _i <= _ref1 : _i >= _ref1; _ref <= _ref1 ? _i++ : _i--){ _results.push(_i); }
              return _results;
            }).apply(this);
            $(this).find('.copyButton').attr("data-clipboard-text", self.tam.generateCopyTextFromIndices(indices)).zclip({
              path: "static/swf/ZeroClipboard.swf",
              copy: self.tam.generateCopyTextFromIndices(indices),
              afterCopy: (function() {
                self.area.focus();
                console.log("COPPY", $(this).closest('.dropdown'));
                return $(this).closest('.dropdown').removeClass('open');
              })
            });
            $(this).find('.zclip').css({
              top: "-4px"
            });
            $(this).closest('.dropdown').removeClass('open');
          } else {
            $(this).click(function(event) {
              var newPos;
              TAAPP.use("replaceSentence");
              newPos = self.replaceWords(start, end, dupe[j][0][0], dupe[j][0][1]);
              self.area.setSelection(newPos[0], newPos[1]);
              return false;
            });
          }
          return $(this).find('.dupePlayButton').click(function(event) {
            var audioend, audiostart;
            TAAPP.use("playSimilarSentence");
            audiostart = self.tam.words[dupe[j][0][0]].start;
            audioend = self.tam.words[dupe[j][0][1]].end;
            TAAPP.origSound.play({
              from: audiostart * 1000.0,
              to: audioend * 1000.0,
              onstop: function() {
                if ($(this).closest('.dropdown').hasClass('open')) {
                  return self.area.focus();
                }
              }
            });
            return event.stopPropagation();
          });
        });
      });
    };

    ScriptArea.prototype.replaceWords = function(c1, c2, w1, w2) {
      return this.tam.replaceWords(c1, c2, w1, w2, this, this.words[c1].taPos);
    };

    return ScriptArea;

  })();

  TextAreaManager = (function() {
    function TextAreaManager(el, speakers, words, current, settings) {
      var speaker, tr, _i, _len, _ref,
        _this = this;
      this.el = el;
      this.speakers = speakers;
      this.words = words;
      this.current = current;
      if (settings == null) {
        settings = {};
      }
      this.locked = "locked" in settings ? settings.locked : false;
      this.textAlignedWfs = "wfs" in settings ? settings.wfs : null;
      this.headerTable = $(document.createElement('table')).attr("width", "100%").appendTo(this.el);
      this.container = $(document.createElement('div')).css({
        "overflow-x": "hidden",
        "overflow-y": "auto"
      }).appendTo(this.el);
      this.table = $(document.createElement('table')).attr("width", "100%").appendTo(this.container);
      tr = $(document.createElement('tr')).appendTo(this.headerTable);
      _.each(this.speakers, function(speaker) {
        var th;
        th = document.createElement('th');
        return $(th).html(speaker).width("" + (100 / _this.speakers.length) + "%").appendTo(tr);
      });
      this.tas = [];
      this.taIndexSpan = [];
      this.areas = [];
      this.dirtyTas = [];
      this.draw();
      this.breathInds = {};
      _ref = this.speakers;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        speaker = _ref[_i];
        this.breathInds[speaker] = [];
      }
      _.each(this.words, function(word, i, cur) {
        var j;
        if (word.alignedWord === "{BR}") {
          j = i;
          while (j < _this.words.length) {
            if (!("speaker" in _this.words[j])) {
              j++;
            } else {
              break;
            }
          }
          if (j === _this.words.length) {
            return;
          }
          if ("speaker" in _this.words[j]) {
            return _this.breathInds[_this.words[j].speaker].push(i);
          }
        }
      });
      this.el.scrollTo(0);
    }

    TextAreaManager.prototype._tr = function(index) {
      var tr;
      tr = $(document.createElement('tr'));
      _.each(this.speakers, function(speaker) {
        var td;
        td = $(document.createElement('td'));
        return tr.append(td);
      });
      tr.find("td").width("" + (100 / this.speakers.length) + "%");
      if (index != null) {
        if (index === 0) {
          tr.prependTo(this.table);
        } else {
          tr.insertAfter(this.table.find('tr').eq(index - 1));
        }
      } else {
        tr.appendTo(this.table);
      }
      return tr;
    };

    TextAreaManager.prototype._newScriptArea = function(name, speaker, index) {
      var ta;
      ta = new ScriptArea(this, name, speaker, {
        locked: this.locked
      });
      if (index != null) {
        this.tas.splice(index, 0, ta);
        this.areas.splice(index, 0, ta.area);
      } else {
        this.tas.push(ta);
        this.areas.push(ta.area);
      }
      return ta.el;
    };

    TextAreaManager.prototype.refresh = function() {
      var i, ta, _i, _len, _ref;
      if (DEBUG) {
        console.log("TAM REFRESH");
      }
      this.dirtyTas = _.uniq(this.dirtyTas);
      _ref = this.tas;
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        ta = _ref[i];
        ta.name = i;
      }
      this.updatePos();
      this.adjustHeight();
      this.emphasizeWords();
      this.insertDupeOverlays(this.dupes, this.dupeInfo);
      if (this.textAlignedWfs != null) {
        $(_.values(this.textAlignedWfs)).textAlignedWaveform({
          currentWords: this.current
        });
      }
      return this.dirtyTas = [];
    };

    TextAreaManager.prototype.adjustHeight = function(forceAll) {
      var height, ta, taSet, _i, _len;
      if (DEBUG) {
        console.log("ADJUST HEIGHT OF TAM");
      }
      if (forceAll == null) {
        forceAll = false;
      }
      taSet = forceAll ? this.tas : this.dirtyTas;
      for (_i = 0, _len = taSet.length; _i < _len; _i++) {
        ta = taSet[_i];
        height = ta.adjustHeight();
        ta.el.closest('tr').height(height);
      }
      console.log("container height", window.innerHeight - this.el.offset().top - 50);
      this.container.height(window.innerHeight - this.el.offset().top - 50);
      console.log("el height", window.innerHeight - this.el.offset().top - 50);
      return this.el.height(window.innerHeight - this.el.offset().top - 50);
    };

    TextAreaManager.prototype.draw = function() {
      var count, lastSpeaker,
        _this = this;
      this.table.find("tr").remove();
      lastSpeaker = this.speakers[0];
      count = 0;
      this.taIndexSpan = [0];
      _.each(this.current, function(word, i) {
        var col, tr;
        if (i === 0) {
          col = 0;
          tr = _this._tr();
          return tr.find("td").eq(col).append(_this._newScriptArea(count++, lastSpeaker));
        } else if ((word.speaker != null) && word.speaker !== lastSpeaker) {
          _this.taIndexSpan.push(i);
          col = _this.speakers.indexOf(word.speaker);
          tr = _this._tr();
          tr.find("td").eq(col).append(_this._newScriptArea(count++, word.speaker));
          return lastSpeaker = word.speaker;
        }
      });
      _.each(this.taIndexSpan, function(start, i) {
        var words;
        if (i === _this.taIndexSpan.length - 1) {
          words = _this.current.slice(start);
        } else {
          words = _this.current.slice(start, _this.taIndexSpan[i + 1]);
        }
        return _this.tas[i].updateWords(words);
      });
      this.dirtyTas = this.tas.slice(0);
      this.refresh();
      return this.lastFocused = this.tas[0];
    };

    TextAreaManager.prototype.pruneByTAPos = function(start, end, ta) {
      var match;
      if (DEBUG) {
        console.log("PRUNE BY TA POS");
      }
      match = [];
      _.each(ta.words, function(word, idx) {
        if (word.taPos >= start && word.taPos < end) {
          return match.push(idx);
        }
      });
      console.log("prune by TA", match[0], _.last(match));
      return this.pruneByTAIndex(match[0], _.last(match) + 1, ta);
    };

    TextAreaManager.prototype.pruneByTAIndex = function(start, end, ta, refresh) {
      var offset, taIndex;
      if (DEBUG) {
        console.log("PRUNE BY TA INDEX");
      }
      if (refresh == null) {
        refresh = true;
      }
      taIndex = this.tas.indexOf(ta);
      offset = this.taIndexSpan[taIndex];
      return this.pruneCurrent(start + offset, end + offset, refresh);
    };

    TextAreaManager.prototype.pruneCurrent = function(start, end, refresh) {
      var cutWords, i, ta, taIndex, txtarea, _i, _len, _ref;
      if (DEBUG) {
        console.log("PRUNE CURRENT");
      }
      if (refresh == null) {
        refresh = true;
      }
      cutWords = this.current.splice(start, end - start);
      console.log("start", start, "end", end, "cutwords", cutWords);
      taIndex = cutWords[0].taIdx;
      ta = this.tas[taIndex];
      console.log("taIndex", taIndex, "ta", ta);
      _ref = this.tas;
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        txtarea = _ref[i];
        if (i > taIndex) {
          this.taIndexSpan[i] -= end - start;
        }
      }
      if (taIndex === this.tas.length - 1) {
        ta.updateWords(this.current.slice(this.taIndexSpan[taIndex]));
      } else {
        console.log("Prune current, updating ta with words", this.taIndexSpan[taIndex], this.taIndexSpan[taIndex + 1] - 1);
        ta.updateWords(this.current.slice(this.taIndexSpan[taIndex], this.taIndexSpan[taIndex + 1]));
      }
      if (refresh) {
        return this.refresh();
      }
    };

    TextAreaManager.prototype.pruneAll = function() {
      var ta, _i, _len, _ref;
      _ref = this.tas;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        ta = _ref[_i];
        ta.updateWords([]);
      }
      this.current.splice(0, this.current.length);
      return this.refresh();
    };

    TextAreaManager.prototype.highlightWordsInWaveform = function(start, end, ta) {
      var offset, speaker, _i, _len, _ref, _ref1, _ref2, _results;
      if (this.textAlignedWfs != null) {
        offset = this.taIndexSpan[this.tas.indexOf(ta)];
        if (((_ref = this.highlightedWordsRange) != null ? _ref[0] : void 0) !== offset + start || ((_ref1 = this.highlightedWordsRange) != null ? _ref1[1] : void 0) !== offset + end) {
          this.highlightedWordsRange = [offset + start, offset + end];
          $(this.textAlignedWfs[ta.speaker]).textAlignedWaveform({
            highlightedWordsRange: this.highlightedWordsRange
          });
          _ref2 = this.speakers;
          _results = [];
          for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
            speaker = _ref2[_i];
            if (speaker !== ta.speaker) {
              _results.push($(this.textAlignedWfs[speaker]).textAlignedWaveform({
                highlightedWordsRange: void 0
              }));
            } else {
              _results.push(void 0);
            }
          }
          return _results;
        }
      }
    };

    TextAreaManager.prototype.highlightWords = function(start, end) {
      var i, newEnd, offset, t, ta, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2, _ref3, _ref4;
      if (start === -1) {
        this.currentHighlight = void 0;
        _ref = this.tas;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          ta = _ref[_i];
          ta.highlights.html("");
        }
        return;
      }
      if (((_ref1 = this.currentHighlight) != null ? _ref1[0] : void 0) > start && ((_ref2 = this.currentHighlight) != null ? _ref2[0] : void 0) < start + 3) {
        return;
      }
      this.currentHighlight = [start, end];
      _ref3 = this.tas;
      for (i = _j = 0, _len1 = _ref3.length; _j < _len1; i = ++_j) {
        ta = _ref3[i];
        if (this.taIndexSpan[i] > start) {
          break;
        }
      }
      if (i !== 0) {
        ta = this.tas[i - 1];
        offset = this.taIndexSpan[i - 1];
      } else {
        ta = this.tas[0];
        offset = this.taIndexSpan[0];
      }
      _ref4 = this.tas;
      for (_k = 0, _len2 = _ref4.length; _k < _len2; _k++) {
        t = _ref4[_k];
        t.highlights.html("");
      }
      if (end != null) {
        newEnd = end - offset;
      }
      return ta.highlightWords(start - offset, newEnd);
    };

    TextAreaManager.prototype.emphasizeWords = function() {
      var ta, _i, _len, _ref, _results;
      _ref = this.dirtyTas;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        ta = _ref[_i];
        _results.push(ta.emphasizeWords());
      }
      return _results;
    };

    TextAreaManager.prototype.updatePos = function() {
      var count, i, ta, _i, _j, _len, _len1, _ref, _ref1, _results;
      this.highlightWords(-1);
      count = 0;
      this.taIndexSpan = [];
      _ref = this.tas;
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        ta = _ref[i];
        ta.name = i;
        this.taIndexSpan.push(count);
        count += ta.words.length;
      }
      _ref1 = this.dirtyTas;
      _results = [];
      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
        ta = _ref1[_j];
        _results.push(ta.updatePos());
      }
      return _results;
    };

    TextAreaManager.prototype.clean = function(ta) {
      var col, i, lastSpeaker, nextTa, offset, pattern, prevTa, segments, speakers, tai, tr, word, words, _i, _len, _ref;
      tai = this.tas.indexOf(ta);
      offset = this.taIndexSpan[tai];
      segments = [];
      pattern = [];
      speakers = [];
      _ref = ta.words;
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        word = _ref[i];
        if ((word.speaker != null) && word.speaker !== lastSpeaker) {
          segments.push(i);
          speakers.push(word.speaker);
          pattern.push(word.speaker === ta.speaker);
          lastSpeaker = word.speaker;
        }
      }
      if (pattern.length === 1 && pattern[0]) {
        this.refresh();
        return;
      }
      if (pattern.length === 1 && !pattern[0]) {
        words = ta.words.slice(0);
        col = this.speakers.indexOf(lastSpeaker);
        ta.speaker = lastSpeaker;
        ta.el.closest('tr').find('td').eq(col).append(ta.el);
        this.refresh();
        return;
      }
      if (pattern.length === 2 && pattern[0]) {
        words = ta.words.slice(segments[1]);
        if (tai === this.tas.length - 1) {
          console.log("New row");
          col = this.speakers.indexOf(speakers[1]);
          tr = this._tr(tai + 1);
          tr.find("td").eq(col).append(this._newScriptArea(this.tas.length, speakers[1], tai + 1));
          ta.updateWords(ta.words.slice(0, segments[1]));
          this.tas[this.tas.length - 1].updateWords(words);
          this.tas[this.tas.length - 1].area.setSelection(0, 0);
          this.refresh();
        } else if (this.tas[tai + 1].speaker === speakers[1]) {
          console.log("Inserting in next row");
          console.log(this.tas, tai);
          nextTa = this.tas[tai + 1];
          ta.updateWords(ta.words.slice(0, segments[1]));
          nextTa.updateWords(words.concat(nextTa.words));
          nextTa.area.setSelection(0, 0);
          this.refresh();
        } else {
          window.alert("should not get here (right wrong pattern)");
        }
        console.log("CLEAN: @tas", this.tas, "taIndexSpan", this.taIndexSpan);
        return;
      }
      if (pattern.length === 2 && pattern[1]) {
        words = ta.words.slice(0, segments[1]);
        if (tai === 0) {
          console.log("New row (wrong right)");
          col = this.speakers.indexOf(speakers[0]);
          tr = this._tr(0);
          tr.find("td").eq(col).append(this._newScriptArea(this.tas.length, speakers[0], 0));
          ta.updateWords(ta.words.slice(segments[1]));
          this.tas[0].updateWords(words);
        } else if (this.tas[tai - 1].speaker === speakers[0]) {
          prevTa = this.tas[tai - 1];
          ta.updateWords(ta.words.slice(segments[1]));
          prevTa.updateWords(prevTa.words.concat(words));
        } else {
          window.alert("should not get here (wrong right pattern)");
        }
        ta.area.setSelection(0, 0);
        this.refresh();
        return;
      }
      if (pattern.length === 3) {
        words = ta.words.slice(0);
        col = this.speakers.indexOf(speakers[1]);
        tr = this._tr(tai + 1);
        tr.find("td").eq(col).append(this._newScriptArea(this.tas.length, speakers[1], tai + 1));
        col = this.speakers.indexOf(speakers[2]);
        tr = this._tr(tai + 2);
        tr.find("td").eq(col).append(this._newScriptArea(this.tas.length, speakers[2], tai + 2));
        ta.updateWords(words.slice(0, segments[1]));
        this.tas[tai + 1].updateWords(words.slice(segments[1], segments[2]));
        this.tas[tai + 2].updateWords(words.slice(segments[2]));
        this.refresh();
        this.tas[tai + 1].area.setSelection(0, 0);
      }
    };

    TextAreaManager.prototype.processDelete = function(ta, direction) {
      var end, sel, spaces, text, _ref;
      TAAPP.use("delete");
      if (DEBUG) {
        console.log("PROCESSDELETE");
      }
      if (window.TAAPP.sound) {
        window.TAAPP.sound.stop();
      }
      ta.snapSelectionToWord();
      sel = ta.area.getSelection();
      if (sel.length === 0) {
        ta.selectWord(direction, true);
      }
      sel = ta.area.getSelection();
      end = sel.end;
      text = ta.area.val();
      spaces = [" ", "\n"];
      while (_ref = text.charAt(end), __indexOf.call(spaces, _ref) >= 0) {
        end += 1;
      }
      console.log("calling prune by ta pos with start", sel.start, "end", end);
      this.pruneByTAPos(sel.start, end, ta);
      return ta.area.setSelection(sel.start, sel.start);
    };

    TextAreaManager.prototype.insertEmphasisPoint = function(ta) {
      if (ta == null) {
        ta = this.lastFocused;
      }
      return ta.insertEmphasisPoint();
    };

    TextAreaManager.prototype.insertWords = function(indices, pos, ta) {
      var args, ctx, i, loc, newEnd, offset, taIndex, word, words, _i, _j, _len, _ref, _ref1;
      console.log("INSERT WORDS", indices, "POS", pos, "TA", ta);
      if (ta == null) {
        ta = this.lastFocused;
      }
      if (pos == null) {
        pos = ta.area.getSelection().start;
      }
      taIndex = this.tas.indexOf(ta);
      offset = this.taIndexSpan[taIndex];
      _ref = ta.words;
      for (loc = _i = 0, _len = _ref.length; _i < _len; loc = ++_i) {
        word = _ref[loc];
        if (word.taPos >= pos) {
          break;
        } else if (loc === ta.words.length - 1) {
          loc = ta.words.length;
        }
      }
      ctx = {
        first: void 0,
        last: void 0,
        words: this.words
      };
      if (!_.isArray(indices)) {
        indices = [indices];
      }
      words = _.map(indices, (function(idx) {
        var tmp;
        if (idx.toString().split('-')[0] === '{gp') {
          tmp = clone(TAAPP.roomTone);
          tmp.word = idx;
          tmp.pauseLength = parseFloat(idx.split('-')[1]);
          if (this.first == null) {
            this.first = tmp;
          }
          this.last = tmp;
          return tmp;
        }
        tmp = clone(this.words[idx]);
        if (this.first == null) {
          this.first = tmp;
        }
        this.last = tmp;
        return tmp;
      }), ctx);
      args = [loc + offset, 0].concat(words);
      Array.prototype.splice.apply(this.current, args);
      for (i = _j = 0, _ref1 = this.tas.length; 0 <= _ref1 ? _j < _ref1 : _j > _ref1; i = 0 <= _ref1 ? ++_j : --_j) {
        if (i > taIndex) {
          this.taIndexSpan[i] += words.length;
        }
      }
      this.dirtyTas.push(ta);
      if (taIndex === this.tas.length - 1) {
        ta.updateWords(this.current.slice(this.taIndexSpan[taIndex]));
      } else {
        ta.updateWords(this.current.slice(this.taIndexSpan[taIndex], this.taIndexSpan[taIndex + 1]));
      }
      this.clean(ta);
      this.refresh();
      newEnd = ctx.last.taPos + ctx.last.word.length;
      ta.area.setSelection(newEnd, newEnd);
      return this.current.indexOf(ctx.first);
    };

    TextAreaManager.prototype.processPaste = function(ta, a) {
      var _this = this;
      TAAPP.use("paste");
      return _.defer(function() {
        var b, bRes, count, ept, epts, firstIdx, parse_paste, pastedWords, result, sel, spaces, tai, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2;
        parse_paste = /(?:\[(\d+|gp),(e?)\]([^|]+)\|)/g;
        bRes = false;
        pastedWords = [];
        b = ta.area.val();
        sel = ta.area.getSelection();
        spaces = [" ", "\n"];
        if (a.length - b.length + sel.start !== 0 && (_ref = a.charAt(a.length - b.length + sel.start), __indexOf.call(spaces, _ref) < 0) && (_ref1 = a.charAt(a.length - b.length + sel.start - 1), __indexOf.call(spaces, _ref1) < 0)) {
          console.log("couldn't paste", a.length, b.length, sel.start);
          ta.area.val(a);
          _this.refresh();
          return;
        }
        count = 0;
        epts = [];
        while (result = parse_paste.exec(b)) {
          bRes = true;
          if (result[1] === 'gp') {
            pastedWords.push(result[3]);
          } else {
            pastedWords.push(parseInt(result[1], 10));
          }
          if (result[2] === 'e') {
            epts.push(count);
          }
          count += 1;
        }
        if (bRes) {
          firstIdx = _this.insertWords(pastedWords, a.length - b.length + sel.start, ta);
          for (_i = 0, _len = epts.length; _i < _len; _i++) {
            ept = epts[_i];
            _this.current[firstIdx + ept].emphasisPoint = true;
          }
          for (_j = 0, _len1 = epts.length; _j < _len1; _j++) {
            ept = epts[_j];
            _ref2 = _this.tas;
            for (tai = _k = 0, _len2 = _ref2.length; _k < _len2; tai = ++_k) {
              ta = _ref2[tai];
              if (_this.taIndexSpan[tai] <= ept && _this.taIndexSpan[tai] + ta.words.length > ept) {
                _this.dirtyTas.push(ta);
              }
            }
          }
          if (epts.length !== 0) {
            _this.refresh();
          }
          console.log("taindexspan after clean", _this.taIndexSpan);
          return;
        }
        ta.area.val(a);
        return _this.refresh();
      });
    };

    TextAreaManager.prototype.generateCopyTextFromIndices = function(indices) {
      var i, mod, wrds,
        _this = this;
      wrds = (function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = indices.length; _i < _len; _i++) {
          i = indices[_i];
          _results.push(this.current[i]);
        }
        return _results;
      }).call(this);
      mod = _.reduce(wrds, (function(memo, wrd) {
        var j, w, _i, _len, _ref;
        if (wrd.alignedWord === "gp") {
          return memo + '[gp]' + wrd.word + '|';
        }
        _ref = _this.words;
        for (j = _i = 0, _len = _ref.length; _i < _len; j = ++_i) {
          w = _ref[j];
          if (w.start === wrd.start && w.end === wrd.end) {
            break;
          }
        }
        return "" + memo + "[" + j + "]" + wrd.word + "|";
      }), "");
      return mod;
    };

    TextAreaManager.prototype.processCopy = function(ta) {
      var mod, newdiv, sel, selection, wrds,
        _this = this;
      TAAPP.use("copy");
      selection = window.getSelection();
      newdiv = document.createElement('div');
      sel = ta.area.getSelection();
      wrds = ta.range(sel.start, sel.end);
      mod = _.reduce(wrds, (function(memo, wrd) {
        var ept, j, w, _i, _len, _ref;
        ept = '';
        if ("emphasisPoint" in wrd && wrd.emphasisPoint) {
          ept = 'e';
        }
        if (wrd.alignedWord === "gp") {
          return "" + memo + "[gp," + ept + "]" + wrd.word + "|";
        }
        _ref = _this.words;
        for (j = _i = 0, _len = _ref.length; _i < _len; j = ++_i) {
          w = _ref[j];
          if (w.start === wrd.start && w.end === wrd.end) {
            break;
          }
        }
        return "" + memo + "[" + j + "," + ept + "]" + wrd.word + "|";
      }), "");
      $(newdiv).css({
        position: "absolute",
        left: "-99999px"
      }).html(mod).appendTo("body");
      selection.selectAllChildren(newdiv);
      return _.defer(function() {
        return $(newdiv).remove();
      });
    };

    TextAreaManager.prototype.processCut = function(ta) {
      var mod, newOut, sel, wrds,
        _this = this;
      sel = ta.area.getSelection();
      wrds = ta.range(sel.start, sel.end);
      newOut = ta.area.val();
      mod = _.reduce(wrds, (function(memo, wrd) {
        var j, w, _i, _len, _ref;
        if (wrd.alignedWord === "gp") {
          return memo + '[gp]' + wrd.word + '|';
        }
        _ref = _this.words;
        for (j = _i = 0, _len = _ref.length; _i < _len; j = ++_i) {
          w = _ref[j];
          if (w.start === wrd.start && w.end === wrd.end) {
            break;
          }
        }
        return "" + memo + "[" + j + "]" + wrd.word + "|";
      }), "");
      newOut = newOut.slice(0, sel.start) + mod + newOut.slice(sel.end + 1);
      return ta.area.val(newOut).setSelection(sel.start, sel.start + mod.length);
    };

    TextAreaManager.prototype.insertDupeOverlays = function(dupes, dupeInfo, forceAll) {
      var ta, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2, _results, _results1;
      this.dupes = dupes;
      this.dupeInfo = dupeInfo;
      if (DEBUG) {
        console.log("INSERT DUPE OVERLAYS");
      }
      if (forceAll == null) {
        forceAll = false;
      }
      if (DEBUG) {
        console.log("DIRTY:", this.dirtyTas);
      }
      if (this.dupes == null) {
        return;
      }
      if (forceAll) {
        _ref = this.tas;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          ta = _ref[_i];
          ta.insertDupeOverlays(this.dupes, this.dupeInfo);
        }
        _ref1 = this.tas;
        _results = [];
        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
          ta = _ref1[_j];
          _results.push(ta.adjustHeight());
        }
        return _results;
      } else {
        _ref2 = this.dirtyTas;
        _results1 = [];
        for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
          ta = _ref2[_k];
          _results1.push(ta.insertDupeOverlays(this.dupes, this.dupeInfo));
        }
        return _results1;
      }
    };

    TextAreaManager.prototype.replaceWords = function(c1, c2, w1, w2, ta, pos) {
      this.pruneByTAIndex(c1, c2 + 1, ta);
      return this.insertWords(_.range(w1, w2 + 1), pos, ta);
    };

    TextAreaManager.prototype.removeTA = function(ta) {
      var taIndex;
      console.log("INDEX", this.tas.indexOf(ta, "REMOVING TA", ta));
      taIndex = this.tas.indexOf(ta);
      this.tas.splice(taIndex, 1);
      this.taIndexSpan.splice(taIndex, 1);
      this.table.find("tr").eq(taIndex).remove();
      console.log("TA", ta, "taIndex", taIndex, "@TAS", this.tas);
      if (taIndex !== 0 && taIndex < this.tas.length && this.tas[taIndex - 1].speaker === this.tas[taIndex].speaker) {
        console.log("### combining 2 text areas");
        this.tas[taIndex - 1].updateWords(this.tas[taIndex - 1].words.concat(this.tas[taIndex].words));
        this.removeTA(this.tas[taIndex]);
      }
      Array.prototype.push.apply(this.dirtyTas, this.tas.slice(taIndex));
      return this.refresh();
    };

    TextAreaManager.prototype.log = function() {
      var args, statements;
      statements = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      args = ["[TAM]"].concat(statements);
      return console.log.apply(console, args);
    };

    return TextAreaManager;

  })();

  window.TextAreaManager = TextAreaManager;

}).call(this);

/*jslint browser:true devel:true sloppy:true plusplus:true nomen:true */
/*global soundManager */
/*global $ */
/*global _ */


// requires textinputs.jquery.js, found
// http://code.google.com/p/rangyinputs/wiki/Documentation
var TAAPP = TAAPP || {};

// http://my.opera.com/GreyWyvern/blog/show.dml/1725165
var clone = function (t) {
  var newObj = (t instanceof Array) ? [] : {};
  for (i in t) {
    if (t[i] && typeof t[i] == "object") {
      newObj[i] = clone(t[i]);
    } else newObj[i] = t[i]
  } return newObj;
};

soundManager.setup({
    url: 'static/swf/soundmanager2_flash9.swf',
    flashVersion: 9,
    useFlashBlock: false,
    flashLoadTimeout: 15000,
    useHighPerformance: true
});

TAAPP.state = {
    speechReauthor: {},
    speechSampleRate: 44100,
    timelineHeight: 100,
    timelineWidth: 2000
};

TAAPP.spinner = new Spinner({
    lines: 13, // The number of lines to draw
    length: 26, // The length of each line
    width: 9, // The line thickness
    radius: 35, // The radius of the inner circle
    corners: 1, // Corner roundness (0..1)
    rotate: 0, // The rotation offset
    color: '#0f82f5', // #rgb or #rrggbb
    speed: 0.8, // Rounds per second
    trail: 52, // Afterglow percentage
    shadow: false, // Whether to render a shadow
    hwaccel: false, // Whether to use hardware acceleration
    className: 'spinner', // The CSS class to assign to the spinner
    zIndex: 2e9, // The z-index (defaults to 2000000000)
    top: '200px', // Top position relative to parent in px
    left: 'auto' // Left position relative to parent in px
});

TAAPP.bestBreathIndices = function () {
    var bestBreath = _.min(
        _.filter(TAAPP.words, function (word) {
            return (word.hasOwnProperty("breathLen"));
        }),
        function (breath) {
            return breath.breathLen;
    });
    var indices = [bestBreath.origPos];
    if (TAAPP.words[bestBreath.origPos + 1].alignedWord === "sp") {
        indices.push(bestBreath.origPos + 1);
    }
    return indices;
};

TAAPP.allBreathIndices = function () {
    var breaths = _.filter(TAAPP.words, function(word) {
        return word.alignedWord === "{BR}";
        // return (word.hasOwnProperty("breathLen"));
    });
    
    var out = [];
    var i;
    var tmpArr = [];
    for (i = 0; i < breaths.length; i++) {
        tmpArr = [breaths[i].origPos]
        if (breaths[i].origPos + 1 < TAAPP.words.length &&
            TAAPP.words[breaths[i].origPos + 1].alignedWord === "sp") {

            tmpArr.push(tmpArr[0] + 1);

        }
        if (breaths[i].origPos - 1 >= 0 &&
            TAAPP.words[breaths[i].origPos - 1].alignedWord === "sp") {
            
            tmpArr.splice(0, 0, breaths[i].origPos - 1);

        }
        out.push(tmpArr);
        tmpArr = [];
    }
    return out;
};

TAAPP.randomBreathIndices = function () {
    var breaths = _.filter(TAAPP.words, function (word) {
        return (word.hasOwnProperty("breathLen"));
    });
    var breath = breaths[Math.floor(Math.random()*breaths.length)];
    var indices = [breath.origPos];
    if (TAAPP.words[breath.origPos + 1].alignedWord === "sp") {
        indices.push(breath.origPos + 1);
    }
    return indices;

};

TAAPP._createBreathDropdown = function () {
    var breaths = TAAPP.allBreathIndices();
    var bTemp = _.template($("#breathDropdownTemplate").html());
    
    $('.breathDropdown').append(bTemp({breaths: breaths}))
    .find('.breathPlayButton')
    .each(function (i) {
        $(this).click(function (event) {
            var audiostart = TAAPP.words[breaths[i][0]].start;
            var audioend = TAAPP.words[_.last(breaths[i])].end;
            TAAPP.origSound.play({
                from: audiostart * 1000.0,
                to: audioend * 1000.0
            });
            event.stopPropagation()
        });
    })
    
    $('.breathDropdown').find('.copyButton')
    .each(function (i) {
        $(this).click(function (event) {

            TAAPP.use("insertBreath");

            TAAPP.TAManager.insertWords(breaths[i]);
        });
    });
    
};

TAAPP.insertBreath = function () {
    var indices = TAAPP.randomBreathIndices();
    TAAPP.TAManager.insertWords(indices);
};

// TODO: fix this to work with the new 2-person layout
TAAPP.globalBreathFill = function () {
    var punc = /[\.:!\?]$/;
    var newBreathInds = [];
    _.each(TAAPP.current, function (word, i, cur) {
        if (punc.exec(word.word) !== null) {
            while (++i < cur.length) {
                if (cur[i].alignedWord === "{BR}") {
                    break;
                }
                if (cur[i].alignedWord !== "gp" &&
                    cur[i].alignedWord !== "sp") {
                    newBreathInds.push(i);
                    break;
                }
            }
        }
    });
    
    var offset = 0;

    _.each(newBreathInds, function(i) {
        var breathInd = TAAPP.randomBreathIndices();
        var words = _.map(breathInd, function (bi) {
            return TAAPP.words[bi];
        });
        var args = [i + offset, 0].concat(words);
        offset += words.length;
        Array.prototype.splice.apply(TAAPP.current, args);
    });

    TAAPP.updateTextArea();
    TAAPP.updatePos();
};

TAAPP.generateAudio = function () {
    TAAPP.state.speechReauthor = { "words": TAAPP.current };
    TAAPP.state.exportedTimeline = TAAPP.$timeline.timeline("export");
    
    console.log("exported timeline", TAAPP.state.exportedTimeline);
    
    TAAPP.spinner.spin($("body")[0]);

    $.ajax({
        url: 'reauthor',
        type: 'POST',
        dataType: 'json',
        contentType: 'json',
        data: JSON.stringify(TAAPP.state),
        success: function (data) {
            var lastPos = undefined;
            if (TAAPP.sound !== undefined) {
                lastPos = TAAPP.sound.position;
                TAAPP.sound.destruct();
            }
            TAAPP.sound = TAAPP.createSound(data, lastPos);

            TAAPP.spinner.stop();
        },
        error: function (data) {
            TAAPP.spinner.stop();
        }
    });
};

TAAPP.createSound = function (data, lastPos) {
    return soundManager.createSound({
        id: 'speech',
        url: data.url + "?r=" + parseInt(Math.random() * 10000),
        autoPlay: false,
        autoLoad: true,
        onplay: function () {
            $('.playBtn').html('<i class="icon-pause icon-white"></i>');
        },
        onresume: function () {
            $('.playBtn').html('<i class="icon-pause icon-white"></i>')
                .removeClass('btn-success').addClass('btn-warning');
        },
        onpause: function () {
            $('.playBtn').html('<i class="icon-play icon-white"></i>')
                .removeClass('btn-warning').addClass('btn-success');;
        },
        onload: function () {
            TAAPP.timing = data.timing
            _.each(data.timing, function (elt, idx, list) {
                var cwTiming = elt * 1000.0;
                this.onPosition(cwTiming, function () {
                    TAAPP.TAManager.highlightWords(idx); 
                });
            }, this);
            var speechEnd = (_.last(data.timing) + 2) * 1000.0;
            this.onPosition(speechEnd, function () {
                TAAPP.TAManager.highlightWords(-1);
            });
            TAAPP.$timeline.timeline({
                sound: this
            });

            if (lastPos !== undefined) {
                if (lastPos <= this.duration) {
                    this.setPosition(lastPos);
                }
            }
            this.play();
        },
        onfinish: function () {
            TAAPP.TAManager.highlightWords(-1);
            TAAPP.$timeline.timeline("option", "position", 0.0);
        },
        whileplaying: function (position) {
            TAAPP.$timeline.timeline("option", "position", this.position);
        }
    });
};

TAAPP.adjustHeight = function () {
    var eltHeight = window.innerHeight - $('#editorRow').offset().top - 50;
    // var eltHeight = window.innerHeight - $('.dupeList').offset().top - 50;

    // $('.dupeList').height(eltHeight - 70 + "px");
    // $('.rawTAManager').height(eltHeight - 70 + "px");
    
    $('#musicLibrary').height(eltHeight + "px");

    TAAPP.TAManager.adjustHeight();

    
    if (TAAPP.hasOwnProperty("sliders")) {
        TAAPP.sliders.each(function () {
           $(this).tabSlideOut("refresh");
        });
    }
    

    TAAPP.RawTAManager.adjustHeight(true);
    
    
    if (TAAPP.hasOwnProperty("sliders")) {
        TAAPP.sliders.each(function () {
           $(this).tabSlideOut("refresh");
        });
    }
    
};

// TODO: fix this in wake of new timing data
TAAPP.playFromSelection = function () {
    var sel = TAAPP.ta.getSelection(),
        cur = TAAPP.currentRange(sel.start),
        i,
        startIndex = TAAPP.timing.length - 1;
    console.log(cur);
    console.log(TAAPP.timing);
    for (i = 0; i < TAAPP.timing.length; i++) {
        if (TAAPP.timing[i][0] >= cur[1]) {
            startIndex = i - 1;
            break;
        }
    }
    console.log(TAAPP.timing[startIndex][1] * 1000.0);
    TAAPP.sound.stop();
    TAAPP.sound.setPosition(TAAPP.timing[startIndex][1] * 1000);
    TAAPP.sound.play();
};

// TAAPP.roomTone = {
//     "obama": {
//         "start": 996.424,
//         "end": 1001.143,
//         "word": "{gpause}",
//         "alignedWord": "gp"
//     },
// };

TAAPP.underlayWizard = function (wordIndex) {

    var eptContext = function (wordIndex) {
        var word = TAAPP.current[wordIndex];
        var numWords = wordIndex < 7 ? wordIndex : 7;
        var numWordsAfter = TAAPP.current - wordIndex < 7 ? TAAPP.current - wordIndex : 7;
        var wordList = TAAPP.current.slice(wordIndex - numWords, wordIndex + 1);
        var wordListBefore = _.reduce(wordList, function (memo, word) {
            return memo += ' ' + word.word;
        }, "");
        var wordList2 = TAAPP.current.slice(wordIndex + 1, wordIndex + numWordsAfter + 1);
        var wordListAfter = _.reduce(wordList2, function (memo, word) {
            return memo += ' ' + word.word;
        }, "");
        return [wordListBefore, wordListAfter];
    };

    var wlists = eptContext(wordIndex);

    // all emphasis points
    $("#underlayE1Select").html('<option value=""></option>');
    $("#underlayE2Select").html('<option value=""></option>');
    _.each(TAAPP.current, function (w, i) {
        if (w.hasOwnProperty("emphasisPoint") && w.emphasisPoint) {
            var wlists = eptContext(i);
            var opt = document.createElement('option');
            $(opt).val(i)
                .html('<i>...' +
                      wlists[0] +
                      ' <span class="ePtModalMarker">*</span> ' +
                      wlists[1] +
                      '...</i>')
                .appendTo("#underlayE1Select");
            $("#underlayE2Select").append($.clone(opt));
            if (i === wordIndex) {
                $(opt).prop("selected", true);
            }
        }
    });

    var disableEarlierEPts = function (idx) {
        idx = parseInt(idx, 10);
        console.log("DISABLE IDX", idx);
        $("#underlayE2Select option").each(function (i, el) {
            console.log("idx", parseInt($(el).val(), 10));
            if (parseInt($(el).val(), 10) <= idx) {
                $(el).prop("disabled", true)
                    .prop("selected", false);
            } else {
                $(el).prop("disabled", false);
            }
        }).closest("select")
        .trigger("liszt:updated");
    }

    disableEarlierEPts($("#underlayE1Select").val());

    $("#underlayE2Select").trigger("liszt:updated");
    $("#underlayE1Select").trigger("liszt:updated")
        .unbind(".underlayWizard")
        .bind("change.underlayWizard", function () {
            var idx = $("#underlayE1Select").val();
            disableEarlierEPts(idx);
        });
    $("#underlayE2Select").chosen({allow_single_deselect:true});
    $('#underlayModal').modal("show");
};

TAAPP.createUnderlay = function (wordIndex, songName, wordIndex2) {
    console.log("In create underlay. Word index", wordIndex);
    var speechLength = _.reduce(TAAPP.current.slice(0, wordIndex + 1),
        function (memo, word) {
            if (word.pauseLength !== undefined) {
                return memo + word.pauseLength;
            }
            return memo + word.end - word.start
        }, 0.0);
    console.log("Speech length", speechLength);

    // once we have the changepoints...
    var _build = function (cp) {

        TAAPP.use("createSimpleUnderlay");

        var padding = 500;  // in milliseconds
        var best = cp[0];
        var bestms = best * 1000.0 - padding;
        var songData = TAAPP.songInfo[songName];

        var start = bestms - 15 * 1000.0;

        if (speechLength < 15) {
            start += (15 - speechLength) * 1000.0;
        }
        if (start < 0) {
            start = 0.0;
        }

        var end = bestms + (6 + 12 + 3) * 1000.0;
        if (end > songData.dur) {
            end = songData.dur;
        }

        // volume
        var vx = [0, 3000.,
                  bestms - start - 500, bestms - start + 500,
                  bestms - start + 5000, bestms - start + 6000,
                  end - start - 3500, end - start - 500];
        var vy = [0, .15,
                  .15, .75,
                  .75, .15,
                  .15, 0];

        var wf = document.createElement('div');
        $(wf).musicWaveform({
            data: songData.wfData,
            name: songData.name,
            filename: songData.path,
            dur: songData.dur,
            len: end - start,
            start: start,
            musicGraph: songData.graph,
            volume: {
                x: vx,
                y: vy
            },
            loopCallback: function () {
                TAAPP.use("addLoop");
            }
        });
        TAAPP.$timeline.timeline("addWaveform", {
            elt: wf,
            track: TAAPP.speakers.length,
            pos: speechLength * 1000.0 + start - bestms
        });
        TAAPP.updateMusicVolumeDropdown();
    };

    var _buildMulti = function (d) {

        TAAPP.use("createConstrainedUnderlay");

        // add the pauses in the speech
        var word1 = TAAPP.current[wordIndex];
        var ta1 = TAAPP.TAManager.tas[word1.taIdx];
        var pos1 = TAAPP.current[wordIndex].taPos +
                   TAAPP.current[wordIndex].word.length;
        var word2, ta2, pos2;

        TAAPP.TAManager.insertWords(['{gp-' + d.solo1 + '}'], pos1, ta1);

        word2 = TAAPP.current[wordIndex2 + 1];
        ta2 = TAAPP.TAManager.tas[word2.taIdx];
        pos2 = TAAPP.current[wordIndex2 + 1].taPos +
               TAAPP.current[wordIndex2 + 1].word.length;
        TAAPP.TAManager.insertWords(['{gp-' + d.solo2 + '}'], pos2, ta2);

        if (d.before > 0) {
             var vx = _.map([
                0,
                3,
                d.before - 1,
                d.before,
                d.before + d.solo1 - 1.5,
                d.before + d.solo1 - .5,
                d.before + d.solo1 + d.middle - 1,
                d.before + d.solo1 + d.middle,
                d.before + d.solo1 + d.middle + d.solo2 - 1.5,
                d.before + d.solo1 + d.middle + d.solo2 - .5,
                d.total - 3.5,
                d.total - .5
            ], function (v) { return v * 1000.0; });

            var vy = [
                0,
                .15,
                .15,
                .75,
                .75,
                .15,
                .15,
                .75,
                .75,
                .15,
                .15,
                0
            ];
        } else {
            var vx = _.map([
                0,
                d.solo1 - 1.5,
                d.solo1 - .5,
                d.solo1 + d.middle - 1,
                d.solo1 + d.middle,
                d.solo1 + d.middle + d.solo2 - 1.5,
                d.solo1 + d.middle + d.solo2 - .5,
                d.total - 3.5,
                d.total - .5
            ], function (v) { return v * 1000.0; });

            var vy = [
                .75,
                .75,
                .15,
                .15,
                .75,
                .75,
                .15,
                .15,
                0
            ];
        }

        // create the waveform
        var songData = TAAPP.songInfo[songName];
        var wf = document.createElement('div');
        $(wf).musicWaveform({
            data: songData.wfData,
            name: songData.name,
            filename: songData.path,
            dur: songData.dur,
            len: d.total * 1000.0,
            currentBeats: d.beats,
            musicGraph: songData.graph,
            volume: { x: vx, y: vy },
            loopCallback: function () {
                TAAPP.use("addLoop");
            }
        });

        TAAPP.$timeline.timeline("addWaveform", {
            elt: wf,
            track: TAAPP.speakers.length,
            pos: (speechLength - d.before + .5) * 1000.0
        });
        TAAPP.updateMusicVolumeDropdown();
    }

    TAAPP.spinner.spin($("body")[0]);

    if (wordIndex2 === undefined) {
        if (TAAPP.songInfo[songName].hasOwnProperty("changepoints")) {
            _build(TAAPP.songInfo[songName].changepoints);
            TAAPP.spinner.stop();
        } else {
            var basename = TAAPP.songInfo[songName].basename;
            $.getJSON('changepoints/' + basename, function (data) {
                TAAPP.songInfo[songName].changepoints = data.changepoints;
                _build(data.changepoints);
                TAAPP.spinner.stop();
            })
        }

        var wordsAfter = TAAPP.current.slice(wordIndex + 1);

        // get rid of pauses and breaths right after the emphasis point
        var removedPauseOffset = 0;
        while (wordsAfter[0].alignedWord === "sp" ||
               wordsAfter[0].alignedWord === "{BR}" ||
               wordsAfter[0].alignedWord === "gp") {
            removedPauseOffset += 1;
            var removed = wordsAfter.splice(0, 1)[0];
            console.log("REMOVED", removed);
            // var ta = TAAPP.TAManager.tas[removed.taIdx];
            TAAPP.TAManager.pruneCurrent(
                wordIndex + 1, wordIndex + 2, false);
        }

        var word = TAAPP.current[wordIndex];
        var ta = TAAPP.TAManager.tas[word.taIdx];
        var pos = TAAPP.current[wordIndex].taPos +
                  TAAPP.current[wordIndex].word.length;

        TAAPP.TAManager.insertWords(['{gp-6}'], pos, ta);

    } else {
        // create retargeted underlay
        var wordsBetween = TAAPP.current.slice(wordIndex + 1, wordIndex2 + 1);

        // get rid of pauses and breaths right after the emphasis point
        var removedPauseOffset = 0;
        while (wordsBetween[0].alignedWord === "sp" ||
               wordsBetween[0].alignedWord === "{BR}" ||
               wordsBetween[0].alignedWord === "gp") {
            removedPauseOffset += 1;
            var removed = wordsBetween.splice(0, 1)[0];
            console.log("REMOVED", removed);
            // var ta = TAAPP.TAManager.tas[removed.taIdx];
            TAAPP.TAManager.pruneCurrent(
                wordIndex + 1, wordIndex + 2, false);
        }

        // update wordIndex2 to reflect removed pauses and breaths
        wordIndex2 -= removedPauseOffset;

        // and remove pauses and breaths right after the 2nd emph pt
        var wordsAfter = TAAPP.current.slice(wordIndex2 + 1)
        while (wordsAfter[0].alignedWord === "sp" ||
               wordsAfter[0].alignedWord === "{BR}" ||
               wordsAfter[0].alignedWord === "gp") {
            removedPauseOffset += 1;
            var removed = wordsAfter.splice(0, 1)[0];
            console.log("REMOVED2", removed);
            // var ta = TAAPP.TAManager.tas[removed.taIdx];
            TAAPP.TAManager.pruneCurrent(
                wordIndex2 + 1, wordIndex2 + 2, false);
        }

        if (removedPauseOffset > 0) {
            TAAPP.TAManager.refresh();
        }


        var retargetLength = _.reduce(wordsBetween, function (memo, w) {
            if (w.hasOwnProperty("pauseLength") &&
                w.pauseLength !== undefined) {
                return memo + w.pauseLength;
            }
            return memo + w.end - w.start;
        }, 0.0);

        var before = 15.5;
        if (speechLength < before) {
            before = speechLength;
        }

        var basename = TAAPP.songInfo[songName].basename;
        $.getJSON('underlayRetarget/' + basename + '/' + retargetLength +
            '/' + before + '/15.0',
            function (data) {
                _buildMulti(data);
                TAAPP.spinner.stop();
            });
    }

};

TAAPP.buildWaveform = function (sound, kind) {
    var wfs = [];
    if (kind === "textaligned") {
        console.log("SPEAKERS", TAAPP.speakers);
        _.each(TAAPP.speakers, function (speaker, spi) {
            var wf = document.createElement("div");
            console.log("creating text aligned waveform");

            $(wf).textAlignedWaveform({
                dur: sound.duration,
                len: sound.duration,
                filename: sound.url,
                name: "Speech - " + speaker,
                currentWords: TAAPP.current,
                emphasisPointFunc: TAAPP.underlayWizard
            });
            TAAPP.currentWaveforms[speaker] = wf;
            // TAAPP.currentWaveform = wf;
            
            TAAPP.TAManager.textAlignedWfs = TAAPP.currentWaveforms;
            wfs.push(wf);
        });

        
    } else {
        var wf = document.createElement('div');
        $(wf).waveform({
            dur: sound.duration,
            len: sound.duration,
            name: sound.id
        });
        wfs.push(wf);
    }

    console.log("in buildWaveform", wf);
    // get the waveform data
    // from:
    // wav2json -p 2 -s 2000 --channels mid -n FILENAME.wav 

    if (TAAPP.speakers.length === 1) {
        var speaker = TAAPP.speakers[0]
        $.getJSON('static/speechtracks/wfData/' + TAAPP.speech + '-' + speaker + '.wav.json',
            function (data) {
                $(wfs).wf({
                    data: data.mid
                });
        }); 
    } else {
        _.each(TAAPP.speakers, function (speaker, i) {
            $.getJSON('static/speechtracks/wfData/' + TAAPP.speech + '-' + speaker + '.wav.json',
                function (data) {
                    $(wfs[i]).wf({
                        data: data.mid
                    });
                });
        });
    }


    return wfs;
};

TAAPP.origSoundURL = function () {
    if (TAAPP.env !== undefined) {
        if (TAAPP.env === "production") {
            // return "http://d1qv8gm47dmlns.cloudfront.net/mp3s/" +
            //     TAAPP.speech + ".mp3";
            // return "https://s3.amazonaws.com/speecheditor/mp3s/" +
            //     TAAPP.speech + ".mp3";
        }
    }
    return 'static/speechtracks/' + TAAPP.speech + ".mp3";
};

TAAPP.loadOriginal = function () {
    var args = {
        url: TAAPP.origSoundURL(),
        id: 'orig',
        autoLoad: true,
        onload: function () {
            console.log("loaded original sound");
            
            // initialize timeline
            var wfs = TAAPP.buildWaveform(this, "textaligned");

            var timelineWfs = $.map(wfs, function (wf, i) {
                return {
                    elt: wf,
                    track: i,
                    pos: 0.0
                };
            });

            TAAPP.$timeline.timeline({
                tracks: TAAPP.speakers.length + 1,
                pxPerMs: .005,
                width: "100%",
                wf: timelineWfs,
                linkGroups: [wfs]
            });
            
            console.log("calling adjust height after timeline creation");
            TAAPP.adjustHeight();
        },
        autoPlay: false
    };
    if (TAAPP.origSound === undefined) {
        soundManager.onready(function () {
            TAAPP.origSound = soundManager.createSound(args);
        });
    } else {
        TAAPP.origSound.destruct();
        TAAPP.origSound = soundManager.createSound(args);
    }
};

TAAPP.use = function (name) {
    if (TAAPP.state.usageData.hasOwnProperty(name)
        && TAAPP.state.usageData[name] !== undefined) {
        TAAPP.state.usageData[name] += 1;
    } else {
        TAAPP.state.usageData[name] = 1;
    }
};

TAAPP.reset = function () {
    TAAPP.state.usageData = {};

    // TAAPP.state.speechAudio = TAAPP.speech + "44.wav";
    TAAPP.state.speechAudio = TAAPP.speech + ".mp3";
    if (TAAPP.sound) {
        TAAPP.sound.destruct();
        TAAPP.sound = undefined;
    }
    TAAPP.current = undefined;
    TAAPP.timing = undefined;
    TAAPP.dupes = undefined;
    TAAPP.currentWaveforms = {};
    
    // destroy timeline
    try {
        $('.timeline').timeline('destroy');  
    } catch (e) {
        "woop";
    }
    TAAPP.$timeline = $('.timeline');
    
    // reset TextAreaManager
    $(".TAManager").html("");
    TAAPP.TAManager = undefined;
    
    $(".rawTAManager").html("");
    TAAPP.RawTAManager = undefined;
    
    $('.breathDropdown').html("");
    
    $('.dupeList').html("");
    TAAPP.state.outfile = TAAPP.speech + '-' + TAAPP.outfile;
    $('.dlLink').prop('href', 'download/' + TAAPP.state.outfile);

    // mod for now to do on-the-fly classification of breaths
    $.getJSON('alignment/' + TAAPP.speech, function (data) {
        var words = data.words;
        // filename of the new json
        TAAPP.state.speechText = data.speechText;
        TAAPP.words = words;
        // keep track of each word's position in TAAPP.words
        _.each(TAAPP.words, function (word, idx) {
           word.origPos = idx; 
        });
        
        TAAPP.current = clone(TAAPP.words);
        
        TAAPP.speakers = _.chain(TAAPP.words)
            .map(function (word) { return word.speaker; })
            .filter(function (word) { return !_.isUndefined(word); })
            .uniq()
            .value();

        // find the longest pause- use for room tone (general inserted pauses)
        var longestPauseLen = 0.0;
        for (var i = 0; i < TAAPP.words.length; i++) {
            var word = TAAPP.words[i];
            if (word["alignedWord"] == "sp") {
                if (word["end"] - word["start"] > longestPauseLen) {
                    longestPauseLen = word["end"] - word["start"];
                    TAAPP.roomTone = {
                        "start": word["start"],
                        "end": word["end"],
                        "word": "{gpause}",
                        "alignedWord": "gp"
                    }

                    console.log("RTONE", word);
                }
            }
        }
            
        TAAPP.TAManager = new TextAreaManager($(".TAManager"),
            TAAPP.speakers, TAAPP.words, TAAPP.current);

        TAAPP.updateDupes();
        TAAPP._createBreathDropdown();
        // create the orignal sound, for sound "spriting"
        TAAPP.loadOriginal();
    });
};

TAAPP.updateDupes = function () {
    $.ajax({
        url: 'dupes',
        type: 'POST',
        dataType: 'json',
        contentType: 'json',
        data: JSON.stringify(TAAPP.state),
        success: function (data) {
            TAAPP.dupes = data;
            TAAPP._preprocessDupes();
            
            // TAAPP.drawScript();
            
            TAAPP.RawTAManager = new TextAreaManager($(".rawTAManager"),
                TAAPP.speakers, TAAPP.words, clone(TAAPP.current));
            
            TAAPP.TAManager.insertDupeOverlays(TAAPP.dupes, TAAPP.dupeInfo, true);
            TAAPP.RawTAManager.insertDupeOverlays(TAAPP.dupes, TAAPP.dupeInfo, true);
        }
    });
};

TAAPP._preprocessDupes = function () {
    // just do this once to build the necessary data structures for
    // insertDupeOverlays
    var dupeStarts = _.flatten(_.compact(
        _.map(TAAPP.dupes, function (elt, idx, list) {
            if (elt.length !== 1) {
                return _.map(elt, function (e, i) {
                   return {
                       firstWord: e[0][0],
                       dupe: elt,
                       dElt: e,
                       idxInDupes: idx
                   };
                });
            }
            return false;
        })
    ));
    var dupeStartsFirsts = _.pluck(dupeStarts, "firstWord");
    TAAPP.dupeInfo = {
        starts: dupeStarts,
        firsts: dupeStartsFirsts
    };
};

TAAPP.drawScript = function () {
    _.each(TAAPP.dupes, function (elt, idx, list) {
        var play = document.createElement('button'),
            insert = document.createElement('button'),
            div = document.createElement('div');
        $(play).html('<i class="icon-play icon-white"></i>')
            .addClass('btn btn-success')
            .prop("type", "button");
        $(insert).html('<i class="icon-plus icon-white"></i>')
            .addClass('btn btn-primary');
        $(div).addClass('scriptLine');
        
        var lastWord = TAAPP.words[elt[0][0][1]]
        var speaker = "";
        if (lastWord.hasOwnProperty("speaker")) {
            speaker = lastWord.speaker + ": ";
        }
        
        if (elt.length === 1) {
            $(play).click(function () {
                TAAPP.origSound.play({
                    from: 1000.0 * TAAPP.words[elt[0][0][0]].start,
                    to: 1000.0 * TAAPP.words[elt[0][0][1]].end
                });
            });
            $(insert).click(function () {
                var indices = elt[0][0];
                TAAPP.TAManager.insertWords(
                    _.range(indices[0], indices[1] + 1)
                );
            });
            var btnGroup = document.createElement('div');
            $(btnGroup).addClass('btn-group')
                .append(play)
                .append(insert);
            var span = document.createElement('span');
            $(span).text(speaker + elt[0][1])
                .addClass("scriptLineText");
            $(div).append(btnGroup)
                .append(span);
            $('.dupeList').append(div);
            
        } else {
            var opts = _.map(elt, function (e, i) {
                var opt = document.createElement('option');
                $(opt).val(i).text(e[1]);
                return opt;
            }),
                sel = document.createElement('select');
            $(play).click(function () {
                var playIdx = $(sel).val(),
                    indices = elt[playIdx][0],
                    start = TAAPP.words[indices[0]].start,
                    end = TAAPP.words[indices[1]].end;
                TAAPP.origSound.play({
                    from: start * 1000.0,
                    to: end * 1000.0
                });
            });
            $(insert).click(function () {
                var insertIdx = $(sel).val();
                var indices = elt[insertIdx][0];
                TAAPP.TAManager.insertWords(
                    _.range(indices[0], indices[1] + 1)
                ); 
            });
            $(sel).append(opts)
                .prop("name", 'dupe' + idx)
                .addClass("span10");
            $(div).addClass("input-prepend")
                .append(play)
                .append(insert)
                .append(sel);
            $('.dupeList').append(div);
        }
    });
    
    TAAPP.adjustHeight();
};

TAAPP.reauthor = function () {
    if (TAAPP.sound) {
        TAAPP.sound.pause();
    }
    TAAPP.TAManager.highlightWords(-1);
    TAAPP.generateAudio();
};

TAAPP.rewind = function () {
    if (TAAPP.sound) {
        TAAPP.sound.setPosition(0);
    }
};

TAAPP.togglePlay = function () {
    if (TAAPP.sound &&
        (TAAPP.sound.playState === 1 || !TAAPP.$timeline.timeline("isDirty"))) {
        TAAPP.sound.togglePause();
    } else {
        TAAPP.reauthor();
    }
};

TAAPP._timelineClickMode = "marker";


TAAPP.toggleMode = function (mode) {
    if (mode === "split" && TAAPP._timelineClickMode === "split") {
        TAAPP._timelineClickMode = "marker";
    } else if (mode === "split" && TAAPP._timelineClickMode !== "split") {
        TAAPP._timelineClickMode = "split";
    }
    
    // alert the timeline to respond to clicks appropriately
    TAAPP.$timeline.timeline({
        clickMode: TAAPP._timelineClickMode
    });
}

TAAPP._zoom = function (factor) {
    var currentZoom = TAAPP.$timeline.timeline("option", "pxPerMs");
    TAAPP.$timeline.timeline({
        pxPerMs: currentZoom * factor
    });
};

TAAPP.zoomIn = function () {
    TAAPP._zoom(2);
};

TAAPP.zoomOut = function () {
    TAAPP._zoom(.5);
};

TAAPP.songInfo = {};

TAAPP.addSongToTimeline = function (songName) {
    var songData = TAAPP.songInfo[songName];
    var wf = document.createElement('div');
    $(wf).musicWaveform({
        data: songData.wfData,
        name: songData.name,
        filename: songData.path,
        dur: songData.dur,
        len: songData.dur,
        musicGraph: songData.graph,
        loopCallback: function () {
            TAAPP.use("addLoop");
        }
    });
    var nTracks = TAAPP.$timeline.timeline("option", "tracks");
    TAAPP.$timeline.timeline("addWaveform", {elt: wf, track: nTracks - 1, pos: 0.0});

    // TODO: hopefully just a temporary fix
    TAAPP.updateMusicVolumeDropdown();
};

TAAPP.updateMusicVolumeDropdown = function () {
    var wfs = TAAPP.$timeline.timeline("option", "wf");
    var itemTemplate = $("#musicVolumeItemTemplate").html();
    $(".musicVolumeDropdown").html("");
    _.each(wfs, function (wf) {
        var $wf = $(wf.elt);
        if ($wf.wf("waveformClass") === "musicWaveform") {
            var songInfo = TAAPP.songInfo[$wf.wf("option", "name")];
            console.log("SONG INFO", songInfo, $wf.wf("option", "name"));
            var item = _.template(itemTemplate, songInfo);
            $(item).appendTo(".musicVolumeDropdown")
                .find(".musicVolumeSlider")
                .slider({
                    range: "min",
                    value: $(wf.elt).wf("option", "globalVolume"),
                    min: 0.0,
                    max: 1.0,
                    step: .01,
                    slide: function (event, ui) {
                        $wf.wf("option", "globalVolume", ui.value);
                    }
                });
        }
    });
};

TAAPP.addSongToLibrary = function (songData) {
    var songTemplate = $("#songLibraryTemplate").html();
    TAAPP.songInfo[songData.name] = songData;
    $(_.template(songTemplate, {
        name: songData.name,
        title: songData.title,
        artist: songData.artist
    }))
    .appendTo(".musicLibrary table")
    .find('button')
    .click(function () {
        TAAPP.addSongToTimeline($(this).attr("data-song-name"));
    });

    // add the song to the list in the underlay creation modal
    var underlaySongTemplate = $("#underlaySongTemplate").html();
    var $songOpt = $(_.template(underlaySongTemplate, {
        name: songData.name,
        title: songData.title,
        artist: songData.artist
    }))
    .appendTo("#underlaySongSelect");

    if ($("#underlaySongSelect option").length === 1) {
        $songOpt.prop("selected", true);
    }
    $("#underlaySongSelect").trigger("liszt:updated");
}

TAAPP.uploadSong = function (form) {
    var formData = new FormData(form);
    
    TAAPP.spinner.spin($("body")[0]);
    
    $.ajax({
        url: 'uploadSong',
        type: 'POST',
        success: function (data) {
            $(form).find('[data-dismiss="fileupload"]').trigger("click");
            
            TAAPP.addSongToLibrary(data);            
            TAAPP.spinner.stop();
            
        },
        error: function (data) {
            TAAPP.spinner.stop();
        },
        data: formData,
        cache: false,
        contentType: false,
        processData: false
    });
    return false;
};

TAAPP.loadSite = function () {
    $("#underlayE2Select").chosen({
        allow_single_deselect: true
    });
    $("#underlayE1Select").chosen();
    $("#underlaySongSelect").chosen();
    $('.gPause').click(function () {
        TAAPP.use("insertPause");
        var gp = clone(TAAPP.roomTone);
        // var gp = clone(TAAPP.roomTone[TAAPP.speech]);
        gp.pauseLength = parseFloat($('.gpLen').val());
        gp.word = '{gp-' + gp.pauseLength + '}';

        TAAPP.TAManager.insertWords([gp.word])
        return false;
    });
    
    // this is now covered by a breath-selection dropdown
    // $('.insBreath').click(TAAPP.insertBreath);
    
    $('.genLink').click(TAAPP.reauthor);
    $('.playBtn').click(TAAPP.togglePlay);
    $('.rewindBtn').click(TAAPP.rewind);
    $('.zoomInBtn').click(TAAPP.zoomIn);
    $('.zoomOutBtn').click(TAAPP.zoomOut);
    $('.razorBtn').click(function () {
        $(this).toggleClass("buttonActive");
        TAAPP.toggleMode("split");
    });
    $('#songUploadForm').submit(function () {
        TAAPP.uploadSong($("#songUploadForm")[0]);
        return false;
    });
    $('.clearWords').click(function () {
        TAAPP.TAManager.pruneAll();
    });

    $('.emphPt').click(function () {
        TAAPP.TAManager.insertEmphasisPoint();
    });
    
    $('.createUnderlayBtn').click(function () {
        var wordIndex = parseInt($('#underlayE1Select').val(), 10);
        var songName = $('#underlaySongSelect').val();
        var ept2wordIndex = $("#underlayE2Select").val();

        if (songName === "" || songName === undefined ||
            isNaN(wordIndex) || wordIndex === undefined) {
            return;
        }
 
        if (ept2wordIndex === "") {
            TAAPP.createUnderlay(wordIndex, songName);
        } else {
            TAAPP.createUnderlay(
                wordIndex,
                songName,
                parseInt(ept2wordIndex, 10)
            );
        }
        
    });

    $(window).resize(function () {    
        TAAPP.adjustHeight();
        TAAPP.TAManager.insertDupeOverlays(TAAPP.dupes, TAAPP.dupeInfo, true);
    });

    TAAPP._commandKey = false;

    $(document).keydown(function (e) {
        if (e.which === 32) {
            // space: play/pause
            TAAPP.togglePlay();
        } else if (e.which === 13) {
            // enter: render
            TAAPP.reauthor();
        } else if (e.which === 85) {
            // u: underlay
            TAAPP.underlayWizard();
        } else if (e.which === 82) {
            // r: raw speech
            $('.origSliderHandle').trigger('click');
        } else if (e.which === 70) {
            // f: music browser
            if (!TAAPP._commandKey) {
                $('.browserSliderHandle').trigger('click');
            }
        } else if (e.which === 91 || e.which === 93) {
            // chrome apple command key
            TAAPP._commandKey = true;
        }
    });

    $(document).keyup(function (e) {
        if (e.which === 91 || e.which === 93) {
            TAAPP._commandKey = false;
        }
    });
    
    var outerBox = $('#editorRow');

    TAAPP.sliders = $('.tabSlider');

    $('.origSlider').tabSlideOut({
        tabHandle: '.origSliderHandle',
        tabLocation: 'right',
        speed: 300,
        action: 'click',
        topPos: '0px',
        leftPos: '20px',
        pathToTabImage: 'static/img/origSlider.png',
        imageHeight: '200px',
        imageWidth: '20px',
        height: function () {
            return $('#editorRow').height();
        },
        topReferenceElement: $("#editorRow")
    });

    $('.browserSlider').tabSlideOut({
        tabHandle: '.browserSliderHandle',
        tabLocation: 'right',
        speed: 300,
        action: 'click',
        topPos: '220px',
        leftPos: '20px',
        pathToTabImage: 'static/img/musicBrowserSlider.png',
        imageHeight: '200px',
        imageWidth: '20px',
        topReferenceElement: $("#editorRow"),
        height: function (o) {
            return $('#editorRow').height();
        }
    });

};

TAAPP.newProject = function (speech) {
    if (speech === undefined) {
        TAAPP.speech = $("select[name=speechSelect]").val();
        history.pushState({ speech: TAAPP.speech }, null, "?speech=" + TAAPP.speech);
    } else {
        TAAPP.speech = speech;
    }
    TAAPP.reset();
};

window.onpopstate = function (event) {
    if (event.state == null) {
        return;
    }

    TAAPP.speech = event.state.speech;
    if (TAAPP.speech === "") {
        // show project creation modal
        $("#setupModal").modal("show");
    } else {
        $("#setupModal").modal("hide");
        TAAPP.reset();
    }
}

function getParameterByName(name)
{
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.search);
    if(results == null)
       return "";
    else
        return decodeURIComponent(results[1].replace(/\+/g, " "));
}

$(function () {
    $('#speechSelect').chosen();

    TAAPP.outfile = Math.random().toString(36).substring(12);

    // make the "create" button work and show the modal
    var speech = getParameterByName("speech");

    // initial state
    history.replaceState({ speech: speech }, null, null);

    $(document).on('keydown', 'input', function (event) {
        event.stopPropagation();
    });

    $('#setupModal')
    .modal({
        show: (speech === "")
    })
    .find('.createProjectBtn')
    .click(function () {
        TAAPP.newProject();
    });

    if (speech !== "") {
        TAAPP.newProject(speech);
    }

    // initialize everything that doesn't depend on the speech track
    TAAPP.loadSite();
});

