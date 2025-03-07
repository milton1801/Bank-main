document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded and parsed');

  document.querySelector('.featured').addEventListener('click', function() {
    console.log('Featured button clicked');
    const t1Element = document.querySelector('.t1');
    const t2Element = document.querySelector('.t2');
    const t3Element = document.querySelector('.t3');
    const t4Element =document.querySelector('.t4');
    const t5Element =document.querySelector('.t5');
    if (t1Element) {
      t1Element.style.display = 'block';
    }
    if (t2Element) {
      t2Element.style.display = 'none';
    }
    if (t3Element) {
      t3Element.style.display = 'none';
    }
    if (t4Element){
      t4Element.style.display ='none';
    }
    if (t5Element){
      t5Element.style.display ='none';
    }
  });

  document.querySelector('.travel').addEventListener('click', function() {
    console.log('Travel button clicked');
    const t1Element = document.querySelector('.t1');
    const t2Element = document.querySelector('.t2');
    const t3Element = document.querySelector('.t3');
    const t4Element =document.querySelector('.t4');
    const t5Element =document.querySelector('.t5');
    if (t1Element) {
      t1Element.style.display = 'none';
    }
    if (t2Element) {
      t2Element.style.display = 'block';
    }
    if (t3Element) {
      t3Element.style.display = 'none';
    }
    if (t4Element){
      t4Element.style.display ='none';
    }
    if (t5Element){
      t5Element.style.display ='none';
    }
  });

  document.querySelector('.cash').addEventListener('click', function() {
    console.log('Cash button clicked');
    const t1Element = document.querySelector('.t1');
    const t2Element = document.querySelector('.t2');
    const t3Element = document.querySelector('.t3');
    const t4Element =document.querySelector('.t4');
    const t5Element =document.querySelector('.t5');
    if (t1Element) {
      t1Element.style.display = 'none';
    }
    if (t2Element) {
      t2Element.style.display = 'none';
    }
    if (t3Element) {
      t3Element.style.display = 'block';
    }
    if (t4Element){
      t4Element.style.display ='none';
    }
    if (t5Element){
      t5Element.style.display ='none';
    }
  });
  document.querySelector('.rewards').addEventListener('click', function() {
    console.log('Rewards button clicked');
    const t1Element = document.querySelector('.t1');
    const t2Element = document.querySelector('.t2');
    const t3Element = document.querySelector('.t3');
    const t4Element =document.querySelector('.t4');
    const t5Element =document.querySelector('.t5');
    if (t1Element) {
      t1Element.style.display = 'none';
    }
    if (t2Element) {
      t2Element.style.display = 'none';
    }
    if (t3Element) {
      t3Element.style.display = 'none';
    }
    if (t4Element){
      t4Element.style.display ='block';
    }
    if (t5Element){
      t5Element.style.display ='none';
    }
  });
  document.querySelector('.busi').addEventListener('click', function() {
    console.log('Busi button clicked');
    const t1Element = document.querySelector('.t1');
    const t2Element = document.querySelector('.t2');
    const t3Element = document.querySelector('.t3');
    const t4Element =document.querySelector('.t4');
    const t5Element =document.querySelector('.t5');
    if (t1Element) {
      t1Element.style.display = 'none';
    }
    if (t2Element) {
      t2Element.style.display = 'none';
    }
    if (t3Element) {
      t3Element.style.display = 'none';
    }
    if (t4Element){
      t4Element.style.display ='none';
    }
    if (t5Element){
      t5Element.style.display ='block';
    }
  });
});
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded and parsed');

  // Fix the selector and add event listener
  document.querySelector('#every-day').addEventListener('click', function() {
    console.log('Every Day button clicked');

    // Select elements
    const text1Element = document.querySelector('.text1');
    const text2Element = document.querySelector('.text2');
    const text3Element = document.querySelector('.text3');
    const text4Element = document.querySelector('.text4');

    // text1 and text2
    if (text1Element) text1Element.style.display = 'none';
    if (text2Element) text2Element.style.display = 'none';

    //  text3 and text4
    if (text3Element) text3Element.style.display = 'block';
    if (text4Element) text4Element.style.display = 'block';
  });
  document.querySelector('#how').addEventListener('click', function() {
    console.log('How button clicked');
   // Select elements
   const text1Element = document.querySelector('.text1');
   const text2Element = document.querySelector('.text2');
   const text3Element = document.querySelector('.text3');
   const text4Element = document.querySelector('.text4');

   // text1 and text2
   if (text1Element) text1Element.style.display = 'block';
   if (text2Element) text2Element.style.display = 'block';

   //  text3 and text4
   if (text3Element) text3Element.style.display = 'none';
   if (text4Element) text4Element.style.display = 'none';
 });
});
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded and parsed');
document.querySelector('#everyday').addEventListener('click', function() {
  console.log('Every Day button clicked');

  // Select elements
  
  const text1Element = document.querySelector('.text5');
  const text2Element = document.querySelector('.text6');
  const text3Element = document.querySelector('.text7');
  const text4Element = document.querySelector('.text8');

  // text1 and text2
  if (text1Element) text1Element.style.display = 'none';
  if (text2Element) text2Element.style.display = 'none';

  //  text3 and text4
  if (text3Element) text3Element.style.display = 'block';
  if (text4Element) text4Element.style.display = 'block';
});
document.querySelector('#ho').addEventListener('click', function() {
  console.log('How button clicked');
 // Select elements
 const text1Element = document.querySelector('.text5');
 const text2Element = document.querySelector('.text6');
 const text3Element = document.querySelector('.text7');
 const text4Element = document.querySelector('.text8');

 // text1 and text2
 if (text1Element) text1Element.style.display = 'block';
 if (text2Element) text2Element.style.display = 'block';

 //  text3 and text4
 if (text3Element) text3Element.style.display = 'none';
 if (text4Element) text4Element.style.display = 'none';
});
});
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded and parsed');
document.querySelector('#ever-day').addEventListener('click', function() {
  console.log('Every Day button clicked');

  // Select elements
  
  const text1Element = document.querySelector('.text9');
  const text2Element = document.querySelector('.text10');
  const text3Element = document.querySelector('.text11');
  const text4Element = document.querySelector('.text12');

  // text1 and text2
  if (text1Element) text1Element.style.display = 'none';
  if (text2Element) text2Element.style.display = 'none';

  //  text3 and text4
  if (text3Element) text3Element.style.display = 'block';
  if (text4Element) text4Element.style.display = 'block';
});
document.querySelector('#h').addEventListener('click', function() {
  console.log('How button clicked');
 // Select elements
 const text1Element = document.querySelector('.text9');
 const text2Element = document.querySelector('.text10');
 const text3Element = document.querySelector('.text11');
 const text4Element = document.querySelector('.text12');

 // text1 and text2
 if (text1Element) text1Element.style.display = 'block';
 if (text2Element) text2Element.style.display = 'block';

 //  text11 and text12
 if (text3Element) text3Element.style.display = 'none';
 if (text4Element) text4Element.style.display = 'none';
});
});

