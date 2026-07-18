// import {
// getGithubProfile,
// getGithubRepos
// }
// from "../services/github.service.js";



// export async function profile(req,res,next){

// try{


// const data =
// await getGithubProfile();


// res.json({

// success:true,

// data

// });


// }catch(error){

// next(error);

// }

// }




// export async function repos(req,res,next){

// try{


// const data =
// await getGithubRepos();


// res.json({

// success:true,

// data

// });


// }catch(error){

// next(error);

// }

// }
import {
getGithubProfile,
getGithubRepos,
getGithubLanguages,
getGithubStats
}
from "../services/github.service.js";



export async function profile(req,res,next){

try{

const data =
await getGithubProfile();

res.json({
success:true,
data
});


}catch(error){

next(error);

}

}




export async function repos(req,res,next){

try{

const data =
await getGithubRepos();

res.json({
success:true,
data
});


}catch(error){

next(error);

}

}




export async function languages(req,res,next){

try{

const data =
await getGithubLanguages();

res.json({
success:true,
data
});


}catch(error){

next(error);

}

}




export async function stats(req,res,next){

try{

const data =
await getGithubStats();

res.json({
success:true,
data
});


}catch(error){

next(error);

}

}