

$(document).ready(function() {
    fetch("http://spartacodingclub.shop/sparta_api/weather/seoul").then(res => res.json()).then(data => {
    
    let rows = data['temp']
       
        $('#temp').empty()

        let temp_html = ``

        if (rows < -5) {
            temp_html += `${rows}도
                          <h5 class="cold">매우 추움</h5>`
        } else if (rows < 8) {
            temp_html = `${rows}도
                         <h5 class="cold">추움</h5>`
        } else if (rows < 23) {
            temp_html = `${rows}도
                         <h5 class="cold">그럭저럭</h5>`
        } else if (rows >= 23) {
            temp_html = `${rows}도
                         <h5 class="cold">더움</h5>`
        } else {
            temp_html = `${rows}도`
        }
       
        $('#temp').append(temp_html)
        
    })
})
