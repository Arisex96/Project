class ApiError extends Error {
  constructor(statusCode, message = "Something went quite wrong", stack = []) {
    super();
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
export {ApiError}