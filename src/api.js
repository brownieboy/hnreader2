function api(url) {
    return fetch(url).then(function(response) {
        return response.json();
    }).then(function(json) {
        return json;
    });
}

export default api;
