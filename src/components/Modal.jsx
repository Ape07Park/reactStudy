import classes from './Modal.module.css';

// props를 인자로 넣어도 되지만 객체 분해 구조를 통해 props의 구성요소인 children을 넣어도 됨

// children은 예약어로 사용자 정의 컴포넌트의 본문 태그 안에 담겨 전달되는 콘텐츠
function Modal({children, onClose}) {
    return (
    <>
        <div className={classes.backdrop} onClick={onClose}/> {/*배경에 해당*/}
        {/*open 속성이 있어야 다얼로그 요소가 자동으로 화면에 표시됨*/}
        <dialog  open={true} className={classes.modal}>{children}</dialog>
    </>
        );
}

export default Modal