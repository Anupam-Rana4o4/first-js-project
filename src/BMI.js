const form=document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault();
 const height=parseInt(document.querySelector('#height').value)
const weight=parseInt(document.querySelector('#weight').value)
const result=document.querySelector('#result');
if(height===''|| height<0||isNaN(height)){
    result.innerHTML="enter Vaild height";
}
else if(weight===''|| weight<0||isNaN(weight)){
    result.innerHTML="enter Vaild weight";
}
else{
   result.innerHTML= (weight/((height*height)/10000)).toFixed(2)
}
})