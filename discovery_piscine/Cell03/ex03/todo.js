window.onload = function() {
    var ft_list = document.getElementById('ft_list');
    var newBtn = document.getElementById('newBtn');

    loadTasks();

    newBtn.onclick = function() {
        var task = prompt("Please enter a new TO DO:");
        
        if (task !== null && task.trim() !== "") {
            addTodo(task);
            saveTasks();
        }
    };

    function addTodo(taskText) {
        var todoDiv = document.createElement('div');
        todoDiv.textContent = taskText;
        
        todoDiv.onclick = function() {
            var isConfirmed = confirm("Do you want to remove this TO DO?");
            if (isConfirmed) {
                this.parentNode.removeChild(this); 
                saveTasks(); 
            }
        };

        if (ft_list.firstChild) {
            ft_list.insertBefore(todoDiv, ft_list.firstChild);
        } else {
            ft_list.appendChild(todoDiv);
        }
    }

    function saveTasks() {
        var tasks = [];
        var todoItems = ft_list.children;
        
        for (var i = 0; i < todoItems.length; i++) {
            tasks.push(todoItems[i].textContent);
        }
        
        var jsonTasks = JSON.stringify(tasks);
        
        var d = new Date();
        d.setTime(d.getTime() + (24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        
        document.cookie = "todoList=" + encodeURIComponent(jsonTasks) + ";" + expires + ";path=/";
    }

    function loadTasks() {
        var name = "todoList=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                var jsonTasks = c.substring(name.length, c.length);
                if (jsonTasks !== "") {
                    var tasks = JSON.parse(jsonTasks);

                    for (var j = tasks.length - 1; j >= 0; j--) {
                        addTodo(tasks[j]);
                    }
                }
                return;
            }
        }
    }
};