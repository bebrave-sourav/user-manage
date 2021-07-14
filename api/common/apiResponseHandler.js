module.exports={
    apiResponse: (err,res,result)=>{
        if (err) {
            return res.status(500).json({
              success: 0,
              msg: "error",
            });
          }
          return res.status(200).json({
            success: 1,
            msg: "success",
            result: result,
          });
    }
}