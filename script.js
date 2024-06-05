document.getElementById('revelbutton').addEventListener('click', function() {
    var surprise = document.getElementById('surprise');
    var audio = document.getElementById('background-music')

    if (surprise.classList.contains('hidden')) {
        surprise.classList.remove('hidden');
        document.getElementById('background-music').play()
        audio.play().then(function() {
            // Audio playback has started, now you can pause it if needed
            // (e.g., if surprise is hidden again)
            if (surprise.classList.contains('hidden')) {
              audio.pause();
            }
        });    
    } else {
        surprise.classList.add('hidden');
        document.getElementById('background-music').pause() 
    }
});



 