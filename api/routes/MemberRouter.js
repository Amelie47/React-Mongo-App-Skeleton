// api/routes/MemberRouter.js
const express = require('express');

const MemberController = require('../controllers/MemberController');

const router = express.Router();

router.post('/', MemberController.createMember);
router.put('/:id', MemberController.updateMember);
router.delete('/:id', MemberController.deleteMember);
router.get('/:id', MemberController.getMemberById);
router.get('/', MemberController.getMembers);

module.exports = router;
