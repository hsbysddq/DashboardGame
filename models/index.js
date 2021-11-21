const User = require('./users.model')
const UserRole = require('./user-roles.model')

User.hasOne(UserRole, {
    as: 'role',
    foreignKey: 'userId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
})

UserRole.belongsTo(User, {
    as: 'user',
    foreignKey: 'userId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
})

module.exports = {
    User,
    UserRole
}