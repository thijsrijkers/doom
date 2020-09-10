//Script for player behaviour
var timerSwitchFrameGun = 150;

setTimeout(SetGun, 200);

function SetGun()
{
    $(document).ready(function() {
        $("#gun").css({
          "background-image": `url(assets/weapons/PISGA0.png)`
        });
    })
}

var gunImages = ["assets/weapons/PISGB0.png", "assets/weapons/PISGC0.png", "assets/weapons/PISGD0.png", "assets/weapons/PISGE0.png"];
var gunFrame = 0;

function GunShot()
{
    $(document).ready(function() {
        $("#gun").css({
          "background-image": `url(`+gunImages[gunFrame]+`)`
        });
    })
    gunFrame += 1;

    if(gunFrame <= 3)
    {
        setTimeout(GunShot, timerSwitchFrameGun);
    }
    else
    {
        gunFrame = 0;
        setTimeout(SetGun, timerSwitchFrameGun);
    }
}