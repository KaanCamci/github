class Github{

    async getUserData(username){
        let userResponse = await fetch(`https://api.github.com/users/${username}`);
        let data = await userResponse.json();

        return data;
    }

    async getUserReposData(username){
        let reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
        let reposData = await reposResponse.json();

        return reposData;
    }


}