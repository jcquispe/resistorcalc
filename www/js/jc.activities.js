$(document).ready(function(){
                $('select[name="colorpicker-change-background-color"]').on('change', function() {
            $(document.body).css('background-color', $('select[name="colorpicker-change-background-color"]').val());
              });

              setTimeout(function() {
                $('select[name="colorpicker-selectColor-#fbd75b"]').simplecolorpicker('selectColor', '#fbd75b');
              }, 5000);

              setTimeout(function() {
                $('select[name="colorpicker-selectColor-#FBD75B"]').simplecolorpicker('selectColor', '#FBD75B');
              }, 5000);

              setTimeout(function() {
                $('select[name="colorpicker-selectColor-#fbd75b-multiple"]').simplecolorpicker('selectColor', '#fbd75b');
              }, 5000);

              setTimeout(function() {
                // Generates a JavaScript error
                $('select[name="colorpicker-selectColor-unknown"]').simplecolorpicker('selectColor', 'unknown');
              }, 5000);


          setTimeout(function() {
            $('select[name="colorpicker-picker-selectColor-#fbd75b"]').simplecolorpicker('selectColor', '#fbd75b');
          }, 5000);

          setTimeout(function() {
            // Generates a JavaScript error
            $('select[name="colorpicker-picker-selectColor-unknown"]').simplecolorpicker('selectColor', 'unknown');
          }, 5000);
                $('#init').on('click', function() {
                    $('select[name="colorpicker-shortlist"]').simplecolorpicker();
                });

            $('#init').trigger('click');
            $('#destroy').on('click', function() {
                $('select').simplecolorpicker('destroy');
                var uno = document.getElementById("primer").value;
                var dos = document.getElementById("segundo").value;
                var tres = document.getElementById("tercer").value;
                var tole = document.getElementById("tolerancia").value;
                var cifra1 = 0;
                var cifra2 = 0;
                var cifra3 = 0;
                var tolera = 0;
                switch(uno){
                    case "#000000": cifra1 = 0;break;
                    case "#5A3D1C": cifra1 = 1;break;
                    case "#BE1E3C": cifra1 = 2;break;
                    case "#CB5011": cifra1 = 3;break;
                    case "#E0C052": cifra1 = 4;break;
                    case "#429D42": cifra1 = 5;break;
                    case "#2E2E6B": cifra1 = 6;break;
                    case "#682AA2": cifra1 = 7;break;
                    case "#BEBEBE": cifra1 = 8;break;
                    case "#FFFFFF": cifra1 = 9;break;
                }
                switch(dos){
                    case "#000000": cifra2 = 0;break;
                    case "#5A3D1C": cifra2 = 1;break;
                    case "#BE1E3C": cifra2 = 2;break;
                    case "#CB5011": cifra2 = 3;break;
                    case "#E0C052": cifra2 = 4;break;
                    case "#429D42": cifra2 = 5;break;
                    case "#2E2E6B": cifra2 = 6;break;
                    case "#682AA2": cifra2 = 7;break;
                    case "#BEBEBE": cifra2 = 8;break;
                    case "#FFFFFF": cifra2 = 9;break;
                }
                switch(tres){
                    case "#000000": cifra3 = 1;break;
                    case "#5A3D1C": cifra3 = 10;break;
                    case "#BE1E3C": cifra3 = 100;break;
                    case "#CB5011": cifra3 = 1000;break;
                    case "#E0C052": cifra3 = 10000;break;
                    case "#429D42": cifra3 = 100000;break;
                    case "#2E2E6B": cifra3 = 1000000;break;
                    case "#682AA2": cifra3 = 10000000;break;
                    case "#BEBEBE": cifra3 = 100000000;break;
                    case "#FFFFFF": cifra3 = 1000000000;break;
                }
                switch(tole){
                    case "#5A3D1C": tolera = 1;break;
                    case "#BE1E3C": tolera = 2;break;
                    case "#9A8133": tolera = 5;break;
                    case "#BEBEBE": tolera = 10;break;                    
                }
                var valor = ((cifra1*10)+cifra2)*cifra3;
                alert("R = "+valor+" [ohms] "+tolera+"%\nR = "+valor/1000+" [Kohm]"+" "+tolera+"%");
                location.reload(true);
            });

        });