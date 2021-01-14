//Writing a fibonacci sequence with recursion, memoization, and tabulation

//Without basic recursion

function fib(num){
    if(num <= 2){
        return 1;
    }
    return fib(num-1) + fib(num-2);
}

//Memoization

function memoFib(num, memo=[]){
    if(memo[num] !== undefined){
        return memo[num];
    }
    if(num <= 2){
        return 1;
    }
    var res = memoFib(num - 1, memo) + memoFib(num - 2, memo);
    memo[num] = res;
    return res;
}

//Tabulation 

function tabuFib(num){
    if(num <= 2){
        return 1;
    }
    var fibNums = [0,1,1];
    for(var x = 3; x <= num; x++){
        fibNums[x] = fibNums[x - 1] + fibNums[x - 2];
    }
    return fibNums[num];
}

console.log(tabuFib(150));