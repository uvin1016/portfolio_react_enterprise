import { useEffect, useState } from "react";

function Join(){
    const initVal = {
        userid : '',
        pwd1: '',
        pwd2: '',
        email: '',
        emailhost: '',
        news: '',
        interest: '',
        comments: ''
    }
    const [val, setVal] = useState(initVal);
    const [err, setErr] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = e=>{
        const {name, value} = e.target;
        setVal({...val, [name]: value});
    }

    const handleCheck = e=>{
        const {name} = e.target;
        const isChecked = e.target.checked;
        setVal({...val, [name]: isChecked});
    }

    const handleSelect = e=>{
        const {name} = e.target;
        const isSelected = e.target.options[e.target.selectedIndex].value;
        setVal({...val, [name]: isSelected});
    }

    const handleSubmit = e=>{
        e.preventDefault();
        setIsSubmit(true);
        setErr(check(val));
    }

    const check = val=>{
        let errs = {};
        let eng = /[a-zA-Z]/;
        let num = /[0-9]/;
        let spc = /[!@#$%^&*]/;

        if(!val.userid || val.userid.length < 5) errs.userid = '아이디를 5글자 이상 입력하세요.';
        if(!val.pwd1 || val.pwd1.length < 8 || !eng.test(val.pwd1) || !num.test(val.pwd1) || !spc.test(val.pwd1)) errs.pwd1 = '숫자,특수문자를 포함하여 8글자 이상 입력하세요.';
        if(!val.pwd2 || val.pwd1 !== val.pwd2) errs.pwd2 = '비밀번호를 동일하게 입력하세요.';
        if(!val.email) errs.email = '이메일 아이디를 입력하세요.';
        if(!val.emailhost) errs.emailhost = '이메일 주소를 선택하세요.';
        if(!val.news) errs.news = '뉴스메일을 선택하세요.';
        if(!val.interest) errs.interest = '관심분야를 1개 이상 선택하세요.';
        if(!val.comments || val.comments < 10) errs.comments = '문의사항을 10글자 이상 입력하세요.'

        return errs;
    }

    useEffect(()=>{
        const len = Object.keys(err).length;
        if(len === 0 && isSubmit){
            setSuccess(true);
        }else{
            setSuccess(false);
        }
    },[err])

    return (
        <section className="content join">
            <div className="inner">
                <h1>
                    <p>Let's Be</p>
                    <p>Together</p>
                </h1>

                <div className="joinWrap">
                    <h2>join</h2>
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <legend className="hidden">회원가입 입력 폼 양식</legend>

                            <table>
                                <caption className="hidden">회원가입 입력</caption>
                                <tbody>
                                    <tr>
                                        <th scope="row">
                                            <label htmlFor="userid">아이디</label>
                                        </th>
                                        <td>
                                            <input type="text" id="userid" name="userid" placeholder="아이디를 입력하세요." onChange={handleChange} />
                                            <p className="err">{err.userid}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <label htmlFor="pwd1">비밀번호</label>
                                        </th>
                                        <td>
                                            <input type="password" id="pwd1" name="pwd1" placeholder="비밀번호를 입력하세요." onChange={handleChange} />
                                            <p className="err">{err.pwd1}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <label htmlFor="pwd2">비밀번호 확인</label>
                                        </th>
                                        <td>
                                            <input type="password" id="pwd2" name="pwd2" placeholder="비밀번호 확인" onChange={handleChange} />
                                            <p className="err">{err.pwd2}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <label htmlFor="email">이메일</label>
                                        </th>
                                        <td>
                                            <input type="text" id="email" name="email" placeholder="이메일을 입력하세요." onChange={handleChange} />
                                            <select name="emailhost" id="emailhost" onChange={handleSelect}>
                                                <option value="">이메일 주소를 선택하세요.</option>
                                                <option value="naver">@naver.com</option>
                                                <option value="daum">@daum.net</option>
                                                <option value="gmail">@gmail.com</option>
                                            </select>
                                            <p className="err">{err.email}</p>
                                            <p className="err">{err.emailhost}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">뉴스메일</th>
                                        <td>
                                            <input type="radio" name="news" id="agree" onChange={handleCheck} />
                                            <label htmlFor="agree">수신동의</label>

                                            <input type="radio" name="news" id="disagree" onChange={handleCheck} />
                                            <label htmlFor="disagree">수신비동의</label>
                                            <p className="err">{err.news}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">관심분야</th>
                                        <td>
                                            <input type="checkbox" name="interest" id="movie" onChange={handleCheck} />
                                            <label htmlFor="movie">영화</label>

                                            <input type="checkbox" name="interest" id="fashion" onChange={handleCheck} />
                                            <label htmlFor="fashion">패션</label>

                                            <input type="checkbox" name="interest" id="exhibition" onChange={handleCheck} />
                                            <label htmlFor="exhibition">전시</label>

                                            <input type="checkbox" name="interest" id="travel" onChange={handleCheck} />
                                            <label htmlFor="travel">여행</label>

                                            <input type="checkbox" name="interest" id="arcitecture" onChange={handleCheck} />
                                            <label htmlFor="arcitecture">건축</label>

                                            <input type="checkbox" name="interest" id="nature" onChange={handleCheck} />
                                            <label htmlFor="nature">자연</label>
                                            
                                            <p className="err">{err.interest}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <label htmlFor="comments">문의사항</label>
                                        </th>
                                        <td>
                                            <textarea name="comments" id="comments" placeholder="문의사항을 입력해주세요." onChange={handleChange}></textarea>
                                            <p className="err">{err.comments}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th colSpan={2} className="joinBtns">
                                            <input type="reset" value="취소" />
                                            <input type="submit" value="가입하기" />
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </fieldset>
                    </form>
                </div>
            </div>
            {success ? <Pop /> : ""}
        </section>
    )

    function Pop(){
        return(
            <aside className="pop">
                <h1>회원가입을 축하드립니다!</h1>
                <button className="close" onClick={e=>{
                    setSuccess(false);
                }}>확인</button>
            </aside>
        )
    }
}

export default Join;