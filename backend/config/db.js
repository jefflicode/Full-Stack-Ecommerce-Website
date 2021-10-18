import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            // useUnifiedTopology: true,
            // useNewUrlParser: true,
            // useCreateIndex: true
            
            // according to the current Mongoose docs, section "No More Deprecation Warning Options"
            // useNewUrlParser, useUnifiedTopology, useFindAndModify, and useCreateIndex are no longer supported options. 
            // Mongoose 6 always behaves as if useNewUrlParser, useUnifiedTopology, and useCreateIndex are true
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB