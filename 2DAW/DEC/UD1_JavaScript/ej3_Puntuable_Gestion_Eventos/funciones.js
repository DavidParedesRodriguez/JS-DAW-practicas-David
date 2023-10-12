
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text/plain", ev.target.id);
    ev.target.style.opacity = "0.5";
}

function dragEnd(ev) {
    ev.target.style.opacity = "1";
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text/plain");
    var draggedElement = document.getElementById(data);
    var dropTarget = ev.target;

    if (draggedElement.id === "capa1" && dropTarget.id === "capa2") {
        draggedElement.style.display = "none";
        dropTarget.innerHTML = "LO HAS LOGRADO";
        dropTarget.classList.add("success");
    }
}
