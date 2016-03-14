$(document).ready(function(){
  
   // $('#gameScreen').css('background-color', 'rgb(100, 100, 300)')
    
    $(document).keydown(function(e) {
        if (e.keyCode == 13) {
            // press enter/return on keyboard to change the screen of the game
            $('#gameScreen').css('background-image', 'url("http://25.media.tumblr.com/tumblr_m08v3iOU0L1qgwqw9o1_500.gif")');
        }
        else if (e.keyCode == 16) {
            // press shift on keyboard to change the screen of the game
        $('#gameScreen').css('background-image', 'url("http://25.media.tumblr.com/tumblr_mchix15mlh1rtoyhxo1_500.gif")');
        }
        else if (e.keyCode == 65) {
            // press A button on keyboard to change the screen of the game
        $("#gameScreen").css('background-image', 'url("http://www.picgifs.com/games-gifs/games-gifs/pokemon/picgifs-pokemon-104331.gif")');
        }
        else if (e.keyCode == 66) {
            // press B button on keyboard to change the screen of the game
        $('#gameScreen').css('background-image', 'url("http://www.picgifs.com/games-gifs/games-gifs/pokemon/picgifs-pokemon-7472641.gif")');
        }
        else if (e.keyCode == 38) {
            // press up arrow on keyboard to change the screen of the game
        $('#gameScreen').css('background-image', 'url("http://38.media.tumblr.com/tumblr_md9pdePfJg1rsc51fo1_500.gif")');
        }

        else if (e.keyCode == 8) {
            // Turn off gameboy
        $('#gameScreen').css('background-image', 'none');
        }
    });
});



