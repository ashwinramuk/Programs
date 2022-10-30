let nums = [-1,0,1,2,-1,-4,-2,-3,3,0,4] //[[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]]
// let nums = [0,0,0,0]
let res = [];let f=0;//let solArr=[{},{}];
let sol = {};
//let sol_i={},sol_j={},sol_k={}
//console.log(nums)
for(let i=0;i<nums.length;i++){    
    let map = {};                                   // -1     
    let target = 0 - nums[i]                                           //  1 
    // console.log("nums[i], target: ",nums[i],target)   
    for(let j=i+1;j<nums.length;j++){                                  //  0     1
        let n = target - nums[j];                                      //  1     0
        // console.log("n, nums[j]: ",n,nums[j])
        if(map[n] !== undefined) {
            //sol[nums[i]]=nums[i];sol[map[n]]=map[n];sol[nums[j]]=nums[j]
            res[f]=[nums[i],map[n],nums[j]]
            res[f].sort(function(a,b){return a-b})
            if(sol[res[f].join("")]===undefined){
                sol[res[f].join("")]=res[f]
                f++
            }else{
                res.pop()
            }
            
            //solArr[f] = sol
            //sol={}
            //f++
            // for (let each of solArr){
            //     console.log(each)
            //     if(_.isEqual(sol, each))break;
            //     else {solArr[f] = sol; sol = {};res[f]=[nums[i],map[n],nums[j]];f++;break;}
            // }
            
            
            //res[f].sort(function(a,b){return a-b})
            // if (sol_i[res[f][0]]=== undefined||sol_j[res[f][1]]===undefined||sol_k[res[f][2]]===undefined){
                
            //     sol_i[res[f][0]] = res[f][0];sol_j[res[f][1]]=res[f][1];sol_k[res[f][2]]=res[f][2]
            //     sol[f]={}
            //     sol[f][res[f][0]]=res[f][0];sol[f][res[f][1]]=res[f][1];sol[f][res[f][2]]=res[f][2]
            //     console.log("inside if",res,sol_i,sol_j,sol_k)
            // }else {console.log("inside else", res,sol_i,sol_j,sol_k);res.pop();console.log("after pop:", res);f--;}
            // console.log(res,"\n",sol_i,)
        }                                                              
        else map[nums[j]] = nums[j];                                   
    }
}//return res
console.log(res,sol)
//res = Array.from(new Set(res.map(JSON.stringify)), JSON.parse)
//console.log(res)

//----two sum code-------
// let map = {};
//     for(let i=0; i<nums.length; i++){
//         let n = target - nums[i];
//         if(map[n] !== undefined) return [map[n], i];
//         else map[nums[i]] = i;
//     }