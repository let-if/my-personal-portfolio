
import {
getPortfolioContext
}
from "./portfolio.context.js";
export async function generateAIResponse(question){

 if(!question){

return "Please ask me a question.";

}



const context =
await getPortfolioContext();



const text =
question.toLowerCase();



if(text.includes("project")){


return `
I have built ${
context.projects.length
} projects.

Projects:
${
context.projects
.map(project=>project.title)
.join(", ")
}

`;

}



if(text.includes("skill")){


return `
My skills include:

${
context.profile?.skills
?
context.profile.skills.join(", ")
:
"No skills added yet"
}

`;

}



if(
text.includes("bio")
||
text.includes("about")
){


return context.profile?.bio
||
"My profile information is not added yet.";

}



return `
I am a software engineer
building modern web applications.
`;

}