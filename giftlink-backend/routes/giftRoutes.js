// giftRoutes.js
const express = require('express');
const router = express.Router();
const connectToDatabase = require('../models/db');

router.get('/', async (req, res) => {
    try {
        const db = await connectToDatabase(); // Connect to database

        // Task 2: use the collection() method to retrieve the gift collection
        const collection = db.collection("gifts"); // Get the 'gifts' collection

        // Task 3: Fetch all gifts using the collection.find method. Chain with toArray method to convert to JSON array
        const gifts = await collection.find({}).toArray(); // Fetch all gifts

        // Task 4: return the gifts using the res.json method
        res.json(gifts); // Return the gifts in the response
    } catch (e) {
        console.error('Error fetching gifts:', e);
        res.status(500).send('Error fetching gifts');
    }
});

router.get('/:id', async (req, res) => {
    try {
        const db = await connectToDatabase(); // Connect to database

        // Task 2: use the collection() method to retrieve the gift collection
        const collection = db.collection("gifts"); // Access the 'gifts' collection

        const id = req.params.id; // Get the gift ID from the URL parameter

        // Task 3: Find a specific gift by ID using the collection.findOne method and store it in 'gift'
        const gift = await collection.findOne({ id: id }); // Find the gift by ID

        if (!gift) {
            return res.status(404).send('Gift not found'); // If no gift is found, return 404
        }

        res.json(gift); // Return the found gift as a JSON response
    } catch (e) {
        console.error('Error fetching gift:', e);
        res.status(500).send('Error fetching gift'); // If there's an error, return a 500 status
    }
});




// Add a new gift
router.post('/', async (req, res, next) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection("gifts");
        const gift = await collection.insertOne(req.body);

        res.status(201).json(gift.ops[0]);
    } catch (e) {
        next(e);
    }
});

module.exports = router;
