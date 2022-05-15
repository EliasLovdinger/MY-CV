document.getElementById("demobutton").addEventListener("click", function() {
    document.body.style.backgroundColor = "red";
    });



    var Combination = "";
    document.addEventListener("keyup", function(event) {
        if (event.key === '1') {
            Combination = "1";
        }
        else if (event.key === '2') {
            if (Combination === "1")
            {
                Combination = "2";
            }
        }        
        else if (event.key === '3') {
            if (Combination === "2")
            {
                Combination = "3";
            }
        }
        else if (event.key === '4') {
            if (Combination === "3")
            {
                Combination = "4";
                checkCombination();
            }
        }
    });
    function checkCombination() {
        if(Combination === '4') {
          alert('^;,,,;^  ©: BY ELIAS');  
        } 
     }