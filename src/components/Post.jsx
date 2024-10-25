
/**
 * 
 * 컴포넌트를 만들더라도 다른 컴포넌트인 JSX 코드에서 호출이 필요
 */
// 컴포넌트는 클래스와 같이 대문자로 작성

// const names = ['sungMin', 'Yoon']

// props를 통해 상위 컴포넌트에서 사용하는 인자를 props에 담아 하위 컴포넌트가 map의 형태로 받아 사용이 가능하다
// props는 항상 객체이며 이 객체에 내가 원하는 것을 담아 전달 가능
function Post(props) {
    // 속성의 이름을 키로 해서 부르는 게 가능


    // 컴포넌트 함수 안에 어떤 자바스크립트 코드도 넣을 수 있음. 중요한 건 함수가 jsx 코드를 반환한다는 것임
//     const chosenName = Math.random() > 0.5 ? names[0] : names[1];

  //   리엑트는 스타일을 입힐 때 " " 대신 { } 사용
    // 스타일 속성에 값을 자바스크립트로 전달
  return (
    <div>
      {/*  태그 안에 자바스크립트를 쓰고 싶다면 { } 안에 넣기 ex) <p>{2 + 2} </p> */}
      {/*<p>{chosenName}</p>*/}
      {/*<p>React is awesome!</p>*/}

        <p>{props.auther}</p>
        <p>{props.body}</p>
    </div>
  );
}

// export를 통해 내보내기 가능
// 개체가 1개일 때는 default 씀
export default Post;