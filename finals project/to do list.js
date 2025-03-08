var addToDoButton = document.getElementById('addToDo');
var toDoContainer = document.getElementById('toDoContainer');
var inputField = document.getElementById('inputField');


addToDoButton.onclick = function(){
    // verifierr si l'imput est vide 
    if(inputField.value != ""){
        //si l'input n'est pas vide creer un paragraphe 
        var paragraph = document.createElement('p')
    }
    //valoriser ce paragraphe avec le contenue de l'input
    paragraph.innerText = inputField.value;


    //stylisee le paragraphe
    paragraph.classList.add('paragraphe_style');

    //inserer le paragraphe dans l'element  todocontainer
    toDoContainer.appendChild(paragraph);

    //vider l'imput qund le paragraphe est ajouter
    inputField.value = "";

    //barre le paragraphe quand on clique dessu
    paragraph.addEventListener('click', function(){
        paragraph.classList.add('paragraph_click');
    })

    //suprimer la tache lorsqu'on double click

    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })

}