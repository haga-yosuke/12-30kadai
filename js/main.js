"use strict";

// $("#save").on("click", function () {
//     const text = $("#text_area").val();
//     localStorage.setItem("memo", text);
// });

// //メモの削除
// $("#clear").on("click", function () {
//     localStorage.removeItem("memo");
//     $("#text_area").val("");
// });

// // データの取得
// if (localStorage.getItem("memo")) {
//     const text = localStorage.getItem("memo");
//     $("#text_area").val(text);
// }

// メモの保存
$("#save").on("click", function () {
    const text = $("#box cell").val();
    // localStorage.setItem("memo", text);
    const data = {
        text: text,
    };
    console.log(data)

    const jsonData = JSON.stringify(data);
    localStorage.setItem("memo", jsonData);
})


//メモの削除
$("#clear").on("click", function () {
    localStorage.removeItem("memo");
    $("#box cell").val("");
});

// データの取得
if (localStorage.getItem("memo")) {
    const jsonData = localStorage.getItem("memo");
    const data = JSON.parse(jsonData);
    $("#box cell").val(data.text);
}