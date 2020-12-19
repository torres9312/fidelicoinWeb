
/* DIBUJA LA LINEA O FIGURA GENERADA POR EL PATH SVG EN EL HTML */



$(document).ready(function(){



    var status = $('#status-branch').val();

        $('.btn-play').click(function(e){

            $('#btn-play').css('pointer-events', 'none');

            const time = anime.timeline({
                easing: 'easeInOutSine',
                duration: 1000,
                delay: function(el, i) { return i * 250 },
            });

            $('#click').fadeOut();

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
                                $('.box-animated-3').fadeIn();
                                $('#btn-play').css('pointer-events', 'auto');
                                $('#click').fadeIn()
                            }  
                            });
                            
                            

                            status = 1;
                            

            }else if(status == 1){

                time.add({
                    begin:function() {
                        $('.box-animated-3').fadeOut();
                      },
                         targets: '.line3', 
                        strokeDashoffset: [0,anime.setDashoffset],

                    });
                time.add({
                    begin:function() {
                        $('.box-animated-2').fadeOut();
                      },
                      targets: '.line2', 
                        strokeDashoffset: [0,anime.setDashoffset],

                    });
                time.add({
                    begin:function() {
                        $('.box-animated-1').fadeOut();
                      },
                      targets: '.line1', 
                        strokeDashoffset: [0,anime.setDashoffset],
                      complete: function() {
                        $('#btn-play').css('pointer-events', 'auto');
                        $('#click').fadeIn()
                      }
                    });

                    status = 0;
               
            }
           
        });

    
});


