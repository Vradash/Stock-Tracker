import express from 'express';
const router = express.Router();
import db from '../controllers/connection.js';

router.get('/:num',(req,res)=>{
    const val=req.params.num;
    db.query('SELECt * FROM recommendations LIMIT 4',val,(err,data)=>{
        if(err){
            res.status(500).json({error:err.message});
            return;
        }else res.json(data);
    });
})

export default router;