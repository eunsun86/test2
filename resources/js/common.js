
(function(){
   window.onload = function(){
      var _el = document.querySelectorAll('.lnb-nav .name');
      _el.forEach(function(i) {
         console.log(_el.length);
         i.addEventListener('click', function(event) {
            let isDepth = event.currentTarget.parentNode;
            if(isDepth.classList.contains('selected')){
               isDepth.classList.remove('selected');
            }else{
               isDepth.classList.add('selected');
            }
         });
      });
   }
})();

function onToggleLnb(){
   let doc_lnb = document.querySelector('.lnb');
   if(doc_lnb.classList.contains('display--show')){
      doc_lnb.classList.remove('display--show');
   }else{
      doc_lnb.classList.add('display--show');
   }
}

