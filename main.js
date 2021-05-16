//Array med alla namn på flikarna 
let sections = ["about", "projects", "members", "contact"]

//Funktionen visar texten tillhörande knappen användaren just klickade på och gömmer alla andra textrutor
function ChangeSection(clicked_section){
    sections.forEach(function(section){
        if (clicked_section == section){
            document.getElementById(section).style.display = "block"
        }
        else {
            document.getElementById(section).style.display = "none"
        }
    })
}

ChangeSection("about")

