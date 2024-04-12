function validPassword(password) {
    const leng = password.length; // corrección en la variable length
  
    if (leng >= 3 && leng <= 20) { // corregido para incluir el límite superior de 20 caracteres
      if (!/[A-Z]/.test(password)) {
        return "INVALID PASSWORD NO CAPITAL LETTER";
      }
      if (!/[a-z]/.test(password)) {
        return "INVALID PASSWORD NO LOWERCASE LETTER";
      }
      if (!/[0-9]/.test(password)) {
        return "INVALID PASSWORD NO NUMBER";
      }
      return "VALID";
    } else {
      return "INVALID PASSWORD - it should contain 3-20 characters";
    }
  }
  
  module.exports = {
    validPassword
  };

/* 
/: Indican el comienzo y el final de la expresión regular.
\W: Esto coincide con cualquier carácter que no sea alfanumérico (es decir, no coincide con letras, números o guiones bajos). 
d: digitos
g: Modificador que indica que la búsqueda debe ser global, aplicará a toda la cadena de entrada y no se detendrá después de encontrar la primera coincidencia.
! : debe existir almenos un parametro como el indicado a continuación */
