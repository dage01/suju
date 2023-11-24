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
            //,data:data
            ,datatype: "local"
            ,autowidth: true //auto 넓이
            ,height: "38vh" //높이
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
            ,height: "39vh" //높이
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

function get_work_name() {

    var proj_code = $("#proj_code").val();

    console.log(proj_code);

    $('#work_name').empty(); // 옵션 비우기


    if(proj_code != "4225" && proj_code != "4226" && proj_code != "2014" && proj_code != "2014" && proj_code != null && proj_code != "") {
        $.ajax({

            url:"/work_list",
            method:"post",
            data: {"proj_code":proj_code},
            success: function(data) {



                for(var i = 0; i < data.length; i++){

                   var option = $("<option value="+data[i].CODE+">"+data[i].NAME+"</option>");
                   $('#work_name').append(option); // 옵션 추가



                }
                var work_name = $("#work_type2").val();
                var dept = $("#dept_code2").val();
                //alert(work_name);
                //alert(dept);
                if (work_name != null) {
                    $("#work_name").val(work_name);
                }


            }

        })

    }



}

function get_work() {

    var proj_code = $("#dept_list").val();
    $('#work_name2').empty(); // 옵션 비우기

    if(proj_code != "4225" && proj_code != "4226" && proj_code != "2014" && proj_code != "2014") {
        $.ajax({

            url:"/work_list",
            method:"post",
            data: {"proj_code":proj_code},
            success: function(data) {



                for(var i = 0; i < data.length; i++){

                   var option = $("<option value="+data[i].CODE+">"+data[i].NAME+"</option>");
                   $('#work_name2').append(option); // 옵션 추가
                }
            }
        })
    }
}

function get_work_code() {

    var work_name = $("#work_name").val();

    console.log(work_name);


}

function year_chk() {

    var expect_yy = $("#expect_yy").val();

    if(expect_yy.length > 4) {
        alert("자리 초과");
        return;
    }
}



function update() {

            $("#proj_code").select2({ disabled: false });
            $("#cont_name").select2({ disabled: false });
            $("#order_name2").select2({ disabled: false });
            $("#contractor_name2").select2({ disabled: false });
            $("#region_name2").select2({ disabled: false });
            $("#expect_gm").select2({ disabled: false });
            $("#expect_bg").select2({ disabled: false });
            $("#bid_tag").select2({ disabled: false });
            $("#bid_type").select2({ disabled: false });
            $("#work_name").select2({ disabled: false });

            $("#yyyy").attr("disabled",false);
            $("#proj_act_name").attr("disabled",false);
            $("#cont_user").attr("disabled",false);
            $("#phone_no").attr("disabled",false);
            $("#expect_yy").attr("disabled",false);
            $("#cont_dt").attr("disabled",false);

            $("#update_btn").hide();
            $("#mod_btn").show();

            editor.destroy(); // 에디터 삭제

            ClassicEditor.create( document.querySelector( '#remarks' ), {

            language: "ko"

            })
            .then( newEditor => {
              editor = newEditor;
            })
            .catch( error => {
              console.error( error );
            });





}

function update_dtl() {

   $("#act_dt").attr("disabled",false);
   $("#bid_ex_dt").attr("disabled",false);

   $("#prog_lvl").select2({ disabled: false });
   $("#suju_state").select2({ disabled: false });

   $("#mod_dtl").hide();



   $("#update_dtl_btn").hide();
   $("#mod_dtl").show();

   editor.destroy(); // 에디터 삭제

   ClassicEditor.create( document.querySelector( '#act_cont' ), {
   language: "ko"

   })
   .then( newEditor => {
     editor = newEditor;
   })
   .catch( error => {
     console.error( error );
   });


}



