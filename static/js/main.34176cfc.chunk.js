(this.webpackJsonpcollab3d=this.webpackJsonpcollab3d||[]).push([[0],{38:function(e,t,n){e.exports=n(67)},46:function(e,t,n){},47:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(10),r=n.n(o),i=n(8),l=n(4),m=(n(46),n(5)),s=n(3);n(47);function u(e){var t=e.isModalOpen,n=e.onCancel,a=e.onResolve,o=Object(l.a)(e,["isModalOpen","onCancel","onResolve"]);return c.a.createElement("div",{id:"modal",className:t?"":"hide",onClick:n},c.a.createElement("div",Object.assign({id:"modal-dialog",onClick:function(e){return e.stopPropagation()}},o),c.a.createElement("span",{id:"modal-warning"},"Are you sure you want to resolve?"),c.a.createElement("div",{id:"modal-actions"},c.a.createElement("span",{id:"modal-cancel",onClick:function(e){e.stopPropagation(),n()}},"Cancel"),c.a.createElement("span",{id:"modal-submit",onClick:function(e){e.stopPropagation(),a()}},"Submit"))))}function d(e){return{type:"MOVE_CAMERA",data:e}}function f(e){return{type:"SELECT_COMMENT",data:e}}function E(){return{type:"DESELECT_COMMENT"}}function C(){return{type:"UNATTACH_DRAW_OVER"}}function b(){return{type:"UNATTACH_PIN"}}function p(){return{type:"CANCEL_COMMENT"}}function h(e){return{type:"RESOLVE_COMMENT",data:e}}var g=n(28),v=n.n(g),O=n(29);n(52);var A=Object(i.b)((function(e){var t=e.isCommenting,n=e.fileIsAttached,a=e.file,c=e.drawOverIsAttached,o=e.drawing,r=e.pinIsAttached,i=e.pin;return{fileIsAttached:n,drawOverIsAttached:c,pinIsAttached:r,cancelEnabled:t,submitEnabled:n&&a||c&&o||r&&i}}),{deselectComment:E,beginComment:function(){return{type:"BEGIN_COMMENT"}},attachFile:function(){return{type:"ATTACH_FILE"}},unattachFile:function(){return{type:"UNATTACH_FILE"}},attachDrawOver:function(){return{type:"ATTACH_DRAW_OVER"}},unattachDrawOver:C,attachPin:function(){return{type:"ATTACH_PIN"}},unattachPin:b,cancelComment:p},(function(e,t,n){var a=t.deselectComment,c=t.beginComment,o=t.attachFile,r=t.unattachFile,i=t.attachDrawOver,l=t.unattachDrawOver,s=t.attachPin,u=t.unattachPin,d=t.cancelComment;return Object(m.a)({},n,{},e,{onFocusTextArea:function(){e.isCommenting||(a(),c())},onBlurTextArea:function(t){return!e.fileIsAttached&&!e.drawOverIsAttached&&!e.pinIsAttached&&(!t||0===t.length)&&d()},onClickAttachFile:function(t){e.fileIsAttached?e.drawOverIsAttached||e.pinIsAttached||t&&0!==t.length?r():d():(e.cancelEnabled||(a(),c()),o())},onClickAttachDrawOver:function(t){e.drawOverIsAttached?e.fileIsAttached||e.pinIsAttached||t&&0!==t.length?l():d():(e.cancelEnabled||(a(),c()),i())},onClickAttachPin:function(t){e.pinIsAttached?e.fileIsAttached||e.drawOverIsAttached||t&&0!==t.length?u():d():(e.cancelEnabled||(a(),c()),s())},onClickCancel:function(){return d()}})}))((function(e){var t=e.pinAttachable,n=void 0!==t&&t,o=(e.mainThread,e.fileIsAttached),r=e.drawOverIsAttached,i=e.pinIsAttached,m=e.cancelEnabled,u=e.submitEnabled,d=e.onFocusTextArea,f=e.onBlurTextArea,E=e.onClickAttachFile,C=e.onClickAttachDrawOver,b=e.onClickAttachPin,p=e.onClickCancel,h=e.onClickSubmit,g=void 0===h?function(){}:h,A=Object(l.a)(e,["pinAttachable","mainThread","fileIsAttached","drawOverIsAttached","pinIsAttached","cancelEnabled","submitEnabled","onFocusTextArea","onBlurTextArea","onClickAttachFile","onClickAttachDrawOver","onClickAttachPin","onClickCancel","onClickSubmit"]),w=Object(a.useState)(),T=Object(s.a)(w,2),y=T[0],k=T[1];return c.a.createElement("div",Object.assign({className:"comment-input-column"},A),c.a.createElement(v.a,{className:"comment-input-text-area",placeholder:"Add a comment",value:y,onChange:function(e){return k(e.target.value)},onFocus:d,onBlur:function(){return f(y)}}),c.a.createElement("div",{className:"comment-input-actions-row"},c.a.createElement("div",{className:"comment-input-icon-actions"},c.a.createElement("button",{className:"comment-input-icon-action-button"+(o?" active":""),"data-tip":"Attach file",onClick:function(){return E(y)}},c.a.createElement("img",{src:"assets/clip.svg",alt:"File attachment icon"})),c.a.createElement("button",{className:"comment-input-icon-action-button"+(r?" active":""),"data-tip":"Drawover",onClick:function(){return C(y)}},c.a.createElement("img",{src:"assets/pencil.svg",alt:"File attachment icon"})),n&&c.a.createElement("button",{className:"comment-input-icon-action-button"+(i?" active":""),"data-tip":"Pin",onClick:function(){return b(y)}},c.a.createElement("img",{src:"assets/pin.svg",alt:"File attachment icon"})),c.a.createElement(O.a,{className:"comment-input-tooltip",place:"bottom",effect:"solid"})),c.a.createElement("div",{className:"comment-input-text-actions"},c.a.createElement("button",{className:"comment-input-text-action-button comment-input-cancel-button",disabled:!(m||y&&y.length>0),onClick:function(){k(""),p()}},"Cancel"),c.a.createElement("button",{className:"comment-input-text-action-button comment-input-submit-button",disabled:!(u||y&&y.length>0),onClick:function(){g(y||""),k("")}},"Submit"))))})),w=n(7),T=n(20),y=n.n(T),k=n(14),N=n(30);n(53);function j(e){var t=e.src,n=e.author;return t?c.a.createElement("img",{className:"profile-picture",src:t,alt:n}):c.a.createElement("div",{className:"initials"},n.split(" ").filter((function(e,t,n){return 0===t||t===n.length-1})).map((function(e){return e[0].toLocaleUpperCase()})).join(""))}n(54);function I(e,t){var n=new Date(e.valueOf());return n.setDate(e.getDate()+t),n}function D(e){var t=e.profilePic,n=e.author,o=e.date,r=e.redrawEnabled,i=e.onRedraw,l=e.onResolve,m=Object(a.useState)(!1),u=Object(s.a)(m,2),d=u[0],f=u[1];return Object(a.useEffect)((function(){d&&f(!1)}),[d,f]),c.a.createElement("div",{className:"comment-top-row"},c.a.createElement(j,{src:t,author:n}),c.a.createElement("div",{className:"comment-top-column"},c.a.createElement("div",{className:"author-name"},n),c.a.createElement("div",{className:"comment-date"},function(e){var t=new Date,n=new Date(e);return t.toDateString()===n.toDateString()?"".concat(n.toLocaleTimeString(navigator.language,{timeStyle:"short"})," Today"):t.toDateString()===I(n,1).toDateString()?"Yesterday":n.toLocaleDateString(navigator.language,{dateStyle:"medium"})}(o))),r&&c.a.createElement("button",{className:"top-row-redo-button",onClick:i},"Redraw"),c.a.createElement(N.a,{className:"top-row-popup",trigger:c.a.createElement("button",{className:"small-icon-button"},c.a.createElement("img",{src:"assets/dots.svg",alt:"More options icon"})),position:"bottom right",on:"click",closeOnDocumentClick:!0,closeOnEscape:!0,disabled:d,arrow:!1},c.a.createElement("div",{className:"top-row-menu"},c.a.createElement("div",{className:"top-row-menu-options-row"},"Options",c.a.createElement("button",{className:"small-icon-button"},c.a.createElement("img",{src:"assets/close.svg",alt:"Close menu icon",onClick:function(){return f(!0)}}))),c.a.createElement("div",{onClick:function(){f(!0),l()}},"Resolve"),c.a.createElement("div",{onClick:function(){return f(!0)}},"Edit"),c.a.createElement("div",{onClick:function(){f(!0),l()}},"Delete"))))}var R=[{id:1,author:"Steve Singh",date:(new Date).getTime(),text:"I dont like how the openings end before the bottom of the black canvas, what can we do about this?",camera:{position:[3.6724893617668513,.10448181831762553,-.10443959458119491],focus:[0,0,0]},thread:[]},{id:2,author:"Ed Lazowska",date:I(new Date,-1).getTime(),text:"I'm really proud of the lacing design here, do we think it will be too complicated?",camera:{position:[-.2391278466290959,.2413250726086689,1.7599386342780603],focus:[0,0,0]},thread:[]},{id:3,author:"Dan Levitan",date:I(new Date,-2).getTime(),text:"I love the differnent fonts, but make the nike and zoom closer together in size",drawOver:"NrDeCIA9wLgBgHQGYCsSBMB2AbKjO91sAacAT1kQBYAOOATgEZs4k40rVHHMBfYiNHjIU2RujSjxksaQrCqmenDgFUNTJhrYJ-QZRE16mTiiMnU9OQcWYG9dEmzYq49Iyp6oBpxkXa-LVxHawVMDBp0KiosWgZmLyFEJ0wUdxS0xgyUUOpMLJM4KjM4RjTsPgFvYSQ7WtY6xtYc8ht82qoikrKiSv0akxckDSohkedchFH6UdFaGhQqejEaTyqk5C0mcK2eWqNJ0dSUTAlGZRokZfpEnxoeZ2GH3HuaQ4qUE7OLq+wb9buLCuNG0rHoIJYVHecxBi2WjEu6Dg2FuNRB6IxmKsrQUuEKxToPQq6FRyXoSGYjnJlKuFJa8moeM6BNK5VOpOQxlM5m5XMOKHoDicLjcBTW-WopTsMylDE6PH5gsczlc6HSJg5zM+qy6ZmZJBx1G6bJ4n1OKE1cBBFIul3OVtW-MJJuO5s13GwdCYzC93Ew-LEyI0cDVylULndFPYrijiyyjADjCDdlDKhw4uq1D2ux2Rj2BoZUykyZD6DD6c1SLVSirWAcIcTJdT4YzGxizDS7ewnfcFUbnpTZbTEYBCgkDgF46nAqQ-eDzYro+o6A0Jgcq6WK7ehqLgYHpfLI4lUwpOlpNOpLjng8PrZs6i5D4sAuvB+Hd4UtQw5y-7nJ4VfBcj0zKZ5WlMC5VKAsbDjcFFAiKIYj6EDolQtD0OiflXDg8IV0QrBNUUMskGiU5yVI2cd2KICkHUTQNE1FBShiYpmKiJisn5Gi6K0ZC20WVwBQEsp6AErih3DWizHoviYNOFxRPkpYvnpGDuOk3jGO0IwCU9GZpPEw8pNXBilymMQ0FWCzhlGMpoIUNIJLUDTTOPUZOHGDzBk4f0qMcoyeNclDu3uc4Qu4ZYzEM4djJkzVPWcBgEpYZYNGiyTAtksIynsfImMFPKoT81h7gqckjApMsLTMxReWfHkSP5ErmCUYZqSqzVNCRJQutUYxTiap4yrayrRM1e5aA8Cbpo8VSFFmFxYSWFYMCQcbODYWgNqKVZKMLaJu0WhZloRVbxvyJRaAumYNAVKiFvmOEVscTUmGowVZrLN69psA6YWO+FLler4FJB5STEOP6jqe07XoWVIlnhuFtEh2JfSBdgSOq48OJY3H2NZVGTHR1hMeKDkmKQ1AiiwanOCJuImAxjhsZApj8jVdm3HZ9AGZJtgWYp7hflKLJllFor9qQxnmFJwWzJQDwCaV1ilb5+JmaxoXwNlGUeATe6rV+GZDsetaFfOGY2EtzgGyokbxH6+xHCyxBHJrUsPerQ4HbLTRndqCmsGRT5g+7NJ8h9irHf9pVA4VilaOUROrlYDwo-ap249dhAOAROgSPz1gYgz0bY6FHO0Caeoa8j+3o796UK4pmMkzjWMY1LmOm5dlvBNE6IRIE3n68z8ve4VrbaJ27atq7xuA8rxW8PYcRIlXn7PwbrPm4V9u29b6MDf232d4nnHRHBFRL7odg-nns-44v8EhwFSJlDfh-x6ftmdAqOg-5aGREQH2N4Yp0RRArZwok7J-EVqIe+9swEZWkpAnGHMJCqG5lgze1B6jqQ0GgtmhQSGdFIcfe8yDnKEIpj1U4fVepKG3CfKhuAIEUx1MUPUupHRILfCgmhCtrT2mEbaXBJ5WGxSIRsScsiJzyJAXwghOAKapUSmolKnpQH8OoSohWBUcoGPysYbRyjpEGBYBIEUIY5hJgkKYpybDUEchYPvI+HcHEBWcWZFgkQdBJj8e4K0I8WE6KcYI48YhuDRJiTEkJlCwlSJcWUGy1krJlElgksxyTIi0RWI4JwCJ4mfkkewnxQTAkBKIO4ChJTEllMiRIVAYgmlSAkJkup2TynLDLDoHp-TfKhK6ZEpOadRkp2xEMxxSSfFPBwC8Z4wxil4NKd4yJeM2KqxYp48BayQIuGJE4I4yojg7IEXo9ZM1JrXPuGc3R5jhDdlyoY4whi7nhIufs0Odhw5h0+OIny9S9kbHCmFMwEVwrvJmZEzR2hYXqKhQ0-Z3Yoi9h7B2AF+DplIpBZ6eIPp8WelqSsoFETkUwIQRS6Bc0SXDP2acI5hyDkMsRcCixqR0gfE5akTFqyyUgqAYAgBvRblKOxWyx5uTClSvyby0lnyQWXBwEGWoLBPTDFZfyixcKko6o0ZqhVFixEiLtBcA1DzEB-EcOGIUNqQhiq8Vqx5VK4GwNEssk829v45z+KCyKoVIqQyNtcB6sJzaRMFLbG21tBQ0tAsGv4oaFjhpAnYK0iw03HUzUGy4IbTZho5IOL2dYqwAs6LmxN+bk2FtXivZe680g5uNkmtANbfk-O+SHJteb-qtrMjrHgkFB0zHVkzOWWt+1VP8cE6dzDfpow1uO8mk7OZYNXRg0dssBYTuPBgrm663Cbs1su3dWQuVno5QUSGLaTpA0ncYvKzzFbXqrTDO9p7Lq3U-fkOd80b2AxTRsfI-5vwgb-B06gW1cKRGiGjRghbur9UQ71X9kHVjQfwsTeD-bkP0LoUiVDoF0MIVg1hhDaoKOUao4NUqrVt6syA5gvda6zg0ZauVTODGDCnGLbxyZalxUmRzmREiRFyJiYg0WbCxG8KkcLWwHAtrFPWsGTBaT8FZNIXk3+X8P5cIeuKHuecjiPyIFwnp0Dv4DPFn3EBUzCBwjSoKbKpwTpWS9FNCpeTlNaY+fCM+vyccVSig6N5mm-nwtcEVEKYLaoxTyeZScplknbKImREmWzgHuOMoZYlo57wOhdGdL0Ek-b9jbHK9mfjuJCssiJOyMrl4qSnipCl19t6MDIkLV2dFKKYgGfawBpEFqHM9dRR2VFA3XTfATf8XddUFuuaopW3tt77P1UfGYR89lGQm1W4DdbWzlZ42JVMdo+JjS9G6-jI7xRTuKDFEV9zFRutjG8sMbyhwMOkZliNkwQRAgBCiEoL7JHpbo26+uTQm4Nzki+4rH4PbuyFv3Ux7Bqmwg92FKqdw63Uf49UF9rHsXcco+5ZkDI7gvuOvojoLjwhL2U4vZkQ4-MyZcB4Cj5p0hudNJ21MNnHAOfCZkDztpaB+e0E0wusdWWGei9aS0iXrPpfE0XXLszCutdLf2jJmD4OGBc-F7z5XVE9eYcZkbpXJudc2DhTjx7BIrdi+t5L+3IWLs0Gd4rnnbuAbPXS8iEXiMTjI1D0sVn-vTrDYy8H8E4f48I2q9QZQdWXSiBR9YqxrgbFXioqny7FRTR-ZOJcRQpeSKpC0IcGLIo4u1fp5rhRcjxwAtrw7hvKPm-d7bwb2XmMS-d+nHD-Pfet0D678P4fbfBckS4HjofciZ-q-Z4rBfU+l+TEbw5lvu+R+Fm38q9VR+lVqq36URHK2FKFrVaflVR-z8iObabObqbZ3VKnVTncTEhp0bHjfipD-GdL-A-ZqYaL1AAz-KA8-FSJ-ENYTd-RAkAgwdmD5IIccP7JA6A7-c5dAgUTAwArA8-Aec4c3aISA4A7A0AkgnCMHCgypSgrfbgViX-DjDXBzLAxg7-Zgn-WjNg+goAypJg2KPAgeUrXdTgoQ7gkQ7QccRYcQt-QgpQ07eBDzabBHbDCQ5Qrgg-fWdQkRdbSQj-Jgi6M0GbVYAQog7gy-PbI6Sw5QpgmwpNewqglApEILOvdUFwnQtwgOEnAobwqQg-ZRTSftIw-xLfEIoKIDcI5A4QTsWfUwG-e-W-VVZESIovfQi4QwlI3I-nNIWQoSdTXCSfPfVvSIwomgmTUoxfffFA7dUwHgkqBQoDCvcvLQSvUvLfBojnFgyIFHDo9osvKvQjNAC3fmTQ1NWxXPHPbPbo8Y9XSY1okPJPJGCPb-OfRWWaMApQFHFYsPJPbounKojTL3ftCnc9JnLfToXA2QkvFjAnDHN2G43RdAv7GHaHKHNccRWCMgpCQ-dyD7QEzya40+ceQ7G7SElQtPNQsw7rNFcbPrNUa47+EnFo7jMhTE1QLEp43OVQzIswhHeTHMSrHYZPPE+rTzc0c4BLY5HLE5LfIXLYvon0MLKmPzKLb-JkpooaM43dSzczMDD1T4bk7YoaeTO1BTK1BTRk6kpw5wBDPjWsEHLkuU2bUYP7IgcGLUxSIgONT4fvUUw-JLXLOk3EmzYzIyQtCzHTQUyTUQBeDw1Ua079HgG6H9LfaGDrYbdEhnF5R9IxFQr0obYBa0g9cM4U4MgPHQGtPWAdcCT0x6b00M-tBhPDJDK0RMpaEMmM1M9tEOCOLtb-KM6PFM3dBoCs2uBoLMqPNLXM8s9NRQFQLNZsmst9Tres-ZSNGNK2C-USNs5MzskFf1CFcFMFAcnM30y1MDG0vTCc6MqchAPSXSHSMwPSfUksusxcz0AuVwEEYufOec0soc7VdRZKXVCYYs8AsefIFxBYBERWe8p8xtK8v-MuW8nxGVIpPJb8z06898pY7VQlX0AlckhBN87uQCx5QVEVYBf+IM-8yClxeZOZR4e4eZP8iCxuKCy1XMCrEk0Y2zcVV-AVE0sin4oirxEi9lIdeMhgT0y03Zaix5V1SleBalBi1ZZiy1PFb0Xij0UVA-SipilxJEibHrCixilBbipchZFC9CtCzioFGSs8vVc8sC4S6SlxMckcsFQSlAzS5yFStit1di80wypxYy1JFJdJNAMCn5DLKSn1B9f0t5b-BypsJyFxOkvLZlLfDywy7yoEt7QE+ywPQKnxWY6Y7Pbgfy8KpylxVCuStC4UgKhK2ZMYggTK3ARYOKozKhRK4HIHfwYIfUtKgq2ZA+eMdxWK9y+KiqxpBtNeJEetVK+qnRFxH3Lq3Kuq-Kjq8pNHCMsq9qhcTqqAyglQ8q-qyJb8pzH8yIfy8w5-DPHxGy2ySyda+0tUitWw5JEWYWcWZgxahHdUw6ZJWJC67gVKpapHFxC8+FFKc07a5akbVIk-NIrRdym6q-O6txP6ra763anxUWfasWFgcQY6uAn6-Rd+dgF+D+cEH45626-RdStG0Y5G6GnGWoqcfIzGoGnGBqLbDbDGwGhaDhZctc1c7SSG+UlawmwQxmvGsms6hWfDNMxDUmk6na8mtm6UyUm1Wm06+m4hHEsWyalmkWmRZjGWziL67ml6imY-N62-AGhWlGnGLPaK2xIWnm1mzWl3Q2pGyWkbbULUbhLhXhA-fG3mi+EU+2h20QXWxWveZq2tJq429WrGtmS282zhJ2+WqGgmn23zSLPzZ2jWtmYEUEaOoEQUCO72mRQufc5O3c66r24OpOrIVOCZNONWoO22tmP5Qs9tCWjOwumRRE3rHsBOzOtw5ncnXHWuiulA4dCCOMsugu-WtmFWSEtiZu7umRA68GsGiWAeqWlAp9J9Tuum02h4+egaQO2eimMO1e+mJe4Wue3uzZDiMqk216AM15Fy-O5emqL4j4tcMscekbeYOOiEMECEa+9aaeKeTaXaJ+mqK5L+2aD+tyRhDM-DX+lCEYzowY1ILmruiesIYiUiGBiTIBtsTNDNZs5Bmeze+KNSzBp6-emqZLPBxe62nBtyP1EhqKDevWqBxkLyYE97bB8uwemwNJda6ygOwh+hyh8yEGw60etBihm+qm-SbSQRuhyB-hpSXU0Gc0BBtTfuYSIok+9Bmqdi1i6lZgaRhyHezRuWth0RwiL9d0t0q6T23RmqMTUTETCidRyDDCGxhRvhwiHsqNbsqx0CIeQeeRtR8hl2tydu3xqCFxnyAUoJgJp8RbF8LxyOtsF+3aN+7aPe9hm+lrc8M8S8Ox7xlCRxzJu2HR0+tyUO9kyLYx3JlCDfHvAJ47Cp4oIpxRvJqUpTaU3h9JtsZU+sasVpgJouVOg8kEDpjxvp5YDp96N6NID6QzDpjuaq-eDpmYuxaKrakarymqB0G0ZZk1eZvq0apZ0hbEnZiGXqxyhqlCOG2Gt+IcfIiyqSGSzoXOm5hCrC-qHCqYFQFcJYZ51YMMLATCtgpCsyWOh+mO8ENKV8757CjkK4DbCF+0zcjsxc0GuFgZ4sx09vcQMFprZJ5rMoT0g5xJVFsZHO7O5OLFzyq035zEMl9EDS7FmiMFzyYK6h+0gUcfI0mlu+gF++hlm2hU0l5h2y1JDllmkbJKoV14Rk0UlkwV3czpvcguUVzYnk0qMFkkpVg4LkuVsU0qPkkCWoS+2HFcaHc0sV3g1k3597Wl8YfI-E0w2AmS3TGcsDa4nMg5xVwx-Rq6BEFE4nTw2F66N1100Y2wPwr1sFymoRlc-s7-GEgkr4YN6mkN9c64wvK1hrY8YUe6+66EsEnuezeknNlwc0jyG852bN4IEqwHYIH44osHLAbfOa2tlaa40g04zDGt1l1toobovgzNsF4msJsC1grt35hPNYxPfIpwOQytlcbt63Y3KQI48dxt6DbtpsxspBxQboxo9V9jbt-AHKndwgUdhY2XR5rgZ8h8s9lGDYw9rdY9jk299tjY1feV2F15kMd5t59Yg-Ho5k3g59kBoYyvfIlcY434jTMF-98DnADIpN8w7NnluDiySI37JdVAMDphtDzF7-KInOcxuBix2qSIwNjvbD2B8TPDvZ3Q2e+YMDqVmjsCvQwkgw6jlO6Vg8uj9Pa149v2rjooH47OlyYDmIMDnhbj9e3Qzd-8sF-F8ZAl1gJg8Tt8yT5OGTm54gkD77bNqTzTwlnAk49TxTvFpT8Zc-V4yowVrTgz2TnAkz44szwz8zn49gG27D+z5T8-ftiA35lzoznA9z--TzuzgLyz0A0RpYfT257z4Lyjm1rznOrfML5T1z7-eL6TiLmwK+Q0uVjTwLlT-PRI+fZL+zmvaMqloT324TnjmvMfTWQVkTs2ir0fGXJlpwJjyV5j84Srxr6rsD6J2eGJjrtXDLmrsxkj8xlLGYTr8dIbsj3Dsbqryb1Dta9DuNTcbHD3LUBbjapbmvZUTwx3GtiDtoyD-PHboj9b35g7sByXZF+vC7MDj5t919j9tLk7tbroO799+7p7hQa79UM7lNu9gpsbl7m7v7rVx88H89x8q74H37t7wdyHhHi9-aH7vb7drAXd9H-d7b1bkHuH-7vd7KrH47nH2Hk9MH5dlsldmvJ7Sk1IQV5BldlBtd-PGn9PeninhnrNanyN0w9n1d-nyPdsmPIPJd-npn3E2gfwhvTVjYVADn+XiX93XHp3QdhX8X1nJtn7L0UX8X9Xs3TXvvHXxnqns3VXJD9guXsXk33XM3-mI3ynrns3FfUUvgAAXVd6AA",camera:{position:[1.2556252511652628,-1.8845128318655633,-.006335531414734807],focus:[1.2637327202535016,0,-.09982552431336995]},thread:[]}],M="pointer",x="drawover",S="pin",F=[0,2,4],H={cursor:M,activeCameraPosition:{position:F,focus:[0,0,0]},cameraPosition:{position:F,focus:[0,0,0]},isCommenting:!1,fileIsAttached:!1,drawOverIsAttached:!1,pinIsAttached:!1,maxCommentId:3,comments:R};var Y=Object(k.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.data;function c(e,t){return e===t||e&&t&&e.position.every((function(e,n){return Math.abs(e-t.position[n])<1e-10}))&&e.focus.every((function(e,n){return Math.abs(e-t.focus[n])<1e-10}))}switch(n){case"CHANGE_CAMERA":var o=e.comments.find((function(t){return t.id===e.selectedCommentId}));return o&&!c(o.camera,a)?Object(m.a)({},e,{cameraPosition:a,selectedCommentId:null,drawing:null}):Object(m.a)({},e,{activeCameraPosition:null,cameraPosition:a});case"MOVE_CAMERA":return Object(m.a)({},e,{activeCameraPosition:a});case"SELECT_COMMENT":return Object(m.a)({},e,{selectedCommentId:a.id,drawing:a.drawOver&&JSON.parse(y.a.decompressFromEncodedURIComponent(a.drawOver))});case"DESELECT_COMMENT":return Object(m.a)({},e,{selectedCommentId:null,drawing:null});case"RESOLVE_COMMENT":return Object(m.a)({},e,{comments:e.comments.filter((function(e){return e.id!==a.id}))});case"RESOLVE_REPLY":return Object(m.a)({},e,{comments:e.comments.map((function(e){return e.id===a.comment.id?Object(m.a)({},e,{thread:e.thread.filter((function(e){return e.id!==a.reply.id}))}):e}))});case"BEGIN_COMMENT":return Object(m.a)({},e,{isCommenting:!0});case"ATTACH_FILE":return Object(m.a)({},e,{fileIsAttached:!0});case"UNATTACH_FILE":return Object(m.a)({},e,{fileIsAttached:!1,attachedFile:null});case"ATTACH_DRAW_OVER":return Object(m.a)({},e,{drawOverIsAttached:!0,cursor:x});case"UNATTACH_DRAW_OVER":return Object(m.a)({},e,{drawOverIsAttached:!1,drawing:null,cursor:M});case"ATTACH_PIN":return Object(m.a)({},e,{pinIsAttached:!0,cursor:S});case"UNATTACH_PIN":return Object(m.a)({},e,{pinIsAttached:!1,attachedPin:null,cursor:M});case"CANCEL_COMMENT":return Object(m.a)({},e,{isCommenting:!1,fileIsAttached:!1,attachedFile:null,drawOverIsAttached:!1,drawing:null,pinIsAttached:!1,pin:null,cursor:M});case"ADD_COMMENT":return Object(m.a)({},e,{maxCommentId:1+e.maxCommentId,comments:[{id:1+e.maxCommentId,author:"Greg Gottesman",date:(new Date).getTime(),text:a,file:e.file,drawOver:y.a.compressToEncodedURIComponent(JSON.stringify(e.drawing)),pin:e.pin,camera:e.cameraPosition,thread:[]}].concat(Object(w.a)(e.comments))});case"ADD_REPLY":return Object(m.a)({},e,{maxCommentId:1+e.maxCommentId,comments:e.comments.map((function(t){return t.id===a.comment.id?Object(m.a)({},t,{thread:[{id:1+e.maxCommentId,author:"Greg Gottesman",date:(new Date).getTime(),text:a.text,file:e.file,drawOver:y.a.compressToEncodedURIComponent(JSON.stringify(e.drawing))}].concat(Object(w.a)(t.thread))}):t}))});case"OPEN_THREAD":return Object(m.a)({},e,{activeThreadId:a.id});case"CLOSE_THREAD":return Object(m.a)({},e,{activeThreadId:null});case"UPDATE_DRAWING":return Object(m.a)({},e,{drawing:a});default:return e}}));n(55);var L=Object(i.b)((function(e){var t=e.cursor,n=e.drawing,a=e.pin;return{redrawEnabled:t===x&&n,repinEnabled:t===S&&a}}),(function(e){return{onRedraw:function(){e({type:"UNATTACH_DRAW_OVER"})},onRepin:function(){e({type:"UNATTACH_PIN"})}}}))((function(e){var t=e.headerText,n=e.iconImage,a=e.className,o=e.redrawEnabled,r=e.repinEnabled,i=e.onRedraw,m=e.onRepin,s=Object(l.a)(e,["headerText","iconImage","className","redrawEnabled","repinEnabled","onRedraw","onRepin"]);return c.a.createElement("div",Object.assign({className:"comments-column-header-row"+(a?" "+a:"")},s),c.a.createElement("div",null,n&&c.a.createElement("img",{className:"comments-column-header-icon-image",src:n,alt:"Back icon"}),c.a.createElement("span",{className:"comments-column-header-text"},t)),!n&&o&&c.a.createElement("button",{className:"comments-column-header-redo-button",onClick:i},"Redraw"),!n&&r&&c.a.createElement("button",{className:"comments-column-header-redo-button",onClick:m},"Repin"))}));n(56);var P=Object(i.b)((function(e,t){var n=e.cursor,a=e.activeThreadId,c=e.selectedCommentId,o=e.drawing,r=t.comment.id;return{selected:r===c,redrawEnabled:r===a&&n===x&&o}}),(function(e){return{onRedraw:function(){e({type:"UNATTACH_DRAW_OVER"})}}}))((function(e){var t=e.comment,n=t.text,a=t.drawOver,o=t.pin,r=Object(l.a)(t,["text","drawOver","pin"]),i=e.selected,m=e.redrawEnabled,s=e.onRedraw,u=e.onResolve,d=e.children,f=Object(l.a)(e,["comment","selected","redrawEnabled","onRedraw","onResolve","children"]);return c.a.createElement("div",Object.assign({className:"comment"+(i?" selected":"")},f),c.a.createElement("div",{className:"comment-content"},c.a.createElement(D,Object.assign({},r,{redrawEnabled:m,onRedraw:s,onResolve:u})),c.a.createElement("p",{className:"comment-text"},n),d),c.a.createElement("div",{className:"comment-flag-row"},a&&c.a.createElement("img",{className:"comment-flag",src:"assets/drawover-flag.svg",alt:"Drawover flag"}),o&&c.a.createElement("img",{className:"comment-flag",src:"assets/pin-flag.svg",alt:"Pin flag"})))}));n(57);var G=Object(i.b)(null,(function(e,t){var n=t.comment;return{onClickReply:function(){e({type:"CANCEL_COMMENT"}),e(f(n)),e(function(e){return{type:"OPEN_THREAD",data:e}}(n))}}}))((function(e){var t=e.comment,n=t.thread,a=Object(l.a)(t,["thread"]),o=e.onClickReply,r=Object(l.a)(e,["comment","onClickReply"]);return c.a.createElement(P,Object.assign({comment:a},r),c.a.createElement("button",{className:"reply-button",onClick:function(e){e.stopPropagation(),o()}},function(e){return e&&e.length>0?e.length>1?"".concat(e.length," Replies"):"1 Reply":"Reply"}(n)))}));n(58);var U=Object(i.b)((function(e){var t=e.isCommenting,n=e.selectedCommentId,a=e.comments;return{isCommenting:t,selectedComment:a.find((function(e){return e.id===n})),comments:a}}),(function(e){return{onAddComment:function(t){e({type:"ADD_COMMENT",data:t}),e({type:"CANCEL_COMMENT"})},selectComment:function(t){return e(f(t))},deselectComment:function(){return e({type:"DESELECT_COMMENT"})},resolveComment:function(t){return e(h(t))}}}),(function(e,t,n){var a=e.selectedComment,c=Object(l.a)(e,["selectedComment"]),o=t.selectComment,r=t.deselectComment,i=t.resolveComment,s=Object(l.a)(t,["selectComment","deselectComment","resolveComment"]);return Object(m.a)({},n,{},c,{},s,{onClickComment:function(e){return e!==a?o(e):r()},onResolveComment:function(e){e===a&&r(),i(e)}})}))((function(e){var t=e.isCommenting,n=e.comments,o=e.onAddComment,r=e.onClickComment,i=e.onResolveComment,m=Object(l.a)(e,["isCommenting","comments","onAddComment","onClickComment","onResolveComment"]),d=Object(a.useState)(),f=Object(s.a)(d,2),E=f[0],C=f[1];return c.a.createElement("div",Object.assign({id:"comment-column"},m),c.a.createElement("div",{id:"input-column"},c.a.createElement(L,{headerText:"Comments"}),c.a.createElement(A,{pinAttachable:!0,mainThread:!0,onClickSubmit:o})),c.a.createElement("div",{className:"scroll-column"+(t?" focused":"")},n.map((function(e){return c.a.createElement(G,{key:e.id,comment:e,onClick:function(){return r(e)},onResolve:function(){return C(e.id)}})})),t&&c.a.createElement("div",{id:"comment-vignette"})),c.a.createElement(u,{isModalOpen:E,onCancel:function(){return C(null)},onResolve:function(){i(n.find((function(e){return e.id===E}))),C(null)}}))}));n(59);var B=Object(i.b)((function(e){var t=e.isCommenting,n=e.selectedCommentId;return{isCommenting:t,selectedComment:e.comments.flatMap((function(e){return[e].concat(Object(w.a)(e.thread))})).find((function(e){return e.id===n}))}}),(function(e){return{onReturn:function(){e({type:"CANCEL_COMMENT"}),e({type:"CLOSE_THREAD"})},selectComment:function(t){return e(f(t))},deselectComment:function(){return e({type:"DESELECT_COMMENT"})},resolveComment:function(t){return e(h(t))},resolveReply:function(t,n){return e(function(e,t){return{type:"RESOLVE_REPLY",data:{comment:e,reply:t}}}(t,n))},onAddReply:function(t,n){e(function(e,t){return{type:"ADD_REPLY",data:{comment:e,text:t}}}(t,n)),e({type:"CANCEL_COMMENT"})}}}),(function(e,t,n){var a=e.selectedComment,c=Object(l.a)(e,["selectedComment"]),o=t.selectComment,r=t.deselectComment,i=t.resolveComment,s=t.resolveReply,u=Object(l.a)(t,["selectComment","deselectComment","resolveComment","resolveReply"]);return Object(m.a)({},n,{},c,{},u,{onClickComment:function(e){c.isCommenting||e===a||o(e)},onClickReply:function(e){return e!==a?o(e):r()},onResolveComment:function(e){e===a&&r(),e===n.comment?i(e):s(n.comment,e)}})}))((function(e){var t=e.comment,n=e.isCommenting,o=e.onReturn,r=e.onClickComment,i=e.onClickReply,m=e.onAddReply,d=e.onResolveComment,f=Object(l.a)(e,["comment","isCommenting","onReturn","onClickComment","onClickReply","onAddReply","onResolveComment"]),E=Object(a.useState)(),C=Object(s.a)(E,2),b=C[0],p=C[1];return t?c.a.createElement("div",Object.assign({id:"thread-column"},f),c.a.createElement(L,{className:"thread-column-header",iconImage:"assets/left-arrow.svg",headerText:"Back to all comments",onClick:o}),c.a.createElement(P,{comment:t,onClick:function(){return r(t)},onResolve:function(){return p(t.id)}},c.a.createElement(A,{onClick:function(e){return e.stopPropagation()},onClickSubmit:function(e){return m(t,e)}})),c.a.createElement("div",{className:"scroll-column"},t&&t.thread.map((function(e){return c.a.createElement(P,{key:e.id,comment:e,onClick:function(){return i(e)},onResolve:function(){return p(e.id)}})})),n&&c.a.createElement("div",{id:"reply-vignette"})),c.a.createElement(u,{isModalOpen:b,onCancel:function(){return p(null)},onResolve:function(){d([t].concat(Object(w.a)(t.thread)).find((function(e){return e.id===b}))),p(null)}})):null}));var V=Object(i.b)((function(e){var t=e.activeThreadId;return{activeThread:e.comments.find((function(e){return e.id===t}))}}),(function(){return{}}))((function(e){var t=e.activeThread,n=Object(l.a)(e,["activeThread"]);return c.a.createElement("div",{id:"comments-row"},c.a.createElement(U,Object.assign({className:"main-thread"+(t?" main-thread-inactive":"")},n)),c.a.createElement(B,{className:"active-thread"+(t?"":" active-thread-inactive"),comment:t}))})),J=n(18),Q=n(31);n(61);function W(e,t,n,a){return function(){e&&t(!1),(n=n.filter((function(e){return e.length>1}))).length>0&&a&&a(n.slice(0,n.length-1))}}function q(e,t,n,a){return function(c){var o=c.nativeEvent,r=o.offsetX,i=o.offsetY;e(!0),t&&t([].concat(Object(w.a)(n),[[{x:r/a.current.clientWidth,y:i/a.current.clientHeight}]]))}}function K(e,t,n,a){return function(c){var o=c.nativeEvent;if(e){var r=o.offsetX,i=o.offsetY;if(t.length>0){var l=t[t.length-1];n&&n([].concat(Object(w.a)(t.slice(0,t.length-1)),[[].concat(Object(w.a)(l),[{x:r/a.current.clientWidth,y:i/a.current.clientHeight}])]))}}}}function z(e){return function(t){var n=t.nativeEvent,a=n.target.getBoundingClientRect(),c=n.targetTouches[0];e({nativeEvent:{offsetX:c.pageX-a.left,offsetY:c.pageY-a.top}})}}function Z(e){var t=e.lineWidth,n=void 0===t?3:t,o=e.lineColor,r=void 0===o?"black":o,i=e.value,m=e.onChange,u=Object(l.a)(e,["lineWidth","lineColor","value","onChange"]);i=i||[];var d=Object(a.useRef)(),f=Object(a.useState)(),E=Object(s.a)(f,2),C=E[0],b=E[1],p=Object(a.useState)(!1),h=Object(s.a)(p,2),g=h[0],v=h[1];return Object(a.useEffect)((function(){C||b(d.current.getContext("2d"))}),[d,C]),Object(a.useEffect)((function(){return function(e,t,n,a,c){if(t){t.clearRect(0,0,e.width,e.height);var o=!0,r=!1,i=void 0;try{for(var l,m=n[Symbol.iterator]();!(o=(l=m.next()).done);o=!0){var s=l.value,u=Object(J.a)(s),d=u[0],f=d.x,E=d.y,C=u.slice(1);t.lineJoin="round",t.lineCap="round",t.lineWidth=a,t.strokeStyle=c,t.beginPath(),t.moveTo(f*e.width,E*e.height);var b=!0,p=!1,h=void 0;try{for(var g,v=C[Symbol.iterator]();!(b=(g=v.next()).done);b=!0){var O=g.value,A=O.x,w=O.y;t.lineTo(A*e.width,w*e.height)}}catch(T){p=!0,h=T}finally{try{b||null==v.return||v.return()}finally{if(p)throw h}}t.stroke()}}catch(T){r=!0,i=T}finally{try{o||null==m.return||m.return()}finally{if(r)throw i}}}}(d.current,C,i,n,r)}),[d,C,i,n,r]),c.a.createElement(Q.HotKeys,{allowChanges:!0,className:"draw-canvas-hotkeys",keyMap:{undo:["command+z","ctrl+z","backspace"]},handlers:{undo:W(g,v,i,m)}},c.a.createElement("canvas",Object.assign({ref:d,className:"draw-canvas",width:1024,height:1024,onMouseDown:q(v,m,i,d),onMouseMove:K(g,i,m,d),onMouseUp:function(){return v(!1)},onTouchStart:z(q(v,m,i,d)),onTouchMove:z(K(g,i,m,d)),onTouchEnd:function(){return v(!1)},onTouchCancel:W(g,v,i,m)},u)))}n(62);var X=Object(i.b)((function(e){var t=e.cursor,n=e.drawing;return{interactive:t===x,drawing:n}}),(function(e){return{onChange:function(t){return e(function(e){return{type:"UPDATE_DRAWING",data:e}}(t))}}}))((function(e){var t=e.interactive,n=e.drawing,a=e.onChange,o=e.children,r=Object(l.a)(e,["interactive","drawing","onChange","children"]);return c.a.createElement("div",Object.assign({id:"sketch-container"},r),o,c.a.createElement("div",{id:"sketch-canvas",className:t?"":"static"},c.a.createElement(Z,{lineWidth:2,lineColor:"#ff0035",value:n,onChange:a})))}));n(63);var _=function(){var e=Object(a.useState)(!0),t=Object(s.a)(e,2),n=t[0],o=t[1];return c.a.createElement("div",{className:"head"},c.a.createElement("button",{className:"back-button"},"Back"),c.a.createElement("div",{className:"button-row"},c.a.createElement("img",{className:"profile",alt:"Greg",src:"https://assets.website-files.com/5d3152346d95065922960b3a/5db769036b1dff3418bffd20_Greg.jpg"}),c.a.createElement("button",{className:"AR",onClick:function(){return alert("more features to come")}},"AR"),c.a.createElement("button",{className:"share",onClick:function(){return alert("share link copied")}},"Share"),c.a.createElement("button",{className:"eye",onClick:function(){return o(!n)}},c.a.createElement("img",{src:"assets/eye-".concat(n?"open":"closed",".svg"),alt:"Show/hide pins icon"}))),c.a.createElement("div",{className:"greeting-row"},c.a.createElement("span",null,"Nike Zoom Prototype 1")))},$=(n(64),n(32)),ee=n(13),te=n(33),ne=n(1);function ae(e){var t=e.path,n=Object(l.a)(e,["path"]),o=Object(ee.c)(te.a,t);return Object(a.useEffect)((function(){var e=o.scene,t=(new ne.Box3).setFromObject(e);e.scale.multiplyScalar(5/Math.max.apply(Math,Object(w.a)(t.getSize(new ne.Vector3).toArray()))),t.setFromObject(e),e.position.copy(t.getCenter(new ne.Vector3)).multiplyScalar(-1)}),[o]),c.a.createElement("primitive",Object.assign({object:o.scene},n))}function ce(e){var t=e.cameraPosition,n=e.onOrbitChange,o=Object(l.a)(e,["cameraPosition","onOrbitChange"]),r=Object(a.useRef)();Object(a.useEffect)((function(){var e=r.current;if(t){var a,c,o=t.position,i=t.focus;(a=e.object.position).set.apply(a,Object(w.a)(o)),(c=e.target).set.apply(c,Object(w.a)(i))}return e.addEventListener("change",n),e.update(),function(){return e.removeEventListener("change",n)}}),[t,r,n]);var i=Object(ee.d)(),m=i.camera,s=i.gl.domElement;return c.a.createElement("orbitControls",Object.assign({ref:r,args:[m,s]},o))}Object(ee.b)({OrbitControls:$.a});var oe=Object(i.b)((function(e){var t=e.comments,n=e.selectedCommentId,a=e.activeCameraPosition;return{cameraPosition:t.reduce((function(e,t){return t.id===n?t.camera:e}),a)}}),(function(e){return{onOrbitChange:function(t){var n=t.target,a=n.object.position,c=n.target;return e({type:"CHANGE_CAMERA",data:{position:a.toArray(),focus:c.toArray()}})}}}))((function(e){var t=e.cameraPosition,n=e.onOrbitChange,o=Object(l.a)(e,["cameraPosition","onOrbitChange"]);return c.a.createElement(ee.a,Object.assign({camera:{fov:60,near:1,position:F},onCreated:function(e){var t=e.gl,n=e.scene;t.outputEncoding=ne.sRGBEncoding,n.background=new ne.Color(16448250)}},o),c.a.createElement(ce,{cameraPosition:t,minDistance:1,maxDistance:50,onOrbitChange:n}),c.a.createElement("ambientLight",null),c.a.createElement(a.Suspense,{fallback:null},c.a.createElement(ae,{path:"models/gltf/nike_shoe/scene.gltf"})))}));var re=Object(i.b)((function(e){return{cursor:e.cursor}}),(function(e){return{onClickTopCamera:function(){e({type:"DESELECT_COMMENT"}),e(d({position:[0,4,0],focus:[0,0,0]}))},onClickFrontCamera:function(){e({type:"DESELECT_COMMENT"}),e(d({position:[0,0,4],focus:[0,0,0]}))},onClickSideCamera:function(){e({type:"DESELECT_COMMENT"}),e(d({position:[-4,0,0],focus:[0,0,0]}))}}}))((function(e){var t=e.cursor,n=e.onClickTopCamera,a=e.onClickFrontCamera,o=e.onClickSideCamera;return c.a.createElement("div",{id:"app-container",className:t},c.a.createElement(_,null),c.a.createElement("div",{id:"main-area"},c.a.createElement(X,{className:"draw-over"},c.a.createElement(oe,{className:"renderer"}),c.a.createElement("div",{className:"camera-button-row"},c.a.createElement("button",{className:"camera-button top-camera-button",onClick:n},c.a.createElement("div",{className:"camera-button-icon-container"},c.a.createElement("img",{src:"assets/top-icon.svg",alt:"Top camera view icon"})),"Top"),c.a.createElement("button",{className:"camera-button front-camera-button",onClick:a},c.a.createElement("div",{className:"camera-button-icon-container"},c.a.createElement("img",{src:"assets/front-icon.svg",alt:"Top camera view icon"})),"Front"),c.a.createElement("button",{className:"camera-button side-camera-button",onClick:o},c.a.createElement("div",{className:"camera-button-icon-container"},c.a.createElement("img",{src:"assets/side-icon.svg",alt:"Top camera view icon"})),"Side"))),c.a.createElement(V,null)))}));r.a.render(c.a.createElement(i.a,{store:Y},c.a.createElement(re,null)),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.34176cfc.chunk.js.map