const form = document.getElementById("contactForm");
form.addEventListener("submit", function(e){
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value;
    const motivo = document.getElementById("motivo").value;
    const mensagem = document.getElementById("mensagem").value;
    
    const texto = 'Olá, meu nome é ${nome}.%0A' +
                  'Telefone: ${telefone}%0A' +
                  'E-mail: ${email}%0A +'
                  'Motivo: ${motivo}%0A' +
                  'Mensagem: ${mensagem}';
   
    const telefoneWhatsApp = "5571933781425"; 
    const url = 'https://wa.me/${telefoneWhatsApp}?text=${texto}';
  
    window.open(url,"_blank");
  });