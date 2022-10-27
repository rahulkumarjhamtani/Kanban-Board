// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};

// When the   clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

function addTask() {
    modal.style.display = "block";
}

var key = 1;
function addNewTask() {
    var taskName = document.getElementById('labelName').value;
    console.log(taskName);

    label1 = document.createElement("div");
    label1.setAttribute("class", 'task');
    label1.setAttribute("id", 'task' + key);
    document.getElementById("one").appendChild(label1);

    label2 = document.createElement("input");
    label2.setAttribute("name", 'check' + key);
    label2.setAttribute("type", 'checkbox');
    label2.setAttribute("class", 'check');
    label2.setAttribute("id", 'check' + key);
    label1.appendChild(label2);

    label3 = document.createElement("label");
    label3.innerHTML = taskName;
    label3.setAttribute("id", 'name' + key);
    label3.setAttribute("for", 'check' + key);
    label1.appendChild(label3);

    key++;
    modal.style.display = "none";
}

function readyTask() {
    var parent = document.getElementById('one');
    var arrCheck = parent.getElementsByClassName('check');
    var task = parent.getElementsByClassName('task');

    for (var i = 0; i < arrCheck.length; i++) {
        if (arrCheck[i].checked == true) {
            console.log(i);
            var value = i + 1;
            task[i].style.backgroundColor = 'rgb(38, 255, 38)';


            task[i].setAttribute("draggable", true);
            task[i].setAttribute("ondragstart", "drag(event)");
            document.getElementById('one').setAttribute("ondrop", "drop(event)");
            document.getElementById('one').setAttribute("ondragover", "allowDrop(event)");
            document.getElementById('two').setAttribute("ondrop", "drop(event)");
            document.getElementById('two').setAttribute("ondragover", "allowDrop(event)");
            document.getElementById('three').setAttribute("ondrop", "drop(event)");
            document.getElementById('three').setAttribute("ondragover", "allowDrop(event)");
            document.getElementById('four').setAttribute("ondrop", "drop(event)");
            document.getElementById('four').setAttribute("ondragover", "allowDrop(event)");

        }
        else {
            console.log(i);
            task[i].style.backgroundColor = 'white';
            task[i].setAttribute('draggable',false);
        }
    }
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    
    console.log(event.target.id);

    if(event.target.id == 'one' || event.target.id == 'two' || event.target.id == 'three' || event.target.id == 'four')
    {
        ev.target.appendChild(document.getElementById(data));
        var childs = event.target.querySelectorAll('.check');
        childs.forEach(element => {
            element.style.display = 'none';
            element.checked = false;
        })
    }

    if (event.target.id == 'four') {
        ev.target.appendChild(document.getElementById(data));
        var child = event.target.querySelectorAll('.task');
        child.forEach(element => {
            element.removeAttribute('draggable');
            element.removeAttribute('ondragstart');
            element.style.backgroundColor = 'darkgreen';
            element.style.color = 'white';
        })
        var childs = event.target.querySelectorAll('.check');
        childs.forEach(element => {
            element.style.display = 'none';
            element.checked = false;
        })
    }

    if (event.target.id == 'one') {
        var child = event.target.querySelectorAll('.check');
        child.forEach(element => {
            element.style.display = 'block';
            element.checked = true;
        })
    }


}
