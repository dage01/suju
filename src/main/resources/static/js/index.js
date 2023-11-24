function grid2() {

$("#table").jqGrid({
            colNames: [
                "","년도","번호","부서명","공사명","공종명","지역구분코드","지역구분","예상수주규모코드","예상수주규모","구분코드","구분" ,"형태코드","형태", "(예정)월", "년도","분기","수주가능성코드","수주가능성","상태코드","상태", "원청담당자", "연락처", "특기사항"
            ],
            colModel: [
                {
                    index: 'no',
                    name: 'no',
                    width: 1,
                    align:"center"
                },
                {
                    index: 'YYYY',
                    name: 'YYYY',
                    width: 1,
                    align:"center",
                    key: true

                },
                {
                    index: 'SEQ',
                    name: 'SEQ',
                    width: 1,
                    key: true
                },

                {
                    index: 'PROJ_NAME',
                    name: 'PROJ_NAME',
                    width: 2,
                    editable:true
                },
                {
                    index: 'PROJ_ACT_NAME',
                    name: 'PROJ_ACT_NAME',
                    width: 2,
                    editable:true
                },
                {
                    index: 'WORK_NAME',
                    name: 'WORK_NAME',
                    width: 2,
                    editable:true
                },
                {
                    index: 'REGION_TYPE',
                    name: 'REGION_TYPE',
                    width: 2,
                    align:"center",
                    hidden: true
                },
                {
                    index: 'REGION_NAME',
                    name: 'REGION_NAME',
                    width: 4,
                    align:"center",
                    editable:true,
                    edittype: 'select',
                    //formatter:'select',
                    editoptions: {value : {1:'국내', 2:'싱가폴',3:'홍콩',4:'필리핀',5:'기타', 6:'방글라데시', 7:'이라크', 8:'캄보디아',9:'말레이지아',10:'파나마',11:'페루',12:'사우디아라비아',13:'솔로몬 군도',14:'베트남'} }
                    //editoptions: {value : area_list }
                },
                {
                    index: 'EXPECT_GM',
                    name: 'EXPECT_GM',
                    width: 2,
                    align:"center",
                    hidden:true
                },
                {
                    index: 'EXPECT_GM_NAME',
                    name: 'EXPECT_GM_NAME',
                    width: 2,
                    align:"center",
                    editable:true,
                    edittype: 'select',
                    editoptions: {value : {1:'100억 미만', 2:'100억 이상 ~ 300억 미만',3:'300억 이상 ~ 500억 미만',4:'500억 이상 ~ 700억 미만',5:'700억 이상 ~ 900억 미만', 6:'900억 이상'} }
                },

                {
                    index: 'BID_TAG',
                    name: 'BID_TAG',
                    width: 2,
                    hidden: true
                },
                {
                    index: 'BID_TAG_NAME',
                    name: 'BID_TAG_NAME',
                    width: 2,
                    editable: true,
                    edittype: 'select',
                    editoptions: {value : {1:'제한', 2:'일반',3:'지명',4:'수의'} }

                },

                {
                    index: 'BID_TYPE',
                    name: 'BID_TYPE',
                    width: 2,
                    hidden: true
                },
                {
                    index: 'BID_TYPE_NAME',
                    name: 'BID_TYPE_NAME',
                    width: 2,
                    editable:true
                },

                {
                    index: 'CONT_DT',
                    name: 'CONT_DT',
                    width: 2,
                    editable: true
                },
                {
                    index: 'EXPECT_YY',
                    name: 'EXPECT_YY',
                    width: 2
                },
                {
                    index: 'EXPECT_BG',
                    name: 'EXPECT_BG',
                    width: 2
                },
                {
                    index: 'SUJU_STATE',
                    name: 'SUJU_STATE',
                    width: 2,
                    hidden: true
                },
                {
                    index: 'SUJU_STATE_NAME',
                    name: 'SUJU_STATE_NAME',
                    width: 2
                },
                {
                    index: 'ACT_STATE',
                    name: 'ACT_STATE',
                    width: 2,
                    hidden: true
                },
                {
                    index: 'ACT_STATE_NAME',
                    name: 'ACT_STATE_NAME',
                    width: 2
                },
                {
                    index: 'CONT_USER_NAME',
                    name: 'CONT_USER_NAME',
                    width: 2
                },
                {
                    index: 'PHONE',
                    name: 'PHONE',
                    width: 2
                },
                {
                    index: 'REMARKS',
                    name: 'REMARKS',
                    width: 2
                },


            ],
            viewrecords: false // show the current page, data rang and total records on the toolbar
            ,shrinkToFit: true
            ,rowNum: 16
            ,loadonce: false
            ,datatype: "local"
            ,autowidth: true //auto 넓이
            ,height: "45vh" //높이
            ,pager: "#jqGridPager" //페이징
            ,sortable: false // 마우스로 행 옮기기
            ,loadtext: "로딩중입니다..."
            ,cellEdit:true
            ,searchoptions: {
                sopt: ['eq', 'bw', 'bn', 'cn', 'nc', 'ew', 'en']
            }
            ,rownumbers : false
            ,rownumWidth : 50
            ,rowList : [10,20,30,40,50,60,70,80,90,100]


    });
}

