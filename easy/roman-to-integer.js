const romanObj = {
  I:1,
  V:5,
  X:10,
  L:50,
  C:100,
  D:500,
  M:1000
};


const romanToInt = function(s) {
        let res = 0 ;
        for (let i = 0; i < s.length; i++){
            
            let currentNum = romanObj[s[i]] 
            let nextNum = romanObj[s[i+1]]

            if (currentNum < nextNum) {
                res += nextNum - currentNum
                i += 1
            } else {
                res += currentNum
            }
        }
    return res ;
};