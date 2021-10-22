import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'

// @desc Authenticate user (check if email and password are valid) & get token
// @route POST request /api/users/login
// @access Public 
const authUser = asyncHandler(async (req, res) => {
   const {email, password} = req.body  // destructure the data from request to the body
   
//    res.send({email,password})  this was just used for testing in postman

   const user = await User.findOne({email}) // it's actually email: email, but they are the same, so just email

   if(user && (await user.matchPassword(password))) {
    res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
    })
   } else {
       res.status(401)
       throw new Error('Invalid email or password') 
   }
})

// @desc Register a new user
// @route POST /api/users
// @access Public 
const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password} = req.body  // destructure the data from request to the body
    
 //    res.send({email,password})  this was just used for testing in postman
 
    const userExists = await User.findOne({email}) // it's actually email: email, but they are the same, so just email
 
    if(userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    const user = await User.create({
        name, 
        email, 
        password
    })

    if(user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        })
    } else{
        res.status(400)
        throw new Error('Invalid user data')
    }
 })

// @desc Get user profile
// @route GET request /api/users/profile
// @access private 
const getUserProfile = asyncHandler(async (req, res) => {
    //  res.send('Success')
    const user = await User.findById(req.user._id)

    if(user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        })
    } else {
        res.status(404)
        throw new Error('User not found')
    }
})

export {
    authUser, 
    registerUser,
    getUserProfile
}