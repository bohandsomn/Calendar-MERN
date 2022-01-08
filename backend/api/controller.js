import List from "../entities/List.js";

class Controller {
    getList = async (req, res) => {
        try {
            const { key } = req.body
            const entry = await List.findOne({key})
            
            if (!entry) {
                return res.json({
                    isSuccess: false,
                    list: []
                })
            }

            res.json({
                isSuccess: true,
                list: entry.list
            })

        } catch (error) {
            console.log(error)

            res.status(500).json({
                isSuccess: false,
                list: ['Server', 'error', 'status', 500]
            })
        }
    }
    setList = async (req, res) => {
        try {
            const { key, list } = req.body;

            const entry = await List.findOne({ key });
            
            if (entry) {
                await List.updateOne(
                    { _id: entry._id }, 
                    { list }
                )

                return res.json({
                    isSuccess: true
                })
            }
            
            const newList = new List({ key, list })

            newList.save()

            res.status(200).json({
                isSuccess: true
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({message: 'Error access to list'})
        }
    }
}

export default new Controller();