import { User } from './entities/user.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResponseDto } from 'src/shared/dto/response.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { getRepository, Repository } from 'typeorm';
import { toUserDto } from 'src/shared/mappers/mapper';
import { ResponseService } from 'src/utils/response/response.service';
import { EResponseType } from 'src/shared/enums/EResponseType';
import {
  paginate,
  Pagination,
  IPaginationOptions
} from 'nestjs-typeorm-paginate';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly responseService: ResponseService
  ) {}

  async paginate(options: IPaginationOptions): Promise<Pagination<User>> {
    return paginate<User>(this.userRepository, options);
  }

  public async create(createUserDto: CreateUserDto): Promise<ResponseDto> {
    const {
      firstName,
      lastName,
      email,
      password,
      phone_number,
      location,
      gender,
      national_id,
      marital_status,
      age,
      user_type
    } = createUserDto;

    const userExists: User | false = await this.userRepository.findOne({
      where: { email }
    });
    if (userExists) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }
    const user: User = await this.userRepository.create({
      firstName,
      lastName,
      email,
      password,
      phone_number,
      location,
      gender,
      national_id,
      marital_status,
      age,
      user_type
    });
    const result = toUserDto(user);
    await this.userRepository.save(user);

    const response: ResponseDto = this.responseService.makeResponse(
      'User created successfully',
      201,
      result,
      EResponseType.SUCCESS
    );
    return response;
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
