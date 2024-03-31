// CONF. MODULES \\
import multer from 'multer';
import { v4 } from 'uuid';
import { extname, resolve } from 'path';

// CONF. MULTER \\
export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'uploads'),
    filename: (req, file, callback) =>
      callback(null, v4() + extname(file.originalname)),
  }),
};
