import { useState } from "react";

function AdminForm() {
  const [values, setValues] = useState({
    name: "",
    company: "",
    team: "",
    position: "",
    email: "",
  });
  const onChange = (event) => setValues(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    alert("등록이 완료되었습니다.");
  }
  return (
    <div className="form">
      <form className="adminForm" onSubmit={onSubmit}>
        <input onChange={onChange} value={values.name} type="name" placeholder="name"></input>
        <input onChange={onChange} value={values.company} type="company" placeholder="company"></input>
        <input onChange={onChange} value={values.team} type="team" placeholder="team-name"></input>
        <input onChange={onChange} value={values.position} type="position" placeholder="position"></input>
        <input onChange={onChange} value={values.email} type="email" placeholder="email"></input>
        <button>Admin</button>
      </form>
    </div>
  );
}

function CompanySearch() {
  const [checkPoint, setCheckPoint] = useState(true);
  const logoClick = () => setCheckPoint(false);
  const btnClick = () => setCheckPoint(true);
  function Company() {
    return (
      <div className="search">
        <div className="input">
          <input id="sh" type="text" name="company" placeholder="company name"></input>
        </div>
        <div className="companyList">
          <div>
            <img onClick={logoClick} src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F9997644C5AF2495809" alt="현차"></img>
            <h3 value="현대자동차">현대자동차<br/> 자동차를 파는 기업</h3>
          </div>
          <div>
          <img onClick={logoClick} src="https://play-lh.googleusercontent.com/zkiNxSkrHN9Y25uxXpTSy49TX0Dpb1ql1vP_i55bm2QX_JtE3wDddjJVNEW62-KwNjzM=w240-h480-rw" alt="인바디"></img>
            <h3>인바디 <br/> 인바디 재는 기업</h3>
          </div>
          <div>
          <img onClick={logoClick} src="https://images.samsung.com/kdp/aboutsamsung/brand_identity/logo/256_144_1.png?$512_288_PNG$" alt="삼성전자"></img>
            <h3>삼성전자 <br/> 반도체 기업</h3>
          </div>
          <div>
          <img onClick={logoClick} src="https://i.namu.wiki/i/Ba0UnJKsT2ea_-UetJLd4x3I1b4_FVxNk36n3zRrmy47Bhj9vhrMDrClB6a-POSFxfCce29UJOd9ek2XijjrzQ.webp" alt="샐러디"></img>
            <h3>샐러디 <br/> 샐러드를 파는 기업</h3>
          </div>
          <div>
          <img src="https://static.toss-internal.com/ipd-tcs/toss_core/live/506afc6a-2de2-446b-8be8-a1333bedae7e" alt="토스"></img>
            <h3>토스 <br/> 토스</h3>
          </div>
          <div>
          <img src="https://post-phinf.pstatic.net/MjAyMDExMjdfMjYy/MDAxNjA2NDcyMDI2Nzkx.9GwSy3QX8ZtRdpZG9XYkms_EQIAfSK6TLwL7oY0FH6Ug.Xc-cJ081WgLaVI0SmS2Xa6x6CVU1qzbXCqh7LOMziwMg.JPEG/%ED%81%AC%EA%B8%B0%EB%B3%80%ED%99%98_PCM20200723000171990.jpg?type=w800_q75" alt="당근마켓"></img>
            <h3>당근마켓 <br/> 중고물건 거래 기업</h3>
          </div>
        </div>
      </div>
    );
  }
  function Employee() {
    return (
      <>
        <div className="input">
            <input id="sh" type="text" name="employee" placeholder="employee name"></input>
          </div>
        <div className="employeeList">
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSjO61Ra4JQHkBvbNKNpaiKTUPuLhPmeg_cw&usqp=CAU" alt="직원"></img>
            <h3 value="name">김삼순<br/> 인사기획팀 신입사원 <br/> gimsamsun@gmail.com</h3>
            <button>정보 확인하기</button>
          </div>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSjO61Ra4JQHkBvbNKNpaiKTUPuLhPmeg_cw&usqp=CAU" alt="직원"></img>
            <h3 value="name">김삼식<br/> 재무행정팀 대리 <br/> gimsamsun@gmail.com</h3>
            <button>정보 확인하기</button>
          </div>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSjO61Ra4JQHkBvbNKNpaiKTUPuLhPmeg_cw&usqp=CAU" alt="직원"></img>
            <h3 value="name">윤영준<br/> 웹개발팀 팀장<br/> gimsamsun@gmail.com</h3>
            <button>정보 확인하기</button>
          </div>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSjO61Ra4JQHkBvbNKNpaiKTUPuLhPmeg_cw&usqp=CAU" alt="직원"></img>
            <h3 value="name">박상현<br/> 홍보영업팀 과장<br/> gimsamsun@gmail.com</h3>
            <button>정보 확인하기</button>
          </div>
          <div>

            <button id="back" onClick={btnClick}>돌아가기</button>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      {checkPoint ? <Company/> : <Employee/>}
    </>
  );
}
function App() {
  const [viewDo, setViewDo] = useState(false);
  const onAdmin = () => setViewDo(true);
  const onSearch = () => setViewDo(false);
  return (
    <>
      <header className="head">
        <button>로그인</button>
        <button>회원가입</button>
      </header>
      <div className="container" >
        <div className="team-name" >
          <h1>IRIS</h1>
          <h4>기능 및 팀 설명, 우리가 무엇을 하는지</h4>
        </div>
        <div className="item" >
          <div id="btn">
            <button onClick={onAdmin} className="admin">등록하기</button>
            <button onClick={onSearch} className="company">회사찾기</button>
          </div>
        </div>
        <div className="main" >
          { viewDo ? <AdminForm/> : <CompanySearch/>}
        </div>
      </div>
    </>
  );
}
export default App;
