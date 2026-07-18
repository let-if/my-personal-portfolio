// import axios from "axios";
// import { env } from "../config/env.js";


// const githubApi = axios.create({

//     baseURL:"https://api.github.com",

//     headers:{
//         Accept:"application/vnd.github+json"
//     }

// });



// export async function getGithubProfile(){

// const response =
// await githubApi.get(
// `/users/${env.GITHUB_USERNAME}`
// );


// return response.data;

// }




// export async function getGithubRepos(){


// const response =
// await githubApi.get(

// `/users/${env.GITHUB_USERNAME}/repos`,

// {
// params:{
// sort:"updated",
// per_page:10
// }
// }

// );


// return response.data;

// }
import axios from "axios";
import { env } from "../config/env.js";


const githubApi = axios.create({

    baseURL:"https://api.github.com",

    headers:{
        Accept:"application/vnd.github+json"
    }

});




// ===============================
// PROFILE
// ===============================

export async function getGithubProfile(){

    const response =
    await githubApi.get(
        `/users/${env.GITHUB_USERNAME}`
    );


    return response.data;

}




// ===============================
// REPOSITORIES
// ===============================

export async function getGithubRepos(){

    const response =
    await githubApi.get(

        `/users/${env.GITHUB_USERNAME}/repos`,

        {
            params:{
                sort:"updated",
                per_page:10
            }
        }

    );


    return response.data;

}




// ===============================
// LANGUAGES
// ===============================

export async function getGithubLanguages(){

    const repos =
    await getGithubRepos();


    const languages = {};


    repos.forEach(repo=>{

        if(repo.language){

            languages[repo.language] =
            (languages[repo.language] || 0) + 1;

        }

    });


    const total =
    Object.values(languages)
    .reduce(
        (sum,value)=>sum+value,
        0
    );


    return Object.entries(languages)
    .map(([name,count])=>({

        name,

        percentage:
        Math.round(
            (count / total) * 100
        )

    }));

}




// ===============================
// STATS
// ===============================

export async function getGithubStats(){

    const repos =
    await getGithubRepos();


    return {

        repositories:
        repos.length,


        stars:
        repos.reduce(
            (sum,repo)=>
            sum + repo.stargazers_count,
            0
        ),


        forks:
        repos.reduce(
            (sum,repo)=>
            sum + repo.forks_count,
            0
        )

    };

}