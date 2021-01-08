// es5
function Server(name, ip) {
    this.name = name;
    this.ip = ip;
}

Server.prototype.getUrl = function() {
    return `https://${this.ip}:80`;
}

// es6
class Server2 {
    cunstructor(name, ip) {
        this.name = name;
        this.ip = ip;
    }

    getUrl() {
        return `https://${this.ip}:80`;
    }
}

const aws = new Server('AWS German', '82.21.21.32');
const azure = new Server2('Azure German', '90.21.21.32');
console.log(aws.getUrl());
console.log(azure.getUrl());