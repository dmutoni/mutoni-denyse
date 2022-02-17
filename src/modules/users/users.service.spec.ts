import { TokenDto } from './dto/token.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

describe('UserService', () => {
  let service: UsersService;
  const userRepository = {
    create: jest.fn().mockImplementation((payload) => payload),
    save: jest.fn().mockImplementation(() => {
      return {
        id: 'fake-user-id',
        ...createUserDto
      };
    })
  };

  const requestElectricityDto = new TokenDto();
  requestElectricityDto.meter_number = 123467;
  requestElectricityDto.amount_of_money = 100;

  const createUserDto = new CreateUserDto();
  createUserDto.firstName = 'Mutoni';
  createUserDto.lastName = 'Denyse';
  createUserDto.phone_number = '+254712345678';
  createUserDto.location = 'nyagatare';
  createUserDto.gender = 'female';
  createUserDto.signature = 'https://example.com';
  createUserDto.national_id = 1234567890123456;
  createUserDto.password = 'password';
  createUserDto.age = 12;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: userRepository
        }
      ]
    }).compile();
    service = module.get<UsersService>(UsersService);
  });
  it('should be create a user dto with a random 6 meter number', async () => {
    expect(await service.create(createUserDto)).toEqual({
      id: 'fake-user-id',
      ...createUserDto
    });
  });
  it('should generate a token with 8 numbers', async () => {
    expect(
      await service.generateElectricity(requestElectricityDto)
    ).toHaveLength(8);
  });
});
