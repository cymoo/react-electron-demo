function fetchWithPost(url, data, headers = {}) {
  const options = {
    method: 'POST',
    mode: 'cors',
    headers: {
      ...headers,
    },
  }
  if (data instanceof FormData) {
    options.data = data
  } else {
    options.headers['Content-Type'] = 'application/json'
    options.data = typeof data === 'string' ? data : JSON.stringify(data)
  }
  return fetch(url, options)
    .then((res) => Promise.all([res.json(), Promise.resolve(res)]))
    .then(checkError)
}

function fetchWithGet(url, headers = {}) {
  const options = {
    method: 'GET',
    mode: 'cors',
    headers: {
      ...headers,
    },
  }
  return fetch(url, options)
    .then((res) => Promise.all([res.json(), Promise.resolve(res)]))
    .then(checkError)
}

function checkError([json, res]) {
  if (json.status === 'failed' || json.status === 'error') {
    const error = new Error(json.message)
    error.type = json.status
    error.res = res
    throw error
  }
  return json.data
}

export { fetchWithGet, fetchWithPost }
