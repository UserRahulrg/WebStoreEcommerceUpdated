
//From here there starts javascript script

var arr_customer=[];
var var_id=document.getElementById('txtid');
var var_name=document.getElementById('txtname');
var var_address=document.getElementById('txtaddress');
var var_mobileno=document.getElementById('txtmobileno');
var var_image=images/Basic_tshirt.jpeg;
//var var_image=document.getElementById('first_image');            //
var var_Table=document.getElementById('customer');
var heading=document.getElementById('headingtime');





function add_customer(var_image)
{
    alert("add_customer is working correctly");
    let objcust={image:var_image};
    arr_customer.push(objcust);
    //alert('Image Added Successfully!');
    addCustomerInTable(objcust);
}

function addCustomerInTable(objcust)
{
    alert("addCustomerinTable is working correctly");
    var varTableTr=document.createElement('tr');    
    varTableTr.setAttribute('id','tr_'+objcust.id.toString());


    var varTdRemove=document.createElement('td');
    var varBtnRemove=document.createElement('button');
    var varTextRemove=document.createTextNode('Remove');
    //varTextRemove.setAttribute('id',idd());
    varBtnRemove.appendChild(varTextRemove);
    varTdRemove.appendChild(varBtnRemove);
    varTableTr.appendChild(varTdRemove);




    var varTdImage=document.createElement('td');
    var varTdImage_data_1=document.createElement('img');
    varTdImage_data_1.setAttribute('src',objcust.image);
    varTdImage_data_1.setAttribute('width','90px');
    varTdImage.appendChild(varTdImage_data_1);
    varTableTr.appendChild(varTdImage);
    var_Table.appendChild(varTableTr);
}

function java_check()
{
    alert('Hello user!!javascript is working properly');
}

function add_to_cart(idvalue){           //edit here
    if(idvalue == 'item_1'){
        alert("btnadd_click is working correctly");
        // let id=parseInt(var_id.value);
        // let name=var_name.value;
        // let address=var_address.value;
        // let mobileno=parseInt(var_mobileno.value);
        let image=var_image.value;
        var reader=new FileReader();
        reader.onload=function(){
            var image=reader.result;
            add_customer(image);
        }
        //add_customer(id,name,address,mobileno);
        reader.readAsDataURL(var_image.files[0]);
    
        alert('Customer Added Successfully!!');
    }
    else if(idvalue == 'item_2'){
        alert('item_2');
        cart_icon_change();
    }
    else if(idvalue == 'item_3'){
        alert('item_3')        ;
        cart_icon_change();
    }
    else if(idvalue == 'item_4'){
        alert('item_4');
        cart_icon_change();
    }  
    else if(idvalue == 'item_5'){
        alert('item_5');
        cart_icon_change();
    } 
    else if(idvalue == 'item_6'){
        alert('item_6');
        cart_icon_change();
    }
    else if (idvalue == 'item_7'){
        alert('item_7');
        cart_icon_change();
    }
    else if (idvalue == 'item_8'){
        alert('item_8');
        cart_icon_change();
    }
    else if(idvalue == 'item_9'){
        alert('item_9');
        cart_icon_change();
    }
    else if(idvalue == 'item_10'){
        alert('item_10');
        cart_icon_change();
    } 
    else if(idvalue == 'item_11'){
        alert('item_11');
        cart_icon_change();
    }
    else if(idvalue == 'item_12'){
        alert('item_12');
        cart_icon_change();
    }
    else if(idvalue == 'item_13'){
        alert('item_13');
        cart_icon_change();
    }
    else if(idvalue == 'item_14'){
        alert('item_14');
        cart_icon_change();
    }
    else if(idvalue == 'item_15'){
        alert('item_15');
        cart_icon_change();
    }
    else if(idvalue == 'item_16'){
        alert('item_16');
        cart_icon_change();
    }
    else if(idvalue == 'item_17'){
        alert('item_17');
        cart_icon_change();
    }
    else if(idvalue == 'item_18'){
        alert('item_18');
        cart_icon_change();
    }

    else if(idvalue == 'item_40'){
        alert('item_40');
        cart_icon_change();
    }
    alert("Item added to Cart");
}

function cart_icon_change(name,price){
    //document.getElementById(cart_logo_name).style.textDecoration='yellow';
    var varTableTr=document.createElement('tr');    
    varTableTr.setAttribute('id','tr_'+objcust.id.toString());


    var varTdRemove=document.createElement('td');
    var varBtnRemove=document.createElement('button');
    var varTextRemove=document.createTextNode('Remove');
    //varTextRemove.setAttribute('id',idd());
    varBtnRemove.appendChild(varTextRemove);
    varTdRemove.appendChild(varBtnRemove);
    varTableTr.appendChild(varTdRemove);
}

function cart_item_page(){
    //resp=render(request,'search_student.html')
    alert('Cart is working properly!!')
    return ;
}

function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    const clock = document.getElementById('clock');
    clock.innerHTML = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  
    function pad(number) {
      return (number < 10 ? '0' : '') + number;
    }
  }
  
  setInterval(updateClock, 1000);
  
  updateClock();




