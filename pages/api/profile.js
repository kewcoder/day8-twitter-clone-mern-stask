import { getSession } from 'next-auth/client'
import connectDB from '../../middleware/database';
import User from '../../models/user';
import uploadController from "../../controllers/upload";

const handler = async (req, res) => {
  const session = await getSession({ req })
        if (req.method === 'GET') {
          let result = ''
            try {
            await User.findById(req.query.id, function (err, u) {
                result = u
            });
            return res.status(200).send(result);
          } catch (error) {
            return res.status(500).send(error);
          }
        }
      else if (req.method === 'POST') {
          // Update Profile
          if (session) {
              try {
                

                // await uploadController.uploadImages(req)
                // await uploadController.resizeImages(req)
                // const images = await uploadController.getResult(req)

                // return res.status(200).send(images);

                
                // const query = { _id: session.user._id };
                // await User.findOneAndUpdate(query, {$set: req.body}, function (err, u) {
                //   return res.status(200).send(u);
                // });

              } catch (error) {
                return res.status(500).send(error);
              }
            }

        } 
         else  {
          res.status(422).send('req_method_not_supported');
        }
  
};

export default connectDB(handler);
