// console.log('project 2');
showNotes();

let addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click', function (e) {
    let addtxt = document.getElementById('addtxt')
    let addtitle=document.getElementById("addtitle");
    let input = localStorage.getItem("input");
    if (input == null) {
        nameobject = [];
    }
    else {
        nameobject = JSON.parse(input);
    }
    let obj={
        title:addtitle.value,
        text:addtxt.value
      }
    
    nameobject.push(obj);

    localStorage.setItem('input', JSON.stringify(nameobject));
    addtitle.value="";
    addtxt.value = "";
    showNotes();
})

function showNotes() {
    let input = localStorage.getItem("input");
    if (input == null) {
        nameobject = [];
    }
    else {
        nameobject = JSON.parse(input);
    }

    let html = "";
    nameobject.forEach(function (element, index) {
        html += `<div class="noteCard my-2 mx-2 card" id=${index}  style="width: 18rem;">
        <div class="card-body">
        <div id="icon">
        <svg xmlns="http://www.w3.org/2000/svg"width="16" id=${index} onclick="imp(this.id)" height="16" fill="currentColor" class="bi bi-bookmark-heart" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
      </svg>
      </div>
            <h5 class="card-title">Note ${element.title}
              </h5>    
            
            <p class="card-text"> ${element.text}</p>
            
            <button id=${index} onclick="deletenote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
    </div>`;
    });


    let inputElm = document.getElementById('newnote');

    if (nameobject.length == 0) {
        inputElm.innerHTML = `please enter note`;
    }
    else {
        inputElm.innerHTML = html;
    }

}

function deletenote(index) {
    // console.log('i am deleting', index);
    let input = localStorage.getItem("input");
    if (input == null) {
        nameobject = [];
    }
    else {
        nameobject = JSON.parse(input);
    }
    nameobject.splice(index, 1);
    localStorage.setItem('input', JSON.stringify(nameobject));
    showNotes();
}

let search = document.getElementById('entertxt');
search.addEventListener('input', function () {
    let inputval = search.value.toLowerCase();
    // console.log('input event fireed',inputval);
    let notecard = document.getElementsByClassName('noteCard');
    Array.from(notecard).forEach(function (element) {
        let cardtext = element.getElementsByTagName('p')[0].innerText;
        let cardtitle=element.getElementsByTagName("h5")[0].innerText;
// let fullsearch={
//     TITLE:cardtitle.innerText,
//     TEXT:cardtext.innerText
// }
        if (cardtext.includes(inputval)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })
})


function imp(index) {
    console.log("i am index", index);

    let colorchange = document.getElementById(index);
    colorchange.style.border = "2px solid red";

    // let input=localStorage.getItem("input");
    // if(input==null){
    //     nameobject=[];
    // }
    // else{
    //     nameobject=JSON.parse(input);
    // }
    // localStorage.setItem('input',JSON.stringify(nameobject));
    // showNotes();

}