function grid_detail() {

$("#detail_table").jqGrid({
            colNames: [
                 "","년도","번호","활동번호","활동일자","진행단계","당사입찰예정(월)","수주가능성","작성자"
             ],
             colModel: [
                 {
                     index: 'YYYY',
                     name: 'YYYY',
                     width: 1,
                     align:"center",
                     key:true
                 },
                 {
                     index: 'SEQ',
                     name: 'SEQ',
                     width: 1,
                     align:"center",
                     key:true
                 },
                 {
                     index: 'ACT_SEQ',
                     name: 'ACT_SEQ',
                     width: 1,
                     align:"center",
                     key:true
                 },
                 {
                     index: 'R_NUM',
                     name: 'R_NUM',
                     width: 1,
                     align:"center"
                 },

                 {
                     index: 'ACT_DT',
                     name: 'ACT_DT',
                     width: 1,
                     align:"center"
                 },
                 {
                     index: 'PROG_LVL',
                     name: 'PROG_LVL',
                     width: 1,
                     align:"center"
                 },
                 {
                     index: 'BID_EX_DT',
                     name: 'BID_EX_DT',
                     width: 1,
                     align:"center"
                 },
                 {
                     index: 'SUJU_STATE',
                     name: 'SUJU_STATE',
                     width: 1,
                     align:"center"
                 },
                 {
                     index: 'WRITER',
                     name: 'WRITER',
                     width: 1,
                     align:"center"
                 }
             ],
            viewrecords: false // show the current page, data rang and total records on the toolbar
            ,shrinkToFit: true
            ,rowNum: 16
            ,loadonce: false
            ,datatype: "local"
            ,autowidth: true //auto 넓이
            ,height: "50vh" //높이 11
            ,pager: "#jqGridPager" //페이징
            ,sortable: false // 마우스로 행 옮기기
            ,loadtext: "로딩중입니다..."
            ,cellEdit:true
            ,searchoptions: {
                sopt: ['eq', 'bw', 'bn', 'cn', 'nc', 'ew', 'en']
            }
            ,rownumbers : false
            ,rownumWidth : 50
            ,rowList : [10,20,30,40,50,60,70,80,90,100]






    });
}


function search(){

    var sendingData = new FormData();

    var yyyy_f = $("#yyyy_f").val();
    var yyyy_t = $("#yyyy_t").val();
    var dept_code = $("#dept_code").val();
    var area_code = $("#area_code").val();
    var act_state = $("#act_state").val();

    sendingData.append("yyyy_f", yyyy_f);
    sendingData.append("yyyy_t", yyyy_t);
    sendingData.append("dept_code",dept_code); // 부서
    sendingData.append("area_code",area_code); // 지역
    sendingData.append("act_state",act_state); // 상태

    $.ajax({

            url:"/search",
            type:'post',
            data: sendingData,
            async: false,
            contentType: false,
            processData: false,
            beforeSend : function() {

                $("#ajax_indicator").show().fadeIn('fast');
            },
            complete : function() {

                $("#ajax_indicator").fadeOut();

            },
            success : function(data) {

                $("#table").clearGridData();
                if(data.length > 0) {
                    JSON.stringify(data); // data parsing
                    //alert(JSON.stringify(data));

                    grid2();
                    $("#table").jqGrid("setGridParam", {
                                                    data: data
                                                }).trigger("reloadGrid");
                }


            }
    });




 }

 function enter_search(e) {

        if(e.keyCode == 13){
           search();
        }

 }


