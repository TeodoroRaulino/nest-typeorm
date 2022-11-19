import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    let user = new User()
    user.email = createUserDto.email
    user.name = createUserDto.name
    user.password = createUserDto.password

    this.userRepository.save(user)
    .then((result) => {return 'Usuário cadastrado!'})
    .catch((error) => {
      if (/(email)[\s\S]+(already exists)/.test(error.detail)) {
        throw new BadRequestException(
          'Account with this email already exists.',
        )
      }
      return error
    })
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find()
  }

  async findByEmail(email: string){
    return this.userRepository.findOneBy( {email} )
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
