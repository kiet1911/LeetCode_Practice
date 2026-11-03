
var reverseString = function(s) {
    if(s.length == 1)
        return;
    
    for(let i = 0; i <= s.length/2-1 ; i++){
        if( s[i] == s[s.length-1-i]){
            continue;
        }
        else{
            [s[i],s[s.length-1-i]] = [s[s.length-1-i],s[i]];
        }
    }
    
};

