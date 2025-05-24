const axios = require('axios')

exports.homeRoutes = (req,res)=>{
    axios.get('http://localhost:3000/api/orders')
        .then(function(response){
            res.render('index',{orders:response.data})
        })
        .catch(err=>{
            res.send(err)
        })
    
}

exports.add_order = (req,res)=>{
    res.render('add_order')
}

// exports.update_order = (req,res)=>{
//     axios.get('http://localhost:3000/api/orders',{params:{id:req.query.id}})
//         .then(orderData=>res.render('update_order',{order : orderData.data}))
//         .catch(err=>{
//             res.send(err)
//         })
// }

exports.update_order = (req, res) =>{
    axios.get('http://localhost:3000/api/orders', { params : { id : req.query.id }})
        .then(function(orderData){
            res.render("update_order", {order : orderData.data})
        })
        .catch(err =>{
            res.send(err);
        })
}