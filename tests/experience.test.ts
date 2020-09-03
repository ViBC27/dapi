import request from 'supertest';
import app from '../app/app';

function getURL(pathname: string): string {
  const first = '/getExperiences?query={getExperiencesByPathname';
  const second = `(pathname:"${pathname}"){name, github, createdAt}}`;
  return first + second;
}

describe('Endpoints', () => {
  it('GET [Ronaldo] Experiences', async done => {
    const response = await request(app).get(getURL('ronaldo'));
    expect(response.status).toEqual(200);
    done();
  });
  it('GET [Napoléon] Experiences', async done => {
    const response = await request(app).get(getURL('napoleon'));
    expect(response.status).toEqual(200);
    done();
  });
  it('GET [Kakaroto] Experiences', async done => {
    const response = await request(app).get(getURL('kakaroto'));
    expect(response.status).toEqual(200);
    done();
  });
  it('GET [Messi] Experiences', async done => {
    const response = await request(app).get(getURL('messi'));
    expect(response.status).toEqual(500);
    expect(response.body.errors).toBeDefined();
    expect(response.body.errors[0].extensions.code).toEqual(404);
    done();
  });
  it('GET [Donald] Experiences', async done => {
    const response = await request(app).get(getURL('donald'));
    expect(response.status).toEqual(200);
    expect(response.body.data).toBeDefined();
    expect(response.body.data.getExperiencesByPathname).toHaveLength(0);
    done();
  });
});
