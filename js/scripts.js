 $(document).ready(function(){
            $("#mycarosel").carousel({interval:2000});
            $("#carousel-button").click(function(){
                if($("#carousel-button").children("span").hasClass("fa-pause")){
                    $("#mycarosel").carousel('pause');
                    $("#carousel-button").children("span").removeClass("fa-pause");
                    $("#carousel-button").children("span").addClass("fa-play");
                }

                else if($("#carousel-button").children("span").hasClass("fa-play")){
                    $("#mycarosel").carousel('cycle');
                    $("#carousel-button").children("span").removeClass("fa-play");
                    $("#carousel-button").children("span").addClass("fa-pause");
                }
                
            });
            
        });