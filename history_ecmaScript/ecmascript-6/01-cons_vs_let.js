const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
  console.log(materials.map(material => material));
  // expected output: Array [8, 6, 7, 9]

  // Función flecha
  let bob = a => a + 100;
  //cuadrado de un numero
  function square(num){
      return num * num;
  }
  console.log(square(10));
  const square2 = (num) => {
      return num * num;
  }
  console.log(square2(6));

  
  const square3 = num => num * num;
  console.log(square3(4));
  

