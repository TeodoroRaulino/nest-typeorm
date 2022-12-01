import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    // createUserDto.password = this.cryptographyService.encryptAESfunction(
    //   createUserDto.password,
    // );
    const user = { ...createUserDto };

    this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findByEmail(email: string) {
    return this.userRepository.findOneBy({ email });
  }

  async findList(email: string) {
    const userMail = await this.findByEmail(email);
    if (userMail) {
      return this.userRepository
        .createQueryBuilder('users')
        .leftJoinAndSelect('users.todoLists', 'todoLists')
        .where('users.id = :id', { id: userMail.id })
        .getMany();
    }
  }

  async findOne(id: number) {
    return this.userRepository.findOneBy({ id });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.userRepository.update(id, updateUserDto);
  }

  async remove(id: number) {
    return this.userRepository.delete({ id });
  }
}
