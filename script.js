const new_bookmark_btn = document.getElementById("new_bkm");
const new_grp = document.getElementById("new_grp");
const overlay = document.querySelector(".overlay");
const closeBkmModal = document.querySelector(".closeBkm");
const closeGrpModal = document.querySelector(".closeGrp");
const new_grp_modal = document.querySelector(".new_group_modal");
const new_items_modal = document.querySelector(".new_items_modal");
const new_bkm_name = document.getElementById("bkm_name");
const new_bkm_url = document.getElementById("url");
const new_grp_name = document.getElementById("group_name");
const new_items_submit = document.getElementById('new_items_submit');

const bookmarks = [];

const addBookmark = (name, url, groupName) =>{
    bookmarks.push({ 'name': name,
        'url' : url, 
        'groupName' : groupName
    });
};

let grp = "adsf"
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

new_items_submit.addEventListener('click', ()=>{
    if(new_bkm_name.value != null && new_bkm_url.value != null){
        addBookmark(new_bkm_name, new_bkm_url, grp);
        localStorage.setItem('data', bookmarks);
    }
    closeModal(new_items_modal)
});


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

