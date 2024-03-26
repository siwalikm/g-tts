import express, { Request, Response } from 'express';
import gtts from 'node-gtts';
const app = express();
const port = process.env.PORT || 3000;
app.get("/", (req: Request, res: Response) => {
    const locale = req.query.locale as string || 'en';
    const text = req.query.text as string || '';
    if (!text) {
        return res.status(400).send('wrong query - try URL/?text={text}&locale={locale}');
    }
    const gttsAdapter = gtts(locale);
    res.set({ 'Content-Type': 'audio/mpeg' });
    gttsAdapter.stream(text).pipe(res);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});