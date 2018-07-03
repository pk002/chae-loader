module.exports = function (source) {
    source = source.replace(/<body>/g, "<body><h1>chae-loader</h1>");
    console.log("source========" + source);
    return source;
}
