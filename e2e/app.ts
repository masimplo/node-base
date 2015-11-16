import * as request from 'supertest';
import app from '../src/index';
import * as tape from 'tape';

tape('Get user request', (assert:tape.Test)=>{
  request(app)
  .get('/user')
  .expect('Content-Type', /json/)
  .expect('Content-Length', '15')
  .expect(200)
  .end(function(err:any, res:any){
    var expectedResponse = {name: 'tobi'};
      assert.error(err, 'No error');
      assert.same(res.body, expectedResponse, 'Response body as expected');
      assert.end();
  });
});
