
/**
 * 
 * 컴포넌트를 만들더라도 다른 컴포넌트인 JSX 코드에서 호출이 필요
 */
// 컴포넌트는 클래스와 같이 대문자로 작성
function Post() {
  return (
    <div>
      <p>SungMin</p>
      <p>React is awesome!</p>
    </div>
  );
}

// export를 통해 내보내기 가능
// 개체가 1개일 때는 default 씀
export default Post;