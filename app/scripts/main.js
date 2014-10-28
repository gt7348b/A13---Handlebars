var songs = {
  music: 'Lost',
  composer: 'Michael Buble'
},
    source = $('#music').html(),
    template = Handlebars.compile(source);

    $('#list').append(template(songs));
