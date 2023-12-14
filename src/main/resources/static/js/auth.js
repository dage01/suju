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
            ,height: "50vh" //높이
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
$(function(){


    $("#table").jqGrid({
            colNames: [
                "","년도","숨김번호","초과체크","번호","부서명","","공사명","공종명","지역구분코드","지역구분","예상수주규모코드","예상수주규모","구분코드","구분" ,"형태코드","형태", "(예정)월","원도급사","발주처", "년도","분기","수주가능성코드","수주가능성","상태코드","상태", "원청담당자", "연락처", "특기사항"
            ],
            colModel: [
                {
                    index: 'no',
                    name: 'no',
                    align:"center",
                    hidden:true
                },
                {
                    index: 'YYYY',
                    name: 'YYYY',
                    width: 1,
                    align:"center",
                   // key: true

                },

                {
                    index: 'SEQ',
                    name: 'SEQ',
                    key: true,
                    align: "center",
                    hidden: true
                },
                {
                    index: 'LATE_TAG',
                    name: 'LATE_TAG',
                    align: "center",
                    hidden : true
                },
                {
                    index: 'R_NUM',
                    name: 'R_NUM',
                    align: "center",
                    hidden: true
                },
                {
                    index: 'PROJ_NAME',
                    name: 'PROJ_NAME',
                    width: 3
                },

                {
                    index: 'PROJ_CODE',
                    name: 'PROJ_CODE',
                    hidden : true
                },
                {
                    index: 'PROJ_ACT_NAME',
                    name: 'PROJ_ACT_NAME',
                    width: 5
                },
                {
                    index: 'WORK_NAME',
                    name: 'WORK_NAME',
                    width: 2
                },
                {
                    index: 'REGION_TYPE',
                    name: 'REGION_TYPE',
                    align:"center",
                    hidden: true
                },
                {
                    index: 'REGION_NAME',
                    name: 'REGION_NAME',
                    width: 2,
                    align:"center"
                },
                {
                    index: 'EXPECT_GM', // 예상수주규모 코드
                    name: 'EXPECT_GM',
                    align:"center",
                    hidden:true
                },
                {
                    index: 'EXPECT_GM_NAME', // 예상수주규모
                    name: 'EXPECT_GM_NAME',
                    width: 4,
                    align:"left"
                },

                {
                    index: 'BID_TAG', // 구분코드
                    name: 'BID_TAG',
                    hidden: true
                },
                {
                    index: 'BID_TAG_NAME', // 구분
                    name: 'BID_TAG_NAME',
                    width: 2,
                    align:"center",
                    edittype: 'select',
                    editoptions: {value : {1:'제한', 2:'일반',3:'지명',4:'수의'} }

                },

                {
                    index: 'BID_TYPE', // 형태코드
                    name: 'BID_TYPE',
                    hidden: true
                },
                {
                    index: 'BID_TYPE_NAME', // 형태
                    name: 'BID_TYPE_NAME',
                    width: 2,
                    align:"center"
                },

                {
                    index: 'CONT_DT', // 예정월
                    name: 'CONT_DT',
                    width: 2,
                    align:"center"
                },
                {
                    index: 'CONTRACTOR_NAME', // 원도급사
                    name: 'CONTRACTOR_NAME',
                    width: 3,
                    align:"left"
                },
                {
                    index: 'ORDER_NAME', // 발주처
                    name: 'ORDER_NAME',
                    width: 3,
                    align:"left"
                },

                {
                    index: 'EXPECT_YY', // 착공시기 년도
                    name: 'EXPECT_YY',
                    width: 1,
                    align:"center"
                },
                {
                    index: 'EXPECT_BG', // 착공시기 분기
                    name: 'EXPECT_BG',
                    width: 1,
                    align:"center"
                },
                {
                    index: 'SUJU_STATE', // 수주가능성
                    name: 'SUJU_STATE',
                    hidden: true
                },
                {
                    index: 'SUJU_STATE_NAME',
                    name: 'SUJU_STATE_NAME',
                    width: 2,
                    align:"center"
                },
                {
                    index: 'ACT_STATE', // 상태
                    name: 'ACT_STATE',
                    hidden: true
                },
                {
                    index: 'ACT_STATE_NAME',
                    name: 'ACT_STATE_NAME',
                    width: 2,
                    align:"center"
                },
                {
                    index: 'CONT_USER_NAME', // 원청담당자
                    name: 'CONT_USER_NAME',
                    width: 2,
                    align:"center"
                },
                {
                    index: 'PHONE', // 연락처
                    name: 'PHONE',
                    width: 2,
                    align:"center"
                },
                {
                    index: 'REMARKS', // 특기사항
                    name: 'REMARKS',
                    width: 2
                },


            ],
            viewrecords: false // show the current page, data rang and total records on the toolbar
            ,shrinkToFit: true
            ,rowNum: 3000
            ,loadonce: false
            ,data:data
            ,datatype: "local"
            //,autowidth: true //auto 넓이
            //,width: 1850
            ,height: "34vh" //높이
            ,sortable: false // 마우스로 행 옮기기
            ,loadtext: "로딩중입니다..."
//            ,subGrid: true
            //,cellEdit:true
            ,caption: ""
            ,searchoptions: {
                sopt: ['eq', 'bw', 'bn', 'cn', 'nc', 'ew', 'en']
            }
            ,rownumbers : true
            ,rownumWidth : 50
            ,rowList : [10,20,30,40,50,60,70,80,90,100]





            ,onCellSelect: function(id, status, e, data) //행 클릭 function
            {



                var sendingData = new FormData();

//                var id = $("#table").getGridParam("selrow"); // SEQ
//                var seq = $("#table").getCell(id, "SEQ");

                var yyyy = $("#table").getCell(id, "YYYY"); // YYYY

                document.getElementById("send_yyyy").value = yyyy;
                document.getElementById("send_seq").value = id;

                sendingData.append("yyyy",yyyy);
                sendingData.append("seq",id);

                if(yyyy != null) {

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



            },




            loadError : function(xhr, status, error){ // 불러오기 실패했을 경우 발생하는 이벤트
            	//alert(error);
            },
            ondblClickRow: function (id, iRow, iCol) {

                  var rowIds = $('#table').jqGrid('getDataIDs');

                  var seq = $("#table").getCell(id, "SEQ");

                  var proj_code = $("#table").getCell(id, "PROJ_CODE");


                  $.ajax({
                      url: "/viewList",
                      data: {
                          "seq" : seq
                      },
                      method: "post",
                      success: function(data) {



                          var pathUrl = data;
                          //alert(pathUrl);
                          //let popUp_option = "width=1200,height=1000,left=20,top=10, toolbar=no,status=no, menubar =no,location=no, resizable=no";

                          let popUp_option = "toolbar=no, scrollbars=no, resizeable=yes, status=no, menubar=no, width=870, height=740, top=50,left=50";
                          window.open("/mod_list/" + pathUrl, "target", popUp_option);

                      }
                  })


            },

            loadComplete: function(data) {

//                    var patchHeight = $("[aria-labelledby='gbox_"+$(this).prop("id")+"']").css("height");
//
//
//
//                    $("[aria-labelledby='gbox_"+$(this).prop("id")+"']").css("height",50);

//                    $("[aria-labelledby='gbox_"+$(this).prop("id")+"']").css("height",50);


            		//첫번째 로우 선택
            		var rowIds = $('#table').jqGrid('getDataIDs');

            		var css = {'color':'red'};
            		var css2 = {'color':'green'};

                    $.each(rowIds, function(idx, id)  {
                       var late_tag = $("#table").getCell(id, "LATE_TAG");

                        if (late_tag == 1) {
                            $("#table").jqGrid('setCell',id,'CONT_DT','',css);
                        } else {
                            $("#table").jqGrid('setCell',id,'CONT_DT','',css2);
                        }

                    });

            		if(rowIds && rowIds.length > 0){
            			$('#table').jqGrid("setSelection", rowIds[0]);
            		}
            		var yyyy = $("#table").getCell(rowIds[0], "YYYY");

            		var sendingData = new FormData();

            		sendingData.append("yyyy",yyyy);
                    sendingData.append("seq",rowIds[0]);

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


    });
    $("#table").jqGrid("setLabel", "rn", "No");

    $("#detail_table").jqGrid({
                        colNames: [
                           "","년도","번호","No","활동일자","진행단계","진행단계코드","당사입찰예정(월)","수주가능성","수주가능성코드","작성자","비고"
                        ],
                        colModel: [

                            {
                                index: 'YYYY',
                                name: 'YYYY',
                                width: 1,
                                align:"center",
                                hidden:true
                            },
                            {
                                index: 'SEQ',
                                name: 'SEQ',
                                width: 1,
                                align:"center",
                                hidden:true
                            },
                            {
                                index: 'ACT_SEQ',
                                name: 'ACT_SEQ',
                                width: 1,
                                align:"center",
                                key:true,
                                hidden: true
                            },
                            {
                                index: 'R_NUM',
                                name: 'R_NUM',
                                width: 1,
                                align:"center"
                                //hidden:true
                            },

                            {
                                index: 'ACT_DT',
                                name: 'ACT_DT',
                                width: 2,
                                align:"center"
                            },
                            {
                                index:'PROG_LVL_NAME',
                                name: 'PROG_LVL_NAME',
                                width: 2,
                                align: "center"
                            },
                            {
                                index: 'PROG_LVL',
                                name: 'PROG_LVL',
                                width: 1,
                                align:"center",
                                hidden: true
                            },

                            {
                                index: 'BID_EX_DT',
                                name: 'BID_EX_DT',
                                width: 2,
                                align:"center"
                            },
                            {
                                index: 'SUJU_STATE_NAME',
                                name: 'SUJU_STATE_NAME',
                                width: 2,
                                align:"center"
                            },
                            {
                                index: 'SUJU_STATE',
                                name: 'SUJU_STATE',
                                align:"center",
                                hidden: true

                            },
                            {
                                index: 'WRITER',
                                name: 'WRITER',
                                width: 1,
                                align:"center"
                            },
                            {
                                index: 'ACT_CONT',
                                name: 'ACT_CONT',
                                hidden: true

                            }
                        ],
                        viewrecords: false // show the current page, data rang and total records on the toolbar
                        ,shrinkToFit: true
                        ,rowNum: 16
                        ,loadonce: false
                        ,datatype: "local"
                        //,autowidth: true //auto 넓이
                        ,height: "27vh" //높이 조절
                        ,sortable: false // 마우스로 행 옮기기
                        ,loadtext: "로딩중입니다..."
                        ,caption: ""
                        ,searchoptions: {
                            sopt: ['eq', 'bw', 'bn', 'cn', 'nc', 'ew', 'en']
                        }
                        ,rownumbers : false
                        ,rownumWidth : 50
                        ,rowList : [10,20,30,40,50,60,70,80,90,100]




                        ,onCellSelect: function(id, status, e) //행 클릭 function
                        {
//                            var selected = jQuery("#detail_table").getRowData(id);
//                            var id = $("#detail_table").getGridParam("selrow"); // SEQ
                            var act_cont = $("#detail_table").getCell(id, "ACT_CONT"); // ACT_CONT


                            if(act_cont != null) {
                                document.getElementById("act_cont").value = act_cont;
                            }


                            document.getElementById("send_act_seq").value = id;


                        },
                        ondblClickRow: function (id, iRow, iCol) {

                           var rowIds = $('#detail_table').jqGrid('getDataIDs');

                           var act_seq = $("#detail_table").getCell(id, "ACT_SEQ");


                           $.ajax({

                               url: "/viewList2",
                               data: {
                                   "act_seq" : act_seq
                               },
                               method: "post",
                               success: function(data) {

                                   var pathUrl = data;

                                   //alert(pathUrl);

                                   let status2 = "toolbar=no, scrollbars=no, resizeable=yes, status=no, menubar=no, width=700, height=760, top=50,left=50";
                                   window.open("/mod_list_dtl/" + pathUrl, "target", status2);



                               }
                           })


                        },
                        loadError: function(xhr, status, error) // 불러오기 실패했을 경우 발생하는 이벤트
                        {
                            //xhr : XMLHttpRequest object , status : type of error , error : exception object
                            //alert("오류가 발생 하였습니다.\n 전산팀에 문의하세요.");
                        },
                        loadComplete: function(data) {
                        	var rowIds = $('#detail_table').jqGrid('getDataIDs');
                            $('#detail_table').jqGrid("setSelection", rowIds[0]);
                            var act_cont = $("#detail_table").getCell(rowIds[0], "ACT_CONT");
                            document.getElementById("act_cont").value = act_cont;

                        }
            });










       //$("#table").jqGrid("setLabel", "rn", "순번");
       //$('#table').jqGrid('filterToolbar');
       $('#table').navGrid("#jqGridPager", {
           search: false, // show search button on the toolbar
           add: false,
           edit: false,
           del: false,
           refresh: true
       });

       $(window).on("resize", function () {
           var $grid =  $("#table"),
               newWidth = $grid.closest(".ui-jqgrid").parent().width()-50;
               newHeight = $grid.closest(".ui-jqgrid").parent().height();
   //        console.log(newHeight);
           $grid.jqGrid("setGridWidth", newWidth, true);
           $("#table").parents('div.ui-jqgrid-bdiv').css("max-height","300px");


                       var patchWidth = $("#gbox_table").css("width");
                       var patchTarget = $(this).parent();
                       $(patchTarget).css("width",patchWidth);
           //newWidth2 = $grid.closest(".ui-jqgrid").parent().width();

//           $(".ui-jqgrid-htable").css("width",newWidth+5);
//           $('.ui-jqgrid-bdiv').css("width",newWidth);

            //$("#act_cont").css("top", Math.max(-176, ($(window).width()/2)-300)+"px");
           //console.log(height);
           //$('.ui-jqgrid-bdiv').height(height);l
           //$("#detail_table").setGridHeight($(this).height() * .345);

           //jQuery("#table").jqGrid('destroyGroupHeader');
       });
       $(window).on("resize", function () {
        var $grid =  $("#detail_table"),
            newWidth = $grid.closest(".ui-jqgrid").parent().width();
            newHeight = $grid.closest(".ui-jqgrid").parent().height()-15;
            $grid.jqGrid("setGridWidth", newWidth+100, true);
            $("#detail_table").parents('div.ui-jqgrid-bdiv').css("min-width","500px");
//        $("#table").setGridHeight($(this).height() * .330);
//        $("#detail_table").setGridHeight($(this).height() * .280);
//
//
//           console.log(height);
            newWidth2 = $grid.closest(".ui-jqgrid").parent().width()+645;
            newHeight2 = $grid.closest(".ui-jqgrid").parent().height()-30;

            newWidth3 = $(window).width() - 680;
            newWidth4 = $(window).width() - 690;
            newWidth5 = $(window).width() - 710;

           if ($(window).width() < 1552) {
              $('#act_cont').css('width', newWidth3+75);
           }
           if ($(window).width() > 1552 && $(window).width() < 1708) {
              $('#act_cont').css('width', newWidth3+40);
           }
           if ($(window).width() > 1708 && $(window).width() < 1808) {
              $('#act_cont').css('width', newWidth3+15);
           }
           if ($(window).width() >= 1809) {
              $('#act_cont').css('width', newWidth4);
           }
           if ($(window).width() > 1810 && $(window).width() < 1919) {
              $('#act_cont').css('width', newWidth5+30);
           }
           if ($(window).width() >= 1920) {
              $('#act_cont').css('width', newWidth5);
           }



            //$('#act_cont').css('width', newWidth2);
            $('#act_cont').css('height',newHeight2);
       });




       jQuery("#table").jqGrid('setGroupHeaders', {
        useColSpanStyle: false,
        groupHeaders: [
            {startColumnName: 'BID_TAG_NAME', numberOfColumns: 4, titleText: '입찰'},
            {startColumnName: 'EXPECT_YY', numberOfColumns: 2, titleText: '착공시기'}
        ]
       });




})




