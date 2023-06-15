const new_bookmark_btn = document.getElementById("new_bkm");
const new_grp = document.getElementById("new_grp");
const overlay = document.querySelector(".overlay");
const closeBkmModal = document.querySelector(".closeBkm");
const closeGrpModal = document.querySelector(".closeGrp");
const new_grp_modal = document.querySelector(".new_group_modal");
const new_items_modal = document.querySelector(".new_items_modal");



// Functions Declaration 
function openModal(e){
    e.classList.remove("hidden");
    overlay.classList.remove("hidden");
    console.log("Modal opened")
}
function closeModal(e){
    e.classList.add("hidden");
    overlay.classList.add("hidden");
    console.log("Modal Closed")
}
// Open and close New bookmarks modal
new_bookmark_btn.addEventListener('click',()=>{openModal(new_items_modal)})
closeBkmModal.addEventListener('click',()=>{closeModal(new_items_modal)});
// Open and close New Group Modal
new_grp.addEventListener('click', ()=>{openModal(new_grp_modal)});
closeGrpModal.addEventListener('click', ()=>{closeModal(new_grp_modal)});
// Close on escape
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !new_items_modal.classList.contains("hidden")) {
        closeModal(new_items_modal);
    } else if(e.key === "Escape" && !new_grp_modal.classList.contains("hidden")){
        closeModal(new_grp_modal);
    }
});