import request from 'supertest';
import app from '../app/app';

function getURL(pathname: string): string {
  const first = '/getEducations?query={educations';
  const second = `(pathname:"${pathname}"){level, status, course}}`;
  return first + second;
}

describe('Endpoints', () => {
  it('GET [Ronaldo] Educations', async done => {
    const response = await request(app).get(getURL('ronaldo'));
    expect(response.body.data.educations).toHaveLength(2);
    expect(response.status).toEqual(200);
    done();
  });
  it('GET [Napoléon] Educations', async done => {
    const response = await request(app).get(getURL('napoleon'));
    expect(response.body.data.educations).toHaveLength(1);
    expect(response.status).toEqual(200);
    done();
  });
  it('GET [Kakaroto] Educations', async done => {
    const response = await request(app).get(getURL('kakaroto'));
    expect(response.body.data.educations).toHaveLength(0);
    expect(response.status).toEqual(200);
    done();
  });
  it('GET [Messi] Educations', async done => {
    const response = await request(app).get(getURL('messi'));
    expect(response.status).toEqual(500);
    expect(response.body.errors).toBeDefined();
    expect(response.body.errors[0].extensions.code).toEqual(404);
    done();
  });
  it('GET [Donald] Educations', async done => {
    const response = await request(app).get(getURL('donald'));
    expect(response.status).toEqual(200);
    expect(response.body.data).toBeDefined();
    expect(response.body.data.educations).toHaveLength(0);
    done();
  });
});
