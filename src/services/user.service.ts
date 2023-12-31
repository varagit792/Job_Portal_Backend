import { AppDataSource } from '../config/typeorm'
import { User } from '../entities/user.entity';

type UserParams = {
  email: string;
  mobileNumber: string;
  name: string;
  isEmailVerified: boolean;
  isMobileVerified: boolean;
}
export const saveUser = async (userParams: User) => {
  try {
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.save(userParams);
    delete user.hashedPassword
    return user;

  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

export const updateUser = async (id: number, userParams: any) => {
  try {
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.update(id, userParams);
    return user;

  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

export const fetchUser = async (email: string) => {
  try {
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOneBy({
      email
    });
    return user;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}


export const loginCheckUser = async (email: string) => {
  try {
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.createQueryBuilder("user")
      .where("user.email = :email", { email: email })
      .getOne();
    return user;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}
