



$(document).ready(function(){
    /* DIBUJA LA LINEA O FIGURA GENERADA POR EL PATH SVG EN EL HTML */
    
        var status = 0;
        var startPoint = document.getElementById('play-animate'),
            firstPoint = document.getElementById('aitem1'),
            secondPoint = document.getElementById('aitem2'),
            thirdPoint = document.getElementById('aitem3'),
            fourtPoint = document.getElementById('aitem4'),
            fivePoint = document.getElementById('aitem5'),
            sixPoint = document.getElementById('aitem6');


        var options = {
            hide: true,
            color: '#011222',
            endPlug: 'disc',
            endPlugColor: 'rgb(191,149,63)',
            outlineColor: 'rgb(191,149,63)',
            dropShadow: true,
            dropShadow: {dx: 0, dy: 2},
            path: 'grid',
            
            
        }

        

        var optionsAnim = {
                duration: 1500,
                timing: [1, 1, 1, 1]   
        }

        var line = new LeaderLine(startPoint,firstPoint,options); 
        var line2 = new LeaderLine(startPoint,secondPoint,options); 
        var line3 = new LeaderLine(startPoint,LeaderLine.pointAnchor(thirdPoint, {x: 100, y: 50}),options); 
        var line4 = new LeaderLine(startPoint,LeaderLine.pointAnchor(fourtPoint, {x: 0, y: 50}),options); 
        var line5 = new LeaderLine(startPoint,fivePoint,options); 
        var line6 = new LeaderLine(startPoint,sixPoint,options); 
        
        line.outline = true;
        line2.outline = true;
        line3.outline = true;
        line4.outline = true;
        line5.outline = true;
        line6.outline = true;

        var anim1 = $('#anim1').hide();
        var anim2 = $('#anim2').hide();
        var anim3 = $('#anim3').hide();
        var anim4 = $('#anim4').hide();
        var anim5 = $('#anim5').hide();
        var anim6 = $('#anim6').hide();

        $('.content-play').on('mouseenter',function(){
          $('#play-animate-hand').hide()
        });
        $('.content-play').on('mouseleave',function(){
          $('#play-animate-hand').show()
        });


        $('#play-animate').on('click', function(){

              if(status == 0){
                 
                anime({
                  delay: 100,
                  begin:function() {
                      $('.main-section').css('height','900px');
                      $('.gif-hand').hide();
                      $('#play-animate').css('pointer-events', 'none');
                    },
                      complete: function() {
                        line.endLabel = LeaderLine.captionLabel('Fidelizacion',{color: 'rgb(191,149,63)',outlineColor:'none'});
                        anim1.show('slow');
                        line.show('draw',optionsAnim); 

                        line2.endLabel = LeaderLine.captionLabel('Configuración',{color: 'rgb(191,149,63)',outlineColor:'none'});
                        anim2.show('slow');
                        line2.show('draw',optionsAnim); 

                        line3.endLabel = LeaderLine.captionLabel('Seguridad',{color: 'rgb(191,149,63)',outlineColor:'none'});
                        anim3.show('slow');
                        line3.show('draw',optionsAnim); 
                        
                        line4.endLabel = LeaderLine.captionLabel('Crecimiento',{color: 'rgb(191,149,63)',outlineColor:'none'});
                        anim4.show('slow');
                        line4.show('draw',optionsAnim); 


                        line5.endLabel = LeaderLine.captionLabel('Recompensas',{color: 'rgb(191,149,63)',outlineColor:'none'});
                        anim5.show('slow');
                        line5.show('draw',optionsAnim); 
                        
                        line6.endLabel = LeaderLine.captionLabel('Accesibilidad',{color: 'rgb(191,149,63)',outlineColor:'none'});
                        anim6.show('slow');
                        line6.show('draw',optionsAnim); 

                        status = 1;
                        $('.gif-hand').show();
                        $('#play-animate').css('pointer-events', 'auto');
                      }
                  });
                
                  
              }else{

                anime({
                  begin: function(){
                    $('#play-animate').css('pointer-events', 'none');
                    $('.gif-hand').hide();
                    line.hide('draw',optionsAnim); 
                    anim1.hide('slow');
                    
                    line2.hide('draw',optionsAnim); 
                    anim2.hide('slow');
                    line3.hide('draw',optionsAnim); 
                    anim3.hide('slow');
                    
                    
                    line4.hide('draw',optionsAnim); 
                    anim4.hide('slow');

                    line5.hide('draw',optionsAnim); 
                    anim5.hide('slow');
                    line6.hide('draw',optionsAnim); 
                    anim6.hide('slow');
                  },complete: function(){
                       $('.main-section').css('height','400px');
                        $('#play-animate').css('pointer-events', 'auto');
                        $('.gif-hand').show();
                        status = 0;
                        
                  }
                })

               
               
              }
            
        });





    /* HOVER ITEM */
    $( ".container .flow-content a" ).on("mouseenter",
        function() {
         $(this).find( "section" ).css({
            '-moz-transform': 'scale(1.05)',
            '-webkit-transform': 'scale(1.05)',
            '-o-transform': 'scale(1.05)',
            '-ms-transform': 'scale(1.05)'
         });
         
        }
      );
    $( ".container .flow-content a" ).on("mouseleave",
        function() {
            $(this).find( "section" ).css('transform:','scale(1)');
        }
      );



    
});


