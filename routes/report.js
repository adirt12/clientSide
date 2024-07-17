// first name: Adi, last name: Levi, id: 315901900
// first name: Jeki, last name: Skif, id: 318973898
const express = require('express');
const router = express.Router();
const Calories = require('../models/calories')

/* GET users listing. */
router.get('/', async function(req, res, next) {
    const { user_id, month, year } = req.query;
    //Check if the correct data was sent
    if (!user_id || !month || !year) {
        return res.status(400).json({ error: 'user_id, month, and year are required' });
    }

    try {
        // Search the user calorie by id month and year
        const calories = await Calories.find({ user_id, month: parseInt(month), year: parseInt(year) });

        const categories = ['breakfast', 'lunch', 'dinner', 'other'];

        // Init the res object with empty arrays for each category
        const report = {};
        categories.forEach(category => {
            report[category] = [];
        });

        // Enter the calorie consumption items to each category
        calories.forEach(item => {
            if (report[item.category]) {
                report[item.category].push({
                    day: item.day,
                    description: item.description,
                    amount: item.amount,
                });
            }
        });

        // Return the response
        res.json(report);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while generating the report' });
    }
});

module.exports = router;
