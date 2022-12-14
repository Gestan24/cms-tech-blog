const router = require('express').Router();
const { Comment, Post, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {

    console.log(req.session);

    Comment.findAll({

        attributes: ['id', 'comment_text', 'created_at', 'post_id'],


        include: [

            {

                model: User,

                atrributes: ['username'],

                attributes: { exclude: ['password'] }
            }
        ]
    })

        .then(dbCommentData => res.json(dbCommentData))

        .catch(err => {

            cpnsole.log(err);

            res.status(500).json(err);

        });

});

router.post('/', withAuth, (req, res) => {

    // check the session
    if (req.session) {

        Comment.create({

            comment_text: req.body.comment_text,

            post_id: req.body.post_id,

            
            user_id: req.session.user_id

        })

            .then(dbCommentData => res.json(dbCommentData))

            .catch(err => {

                console.log(err);

                res.status(400).json(err);

            });

    }
    
});


router.delete('/:id', withAuth, (req, res) => {

    Comment.destroy({

        where: {

            id: req.params.id

        }
    })

        .then(dbCommentData => {

            if (!dbCommentData) {

                res.status(404).json({ message: 'No comments found this id' });

                return;

            }

            res.json(dbCommentData);

        })

        .catch(err => {

            console.log(err);

            res.status(500).json(err);

        });

});

module.exports = router;