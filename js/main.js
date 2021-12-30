"use strict";


// メモの保存
$("#save").on("click", function () {
    const text = $("#box cell").val();
    const text2 = $("#box2 cell2").val();
    const text3 = $("#box3 cell3").val();
    const text4 = $("#box4 cell4").val();
    const text5 = $("#box5 cell-center5").val();
    const text6 = $("#box6 cell6").val();
    const text7 = $("#box7 cell7").val();
    const text8 = $("#box8 cell8").val();
    const text9 = $("#box9 cell9").val();
    const text10 = $("#box10 cell10").val();
    const text11 = $("#box11 cell11").val();
    const text12 = $("#box12 cell12").val();
    const text13 = $("#box13 cell13").val();

    const text14 = $("#box14 cell-center14").val();
    const text15 = $("#box15 cell15").val();
    const text16 = $("#box16 cell16").val();
    const text17 = $("#box17 cell17").val();
    const text18 = $("#box18 cell18").val();
    const text19 = $("#box19 cell19").val();
    const text20 = $("#box20 cell20").val();
    const text21 = $("#box21 cell21").val();
    const text22 = $("#box22 cell22").val();
    const text23 = $("#box23 cell-center23").val();

    const text24 = $("#box24 cell24").val();
    const text25 = $("#box25 cell25").val();
    const text26 = $("#box26 cell26").val();
    const text27 = $("#box27 cell27").val();
    const text28 = $("#box28 cell28").val();
    const text29 = $("#box29 cell29").val();
    const text30 = $("#box30 cell30").val();
    const text31 = $("#box31 cell31").val();
    const text32 = $("#box32 cell-center32").val();
    const text33 = $("#box33 cell33").val();

    const text34 = $("#box34 cell34").val();
    const text35 = $("#box35 cell35").val();
    const text36 = $("#box36 cell36").val();
    const text37 = $("#box37 cell37").val();
    const text38 = $("#box38 cell38").val();
    const text39 = $("#box39 cell39").val();
    const text40 = $("#box40 cell40").val();
    const text41 = $("#box41 cell-center41").val();
    const text42 = $("#box42 cell42").val();
    const text43 = $("#box43 cell43").val();

    const text44 = $("#box44 cell44").val();
    const text45 = $("#box45 cell45").val();
    const text46 = $("#box46 cell46").val();
    const text47 = $("#box47 cell47").val();
    const text48 = $("#box48 cell48").val();
    const text49 = $("#box49 cell49").val();
    const text50 = $("#box50 cell-center50").val();
    const text51 = $("#box51 cell51").val();
    const text52 = $("#box52 cell52").val();
    const text53 = $("#box53 cell53").val();

    const text54 = $("#box54 cell54").val();
    const text55 = $("#box55 cell55").val();
    const text56 = $("#box56 cell56").val();
    const text57 = $("#box57 cell57").val();
    const text58 = $("#box58 cell58").val();
    const text59 = $("#box59 cell-center59").val();
    const text60 = $("#box60 cell60").val();
    const text61 = $("#box61 cell61").val();
    const text62 = $("#box62 cell62").val();
    const text63 = $("#box63 cell63").val();

    const text64 = $("#box64 cell64").val();
    const text65 = $("#box65 cell65").val();
    const text66 = $("#box66 cell66").val();
    const text67 = $("#box67 cell67").val();
    const text68 = $("#box68 cell-center68").val();
    const text69 = $("#box69 cell69").val();
    const text70 = $("#box70 cell70").val();
    const text71 = $("#box71 cell71").val();
    const text72 = $("#box72 cell72").val();
    const text73 = $("#box73 cell73").val();

    const text74 = $("#box74 cell74").val();
    const text75 = $("#box75 cell75").val();
    const text76 = $("#box76 cell76").val();
    const text77 = $("#box77 cell-center77").val();
    const text78 = $("#box78 cell78").val();
    const text79 = $("#box79 cell79").val();
    const text80 = $("#box80 cell80").val();
    const text81 = $("#box81 cell81").val();
    
    // localStorage.setItem("memo", text);
    const data = {
        text: text,
        text2: text2,
        text3: text3,
        text4: text4,
        text5: text5,
        text6: text6,
        text7: text7,
        text8: text8,
        text9: text9,
        text10: text10,
        text11: text11,
        text12: text12,
        text13: text13,

        text14: text14,
        text15: text15,
        text16: text16,
        text17: text17,
        text18: text18,
        text19: text19,
        text20: text20,
        text21: text21,
        text22: text22,
        text23: text23,

        text24: text24,
        text25: text25,
        text26: text26,
        text27: text27,
        text28: text28,
        text29: text29,
        text30: text30,
        text31: text31,
        text32: text32,
        text33: text33,

        text34: text34,
        text35: text35,
        text36: text36,
        text37: text37,
        text38: text38,
        text39: text39,
        text40: text40,
        text41: text41,
        text42: text42,
        text43: text43,

        text44: text44,
        text45: text45,
        text46: text46,
        text47: text47,
        text48: text48,
        text49: text49,
        text50: text50,
        text51: text51,
        text52: text52,
        text53: text53,

        text54: text54,
        text55: text55,
        text56: text56,
        text57: text57,
        text58: text58,
        text59: text59,
        text60: text60,
        text61: text61,
        text62: text62,
        text63: text63,

        text64: text64,
        text65: text65,
        text66: text66,
        text67: text67,
        text68: text68,
        text69: text69,
        text70: text70,
        text71: text71,
        text72: text72,
        text73: text73,

        text74: text74,
        text75: text75,
        text76: text76,
        text77: text77,
        text78: text78,
        text79: text79,
        text80: text80,
        text81: text81,
        
    };

    console.log(data)

    const jsonData = JSON.stringify(data);
    localStorage.setItem("memo", jsonData);
})


