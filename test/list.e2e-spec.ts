import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('UserController E2E Test', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('Creating new lists', () => {
    it('Create list', () => {
      return request(app.getHttpServer())
        .post('/todo-list/create')
        .send({
          name: 'Teste',
          users: 2,
        })
        .expect(201);
    });
  });
});
