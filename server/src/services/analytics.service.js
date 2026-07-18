import prisma from "../config/db.js";


export async function createVisitor(data){

    return await prisma.visitor.create({

        data:{
            ipAddress:data.ipAddress,
            userAgent:data.userAgent,
            page:data.page
        }

    });

}



export async function getVisitorStats(){

    const total =
    await prisma.visitor.count();



    const today =
    await prisma.visitor.count({

        where:{

            createdAt:{

                gte:new Date(
                    new Date().setHours(0,0,0,0)
                )

            }

        }

    });



    return {

        totalVisitors:total,

        todayVisitors:today

    };

}