var app = angular.module("ngAnimeApp", ["ngRoute"]);
app.controller("animeController", function($scope){

  $scope.animeData = [];

  $.get("http://hummingbird.me/api/v1/search/anime/?query=a", function(animeResponse){

    animeResponse.forEach(function(item){
      $scope.animeData.push(item);

    });
  });

  $scope.showAll = function(){

    for (var i = 0; i < animeData.length; i++){
      var animeDataArray = animeData[i].url;
      var animeGenre = animeData[i].genres[0].name;

      var pictureLink = $("<a />").attr("href", animeDataArray).attr("target", "_blank").html("<img src='" + animeData[i].cover_image + "'>");


      $(".anime").append(pictureLink);
      console.log("this is working");
    }
  };

    $.get("http://hummingbird.me/api/v1/search/anime/?query=i", function(animeResponse){

      animeResponse.forEach(function(item){
        $scope.animeData.push(item);
    });
  });
    $scope.showAll = function(){
      for (var i = 0; i < animeData.length; i++){
        var animeDataArray = animeData[i].url;
        var animeGenre = animeData[i].genres[0].name;

        var pictureLink = $("<a />").attr("href", animeDataArray).attr("target", "_blank").html("<img src='" + animeData[i].cover_image + "'>");


      $(".anime").append(pictureLink);

      }
    };

      $.get("http://hummingbird.me/api/v1/search/anime/?query=c", function(animeResponse){

        animeResponse.forEach(function(item){
          $scope.animeData.push(item);
        });
      });

      $scope.showAll = function(){
        for (var i = 0; i < animeData.length; i++){
          var animeDataArray = animeData[i].url;
          var animeGenre = animeData[i].genres[0].name;

          var pictureLink = $("<a />").attr("href", animeDataArray).attr("target", "_blank").html("<img src='" + animeData[i].cover_image + "'>");

          $(".anime").append(pictureLink);

        }
      };

      $.get("http://hummingbird.me/api/v1/search/anime/?query=b", function(animeResponse){

        animeResponse.forEach(function(item){
          $scope.animeData.push(item);
        });
      });

      $scope.showAll = function(){
        for (var i = 0; i < animeData.length; i++){
          var animeDataArray = animeData[i].url;
          var animeGenre = animeData[i].genres[0].name;

          var pictureLink = $("<a />").attr("href", animeDataArray).attr("target", "_blank").html("<img src='" + animeData[i].cover_image + "'>");

          $(".anime").append(pictureLink);
        }
      };

        $.get("http://hummingbird.me/api/v1/search/anime/?query=d", function(animeResponse){

          animeResponse.forEach(function(item){
            $scope.animeData.push(item);
          });
        });

        $scope.showAll = function(){
          for (var i = 0; i < animeData.length; i++){
            var animeDataArray = animeData[i].url;
            var animeGenre = animeData[i].genres[0].name;

            var pictureLink = $("<a />").attr("href", animeDataArray).attr("target", "_blank").html("<img src='" + animeData[i].cover_image + "'>");

          $(".anime").append(pictureLink);
        }
      };

        $.get("http://hummingbird.me/api/v1/search/anime/?query=i", function(animeResponse){

          animeResponse.forEach(function(item){
            $scope.animeData.push(item);
          });
        });

    $scope.showAll = function(){
      for (var i = 0; i < animeData.length; i++){
        var animeDataArray = animeData[i].url;
        var animeGenre = animeData[i].genres[0].name;

        var pictureLink = $("<a />").attr("href", animeDataArray).attr("target", "_blank").html("<img src='" + animeData[i].cover_image + "'>");

        $(".anime").append(pictureLink);
      }
    };

      $.get("http://hummingbird.me/api/v1/search/anime/?query=y", function(animeResponse){

        animeResponse.forEach(function(item){
          $scope.animeData.push(item);

        });
      });

      $scope.showAll = function(){

        for (var i = 0; i < animeData.length; i++){
          var animeDataArray = animeData[i].url;
          var animeGenre = animeData[i].genres[0].name;

          var pictureLink = $("<a />").attr("href", animeDataArray).attr("target", "_blank").html("<img src='" + animeData[i].cover_image + "'>");


        $(".anime").append(pictureLink);
        console.log("this is working");
      }
    };

    $.get("http://hummingbird.me/api/v1/search/anime/?query=n", function(animeResponse){

      animeResponse.forEach(function(item){
        $scope.animeData.push(item);

      });
    });

    $scope.showAll = function(){

      for (var i = 0; i < animeData.length; i++){
        var animeDataArray = animeData[i].url;
        var animeGenre = animeData[i].genres[0].name;

        var pictureLink = $("<a />").attr("href", animeDataArray).attr("target", "_blank").html("<img src='" + animeData[i].cover_image + "'>");


      $(".anime").append(pictureLink);
      console.log("this is working");
    }
  };

    $scope.emailFunction = function(form){
      console.log(form);
      console.log('emailfunction clicked');

      // var click = document.getElementById("contactForm");
      // for (var x = 0; x < click.length; x++){
      //   if (click[x].value === ""){
      //     event.preventDefault();
      //   } else {
      //     document.getElementById("contactForm").submit();
      //   }
      // }
      // document.getElementById("contactForm").submit();
      $scope.form = {
        name: '',
        email: '',
        subject: '',
        comments: ''
      };
    }

});
