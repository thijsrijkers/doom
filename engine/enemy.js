//Script for the enemy
var enemy = false;
var heightEnemy = 16;
var widthEnemy = 8;
var enemyChangeFrameTime = 300;
var enemyTopPosition = 53;
document.getElementById("enemySpawn").visibility = 'hidden';    
setTimeout(AnimationEnemy, enemyChangeFrameTime);  
setTimeout(SpawnEnemy, 1000);

var enemyForward = ["assets/monsters/CYBR/CYBRA1.png", "assets/monsters/CYBR/CYBRB1.png", "assets/monsters/CYBR/CYBRC1.png", "assets/monsters/CYBR/CYBRD1.png"];
var enemyFrame = 0;

function SpawnEnemy()
{
    enemy = true;
    document.getElementById("enemySpawn").visibility = 'visible';
}

function AnimationEnemy()
{
    $(document).ready(function() {
        $("#enemySpawn").css({
          "background-image": `url(`+enemyForward[enemyFrame]+`)`
        });
    })
    enemyFrame += 1;

    if(enemyFrame >= 4)
    {
        enemyFrame = 0;
    }

    setTimeout(enemyWalkingForward, enemyChangeFrameTime); 
    setTimeout(AnimationEnemy, enemyChangeFrameTime); 
}

function enemyWalkingForward()
{
    if(enemy == true)
    {
        enemyTopPosition += 0.5;
        heightEnemy += 1;
        widthEnemy += 0.5;

        $(document).ready(function() {
            $("#enemySpawn").css({
            "top": enemyTopPosition +`%`,
            "width": widthEnemy +`%`,
            "height": heightEnemy +`%`
            });
        })

        if(enemyTopPosition >= 70)
        {
            location.reload(); 
        }
        else
        {
            setTimeout(enemyWalkingForward, 1000); 
        }
    }
}

function KillEnemy()
{
    setTimeout(HideEnemy, 10); 
    heightEnemy = 16;
    widthEnemy = 8;
    enemyTopPosition = 50;
    enemy = false;
    setTimeout(enemyTrue, 3400); 
    setTimeout(ShowEnemy, 3400); 
    setTimeout(enemyWalkingForward, 3500); 
}

function enemyTrue()
{
    enemy = true;
}

function HideEnemy()
{
    $("#enemySpawn").hide();   
}

function ShowEnemy()
{
    $("#enemySpawn").show();   
}

