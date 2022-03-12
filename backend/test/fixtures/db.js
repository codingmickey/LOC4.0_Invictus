import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import User from '../../models/Users.js'
import Artwork from '../../models/Artworks.js'
import Order from '../../models/Orders.js'

const userOneId = new mongoose.Types.ObjectId()
const userOne = {
  _id: userOneId,
  name: 'user1',
  email: 'user1@gmail.com',
  address: 'addressss',
  password: 'password1234',
  isAdmin: true
}

const token = jwt.sign({ _id: userOneId }, process.env.SECRET_KEY)

const artworkOne = {
  _id: new mongoose.Types.ObjectId(),
  artImage: 'image1',
  price: '700',
  description: 'this is test artwork 1',
  size: [50, 50]
}

const orderOneId = new mongoose.Types.ObjectId()
const orderOne = {
  _id: orderOneId,
  orderPlacer: userOneId,
  artworks: [{artworkRequired: artworkOne._id}],
  totalPrice: 1400,
  payMethod: 'cash'
}

const setupDb = async () => {
  await User.deleteMany()
  await Artwork.deleteMany()
  await Order.deleteMany()
  await new User(userOne).save()
  await new Artwork(artworkOne).save()
  await new Order(orderOne).save()
}

export {
  userOneId,
  userOne,
  token,
  artworkOne,
  orderOneId,
  orderOne,
  setupDb
}