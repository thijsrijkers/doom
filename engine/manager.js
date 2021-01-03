//Script that holds arrays for other files.
setTimeout(SetStage, 200);
setTimeout(SetBar, 200);

window.onload = function() {
  canvas = document.getElementById('canvas');

  document.addEventListener('keydown', function(event) 
  {
      enemyWalkHorizontal(String.fromCharCode(event.which));
  }, false);
}

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