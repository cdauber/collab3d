(this.webpackJsonpcollab3d=this.webpackJsonpcollab3d||[]).push([[0],{39:function(e,t,n){e.exports=n(71)},47:function(e,t,n){},48:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(10),i=n.n(r),o=n(7),s=n(3),l=(n(47),n(5)),m=n(4);n(48);function u(e){var t=e.isModalOpen,n=e.onCancel,a=e.onResolve,r=Object(s.a)(e,["isModalOpen","onCancel","onResolve"]);return c.a.createElement("div",{id:"modal",className:t?"":"hide",onClick:n},c.a.createElement("div",Object.assign({id:"modal-dialog",onClick:function(e){return e.stopPropagation()}},r),c.a.createElement("span",{id:"modal-warning"},"Are you sure you want to resolve?"),c.a.createElement("div",{id:"modal-actions"},c.a.createElement("span",{id:"modal-cancel",onClick:function(e){e.stopPropagation(),n()}},"Cancel"),c.a.createElement("span",{id:"modal-submit",onClick:function(e){e.stopPropagation(),a()}},"Submit"))))}function d(e){return{type:"MOVE_CAMERA",data:e}}function f(e){return{type:"SELECT_COMMENT",data:e}}function E(){return{type:"DESELECT_COMMENT"}}function C(){return{type:"UNATTACH_DRAW_OVER"}}function b(){return{type:"UNATTACH_PIN"}}function h(){return{type:"CANCEL_COMMENT"}}function v(e){return{type:"RESOLVE_COMMENT",data:e}}var p=n(30),g=n.n(p),O=n(31);n(53);var w=Object(o.b)((function(e){var t=e.isCommenting,n=e.fileIsAttached,a=e.file,c=e.drawOverIsAttached,r=e.drawing,i=e.pinIsAttached,o=e.pin;return{fileIsAttached:n,drawOverIsAttached:c,pinIsAttached:i,cancelEnabled:t,submitEnabled:n&&a||c&&r||i&&o,selectedCommentId:e.selectedCommentId}}),{deselectComment:E,beginComment:function(){return{type:"BEGIN_COMMENT"}},attachFile:function(){return{type:"ATTACH_FILE"}},unattachFile:function(){return{type:"UNATTACH_FILE"}},attachDrawOver:function(){return{type:"ATTACH_DRAW_OVER"}},unattachDrawOver:C,attachPin:function(){return{type:"ATTACH_PIN"}},unattachPin:b,cancelComment:h},(function(e,t,n){var a=e.selectedCommentId,c=Object(s.a)(e,["selectedCommentId"]),r=t.deselectComment,i=t.beginComment,o=t.attachFile,m=t.unattachFile,u=t.attachDrawOver,d=t.unattachDrawOver,f=t.attachPin,E=t.unattachPin,C=t.cancelComment;return Object(l.a)({},n,{},c,{onFocusTextArea:function(){c.isCommenting||(a&&r(),i())},onBlurTextArea:function(e){return!c.fileIsAttached&&!c.drawOverIsAttached&&!c.pinIsAttached&&(!e||0===e.length)&&C()},onClickAttachFile:function(e){c.fileIsAttached?c.drawOverIsAttached||c.pinIsAttached||e&&0!==e.length?m():C():(c.cancelEnabled||(r(),i()),o())},onClickAttachDrawOver:function(e){c.drawOverIsAttached?c.fileIsAttached||c.pinIsAttached||e&&0!==e.length?d():C():(c.cancelEnabled||(r(),i()),u())},onClickAttachPin:function(e){c.pinIsAttached?c.fileIsAttached||c.drawOverIsAttached||e&&0!==e.length?E():C():(c.cancelEnabled||(r(),i()),f())},onClickCancel:function(){return C()}})}))((function(e){var t=e.pinAttachable,n=void 0!==t&&t,r=(e.mainThread,e.fileIsAttached),i=e.drawOverIsAttached,o=e.pinIsAttached,l=e.cancelEnabled,u=e.submitEnabled,d=e.onFocusTextArea,f=e.onBlurTextArea,E=e.onClickAttachFile,C=e.onClickAttachDrawOver,b=e.onClickAttachPin,h=e.onClickCancel,v=e.onClickSubmit,p=void 0===v?function(){}:v,w=Object(s.a)(e,["pinAttachable","mainThread","fileIsAttached","drawOverIsAttached","pinIsAttached","cancelEnabled","submitEnabled","onFocusTextArea","onBlurTextArea","onClickAttachFile","onClickAttachDrawOver","onClickAttachPin","onClickCancel","onClickSubmit"]),A=Object(a.useState)(),j=Object(m.a)(A,2),I=j[0],k=j[1];return c.a.createElement("div",Object.assign({className:"comment-input-column"},w),c.a.createElement(g.a,{className:"comment-input-text-area",placeholder:"Add a comment",value:I,onChange:function(e){return k(e.target.value)},onFocus:d,onBlur:function(){return f(I)}}),c.a.createElement("div",{className:"comment-input-actions-row"},c.a.createElement("div",{className:"comment-input-icon-actions"},c.a.createElement("button",{className:"comment-input-icon-action-button"+(r?" active":""),"data-tip":"Attach file",onClick:function(){return E(I)}},c.a.createElement("img",{src:"assets/clip.svg",alt:"File attachment icon"})),c.a.createElement("button",{className:"comment-input-icon-action-button"+(i?" active":""),"data-tip":"Drawover",onClick:function(){return C(I)}},c.a.createElement("img",{src:"assets/pencil.svg",alt:"File attachment icon"})),n&&c.a.createElement("button",{className:"comment-input-icon-action-button"+(o?" active":""),"data-tip":"Pin",onClick:function(){return b(I)}},c.a.createElement("img",{src:"assets/pin.svg",alt:"File attachment icon"})),c.a.createElement(O.a,{className:"comment-input-tooltip",place:"bottom",effect:"solid"})),c.a.createElement("div",{className:"comment-input-text-actions"},c.a.createElement("button",{className:"comment-input-text-action-button comment-input-cancel-button",disabled:!(l||I&&I.length>0),onClick:function(){k(""),h()}},"Cancel"),c.a.createElement("button",{className:"comment-input-text-action-button comment-input-submit-button",disabled:!(u||I&&I.length>0),onClick:function(){p(I||""),k("")}},"Submit"))))})),A=n(2),j=n(8),I=n(14),k=n.n(I),N=n(16),R=n(32);n(54);function T(e){var t=e.src,n=e.author;return t?c.a.createElement("img",{className:"profile-picture",src:t,alt:n}):c.a.createElement("div",{className:"initials"},n.split(" ").filter((function(e,t,n){return 0===t||t===n.length-1})).map((function(e){return e[0].toLocaleUpperCase()})).join(""))}n(55);function y(e,t){var n=new Date(e.valueOf());return n.setDate(e.getDate()+t),n}function S(e){var t=e.profilePicture,n=e.author,r=e.date,i=e.redrawEnabled,o=e.onRedraw,s=e.onResolve,l=Object(a.useState)(!1),u=Object(m.a)(l,2),d=u[0],f=u[1];return Object(a.useEffect)((function(){d&&f(!1)}),[d,f]),c.a.createElement("div",{className:"comment-top-row"},c.a.createElement(T,{src:t,author:n}),c.a.createElement("div",{className:"comment-top-column"},c.a.createElement("div",{className:"author-name"},n),c.a.createElement("div",{className:"comment-date"},function(e){var t=new Date,n=new Date(e);return t.toDateString()===n.toDateString()?"".concat(n.toLocaleTimeString(navigator.language,{timeStyle:"short"})," Today"):t.toDateString()===y(n,1).toDateString()?"Yesterday":n.toLocaleDateString(navigator.language,{dateStyle:"medium"})}(r))),i&&c.a.createElement("button",{className:"top-row-redo-button",onClick:o},"Redraw"),c.a.createElement(R.a,{className:"top-row-popup",trigger:c.a.createElement("button",{className:"small-icon-button"},c.a.createElement("img",{src:"assets/dots.svg",alt:"More options icon"})),position:"bottom right",on:"click",closeOnDocumentClick:!0,closeOnEscape:!0,disabled:d,arrow:!1},c.a.createElement("div",{className:"top-row-menu"},c.a.createElement("div",{className:"top-row-menu-options-row"},"Options",c.a.createElement("button",{className:"small-icon-button"},c.a.createElement("img",{src:"assets/close.svg",alt:"Close menu icon",onClick:function(){return f(!0)}}))),c.a.createElement("div",{onClick:function(){f(!0),s()}},"Resolve"),c.a.createElement("div",{onClick:function(){return f(!0)}},"Edit"),c.a.createElement("div",{onClick:function(){f(!0),s()}},"Delete"))))}var D=[{id:1,author:"Steve Singh",profilePicture:"https://media-exp1.licdn.com/dms/image/C5103AQES2HWYu834NA/profile-displayphoto-shrink_800_800/0?e=1588809600&v=beta&t=crKDuzgclc_52hqw_qvzN5O-vvGJUYWLxiCXwvPUa60",date:(new Date).getTime(),text:"I think the outsole of the shoes is a bit too thick. Should we make it 1/4 inch smaller?",drawOver:"NrDeCIA9wLgBgHQA45IMwDYCcBWAjGnAExZylYA04AnrIgCz05ZFIDsLccbZGS9AXwoRo8BGyQ40aHEQxo8srtiq0xjLGyY5JpYnIxCRdceizscOekRxs8rPKpNM4aJHgwc3WBSRxGoEwlXH3kMJkU2NiIndXw4PAkFPDwUWSIA0UQozyxzLlJMeh9YhnS9NnkZdgk2TKC2NCI4HXQyFHMcUoQmEjkiVjhwjESCerEovHpULAwpInoCJm7elgwBlGHRtHHsvjsZejYpejQomJpnKzxzI6akBes64UCJjGwPK2PiDgSVq3Q9HWOASKQeu3EcxwfHQSAw3CwKS6lzi9EBwNBqQyLyykLOdk46DQWCOyLUZS+3EqjTyRHshhxQRGmhBrhaeXQGH+IyG7H0FXCEMqCWCbNYxM83K0hDpuCiQKwQtaMpJBBkqSlp2IN1sWmwSrm-A8WhQQKQSH+jQ4iUwcLR6yVJFIC1mWkRHH+KEUcjsx1sNiVxBJ6FSkg8cHonrmU1SpFOKSiQrREbhA00jHNaCj+EWSDjyUTjImTBQLvkdNOiP+LAsPCqLTwriTjC+7Gsc3hWZRZRrxzr0gbTaL2XbuvYxOKjTJV1pmHC9jpZ0Ew-E0zhqGw60bZGn6nhlnMikkqGpQuJ+AU8OiI0IFu7PX3zHcOhB7E8Z9I8lwqSOEcsKxGHVXVsWZFFwM9r2wfBnxLLl7yBFJcGAjgRmYfwVynX9XGmRZiiOADUiaIZG32Ygdgwpp5RGYEbWiAj0GaHlSKIcjjAmBQ3xSdYZBJNx6KIpi+RYoVWEaKY82hOwEguckHwWPg6SIDgtEWSwRMsOFUzzB4XwA+SHnsZTGEUdC2OyBYWMRKwuGkDg71koF9MUozVNM15zJuFgSRBFgeEqPSzWc9NXKFG4SGOJSVRBLsHPWQLDOCkzQu+IYd1Ycx5AAhQIyKWQRhQJBQtQkhlDQRZuF3Bh5EbU5wjy1JUAhPh8EsZh91jLQAJJDs0UkYp8uXMyEHeAYWwzbxmBi5xjhuVAJW66E3NxdZJGg0b3jyRIVmfWQsTkQh8whNDb1vdNGxYFZETIRYNqQ8SlpMaEoWiNViFsFJulfORNHPKYOUKlcAR0KIhnmSt7MeyKpB4bShiOZ4hqkPkmBkbxmkwT7KS0RJQL8Vj3IQKRpAIbB8lmc0IbEHRo2mKYmlUxEjtyhjwgkKQpm6TsWjK9UpmigHEZLFhWDbOQHkje98twTw4siLcjs8ZRrDpdwes5pc-y9PK7AFgnmEYdoZh0BRbE5kFDLkWQJIlJqWJ5HVKg7Okzd2+QI2mCMSUVFcaZWxpci8tgzZyVApAqjhGZ9xpSWsNEQa0GSTHeSJKgVPgvKa7yJON8M0SmsQRv4cwWFSTwrAeiYLOJRQPds8xOfnAYCC0TWEiVHms8sWvHEl1mdHStUFHAjCzAsKwbDsBwG7K9dKxrnxddxdwuFOFjFzzVBKcQOZZmwGwuAGIoISNHxCk8TBERsM2CDyeIQX92Rj74RgPdsLuEgl2Swkqfg4XeaorDH1CKCTk69JCc1QFMGw9Noz2DwBCUgthCDQkwBFWYlB7z92IryHgaY24riugMEg7h+rznzogSwb1GDRGkCSfaCCkR1kKFZTyn0hh5DdNYTQNpsRDWdCTaI7hIoqHgoXVkG0WgHGPgnfgLRtQe0UCsM4-IuCVGkMDBkQ1JDVUcrYD+JR4K+E0DwWc7xFjH0IDDRQG12CaDgg5IxINTHziFJwRoKBKhyFrisI4zRGxnFGsLCu2Rf7rnHtEEu9iriLFuI0VgjwlICAALpJKAA",camera:{position:[4.097174371429141,-.12701280783257413,-.4438805208056621],focus:[0,0,0]},activeVariationIds:{1:!0},thread:[]},{id:2,author:"Ed Lazowska",profilePicture:"https://s3-us-west-2.amazonaws.com/www-cse-public/images/portraits/lazowska_sm.jpg",date:y(new Date,-1).getTime(),text:"Do you think the lining should be a different color?\nShould we try another material?\nMaybe more velvet-looking fabrics.",camera:{position:[-.01780035071461352,1.7964346779471398,.012150211120563803],focus:[-.07562892676508104,0,-2.054163283050633]},activeVariationIds:{1:!0,2:!0,3:!0,4:!0},thread:[]},{id:3,author:"Dan Levitan",profilePicture:"https://dukeangelnetwork.duke.edu/wp-content/uploads/2015/05/Dan-Levitan-Headshot.jpg",date:y(new Date,-2).getTime(),text:"If I remember correctly, the merchandise team wants to get rid of the heel collar pull tab, right?\nBut I\u2019m pretty open to it. What do you think?",drawOver:"NrDeCIA9wLgBgHQFYDsBOJAOJcCM-cAWANiQBpwBPWRAZjiTXWONt3VwCY4MBfMiNHjIscTrhaZmjOJgrVhbdnELZCeTJlxJi-QTREoutTklxxamQt07yDbTrULmGKQiiRJVugVAOfVFBQVcU4g1TtFXFpiaNMeUksGPT9hT3pMPE5CWiRaFCtcSLoibLR1TmJy-DRMFKFET3YTZy8sNAZCYoQ2T3FidzQawjyUev9CNDRc1usUNmxutmJ0S2muJmC0H300yYsqphYhiKp7dhy4FVUsMwtxvZRiTDROTXDK6aXcKTFODrgT1ouTQD0aIxenDeUmsz2yS24sTgz2CUIBbjByEII2xqFq7ky+QRP0w-w6qgs6DCmK8MRIEm4L1YbARvSQjh0tW4kxpc3cLG480wtCYCJwrFYlWxT1qvJ4ODc1imUiwCKqKBsGCGwPcNJFxAsFi8KimRgRmkysNGLwwO1SjRF2ny2MqpM0aARGAkqFJLFYmj1pPSlTu+GFSzY1kmHnEJkphD1AywJgGBTyRAjnw13LYYmmCd8DWQuU8U1kGoORTOimB23KpAGmi85T1+WI-1kzykbgjRhwEgN7JeVj1bwG+2myKNEasUOcXGCGoLuwd2gkBW4uSXcmrdHUwNksnEGvdevMK32NrwLCW6m2VUY9bEWjtRaHpOiA2yjAvt+c-LEfAVB+FYaTefJBVzV5GFsXcemlYUPEsR08WXe1kEqLhGBIEZ2yrBQ90wA1OiCEw3iCMD3A3fIdGiBwljMIgcEsddpheSiTBeHDsnbWgGPYLQflqe8CnYMDTDjMdxUYfD7FpUwhVQXAuVyMDnywZT5mVFAGOqKinlJaYKMLfxlOFFhzCIng8B0uCYmRX40SuIE0LfdgZHUZScDRcg7JYZwoWiNwVCwGl2CIGp6CMIgciWZ44yRFE-lBEy0m0VZVGcJ4Q2IJY+zwJQeHPVgwtUcp8QkFQNVkxQ3GeLyTACHRhTCmYNRjUhGCcPKrFqNwjBuIjX1M9yjTcIZ23KJZDLMKowmCEYdCQMKVDERsfw8WRptiEwdXzKxYhpTtXAyKECmeab1n+IIeFeGJhrSZEQXZZSuHwEglgwCwX1WF42FoI7+x+aIbMcXK7K5El4qVfqjrCBtgORHRLG6dQITwdkVnc1AAdSxo8Cyl4XokRY4LvCx6C5aZ21UI7nI0VgSae1GuFjYL0adTFJm2bhNhyIJxBqxB-1ZoK0dEbQuaYZ0DPZBaXlR7lhUGaWCeSPGEEmVNWAVLsCncRX6DeZ9GwWRwpYNMIGG2ExlFMRXLjEIULJyFqNcmTwgmwQE8lkaNFeebFSVMf9afd+tVgVCChl8gjNfoMQvFTBhhWwKWSEjwFo+0VGHE2W6wYGXApfyTJpmuoZxEBXPLGsUxsGE+KpehbITBtkwPFsuP+eS5zmSwJ4pbMkU2-cPJnFR-8PAOyx2TCOpw8spozD+iVJ-ZV4Bid4VUAe4WOh+YI13mVBr0noYeByLKiCkVT3Y-PufhCJgMFR5XBypBJ0i59A1D6Vf67dDMB0YUdYSA6FUAvFcmtU5HHQD6TCpM44BEBFwAUjVaJSzMGOZwt8phMC6HBLAJAGCxHmEEbCnAwog3ekRLC2I+JEIwM4fE8w3jZByHqawb1lQh2DkApk9YIFNi1jSdsyJBheC0FCC6RCWC-SupsYuGt2hDH6rWEY5RCHIOBPlMwzZZASExEiOi54tBBA8EA64G9cLiCIilaB7Ywj4AfJtAy4Nu4VnMJpX2IZtjGNtrhCWkwvLr3+FKbeW494IAlP6H25lKgihZk4KyOQY6TEsAElgSRp4xESR6Oys5HBGVqG6LCxi3jmAknRZ8uRbxWRImw8iYwNaDlehSfA8xFrfEcM4K4qAx5SOiaIVQuQCD0AYbHewVwXjImyA5b0wz-RkIwNgrQKM7LW2YIzDgvNloqOIVsR8wIyTfBiHEHA2w8iZGWgAXVuUAA",camera:{position:[2.5618038056469907,2.450867014776206,-1.6792127301384934],focus:[-.5957711016470664,0,-1.5276489458495608]},activeVariationIds:{2:!0},thread:[]}],M="pointer",V="drawover",x="pin",F=[0,1,4],L={cursor:M,cameraPosition:{position:F,focus:[0,0,0]},isCommenting:!1,fileIsAttached:!1,drawOverIsAttached:!1,pinIsAttached:!1,maxCommentId:3,activeVariationIds:{1:!0},variations:[{id:1,name:"Grey Sneaker",thumbnail:"assets/adidas_sneaker_thumbnail.png",model:"models/gltf/adidas_sneaker/scene.gltf"},{id:2,name:"Lavender Sneaker",thumbnail:"assets/adidas_sneaker_lavender_thumbnail.png",model:"models/gltf/adidas_sneaker_lavender/Project Name.gltf"},{id:3,name:"Pink Sneaker",thumbnail:"assets/adidas_sneaker_pink_thumbnail.png",model:"models/gltf/adidas_sneaker_pink/Project Name.gltf"},{id:4,name:"Dark Blue Sneaker",thumbnail:"assets/adidas_sneaker_dark_blue_thumbnail.png",model:"models/gltf/adidas_sneaker_dark_blue/Project Name.gltf"},{id:5,name:"Grey Jacket",thumbnail:"assets/grey_adidas_thumbnail.png",model:"models/gltf/grey_adidas/Grey Adidas.gltf"},{id:6,name:"Blue Jacket",thumbnail:"assets/blue_adidas_thumbnail.png",model:"models/gltf/blue_adidas/Blue Adidas.gltf"},{id:7,name:"Pink Jacket",thumbnail:"assets/pink_adidas_thumbnail.png",model:"models/gltf/pink_adidas/Pink Jacket.gltf"}],comments:D};function G(e,t){return e===t||e&&t&&e.position.every((function(e,n){return Math.abs(e-t.position[n])<1e-10}))&&e.focus.every((function(e,n){return Math.abs(e-t.focus[n])<1e-10}))}var P=Object(N.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.data;switch(n){case"CHANGE_CAMERA":var c=e.comments.find((function(t){return t.id===e.selectedCommentId}));return c&&!G(c.camera,a)?Object(l.a)({},e,{cameraPosition:a,selectedCommentId:null,drawing:null}):Object(l.a)({},e,{cameraPosition:a});case"MOVE_CAMERA":return Object(l.a)({},e,{cameraPosition:a});case"SELECT_COMMENT":return Object(l.a)({},e,{selectedCommentId:a.id,cameraPosition:a.camera?a.camera:e.cameraPosition,activeVariationIds:a.activeVariationIds?a.activeVariationIds:e.activeVariationIds,drawing:a.drawOver&&JSON.parse(k.a.decompressFromEncodedURIComponent(a.drawOver))});case"DESELECT_COMMENT":return Object(l.a)({},e,{selectedCommentId:null,drawing:null});case"RESOLVE_COMMENT":return Object(l.a)({},e,{comments:e.comments.filter((function(e){return e.id!==a.id}))});case"RESOLVE_REPLY":return Object(l.a)({},e,{comments:e.comments.map((function(e){return e.id===a.comment.id?Object(l.a)({},e,{thread:e.thread.filter((function(e){return e.id!==a.reply.id}))}):e}))});case"BEGIN_COMMENT":return Object(l.a)({},e,{isCommenting:!0});case"ATTACH_FILE":return Object(l.a)({},e,{fileIsAttached:!0});case"UNATTACH_FILE":return Object(l.a)({},e,{fileIsAttached:!1,attachedFile:null});case"ATTACH_DRAW_OVER":return Object(l.a)({},e,{drawOverIsAttached:!0,cursor:V});case"UNATTACH_DRAW_OVER":return Object(l.a)({},e,{drawOverIsAttached:!1,drawing:null,cursor:M});case"ATTACH_PIN":return Object(l.a)({},e,{pinIsAttached:!0,cursor:x});case"UNATTACH_PIN":return Object(l.a)({},e,{pinIsAttached:!1,attachedPin:null,cursor:M});case"CANCEL_COMMENT":return Object(l.a)({},e,{isCommenting:!1,fileIsAttached:!1,attachedFile:null,drawOverIsAttached:!1,drawing:null,pinIsAttached:!1,pin:null,cursor:M});case"ADD_COMMENT":return console.log(e.cameraPosition,k.a.compressToEncodedURIComponent(JSON.stringify(e.drawing))),Object(l.a)({},e,{maxCommentId:1+e.maxCommentId,comments:[{id:1+e.maxCommentId,author:"Greg Gottesman",profilePicture:"https://assets.website-files.com/5d3152346d95065922960b3a/5db769036b1dff3418bffd20_Greg.jpg",date:(new Date).getTime(),text:a,file:e.file,drawOver:k.a.compressToEncodedURIComponent(JSON.stringify(e.drawing)),pin:e.pin,camera:e.cameraPosition,activeVariationIds:e.activeVariationIds,thread:[]}].concat(Object(j.a)(e.comments))});case"ADD_REPLY":return Object(l.a)({},e,{maxCommentId:1+e.maxCommentId,comments:e.comments.map((function(t){return t.id===a.comment.id?Object(l.a)({},t,{thread:[{id:1+e.maxCommentId,author:"Greg Gottesman",profilePicture:"https://assets.website-files.com/5d3152346d95065922960b3a/5db769036b1dff3418bffd20_Greg.jpg",date:(new Date).getTime(),text:a.text,file:e.file,drawOver:k.a.compressToEncodedURIComponent(JSON.stringify(e.drawing))}].concat(Object(j.a)(t.thread))}):t}))});case"OPEN_THREAD":return Object(l.a)({},e,{activeThreadId:a.id});case"CLOSE_THREAD":return Object(l.a)({},e,{activeThreadId:null});case"UPDATE_DRAWING":return Object(l.a)({},e,{drawing:a});case"SELECT_VARIATION":return Object(l.a)({},e,{activeVariationIds:Object(l.a)({},e.activeVariationIds,Object(A.a)({},a.id,!0))});case"DESELECT_VARIATION":return Object(l.a)({},e,{activeVariationIds:Object(l.a)({},e.activeVariationIds,Object(A.a)({},a.id,!1))});default:return e}}));n(56);var _=Object(o.b)((function(e){var t=e.cursor,n=e.drawing,a=e.pin;return{redrawEnabled:t===V&&n,repinEnabled:t===x&&a}}),(function(e){return{onRedraw:function(){e({type:"UNATTACH_DRAW_OVER"})},onRepin:function(){e({type:"UNATTACH_PIN"})}}}))((function(e){var t=e.headerText,n=e.iconImage,a=e.className,r=e.redrawEnabled,i=e.repinEnabled,o=e.onRedraw,l=e.onRepin,m=Object(s.a)(e,["headerText","iconImage","className","redrawEnabled","repinEnabled","onRedraw","onRepin"]);return c.a.createElement("div",Object.assign({className:"comments-column-header-row"+(a?" "+a:"")},m),c.a.createElement("div",null,n&&c.a.createElement("img",{className:"comments-column-header-icon-image",src:n,alt:"Back icon"}),c.a.createElement("span",{className:"comments-column-header-text"},t)),!n&&r&&c.a.createElement("button",{className:"comments-column-header-redo-button",onClick:o},"Redraw"),!n&&i&&c.a.createElement("button",{className:"comments-column-header-redo-button",onClick:l},"Repin"))}));n(57);var B=Object(o.b)((function(e,t){var n=e.cursor,a=e.activeThreadId,c=e.selectedCommentId,r=e.drawing,i=t.comment.id;return{selected:i===c,redrawEnabled:i===a&&n===V&&r}}),(function(e){return{onRedraw:function(){e({type:"UNATTACH_DRAW_OVER"})}}}))((function(e){var t=e.comment,n=t.text,a=t.drawOver,r=t.pin,i=Object(s.a)(t,["text","drawOver","pin"]),o=e.selected,l=e.redrawEnabled,m=e.onRedraw,u=e.onResolve,d=e.children,f=Object(s.a)(e,["comment","selected","redrawEnabled","onRedraw","onResolve","children"]);return c.a.createElement("div",Object.assign({className:"comment"+(o?" selected":"")},f),c.a.createElement("div",{className:"comment-content"},c.a.createElement(S,Object.assign({},i,{redrawEnabled:l,onRedraw:m,onResolve:u})),c.a.createElement("p",{className:"comment-text"},n),d),c.a.createElement("div",{className:"comment-flag-row"},a&&c.a.createElement("img",{className:"comment-flag",src:"assets/drawover-flag.svg",alt:"Drawover flag"}),r&&c.a.createElement("img",{className:"comment-flag",src:"assets/pin-flag.svg",alt:"Pin flag"})))}));n(58);var H=Object(o.b)(null,(function(e,t){var n=t.comment;return{onClickReply:function(){e({type:"CANCEL_COMMENT"}),e(f(n)),e(function(e){return{type:"OPEN_THREAD",data:e}}(n))}}}))((function(e){var t=e.comment,n=t.thread,a=Object(s.a)(t,["thread"]),r=e.onClickReply,i=Object(s.a)(e,["comment","onClickReply"]);return c.a.createElement(B,Object.assign({comment:a},i),c.a.createElement("button",{className:"reply-button",onClick:function(e){e.stopPropagation(),r()}},function(e){return e&&e.length>0?e.length>1?"".concat(e.length," Replies"):"1 Reply":"Reply"}(n)))}));n(59);var J=Object(o.b)((function(e){var t=e.isCommenting,n=e.selectedCommentId,a=e.comments;return{isCommenting:t,selectedComment:a.find((function(e){return e.id===n})),comments:a}}),(function(e){return{onAddComment:function(t){e({type:"ADD_COMMENT",data:t}),e({type:"CANCEL_COMMENT"})},selectComment:function(t){return e(f(t))},deselectComment:function(){return e({type:"DESELECT_COMMENT"})},resolveComment:function(t){return e(v(t))}}}),(function(e,t,n){var a=e.selectedComment,c=Object(s.a)(e,["selectedComment"]),r=t.selectComment,i=t.deselectComment,o=t.resolveComment,m=Object(s.a)(t,["selectComment","deselectComment","resolveComment"]);return Object(l.a)({},n,{},c,{},m,{onClickComment:function(e){return e!==a?r(e):i()},onResolveComment:function(e){e===a&&i(),o(e)}})}))((function(e){var t=e.isCommenting,n=e.comments,r=e.onAddComment,i=e.onClickComment,o=e.onResolveComment,l=Object(s.a)(e,["isCommenting","comments","onAddComment","onClickComment","onResolveComment"]),d=Object(a.useState)(),f=Object(m.a)(d,2),E=f[0],C=f[1];return c.a.createElement("div",Object.assign({id:"comment-column"},l),c.a.createElement("div",{id:"input-column"},c.a.createElement(_,{headerText:"Comments"}),c.a.createElement(w,{pinAttachable:!0,mainThread:!0,onClickSubmit:r})),c.a.createElement("div",{className:"scroll-column"+(t?" focused":"")},n.map((function(e){return c.a.createElement(H,{key:e.id,comment:e,onClick:function(){return i(e)},onResolve:function(){return C(e.id)}})})),t&&c.a.createElement("div",{id:"comment-vignette"})),c.a.createElement(u,{isModalOpen:E,onCancel:function(){return C(null)},onResolve:function(){o(n.find((function(e){return e.id===E}))),C(null)}}))}));n(60);var Q=Object(o.b)((function(e){var t=e.isCommenting,n=e.selectedCommentId;return{isCommenting:t,selectedComment:e.comments.flatMap((function(e){return[e].concat(Object(j.a)(e.thread))})).find((function(e){return e.id===n}))}}),(function(e){return{onReturn:function(){e({type:"CANCEL_COMMENT"}),e({type:"CLOSE_THREAD"})},selectComment:function(t){return e(f(t))},deselectComment:function(){return e({type:"DESELECT_COMMENT"})},resolveComment:function(t){return e(v(t))},resolveReply:function(t,n){return e(function(e,t){return{type:"RESOLVE_REPLY",data:{comment:e,reply:t}}}(t,n))},onAddReply:function(t,n){e(function(e,t){return{type:"ADD_REPLY",data:{comment:e,text:t}}}(t,n)),e({type:"CANCEL_COMMENT"})}}}),(function(e,t,n){var a=e.selectedComment,c=Object(s.a)(e,["selectedComment"]),r=t.selectComment,i=t.deselectComment,o=t.resolveComment,m=t.resolveReply,u=Object(s.a)(t,["selectComment","deselectComment","resolveComment","resolveReply"]);return Object(l.a)({},n,{},c,{},u,{onClickComment:function(e){c.isCommenting||e===a||r(e)},onClickReply:function(e){return e!==a?r(e):i()},onResolveComment:function(e){e===a&&i(),e===n.comment?o(e):m(n.comment,e)}})}))((function(e){var t=e.comment,n=e.isCommenting,r=e.onReturn,i=e.onClickComment,o=e.onClickReply,l=e.onAddReply,d=e.onResolveComment,f=Object(s.a)(e,["comment","isCommenting","onReturn","onClickComment","onClickReply","onAddReply","onResolveComment"]),E=Object(a.useState)(),C=Object(m.a)(E,2),b=C[0],h=C[1];return t?c.a.createElement("div",Object.assign({id:"thread-column"},f),c.a.createElement(_,{className:"thread-column-header",iconImage:"assets/left-arrow.svg",headerText:"Back to all comments",onClick:r}),c.a.createElement(B,{comment:t,onClick:function(){return i(t)},onResolve:function(){return h(t.id)}},c.a.createElement(w,{onClick:function(e){return e.stopPropagation()},onClickSubmit:function(e){return l(t,e)}})),c.a.createElement("div",{className:"scroll-column"},t&&t.thread.map((function(e){return c.a.createElement(B,{key:e.id,comment:e,onClick:function(){return o(e)},onResolve:function(){return h(e.id)}})})),n&&c.a.createElement("div",{id:"reply-vignette"})),c.a.createElement(u,{isModalOpen:b,onCancel:function(){return h(null)},onResolve:function(){d([t].concat(Object(j.a)(t.thread)).find((function(e){return e.id===b}))),h(null)}})):null}));var W=Object(o.b)((function(e){var t=e.activeThreadId;return{activeThread:e.comments.find((function(e){return e.id===t}))}}),(function(){return{}}))((function(e){var t=e.activeThread,n=Object(s.a)(e,["activeThread"]);return c.a.createElement("div",{id:"comments-row"},c.a.createElement(J,Object.assign({className:"main-thread"+(t?" main-thread-inactive":"")},n)),c.a.createElement(Q,{className:"active-thread"+(t?"":" active-thread-inactive"),comment:t}))})),Y=n(20),U=n(33);n(62);function K(e,t,n,a){return function(){e&&t(!1),(n=n.filter((function(e){return e.length>1}))).length>0&&a&&a(n.slice(0,n.length-1))}}function Z(e,t,n,a){return function(c){var r=c.nativeEvent,i=r.offsetX,o=r.offsetY;e(!0),t&&t([].concat(Object(j.a)(n),[[{x:i/a.current.clientWidth,y:o/a.current.clientHeight}]]))}}function z(e,t,n,a){return function(c){var r=c.nativeEvent;if(e){var i=r.offsetX,o=r.offsetY;if(t.length>0){var s=t[t.length-1];n&&n([].concat(Object(j.a)(t.slice(0,t.length-1)),[[].concat(Object(j.a)(s),[{x:i/a.current.clientWidth,y:o/a.current.clientHeight}])]))}}}}function X(e){return function(t){var n=t.nativeEvent,a=n.target.getBoundingClientRect(),c=n.targetTouches[0];e({nativeEvent:{offsetX:c.pageX-a.left,offsetY:c.pageY-a.top}})}}function q(e){var t=e.lineWidth,n=void 0===t?3:t,r=e.lineColor,i=void 0===r?"black":r,o=e.value,l=e.onChange,u=Object(s.a)(e,["lineWidth","lineColor","value","onChange"]);o=o||[];var d=Object(a.useRef)(),f=Object(a.useState)(),E=Object(m.a)(f,2),C=E[0],b=E[1],h=Object(a.useState)(!1),v=Object(m.a)(h,2),p=v[0],g=v[1];return Object(a.useEffect)((function(){C||b(d.current.getContext("2d"))}),[d,C]),Object(a.useEffect)((function(){return function(e,t,n,a,c){if(t){t.clearRect(0,0,e.width,e.height);var r=!0,i=!1,o=void 0;try{for(var s,l=n[Symbol.iterator]();!(r=(s=l.next()).done);r=!0){var m=s.value,u=Object(Y.a)(m),d=u[0],f=d.x,E=d.y,C=u.slice(1);t.lineJoin="round",t.lineCap="round",t.lineWidth=a,t.strokeStyle=c,t.beginPath(),t.moveTo(f*e.width,E*e.height);var b=!0,h=!1,v=void 0;try{for(var p,g=C[Symbol.iterator]();!(b=(p=g.next()).done);b=!0){var O=p.value,w=O.x,A=O.y;t.lineTo(w*e.width,A*e.height)}}catch(j){h=!0,v=j}finally{try{b||null==g.return||g.return()}finally{if(h)throw v}}t.stroke()}}catch(j){i=!0,o=j}finally{try{r||null==l.return||l.return()}finally{if(i)throw o}}}}(d.current,C,o,n,i)}),[d,C,o,n,i]),c.a.createElement(U.HotKeys,{allowChanges:!0,className:"draw-canvas-hotkeys",keyMap:{undo:["command+z","ctrl+z","backspace"]},handlers:{undo:K(p,g,o,l)}},c.a.createElement("canvas",Object.assign({ref:d,className:"draw-canvas",width:1024,height:1024,onMouseDown:Z(g,l,o,d),onMouseMove:z(p,o,l,d),onMouseUp:function(){return g(!1)},onTouchStart:X(Z(g,l,o,d)),onTouchMove:X(z(p,o,l,d)),onTouchEnd:function(){return g(!1)},onTouchCancel:K(p,g,o,l)},u)))}n(63);var $=Object(o.b)((function(e){var t=e.cursor,n=e.drawing;return{interactive:t===V,drawing:n}}),(function(e){return{onChange:function(t){return e(function(e){return{type:"UPDATE_DRAWING",data:e}}(t))}}}))((function(e){var t=e.interactive,n=e.drawing,a=e.onChange,r=e.children,i=Object(s.a)(e,["interactive","drawing","onChange","children"]);return c.a.createElement("div",Object.assign({id:"sketch-container"},i),r,c.a.createElement("div",{id:"sketch-canvas",className:t?"":"static"},c.a.createElement(q,{lineWidth:2,lineColor:"#ff0035",value:n,onChange:a})))}));n(64);var ee=function(){var e=Object(a.useState)(!0),t=Object(m.a)(e,2),n=t[0],r=t[1];return c.a.createElement("div",{className:"head"},c.a.createElement("button",{className:"back-button"},"Back"),c.a.createElement("div",{className:"button-row"},c.a.createElement("img",{className:"profile",alt:"Greg",src:"https://assets.website-files.com/5d3152346d95065922960b3a/5db769036b1dff3418bffd20_Greg.jpg"}),c.a.createElement("button",{className:"AR",onClick:function(){return alert("more features to come")}},"AR"),c.a.createElement("button",{className:"share",onClick:function(){return alert("share link copied")}},"Share"),c.a.createElement("button",{className:"eye",onClick:function(){return r(!n)}},c.a.createElement("img",{src:"assets/eye-".concat(n?"open":"closed",".svg"),alt:"Show/hide pins icon"}))),c.a.createElement("div",{className:"greeting-row"},c.a.createElement("span",null,"Nike Zoom Prototype 1")))},te=(n(65),n(15)),ne=n.n(te),ae=n(12),ce=n(1),re=n(34),ie=n(26);function oe(e){var t=e.path,n=(e.activeVariationIds,e.fallback),r=Object(s.a)(e,["path","activeVariationIds","fallback"]),i=Object(a.useState)(),o=Object(m.a)(i,2),l=o[0],u=o[1];return Object(a.useEffect)((function(){l||function(){var e,n,a;ne.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,ne.a.awrap(new Promise((function(e,n){return(new ie.a).load(t,e,void 0,n)})));case 2:e=c.sent,n=e.scene,a=(new ce.Box3).setFromObject(n),n.scale.multiplyScalar(5/Math.max.apply(Math,Object(j.a)(a.getSize(new ce.Vector3).toArray()))),a.setFromObject(n),n.position.copy(a.getCenter(new ce.Vector3)).multiplyScalar(-1),u(e);case 9:case"end":return c.stop()}}))}()}),[t,l]),l?c.a.createElement("primitive",Object.assign({object:l.scene},r)):n}function se(e){var t=e.cameraPosition,n=e.onOrbitChange,r=Object(s.a)(e,["cameraPosition","onOrbitChange"]),i=Object(a.useRef)();Object(ae.c)((function(){var e=i.current;if(t&&!G(t,{position:e.object.position.toArray(),focus:e.target.toArray()})){var n,a,c=t.position,r=t.focus;(n=e.object.position).set.apply(n,Object(j.a)(c)),(a=e.target).set.apply(a,Object(j.a)(r)),e.update()}})),Object(a.useEffect)((function(){var e=i.current;return e.addEventListener("change",n),function(){return e.removeEventListener("change",n)}}),[t,i,n]);var o=Object(ae.d)(),l=o.camera,m=o.gl.domElement;return c.a.createElement("orbitControls",Object.assign({ref:i,args:[l,m]},r))}function le(e){e.color;var t=Object(s.a)(e,["color"]),n=Object(a.useRef)(),r=Object(a.useState)(),i=Object(m.a)(r,2),o=i[0],l=i[1];return Object(a.useEffect)((function(){o||function(){var e;ne.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ne.a.awrap(new Promise((function(e,t){return(new ie.a).load("models/gltf/loading_model_2/Project Name.gltf",e,void 0,t)})));case 2:(e=t.sent).scene.scale.setLength(13),l(e);case 5:case"end":return t.stop()}}))}()}),[o,l]),Object(ae.c)((function(){n.current&&(n.current.rotation.y-=.03)})),o?c.a.createElement("primitive",Object.assign({ref:n,object:o.scene},t)):null}Object(ae.b)({OrbitControls:re.a});var me=Object(o.b)((function(e){return{cameraPosition:e.cameraPosition,activeVariationIds:e.activeVariationIds}}),(function(e){return{onOrbitChange:function(t){var n=t.target,a=n.object.position,c=n.target;return e({type:"CHANGE_CAMERA",data:{position:a.toArray(),focus:c.toArray()}})}}}))((function(e){var t=e.cameraPosition,n=e.modelPath,a=e.onOrbitChange,r=e.activeVariationIds,i=Object(s.a)(e,["cameraPosition","modelPath","onOrbitChange","activeVariationIds"]);return c.a.createElement(ae.a,Object.assign({camera:{fov:60,near:1,position:F},onCreated:function(e){var t=e.gl,n=e.scene;t.outputEncoding=ce.sRGBEncoding,n.background=new ce.Color(16448250)}},i),c.a.createElement(se,{cameraPosition:t,minDistance:1,maxDistance:50,onOrbitChange:a}),c.a.createElement("ambientLight",null),c.a.createElement(oe,{path:n,activeVariationIds:r,fallback:c.a.createElement(le,null)}))}));n(69);var ue=Object(o.b)((function(e,t){return{selected:e.activeVariationIds[t.id]}}),(function(){return{}}))((function(e){e.id;var t=e.name,n=e.thumbnail,r=e.selected,i=Object(s.a)(e,["id","name","thumbnail","selected"]),o=Object(a.useState)(!1),l=Object(m.a)(o,2),u=l[0],d=l[1];return c.a.createElement("div",Object.assign({className:"variation",onMouseEnter:function(){return d(!0)},onMouseLeave:function(){return d(!1)}},i),c.a.createElement("span",{className:"variation-name"},t),c.a.createElement("img",{className:"variation-thumbnail-image",src:n,alt:"".concat(t," thumbnail")}),(r||u)&&c.a.createElement("div",{className:"variation-checked-circle"+(r?" selected":"")},r&&c.a.createElement("img",{src:"assets/variation-check.svg",alt:"Variation checked icon"})))}));n(70);var de=Object(o.b)((function(e){return{activeVariationIds:e.activeVariationIds,variations:e.variations}}),(function(e){return{selectVariation:function(t){return e(function(e){return{type:"SELECT_VARIATION",data:e}}(t))},deselectVariation:function(t){return e(function(e){return{type:"DESELECT_VARIATION",data:e}}(t))},deselectComment:function(){return e({type:"DESELECT_COMMENT"})}}}),(function(e,t,n){var a=t.selectVariation,c=t.deselectVariation,r=t.deselectComment,i=e.activeVariationIds,o=Object(s.a)(e,["activeVariationIds"]);return Object(l.a)({},n,{},o,{onClickVariation:function(e){r(),i[e.id]?c(e):a(e)}})}))((function(e){var t=e.variations,n=e.onClickVariation,a=Object(s.a)(e,["variations","onClickVariation"]);return c.a.createElement("div",Object.assign({id:"variations-column"},a),c.a.createElement(_,{className:"variations-header",headerText:"Iterations"}),c.a.createElement("div",{className:"variations-scroll-column"},t.map((function(e){return c.a.createElement(ue,Object.assign({key:e.id,onClick:function(){return n(e)}},e))}))))}));var fe=Object(o.b)((function(e){var t=e.cursor,n=e.activeVariationIds,a=e.variations;return{cursor:t,activeVariations:Object.keys(n).filter((function(e){return n[e]})).map((function(e){return a.find((function(t){var n=t.id;return"".concat(n)===e}))}))}}),(function(e){return{onClickTopCamera:function(){e({type:"DESELECT_COMMENT"}),e(d({position:[0,4,0],focus:[0,0,0]}))},onClickFrontCamera:function(){e({type:"DESELECT_COMMENT"}),e(d({position:[0,0,4],focus:[0,0,0]}))},onClickSideCamera:function(){e({type:"DESELECT_COMMENT"}),e(d({position:[-4,0,0],focus:[0,0,0]}))}}}))((function(e){var t=e.cursor,n=e.activeVariations,a=e.onClickTopCamera,r=e.onClickFrontCamera,i=e.onClickSideCamera;return c.a.createElement("div",{id:"app-container",className:t},c.a.createElement(ee,null),c.a.createElement("div",{id:"main-area"},c.a.createElement(de,null),c.a.createElement($,{className:"draw-over"},c.a.createElement("div",{className:"renderer-row"},n.map((function(e){return c.a.createElement("div",{key:e.id,className:"renderer",style:{width:"calc(100%/".concat(n.length,")")}},c.a.createElement(me,{modelPath:e.model}))}))),c.a.createElement("div",{className:"camera-button-row"},c.a.createElement("button",{className:"camera-button top-camera-button",onClick:a},c.a.createElement("div",{className:"camera-button-icon-container"},c.a.createElement("img",{src:"assets/top-icon.svg",alt:"Top camera view icon"})),"Top"),c.a.createElement("button",{className:"camera-button front-camera-button",onClick:r},c.a.createElement("div",{className:"camera-button-icon-container"},c.a.createElement("img",{src:"assets/front-icon.svg",alt:"Top camera view icon"})),"Front"),c.a.createElement("button",{className:"camera-button side-camera-button",onClick:i},c.a.createElement("div",{className:"camera-button-icon-container"},c.a.createElement("img",{src:"assets/side-icon.svg",alt:"Top camera view icon"})),"Side"))),c.a.createElement(W,null)))}));i.a.render(c.a.createElement(o.a,{store:P},c.a.createElement(fe,null)),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.9611521e.chunk.js.map