factl = function(n){
    if(n<=1){
        return 1;
    }
    return factl(n-1)*n;
}
exports.fact = factl;

exports.add = function(a,b){
    return a+b;
}

exports.sub = function(a,b){
    return a-b;
}