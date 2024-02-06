import { isValidObjectId } from 'mongoose';
import HttpError from './HttpError.js';
const isValidId = (req, res, next) => {
  const { id } = req.body;
  if (!isValidObjectId(id)) {
    next(HttpError(400, `${id} is not valid id`));
  }
  next();
};

export default isValidId;
