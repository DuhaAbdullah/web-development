

module.exports.getDate = function (){
  let today = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  let locales = "en-US";
  return today.toLocaleDateString(locales, options);
}

module.exports.getDate = function () {
  let today = new Date();
  let options = {
    weekday: "long",
  };

  let locales = "en-US";

  return today.toLocaleDateString(locales, options);
}
