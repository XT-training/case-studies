import  express from 'express';

const router = express.Router();

router.post('/test', (req, res, next) => {
  res.json({status:"success", message: "Movie found!!!", data:{
    userId: req.body.userId
  }});
});

export default router;
