function sendEmail() {
  var form = document.getElementById("myForm");
  var name = form.elements["name"].value;
  var email = form.elements["email"].value;
  var citizenship = form.elements["citizenship"].value;
  var select = form.elements["select"].value;
  var textfield = form.elements["textfield"].value;
  var address = form.elements["address"].value;
  var phone = form.elements["phone"].value;
  var start_date = form.elements["start_date"].value;
  var end_date = form.elements["end_date"].value;
  var name2 = form.elements["name2"].value;
  var email2 = form.elements["email2"].value;
  var name3 = form.elements["name3"].value;
  var email3 = form.elements["email3"].value;
  var comments = form.elements["comments"].value;
  var location = form.elements["location"].value;

  var subject = "Ново записване: " + name;
  var body = "Име, презиме, фамилия на детето: " + name + "<br>\n" +
             "Email: " + email + "<br>\n" +
             "ЕГН: " + citizenship + "<br>\n" +
             "Дейност: " + select + "<br>\n" +
             "Клас и училище: " + textfield + "<br>\n" +
             "Адрес: " + address + "<br>\n" +
             "Телефон: " + phone + "<br>\n" +
             "Дата на започване: " + start_date + "<br>\n" +
             "Дата на приключване: " + end_date + "<br>\n" +
             "Име на майката: " + name2 + "<br>\n" +
             "Email на майката: " + email2 + "<br>\n" +
             "Име на бащата: " + name3 + "<br>\n" +
             "Email на бащата: " + email3 + "<br>\n" +
             "Забележки за здравето: " + comments + "<br>\n" +
             "Локация: " + location;


    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "dimig156@gmail.com",
      Password : "FED3162454D83316171CB4492992716D98BB",
      To : 'dimig12@abv.bg',
      From : "dimig156@gmail.com",
      Subject : subject ,
      Body : body
  }).then(
    message => {
    if(message=='OK'){
  	}
  	else{
  	}
  }
  );
  }
  