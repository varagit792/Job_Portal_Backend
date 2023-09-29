
import { Request, RequestHandler, Response, NextFunction } from 'express';
import { keySkills, keySkillsGet, keySkillsList } from '../services/keySkills.service';

export const getKeySkills: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await keySkillsList();
    return res.status(201).json({
      message: 'Key Skills list getting successfully',
      data: result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}

export const keySkillsController: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await keySkills(req.body);
    return res.status(201).json({
      message: 'Key skill updated successfully',
      data: result
    });
  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}

export const keySkillsGetController: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.user
    const result = await keySkillsGet(id);
    return res.status(201).json({
      message: 'Key skill fetch successfully',
      data: result
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}