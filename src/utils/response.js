const errorResponse = (res, code, message) => {
    res.status(code).json({
      status: false,
      message,
    });
  };
  
  const successResponse = (res, code, message, data) =>
    res.status(code).json({
      status: true,
      message,
      data,
    });
  module.exports = {
    errorResponse,
    successResponse,
  };
  