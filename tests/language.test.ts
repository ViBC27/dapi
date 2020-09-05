import request from 'supertest';
import app from '../app/app';

function getURL(pathname: string): string {
  const first = '/getLanguages?query={languages';
  const second = `(pathname:"${pathname}"){level, name}}`;
  return first + second;
}

describe('Endpoints', () => {
  it('GET [Ronaldo] Languages', async done => {
    const response = await request(app).get(getURL('ronaldo'));
    expect(response.body.data.languages).toHaveLength(3);
    expect(response.status).toEqual(200);
    done();
  });
  it('GET [Napoléon] Languages', async done => {
    const response = await request(app).get(getURL('napoleon'));
    expect(response.body.data.languages).toHaveLength(0);
    expect(response.status).toEqual(200);
    done();
  });
  it('GET [Kakaroto] Languages', async done => {
    const response = await request(app).get(getURL('kakaroto'));
    expect(response.body.data.languages).toHaveLength(0);
    expect(response.status).toEqual(200);
    done();
  });
  it('GET [Messi] Languages', async done => {
    const response = await request(app).get(getURL('messi'));
    expect(response.body.errors[0].extensions.code).toEqual(404);
    expect(response.status).toEqual(500);
    done();
  });
  it('GET [Donald] Languages', async done => {
    const response = await request(app).get(getURL('donald'));
    expect(response.body.data.languages).toHaveLength(0);
    expect(response.status).toEqual(200);
    done();
  });
});
