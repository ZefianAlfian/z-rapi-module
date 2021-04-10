const zrapi = require("./src/index");
zrapi.instagram("https://www.instagram.com/p/CNREL7xnGHO/?igshid=1g80ve64qkwyf")
.then(data => console.log(data))
.catch(e => console.log(e))