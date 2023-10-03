import { Request, RequestHandler, Response, NextFunction } from 'express';

export const SignOut: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.clearCookie('token');
    // console.log("Logout Successfully");
    await req.user.save();
    // res.render("login")
    return res.status(201).json({
      message: 'Logout Successfully',
      logout: true
    })

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}