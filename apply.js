document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('l4').addEventListener('blur', function() {
    var inputField = document.getElementById('l4');
    var errorDiv = document.querySelector('.error1');
    if (inputField.value.trim() === '') {
        errorDiv.style.display = 'flex';
    } else {
        errorDiv.style.display = 'none';
    }
  });
  document.getElementById("l6").addEventListener('blur',function(){
    var inputField = document.getElementById('l6');
    var errorDiv = document.querySelector('.error2');
    if (inputField.value.trim() === '') {
       errorDiv.style.display='flex';
    } else {
       errorDiv.style.display='none';
    }
  });
});
document.addEventListener('DOMContentLoaded', function() {
  function updateFn1() {
    var firstName = document.getElementById('l4').value.trim();
    var middleInitial = document.getElementById('l5').value.trim();
    document.getElementById('fn1').value = firstName + ' ' + middleInitial;
  }
  function updateLn1(){
    var lastName = document.getElementById('l6').value.trim();
    document.getElementById('ln1').value=lastName
  }

  document.getElementById('l4').addEventListener('input', updateFn1);
  document.getElementById('l5').addEventListener('input', updateFn1);
  document.getElementById('l6').addEventListener('input' , updateLn1); 


});

document.addEventListener('DOMContentLoaded', function() {
  var dateInput = document.getElementById('date1');

  if (dateInput) {
    dateInput.addEventListener('blur', function() {
      var inputField = document.getElementById('date1');
      var errorDiv = document.querySelector('.error3');
      if (inputField.value.trim() === '') {
          errorDiv.style.display = 'flex';
      } else {
          errorDiv.style.display = 'none';
      }
    });
  } else {
    console.error('Element with ID "date" not found.');
  }
});
document.addEventListener('DOMContentLoaded', function() {
  var dateInput = document.getElementById('date1');
  if (dateInput) {
    dateInput.addEventListener('blur', function() {
      var inputField = document.getElementById('date1');
      var errorDiv = document.querySelector('.error305');
      var dateValue = inputField.value.trim();
      
      if (dateValue === '') {
          errorDiv.style.display = 'flex';
      } else {
          var dateParts = dateValue.split('/'); // The date format is MM/DD/YYYY
          var month = parseInt(dateParts[0], 10);
          
          if (month > 12) {
              errorDiv.style.display = 'flex';
          } else {
              errorDiv.style.display = 'none';
          }
      }
    });
  } else {
    console.error('Element with ID "date" not found.');
  }

});
document.addEventListener('DOMContentLoaded', function() {
  var dateInput = document.getElementById('date1');
  if (dateInput) {
    dateInput.addEventListener('blur', function() {
      var inputField = document.getElementById('date1');
      var errorDiv = document.querySelector('.error310');
      var dateValue = inputField.value.trim();
      
      if (dateValue === '') {
        errorDiv.style.display = 'flex';
      } else {
        var dateParts = dateValue.split('/');
        var day = parseInt(dateParts[1], 10);

        if (day > 31) {
          errorDiv.style.display = 'flex';
        } else {
          errorDiv.style.display = 'none';
        }
      }
    });
  } else {
    console.error('Element with ID "date1" not found.');
  }
});
document.addEventListener('DOMContentLoaded', function() {
  var dateInput = document.getElementById('date1');
  if (dateInput) {
    dateInput.addEventListener('blur', function() {
      var inputField = document.getElementById('date1');
      var errorDiv = document.querySelector('.error315');
      var dateValue = inputField.value.trim();
      
      if (dateValue === '') {
        errorDiv.style.display = 'flex';
      } else {
        var dateParts = dateValue.split('/');
        var year = parseInt(dateParts[2], 10); // Extract the year part

        if (year > 2007) {
          errorDiv.style.display = 'flex';
        } else {
          errorDiv.style.display = 'none';
        }
      }
    });
  } else {
    console.error('Element with ID "date1" not found.');
  }
});
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('email1').addEventListener('blur', function() {
    var inputField = document.getElementById('email1');
    var errorDiv = document.querySelector('.error4');
    if (inputField.value.trim() === '') {
        errorDiv.style.display = 'flex';
    } else {
        errorDiv.style.display = 'none';
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Phone number validation
  document.getElementById('phone1').addEventListener('blur', function() {
    var inputField = document.getElementById('phone1');
    var errorDiv = document.querySelector('.error5');
    if (inputField.value.trim() === '') {
      errorDiv.style.display = 'flex';
    } else {
      errorDiv.style.display = 'none';
    }
  });
});


 
