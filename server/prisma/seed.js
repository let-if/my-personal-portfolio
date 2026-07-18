// import prisma from "../src/config/db.js";
// import bcrypt from "bcrypt";


// async function main(){


// const password =
// await bcrypt.hash(
// "Admin@123",
// 10
// );



// await prisma.admin.create({

// data:{

// name:"Portfolio Admin",

// email:"admin@portfolio.com",

// password

// }

// });


// console.log(
// "Admin created"
// );


// }


// main()
// .catch(console.error)
// .finally(

// async()=>{

// await prisma.$disconnect();

// }

// );
import prisma from "../src/config/db.js";
import bcrypt from "bcrypt";

async function main() {

  // ===========================
  // CREATE ADMIN
  // ===========================

  const existingAdmin = await prisma.admin.findUnique({
    where: {
      email: "admin@portfolio.com",
    },
  });

  if (!existingAdmin) {
    const password = await bcrypt.hash("Admin@123", 10);

    await prisma.admin.create({
      data: {
        name: "Portfolio Admin",
        email: "admin@portfolio.com",
        password,
      },
    });

    console.log("✅ Admin created");
  } else {
    console.log("ℹ️ Admin already exists");
  }

  // ===========================
  // CREATE SAMPLE PROJECTS
  // ===========================

  const projectCount = await prisma.project.count();

  if (projectCount === 0) {
    await prisma.project.createMany({
      data: [
        {
          title: "Personal Portfolio",
          description:
            "A modern full-stack developer portfolio built with React, Node.js, Express, Prisma, PostgreSQL, and Tailwind CSS.",

          image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",

          github:
            "https://github.com/let-if/portfolio",

          demo:
            "https://yourportfolio.com",

          technologies: [
            "React",
            "Node.js",
            "Express",
            "Prisma",
            "PostgreSQL",
            "Tailwind CSS",
          ],

          featured: true,
        },
        {
          title: "Office Operations Management System",

          description:
            "Enterprise office management platform with authentication, dashboard, project management, and analytics.",

          image:
            "https://images.unsplash.com/photo-1497366754035-f200968a6e72",

          github:
            "https://github.com/let-if/office-management",

          demo: "",

          technologies: [
            "React",
            "Express",
            "Prisma",
            "PostgreSQL",
          ],

          featured: false,
        },
      ],
    });

    console.log("✅ Sample projects created");
  } else {
    console.log("ℹ️ Projects already exist");
  }
}

main()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });