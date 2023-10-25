let cad = `   
<a href="../index.html"><img class="logo" src="../img/tienda.png" alt="logo"></a>

<h1>Visual Studio Ventas Online</h1>

<div id="menu-container">
    <a href="#menu-container"><img src="../img/burger_menu.png" id="abrir" alt=""></a>
    <a href="#"><img src="../img/cerrar_menu.png" id="cerrar" alt=""></a>

    <nav>
        <ul id="links-container">
            <li><a href="../index.html">INICIO</a> </li>
            <li><a href="ninosyninas.html">NIÑOS Y NIÑAS</a></li>
            <li><a href="hombres.html">HOMBRES</a> </li>
            <li><a href="mujeres.html">MUJERES</a> </li>
            <li><a href="accesorios.html">ACCESORIOS</a></li>
            <li><a href="login.html">INICIAR SESION</a></li>
            <li><a href="contacto.html">CONTACTO</a></li>
        </ul>
    </nav>
    <!-- <form class="form-nav" action="">
            <input type="text" placeholder="Busque su ropa">
            <button type="button"><i class="fa-solid fa-arrow-right buscar"></i></button>
        </form> -->
</div>
<hr>
                         
            `

document.querySelector("header").innerHTML = cad

cad = `   
<hr>
<p>Sitio desarrolado en clase de Codo a Codo</p>
<nav>
    <a href="https://facebook.com" target="_blank"><img src="../img/facebook.png" alt="facebook" width="33"></a>
    <a href="https://instagram.com" target="_blank"><img src="../img/instagram.png" alt="instagram"
            width="33"></a>
    <a href="https://api.whatsapp.com/send?phone=21502617" target="_blank"><img src="../img/whatsapp.png" alt="whatsapp" width="33"></a>
    <a href="https://reddit.com" target="_blank"><img src="../img/reddit.png" alt="reddit" width="33"></a>
</nav>                   
            `

document.querySelector("footer").innerHTML = cad
