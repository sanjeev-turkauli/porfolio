import React,{useRef,useEffect , useState} from "react";
import '../assets/css/custom.css';
import Typed from 'typed.js';
import Swal from 'sweetalert2';



const MainPage = (props) => {
  const el = useRef(null);
  const redirectUri = "https://codinghub.online/";

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Full Stack Developer", "React Developer", "YouTuber", "Designer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  const redirectHandle = () =>{
    Swal.fire({
      title: 'Are you sure can you leave this site?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'I Leave it!'
    }).then((result) => {
      if (result.isConfirmed) {
        redirecting();
      }else{
        stayHere();
      }
    })
  }

  function redirecting(){
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      },
      didClose: (toast) =>{
        window.open(redirectUri);
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'redirecting...'
    })
  }

  function stayHere(){
      Swal.fire("I Thanks for You stay for this site!","","success");
  }

  return (
    <>
      <div className="container-fluid p-0 d-flex justify-content-center align-items-center overflow-hidden mainContainer" style={{height: '100vh'}}>
          <div className="conatiner d-flex justify-content-center align-items-center name">
              <span>
                <hi className="text-primary mainHeading">{props.provider_name} </hi><br/><br/>
                <span className="mt-5 h2 text-primary bg-white">I,m A <span className="h3 bg-white"><span className="text-danger" ref={el}></span></span></span>
              </span>
          </div>
          <button className="btn btn-outline-primary officail" onClick={redirectHandle}>Official Site</button>
      </div>
      
    </>
  );
};

export default MainPage;
