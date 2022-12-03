import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AuthController E2E Test', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });
  describe('Creating new users post', () => {
    it('Login', () => {
      return request(app.getHttpServer())
        .post('/login')
        .send({
          email: 'testet@ufc.br',
          password: '1passWord@',
        })
        .expect(200);
    });

    it('Login failed', () => {
      return request(app.getHttpServer())
        .post('/login')
        .send({
          email: 'testet@ufc.br',
          password: '1passWor',
        })
        .expect(401);
    });
  });
});
