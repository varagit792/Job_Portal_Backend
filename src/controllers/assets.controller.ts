import { Request, RequestHandler, Response, NextFunction } from 'express';

export const getPngAsset: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const { iconName } = req.params;
        const pathToImage = `http://localhost:4000/assets/png/${iconName}`
        res.sendFile(pathToImage, { headers: { 'Content-Type': 'image/png' } });

    } catch (error) {
        console.log('error', error);
        return res.status(500).json({
            message: 'Internal server error'
        })
    };
}