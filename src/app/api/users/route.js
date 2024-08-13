export async function GET(){

    return Response.json({
        comments
    })
}


const comments = [
    {
        id : 1,
        message : "comment 1"
    },
    {
        id : 2,
        message : "comment 2"
    },
    {
        id : 3,
        message : "comment 3"
    },
]