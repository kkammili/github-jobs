var express = require('express');
var router = express.Router();
var pool = require('../conn')

router.post('/add', async (req, res, next) => {
    const values = Object.values(req.body)
    // current_status: null,
    await pool.query(`INSERT INTO recruiters(first_name, last_name, email, phone, prime_vendor, end_client, interview_pipeline, current_status, date_time)
                VALUES($1, $2, $3, $4, $5, $6, $7, 'pending', NOW() )`, values, (q_err) => {
        if (q_err) return next(q_err);
        res.status(200).json({ status: 'ok' })
    })
});

router.get('/', (req, res) => {
    pool.query('SELECT * FROM recruiters;', (q_err, q_succ) => {
        if (q_err) return next(q_err)
        res.json(q_succ.rows)
    })
})

router.put('/statUpdate', (req, res) => {
    const values = [req.body.status, req.body.id]
    pool.query(`UPDATE recruiters SET current_status = $1 WHERE id = $2;`, values, (q_err, q_succ) => {
        if (q_err) return next(q_err)
        res.json(q_succ.rows)
    })
})

router.delete('/recruiter/:id', (req, res) => {
    const values = [req.params.id]
    pool.query(`DELETE FROM recruiters
    WHERE id = $1;`, values, (q_err, q_succ) => {
        if (q_err) return next(q_err)
        res.status(200).json({ status: 'ok' })
    })
})

module.exports = router;