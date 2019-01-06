(function () {
    'use strict';

    var todoApp = {
        /**
         * Add New Item in TODO List
         */
        addNewElement: ()=>{
            var li = document.createElement("li");
            var inputValue = document.getElementById("title").value;
            var t = document.createTextNode(inputValue);
            li.appendChild(t);
            if (inputValue === '') {
                alert("Please Enter Message...!");
            } else {
                document.getElementById("todoList").appendChild(li);
            }
            document.getElementById("title").value = "";
    
            var span = document.createElement("SPAN");
            var txt = document.createTextNode("\u00D7");
            span.className = "close";
            span.appendChild(txt);
            li.appendChild(span);
    
            for (i = 0; i < close.length; i++) {
                close[i].onclick = function () {
                    var div = this.parentElement;
                    div.style.display = "none";
                }
            }
        }
    }

    // Create a "close" button and append it to each list item
    var myNodelist = document.getElementsByTagName("LI");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
    }

    // Click on a close button to hide the current list item
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

    // Add a "checked" symbol when clicking on a list item
    var list = document.querySelector('ul');
    function init(){
        var addBtn = document.getElementById('addNewElement');
        addBtn.addEventListener('click', function (ev) {
            ev.preventDefault();
            todoApp.addNewElement();
        }, false);
        list.addEventListener('click', function (ev) {
            if (ev.target.tagName === 'LI') {
                ev.target.classList.toggle('checked');
            }
        }, false);
    }
    init();
})();