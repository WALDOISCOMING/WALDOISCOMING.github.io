(window.webpackJsonp=window.webpackJsonp||[]).push([[72,46],{267:function(t){t.exports=JSON.parse('{"teamMembers":[{"id":1,"image":"/img/team/team-1/team-1.jpg","name":"Caroline Roses","position":"Designer"},{"id":2,"image":"/img/team/team-1/team-2.jpg","name":"Blake Hamilton","position":"Engineer"},{"id":3,"image":"/img/team/team-1/team-3.jpg","name":"Kashara May","position":"Founder"},{"id":4,"image":"/img/team/team-1/team-4.jpg","name":"Peter Parker","position":"Marketing"},{"id":5,"image":"/img/team/team-3/team-1.jpg","name":"Caroline Roses","position":"Designer"},{"id":6,"image":"/img/team/team-3/team-2.jpg","name":"Blake Hamilton","position":"Engineer"},{"id":7,"image":"/img/team/team-3/team-3.jpg","name":"Kashara May","position":"Founder"},{"id":8,"image":"/img/team/team-2/team-1.jpg","name":"Caroline Roses","position":"Designer"},{"id":9,"image":"/img/team/team-2/team-2.jpg","name":"Blake Hamilton","position":"Engineer"},{"id":10,"image":"/img/team/team-2/team-3.jpg","name":"Kashara May","position":"Founder"}]}')},269:function(t,e,m){"use strict";m.r(e);m(13);var n={props:["teamMember"]},r=m(22),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"team team__style--3"},[e("div",{staticClass:"thumb"},[e("img",{attrs:{src:t.teamMember.image,alt:"team Images"}}),t._v(" "),e("div",{staticClass:"overlay",style:{backgroundImage:"url(".concat(t.teamMember.image,")")}}),t._v(" "),t._m(0)]),t._v(" "),e("div",{staticClass:"team-info text-center"},[e("div",{staticClass:"info"},[e("h5",[t._v(t._s(t.teamMember.name))]),t._v(" "),e("span",[t._v(t._s(t.teamMember.position))])])])])}),[function(){var t=this,e=t._self._c;return e("ul",{staticClass:"social-icon icon-solid-rounded icon-size-medium text-center"},[e("li",{staticClass:"facebook"},[e("a",{staticClass:"link",attrs:{href:"https://www.facebook.com/","aria-label":"Facebook"}},[e("i",{staticClass:"fab fa-facebook"})])]),t._v(" "),e("li",{staticClass:"twitter"},[e("a",{staticClass:"link",attrs:{href:"https://twitter.com/","aria-label":"Twitter"}},[e("i",{staticClass:"fab fa-twitter"})])]),t._v(" "),e("li",{staticClass:"instagram"},[e("a",{staticClass:"link",attrs:{href:"https://www.instagram.com/","aria-label":"Instagram"}},[e("i",{staticClass:"fab fa-instagram"})])])])}],!1,null,null,null);e.default=component.exports},389:function(t,e,m){"use strict";m.r(e);m(9);var n=m(269),r=m(267),o={components:{TeamMemberThree:n.default},data:function(){return{data:r}}},l=m(22),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"brook-team-area bg_color--5 ptb--100 ptb-sm--60 ptb-md--80"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row row--30"},t._l(t.data.teamMembers.slice(4,7),(function(t){return e("div",{key:t.id,staticClass:"col-lg-4 col-md-4 col-sm-6 col-12"},[e("TeamMemberThree",{attrs:{teamMember:t}})],1)})),0)])])}),[],!1,null,null,null);e.default=component.exports}}]);