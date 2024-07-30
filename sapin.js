console.log(" +");
// console.log("/|"); 


function afficherPointeSapin(n, height) {
    let texte = "/*"; 
    let i = 0; 

    while (i < height - n){
        texte += " "
        i++;
    }
    let j = 0; 
       while (j < n) {
         texte += "**"; 
        j++; 
    console.log(texte)
       }
       
}
afficherPointeSapin(4)

function afficherEtoiles(n) {
    let step = 0; 
    while (step < height) {
       afficherPointeSapin(n, height);
       step++; 
console.log("*")
}
}
afficherPointeSapin(2)
afficherPointeSapin(5)
