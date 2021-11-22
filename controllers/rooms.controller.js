const Room = require("../models/Room.model.js");

exports.room = (req, res, next) => { 
};

exports.createRoom = async (req, res, next) => {
    try {
        const { user } = req;
        const { name } = req.body;

        if(!user) {
            throw {
                message: 'invalid token'
            }
        }

        let room = await Room.findOne({
            where: {
                name,
            },
        });

        const flag = `ROOM-${Date.now()}`

        if (!room) {
            room = await Room.create({
                name,
                flag,
            });
        }
    
    return res.status(200).json({
        flag: room.flage,
    });
} catch (error) {
    next(error);
}
};