// function mod_list() {
//
//    var rowid2 = $("#detail_table").getGridParam("selrow");
//    var act_seq = $("#detail_table").getCell(rowid2, "ACT_SEQ");
//
//
//    var rowid = $("#table").getGridParam("selrow");
//    var yyyy = $("#table").getCell(rowid, "YYYY");
//    var seq = $("#table").getCell(rowid, "SEQ");
//
//
//    if(act_seq == null) {
//
//        if(seq == null) {
//
//           alert("수정 할 기본정보를 선택하세요.");
//           return;
//
//        }
//
//
//
//
//           $.ajax({
//               url: "/viewList",
//               data: {
//                   "seq" : seq
//               },
//               method: "post",
//               success: function(data) {
//
//                   var pathUrl = data;
//
//                   //alert(pathUrl);
//                   let popUp_option = "width=1200,height=1000,left=20,top=10, toolbar=no,status=no, menubar =no,location=no, resizable=no";
//                   window.open("/mod_list/" + pathUrl, "target", popUp_option);
//
//
//
//               }
//           })
//    } else {
//
//        $.ajax({
//
//            url: "/viewList2",
//            data: {
//                "act_seq" : act_seq
//            },
//            method: "post",
//            success: function(data) {
//
//                var pathUrl = data;
//
//                //alert(pathUrl);
//
//                let status2 = "toolbar=no, scrollbars=no, resizeable=yes, status=no, menubar=no, width=700, height=900, top=50,left=50, resizable=no";
//                //let popUp_option = "width=1200,height=1000,left=20,top=10, toolbar=no,status=no, menubar =no,location=no";
//                window.open("/mod_list_dtl/" + pathUrl, "target", status2);
//
//
//
//            }
//        })
//    }
//
//
//
// }

 function del_list(){

    var rowid = $("#table").getGridParam("selrow");
    //var selRowData = $("#table").jqGrid("getRowData",rowid);
    var yyyy = $("#table").getCell(rowid, "YYYY");
    var seq = $("#table").getCell(rowid, "SEQ");


    var rowid_dt = $("#detail_table").getGridParam("selrow");
    var act_seq = $("#detail_table").getCell(rowid_dt, "ACT_SEQ");


        if (confirm("활동내역도 같이 삭제됩니다. 삭제하시겠습니까?") == true) {

        $.ajax({ // 활동내역 삭제
         url:"/delete_list_dtl2",
         data:{"yyyy":yyyy, "seq":seq},
         method:"post",
         async: false,
         success: function() {

             $.ajax({ // 기본정보 삭제
              url:"/delete_list",
              data:{"yyyy":yyyy, "seq":seq},
              method:"post",
              async: false,
              success: function() {

                  alert("삭제되었습니다.");

                  search();

                  $("#detail_table").clearGridData();

              }

             })
         }

        })


        } else {
            return false;
        }


}
function del_dt_list() {

    var rowid = $("#table").getGridParam("selrow");
    //var selRowData = $("#table").jqGrid("getRowData",rowid);
    var yyyy = $("#table").getCell(rowid, "YYYY");
    var seq = $("#table").getCell(rowid, "SEQ");
    var rowid_dt = $("#detail_table").getGridParam("selrow");
    var act_seq = $("#detail_table").getCell(rowid_dt, "ACT_SEQ");

    if (confirm("활동내역을 삭제하시겠습니까?") == true) {
                    $.ajax({
                        url:"/delete_list_dtl",
                        data:{"yyyy":yyyy, "seq":seq, "act_seq":act_seq},
                        method:"post",
                        async: false,
                        success: function() {

                            alert("삭제되었습니다.");

                            // 삭제 리로드 시작
                            var sendingData = new FormData();

                            sendingData.append("yyyy",yyyy);
                            sendingData.append("seq",seq);

                            $.ajax({
                              url:"/list_detail",
                              type:"post",
                              data: sendingData,
                              contentType: false,
                              processData: false,
                              beforeSend : function() {

                                $("#ajax_indicator").show().fadeIn('fast');
                              },
                              complete : function() {

                                $("#ajax_indicator").fadeOut();

                              },

                              success : function(data) {

                                  $("#detail_table").clearGridData();

                                  if(data.length > 0) {
                                      JSON.stringify(data);

                                      grid_detail();
                                      $("#detail_table").jqGrid("setGridParam", {
                                          data: data
                                      }).trigger("reloadGrid");




                                  }
                              }

                            })

                        }

                    })
                } else {
                return false;
        }
}


 function add(){

      var rowid = $("#table").getGridParam("selrow");
      //var selRowData = $("#table").jqGrid("getRowData",rowid);
      var yyyy = $("#table").getCell(rowid, "YYYY");
      var seq = $("#table").getCell(rowid, "SEQ");
      var proj_code = $("#user_dept_code").val();
      var proj_name = $("#user_dept_name").val();

        var select_mode = 'add';
        scr_width = screen.availWidth;
        scr_height = screen.availHeight;
       let status2 = "toolbar=no, scrollbars=no, resizeable=yes, status=no, menubar=no, top=50, left=50, width=870, height=730";
        //window.open("/mod_list",'target','toolbar=no, scrollbars=no, resizeable=yes, status=no, menubar=no, top=50, left=50, width='+scr_width+',height='+scr_height+'');
        window.open("/mod_list",'target',status2);



        //document.getElementById("select_mode").value = select_mode;






 }

