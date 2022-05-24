
 function getProductItems(product,price,isTrue){
      const productInput = document.getElementById(product +'-input');
      const productPrice = document.getElementById(product + '-price');
     const productInputNumber = parseInt(productInput.value);
     
    if(isTrue == true){
        
         productInput.value = productInputNumber + 1;
    }else if(isTrue == false){
        if(productInputNumber > 0){
       productInput.value = productInputNumber - 1;
         
    }
    }

    productPrice.innerText = productInput.value * price;

    getCalculation();
 }

 

function getInput(product){
     const phoneInput = document.getElementById(product + '-input').value;
     return phoneInput;

}


 function getCalculation(){
     
    
     const phoneTotal = getInput('phone')*1219 ;
     const caseTotal = getInput('case')*59;

     const subTotal = phoneTotal + caseTotal;
     const tax = subTotal / 10;
     const totalPrice  = subTotal+ tax;

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
     
 }
  
document.getElementById('phone-plus').addEventListener('click',function(){
    

    getProductItems('phone',1219,true);
    
});

document.getElementById('phone-minus').addEventListener('click',function(){
  
    getProductItems('phone',1219,false);
    
});
document.getElementById('case-plus').addEventListener('click',function(){
  
    getProductItems('case',59,true);
    
});
document.getElementById('case-minus').addEventListener('click',function(){
  
    getProductItems('case',59,false);
    
});