function save() {

    var select_mode = $("#select_mode").val();


    if (select_mode == 'add') {

         var sendingData = new FormData();


         var yyyy = $("#yyyy").val();
         var proj_code = $("#proj_code").val(); // 부서명
         var proj_act_name = $("#proj_act_name").val(); // 공사명
         var work_type = $("#work_name option:selected").val(); // 공종명 코드

         if (work_type == undefined) {
             work_type = "";
         }

         var work_name = $("#work_name option:selected").text(); // 공종명
         var region_type = $("#region_type").val(); // 지역구분
         var expect_gm = $("#expect_gm").val(); // 예상수주규모
         var bid_tag = $("#bid_tag").val(); // 입찰구분
         var bid_type = $("#bid_type").val(); // 입찰형태
         var cont_dt = $("#cont_dt").val() + "-01"; // 입찰예정(월)

         var contractor_name = $("#contractor_name2 option:selected").text(); // 원도급사
         var order_name = $("#order_name2 option:selected").text(); // 발주처

         var order_chk = $("#order_name2 option:selected").val();
         var contractor_chk = $("#contractor_name2 option:selected").val();

         var expect_yy = $("#expect_yy").val(); // 착공시기 년도
         var expect_bg = $("#expect_bg").val(); // 착공시기 분기
         var suju_state = $("#suju_state").val(); // 수주가능성
         var act_state = $("#act_state").val(); // 상태
         var cont_user_name = $("#cont_user").val(); // 원청담당자
         var phone = $("#phone_no").val(); // 연락처

         if (cont_user_name == undefined) {
            cont_user_name = "";
         }
         if (phone == undefined) {
            phone = "";
         }
         //var remarks = $("#remarks").val(); // 특기사항

         var remarks1 = editor.getData();
         var remarks2 = remarks1.replace(/(<p>)/gi, "");
         var remarks = remarks2.replace(/(<\/p>)/gi, "\r\n");


         if (proj_code == "") {
              alert("부서를 선택하세요.");
              return;
         }

         if (proj_act_name == "") {

              alert("공사명을 입력하세요.");
              return;
         }

         if (order_chk == "") {
             alert("발주처를 선택하세요.");
             return;
         }

         if (contractor_chk == "") {
             alert("원도급사를 선택하세요.");
             return;
         }

         if (expect_yy == "") {
             alert("착공년도를 입력하세요.");
             return;
         }
         if ($("#cont_dt").val() == "") {
              alert("입찰예정(월)을 선택하세요.");
              return;
         }







         sendingData.append("yyyy",yyyy);
         sendingData.append("proj_code",proj_code);
         sendingData.append("proj_act_name",proj_act_name);
         sendingData.append("work_type",work_type);
         sendingData.append("work_name",work_name);
         sendingData.append("region_type",region_type);
         sendingData.append("expect_gm",expect_gm);
         sendingData.append("bid_tag",bid_tag);
         sendingData.append("bid_type",bid_type);
         sendingData.append("cont_dt",cont_dt);
         sendingData.append("contractor_name",contractor_name);
         sendingData.append("order_name",order_name);
         sendingData.append("expect_yy",expect_yy);
         sendingData.append("expect_bg",expect_bg);
         sendingData.append("suju_state",suju_state);
         sendingData.append("act_state",act_state);
         sendingData.append("cont_user_name",cont_user_name);
         sendingData.append("phone",phone);
         sendingData.append("remarks",remarks);


         $.ajax({
             url: "/act_add",
             data: sendingData,
             method: "post",
             dataType: "json",
             processData : false,
             contentType : false,
             beforeSend : function () {
                 $("#save_btn").attr("disabled", true)
             },
             success : function(data) {

                 alert("저장되었습니다.");

                 search_reload();

                 window.close();

             }
         })

     } else {

        var sendingData = new FormData();


            var yyyy = $("#yyyy").val();
            var seq = $("#seq").val();
            var proj_code = $("#proj_code").val(); // 부서명
            var proj_act_name = $("#proj_act_name").val(); // 공사명
            var work_type = $("#work_name option:selected").val(); // 공종명 코드
            var work_name = $("#work_name option:selected").text(); // 공종명
            var region_type = $("#region_name2 option:selected").val(); // 지역구분
            var expect_gm = $("#expect_gm").val(); // 예상수주규모
            var bid_tag = $("#bid_tag").val(); // 입찰구분
            var bid_type = $("#bid_type").val(); // 입찰형태
            var cont_dt = $("#cont_dt").val() + "-01"; // 입찰예정(월)
            var contractor_name = $("#contractor_name").val(); // 원도급사
            var order_name = $("#order_name").val(); // 발주처
            var expect_yy = $("#expect_yy").val(); // 착공시기 년도
            var expect_bg = $("#expect_bg").val(); // 착공시기 분기
            var cont_user_name = $("#cont_user").val(); // 원청담당자
            var phone = $("#phone_no").val(); // 연락처
            //var remarks = $("#remarks").val(); // 특기사항

            var remarks1 = editor.getData();
            var remarks2 = remarks1.replace(/(<p>)/gi, "");
            var remarks = remarks2.replace(/(<\/p>)/gi, "\r\n");

            var act_state = $("#act_state").val(); // 상태

            var order_chk = $("#order_name2 option:selected").val();
            var contractor_chk = $("#contractor_name2 option:selected").val();

            if (work_type == undefined) {
                work_type = "";
            }

            if (cont_user_name == undefined) {
               cont_user_name = "";
            }

            if (phone == undefined) {
               phone = "";
            }

            if (proj_code == "") {
                 alert("부서를 선택하세요.");
                 return;
            }

            if (proj_act_name == "") {

                 alert("공사명을 입력하세요.");
                 return;
            }

            if (order_chk == "") {
                alert("발주처를 선택하세요.");
                return;
            }

            if (contractor_chk == "") {
                alert("원도급사를 선택하세요.");
                return;
            }

            if (expect_yy == "") {
                alert("착공년도를 입력하세요.");
                return;
            }
            if ($("#cont_dt").val() == "") {
                 alert("입찰예정(월)을 선택하세요.");
                 return;
            }







            sendingData.append("yyyy",yyyy);
            sendingData.append("seq",seq);
            sendingData.append("proj_code",proj_code);
            sendingData.append("proj_act_name",proj_act_name);
            sendingData.append("work_type",work_type);
            sendingData.append("work_name",work_name);
            sendingData.append("region_type",region_type);
            sendingData.append("expect_gm",expect_gm);
            sendingData.append("bid_tag",bid_tag);
            sendingData.append("bid_type",bid_type);
            sendingData.append("cont_dt",cont_dt);
            sendingData.append("contractor_name",contractor_name);
            sendingData.append("order_name",order_name);
            sendingData.append("expect_yy",expect_yy);
            sendingData.append("expect_bg",expect_bg);
            sendingData.append("cont_user_name",cont_user_name);
            sendingData.append("phone",phone);
            sendingData.append("remarks",remarks);


             $.ajax({
               url: "/act_mod",
               data: sendingData,
               method: "post",
               dataType: "json",
               processData : false,
               contentType : false,
               beforeSend : function () {
                   $("#mod_btn").attr("disabled", true)
               },
               success : function(data) {

                   alert("저장되었습니다.");

                   search_reload();

                   window.close();



               }
             })


     }

}

