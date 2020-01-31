let id = 2;

const myItems = [
    {
        id: 1,
        nameOfItem: "pickles",
        brandOfItem: "Vlasic",
        QTY: 3
    }
];


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
    },
    
    editQTY: ( req, res) => {
        // body that gives us the item id and the new qty amount
        // afterwards return my items array
        
    },


    deleteItems: ( req, res ) => {
        // params
        // const targetIndex = myItems.findIndex(item => item.id === )

        // myItems.splice(targetIndex, 1);

        // res.status(200).json(myItems);
    }
}