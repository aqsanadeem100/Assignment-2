const Order = require('../model/model')

//create and save  new order

exports.create=(req,res)=>{
    //validate req
    if(!req.body){
        res.status(400).send({message:'Content connot be empty'})
        return
    }
    const order = new Order({
        name:req.body.name,
        contact:req.body.contact,
        address:req.body.address,
        dressCode:req.body.dressCode,
        totalAmount:req.body.totalAmount
        
    })
    //save order in the database
    order
    .save(order)
    .then(data=>{
        res.redirect('/add-order')
        
    })
    .catch(err=>{
        res.status(500).send({message:err.message||'some error occurred while creating a create operation'})
    })
}

//find all users/ find a single use
exports.find=(req,res)=>{
    if(req.query.id){
        const id = req.query.id
        Order.findById(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message:`order with ID:${id} not found`})
            }else{
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message:err.message||'error occurder while trying to find user information'})
        })
    }else{
        Order.find()
        .then(data=>{
            res.send(data)
        })
        .catch(err=>{
            res.status(500).send({message:err.message||'error occurder while trying to find user information'})
        })

    }
    
}

// //update a user by id
exports.update = (req,res)=>{
    if(!req.body){
        return res.status(400).send({message:'Content connot be empty'})
        
    }
    const id = req.params.id
    Order.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
    .then(data=>{
        if(!data){
            res.status(404).send({message:`order with ID:${id} not found`})
        }else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({message:err.message||'error updating order information'})
    })

}

//delete
exports.delete=(req,res)=>{
    const id = req.params.id
    Order.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message:err.message||`error deleting u information`})
        }else{
            res.send({message:'user was deleted successfully'})
        }
    })
    .catch(err=>{
        res.status(500).send({message:err.message||`could not delete User with id ${id}`})
    })
}