function add_dtl() {

 var rowIds = $('#table').jqGrid('getDataIDs');

 var id = $("#table").getGridParam("selrow");
 var yyyy = $("#table").getCell(id, "YYYY");
 var seq = $("#table").getCell(id, "SEQ");

     if(seq == null) {

        alert("기본정보를 선택하세요.");
        return;

     }

     let status2 = "toolbar=no, scrollbars=no, resizeable=yes, status=no, menubar=no, width=700, height=760, top=50,left=50";
     window.open("/mod_list_dtl","target",status2);

     //alert(yyyy);
     //alert(seq);

 }


 function logout() {

    $.ajax({
        url:"/logout",
        success: function() {

            location.href="/";
            //alert("로그아웃 되었습니다.");
        }

    })

 }


 function reload() {

       var sendingData = new FormData();

       var yyyy = $("#send_yyyy").val();
       var seq = $("#send_seq").val();



       sendingData.append("yyyy",yyyy);
       sendingData.append("seq",seq);

      $.ajax({

            url:"/list_detail",
            type:"post",
            data: sendingData,
            contentType: false,
            processData: false,
            beforeSend : function() {

              $("#ajax_indicator").show().fadeIn('fast');
            },
            complete : function() {

              $("#ajax_indicator").fadeOut();

            },

            success : function() {

                $("#detail_table").clearGridData();

                if(data.length > 0) {

                    JSON.stringify(data);

                    grid_detail();

                    $("#detail_table").jqGrid("setGridParam", {
                        data: data
                    }).trigger("reloadGrid");



                }
            }

      })
 }

function move(e) {

 var rowIds = $('#table').jqGrid('getDataIDs');

 var id = $("#table").getGridParam("selrow");

 var is = $("#table").getCell(id, "R_NUM");
 var i = $("#table").getCell(id, "R_NUM");
 i = i - 1;
         if(e.keyCode == 38){ // up

             //i = i-1;
             $('#table').jqGrid("setSelection", rowIds[i-1]);

             if(is > 1) {
             var yyyy = $("#table").getCell(rowIds[i-1], "YYYY");

            		var sendingData = new FormData();

            		sendingData.append("yyyy",yyyy);
                    sendingData.append("seq",rowIds[i-1]);

            		$.ajax({
                        url:"/list_detail",
                        type:"post",
                        data: sendingData,
                        contentType: false,
                        processData: false,
                        beforeSend : function() {

                          $("#ajax_indicator").show().fadeIn('fast');
                        },
                        complete : function() {

                          $("#ajax_indicator").fadeOut();

                        },

                        success : function(data) {

                            $("#detail_table").clearGridData();
                            if(data.length > 0) {
                                JSON.stringify(data);

                                grid_detail();
                                $("#detail_table").jqGrid("setGridParam", {
                                    data: data
                                }).trigger("reloadGrid");



                            }
                        }

                    })
             }

         }
         if(e.keyCode == 40){ // down

             $('#table').jqGrid("setSelection", rowIds[i+1]);

             if (is >= 1 && rowIds.length > is) {
                var yyyy = $("#table").getCell(rowIds[i+1], "YYYY");

                		var sendingData = new FormData();

                	   sendingData.append("yyyy",yyyy);
                       sendingData.append("seq",rowIds[i+1]);

                		$.ajax({
                           url:"/list_detail",
                           type:"post",
                           data: sendingData,
                           contentType: false,
                           processData: false,
                           beforeSend : function() {

                             $("#ajax_indicator").show().fadeIn('fast');
                           },
                           complete : function() {

                             $("#ajax_indicator").fadeOut();

                           },

                           success : function(data) {

                               $("#detail_table").clearGridData();
                               if(data.length > 0) {
                                   JSON.stringify(data);

                                   grid_detail();
                                   $("#detail_table").jqGrid("setGridParam", {
                                       data: data
                                   }).trigger("reloadGrid");



                               }
                           }

                       })
             }
         }

  }

function move_dtl(e) {

var rowIds = $('#detail_table').jqGrid('getDataIDs');

var id = $("#detail_table").getGridParam("selrow");

var is = $("#detail_table").getCell(id, "R_NUM");
var i = $("#detail_table").getCell(id, "R_NUM");
i = i - 1;
        if(e.keyCode == 38){ // up

            //i = i-1;
            $('#detail_table').jqGrid("setSelection", rowIds[i-1]);
            var act_cont = $("#detail_table").getCell(rowIds[i-1], "ACT_CONT");
                //alert(is+"최대");
                //alert(rowIds.length+"갯수");
            if (is > 1) {
                document.getElementById("act_cont").value = act_cont;
            }

        }
        if(e.keyCode == 40){ // down

            $('#detail_table').jqGrid("setSelection", rowIds[i+1]);
            var act_cont = $("#detail_table").getCell(rowIds[i+1], "ACT_CONT");


            if (is >= 1 && rowIds.length > is) {
                document.getElementById("act_cont").value = act_cont;
            }
        }

 }


