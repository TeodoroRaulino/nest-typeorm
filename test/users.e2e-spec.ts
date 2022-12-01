import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('UserController E2E Test', () => {
  let app: INestApplication

  beforeAll(async() => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    it('Create user', () => {
      return request(app.getHttpServer()).post('/user')
      .send({
        name: 'Teste',
        email: 'teste@ufc.br',
        password: '1passWord@'
      }).expect(201)
    })
  })
})