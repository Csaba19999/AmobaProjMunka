$(function () {
    var jatekosNev;
    var palyaMeret;
    $('#myRange').change(function () {
        $('#palyaLable').html($('#myRange').val());
    });
    $("#startButton").click(function () {
        $('.assideGrid').empty();
        jatekosNev = $('#jatekosNev').val();
        palyaMeret = $('#myRange').val();
        for (var i = 0; i < $('#myRange').val(); i++) {
            $('.assideGrid').append('<div '+'id="'+i+'">'+'123'+'</div>');
            for (var i = 0; i < $('#myRange').val(); i++) {
                $('.assideGrid').append('<div '+'id="'+i+'">'+'asd'+'</div>');
            }
        }

    });

});