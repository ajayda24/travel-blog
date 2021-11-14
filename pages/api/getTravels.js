// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from '../../middleware/mongoose'
import model from '../../model'

export default async function handler(req, res) {
  await dbConnect()
  const {User} = model
  if(req.method == 'GET'){
    // const users = await User.find({})
    const user = await new User({
      userId:'1',
      userName:'Aby'
    })
    await user.save()
    console.log(user);
    res.json('hello')

    const {userId} = req.body
    const userPlaces = await User.findOne({userId:userId}).populate('places')
  }
}

