class UI{

    constructor(){
        this.photo = document.getElementById("profilePicture");
        this.personalInfos =  Array.from(document.querySelectorAll('#personalInfos>li>span'));
        this.reposArea = document.getElementById("repos-area");
    }
    
    personalInfo(personalData){
        this.photo.src = personalData.avatar_url;
        this.personalInfos[0].innerHTML = "Name: " + personalData.name;
        this.personalInfos[1].innerHTML = "Bio: " + personalData.bio;
        this.personalInfos[2].innerHTML = "Company: " + personalData.company;
        this.personalInfos[3].innerHTML = "Location: " + personalData.location;
        this.personalInfos[4].innerHTML = "Repos: " + personalData.public_repos;
        this.personalInfos[5].innerHTML = "Followers: " + personalData.followers;
    }

    reposUI(repoInfos){

        while (this.reposArea.lastElementChild) {
            this.reposArea.removeChild(this.reposArea.lastElementChild);
          }
        
        repoInfos.forEach(repo => {
        console.log(repo);

            let title = document.createElement("h5");
            title.className = "card-title";
            title.textContent = repo.name;
            let description = document.createElement("p");
            description.className = "card-text";
            description.textContent = repo.description;
            let link = document.createElement("a");
            link.href = repo.html_url;
            link.className = "btn btn-primary";
            link.textContent = "Go To Repo";
            link.target = "_blank";

            let body = document.createElement("div");
            body.className = "card-body";

            body.appendChild(title);
            body.appendChild(description);
            body.appendChild(link);

            let card = document.createElement("div");
            card.className = "card";
            card.style = "width: 300px; margin: 5px 5px;";
            card.appendChild(body);

            this.reposArea.appendChild(card);
        });
    }

}