const router = require('express').Router();

const { requireAuth } = require("../middlewares/verify.middleware");
const { room, createRoom } = require("../controllers/rooms.controller");

router.get("/room", requireAuth, room);
router.get("/room/create-room", requireAuth, createRoom);

module.exports = router;