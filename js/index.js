$(function () {
  var swiper = new Swiper('.swiper-container', {
          pagination: '.swiper-pagination',
          effect: 'flip',
          grabCursor: true,
          nextButton: '.body-img',
          prevButton: '.last-btn'
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
  // 人体图旋转

  var tra = $(".symptomState").height();  //获取所有症状的高度
  console.log(tra/100);
  $(".body-img").click(function () {
      console.log($(this).attr("id"));
      var symptomId = $(this).attr("id");
      $(".symptom-top li").removeClass("symptom-top-active");
      //  根据获取的id值高亮显示部位
      if (symptomId == "head" || symptomId == "head1") {
          $(".symptom-top li").eq(0).addClass("symptom-top-active");
      } else if (symptomId == "chest" || symptomId == "chest1") {
          $(".symptom-top li").eq(2).addClass("symptom-top-active");
      } else if (symptomId == "arms" || symptomId == "arms1" || symptomId == "legs" || symptomId == "legs1") {
          $(".symptom-top li").eq(1).addClass("symptom-top-active");
      } else if (symptomId == "belly" || symptomId == "belly") {
          $(".symptom-top li").eq(3).addClass("symptom-top-active");
      } else if (symptomId == "perineum" || symptomId == "perineum1") {
          $(".symptom-top li").eq(4).addClass("symptom-top-active");
      } else {
        $(".symptom-top li").eq(5).addClass("symptom-top-active");
      }
      setTimeout(function () {
        $(".next-wapper").css({
            "top": (tra/100-3.6)+"rem",
            "transition": "top 1s"
          })
      },500)
  })
  $(".last-btn").click(function () {
    $(".next-wapper").css({
      "top": 0,
      "transition": "top 1s"
      })
  })

  $(".symptom-top li").click(function () {
    $(".symptom-top li").removeClass("symptom-top-active");
    $(this).addClass("symptom-top-active");
  })




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

// 搜索症状
// 切换
$(".top p").click(function () {
  $(".page-find").show();
  $(".page-find").css({
    "transform": "translateY(-8rem)",
    "transition": "transform 2s"
  })
  setTimeout(function () {
    $(".page-content").hide();
  },1000)
  // $(".page-find").slideDown("slow");
})

// cookie保存搜索记录
var name;
$(".search").click(function () {
  name = $(".search-wapper").val();
  var oDate = new Date();
  oDate.setDate(oDate.getDate() + 30);
  document.cookie = "b_name=" + name + ";expires=" + oDate;
});
$(".search-wapper").focus(function () {
  var oCookie = document.cookie.split(';');
  for (var i = 0; i < oCookie.length; i++) {
    var temp = oCookie[i].split('=');
    var list = $(".search-list li").html();
    if (temp[1] != list) {
      $(".search-list").prepend($("<li>"+temp[1]+"</li>"));
      // $("<li>"+temp[1]+"</li>").appendTo($(".search-list"));
    }
  }
})



// 点击可能患有的疾病进入疾病分析页面
    $(".page-result li").click(function () {
      $(".page-result li").css({
        "background": "#fff"
      });
      $(this).css({
        "background": "#ccc"
      });
      setTimeout(function () {
        $(".page-symptom").show();
        $(".page-result").hide();
      },1000)
    })
// 点击返回可能患有的疾病页面
    $(".symptom-top img").click(function () {
      $(".page-symptom").hide();
      $(".page-result").show();
    })

})
