function SubjectListCtrl(){

}

SubjectListCtrl.prototype.showList = function () {
    $.getJSON("student.php",{method:"subjets"},function(){
        for(var s of json){
            $('#subjects').append('<li>'+s+'</li>');
        }
    });

    $.getJSON("subject.php",{method:"getTitle"},function(json){
        for(var s of int){
            $('#subjects').append('<li>'+s+'</li>');
            }
          });
}
SubjectListCtrl.prototype.show = function (id) {
    this.id = id;

    $.getJSON("student.php",{method:"subjets"},function(){
        for(var s of json){
            $('#subjects').append('<li>'+s+'</li>');
        }
    });
};

document.write("<script src=\"editreviewctrl.js\"></script> ");

SubjectListCtrl.prototype.new0 = function (id) {
    this.id = id;
    var edc = getTitle(id);
};

$(function(){
    var slc = new SubjectListCtrl();
    slc.showList();
    slc.show(id);
});