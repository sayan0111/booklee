import connectionDB from "../../../database/connectionDB"
import Donatebook from "../../../database/models/donatebook"


connectionDB(); //Checking/Connecting to CosmosDB database.

export default async (req,res)=> {
    if(req.method === "POST") //As it is a post Method we nedd to Sepecify that.

    {
        const {id} = req.body;  // Destructuring the info got from the body.
        if(!id){ //Checking if all Data is Given.
            return res.json({error: "Please fill all the fields."})
        }
        const SellBookDetails = await Donatebook.find({_id : id})
        res.status(200).json(SellBookDetails)
        }  
            
}
