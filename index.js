const app = "I don't do much.";

const token = '0d04c4bb5362c8552941320edd84f38f5cd21671'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
