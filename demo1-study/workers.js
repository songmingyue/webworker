importScripts("first.js")
this.add();
this.onmessage = function(evt){
  postMessage(evt.data);
  this.close()
};
