"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var node_gtts_1 = __importDefault(require("node-gtts"));
var app = (0, express_1.default)();
var port = process.env.PORT || 3000;
app.get("/", function (req, res) {
    var locale = req.query.locale || 'en';
    var text = req.query.text || '';
    if (!text) {
        return res.status(400).send('wrong query - try URL/?text={text}&locale={locale}');
    }
    var gttsAdapter = (0, node_gtts_1.default)(locale);
    res.set({ 'Content-Type': 'audio/mpeg' });
    gttsAdapter.stream(text).pipe(res);
});
app.listen(port, function () {
    console.log("Example app listening on port ".concat(port));
});
