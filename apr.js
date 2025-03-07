
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('in').addEventListener('click', function() {
    var income = parseFloat(document.getElementById('in1').value);
    if (income > 30000) {
      document.querySelector('#th').style.display = 'block';
      document.querySelector('#th2').style.display = 'none';
    } else {
      document.querySelector('#th').style.display = 'none';
      document.querySelector('#th2').style.display = 'block';
    }
  });
});