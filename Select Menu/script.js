var selectField = document.getElementById('selectField');
var setectText = document.getElementById('setectText');
var list = document.getElementById('list');
var arrowIcon = document.getElementById('arrowIcon');
var options = document.getElementsByClassName('options');

for(option of options){
    option.onclick = function(){
        setectText.innerHTML = this.textContent;
        list.classList.toggle("visible");
        arrowIcon.classList.toggle("rotate-180");
    }
}

selectField.onclick = function(){
    list.classList.toggle("visible");
    arrowIcon.classList.toggle("rotate-180");
}