const botones = document.querySelectorAll('.btn')


botones.forEach((boton)=>{
   
   boton.addEventListener('click', ()=> {
    
       // alerta de realizando compra
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end-left',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)

        }
      })
      
      Toast.fire({
        icon: 'question',
        title: `Realizando Pedido Espere`
    
      })
      

// notificacion de la compra
    setTimeout (() => {
        Toastify({
        text: "Pedido Realizado con Exito",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        // close: true,
        gravity: "top", 
        position: "right", 
        stopOnFocus: true, 
        style: {
          background: "linear-gradient(to right, rgb(157, 157, 157), rgb(157, 157, 157))"
        },
       
      }).showToast();
    },2500)
  
 
    })
   })
