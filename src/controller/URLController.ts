import { Request, Response } from 'express';
import shortId from 'shortid';
import { config } from '../config/Constants';

export class URLController{
    public async shorten(req: Request, res: Response): Promise<void> {
        const { originURL } = req.body;
        const hash = shortId.generate();
        const shortURL = `${config.API_URL}/${hash}`;

        res.json({originURL, hash, shortURL});
    }

    public async redirect(req: Request, res: Response): Promise<void> {
        const { hash } = req.params;

        const url = {
            originURL: "https://cloud.mongodb.com/v2/62b3c4e96620ac7c3dc96368#clusters/connect?clusterId=url-shortener-dio",
            hash: "SU2hCbbdN",
            shortURL: "http://localhost:5000/SU2hCbbdN"
        }

        res.redirect(url.originURL);
    }
}