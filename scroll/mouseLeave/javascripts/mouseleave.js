/*$(function() {
  
    $(window).mouseleave(function(e) {
      var modalSeen = sessionStorage.getItem('modalSeen');
      if (e.toElement == null && !modalSeen) {
        document.documentElement.classList.add('mouse-out');
      }
    });
  
    $('#close-modal').click(function(e) {
      e.preventDefault();
      document.documentElement.classList.remove('mouse-out');
      sessionStorage.setItem('modalSeen', true);
    });
    
  });
*/
  
    window.addEventListener('click',function(e){
        funcionLeave(e);
    });

    function funcionLeave(e){
        
        var modalS = sessionStorage.getItem('modalS');
       
        if (e.Element == null && !modalS) {
            alert('Holoa')
            document.documentElement.classList.add('mouse-out');
            
        }
    }

    document.getElementById('close-modal').addEventListener('click',function(e){
        cierreModal(e);
    });

    function cierreModal(e){
        e.preventDefault();
        document.documentElement.classList.remove('mouse-out');
        sessionStorage.setItem('modalS',true);
    }
  