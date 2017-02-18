/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    create: function(req, res) {
        var Passwords = require('machinepack-passwords');
        Passwords.encryptPassword({
            password: req.body.password,
            difficulty: 10
        }).exec({
            error: function(err) {
                return res.negotiate(err);
            },
            success: function(encryptedPassword) {
                User.create({
                    name: req.body.name,
                    username: req.body.username,
                    password: encryptedPassword
                }, function(err, newUser) {
                    if (err) return err;
                    console.log('User added');
                })
            }
        })
    },
    getAll: function(req, res) {
        User.find({}, {}, function(err, users) {
            if (err) {
                return res.negotiate(err);
            }
            return res.json(users);
        })
    },
    getUserById: function(req, res) {
        var id = req.params.id;
        User.findById(id, function(err, user) {
            if (err) {
                return res.negotiate(err);
            }
            return res.json(user);
            console.log('Data: ' + user[0]);
        })
    },
    update: function(req, res) {
        User.update({
            id: req.param('id')
        }, {
            name: req.param('name'),
            username: req.param('username'),
        }, function(err, user) {
            console.log(err);
            if (err) res.serverError(err);
            res.send(user);
        });
    },
    delete: function(req, res) {
        User.destroy({ id: req.param('id') }).exec(function(err, destroyed) {
            if (err) return err;
            console.log('Destroy success');

        })
    }
};