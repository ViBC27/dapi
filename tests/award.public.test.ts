import request from 'supertest';
import app from '../app/app';

function getURL(pathname: string): string {
  const first = '/getAwards?query={awards';
  const second = `(pathname:"${pathname}"){year, name, entity}}`;
  return first + second;
}

describe('Endpoints', () => {
  it('GET [Ronaldo] Awards', async done => {
    const response = await request(app).get(getURL('ronaldo'));
    expect(response.body.data.awards).toHaveLength(2);
    expect(response.status).toEqual(200);
    done();
  });
  it('GET [Napoléon] Awards', async done => {
    const response = await request(app).get(getURL('napoleon'));
    expect(response.body.data.awards).toHaveLength(0);
    expect(response.status).toEqual(200);
    done();
  });
  it('GET [Kakaroto] Awards', async done => {
    const response = await request(app).get(getURL('kakaroto'));
    expect(response.body.data.awards).toHaveLength(0);
    expect(response.status).toEqual(200);
    done();
  });
  it('GET [Messi] Awards', async done => {
    const response = await request(app).get(getURL('messi'));
    expect(response.status).toEqual(500);
    expect(response.body.errors).toBeDefined();
    expect(response.body.errors[0].extensions.code).toEqual(404);
    done();
  });
  it('GET [Donald] Awards', async done => {
    const response = await request(app).get(getURL('donald'));
    expect(response.status).toEqual(200);
    expect(response.body.data).toBeDefined();
    expect(response.body.data.awards).toHaveLength(0);
    done();
  });
});
