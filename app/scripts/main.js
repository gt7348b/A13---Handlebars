var songs = {
  music: 'Lost',
  composer: 'Michael Buble'
};


var playlist = {
  songs : [
    { song: 'Lost', artist: 'Michael Buble' },
    { song: 'Chow Down on Chik-fil-A', artist: 'Willam'},
    { song: 'Ligaya', artist: 'Gouryella'},
    { song: 'Piano Concerto #2', artist: 'Saint-Saens'},
    { song: 'Empty Streets', artist: 'Tiesto'}
  ]
};
    //source = $('#music').html(),
    template = Handlebars.templates(music);

    $('#list').append(template(playlist));
