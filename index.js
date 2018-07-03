module.exports = function (source) {
    source = source.replace(/\/\/cmft-test/g, "import test from './test';");
    //source = source.replace(/<body>/g, "<body><h1>chae-loader</h1>");
    //source = " import test from './test'; " + source
    return source;
}
