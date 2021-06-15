import $ from "jquery";
function page5() {
  $("#datepicker").datepicker().click($("#backToHospital").text("SSSSS"));

  $("#table1 tbody tr").click(function () {
    $("img").hide();
    $("img").show();
  });

  $("#table1 tbody tr").hover(
    function () {
      $(this).css({
        "font-weight": "bold",
      });
    },
    function () {
      $(this).css({
        "font-weight": "",
      });
    }
  );
}
export { page5 };
