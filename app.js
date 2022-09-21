const input = document.getElementById("username-input");

let github = new Github();
let ui = new UI();
function events(){
    input.addEventListener("keyup",search);
}
events();

async function search(e){
    if(e.key === "Enter"){
        let userData = await github.getUserData(e.target.value);
        let userRepoData = await github.getUserReposData(e.target.value);

        console.log(userRepoData);
        ui.personalInfo(userData);
        ui.reposUI(userRepoData);

        e.target.value="";
    }
}