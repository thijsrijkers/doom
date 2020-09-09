//Script for the UI/hub
var playerHead = ["", "assets/ui/STFST00.png", "assets/ui/STFST01.png", "assets/ui/STFST02.png"];
var playerHeadCounter = 0;

setTimeout(SetFace, 200);

function SetFace()
{
    if(playerHeadCounter >= 3)
    {
        playerHeadCounter = 0;
    }

    $(document).ready(function() {
        $("#headPlayer").css({
          "background-image": `url(`+playerHead[playerHeadCounter]+`)`,
          "background-size": 100
        });
    })
    playerHeadCounter += 1;
    setTimeout(SetFace, 500);
}




