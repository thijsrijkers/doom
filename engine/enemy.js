//Script for the enemy
var enemy = false;
var enemyPosition = 45;
var enemyFixPosition = 45;
var heightEnemy = 16;
var widthEnemy = 6;
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

function enemyWalkRight()
{
    if(enemy == true)
    {
        enemyPosition += 2;

        if(enemyPosition <= 90 && heightEnemy <= 62)
        {
            $(document).ready(function() {
                $("#enemySpawn").css({
                //"top": enemyTopPosition +`%`,
                "left": enemyPosition +`%`,
                });
            }) 
        }
        else
        {
            var x = document.getElementById("enemySpawn");
            x.style.display = "none";
        }
    }
}

function enemyWalkHorizontal(value)
{
    if(enemy == true)
    {
        if(value == "A")
        {
            enemyPosition -= 2;

            if(enemyPosition >= -10)
            {
                var x = document.getElementById("enemySpawn");
                x.style.display = "block";
                $(document).ready(function() {
                    $("#enemySpawn").css({
                    //"top": enemyTopPosition +`%`,
                    "left": enemyPosition +`%`,
                    });
                }) 
            }
            else
            {
                var x = document.getElementById("enemySpawn");
                x.style.display = "none";
            }
        }
        else if(value == "D")
        {     
            enemyPosition += 2;

            if(enemyPosition <= 90 && heightEnemy <= 62)
            {
                var x = document.getElementById("enemySpawn");
                x.style.display = "block";
                $(document).ready(function() {
                    $("#enemySpawn").css({
                    //"top": enemyTopPosition +`%`,
                    "left": enemyPosition +`%`,
                    });
                }) 
            }
            else
            {
                var x = document.getElementById("enemySpawn");
                x.style.display = "none";
            }
        }
    }
}

function enemyWalkingForward()
{
    if(enemy == true)
    {
        enemyTopPosition += 0.5;
        heightEnemy += 2;
        widthEnemy += 0.5;

        $(document).ready(function() {
            $("#enemySpawn").css({
            //"top": enemyTopPosition +`%`,
            "width": widthEnemy +`%`,
            "height": heightEnemy +`%`
            });
        })

        if(heightEnemy > 35 && enemyPosition > 70)
        {
            enemyPosition -= 2;
        }


        $(document).ready(function() {
            $("#enemySpawn").css({
            //"top": enemyTopPosition +`%`,
            "left": enemyPosition +`%`,
            });
        }) 
        

        if(enemyTopPosition >= 85)
        {
            location.reload(); 
        }
        else
        {
            setTimeout(enemyWalkingForward, 1800); 
        }
    }
}

function KillEnemy()
{
    
    if(enemyPosition < 48 && enemyPosition > 37)
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

