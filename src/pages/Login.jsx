import React from "react";

function Login() {
  const [bg, setBg] = React.useState("white");
  const [user, setuser] = React.useState({
	  uid:"",
	  password:""
  });
  const [emp, setEmp] = React.useState({
	  uid:"",
	  password:""
  });
  function over() {
    setBg("black");
  }
  function out() {
    setBg("white");
  }
  function click() {
    setEmp({uid:user.uid,password:user.password});
  }

  function change(event) {
	const { value, name } = event.target;
	
	setuser((prevVal)=>{
		return {
			...prevVal,
			[name]:value
		};
	});
	
  }
  return (
    <div className="container">
      <h1>Login Page</h1>
      <input
        value={user.uid}
        onChange={change}
        type="text"
        placeholder="User ID"
		name="uid"
      />
	  <input
        value={user.password}
        onChange={change}
        type="text"
        placeholder="Password"
		name="password"
      />
      <button
        style={{ backgroundColor: bg }}
        onMouseOut={out}
        onMouseOver={over}
        onClick={click}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
