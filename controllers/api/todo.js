const Todo = require('../../models/Todo')

const create = async (req,res,next) => {
    try {
        const createdTodo = await User.create(req.body)
        res.status(200).json({
            todo: {
                name: createdTodo.title,
                email: createdTodo.isComplete
            }
        })
    } catch(error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = {
    create
}