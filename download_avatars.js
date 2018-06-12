var request = require('request');
var authToken = require('./secrets').GITHUB_TOKEN;
// ****** code here *******//


function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'request',
      'Authorization': 'token ' + authToken
    }
  };
  //console.log(options);
  request(options, function (err, res, body) {
    cb(err, body);
  });
}

getRepoContributors("jquery", "jquery", function (err, result) {
  var arr = JSON.parse(result);
    for (var i = 0; i < arr.length; i++) {
      console.log(arr[i].avatar_url)
    }
});
//console.log("Errors:", err);
//console.log("Result:", result);


// ******* code end  *********//
//console.log('Welcome to the GitHub Avatar Downloader!');