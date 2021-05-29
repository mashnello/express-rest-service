"use strict";
const { v4: uuid } = require('uuid');
class Task {
    constructor({ id = uuid(), title, order, userId, boardId, columnId, description, } = {}) {
        this.id = id;
        this.title = title;
        this.order = order;
        this.userId = userId;
        this.boardId = boardId;
        this.columnId = columnId;
        this.description = description;
    }
    static toResponse(task) {
        const { id, title, order, userId, boardId, columnId, description } = task;
        return { id, title, order, userId, boardId, columnId, description };
    }
}
module.exports = Task;
