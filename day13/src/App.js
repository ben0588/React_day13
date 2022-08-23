import React from 'react';
import { NavLink,Route,Routes,useNavigate,useLocation,useParams,Outlet } from 'react-router-dom';


// 首頁
const Home = ()=>{
  return (
    <>
    <h1>首頁頁面</h1>
    </>
  )
}
// 註冊頁
const Register=()=>{
  return (
    <>
      <h3>這是註冊頁</h3>
    </>
  )
}

// 登陸頁
const Login=()=>{
  // const location = useLocation();
  // console.log(location.state.id)
  return (
    <>
      <h3>這是登入頁面</h3>
    </>
  )
}

// 待辦事項頁面 (登入成功)
const Todo=()=>{
  return (
    <>
      <h3>這是待辦事項頁面</h3>
      <Logout />
    </>
  )
}

// Day14 練習新增:

// 登出元件
const Logout=()=>{
  const navigator = useNavigate();
  // useNavigate 參考文件:https://reactrouter.com/docs/en/v6/hooks/use-navigate#usenavigate

  // 指定回登入頁按鈕
  const logoutBut =()=>{
    // 當replace為true時，當他們再次點擊回到前一頁時，不會再次看到登入頁面
    // state可以再跳轉路由時傳遞資料
    navigator('/login',{replace: true, state:{id:1}})
  }

  // 返回上一頁按鈕
  const returnBut =()=>{
    navigator(-1)
  }

  return (
      <>
      <button onClick={logoutBut}>登出</button>
      <button onClick={returnBut}>返回上一頁</button>
      </>
  )
}

// Day15 練習新增:

const Post =()=>{
  return (
    <div>
    <h3>Post頁面</h3>
    {/* 這邊顯示的是<PostId />元件 */}
    <Outlet />
    </div>
  )
}

const PostId =()=>{
  // 透過useParams取得路由網址的參數 (兩種方式獲取)
  const { postId } = useParams();
  // const  params  = useParams();
  return (
    <>
    <p>Post ID:{postId}</p>
    {/* <p>Post ID:{params.postId}</p> */}
    </>
  )
}


function App() {
  return (
    <div>
        <nav>
            <NavLink to="/"><p>首頁</p></NavLink>
            <NavLink to="/register"><p>註冊</p></NavLink>
            <NavLink to="/login"><p>登入</p></NavLink>
            <NavLink to="/todo"><p>待辦事項</p></NavLink>
            <NavLink to="/post"><p>Post</p></NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/todo" element={<Todo />}/>
          
          <Route path="/post" element={<Post />}>
            <Route path=":postId" element={<PostId />}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