function search_reload(){

    var sendingData = new FormData();

    var yyyy_f = $("#yyyy_f").val();
    var yyyy_t = $("#yyyy_t").val();
    var dept_code = $("#dept_code").val();
    var area_code = $("#area_code").val();
    var act_state = $("#act_state2").val();

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

                opener.parent.$("#table").clearGridData();
                if(data.length > 0) {
                    JSON.stringify(data); // data parsing
                    //alert(JSON.stringify(data));

                   grid2();
                opener.parent.$("#table").jqGrid("setGridParam", {
                                                    data: data
                                                }).trigger("reloadGrid");
                }


            }
    });




 }

function mod_dtl() {


    var select_mode = $("#select_mode").val();

    if (select_mode == 'add') {

            var yyyy = $("#send_yyyy").val();
            var seq = $("#send_seq").val();
            var act_dt = $("#act_dt").val();

            var prog_lvl = $("#prog_lvl").val();
            var bid_ex_dt = $("#bid_ex_dt").val();
            var suju_state = $("#suju_state").val();

            var act_cont1 = editor.getData();
            var act_cont2 = act_cont1.replace(/(<p>)/gi, "");
            var act_cont = act_cont2.replace(/(<\/p>)/gi, "\r\n");

            if (act_dt == "") {
                alert("활동일자를 선택하세요.");
                return;

            }

            if (prog_lvl == "") {
                alert("진행단계를 선택하세요.");
                return;
            }

            if (bid_ex_dt == "") {
                alert("당사입찰예정(월)을 선택하세요.");
                return;
            }

            if (suju_state == "") {
                alert("수주가능성을 선택하세요.");
                return;

            }


            $.ajax({
                url: "/act_add_dtl",
                data: {"yyyy":yyyy, "seq":seq, "act_dt":act_dt, "prog_lvl":prog_lvl, "bid_ex_dt":bid_ex_dt, "suju_state":suju_state, "act_cont":act_cont},
                method: "post",
                async: false,
                beforeSend : function () {
                    $("#save_btn_dtl").attr("disabled", true);
                },
                success : function() {

                    alert("저장되었습니다.");

                    var sendingData = new FormData();

                    sendingData.append("yyyy",yyyy);
                    sendingData.append("seq",seq);

                        $.ajax({
                          url:"/list_detail",
                          type:"post",
                          data: sendingData,
                          contentType: false,
                          processData: false,

                          success : function(data) {

                              opener.parent.$("#detail_table").clearGridData(); // 부모창 테이블 초기화

                              if(data.length > 0) {
                                  JSON.stringify(data);

                                  grid_detail();
                                  opener.parent.$("#detail_table").jqGrid("setGridParam", {
                                      data: data
                                  }).trigger("reloadGrid"); // 부모창 테이블 리로드

                                  window.close();
                              }
                          }

                        })


                }
            })


    } else {

    var sendingData = new FormData();


    var yyyy = $("#send_yyyy").val();
    var seq = $("#send_seq").val();
    var act_seq = $("#send_act_seq").val();
    var act_dt = $("#act_dt").val();
    var prog_lvl = $("#prog_lvl").val();
    var bid_ex_dt = $("#bid_ex_dt").val();
    var suju_state = $("#suju_state").val();
    //var act_cont = $("#act_cont").val();

    var act_cont1 = editor.getData();

    if (act_cont1.includes('br')) {
        var act_cont2 = act_cont1.replace(/(<p>)/gi, "");
        var act_cont3 = act_cont2.replace(/(<br>)/gi, "\r\n");
        var act_cont4 = act_cont3.replace(/(&nbsp;)/gi, "");
        var act_cont = act_cont4.replace(/(<\/p>)/gi, "\r\n");
    } else {
        var act_cont2 = act_cont1.replace(/(<p>)/gi, "");
        var act_cont = act_cont2.replace(/(<\/p>)/gi, "\r\n");
    }

    sendingData.append("yyyy",yyyy);
    sendingData.append("seq",seq);
    sendingData.append("act_seq",act_seq);
    sendingData.append("act_dt",act_dt);
    sendingData.append("prog_lvl",prog_lvl);
    sendingData.append("bid_ex_dt",bid_ex_dt);
    sendingData.append("suju_state",suju_state);
    sendingData.append("act_cont",act_cont);




     $.ajax({
       url: "/act_mod_dtl",
       data: sendingData,
       method: "post",
       dataType: "json",
       processData : false,
       contentType : false,
       beforeSend : function () {
           $("#mod_dtl").attr("disabled", true)
       },
       success : function(data) {

           alert("저장되었습니다.");


           var sendingData = new FormData();

           sendingData.append("yyyy",yyyy);
           sendingData.append("seq",seq);


               $.ajax({
                 url:"/list_detail",
                 type:"post",
                 data: sendingData,
                 contentType: false,
                 processData: false,

                 success : function(data) {



                     opener.parent.$("#detail_table").clearGridData(); // 부모창 테이블 초기화

                     if(data.length > 0) {
                         JSON.stringify(data);

                         grid_detail();
                         opener.parent.$("#detail_table").jqGrid("setGridParam", {
                             data: data
                         }).trigger("reloadGrid"); // 부모창 테이블 리로드

                         window.close();
                     }
                 }

               })

       }
     })
   }

}

