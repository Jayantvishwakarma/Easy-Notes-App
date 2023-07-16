
const addBtn = document.querySelector("#addBtn");
const addTxt2 = document.querySelector("#addTxt2");
const addTxt1 = document.querySelector("#addTxt1");
const Cards = document.querySelector("#notes1");

addBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    const newNote2 = addTxt2.value;
    const newNote1 = addTxt1.value;
    const newCard = document.createElement("div");
    const newLiInnerHtml = `
    <div id="notes1" class="row container-fluid">
            <div class="noteCard my-2 mx-2 card shadow-lg p-3 mb-5 bg-body rounded border border-primary" >
                <div class="card-body">
                    <h5 class="card-title">${newNote1}</h5>
                    <p class="card-text">${newNote2}</p>
                    <button href="#" class="btn-1 delete btn btn-primary">Delete note</button>
                </div>
            </div>
        </div>`;
console.log(newCard);
newCard.innerHTML = newLiInnerHtml;
Cards.append(newCard);
    addTxt2.value ="";
    addTxt1.value ="";
})

Cards.addEventListener("click", (e)=>{
    if( e.target.classList.contains("delete")){
    const removeNewNote = e.target.parentNode.parentNode;
    // console.log(removeNewNote);
    removeNewNote.remove();
}
})


