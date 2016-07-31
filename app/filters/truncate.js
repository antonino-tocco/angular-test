controllers.filter('truncate', function () {
   return function (text) {
       var ellipsis = false;
       text = text.split(" ");
       ellipsis = text.length > 30;
       text = text.splice(0, 30);
       text = text.join(" ");
       return ellipsis ? text + "..." : text;
   }
});
