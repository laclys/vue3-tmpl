const projectName = require('../package.json').name
const version = require('../package.json').version

module.exports = {
  projectName,
  version,
  PORT: 8820,
  publicUrl: {
    test: `//static2.test.ximalaya.com/yx/${projectName}/last/dist/`,
    uat: `//s1.uat.xmcdn.com/yx/${projectName}/${version}/dist/`,
    prod: `//s1.xmcdn.com/yx/${projectName}/${version}/dist/`,
    analyze: '/'
  }
}