//メモの削除
$("#clear").on("click", function () {
    localStorage.removeItem("memo");
    $("#box cell").val("");
    $("#box2 cell2").val("");
    $("#box3 cell3").val("");
    $("#box4 cell4").val("");
    $("#box5 cell-center5").val("");
    $("#box6 cell6").val("");
    $("#box7 cell7").val("");
    $("#box8 cell8").val("");
    $("#box9 cell9").val("");
    $("#box10 cell10").val("");
    $("#box11 cell11").val("");
    $("#box12 cell12").val("");
    $("#box13 cell13").val("");

    $("#box14 cell-center14").val("");
    $("#box15 cell15").val("");
    $("#box16 cell16").val("");
    $("#box17 cell17").val("");
    $("#box18 cell18").val("");
    $("#box19 cell19").val("");
    $("#box20 cell20").val("");
    $("#box21 cell21").val("");
    $("#box22 cell22").val("");
    $("#box23 cell-center23").val("");

    $("#box24 cell24").val("");
    $("#box25 cell25").val("");
    $("#box26 cell26").val("");
    $("#box27 cell27").val("");
    $("#box28 cell28").val("");
    $("#box29 cell29").val("");
    $("#box30 cell30").val("");
    $("#box31 cell31").val("");
    $("#box32 cell-center32").val("");
    $("#box33 cell33").val("");

    $("#box34 cell34").val("");
    $("#box35 cell35").val("");
    $("#box36 cell36").val("");
    $("#box37 cell37").val("");
    $("#box38 cell38").val("");
    $("#box39 cell39").val("");
    $("#box40 cell40").val("");
    $("#box41 cell-center41").val("");
    $("#box42 cell42").val("");
    $("#box43 cell43").val("");

    $("#box44 cell44").val("");
    $("#box45 cell45").val("");
    $("#box46 cell46").val("");
    $("#box47 cell47").val("");
    $("#box48 cell48").val("");
    $("#box49 cell49").val("");
    $("#box50 cell-center50").val("");
    $("#box51 cell51").val("");
    $("#box52 cell52").val("");
    $("#box53 cell53").val("");

    $("#box54 cell54").val("");
    $("#box55 cell55").val("");
    $("#box56 cell56").val("");
    $("#box57 cell57").val("");
    $("#box58 cell58").val("");
    $("#box59 cell-center59").val("");
    $("#box60 cell60").val("");
    $("#box61 cell61").val("");
    $("#box62 cell62").val("");
    $("#box63 cell63").val("");

    $("#box64 cell64").val("");
    $("#box65 cell65").val("");
    $("#box66 cell66").val("");
    $("#box67 cell67").val("");
    $("#box68 cell-center68").val("");
    $("#box69 cell69").val("");
    $("#box70 cell70").val("");
    $("#box71 cell71").val("");
    $("#box72 cell72").val("");
    $("#box73 cell73").val("");

    $("#box74 cell74").val("");
    $("#box75 cell75").val("");
    $("#box76 cell76").val("");
    $("#box77 cell-center77").val("");
    $("#box78 cell78").val("");
    $("#box79 cell79").val("");
    $("#box80 cell80").val("");
    $("#box81 cell81").val("");
    
});

