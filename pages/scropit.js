window.onload = function domElements(){
 var optionSpecies = document.getElementsByClassName('mainoption')

    for(let option of optionSpecies){
        option.addEventListener("click", show)
    }

    $(".fa-bars").hover(function(){
        $("#dropdown-content").slideDown('fast');
    });
    $(".fa-bars").on( "mouseout", function(){
        $("#dropdown-content").slideUp('fast');
    } )


    $(".button2").click(function (e) { 

        let x = $(".effect-1")
        var nom = $('#nom')
        console.log(nom)
        var prenom = $('#prenom')
        var phone = $('#phone')
        var nom2 = $('#nom2')

        if (nom.val() == ""){
            console.log('t')
            var nameErrorMsg= '<h3 id="name">please enter name</h3>'
            nom.parent().after(nameErrorMsg)
        }
        if (prenom.val() == ""){
            prenom.parent().append(nameErrorMsg)
        }       
        if (phone.val() == ""){
            phone.parent().append(nameErrorMsg)
        }        
        if (nom2.val() == ""){
            nom2.parent().append(nameErrorMsg)
        }
        else{
            for(let a of $('.effect-1'))
            a.innerHTML.remove('h3')
        }
              
    });
   
}

// function hideOption(){   

//     var allOptions = getElementsByClassName('optionChild')
//     for( var option in allOptions){
//         if( option.style.getPropertyValue("display") =='block'){
//             option.style.getPropertyValue("display") ='none'
//         }
//         else{
//             continue
//         }
//     }
// }


function show(e) {

    var optionClicked = e.target ;
    console.log(optionClicked)
    let optionChild = optionClicked.parentNode.parentNode.getElementsByClassName("optionChild")[0]
    optionChild.classList.toggle('optionChildHiden');        
    // hideOption()

}

function validateForm() {

    let x = getElementsByClassName('effect-1').value
    if (x == "") {
      alert("must be filled out");
      return false;
    }

}   
