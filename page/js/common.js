$(function() {

  $('form').submit(function (e) { //устанавливаем событие отправки для формы с id=form
    e.preventDefault();
    var $data = $( this ).serialize();
    // $( this ).find ('input').each(function() {
    //     // добавим новое свойство к объекту $data
    //     // имя свойства – значение атрибута name элемента
    //     // значение свойства – значение свойство value элемента
    //     if ( (this.type === 'radio' && this.checked ) || (this.type === 'checkbox' && this.checked) ) {
    //         $data += '<tr><td>' + this.name + '</td><td>'  + this.value + '</td></tr>';
    //     } else if ( this.type !== 'radio' && this.type !== 'checkbox' ) {
    //         $data += '<tr><td>' + this.name + '</td><td>'  + this.value + '</td></tr>';
    //     }
    // });

    console.log($data);
    
    $.ajax({
        type: "POST", //Метод отправки
        url: "https://api.qub.kz/feedback/feedback/create", //путь до php фаила отправителя
        data: $data,
        success: function () {
          $.fancybox.close();
          setTimeout(function() {
              $.fancybox.open({
                src  : '#success-modal',
                type : 'inline',
                opts : {
                  afterShow : function( instance, current ) {
                    console.info( 'Success!' );
                  }
                }
              });
          }, 700);
        }
    });
    return false;
});

	// *********************************** Sidebar
  $( "#sidebar" ).simplerSidebar( {
      align: 'left',
      init: 'closed',
      selectors: {
          trigger: ".hamburger",
          quitter: ".close-sidebar"
      }
  });
  // *********************************** Sidebar

  // *****************************************Fancybox settings
    $.fancybox.defaults.autoFocus = false;
    $.fancybox.defaults.animationEffect = "fade";
    $.fancybox.defaults.animationDuration = 1000;
  // *****************************************Fancybox settings

	// *****************************************Anchor & Close mmenu
    $(".anchor").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    // *****************************************Anchor & Close mmenu

    // *****************************************Mask input
      $('.tel-mask').mask("+7(999) 999-9999");
    // *****************************************Mask input
		
		// *****************************************Fancybox settings
    $.fancybox.defaults.autoFocus = false;
    $.fancybox.defaults.animationEffect = "fade";
    $.fancybox.defaults.animationDuration = 1000;
    // *****************************************Fancybox settings

});

