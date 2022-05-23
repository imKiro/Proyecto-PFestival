window.addEventListener('load', inicial, false);

function inicial() {

	var tabla = document.createElement('table');
	document.body.appendChild(tabla);
 
	var proveedoresSlt = document.getElementById('proveedoresSlt');
	var cantFresasTxt = document.getElementById('cantFresasTxt');
	var registrarBtn = document.getElementById('registrarBtn');
	var pagoBtn = document.getElementById('pagoBtn');
	var totalFresasBtn = document.getElementById('totalFresasBtn');
	var mayorProductorBtn = document.getElementById('mayorProductorBtn');
	var restablecerBtn = document.getElementById('restablecerBtn');
	var resultadoPr = document.getElementById('resultadoPr');
	var eliminarBtn = document.getElementById('eliminarBtn');

	var datos = [[],[],[],[],[],[],[],[]];

	registrarProveedores(1,'Jose Julian', 'Gutierrez', 'VIP', 0, 0, 'j.gutierrez@gmail.com', 50250695);
	registrarProveedores(2,'Karla', 'Gonzalez', 'VIP', 0, 0, 'k.gonzalez@gmail.com', 65001281);
	registrarProveedores(3,'Hernesto', 'Sanchez', 'Regular', 0, 0, 'h.sanchez@hotmail.com', 61764113);
	registrarProveedores(4,'Maria Guadalupe', 'Herrera', 'VIP', 0, 0, 'm.herrera@gmail.com', 30050838);
	registrarProveedores(5,'Pablo', 'Rodriguez', 'Regular', 0, 0, 'p.rodriguez@hotmail.com', 50063165);
	registrarProveedores(6,'Andres', 'Solano', 'Regular', 0, 0, 'a.solano@gmail.com', 57189672);
	registrarProveedores(7,'Sharon', 'Arguedas', 'VIP', 0, 0, 's.arguedaz@gmail.com', 65001285);
	registrarProveedores(8,'Julio', 'Vasquez', 'VIP', 0, 0, 'j.vasquez@gmail.com', 88560580);
	registrarProveedores(9,'Pedro', 'Arce', 'VIP', 0, 0, 'p.arce@gmail.com', 30054595);
	registrarProveedores(10,'Jose Armando', 'Paredes', 'Regular', 0, 0, 'j.paredes@gmail.com', 65001255);
	registrarProveedores(11,'Brayan Josue', 'Reyes', 'Regular', 0, 0, 'b.reyes@gmail.com', 60947923);
	registrarProveedores(12,'Carlos', 'Alvarado', 'Regular', 0, 0, 'c.alvarado@gmail.com', 663411305);
	registrarProveedores(13,'Enrique', 'Matamoros', 'VIP', 0, 0, 'e.matamoros@gmail.com', 65001221);
	registrarProveedores(14,'Juan', 'Aguilar', 'Regular', 0, 0, 'j.aguilar@gmail.com', 83167507);
	registrarProveedores(15,'Sergio', 'Bonilla', 'VIP', 0, 0, 's.bonilla@gmail.com', 57167688);
	
	tablaProveedores();

    function registrarProveedores(id, nombre, apellido, tipo, cantidad, pago, email, telefono) {
		datos[0].push(id);
		datos[1].push(nombre);
		datos[2].push(apellido);
		datos[3].push(tipo);
		datos[4].push(cantidad);
		datos[5].push(pago);
		datos[6].push(email);
		datos[7].push(telefono)
	}

	function ingresarFresas() {
		var fresasSumar = Number(cantFresasTxt.value);
		id = Number(proveedoresSlt.value - 1);
		var cantFresas = Number(datos[4][id]);
		cantFresas = cantFresas +  Number(fresasSumar);
		datos[4][id] = cantFresas;
	}	

	function tablaProveedores() {

		tabla.innerHTML = '';

		var tr = document.createElement('tr');
		tabla.appendChild(tr);

		var th = document.createElement('th');
		th.innerHTML = 'ID';
		tr.appendChild(th);

		th = document.createElement('th');
		th.innerHTML = 'Nombre';
		tr.appendChild(th);

		th = document.createElement('th');
		th.innerHTML = 'Apellido';
		tr.appendChild(th);

		th = document.createElement('th');
		th.innerHTML = 'Tipo';
		tr.appendChild(th);

		th = document.createElement('th');
		th.innerHTML = 'Cantidad';
		tr.appendChild(th);

        th = document.createElement('th');
		th.innerHTML = 'Pago';
		tr.appendChild(th);

		th = document.createElement('th');
		th.innerHTML = 'Correo';
		tr.appendChild(th);

		th = document.createElement('th');
		th.innerHTML = 'Telefono';
		tr.appendChild(th);

		th = document.createElement('th');
        th.innerHTML = '';
        tr.appendChild(th);

		for (var y = 0; y < datos[0].length; y++) {

			var tr = document.createElement('tr');
			tabla.appendChild(tr);

			td = document.createElement('td');
			td.innerHTML = datos[0][y];
			tr.appendChild(td);

			td = document.createElement('td');
			td.innerHTML = datos[1][y];
			tr.appendChild(td);

			td = document.createElement('td');
			td.innerHTML = datos[2][y];
			tr.appendChild(td);

			td = document.createElement('td');
			td.innerHTML = datos[3][y];
			tr.appendChild(td);

			td = document.createElement('td');
			td.innerHTML = datos[4][y];
			tr.appendChild(td);

            td = document.createElement('td');
			td.innerHTML = datos[5][y];
			tr.appendChild(td);

			td = document.createElement('td');
			td.innerHTML = datos[6][y];
			tr.appendChild(td);

			td = document.createElement('td');
			td.innerHTML = datos[7][y];
			tr.appendChild(td);

	       	td = document.createElement('td');
            td.innerHTML = "<button type='reset' class='deleteBtn btn btn-outline-light' id='eliminarBtn'>X</button>";
            tr.appendChild(td);
		}
	}

	function totalFresasRecolectados(){
		var total = 0;
		var totalDinero = 0;
		resultadoPr.innerHTML = '';
		resultadoPr.classList.add('resultadoPr');

		for (var y = 0; y < datos[4].length; y++){
			total = total + Number(datos[4][y]);
		}

		for (var y = 0; y < datos[5].length; y++){
			totalDinero = totalDinero + Number(datos[5][y]);
		}

		resultadoPr.innerHTML = 'La cantidad total de tickets vendidos es de: ' + total + ' por un valor a pagar de ' + totalDinero;				
	}

	function mayorProveedor() {	
		var maxProveedor = datos[4][0];
		var posicionMayor = 0;
		resultadoPr.innerHTML = '';

		for (var y = 0; y < datos[4].length; y++){
			if (maxProveedor < datos[4][y]) {
				maxProveedor = datos[4][y];
			}
		}

		posicionMayor = datos[4].indexOf(maxProveedor);

		if(maxProveedor == 0){
			resultadoPr.innerHTML = 'No se vendio ningun ticket';
		} else{
			resultadoPr.innerHTML = 'El mayor vendedor de tickets fue: ' + datos[1][posicionMayor] + "    " + datos[2][posicionMayor] + ' con un total de ' + datos[4][posicionMayor] + ' tickets vendidos' + ' por un valor a pagar de ' + datos[5][posicionMayor];			
		}
	}

	function menorProveedor() {	
		var minProveedor = datos[4][0];
		var posicionMayor = 0;
		var totalDinero = 0;
		resultadoPr.innerHTML = '';

		for (var y = 0; y < datos[4].length; y++){
			if (minProveedor > datos[4][y] & datos[4][y] > 0) {
				minProveedor = datos[4][y];
			}			
		}

		for (var y = 0; y < datos[5].length; y++){
			totalDinero = totalDinero + Number(datos[5][y]);
		}

		posicionMayor = datos[4].indexOf(minProveedor);

		if(minProveedor == 0){
			resultadoPr.innerHTML = 'No se vendio ningun ticket';
		} else{
			resultadoPr.innerHTML = 'El menor vendedor de tickets fue: ' + datos[1][posicionMayor] + "    " + datos[2][posicionMayor] + ' con un total de ' + datos[4][posicionMayor] + ' tickets vendidos'+ ' por un valor a pagar de ' + datos[5][posicionMayor];			
		}
	}
	
	function pagoProveedores() {
		var precioFresa = 1000;
		var extraVip = 10;
		resultadoPr.innerHTML = ' ';
		id = Number(proveedoresSlt.value - 1);
		var total = 0;
		var pagoNeto;
		pagoNeto = precioFresa * Number(datos[4][id]);
		if (datos[3][id] === 'VIP') {
			total = pagoNeto + (pagoNeto / 100) * extraVip;
			datos[5][id] = total;
		} else {
			total = pagoNeto;
			datos[5][id] = total;
		}
		datos[5][id] = total;
	}

	function borrarfila(e) {
		if (!e.target.classList.contains("deleteBtn")) {
            return;
        }
        const btn = e.target;
        btn.closest("tr").remove();
	}

	tabla.addEventListener("click", borrarfila);

	function restablecer() {

		for (var y = 0; y < datos[4].length; y++){
			datos[4][y] = 0;
		}

		for (var y = 0; y < datos[5].length; y++){
			datos[5][y] = 0;
		}

		resultadoPr.innerHTML = '';

    }

	registrarBtn.onclick = function registrarBtnOnClick() {
		ingresarFresas();
		pagoProveedores();		
		tablaProveedores();		
		if (cantFresasTxt.value == '') {
			Swal.fire({
				icon: 'error',
				title: 'Error',
				text: 'Debes rellenar los campos solicitados.',
			  })				
		}else{
			Swal.fire({
				position: 'center',
				icon: 'success',
				showConfirmButton: false,
				timer: 1000
			  })
		}			
	}
		
	pagoBtn.onclick = function pagoBtn() {
		pagoProveedores();
	}
	mayorProductorBtn.onclick = function mayorProductorBtnOnclick() {
		mayorProveedor();
	}
	menorProductorBtn.onclick = function menorProductorBtnOnclick() {
		menorProveedor();
	}	
	totalFresasBtn.onclick = function totalFresasBtnOnclick() {
		totalFresasRecolectados();
	}		
	 restablecerBtn.onclick = function restablecerBtnOnClick() {
        restablecer();
		tablaProveedores();
    }
}