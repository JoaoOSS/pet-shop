const fsExtra = require('fs-extra');

let serverConfiguration

module.exports = () => {
    if (serverConfiguration) {
        return serverConfiguration
    }


const connfigurationExists = fsExtra.existsSync('.config.json')

if (connfigurationExists) {
    serverConfiguration = fsExtra.readJSONSync (".config.json")

    return  serverConfiguration
}

throw new Error('Arquivo de configuração inexistente. Crie o arquivo .config.json na raiz do projeto baseado no arquivo .config.example.json')
}