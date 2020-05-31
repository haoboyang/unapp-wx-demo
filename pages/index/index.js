import HttpHeder from '../../common/untils/requestHeader.js'

const TEST = {}


const LOGIN = () => {
    console.log('hello word')
    HttpHeder.AUTH_POST('/test', {}) ;   
}

TEST.LOGIN = LOGIN

export default TEST;


