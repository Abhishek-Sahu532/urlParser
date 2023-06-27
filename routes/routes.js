const express = require('express');
const router = express.Router();
const urls = require('../models/urlModels')

// /api/v1/url/add
router.post('/url/add', async (req,res)=>{
  try{
    const {URL} = req.body;
    if(!URL){//if url is missing
      return res.status(400).json({
        err: 'Please provide the details'
      })
    }
let newURl = await urls.create({
  URL
})
    return res.status(201).send(newURl)
    
  }catch(e){
    return res.status(500).send(e)
  }
})

// /api/v1/url
router.get('/url', async (req,res)=>{
  try{
    let data = await urls.findAll();
    return res.status(200).send(data)
  }catch(e){
    return res.status(500).send(e)
  }
})

// /api/v1/url/id(variable)
router.get('/url/:id', async (req,res)=>{
  try{
    let id = req.params.id;
let url = await urls.findOne({where:{id: id}})
    if(!url){
      return res.status(404).send({
        err: 'Provide the correct ID'
      })
    }

    return res.status(200).send(url)
  }catch(e){
    return res.status(500).send(e)
  }
})


router.put('/url/:id', async (req, res)=>{
  try{
let id = req.params.id;
    const {URL} = req.body;

    let url = await urls.findOne({where:{id: id}});
    if(!url){
      return res.status(404).send({
        err: 'Provide the correct ID'
      })
    }
    let updatedUrl = await url.update({
      URL
    })
    return res.status(200).send(updatedUrl);
    
  }catch(e){
return res.status(500).send(e)

  }
})


router.delete('/url/:id', async (req, res)=>{
  try{
    let id = req.params.id;
    let url = await urls.findOne({where: {id: id}});
    console.log('>>>>>>>', url)
    if(!url){
      return res.status(404).send({
        err: "Provide the correct ID"
      })
    }
    await  url.destroy();
    return res.status(200).send()
  }catch(e){
    console.log(e)
    return res.status(500).send(e)
  }
})


module.exports = router