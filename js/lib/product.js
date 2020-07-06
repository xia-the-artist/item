let baseUrl = "http://localhost/JS2002/xmdior/dior";

define(['jquery'], function($) {
    return {
        render: function() {
            let id = location.search.split("=")[1];
            // console.log(id);
            $.ajax({
                type: "get",
                url: `${baseUrl}/php/getitem.php`,
                data: {
                    id: id
                },
                dataType: "json",
                success: function(res) {
                    console.log(res);
                    // res = JSON.parse(res);
                    console.log(res.pic);
                    let pic = JSON.parse(res.pic);
                    // console.log(pic);



                    let temp = `
                    
                    <div>
                        <img src="${baseUrl}/${pic[0].src}" alt="${pic.title} style="position: absolute; width: 100%; top: 0; left: 0;">
                   
                       
                    </div>
                    `;
                    let titles = `
                    
                    <h1>
                    <span class="multiline-text product-titles-title multiline-text--is-china">${res.title} </span>

                    </h1>
                    `;
                    let price = `
                    <span class="variation-option-price" style="text-align:center;font-size: 25px;!important">￥${res.price}</span>
                    `
                    console.log(temp);
                    $(".product-media__image").append(temp);
                    $(".product-titles").append(titles);
                    $(".variation-option").append(price);


                }
            });
        },

    }
});