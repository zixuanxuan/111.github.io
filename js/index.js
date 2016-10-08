$(function () {
  var swiper = new Swiper('.swiper-container', {
          pagination: '.swiper-pagination',
          effect: 'flip',
          grabCursor: true,
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev'
      });



  // 人体图切换
  $(".man").click(function () {
    console.log("man");
    $(".body img").attr("src","images/peopleMan@2x.png");
    $(".man").addClass("choose-active");
    $(".woman").removeClass("choose-active");
  });
  $(".woman").click(function () {
    console.log("woman");
    $(".body img").attr("src","images/peopleWoman@2x.png");
    $(".man").removeClass("choose-active");
    $(".woman").addClass("choose-active");
  });
  $(".acute").click(function () {
    $(".acute").addClass("choose-active");
    $(".chronic").removeClass("choose-active")
  })
  $(".chronic").click(function () {
    $(".acute").removeClass("choose-active");
    $(".chronic").addClass("choose-active");
  });

  // // 人体图旋转
  // $(".body-img").click(function () {
  //     console.log($(this).attr("class"));
  //     $(".body-pic").css({
  //         "transform": "rotateY(90deg)",
  //         "transition": "transform 1s"
  //     })
  //     setTimeout(function () {
  //       // $(".body-pic").hide();
  //       $(".body-symptom").css({
  //           "transform": "rotateY(360deg)",
  //           "transition": "transform 1s"
  //       })
  //       $(".beforehand-right").hide();
  //       // $(".beforehand-left").hide();
  //     },1000);
  //     setTimeout(function () {
  //       $(".next-wapper").css({
  //         "transform": "translateY(-5rem)",
  //         "transition": "transform 1s"
  //       })
  //     },2000)
  // })





  // 疾病预诊选项卡
    var count = 0;  //选中项
    var text; //定义点击时的获取的症状
      $(".symptomState span").click(function () {
        //判断有没有选中
          if ($(this).attr("class") == "symptom-active") {   //不选中
            $(this).removeClass("symptom-active");
            count--;
            $(".symptom-choose span").html(count);
            var spans = $(".symptom li span");
            for (var i = 0; i < spans.length; i++) {
              if ($(this).html() == spans.eq(i).html()) {
                  spans.eq(i).parent().remove();
              }
            }
            return;
          } else {
            count++;
            $(".symptom-choose span").html(count);
            text = $(this).html();
            $("<li><span>"+text+"</span><i>x</i></li>").appendTo($(".symptom"))
            $(this).addClass("symptom-active");
            $(".symptom li").click(function () {
              var chooseSymptom = $(".symptomState span");
                $(this).remove();

                for (var i = 0; i < chooseSymptom.length; i++) {
                  if ($(this).children().html() == chooseSymptom.eq(i).html()) {
                      chooseSymptom.eq(i).removeClass("symptom-active")
                  }
                }
                count--;
                if(count<=0) {
                    count = 0;
                }
              $(".symptom-choose span").html(count);
          });
          }

  });




  $(".next-btn").click(function () {
    if (count == 0) {
      alert("请选择症状")
    } else {
       window.location.href="result.html";
    }
  })



  // 返回人体图
  $(".last-btn").click(function () {
    alert("返回");
    $(".next-wapper").css({
      "transform": "translateY(0)",
      "transition": "transform 1s"
    })
    setTimeout(function () {
      $(".body-pic").css({
          "transform": "rotateY(0deg)",
          "transition": "transform 1s"
      })
    },2000);
    setTimeout(function () {
      $(".beforehand-right").show();
      $(".beforehand-left").show();
      $(".body-symptom").css({
          "transform": "rotateY(270deg)",
          "transition": "transform 1s"
      })
    },1000)
  })
var percent = 20;
  // 预诊结果百分比
  if (percent<20) {
      $(".main li img").attr("src","images/per10@2x.png");
  } else if (percent>=20 && percent<30) {
      $(".main li img").attr("src","images/per20@2x.png")
  } else if (percent>=30 && percent<40) {
      $(".main li img").attr("src","images/per30@2x.png")
  } else if (percent>=40 && percent<50) {
      $(".main li img").attr("src","images/per40@2x.png")
  } else if (percent>=50 && percent<60) {
      $(".main li img").attr("src","images/per50@2x.png")
  } else if (percent>=60 && percent<70) {
      $(".main li img").attr("src","images/per60@2x.png")
  } else if (percent>=70 && percent<80) {
      $(".main li img").attr("src","images/per70@2x.png")
  } else if (percent>=80) {
      $(".main li img").attr("src","images/per80@2x.png")
  }

  // 预诊评价
  var assess = 0;
  $("footer span").click(function(){
      assess++;
      if (assess == 1) {
        $(".access").show();
        setTimeout(function () {
          $(".access").hide();
        },2000)
        $("footer span").removeClass("assess-active");
        $(this).addClass("assess-active");
      } else if (assess > 1) {
        $(".noagain").show();
        setTimeout(function () {
          $(".noagain").hide();
        },2000)
      }

      console.log($(this).html());

  })


  // 诊断列表
  $(".symptom-list ul li").click(function () {
      $(".symptom-list ul li").removeClass("symptomt-active");
      $(this).addClass("symptomt-active");
  })
  $(".symptom-content-list li").click(function () {
    $(".symptom-content-list li").removeClass("symptom-content-list-active");
    $(this).addClass("symptom-content-list-active");
  })
})
