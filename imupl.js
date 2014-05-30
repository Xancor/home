function preload() {
this.length = preload.arguments.length;
for (var i = 0; i < this.length; i++) {
this[i] = new Image();
this[i].src = preload.arguments[i];}}
var pics = new preload("1.gif","2.gif","3.gif","3q.gif","4.gif","4q.gif","5.gif","5q.gif","6.gif","6q.gif");
