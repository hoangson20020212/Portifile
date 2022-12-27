// import React,{useState,useEffect} from 'react'
// import "./Login3.css"
// import wave from "./img/wave.png"
// import avata from "./img/bg.svg"
// import {FaUser,FaAddressCard} from 'react-icons/fa'
// import {HiUserCircle} from 'react-icons/hi'
// import {AiOutlineMail,AiFillPhone} from 'react-icons/ai'
// import data from '../data/Staffdata.json'
// import isEmpty from "validator/lib/isEmpty"


// const Register3 = () => {

//     const [fullName, setFullName] = useState('');
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [phone, setPhone] = useState('');
//     const [address, setAddress] = useState('');
//     const [validationMsg, setValidationMsg] = useState('');
//     const [listUser, setListUser] = useState('');

    

//     useEffect(() => {
//         setListUser(data);
//       }, []);

//     const [user, setUser] = useState({
//         fullName: "",
//         username: "",
//         email: "",
//         phone: "",
//         address:""
//       });

//     const handleChangeInput = (field, value) => {
//         setUser((prev) => {
//           return {
//             ...prev,
//             [field]: value,
//           };
//         });
//     };

//     const checkDuplicationUser = (username ) => {
//         const index = listUser.findIndex((user) => user.username === username)
//         const checkIndex = -1;
//         if(index==checkIndex) {
//           return true;
//         } else { 
//           return false;
//         }
//     }

//     const checkDuplicationEmail = ( email) => {
//         const index = listUser.findIndex((user) => user.email === email)
//         const checkIndex = -1;
//         if(index==checkIndex) {
//             return true;
//           } else { 
//             return false;
//           }
//     }
//     const checkDuplicationPhone = (phone ) => {
//         const index = listUser.findIndex((user) => user.phone === phone)
//         const checkIndex = -1;
//         if(index==checkIndex) {
//             return true;
//           } else { 
//             return false;
//           }
//     }


//     function onlyNumbers(str) {
//         return /^[0-9]+$/.test(str);
//     }

//     const validateAll = () => {
//         const msg = {}

//         let checkCode = onlyNumbers(phone);
//         let checkUser = checkDuplicationUser(username);
//         let checkPhone = checkDuplicationPhone(phone);
//         let checkEmail = checkDuplicationEmail(email);
//         if (isEmpty(fullName)) {
//           msg.fullName = "Hãy nhập tên"
//         }else if(fullName.length>100) {
//           msg.fullName = "Tên phải dưới 100 ký tự"
//         }
    
//         if (isEmpty(username)) {
//           msg.username = "Hãy nhập username"
//         } else if (!checkUser) {
//             msg.username = "Username đã tồn tại"
//         }
    
//         if (isEmpty(email)) {
//           msg.email = "Nhập email"
//         } else if (!checkEmail) {
//             msg.email = "Email đã tồn tại"
//         }
    
//         if (isEmpty(phone)) {
//             msg.phone = "Hãy nhập số điện thoại "
//         } else if (!checkCode) {
//             msg.phone = "Số điện thoại phải là số "
//         } else if (!checkPhone) {
//             msg.phone = "Số điện thoại đã tồn tại"
//         }


//         if (isEmpty(address)) {
//           msg.address = "Hãy nhập địa chỉ"
//         } else if (address.length>200) {
//           msg.address = "Địa chỉ dưới 200 ký tự"
//         }
      
//         setValidationMsg(msg)
//         if (Object.keys(msg).length > 0) return false
//         return true
//       }


//     const ChuanhoaTen = (ten) =>{
//         let dname = ten;
//         let ss = ten.split(" ");
//         dname = "";
//         for (var i = 0; i < ss.length; i++)
//           if (ss[i].length > 0) {
//             if (dname.length > 0) dname = dname + " ";
//             dname = dname + ss[i].substring(0, 1).toUpperCase();
//             dname = dname + ss[i].substring(1).toLowerCase();
//           }
//         setFullName(dname) ;
//         handleChangeInput("name", dname)
//       }

//   return (
//     <>
//     <img className="wave" src={wave}></img>
// 	<div className="container">
// 		<div className="img">
// 			<img src={avata}/>
// 		</div>
// 		<div className="login-content">
// 			<form action="index.html">
// 				<img src={wave}/>
// 				<h2 className="ttle">Welcome</h2>
//            		<div className="input-div one">
//            		   <div className="i">
// 						<i><FaUser/></i>
//            		   </div>
//            		   <div className="div">
//            		   		<h5>Full Name</h5>

//            		   		<input 
//                         type="text" 
//                         className="input"
//                         onChange={(e) => {
//                             setFullName(e.target.value)
//                             handleChangeInput("fullName", fullName)
//                           }}
//                           value={fullName}
//                           onBlur={(e)=>{
//                             ChuanhoaTen(e.target.value);
//                           }}
//                         />
//            		   </div>
//            		</div>
//                    <p className='hienthiloi'>{validationMsg.fullName}</p>

//                 <div className="input-div one">
//            		   <div className="i">
// 						<i><HiUserCircle/></i>
//            		   </div>
//            		   <div className="div">
//            		   		<h5>Username</h5>
//            		   		<input type="text" className="input"
//                         onChange={(e) => {
//                             setUsername(e.target.value)
//                             handleChangeInput("username", e.target.value)
//                           }}
//                           value={username}
//                         />
//                    </div>
//            		</div>
//                    <p className='hienthiloi'>{validationMsg.username}</p>
           		

//                 <div className="input-div one">
//            		   <div className="i">
// 						<i><AiOutlineMail/></i>
//            		   </div>
//            		   <div className="div">
//            		   		<h5>Email</h5>
//            		   		<input type="text" className="input"
//                     onChange={(e) => {
//                       setEmail(e.target.value)
//                       handleChangeInput("email", e.target.value)
//                     }}
//                     value={email}
//                     />
//            		   </div>
//            		</div>
//                    <p className='hienthiloi'>{validationMsg.email}</p>


//                 <div className="input-div one">
//            		   <div className="i">
// 						<i><AiFillPhone/></i>
//            		   </div>
//            		   <div className="div">
//            		   		<h5>Phone</h5>
//            		   		<input type="text" className="input"
//                     onChange={(e) => {
//                       setPhone(e.target.value)
//                       handleChangeInput("phone", e.target.value)
//                     }}
//                     value={phone}
//                     />
//            		   </div>
//            		</div>
//                    <p className='hienthiloi'>{validationMsg.phone}</p>

//                 <div className="input-div one">
//            		   <div className="i">
// 						<i><FaAddressCard/></i>
//            		   </div>
//            		   <div className="div">
//            		   		<h5>Address</h5>
//            		   		<input type="text" className="input"
//                     onChange={(e) => {
//                       setAddress(e.target.value)
//                       handleChangeInput("address", e.target.value)
//                     }}
//                     value={address}
//                     />
//            		   </div>
//            		</div>
//                    <p className='hienthiloi'>{validationMsg.address}</p>


//             	<a href="#">Forgot Password?</a>
//             	<input type="submit" className="btn" value="Sign Up"
//                     onClick={(e) => {
//                     e.preventDefault();
//                     const isValid = validateAll()
//                     if (isValid) {
//                     setTimeout(() => alert("Thêm thành công", "#28a745"),500);
//                     } 
//                   }}
//                 />
//             </form>
//         </div>
//     </div>
//     </>
//   )
// }

// export default Register3