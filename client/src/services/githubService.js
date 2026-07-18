// // // import axios from "axios";


// // // const USERNAME = "let-if";


// // // const githubAPI = axios.create({

// // // baseURL:
// // // "https://api.github.com"

// // // });



// // // export async function getGithubProfile(){


// // // const response =
// // // await githubAPI.get(
// // // `/users/${USERNAME}`
// // // );


// // // return response.data;


// // // }




// // // export async function getGithubRepositories(){


// // // const response =
// // // await githubAPI.get(
// // // `/users/${USERNAME}/repos`,
// // // {

// // // params:{

// // // sort:"updated",

// // // per_page:6

// // // }

// // // }
// // // );


// // // return response.data;


// // // }
// // // export async function getRepositoryLanguages(owner, repo){


// // // const response = await githubAPI.get(

// // // `/repos/${owner}/${repo}/languages`

// // // );


// // // return response.data;


// // // }
// // import axios from "axios";


// // const USERNAME = "let-if";


// // const githubAPI = axios.create({

// // baseURL:
// // "https://api.github.com"

// // });



// // export async function getGithubProfile(){

// // const response =
// // await githubAPI.get(
// // `/users/${USERNAME}`
// // );


// // return response.data;

// // }





// // export async function getGithubRepositories(){


// // const response =
// // await githubAPI.get(

// // `/users/${USERNAME}/repos`,

// // {

// // params:{

// // sort:"updated",

// // per_page:12

// // }

// // }

// // );


// // return response.data;

// // }






// // export async function getGithubLanguages(){


// // const repos =
// // await getGithubRepositories();


// // let languages={};



// // repos.forEach(repo=>{


// // if(repo.language){


// // if(languages[repo.language]){

// // languages[repo.language]++;

// // }

// // else{

// // languages[repo.language]=1;

// // }


// // }


// // });




// // const total =
// // Object.values(languages)

// // .reduce(

// // (a,b)=>a+b,

// // 0

// // );





// // return Object.keys(languages)

// // .map(language=>(

// // {

// // name:language,

// // percentage:

// // Math.round(

// // (languages[language]/total)*100

// // )

// // }

// // ))

// // .sort(

// // (a,b)=>

// // b.percentage-a.percentage

// // )

// // .slice(0,5);



// // }import API from "../api/axios";



// // =====================================
// // GET GITHUB PROFILE
// // =====================================

// export async function getGithubProfile(){


//     const response = await API.get(
//         "/github/profile"
//     );


//     return response.data;


// }




// // =====================================
// // GET GITHUB REPOSITORIES
// // =====================================

// export async function getGithubRepositories(){


//     const response = await API.get(
//         "/github/repos"
//     );


//     return response.data;


// }



// // short alias support

// export const getGithubRepos =
// getGithubRepositories;








// // =====================================
// // GET GITHUB LANGUAGES
// // =====================================

// export async function getGithubLanguages(){


//     const response = await API.get(
//         "/github/languages"
//     );


//     return response.data;


// }








// // =====================================
// // GET GITHUB STATISTICS
// // =====================================

// export async function getGithubStats(){


//     const response = await API.get(
//         "/github/stats"
//     );


//     return response.data;


// }







// // =====================================
// // DEFAULT EXPORT
// // =====================================

// export default {

//     getGithubProfile,

//     getGithubRepositories,

//     getGithubRepos,

//     getGithubLanguages,

//     getGithubStats

// };
import API from "../api/axios";


// ===============================
// PROFILE
// ===============================

export async function getGithubProfile(){

    const response = await API.get(
        "/github/profile"
    );

    return response.data.data;

}



// ===============================
// REPOSITORIES
// ===============================

export async function getGithubRepositories(){

    const response = await API.get(
        "/github/repos"
    );


    return response.data.data;

}


export const getGithubRepos =
getGithubRepositories;



// ===============================
// LANGUAGES
// ===============================

export async function getGithubLanguages(){

    const response = await API.get(
        "/github/languages"
    );


    return response.data.data;

}



// ===============================
// STATS
// ===============================

export async function getGithubStats(){

    const response = await API.get(
        "/github/stats"
    );


    return response.data.data;

}



export default {

    getGithubProfile,

    getGithubRepositories,

    getGithubRepos,

    getGithubLanguages,

    getGithubStats

};