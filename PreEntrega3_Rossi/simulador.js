document.addEventListener('DOMContentLoaded', function () {
  const usuario = {};

  const formulario = document.getElementById('formulario');
  const motivoPrestamoForm = document.getElementById('motivoPrestamoForm');
  const cantidadDineroForm = document.getElementById('cantidadDineroForm');
  const cantidadCuotasForm = document.getElementById('cantidadCuotasForm');
  const resultado = document.getElementById('resultado');

  const botonSiguiente = document.getElementById('botonSiguiente');
  const botonSiguiente2 = document.getElementById('botonSiguiente2');
  const botonSiguiente3 = document.getElementById('botonSiguiente3');
  const botonSiguiente4 = document.getElementById('botonSiguiente4');

  botonSiguiente.addEventListener('click', function () {
      usuario.nombre_completo = document.getElementById('nombreCompleto').value || '';
      usuario.dni = parseInt(document.getElementById('dni').value) || '';
      usuario.edad = parseInt(document.getElementById('edad').value) || '';

      formulario.style.display = 'none';
      motivoPrestamoForm.style.display = 'block';
  });

  botonSiguiente2.addEventListener('click', function () {
      usuario.motivo_prestamo = document.getElementById('motivoPrestamo').value;

      motivoPrestamoForm.style.display = 'none';
      cantidadDineroForm.style.display = 'block';
  });

  botonSiguiente3.addEventListener('click', function () {
      usuario.cantidad_dinero = parseInt(document.getElementById('cantidadDinero').value);

      cantidadDineroForm.style.display = 'none';
      cantidadCuotasForm.style.display = 'block';
  });

  botonSiguiente4.addEventListener('click', function () {
      usuario.cantidad_cuotas = parseInt(document.getElementById('cantidadCuotas').value);

      cantidadCuotasForm.style.display = 'none';
      mostrarResultado();
  });

  function mostrarResultado() {
      const cotizacion = calcularPrestamo();
      resultado.style.display = 'block';
      resultado.innerHTML = `${usuario.nombre_completo}, por tu préstamo para comprar tu ${usuario.motivo_prestamo}, vas a abonar ${usuario.cantidad_cuotas} cuotas de $${cotizacion.toFixed(2)}`;
  }

  function calcularPrestamo() {
      const recargo_motivo = {
          "auto": 0.5,
          "moto": 0.4,
          "casa": 0.9
      };
      const iva = 1.21;
      return (usuario.cantidad_dinero * recargo_motivo[usuario.motivo_prestamo]) / (usuario.cantidad_cuotas * iva);
  }
});