function expect_chk() {


    var exp = $("#expect_yy").val();

    if (exp.length != '4') {
        alert("착공년도를 4자리로 입력해주세요.");
        return;
    }

}



function get_cont_user_name() {


    var sendingData = new FormData();

    var contractor_name = $("#contractor_name option:selected").text(); // 원도급사

    //alert(contractor_name);

    sendingData.append("contractor_name",contractor_name);


        $.ajax({
          url : "/cont_user_tel",
          data : sendingData,
          method: "post",
          dataType: "json",
          processData : false,
          contentType : false,
          beforeSend : function () {
          },
          success : function(data) {
            var boss_name = data[0].BOSS_NAME;
            var phone = data[0].TELNO;

            if(phone == null && boss_name == null) {

            } else if(phone == null) {
                document.getElementById("cont_user_name").value = data[0].BOSS_NAME;
            } else {
                document.getElementById("cont_user_name").value = data[0].BOSS_NAME;
                document.getElementById("phone").value = data[0].TELNO;
            }
//              if(data.length > 0)  {
//                  document.getElementById("cont_user_name").value = data[0].BOSS_NAME;
//                  document.getElementById("phone").value = data[0].TELNO;
//              }
          }
        })




}

function get_cont_user_name2() {



    var sendingData = new FormData();

    var contractor_name = $("#contractor_name2 option:selected").text(); // 원도급사







    sendingData.append("contractor_name",contractor_name);



        $.ajax({
          url : "/cont_user_tel",
          data : sendingData,
          method: "post",
          dataType: "json",
          processData : false,
          contentType : false,
          beforeSend : function () {
          },
          success : function(data) {
            var boss_name = data[0].BOSS_NAME;
            var phone = data[0].TELNO;



            if(phone == null && boss_name == null) {

            } else if(phone == null) {
                document.getElementById("cont_user").value = data[0].BOSS_NAME;
            } else {
                document.getElementById("cont_user").value = data[0].BOSS_NAME;
                document.getElementById("phone_no").value = data[0].TELNO;
            }

          }
        })


        edit_cont();

}


function edit_cont() {
    var cont = $("#contractor_name2 option:selected").text();
    document.getElementById("contractor_name").value = cont;
}

function edit_ord() {
    var ord = $("#order_name2 option:selected").text();
    document.getElementById("order_name").value = ord;
}

function edit_region() {

    var area = $("#region_name2 option:selected").text();
    var area_code = $("#region_name2 option:selected").val();
    document.getElementById("region_name").value = area;
    document.getElementById("region_type").value = area_code;

}


