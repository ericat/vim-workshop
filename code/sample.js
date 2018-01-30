const fs = require('fs'); const express = require('express'); const bodyParser
  = require('body-parser'); const fetch = require('node-fetch'); const FormData
  = require('form-data'); const statuses = require('./helpers').statuses; const
checkStatus = require('./helpers').checkStatus; const handleScore =
  require('./helpers').handleScore; const validateHeaders =
  require('./middleware').validateHeaders; const handleErrors =
  require('./middleware').handleErrors;

const app = express(); module.exports = app;

app.set('port', process.env.PORT || 3000); app.set('token',
  process.env.GITHUB_TOKEN); app.set('baseUrl', 'https://api.github.com');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); app.use(validateHeaders);
app.use(handleErrors);

app.get('/', (req, res) => { res.end(); });

const setStatus = (type, url, data) => {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(statuses[type]),
    headers: {
      'Accept': 'application/vnd.github.v3+json',
      'Authorization': 'bearer ' + app.get('token')
    }
  })
    .then(checkStatus)
    .then(res => res.json())
    .then(json =>  {
      if (json.state !== type) return setStatusErr(url, 'Wrong status set');

      return json.state === 'pending' ?  isSecure(url) : data;
    })
    .catch(err => setStatusErr(url, err));
};

const setStatusErr = (url, error) => {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(statuses.error),
    headers: { 'Accept': 'application/vnd.github.v3+json',
      'Authorization': 'bearer ' + app.get('token')
    }
  })
    .then(checkStatus)
    .then(res => res.json())
    .then(() => console.error('setErrorStatus', error))
    .catch(err => console.error('setStatusErr', err));
};

const isSecure = url => {
  const file = fs.createReadStream('./deployment.yml');
  const form = new FormData(); form.append('my_file', file);

  fetch('https://kubesec.io/', {
    method: 'POST',
    body: form,
    headers: {
      'Accept': 'application/vnd.github.v3+json',
      'Authorization': 'bearer ' + app.get('token')
    }
  })
    .then(checkStatus)
    .then(res => res.json())
    .then(json => handleScore(url, json, setStatus))
    .catch(err => console.error('isSecure', err));
};

const handleEvent = body => {
  const {
    pull_request: pullRequest,
    repository
  } = body;

  const statusesUrl = `${app.get('baseUrl')}/repos/${repository.full_name}/statuses/${pullRequest.head.sha}`;
  return setStatus('pending', statusesUrl);
};

app.post('/event', (req, res) => {
  const { action } = req.body;

  if (action == 'opened' || action == 'reopened') {
    handleEvent(req.body);
    res.end();
  };
});


