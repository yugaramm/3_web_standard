let user = {name : '유가람', age : 25};

//함수 정의
//매개변수로 넘어온 객체의 이름과 나이를 출력하는 함수 정의
//출력 예시
//이름 : 유가람(3)
//나이 : 25살
function printInfo(user, callback){
    let nameLen = callback(user.name);
    console.log(user.name + '('+ nameLen + ')');
    console.log(user.age + '살');

}

//콜백 함수 정의
//이름 전달 받아 3글자면 3, 4글자면 4를 리턴
function len(name){
    return name.length
}

printInfo(user, len);