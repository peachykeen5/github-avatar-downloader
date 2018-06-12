var request = require('request');
var authToken = require('./secrets').GITHUB_TOKEN;
var fs = require('fs');

function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'request',
      'Authorization': 'token ' + authToken
    }
  };
  request(options, cb);
}

function downloadImageByUrl(url, filePath) {
  request.get(url)
    .on('error', function (err) {
      throw err;
    })
    .pipe(fs.createWriteStream(filePath));
  return;
}

function getAllAvatars(err, result, body) {
  var arr = JSON.parse(body);
  for (var i = 0; i < arr.length; i++) {
    downloadImageByUrl(arr[i].avatar_url, './avatars/' + arr[i].login + ".jpg");
  }
}


// downloadImageByURL("https://avatars2.githubusercontent.com/u/2741?v=3&s=466", "avatars/kvirani.jpg")

getRepoContributors("jquery", "jquery", getAllAvatars);

//function downloadImageByURL(url, filePath) {
//  request.get(url)
//}
//.pipe(fs.createWriteStream('avatars/lkeen.jpg'));
//downloadImageByURL("https://avatars2.githubusercontent.com/u/2741?v=3&s=466", "avatars/kvirani.jpg")