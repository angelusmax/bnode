"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexContorller {
    //definir metodo
    index(req, res) {
        res.json({ text: "API IS /api/games" });
    }
}
exports.indexController = new IndexContorller();
