﻿/*
 Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
 This plugin is a direct copy of Image2 with added logic to handle sizing images by percentages.
*/
(function(){function G(a){function b(){this.deflated||(a.widgets.focused==this.widget&&(this.focused=!0),a.widgets.destroy(this.widget),this.deflated=!0)}function e(){var c=a.editable(),g=a.document;if(this.deflated)this.widget=a.widgets.initOn(this.element,"image",this.widget.data),this.widget.inline&&!(new CKEDITOR.dom.elementPath(this.widget.wrapper,c)).block&&(c=g.createElement(a.activeEnterMode==CKEDITOR.ENTER_P?"p":"div"),c.replace(this.widget.wrapper),this.widget.wrapper.move(c)),this.focused&&
(this.widget.focus(),delete this.focused),delete this.deflated;else{var b=this.widget,c=f,g=b.wrapper,d=b.data.align,b=b.data.hasCaption;if(c){for(var m=3;m--;)g.removeClass(c[m]);"center"==d?b&&g.addClass(c[1]):"none"!=d&&g.addClass(c[x[d]])}else"center"==d?(b?g.setStyle("text-align","center"):g.removeStyle("text-align"),g.removeStyle("float")):("none"==d?g.removeStyle("float"):g.setStyle("float",d),g.removeStyle("text-align"))}}var f=a.config.image3_alignClasses,d=a.config.image3_captionedClass;
return{allowedContent:H(a),requiredContent:"img[src,alt]",features:I(a),styleableElements:"img figure",contentTransformations:[],editables:{caption:{selector:"figcaption",allowedContent:"br em strong sub sup u s; a[!href,target]"}},parts:{image:"img",caption:"figcaption"},dialog:"image3",template:'\x3cimg alt\x3d"" src\x3d"" /\x3e',data:function(){var c=this.features;this.data.hasCaption&&!a.filter.checkFeature(c.caption)&&(this.data.hasCaption=!1);"none"==this.data.align||a.filter.checkFeature(c.align)||
(this.data.align="none");this.shiftState({widget:this,element:this.element,oldData:this.oldData,newData:this.data,deflate:b,inflate:e});this.data.link?this.parts.link||(this.parts.link=this.parts.image.getParent()):this.parts.link&&delete this.parts.link;this.parts.image.setAttributes({src:this.data.src,"data-cke-saved-src":this.data.src,alt:this.data.alt});if(this.oldData&&!this.oldData.hasCaption&&this.data.hasCaption)for(var g in this.data.classes)this.parts.image.removeClass(g);if(a.filter.checkFeature(c.dimension)){c=
this.data;g={width:c.width,height:c.height};var f=this.parts.image,d=this.wrapper,m=this.resizeWrapper,A=this.element;"center"==this.data.align&&m&&(d=m);if(c.sizeImageBy==CKEDITOR.plugins.image3.PERCENT)for(var h in g)f.setAttribute(h,"100%"),c.hasCaption&&A&&A.setStyle(h,"100%"),d&&(g[h]?d.setStyle(h,g[h]+c.sizeImageBy):d.removeStyle(h));else for(h in g)d&&d.removeStyle(h),m&&m.removeStyle(h),c.hasCaption&&A&&A.removeStyle(h,"100%"),g[h]?f.setAttribute(h,g[h]+c.sizeImageBy):f.removeAttribute(h)}this.oldData=
CKEDITOR.tools.extend({},this.data)},init:function(){var c=CKEDITOR.plugins.image3,b=this.parts.image,d={hasCaption:!!this.parts.caption,src:b.getAttribute("src"),alt:b.getAttribute("alt")||"",width:b.getAttribute("width")||"",height:b.getAttribute("height")||"",lock:this.ready?c.checkHasNaturalRatio(b):!0};-1==d.width.indexOf(c.PERCENT)&&-1==d.height.indexOf(c.PERCENT)?d.sizeImageBy="px":d.sizeImageBy=c.PERCENT;d.width=parseInt(d.width);d.height=parseInt(d.height);var e=b.getAscendant("a");e&&this.wrapper.contains(e)&&
(this.parts.link=e);d.align||(b=d.hasCaption?this.element:b,f?(b.hasClass(f[0])?d.align="left":b.hasClass(f[2])&&(d.align="right"),d.align?b.removeClass(f[x[d.align]]):d.align="none"):(d.align=b.getStyle("float")||"none",b.removeStyle("float")));a.plugins.link&&this.parts.link&&(d.link=c.getLinkAttributesParser()(a,this.parts.link),(b=d.link.advanced)&&b.advCSSClasses&&(b.advCSSClasses=CKEDITOR.tools.trim(b.advCSSClasses.replace(/cke_\S+/,""))));this.wrapper[(d.hasCaption?"remove":"add")+"Class"]("cke_image_nocaption");
this.setData(d);a.filter.checkFeature(this.features.dimension)&&!0!==a.config.image3_disableResizer&&1!=a.readOnly&&J(this);this.shiftState=c.stateShifter(this.editor);this.on("contextMenu",function(a){a.data.image=CKEDITOR.TRISTATE_OFF;if(this.parts.link||this.wrapper.getAscendant("a"))a.data.link=a.data.unlink=CKEDITOR.TRISTATE_OFF});this.on("dialog",function(a){a.data.widget=this},this)},addClass:function(a){q(this).addClass(a)},hasClass:function(a){return q(this).hasClass(a)},removeClass:function(a){q(this).removeClass(a)},
getClasses:function(){var a=new RegExp("^("+[].concat(d,f).join("|")+")$");return function(){var b=this.repository.parseElementClasses(q(this).getAttribute("class")),d;for(d in b)a.test(d)&&delete b[d];return b}}(),upcast:K(a),downcast:L(a),getLabel:function(){return this.editor.lang.widget.label.replace(/%1/,(this.data.alt||"")+" "+this.pathName)}}}function K(a){var b=r(a),e=a.config.image3_captionedClass;return function(a,d){var c=a.name,g;if(!a.attributes["data-cke-realelement"]&&(b(a)?("div"==
c&&(c=a.getFirst("figure"))&&(a.replaceWith(c),a=c),d.align="center",g=a.getFirst("img")||a.getFirst("a").getFirst("img")):"figure"==c&&a.hasClass(e)?g=a.getFirst("img")||a.getFirst("a").getFirst("img"):t(a)&&(g="a"==a.name?a.children[0]:a),g))return a}}function L(a){var b=a.config.image3_alignClasses;return function(e){var f="a"==e.name?e.getFirst():e,d=f.attributes,c=this.data.align;if(!this.inline){var g=e.getFirst("span");g&&g.replaceWith(g.getFirst({img:1,a:1}))}c&&"none"!=c&&(g=CKEDITOR.tools.parseCssText(d.style||
""),"center"==c&&"figure"==e.name?e=e.wrapWith(new CKEDITOR.htmlParser.element("div",b?{"class":b[1]}:{style:"text-align:center"})):c in{left:1,right:1}&&(b?f.addClass(b[x[c]]):g["float"]=c),b||CKEDITOR.tools.isEmpty(g)||(d.style=CKEDITOR.tools.writeCssText(g)));d=CKEDITOR.plugins.image3;a.filter.checkFeature(this.features.dimension)&&(f=this.data,f.sizeImageBy==d.PERCENT&&(d="img"==e.name?e:e.find("img")[0],f.width&&(d.attributes.width=f.width+f.sizeImageBy),f.height&&(d.attributes.height=f.height+
f.sizeImageBy)));return e}}function r(a){var b=a.config.image3_captionedClass,e=a.config.image3_alignClasses,f={figure:1,a:1,img:1};return function(d){if(!(d.name in{div:1,p:1}))return!1;var c=d.children;if(1!==c.length)return!1;c=c[0];if(!(c.name in f))return!1;if("p"==d.name){if(!t(c))return!1}else if("figure"==c.name){if(!c.hasClass(b))return!1}else if(a.enterMode==CKEDITOR.ENTER_P||!t(c))return!1;return(e?d.hasClass(e[1]):"center"==CKEDITOR.tools.parseCssText(d.attributes.style||"",!0)["text-align"])?
!0:!1}}function t(a){return"img"==a.name?!0:"a"==a.name?1==a.children.length&&a.getFirst("img"):!1}function J(a){var b=a.editor,e=b.editable(),f=b.document,d=a.resizer=f.createElement("span");d.addClass("cke_image_resizer");d.setAttribute("title",b.lang.image3.resizer);d.append(new CKEDITOR.dom.text("​",f));if(a.inline)a.wrapper.append(d);else{var c=a.parts.link||a.parts.image,g=c.getParent(),k=f.createElement("span");k.addClass("cke_image_resizer_wrapper");k.append(c);k.append(d);a.element.append(k,
!0);a.resizeWrapper=k;g.is("span")&&g.remove()}d.on("mousedown",function(c){function m(a,b,d){var c=CKEDITOR.document,h=[];f.equals(c)||h.push(c.on(a,b));h.push(f.on(a,b));if(d)for(a=h.length;a--;)d.push(h.pop())}function g(){u=r+l*y;v=Math.round(u/w)}function h(){v=t-p;u=Math.round(v*w)}function k(a){C=a.data.$;y=C.screenX-q;p=x-C.screenY;z=Math.abs(y/p);1==l?0>=y?0>=p?g():z>=w?g():h():0>=p?z>=w?h():g():h():0>=y?0>=p?z>=w?h():g():h():0>=p?g():z>=w?g():h();15<=u&&15<=v?(D.setAttributes({width:u,height:v}),
B=!0):B=!1}function n(){for(var c;c=E.pop();)c.removeListener();e.removeClass(F);d.removeClass("cke_image_resizing");B&&(a.setData({width:u,height:v}),b.fire("saveSnapshot"));B=!1}if(a.data.sizeImageBy!=CKEDITOR.plugins.image3.PERCENT){var D=a.parts.image,l="right"==a.data.align?-1:1,q=c.data.$.screenX,x=c.data.$.screenY,r=D.$.clientWidth,t=D.$.clientHeight,w=r/t,E=[],F="cke_image_s"+(~l?"e":"w"),C,u,v,B,y,p,z;b.fire("saveSnapshot");m("mousemove",k,E);m("mouseup",n,E);e.addClass(F);d.addClass("cke_image_resizing")}});
a.on("data",function(){d["right"==a.data.align?"addClass":"removeClass"]("cke_image_resizer_left")})}function M(a){var b=[],e;return function(f){var d=a.getCommand("justify"+f);if(d){b.push(function(){d.refresh(a,a.elementPath())});if(f in{right:1,left:1,center:1})d.on("exec",function(d){var g=n(a);if(g){g.setData("align",f);for(g=b.length;g--;)b[g]();d.cancel()}});d.on("refresh",function(d){var b=n(a),k={right:1,left:1,center:1};b&&(void 0===e&&(e=a.filter.checkFeature(a.widgets.registered.image.features.align)),
e?this.setState(b.data.align==f?CKEDITOR.TRISTATE_ON:f in k?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED):this.setState(CKEDITOR.TRISTATE_DISABLED),d.cancel())})}}}function N(a){a.plugins.link&&(CKEDITOR.on("dialogDefinition",function(b){b=b.data;if("link"==b.name){b=b.definition;var e=b.onShow,f=b.onOk;b.onShow=function(){var d=n(a),b=this.getContentElement("info","linkDisplayText").getElement().getParent().getParent();d&&(d.inline?!d.wrapper.getAscendant("a"):1)?(this.setupContent(d.data.link||
{}),b.hide()):(b.show(),e.apply(this,arguments))};b.onOk=function(){var b=n(a);if(b&&(b.inline?!b.wrapper.getAscendant("a"):1)){var c={};this.commitContent(c);b.setData("link",c)}else f.apply(this,arguments)}}}),a.getCommand("unlink").on("exec",function(b){var e=n(a);e&&e.parts.link&&(e.setData("link",null),this.refresh(a,a.elementPath()),b.cancel())}),a.getCommand("unlink").on("refresh",function(b){var e=n(a);e&&(this.setState(e.data.link||e.wrapper.getAscendant("a")?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED),
b.cancel())}))}function n(a){return(a=a.widgets.focused)&&"image"==a.name?a:null}function H(a){var b=a.config.image3_alignClasses;a={div:{match:r(a)},p:{match:r(a)},img:{attributes:"!src,alt,width,height",styles:"border-style,border-width,float,height,margin,margin-bottom,margin-left,margin-right,margin-top,width"},figure:{classes:"!"+a.config.image3_captionedClass},figcaption:!0};b?(a.div.classes=b[1],a.p.classes=a.div.classes,a.img.classes=b[0]+","+b[2],a.figure.classes+=","+a.img.classes):(a.div.styles=
"text-align",a.p.styles="text-align",a.figure.styles="float,display");return a}function I(a){a=a.config.image3_alignClasses;return{dimension:{requiredContent:"img[width,height]"},align:{requiredContent:"img"+(a?"("+a[0]+")":"{float}")},caption:{requiredContent:"figcaption"}}}function q(a){return a.data.hasCaption?a.element:a.parts.image}var O=new CKEDITOR.template('\x3cfigure class\x3d"{captionedClass}"\x3e\x3cimg alt\x3d"" src\x3d"" /\x3e\x3cfigcaption\x3e{captionPlaceholder}\x3c/figcaption\x3e\x3c/figure\x3e'),
x={left:0,center:1,right:2};CKEDITOR.plugins.add("image3",{lang:"af,ar,az,bg,bn,bs,ca,cs,cy,da,de,de-ch,el,en,en-au,en-ca,en-gb,eo,es,es-mx,et,eu,fa,fi,fo,fr,fr-ca,gl,gu,he,hi,hr,hu,id,is,it,ja,ka,km,ko,ku,lt,lv,mk,mn,ms,nb,nl,no,oc,pl,pt,pt-br,ro,ru,si,sk,sl,sq,sr,sr-latn,sv,th,tr,tt,ug,uk,vi,zh,zh-cn",requires:"widget,dialog",icons:"image",hidpi:!0,onLoad:function(){CKEDITOR.addCss(".cke_image_nocaption{line-height:0}.cke_editable.cke_image_sw, .cke_editable.cke_image_sw *{cursor:sw-resize !important}.cke_editable.cke_image_se, .cke_editable.cke_image_se *{cursor:se-resize !important}.cke_image_resizer{display:none;position:absolute;width:10px;height:10px;bottom:-5px;right:-5px;background:#000;outline:1px solid #fff;line-height:0;cursor:se-resize;}.cke_image_resizer_wrapper{position:relative;display:inline-block;line-height:0;}.cke_image_resizer.cke_image_resizer_left{right:auto;left:-5px;cursor:sw-resize;}.cke_widget_wrapper:hover .cke_image_resizer,.cke_image_resizer.cke_image_resizing{display:block}.cke_widget_wrapper\x3ea{display:inline-block}")},
init:function(a){var b=a.config,e=a.lang.image3,f=G(a);b.filebrowserImage3BrowseUrl=b.filebrowserImageBrowseUrl;b.filebrowserImage3UploadUrl=b.filebrowserImageUploadUrl;f.pathName=e.pathName;f.editables.caption.pathName=e.pathNameCaption;a.widgets.add("image",f);a.ui.addButton&&a.ui.addButton("Image",{label:a.lang.common.resize,command:"image",toolbar:"insert,10"});a.contextMenu&&(a.addMenuGroup("image",10),a.addMenuItem("image",{label:e.menu,command:"image",group:"image"}));CKEDITOR.dialog.add("image3",
this.path+"dialogs/image3.js")},afterInit:function(a){var b={left:1,right:1,center:1,block:1},e=M(a),f;for(f in b)e(f);N(a)}});CKEDITOR.plugins.image3={PERCENT:"%",PIXEL:"px",stateShifter:function(a){function b(a,b){var c={};d?c.attributes={"class":d[1]}:c.styles={"text-align":"center"};c=f.createElement(a.activeEnterMode==CKEDITOR.ENTER_P?"p":"div",c);e(c,b);b.move(c);return c}function e(b,d){if(d.getParent()){var c=a.createRange();c.moveToPosition(d,CKEDITOR.POSITION_BEFORE_START);d.remove();g.insertElementIntoRange(b,
c)}else b.replace(d)}var f=a.document,d=a.config.image3_alignClasses,c=a.config.image3_captionedClass,g=a.editable(),k=["hasCaption","align","link"],n={align:function(c,f,h){var e=c.element;c.changed.align?c.newData.hasCaption||("center"==h&&(c.deflate(),c.element=b(a,e)),c.changed.hasCaption||"center"!=f||"center"==h||(c.deflate(),f=e.findOne("a,img"),f.replace(e),c.element=f)):"center"==h&&c.changed.hasCaption&&!c.newData.hasCaption&&(c.deflate(),c.element=b(a,e));!d&&e.is("figure")&&("center"==
h?e.setStyle("display","inline-block"):e.removeStyle("display"))},hasCaption:function(b,d,h){b.changed.hasCaption&&(d=b.element.is({img:1,a:1})?b.element:b.element.findOne("a,img"),b.deflate(),h?(h=CKEDITOR.dom.element.createFromHtml(O.output({captionedClass:c,captionPlaceholder:a.lang.image3.captionPlaceholder}),f),e(h,b.element),d.replace(h.findOne("img")),b.element=h):(d.replace(b.element),b.element=d))},link:function(b,d,c){if(b.changed.link){var e=b.element.is("img")?b.element:b.element.findOne("img"),
g=b.element.is("a")?b.element:b.element.findOne("a"),k=b.element.is("a")&&!c||b.element.is("img")&&c,l;k&&b.deflate();c?(d||(l=f.createElement("a",{attributes:{href:b.newData.link.url}}),l.replace(e),e.move(l)),c=CKEDITOR.plugins.image3.getLinkAttributesGetter()(a,c),CKEDITOR.tools.isEmpty(c.set)||(l||g).setAttributes(c.set),c.removed.length&&(l||g).removeAttributes(c.removed)):(c=g.findOne("img"),c.replace(g),l=c);k&&(b.element=l)}}};return function(a){var b,c;a.changed={};for(c=0;c<k.length;c++)b=
k[c],a.changed[b]=a.oldData?a.oldData[b]!==a.newData[b]:!1;for(c=0;c<k.length;c++)b=k[c],n[b](a,a.oldData?a.oldData[b]:null,a.newData[b]);a.inflate()}},checkHasNaturalRatio:function(a){var b=a.$;a=this.getNatural(a);return Math.round(b.clientWidth/a.width*a.height)==b.clientHeight||Math.round(b.clientHeight/a.height*a.width)==b.clientWidth},getNatural:function(a){if(a.$.naturalWidth)a={width:a.$.naturalWidth,height:a.$.naturalHeight};else{var b=new Image;b.src=a.getAttribute("src");a={width:b.width,
height:b.height}}return a},convertDimensionsTo:function(a,b,e,f){var d=a.wrapper.getParent().getClientRect(),c=d.width,d=d.height;void 0==typeof f&&(f=this.getNatural(a.parts.image));a={width:0,height:0};e==this.PIXEL?(a.width=Math.round(b.width/100*c),a.height=Math.round((f.height||1)/(f.width||1)*a.width)):e==this.PERCENT&&(0==c&&(c=1),0==d&&(d=1),a.height=Math.round(b.height/d*100),a.width=Math.round(b.width/c*100));return a},getLinkAttributesGetter:function(){return CKEDITOR.plugins.link.getLinkAttributes},
getLinkAttributesParser:function(){return CKEDITOR.plugins.link.parseLinkAttributes}}})();CKEDITOR.config.image3_captionedClass="image";