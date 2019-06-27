const lib = require('../lib/firebase');

const firestore = lib.firestore,
    database = lib.database,
    auth = lib.auth;

class UserController {
    get(req, res) {
        console.log('get users method');
        database.ref('/users').once('value').then((snapshot) => {
            const res = snapshot.val();
            const list = []
            Object.values(res).map((user, index) => {
                list.push(user);
            });
            if (list.length > 0) {
                res.send(list);
            } else {
                res.sendStatus(404);
            }
        }).catch((error) => {
            res.send(error);
        })
    }

    post(req, res) {
        console.log('created user method');
        const user = req.body;
        if (!user) {
            res.sendStatus(400);
        } else {
            auth.createUser().then((res) => {
                if (res) {
                    database.ref('/users').set(user).then(() => {
                        res.status(201).send('user created');
                    }).catch((error) => {
                        res.send(error);
                    });
                }
            }).catch((error) => {
                res.send(error);
            })
        }
    }

    put(req, res) {
        const { id } = req.params;
        const user = req.body;
    }

    delete(req, res) { }
}

module.exports = new UserController();