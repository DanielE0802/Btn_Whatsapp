async function getData() {
    // let url = "https://api.jsonbin.io/b/621bc0f4c4790b3406248418/3"
    let url="./info.json"
    let response = await fetch(url)
    let data = await response.json()
    return data
}

function multiNumbersEvents(){
    const wa_btn_widget = document.getElementById("wa_btn_widget");
    const wa_container_chat = document.getElementById("wa_container_chat")
    const wa_btn_close = document.getElementById("wa_btn_close")
    const wa_img_logo = document.getElementById("wa_img_logo")
    const wa_widget_container = document.getElementById("wa_widget_container")
    const text_wa_popup = document.getElementById("text_wa_popup")

    wa_btn_widget.addEventListener("click", () => {
        wa_container_chat.classList.toggle("active")
        wa_btn_close.classList.toggle("active")
        wa_img_logo.classList.toggle("active")
        wa_widget_container.classList.toggle("active")
    })
}

function oneNumberWA(data){
    const insert_wa = document.getElementById("wa_widget_insert")
    insert_wa.outerHTML = `
    <div class="wa_widget_container animationOneNumber" id="wa_widget_container">
    <div class="wa_container">
    <a href="${data.urlIfOneNumber}" target="_blank">
    <div class="wa_btn_widget" id="wa_btn_widget">
      <div class="wa_btn_logo">
        <img class="wa_img_logo active" id="wa_img_logo" src="whatsapp_logo.svg" alt="" />
      </div>
     
      <div class="wa-btn_text" id="text_wa_popup" style="display: none;">¿necesitas ayuda?</div>
   
    </div>
    </a>
  </div>
  </div>
    `

}

function widgetWA(data) {

    if (data.multiNumbers === true) {

        const insert_wa = document.getElementById("wa_widget_insert")
        insert_wa.outerHTML = `
        <div class="wa_container_chat" id="wa_container_chat">
        <div class="wa_header">
          <div class="text-header">
            <div class="title">${data.title}</div>
            <div class="subtitle">${data.subtitle}</div>
          </div>
         
            <img src="whatsapp_logo.svg" alt="" />
   
        </div>
        <div class="wa_content">
          <div class="wa_content_message">
            ${data.contentMessage}
          </div>

          <div class="wa_links" id="wa_links">    
          </div>
        </div>
      </div>
      <div class="wa_widget_container" id="wa_widget_container">
      <div class="wa_container">
        <a href="#">
        <div class="wa_btn_widget" id="wa_btn_widget">
          <div class="wa_btn_logo">
            <img class="wa_img_logo active" id="wa_img_logo" src="whatsapp_logo.svg" alt="" />
            <div class="wa_btn_close" id="wa_btn_close">
                <img src="x_icon.svg" alt=""/>
            </div>
          </div>
         
          <div class="wa-btn_text" id="text_wa_popup" style="display: none;">¿necesitas ayuda?</div>
       
        </div>
        </a>
      </div>
        `
        multiNumbersEvents()
        linksMultiNumbers(data)
    }else{
        oneNumberWA(data)
    }

}


function linksMultiNumbers(data){
    const wa_links = document.getElementById("wa_links")

    data.numbers.map(element => {
        wa_links.innerHTML += `
        <a href="${element.url}" target="blank">
        <div>
          <div class="wa_link_left">
            <img src="${element.img}" alt="">
          </div>
          <div class="wa_link_center">
            <p> ${element.name} </p>
          </div>
          <div class="wa_link_rigth">
            <img src="whatsapp_logo_green.svg" alt="">
          </div>
        </div>
      </a>
        `
    });
}




document.addEventListener("DOMContentLoaded", async () => {
    let data = {};

    try {
        data = await getData();

        widgetWA(data)


    } catch (e) {
        console.error(`Error: ${e}`)
    }
})