// // import API from "../api/axios";


// // export async function askAI(message){


// // const response =
// // await API.post(
// // "/ai/chat",
// // {
// // message
// // }
// // );


// // return response.data;


// // }






// export async function generateAIResponse(message){



// const {

// profile,

// projects

// }

// =
// await getPortfolioContext();





// const lower =
// message.toLowerCase();





// // PROFILE QUESTIONS


// if(
// lower.includes("who") ||
// lower.includes("about") ||
// lower.includes("abdulletif")
// ){


// return `


// ${profile?.name || "Abdulletif Ylkal Abate"}

// is a ${profile?.title || "Software Engineer"}.


// ${profile?.bio || 
// "Passionate software engineer building modern applications."
// }


// `;

// }





// // PROJECT QUESTIONS


// if(
// lower.includes("project")
// ||
// lower.includes("built")
// ){


// return `


// Here are some projects built by Abdulletif:


// ${
// projects
// .map(

// project=>

// `
// • ${project.title}

// ${project.description}

// `

// )
// .join("\n")

// }


// `;

// }





// // SKILLS QUESTIONS


// if(
// lower.includes("skill")
// ||
// lower.includes("technology")
// ){


// return `


// Abdulletif's main technologies include:


// React

// Node.js

// Express

// PostgreSQL

// Prisma

// Tailwind CSS

// Modern Full Stack Development


// `;

// }





// return `


// I can tell you about:


// ✓ Abdulletif's profile

// ✓ Projects

// ✓ Skills

// ✓ Experience


// Try asking:

// "Tell me about Abdulletif"

// or

// "What projects has he built?"


// `;



// }
import API from "../api/axios";


export async function askAI(message){


const response =
await API.post(
"/ai/chat",
{
message
}
);


return response.data;


}