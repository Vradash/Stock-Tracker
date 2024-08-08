import express from 'express';
const router = express.Router();
import db from '../controllers/connection.js';

//GET ALL ITEMS
router.get('/all-items', (req, res) => {
    db.query('SELECT * FROM itemlist', (err, data) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        } else res.json(data);
    });
});

//GET ITEM BY ID
router.get('/:id', (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM itemlist WHERE id = ?', id, (err, data) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        } else res.json(data);
    });
});

//GET ITEM BY QUANTITY
router.get('/quantity/:low/:high', (req, res) => {
    const values = [req.params.low, req.params.high];
    db.query('SELECT * FROM itemlist WHERE quantity >= ? and quantity<= ? ORDER BY quantity DESC; ', values, (err, data) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        } else res.json(data);
    });
});


//GET ITEM BY PRICE
router.get('/price/:low/:high', (req, res) => {
    const low = req.params.low;
    const high = req.params.high;
    const values = [low, high];
    db.query('SELECT * FROM itemlist WHERE price >= ? and price<= ? ORDER BY price ASC; ', values, (err, data) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        } else res.json(data);
    });
});

export default router;