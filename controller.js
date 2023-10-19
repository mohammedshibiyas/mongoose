import schema from "./user.model.js"

export async function addTask(req,res)
{
   const{task}=req.body
   console.log(task);
   res.status(201).send(schema.create({task}));
    // res.end();
}