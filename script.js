let button=document.getElementById('btn');
let list=document.getElementById('myUL')

button.addEventListener('click',inputMsg);

function inputMsg(){
    let li = document.createElement("li");
    let inputValue = document.getElementById("input").value;
    
    let ptag=document.createElement('p');
    ptag.textContent=inputValue;
    li.append(ptag)

    let div=document.createElement('div')
    let edit=document.createElement('button');
    edit.textContent="EDIT"
    edit.classList.add("edit")
    div.appendChild(edit)

    let del=document.createElement('button');
    del.textContent="DELETE"
    del.classList.add("delete")
    div.appendChild(del);
   
    li.appendChild(div);

    if (inputValue === '') {
      alert("You must write something!");
    }else{
        document.getElementById("myUL").appendChild(li);
        list.append(li)

        document.getElementById("input").value = "";
        
        del.addEventListener('click',deleteMsg)
        function deleteMsg(){
            li.remove();
        }

        edit.addEventListener('click',editMsg)
        function editMsg(){
        let value= prompt("write mes")
        if(value!='')
            li.children[0].textContent=value;
        }

    }
}

