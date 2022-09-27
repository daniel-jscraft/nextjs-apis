export default (req, res) => {
    const {id} = req.query
    res.status(200).json({ 
        response: `You called the tennis API with the id param of value ${id}`  
    })
  }