var request = require('request');
var authToken = require('./secrets')
// ****** code here *******//


function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
  url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
  headers: {
    'User-Agent': 'request',
    'Authorization': authToken,
  }
};
  request(options, function(err, res, body) {
    cb(err, body);
  })
}
getRepoContributors("jquery", "jquery", function(err, result) {
  var avatarArr = JSON.parse(result);
  for (i = 0; i < avatarArr.length; i ++); {
    console.log(avatarArr[i].avatar_url);
  }
  //console.log("Errors:", err);
  //console.log("Result:", result);
});

// ******* code end  *********//
console.log('Welcome to the GitHub Avatar Downloader!');

