
/* DIBUJA LA LINEA O FIGURA GENERADA POR EL PATH SVG EN EL HTML */

$(document).ready(function(){
    var status = $('#status-branch').val();

    
    const time = anime.timeline({
        easing: 'easeInOutSine',
        duration: 2000,
        delay: function(el, i) { return i * 250 },
    });


        
        $('#btn-play').click(function(){
            console.log(status);
           

            if(status == 0){

                
                
                /* EJECUTA UNA ANIMACION DESPUES DE OTRA */
    
                time.add({
                    begin:function() {
                        $('.line1').show();
                      },
                      targets: '.line1', 
                        strokeDashoffset: [anime.setDashoffset, 0],
                        complete: function() {
                            $('.box-animated-1').slideDown("slow");
                            
                        }

                    });
                    time.add({
                        begin:function() {
                            $('.line2').show();
                          },
                        targets: '.line2',
                        strokeDashoffset: [anime.setDashoffset, 0],
                        complete: function() {
                            $('.box-animated-2').slideDown("slow");
                        }
                        });
                        time.add({
                            begin:function() {
                                $('.line3').show();
                              },
                            targets: '.line3',
                            strokeDashoffset: [anime.setDashoffset, 0], 
                            complete: function() {
                                $('.box-animated-3').slideDown("slow");
                            }  
                            });

                            status = 1;
            }else if(status == 1){

                
               
            }
           
        });

    
});


