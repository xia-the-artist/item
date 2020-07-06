let baseUrl = "http://localhost/JS2002/xmdior/dior"; // 基础路径 必须是绝对路径

define(['jquery'], function($) {
    return {
        render: function() {
            $.ajax({
                type: "get",
                url: `${baseUrl}/php/getall2.php`,
                dataType: "json",
                success: function(res) {
                    console.log(res);
                    let temp = '';
                    res.forEach(elm => {
                        // console.log(elm.pic);
                        let pic = JSON.parse(elm.pic);
                        // console.log(pic);
                        temp += `    
                        
                        <li class="universe-card" style="margin-right:20px;">
                        <a href="${baseUrl}/details.html?id=${elm.id}">
                            <div class="image" style="display:table;position:relative;width:100%;padding-bottom:108.12143227815257%;overflow:hidden">
                                <div class="lazyload-placeholder">
                                </div> <img src="${baseUrl}/${pic[0].src}" alt="${baseUrl}/${pic[0].title}" style=" position: absolute; width: 100%; top: 0; left: 0;"
                                /></div>
                            <div class="universe-card-text">
                                <h3 class="title-with-level universe-card-title font-century-std size-m uppercase"><span class="multiline-text multiline-text--is-china">${elm.title}  ￥${elm.price}</span></h3>
                            </div>
                        </a>
                    </li>
                                            
                     `;
                    });

                    $('.xiaotu').html(temp);

                    console.log(123);

                }
            });
        }
    }
});