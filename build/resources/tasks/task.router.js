"use strict";
const router = require('express').Router({ mergeParams: true });
const Task = require('./task.model');
const tasksService = require('./task.service');
router.get('/', async (req, res) => {
    const { boardId } = req.params;
    const tasks = await tasksService.getAll(boardId);
    res.json(tasks.map(Task.toResponse));
});
router.post('/', async (req, res) => {
    try {
        const { boardId } = req.params;
        const { title, order, description, userId, columnId } = req.body;
        const task = await tasksService.create({
            title,
            order,
            description,
            userId,
            boardId,
            columnId,
        });
        res.status(201).json(Task.toResponse(task));
    }
    catch (error) {
        res.status(400).end();
    }
});
router.get('/:id', async (req, res) => {
    try {
        const { boardId, id } = req.params;
        const task = await tasksService.getById(boardId, id);
        res.json(Task.toResponse(task));
    }
    catch (error) {
        res.status(404).end();
    }
});
router.put('/:id', async (req, res) => {
    try {
        const { boardId, id } = req.params;
        const { title, order, description, userId, columnId } = req.body;
        const task = await tasksService.update({
            id,
            title,
            order,
            description,
            userId,
            boardId,
            columnId,
        });
        res.json(Task.toResponse(task));
    }
    catch (error) {
        res.status(400).end();
    }
});
router.delete('/:id', async (req, res) => {
    try {
        const { boardId, id } = req.params;
        const task = await tasksService.deleteById(boardId, id);
        res.status(204).json(Task.toResponse(task));
    }
    catch (error) {
        res.status(404).end();
    }
});
module.exports = router;