// データの取得
if (localStorage.getItem("memo")) {
    const jsonData = localStorage.getItem("memo");
    const data = JSON.parse(jsonData);
    $("#box cell").val(data.text);
    $("#box2 cell2").val(data.text);
    $("#box3 cell3").val(data.text);
    $("#box4 cell4").val(data.text);
    $("#box5 cell-center5").val(data.text);
    $("#box6 cell6").val(data.text);
    $("#box7 cell7").val(data.text);
    $("#box8 cell8").val(data.text);
    $("#box9 cell9").val(data.text);
    $("#box10 cell10").val(data.text);
    $("#box11 cell11").val(data.text);
    $("#box12 cell12").val(data.text);
    $("#box13 cell13").val(data.text);

    $("#box14 cell-center14").val(data.text);
    $("#box15 cell15").val(data.text);
    $("#box16 cell16").val(data.text);
    $("#box17 cell17").val(data.text);
    $("#box18 cell18").val(data.text);
    $("#box19 cell19").val(data.text);
    $("#box20 cell20").val(data.text);
    $("#box21 cell21").val(data.text);
    $("#box22 cell22").val(data.text);
    $("#box23 cell-center23").val(data.text);

    $("#box24 cell24").val(data.text);
    $("#box25 cell25").val(data.text);
    $("#box26 cell26").val(data.text);
    $("#box27 cell27").val(data.text);
    $("#box28 cell28").val(data.text);
    $("#box29 cell29").val(data.text);
    $("#box30 cell30").val(data.text);
    $("#box31 cell31").val(data.text);
    $("#box32 cell-center32").val(data.text);
    $("#box33 cell33").val(data.text);

    $("#box34 cell34").val(data.text);
    $("#box35 cell35").val(data.text);
    $("#box36 cell36").val(data.text);
    $("#box37 cell37").val(data.text);
    $("#box38 cell38").val(data.text);
    $("#box39 cell39").val(data.text);
    $("#box40 cell40").val(data.text);
    $("#box41 cell-center41").val(data.text);
    $("#box42 cell42").val(data.text);
    $("#box43 cell43").val(data.text);

    $("#box44 cell44").val(data.text);
    $("#box45 cell45").val(data.text);
    $("#box46 cell46").val(data.text);
    $("#box47 cell47").val(data.text);
    $("#box48 cell48").val(data.text);
    $("#box49 cell49").val(data.text);
    $("#box50 cell-center50").val(data.text);
    $("#box51 cell51").val(data.text);
    $("#box52 cell52").val(data.text);
    $("#box53 cell53").val(data.text);

    $("#box54 cell54").val(data.text);
    $("#box55 cell55").val(data.text);
    $("#box56 cell56").val(data.text);
    $("#box57 cell57").val(data.text);
    $("#box58 cell58").val(data.text);
    $("#box59 cell-center59").val(data.text);
    $("#box60 cell60").val(data.text);
    $("#box61 cell61").val(data.text);
    $("#box62 cell62").val(data.text);
    $("#box63 cell63").val(data.text);

    $("#box64 cell64").val(data.text);
    $("#box65 cell65").val(data.text);
    $("#box66 cell66").val(data.text);
    $("#box67 cell67").val(data.text);
    $("#box68 cell-center68").val(data.text);
    $("#box69 cell69").val(data.text);
    $("#box70 cell70").val(data.text);
    $("#box71 cell71").val(data.text);
    $("#box72 cell72").val(data.text);
    $("#box73 cell73").val(data.text);

    $("#box74 cell74").val(data.text);
    $("#box75 cell75").val(data.text);
    $("#box76 cell76").val(data.text);
    $("#box77 cell-center77").val(data.text);
    $("#box78 cell78").val(data.text);
    $("#box79 cell79").val(data.text);
    $("#box80 cell80").val(data.text);
    $("#box81 cell81").val(data.text);
    
}