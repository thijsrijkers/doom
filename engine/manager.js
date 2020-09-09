//Script that holds arrays for other files.
setTimeout(SetStage, 200);
setTimeout(SetBar, 200);

function SetStage()
{
    $(document).ready(function() {
        $("#canvas").css({
          "background-image": `url(assets/background_temp/background_temp.png)`,
        });
    })
}

function SetBar()
{
    $(document).ready(function() {
        $("#UI").css({
          "background-image": `url(assets/ui/STBAR.png)`,
        });
    })
}
