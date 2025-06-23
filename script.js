document.getElementById('formulario').addEventListener('submit', function(e) {
  e.preventDefault()

  let nombre = document.getElementById('nombre').value
  let sintomas = document.getElementById('sintomas').value
  let otro = document.getElementById('otro').value

  console.log('Nombre:', nombre)
  console.log('Sintomas:', sintomas)
  console.log('Otros:', otro)

  document.getElementById('formulario').style.display = 'none'
  document.getElementById('confirmacion').style.display = 'block'
})
