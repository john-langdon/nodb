let id = 1;

const myItems = [];


module.exports = { 
    getItems: (req, res) => {
        res.status(200).json(myItems);
    },

    addItems: ( req, res ) => {
        // body
        const newItem = {
            id,
            ...req.body
        }
        id++
        myItems.push(newItem);
        res.status(200).json(myItems);

    },
    
    editQTY: ( req, res) => {
        // body that gives us the item id and the new qty amount
        // afterwards return my items array
        const targetIndex = myItems.findIndex(item => item.id === +req.params.id);

        myItems[targetIndex].QTY = req.body.QTY;

        res.status(200).json(myItems);
    },


    deleteItems: ( req, res ) => {
        const targetIndex = myItems.findIndex(item => item.id === +req.params.id);

        myItems.splice(targetIndex, 1);

        res.status(200).json(myItems);
    }
}