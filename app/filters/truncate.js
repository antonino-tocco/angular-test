controllers.filter('truncate', function () {
   return function (text, maxLength) {
       var ellipsis = false;
       maxLength = maxLength ? maxLength : 30;
       text = text.split(" ");
       ellipsis = text.length > maxLength;
       text = text.splice(0, maxLength);
       text = text.join(" ");
       return ellipsis ? text + "..." : text;
   }
});
