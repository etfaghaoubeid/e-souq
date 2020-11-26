exports.errorHandler = (err , req, res, next)=>{
    
    const statusCode  = res.status  ===200 ? 500: res.statusCode;
    res.status(statusCode);
    res.json({
        message:err.message,
        stack: process.env.NODE_ENV==='development' ? err.stack:null
    });
    next()
}
exports.routeHandler = (req, res , next)=>{
    let error = new Error(`Not found - ${req.originalUrl}`);
    res.status(404)
    next(error)
}
