


let arr = [10,20,30,40];
//console.log(arr);

//1) forEach 함수
arr.forEach(()=>{
    console.log('forEach 반복')
})

arr.forEach((value)=>{
    console.log('forEach 반복' + value)
})


//2) map함수 : 반복, return 가능

arr.map(()=>{ //배열의 길이 단순 반복
    console.log('map 반복')
})

arr.map((item)=>{ //iterm 매개변수에 arr배열에 있는 값을 순차적으로 주입
    console.log('map 반복' + item)
})

arr.map((item, index)=>{ //item : 배열에 있는 값, index : 해당 순서 인덱스 주입
    console.log('map 반복 : 값>' + item + '인덱스>' + index + '배열[index]' + arr[index])
})

let mapResult = arr.map(()=> {
                        return 99;
                    })

console.log(mapResult);

let mapResult2 = arr.map((item) => {
                        console.log(item);
                    })

console.log(mapResult2);

let mapResult3 = arr.map((item)=>{
                        return item + 100
                    })

console.log(mapResult3);

let mapResult4 = arr.map((item)=>{
                        return "가지고 있는 값은 : " + item + "입니다.";
                    })

console.log(mapResult4);

let menuArr = ["김밥", "돈까스", "우동"];
let mapResult5 = menuArr.map((item)=>{
                        return '<p>' + item + '</p>';
                    })
console.log(mapResult5);

                            // ()=>code    ()=>{return code;}
let mapResult6 = menuArr.map((item)=>{
                        return '<p>' + item + '</p>';
                    })
console.log(mapResult6);

// 3) filter
arr = [10,20,30,40];
//필터링  : 조건에 맞는 값만 출력
console.log('===========filter============');

let Result7 = arr.filter(()=>{
    return true;
});
console.log(Result7);

let Result8 = arr.filter((num)=>{
    return true;
});
console.log(Result8);


let Result9 = arr.filter((num)=>{
    return num != 20;
});
console.log(Result9);

// 4) find
//맞는 값을 찾는 역할
console.log('===========find============');

let Result10 = arr.find((value)=>{
    return value == 40;
});
console.log(Result10);

let Result11 = arr.find((value)=>{
    return value == 60;
});
//만약 찾는 값이 없다면 undefined로 출력된다.
console.log(Result11);

// 5) findIndex 
//몇번째 배열에 존재하는지. 배열의 번호를 찾는 함수
let Result12 = arr.findIndex((value)=>{
    return value == 40;
});
console.log(Result12);


//찾는값이 없다면 -1 출력
let Result13 = arr.findIndex((value)=>{
    return value == 100;
});
console.log(Result13);