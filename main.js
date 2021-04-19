//Array med alla namn på flikarna 
// let sections = ["about", "projects", "members", "contact"]

//Funktionen visar texten tillhörande knappen användaren just klickade på och gömmer alla andra textrutor
// function ChangeSection(clicked_section){
//     for (i = 0; i < sections.length; i++)  {
//         console.log(sections[i])
//         if (clicked_section == sections[i]){
//             document.getElementById(sections[i]).style.display = "block"
//         }
//         else {
//             document.getElementById(sections[i]).style.display = "none"
//         }
//     }
// }

// ChangeSection("about")



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

