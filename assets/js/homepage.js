// Get user repos function // call
var getUserRepos = function () {
  fetch("https://api.github.com/users/octocat/repos");

  var response = fetch("https://api.github.com/users/octocat/repos");
console.log(response);

};
getUserRepos();
