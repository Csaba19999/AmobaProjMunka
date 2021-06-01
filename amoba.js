$(function () {
    var palyaMeret;
    var gameContinue = true;
    var jatekosNev;
    var kattintottOsszes = [];
    var kattintottHorizontal = [];
    var kattintottVerical = [];
    var kattintottAtlo = [];
    var valtas = false;
    var ellenorzo = "";

    // 
    //var xJatekos = [];// X játékos által kattintott div ID-k
    //var yJatekos = [];// Y játékos által kattintott div ID-k

    var nineT = [[], [], [],
        [], [], [],
        [], [], []];
    //------------------Mező méretező------------------------
    $('#myRange').change(function () {
        $('#palyaLable').html($('#myRange').val());
    });
    //-------------------Játék futtatási function---------------------
    //---------------------Kirajzolási function-----------------------
    $('#startButton').click(function () {
        $('main').addClass('mainGrid');
        $('#fit').empty();
        jatekosNev = $('#jatekosNev').val();
        palyaMeret = $('#myRange').val();
        $('#fit').append('<asside class="assideGrid' + palyaMeret + '">');
        for (var i = 0; i < palyaMeret * palyaMeret; i++) {
            $('.assideGrid' + palyaMeret).append('<div class="divGrid" id="' + i + '">' + i + '</div>');
        }
        $('#fit').append('</asside>');

        $('.divGrid').one("click", function () {
            var id = "#" + event.target.id;
            $(id).empty();
            console.log('kattintott elem: ' + id);

            //-----------------------------------------------------
            if (valtas === false) {
                $(id).append('X');
                valtas = true;
            } else if (valtas === true) {
                $(id).append('Y');
                valtas = false;
            } else {
                alert("Ismeretlen hiba.");
            }
            kattintottHorizontal = [];
            ellenorzo = "";
            for (var i = 0; i < palyaMeret * palyaMeret; i++) {
                kattintottHorizontal.push($('.divGrid').eq(i).html());
            }
            //Most az kell hogy végig megyünbk a tömb elemein hozzáfűzzük egy szöveges váltiiozóhoz

            for (var i = 0; i < kattintottHorizontal.length; i++) {
                ellenorzo += kattintottHorizontal[i];
                if(i%palyaMeret===2){
                    ellenorzo += " ";
                }
            }
            ellenorzo += "";
            for (var j = 0; j < palyaMeret; j++) {
                for (var i = 0; i < palyaMeret*palyaMeret; i += palyaMeret) {
                    ellenorzo += kattintottHorizontal[i+j]; // meg kell kaptunk -> 0 utána -> 3 utána -> 6
                    console.log(ellenorzo,i,j);
                }
                ellenorzo += " ";
            }
            console.log(ellenorzo);
            console.log(kattintottHorizontal);
        });
    });

});
