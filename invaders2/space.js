//use the ASCII values of keystrokes to determine what player does
//values stored in keys.js
$(
    function() {
        $(document).keydown(
            function(e) {
                switch(e.which){
                case GameSettings.keyPress.left:
                    console.log('left'); 
                    break; //if player hits left, console logs left
                case GameSettings.keyPress.right:
                    console.log('right'); 
                    break; //if player hits right, console logs right
                case GameSettings.keyPress.up:
                    console.log('up'); 
                    break; //if player hits up, console logs up
                case GameSettings.keyPress.down:
                    console.log('down'); 
                    break; //if player hits down, console logs down
                case GameSettings.keyPress.space:
                    console.log('space'); 
                    break; //if player hits space, console logs space
                }
            }
        );
    }
    );