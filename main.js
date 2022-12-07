let generalObject = []
let inputField = document.querySelector(".text").value;


let list = document.querySelector(".value ul")
document.querySelector(".button").onclick = (event) => {
        event.preventDefault();
        let templateText = document.querySelector(".text").value;
        const myLi = document.createElement('li');
        myLi.innerHTML = templateText;
        list.appendChild(myLi);

        let myCheckBox = document.createElement('INPUT'); 
        myCheckBox.setAttribute("type", "checkbox");
        myCheckBox.className = "checkbox";
        myLi.appendChild(myCheckBox);
        
        let mySpan = document.createElement('span'); 
        mySpan.innerHTML = '  x';
        myLi.appendChild(mySpan);
        let close = document.querySelectorAll("span");
        for(let i = 0; i<close.length; i++){
            close[i].addEventListener('click',()=>{
                close[i].parentElement.style.display = "none";
            })
        }
        let obj = {}
        obj["value"] = templateText;
        obj["selector"] = false;
        generalObject.push(obj);
        templateText = "";    
}

document.querySelector(".sortName").onclick = () => {
        let geek_list, i, run, li, stop;
        geek_list = document.getElementById("GeekList");
        run = true;
        while (run) {
            run = false;
            li = geek_list.getElementsByTagName("LI");
            for (i = 0; i < (li.length - 1); i++) {
                stop = false;
                if (li[i].innerHTML.toLowerCase() > 
                    li[i + 1].innerHTML.toLowerCase()) {
                    stop = true;
                    break;
                }
            }
            if (stop) {
                li[i].parentNode.insertBefore(
                        li[i + 1], li[i]);
                run = true;
            }
        }    
}

document.querySelector(".sortValue").onclick = () => {
    let ul = document.querySelector("#GeekList").value;
    console.log(ul);
    let geek_list, i, run, li, stop;
    geek_list = document.getElementById("GeekList");
    run = true;
    let sp = []
    while (run) {
        run = false;
        li = geek_list.getElementsByTagName("LI");
        for (i = 0; i < (li.length - 1); i++) {
            stop = false;
            if (li[i].innerHTML.toLowerCase() > 
                li[i + 1].innerHTML.toLowerCase()) {
                stop = true;
                break;
            }
            
        }
        if (stop) {
            li[i].parentNode.insertBefore(
                    li[i + 1], li[i]);
            run = true;
        }
    }    
}




document.querySelector(".delete").onclick = () => {
    let close = document.querySelectorAll("li");
    console.log(close);
        for (let i of close) {
            if(document.querySelector(".checkbox").checked){
                i.style.display = "none";
            }
        }
        checkbox();
}
    
function checkbox(){
    let close = document.querySelectorAll("li");
    for (let i of close) {
        if(i.children.input.checkbox.checked){
            generalObject.obj.selector = true;
        }
    }
}
    
   





