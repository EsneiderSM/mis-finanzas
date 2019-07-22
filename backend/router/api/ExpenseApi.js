const express = require('express')
const router = express.Router();
const expenseMocks = require('../../utils/mocks/ExpenseMocks')

router.get('/', (req, res) => {

    console.log('request ', req.query)

    res.status(200).json({
        data: expenseMocks,
        message: "List expenses"
    })
})

router.get('/:expenseId', function (req, res) {

    const { expenseId } = req.params;

    console.log('request ', req.params)

    res.status(200).json({
        data: expenseMocks[0],
        message: 'Retrieved expense'
    });
});


router.put('/:expenseId', function (req, res) {

    const { expenseId } = req.params;
    //informacion que voy a actualizar
    const { body: expense } = req;

    res.status(200).json({
        data: expenseMocks,
        message: 'Updated expense'
    });
});

router.post('/', (req, res) => {

    console.log('request', req.body)
    const { body: expense } = req;

    expenseMocks.push(expense);

    res.status(200).json({
        data: expenseMocks[expenseMocks.length - 1],
        message: 'Added expense'
    })
})


router.delete('/:expenseId', function (req, res) {

    const { expenseId } = req.params;

    console.log('req ', req.params);

    res.status(200).json({
        data: expenseMocks[expenseId],
        message: 'Deleted expense'
    });
});

module.exports = router