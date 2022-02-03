function buscar() {
    var data = document.getElementById("date").value;
    const key = "6WvgPhuRoYc3ozmMBGYPqbIzyYTASpcZtgPyTBcy"
    
    $.ajax({url:`https://api.nasa.gov/planetary/apod?api_key=${key}&date=${data}`,
        success: function(data) {
            if(data.media_type == 'image') {
                $('#imgNasa').attr('src', data.url);
                $('#videoNasa').css('display', 'none');
            }else {
                $('#videoNasa').attr('src', data.url);
                $('#videoNasa').css('display', 'block');
                $('#imgNasa').css('display', 'none');
            }
            $('#title').text(data.title);
            $('#imgText').text(data.explanation);
            $('#copyright').text(data.copyright);
        }
    })
}
