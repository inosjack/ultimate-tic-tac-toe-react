(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,r,a){"use strict";a.r(r);var t=a(8),s=a(1),n=a(2),l=a(4),i=a(3),d=a(5),u=a(0),c=a.n(u),o=a(7),m=a.n(o);a(16);function h(e){return c.a.createElement("button",{className:"square",onClick:e.onClick},e.value)}var q=function(e){function r(e){var a;return Object(s.a)(this,r),(a=Object(l.a)(this,Object(i.a)(r).call(this,e))).state={squares:[Array(9).fill(null),Array(9).fill(null),Array(9).fill(null),Array(9).fill(null),Array(9).fill(null),Array(9).fill(null),Array(9).fill(null),Array(9).fill(null),Array(9).fill(null)],xIsNext:!0,currentBlock:0,playblock:null},a}return Object(d.a)(r,e),Object(n.a)(r,[{key:"handleClick",value:function(e,r){var a=this.state.squares.slice();b(a[null==this.state.currentBlock?0:this.state.currentBlock])||a[e][r]||null!==this.state.playblock&&this.state.playblock!==e||(a[e][r]=this.state.xIsNext?"X":"O",document.getElementsByClassName("board-"+e)[0].style.backgroundColor="#fff",document.getElementsByClassName("board-"+r)[0].style.backgroundColor="aliceblue",this.setState({squares:a,xIsNext:!this.state.xIsNext,playblock:r,currentBlock:e}))}},{key:"renderSquare",value:function(e,r){var a=this;return c.a.createElement(h,{value:this.state.squares[e][r],onClick:function(){return a.handleClick(e,r)}})}},{key:"render",value:function(){var e,r=b(this.state.squares[null==this.state.currentBlock?0:this.state.currentBlock]);return e=r?"Winner: "+r:"Next player: "+(this.state.xIsNext?"X":"O"),c.a.createElement("div",null,c.a.createElement("div",{className:"status"},e),c.a.createElement("div",{className:"main-row"},c.a.createElement("div",{className:"board-0"},c.a.createElement("div",{className:"board-row"},this.renderSquare(0,0),this.renderSquare(0,1),this.renderSquare(0,2)),c.a.createElement("div",{className:"board-row"},this.renderSquare(0,3),this.renderSquare(0,4),this.renderSquare(0,5)),c.a.createElement("div",{className:"board-row"},this.renderSquare(0,6),this.renderSquare(0,7),this.renderSquare(0,8))),c.a.createElement("div",{className:"board-1"},c.a.createElement("div",{className:"board-row"},this.renderSquare(1,0),this.renderSquare(1,1),this.renderSquare(1,2)),c.a.createElement("div",{className:"board-row"},this.renderSquare(1,3),this.renderSquare(1,4),this.renderSquare(1,5)),c.a.createElement("div",{className:"board-row"},this.renderSquare(1,6),this.renderSquare(1,7),this.renderSquare(1,8))),c.a.createElement("div",{className:"board-2"},c.a.createElement("div",{className:"board-row"},this.renderSquare(2,0),this.renderSquare(2,1),this.renderSquare(2,2)),c.a.createElement("div",{className:"board-row"},this.renderSquare(2,3),this.renderSquare(2,4),this.renderSquare(2,5)),c.a.createElement("div",{className:"board-row"},this.renderSquare(2,6),this.renderSquare(2,7),this.renderSquare(2,8)))),c.a.createElement("div",{className:"main-row"},c.a.createElement("div",{className:"board-3"},c.a.createElement("div",{className:"board-row"},this.renderSquare(3,0),this.renderSquare(3,1),this.renderSquare(3,2)),c.a.createElement("div",{className:"board-row"},this.renderSquare(3,3),this.renderSquare(3,4),this.renderSquare(3,5)),c.a.createElement("div",{className:"board-row"},this.renderSquare(3,6),this.renderSquare(3,7),this.renderSquare(3,8))),c.a.createElement("div",{className:"board-4"},c.a.createElement("div",{className:"board-row"},this.renderSquare(4,0),this.renderSquare(4,1),this.renderSquare(4,2)),c.a.createElement("div",{className:"board-row"},this.renderSquare(4,3),this.renderSquare(4,4),this.renderSquare(4,5)),c.a.createElement("div",{className:"board-row"},this.renderSquare(4,6),this.renderSquare(4,7),this.renderSquare(4,8))),c.a.createElement("div",{className:"board-5"},c.a.createElement("div",{className:"board-row"},this.renderSquare(5,0),this.renderSquare(5,1),this.renderSquare(5,2)),c.a.createElement("div",{className:"board-row"},this.renderSquare(5,3),this.renderSquare(5,4),this.renderSquare(5,5)),c.a.createElement("div",{className:"board-row"},this.renderSquare(5,6),this.renderSquare(5,7),this.renderSquare(5,8)))),c.a.createElement("div",{className:"main-row"},c.a.createElement("div",{className:"board-6"},c.a.createElement("div",{className:"board-row"},this.renderSquare(6,0),this.renderSquare(6,1),this.renderSquare(6,2)),c.a.createElement("div",{className:"board-row"},this.renderSquare(6,3),this.renderSquare(6,4),this.renderSquare(6,5)),c.a.createElement("div",{className:"board-row"},this.renderSquare(6,6),this.renderSquare(6,7),this.renderSquare(6,8))),c.a.createElement("div",{className:"board-7"},c.a.createElement("div",{className:"board-row"},this.renderSquare(7,0),this.renderSquare(7,1),this.renderSquare(7,2)),c.a.createElement("div",{className:"board-row"},this.renderSquare(7,3),this.renderSquare(7,4),this.renderSquare(7,5)),c.a.createElement("div",{className:"board-row"},this.renderSquare(7,6),this.renderSquare(7,7),this.renderSquare(7,8))),c.a.createElement("div",{className:"board-8"},c.a.createElement("div",{className:"board-row"},this.renderSquare(8,0),this.renderSquare(8,1),this.renderSquare(8,2)),c.a.createElement("div",{className:"board-row"},this.renderSquare(8,3),this.renderSquare(8,4),this.renderSquare(8,5)),c.a.createElement("div",{className:"board-row"},this.renderSquare(8,6),this.renderSquare(8,7),this.renderSquare(8,8)))))}}]),r}(c.a.Component),S=function(e){function r(){return Object(s.a)(this,r),Object(l.a)(this,Object(i.a)(r).apply(this,arguments))}return Object(d.a)(r,e),Object(n.a)(r,[{key:"render",value:function(){return c.a.createElement("div",{className:"game"},c.a.createElement("div",{className:"game-board"},c.a.createElement(q,null)),c.a.createElement("div",{className:"game-info"},c.a.createElement("div",null),c.a.createElement("ol",null)))}}]),r}(c.a.Component);function b(e){for(var r=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<r.length;a++){var s=Object(t.a)(r[a],3),n=s[0],l=s[1],i=s[2];if(e[n]&&e[n]===e[l]&&e[n]===e[i])return e[n]}return null}m.a.render(c.a.createElement(S,null),document.getElementById("root"))},16:function(e,r,a){},9:function(e,r,a){e.exports=a(10)}},[[9,1,2]]]);
//# sourceMappingURL=main.81579102.chunk.js.map