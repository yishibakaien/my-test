
function error(message: string): never {
    throw new Error(message)
}

function fail() {
    return error('someting failed')
}

function inifinitedLopp(): never {
    while(true) {

    }
}

function count(): never { // 错误示例
    return 1
}
function log(...args: string[]): never { // 错误示例
    console.log(args)
}