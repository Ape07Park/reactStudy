import classes from './NewPost.module.css';
import { useState } from 'react';

// 웹사이트에는 상태라는 것이 있을 수 있는데 랜더링 된 후 그 상태를 조작할 수 있음
// 상태를 바꿀려면 먼저 상태를 등록하고 이벤트 리스너를 만들어서 그 상태가 무엇인지 리엑트에 알려야함

function NewPost({onCancel}) {

  // // useState: 상태 변경 리엑트 훅. 첫 인자에는 처음에 랜더링 되었을 때의 값
  // const [enteredBody, setEnteredBody] = useState(''); // 값을 새롭게 할당할 필요가 없어서 const를 사용

  // // 이벤트 객체(이벤트 타입에 따라 발생하는 이벤트의 각종 정보가 들어 있는 객체 집합)를 인자로 받음
  // // 이벤트 리스너 등록법
  // function changeBodyHandler(e) {
  //   setEnteredBody(e.target.value); // e.target은 textarea 
  // }

    const [enteredBody, setEnteredBody] = useState('')
    const [enteredName, setEnteredName] = useState('');


    function bodyChangeHandler(e) {
        setEnteredBody(e.target.value);
    }

    function nameChangeHandler(e) {
        setEnteredName(e.target.value);
    }

    // 폼 전송 시 실행할 함수
    function submitHandler(e){
        e.preventDefault(); // 브라우저가 자동을 하는 동작들을 막음 ex) 기본 클릭, HTTP 요청 전송 등
        const postData = {
            body: enteredBody,
            author: enteredName
        }
        console.log(postData);
        onCancel() // 함수를 값으로 받는 프로퍼티임 따라서 함수처럼 실행 O.  onCancel 프로퍼티에 값으로 들어온 함수가 실행됨. onCancel이 받는게 hideModalHandler
    }

    // submit 이벤트: 폼이 전송되면 submit 이벤트가 트리거되고 브라우저는 HTTP 요청을 만들어 전송
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        {/* textarea에 이벤트 리스너를 등록함 */}
        <textarea id="body" required rows={3} onChange={bodyChangeHandler}/>   {/* 입력값이 들어오면 안의 함수를 실행하라*/}
      </p>
      {/* <p>{enteredBody}</p> */}
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={nameChangeHandler}/>
      </p>

        <p className={classes.actions}> </p>
        <button>Submit</button>    {/* 버튼의 기본값은 submit임 */}
        <button type="button" onClick={onCancel}>Cancel</button>

    </form>
  );
}

export default NewPost;
