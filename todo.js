
var ul=document.getElementById('list')
var li;

var addbutton=document.getElementById("add");
addbutton.addEventListener("click",addItem)

 var removebutton=document.getElementById("remove");
 removebutton.addEventListener("click",removeItem)



function addItem(){
    var input=document.getElementById('input')
    var item=input.value;
    ul=document.getElementById('list');
var textnode=document.createTextNode(item)
if(item==''){
    return false;
}
else{
    li=document.createElement('li');
    //var checkbox=document.getElementById('check');
     var checkbox=document.createElement('input');
     checkbox.type='checkbox';
     checkbox.setAttribute('id', 'check');
   // var label=document.getElementById('label2')
    var label=document.createElement('label');
    label.setAttribute('for','item')

    ul.appendChild(label);
    li.appendChild(label);
    li.appendChild(checkbox);
    label.appendChild(textnode);
   
    ul.insertBefore(li,ul.children[0]);
   
     
    setTimeout(()=>{
        li.className='visuvall';
    },1000)


    input.value='';
}

}

function removeItem(){
    li=ul.children
    for(let i=0;i<li.length;i++)
    {
        while (li[i]&&
            li[i].children[0].checked){
         ul.removeChild(li[i]);
        }

        
        console.log(li)
    }
}