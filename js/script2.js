//Script para rellenar HTML con API
document.addEventListener("DOMContentLoaded", function(){
    $(document).ready(function () {
      $.ajax({
          url: 'https://randomuser.me/api/',
          dataType: 'json',
          success: function (data) {
              var user = data.results[0];
              $('#email').html(user.email);
              $('#phone').html(user.cell);
              $('#location').html(user.location.city + ', ' + user.location.state);
              $('#name').html(user.name.first + ' ' + user.name.last);
              $('#profile-picture').attr('src', user.picture.medium);
          }
      });
    });
  });
  