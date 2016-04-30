import { query } from '../../common/query';

var News = {
  getAllInfo: function(callback) {
    query('News.getAllInfo', '', function(r) {
      callback(r);
    })
  }
};
export { News };
