let lst = ['x','o','x','o','x','o','x','o','x'];
let span = document.querySelectorAll('span');
let count = 0;
let ver1 = '';
let ver2 = '';
let ver3 = '';
// horizontal
let hor1 = '';
let hor2 = '';
let hor3 = '';
// left
let left = '';
// rigiht
let rigiht = '';
span.forEach((i)=>{
  i.addEventListener('click',e =>{
    if(!e.target.textContent){
      e.target.textContent = lst[count];
      count++;
    }
    span.forEach(function(item){
      // vertical
      if(item.classList.contains('ver1') && item.textContent){
        ver1 += item.textContent;
        item.classList.remove('ver1');
        let result = ver1[0] == ver1[1] && ver1[0] == ver1[2];
        if(result)end(item.textContent); 
      }
      if(item.classList.contains('ver2') && item.textContent){
        ver2 += item.textContent;
        item.classList.remove('ver2');
        let result = ver2[0] == ver2[1] && ver2[0] == ver2[2];
        if(result)end(item.textContent); 
      }
      if(item.classList.contains('ver3') && item.textContent){
        ver3 += item.textContent;
        item.classList.remove('ver3');
        let result = ver3[0] == ver3[1] && ver3[0] == ver3[2];
        if(result)end(item.textContent); 
      }
      // horizontal
      if(item.classList.contains('hor1') && item.textContent){
        hor1 += item.textContent;
        item.classList.remove('hor1');
        let result = hor1[0] == hor1[1] && hor1[0] == hor1[2];
        if(result)end(item.textContent); 
      }
      if(item.classList.contains('hor2') && item.textContent){
        hor2 += item.textContent;
        item.classList.remove('hor2');
        let result = hor2[0] == hor2[1] && hor2[0] == hor2[2];
        if(result)end(item.textContent); 
      }
      if(item.classList.contains('hor3') && item.textContent){
        hor3 += item.textContent;
        item.classList.remove('hor3');
        let result = hor3[0] == hor3[1] && hor3[0] == hor3[2];
        if(result)end(item.textContent); 
      }
      // left
      if(item.classList.contains('left') && item.textContent){
        left += item.textContent;
        item.classList.remove('left');
        let result = left[0] == left[1] && left[0] == left[2];
        if(result)end(item.textContent); 
      }
      // rigiht
      if(item.classList.contains('rigiht') && item.textContent){
        rigiht += item.textContent;
        item.classList.remove('rigiht');
        let result = rigiht[0] == rigiht[1] && rigiht[0] == rigiht[2];
        if(result)end(item.textContent); 
      }
    });
  });
});
function end(el){
  document.querySelector('.mod').classList.add('block');
  document.querySelector('.win').textContent = el;
}
