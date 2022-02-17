import { User } from './entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { getRepository, Repository } from 'typeorm';
import {
  paginate,
  Pagination,
  IPaginationOptions
} from 'nestjs-typeorm-paginate';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async paginate(options: IPaginationOptions): Promise<Pagination<User>> {
    return paginate<User>(this.userRepository, options);
  }

  public async create(createUserDto: CreateUserDto): Promise<User> {
    const {
      firstName,
      lastName,
      email,
      password,
      phone_number,
      location,
      gender,
      national_id,
      age
    } = createUserDto;

    // const userExists: User | false = await this.userRepository.findOne({
    //   where: { email }
    // });
    // if (userExists) {
    //   throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    // }

    const meter_number = Math.floor(100000000 + Math.random() * 6000000);

    const user: User = await this.userRepository.create({
      firstName,
      lastName,
      email,
      password,
      phone_number,
      location,
      gender,
      national_id,
      age,
      meter_number
    });
    return await this.userRepository.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await getRepository(User)
      .createQueryBuilder()
      .addSelect('User.password')
      .where('User.email = :email', { email })
      .getOne();
    return user;
  }

  findAll() {
    return 'This action returns all users';
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
