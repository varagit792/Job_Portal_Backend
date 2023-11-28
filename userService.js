import { AppDataSource } from '../../config/typeorm'
import { User } from '../../entities';

export const saveUser = async (userParams) => {
  try {
    const userRepository = AppDataSource.getRepository(User);
    await userRepository.save(userParams);

  } catch (error) {
    console.log('error', error);
    throw error;
  }
}
