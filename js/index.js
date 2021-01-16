let perfilModal=document.querySelector(".perfil");

let objetivoModal=document.querySelector(".obetivo");

let formacaoModal=document.querySelector(".formacao");

let experiModal = document.querySelector(".experiencia");

let habiModal = document.querySelector(".hab-ferr");

let cursoModal = document.querySelector(".cursos");

let medelPrincipal= document.querySelector(".cont-principal");


function perfil(){
   if(perfilModal.style.display="none"){
       perfilModal.style.display="flex";
       objetivoModal.style.display="none";
       formacaoModal.style.display="none";
       experiModal.style.display="none";
       habiModal.style.display="none";
       cursoModal.style.display="none"
       fechar();
   }else{
       perfilModal.style.display="none";
   }
    
}

function objetivo(){
    if(objetivoModal.style.display="none"){
        objetivoModal.style.display="flex";
        perfilModal.style.display="none";
        formacaoModal.style.display="none";
        experiModal.style.display="none";
        habiModal.style.display="none";
        cursoModal.style.display="none"
        fechar();
    }else{
        objetivoModal.style.display="flex";
    }
   

}


function formacao(){
    if(formacaoModal.style.display="none"){
        formacaoModal.style.display="block";
        perfilModal.style.display="none";
        objetivoModal.style.display="none";
        experiModal.style.display="none";
        habiModal.style.display="none";
        cursoModal.style.display="none"
        fechar();

    }else{
        formacaoModal.style.display="none";
    }

}


function experiencia(){
    if(experiModal.style.display="none"){
        experiModal.style.display="block";
        perfilModal.style.display="none";
        objetivoModal.style.display="none";
        formacaoModal.style.display="none";
        habiModal.style.display="none";
        cursoModal.style.display="none"
        fechar();
    }else{
        experiModal.style.display="none";
    }


}


function habilidades(){
    if(habiModal.style.display="none"){
        habiModal.style.display="block"
        perfilModal.style.display="none";
        objetivoModal.style.display="none";
        formacaoModal.style.display="none";
        experiModal.style.display="none";
        cursoModal.style.display="none"

        fechar();
    }else{
        habiModal.style.display="none";
    }

}



function cursos(){

    if(cursoModal.style.display="none"){
        cursoModal.style.display="flex";
        perfilModal.style.display="none";
        objetivoModal.style.display="none";
        formacaoModal.style.display="none";
        experiModal.style.display="none";
        habiModal.style.display="none";

        fechar();
    }else{
        cursoModal.style.display="none"
    }
}




// funcior aparecer o modal princial

 function fechar(){
     let fechaPrincial = document.querySelector(".cont-principal");
     fechaPrincial.style.width='0px';
     
 }

 function home(){
     let abrir = document.querySelector(".cont-principal");
     abrir.style.width="1000px";
     perfilModal.style.display="none";
    objetivoModal.style.display="none";
    formacaoModal.style.display="none";
    experiModal.style.display="none";
    habiModal.style.display="none";
    cursoModal.style.display="none"
 }

