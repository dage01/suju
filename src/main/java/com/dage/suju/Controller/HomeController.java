package com.dage.suju.Controller;

import com.dage.suju.DAO.UserDao;
import com.dage.suju.DTO.*;
import com.dage.suju.Service.*;


import com.fasterxml.jackson.databind.util.JSONPObject;

import org.apache.poi.ss.usermodel.*;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.xssf.usermodel.XSSFCellStyle;
import org.apache.poi.xssf.usermodel.XSSFColor;
import org.apache.poi.xssf.usermodel.XSSFFont;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.swing.plaf.synth.Region;
import java.io.*;
import java.util.*;

@Controller
public class HomeController {
    @Autowired
    UserService Userservice;

    @GetMapping("/")
    public String home() {

        return "login";
    }

    @GetMapping("/logout")
    public String logout(HttpSession session) {


        if(session != null) {

            session.invalidate();

        }
        return "login";
    }

    @RequestMapping(value="/index", method = {RequestMethod.GET, RequestMethod.POST})
    public String index(HttpSession session, HttpServletRequest request, Model model, @PathVariable(required = false) String dept_code, @PathVariable(required = false) String area_code,
                        @PathVariable(required = false) String act_state){

        if (session.getAttribute("dto") == null) {
            return "login";
        }
        UserDto dto = (UserDto) session.getAttribute("dto");


        var sysid = "3";

        session.setMaxInactiveInterval(3600); // 세션 체크

        String user_no = dto.getUser_no();

        String proj_code = dto.getProj_code();

        List<ListDto> board_list = null;



        board_list = Userservice.list_u(user_no,sysid);

        String yyyy_f = request.getParameter("yyyy_f");
        //model.addAttribute("yyyy_f",yyyy_f);
        String yyyy_t = request.getParameter("yyyy_t");
        dept_code = request.getParameter("dept_code");
        area_code = request.getParameter("area_code");
        act_state = request.getParameter("act_state");
        String seq = request.getParameter("seq");


        List<ListDto> dept_list = Userservice.dept_list();
        List<ListDto> area_list = Userservice.area_list();
        List<ListDto> act_state_list = Userservice.act_state_list();








//        List<ListDto> list_detail = Userservice.list_detail(yyyy_f,seq);
//
//            //System.out.println(list_detail);
//        model.addAttribute("list_detail", list_detail);




        //model.addAttribute("list_detail", Userservice.list_detail(yyyy_f,seq));

        model.addAttribute("board_list",board_list);
        model.addAttribute("dept_list",dept_list);
        model.addAttribute("area_list",area_list);
        model.addAttribute("act_state_list",act_state_list);

        return "index";
    }

    @RequestMapping("/login_chk")
    @ResponseBody
    public int chK_logIn(HttpServletRequest request) {
        String user_id = (String) request.getParameter("id");
        String user_pwd = (String) request.getParameter("pwd");
        HttpSession session;

        UserDto dto = Userservice.chK_logIn(user_id, user_pwd);
        if (dto != null) {
//            System.out.println(dto);
            session = request.getSession();//세션 생성

            session.setAttribute("dto", dto); //세션에 유저 정보 등록
            String empno = dto.getEmpno();

            session.setAttribute("auth",Userservice.auth_s(empno));
            return 1; //로그인 성공
        } else {
            return -1; // 로그인 실패
        }
    }

    @RequestMapping("/search")
    @ResponseBody // 조회 리로드 필수
    public List<ListDto> search_list(HttpSession session, HttpServletRequest request, Model model, RedirectAttributes redirectAttributes) {

        var result = "";



        String yyyy_f = request.getParameter("yyyy_f");
        String yyyy_t = request.getParameter("yyyy_t");



        String dept_code = request.getParameter("dept_code");
        String area_code = request.getParameter("area_code");
        String act_state = request.getParameter("act_state");


        UserDto dto = (UserDto) session.getAttribute("dto");


        var sysid = "3";

        String user_no = dto.getUser_no();





        List<ListDto> search_list = null;

        search_list = Userservice.search_list(yyyy_f,yyyy_t,dept_code,area_code,act_state,sysid,user_no);

        JSONPObject object = null;

        if(search_list.isEmpty()) {

            return null;

        } else {

            object = new JSONPObject("JSON.parse", search_list);


        }

        return search_list;


//        List<ListDto> search_list = Userservice.search_list(yyyy_f,yyyy_t,dept_code,area_code,act_state);
//        model.addAttribute("search_list",search_list);
//

    }

    @RequestMapping("/list_detail")
    @ResponseBody
    public List<ListDto> list_detail(HttpSession session, HttpServletRequest request, Model model) {


        String yyyy = request.getParameter("yyyy");
        String seq = request.getParameter("seq");

        List<ListDto> list_detail = null;
        list_detail = Userservice.list_detail(yyyy,seq);
        JSONPObject object = null;
        if(list_detail.isEmpty()) {
            return null;
        } else {
            object = new JSONPObject("JSON.parse", list_detail);
        }

        return list_detail;

    }

    @RequestMapping("/list_detail2")
    @ResponseBody
    public List<ListDto> list_detail2(HttpSession session, HttpServletRequest request, Model model) {


        String yyyy = request.getParameter("yyyy");
        String seq = request.getParameter("seq");



        List<ListDto> list_detail2 = null;
        list_detail2 = Userservice.list_detail2(yyyy,seq);
        JSONPObject object = null;
        if(list_detail2.isEmpty()) {
            return null;
        } else {
            object = new JSONPObject("JSON.parse", list_detail2);
        }

        return list_detail2;

    }


    @RequestMapping("/cont_user_tel")
    @ResponseBody
    public List<ListDto> cont_user_tel(HttpSession session, HttpServletRequest request, Model model) {


        String contractor_name = request.getParameter("contractor_name");


        List<ListDto> cont_user_tel = null;

        cont_user_tel = Userservice.cont_user_tel(contractor_name);

        JSONPObject object = null;

        if(cont_user_tel.isEmpty()) {
            return null;
        } else {
            object = new JSONPObject("JSON.parse", cont_user_tel);
        }

        return cont_user_tel;

    }


    @RequestMapping("/delete_list")
    @ResponseBody
    public String delete_list(HttpServletRequest request) {

        String result = "";
        String yyyy = request.getParameter("yyyy");
        String seq = request.getParameter("seq");

        try {
            Userservice.delete_list(yyyy,seq);
            result = "1";
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println(e.getMessage());
            result = "-1";
        }
        return result;
    }
    @RequestMapping("/delete_list_dtl")
    @ResponseBody
    public String delete_list_dtl(HttpServletRequest request) {

        String result = "";
        String yyyy = request.getParameter("yyyy");
        String seq = request.getParameter("seq");
        String act_seq = request.getParameter("act_seq");

        try {

            Userservice.delete_list_dtl(yyyy,seq,act_seq);
            result = "1";

        } catch (Exception e) {
            e.printStackTrace();
            System.out.println(e.getMessage());
            result = "-1";
        }
        return result;
    }

    @RequestMapping("/delete_list_dtl2")
    @ResponseBody
    public String delete_list_dtl2(HttpServletRequest request) {

        String result = "";
        String yyyy = request.getParameter("yyyy");
        String seq = request.getParameter("seq");

        try {

            Userservice.delete_list_dtl2(yyyy,seq);
            result = "1";

        } catch (Exception e) {
            e.printStackTrace();
            System.out.println(e.getMessage());
            result = "-1";
        }
        return result;
    }

    @RequestMapping("/area_list_name")
    public String area_list_name(HttpSession session, HttpServletRequest request, Model model) {



        List<ListDto> area_list_name = Userservice.area_list_name();

        model.addAttribute("area_list_name",area_list_name);

        return "area_list_name";
    }

    @RequestMapping("/mod_list")
    public String add(HttpSession session, Model model, HttpServletRequest request) {

        if (session.getAttribute("dto") == null) {
            return "login";
        }

        String proj_code = request.getParameter("proj_code");


        ListDto info = Userservice.add_list();
        model.addAttribute("info",info);


        List<ListDto> dept_list = Userservice.dept_list();
        List<ListDto> area_list = Userservice.area_list();
        List<ListDto> expect_gm_list = Userservice.expect_gm_list();
        List<ListDto> expect_bg_list = Userservice.expect_bg_list();
        List<ListDto> bid_tag_list = Userservice.bid_tag_list();
        List<ListDto> bid_type_list = Userservice.bid_type_list();
        List<ListDto> contractor_list = Userservice.contractor_list();
        List<ListDto> order_list = Userservice.order_list();



        model.addAttribute("dept_list",dept_list);
        model.addAttribute("area_list",area_list);
        model.addAttribute("expect_gm_list",expect_gm_list);
        model.addAttribute("expect_bg_list",expect_bg_list);
        model.addAttribute("bid_tag_list",bid_tag_list);
        model.addAttribute("bid_type_list",bid_type_list);
        model.addAttribute("contractor_list",contractor_list);
        model.addAttribute("order_list",order_list);

        return "mod_list";
    }

    @RequestMapping("/mod_list/{pathUrl}")
    //@ResponseBody
    public String mod(@PathVariable String pathUrl,Model model,HttpSession session,HttpServletRequest request){

        if(session.getAttribute("dto")==null){
            return "index";
        }
        String seq = pathUrl;

        UserDto dto = (UserDto) session.getAttribute("dto");

        String empno = dto.getEmpno();


        ListDto info = Userservice.mod_list(seq);
        model.addAttribute("info",info);



        List<ListDto> dept_list = Userservice.dept_list();
        List<ListDto> area_list = Userservice.area_list();
        List<ListDto> expect_gm_list = Userservice.expect_gm_list();
        List<ListDto> expect_bg_list = Userservice.expect_bg_list();
        List<ListDto> bid_tag_list = Userservice.bid_tag_list();
        List<ListDto> bid_type_list = Userservice.bid_type_list();
        List<ListDto> contractor_list = Userservice.contractor_list();
        List<ListDto> order_list = Userservice.order_list();

        List<ListDto> work_list = null;

        String proj_code = request.getParameter("proj_code");

        if(proj_code != null) {

            if (proj_code.equals("2032")) { // tbm

                work_list = Userservice.tbm_list();
                model.addAttribute("work_list",work_list);

            } else if (proj_code.equals("2013") || (proj_code.equals("2210"))) { // 일반토목,일반건설1

                work_list = Userservice.nmcivil_list();
                model.addAttribute("work_list",work_list);

            } else if (proj_code.equals("2022")) { //지반항만

                work_list = Userservice.gi_list();
                model.addAttribute("work_list",work_list);

            } else if (proj_code.equals("4220")) {

                work_list = Userservice.eg_list();
                model.addAttribute("work_list",work_list);
            }

        }





        model.addAttribute("dept_list",dept_list);
        model.addAttribute("area_list",area_list);
        model.addAttribute("expect_gm_list",expect_gm_list);
        model.addAttribute("expect_bg_list",expect_bg_list);
        model.addAttribute("bid_tag_list",bid_tag_list);
        model.addAttribute("bid_type_list",bid_type_list);
        model.addAttribute("contractor_list",contractor_list);
        model.addAttribute("order_list",order_list);



        return "mod_list";
    }

    @RequestMapping("/mod_list_dtl/{pathUrl}")
    //@ResponseBody
    public String mod_dtl(@PathVariable String pathUrl,Model model,HttpSession session,HttpServletRequest request){

        if(session.getAttribute("dto")==null){
            return "index";
        }
        String act_seq = pathUrl;

        ListDto info = Userservice.mod_list_dtl(act_seq);
        model.addAttribute("info",info);


        return "mod_list_dtl";
    }

    @RequestMapping("/mod_list_dtl")
    public String add_dtl(HttpSession session, Model model, HttpServletRequest request) {

        if(session.getAttribute("dto")==null){
            return "index";
        }

        ListDto info = Userservice.add_dtl_list();
        model.addAttribute("info",info);

        return "mod_list_dtl";
    }

    @RequestMapping("/view_code")
    @ResponseBody
    public String test2(HttpServletRequest request,Model model){
        String proj_code = request.getParameter("proj_code");
        return proj_code;
    }

    @RequestMapping("/viewList")
    @ResponseBody
    public String test3(HttpServletRequest request,Model model){
        String seq = request.getParameter("seq");
        return seq;
    }

    @RequestMapping("/viewList2")
    @ResponseBody
    public String test4(HttpServletRequest request,Model model){
        String act_seq = request.getParameter("act_seq");
        return act_seq;
    }





    @RequestMapping("/work_list")
    @ResponseBody
    public List<ListDto> work_list(HttpSession session, HttpServletRequest request, Model model) {

        String proj_code = request.getParameter("proj_code");

        //System.out.println(proj_code);

        List<ListDto> work_list = null;

        if(proj_code.equals("2032")) { // tbm

            work_list = Userservice.tbm_list();

        } else if (proj_code.equals("2013") || (proj_code.equals("2210"))) { // 일반토목,일반건설1

            work_list = Userservice.nmcivil_list();

        } else if (proj_code.equals("2022")) { //지반항만

            work_list = Userservice.gi_list();

        } else if (proj_code.equals("4220")) {

            work_list = Userservice.eg_list();
        }

            JSONPObject object = null;

        if(work_list.isEmpty()) {

            return null;

        } else {
            object = new JSONPObject("JSON.parse", work_list);
        }
        //System.out.println(work_list);
        return work_list;

    }

    @RequestMapping("/contractor_list")
    @ResponseBody
    public List<ListDto> contractor_list(HttpSession session, HttpServletRequest request, Model model) {

        List<ListDto> contractor_list = null;


        contractor_list = Userservice.contractor_list();


        JSONPObject object = null;

        if(contractor_list.isEmpty()) {

            return null;

        } else {
            object = new JSONPObject("JSON.parse", contractor_list);
        }

        return contractor_list;

    }

    @RequestMapping("/act_add")
    @ResponseBody
    public String act_add(HttpServletRequest request, HttpSession session) {

        String result = "0";

        if(session.getAttribute("dto")==null){
            return "-1";
        }

        UserDto dto = (UserDto) session.getAttribute("dto");
        String user_no ="";
        user_no=dto.getUser_no();

        String yyyy = request.getParameter("yyyy");
        String proj_code = request.getParameter("proj_code");
        String proj_act_name = request.getParameter("proj_act_name");
        String work_type = request.getParameter("work_type");
        String work_name = request.getParameter("work_name");
        String region_type = request.getParameter("region_type");
        String expect_gm = request.getParameter("expect_gm");
        String bid_tag = request.getParameter("bid_tag");
        String bid_type = request.getParameter("bid_type");
        String cont_dt = request.getParameter("cont_dt");
        String contractor_name = request.getParameter("contractor_name");
        String order_name = request.getParameter("order_name");
        String expect_yy = request.getParameter("expect_yy");
        String expect_bg = request.getParameter("expect_bg");
        String suju_state = request.getParameter("suju_state");
        String act_state = request.getParameter("act_state");
        String cont_user_name = request.getParameter("cont_user_name");
        String phone = request.getParameter("phone");
        String remarks = request.getParameter("remarks");



       try {
            Userservice.act_add(yyyy,user_no,proj_code,proj_act_name,work_type,work_name,region_type,expect_gm,bid_tag,bid_type,cont_dt,contractor_name,
                    order_name,expect_yy,expect_bg,suju_state,act_state,cont_user_name,phone,remarks);
            result = "1";
       } catch (Exception e) {
            e.printStackTrace();
            result = "-1";
       }

       return result;

        //return "act_add";

    }

    @RequestMapping("/act_mod")
    @ResponseBody
    public String act_mod(HttpServletRequest request, HttpSession session) {

        String result = "0";

        if(session.getAttribute("dto")==null){
            return "-1";
        }
        UserDto dto = (UserDto) session.getAttribute("dto");
        String user_no ="";
        user_no=dto.getUser_no();

        String yyyy = request.getParameter("yyyy");
        String seq = request.getParameter("seq");
        String proj_code = request.getParameter("proj_code");
        String proj_act_name = request.getParameter("proj_act_name");
        String work_type = request.getParameter("work_type");
        String work_name = request.getParameter("work_name");
        String region_type = request.getParameter("region_type");
        String expect_gm = request.getParameter("expect_gm");
        String bid_tag = request.getParameter("bid_tag");
        String bid_type = request.getParameter("bid_type");
        String cont_dt = request.getParameter("cont_dt");
        String contractor_name = request.getParameter("contractor_name");
        String order_name = request.getParameter("order_name");
        String expect_yy = request.getParameter("expect_yy");
        String expect_bg = request.getParameter("expect_bg");
        String cont_user_name = request.getParameter("cont_user_name");
        String phone = request.getParameter("phone");
        String remarks = request.getParameter("remarks");



        try {
            Userservice.act_mod(yyyy,seq,user_no,proj_code,proj_act_name,work_type,work_name,region_type,
                    expect_gm,bid_tag,bid_type,cont_dt,contractor_name,order_name,expect_yy,expect_bg,
                    cont_user_name,phone,remarks);
            result = "1";
        } catch (Exception e) {
            e.printStackTrace();
            result = "-1";
        }

        return result;

        //return "act_add";

    }

    @RequestMapping("/act_mod_dtl")
    @ResponseBody
    public String act_mod_dtl(HttpServletRequest request, HttpSession session) {

        String result = "0";

        if(session.getAttribute("dto")==null){
            return "-1";
        }
        UserDto dto = (UserDto) session.getAttribute("dto");
        String user_no ="";
        user_no=dto.getUser_no();

        String yyyy = request.getParameter("yyyy");
        String seq = request.getParameter("seq");
        String act_seq = request.getParameter("act_seq");
        String act_dt = request.getParameter("act_dt");
        String prog_lvl = request.getParameter("prog_lvl");
        String bid_ex_dt = request.getParameter("bid_ex_dt");
        String suju_state = request.getParameter("suju_state");
        String act_cont = request.getParameter("act_cont");




        try {
            Userservice.act_mod_dtl(yyyy,seq,user_no,act_seq,act_dt,prog_lvl,bid_ex_dt,suju_state,act_cont);
            result = "1";
        } catch (Exception e) {
            e.printStackTrace();
            result = "-1";
        }


        return result;

    }

    @RequestMapping("/act_add_dtl")
    @ResponseBody
    public String act_add_dtl(HttpServletRequest request, HttpSession session) {

        String result = "0";

        if(session.getAttribute("dto")==null){
            return "-1";
        }

        UserDto dto = (UserDto) session.getAttribute("dto");
        String user_no ="";
        user_no=dto.getUser_no();



        String yyyy = request.getParameter("yyyy");
        String seq = request.getParameter("seq");
        String act_dt = request.getParameter("act_dt");
        String prog_lvl = request.getParameter("prog_lvl");
        String bid_ex_dt = request.getParameter("bid_ex_dt");
        String suju_state = request.getParameter("suju_state");
        String act_cont = request.getParameter("act_cont");


        try {
            Userservice.act_add_dtl(user_no,yyyy,seq,act_dt,prog_lvl,bid_ex_dt,suju_state,act_cont);
            result = "1";
        } catch (Exception e) {
            e.printStackTrace();
            result = "-1";
        }
//
        return result;


    }

    @RequestMapping("/downloadExcel")
    public void downloadExcel(HttpServletRequest request, HttpServletResponse response,Model model) throws IOException {

        String list = request.getParameter("list");
        String result ="0";
        Workbook wb = new XSSFWorkbook();
        Sheet sheet = wb.createSheet("Sheet1");





        CellStyle TestStyle = wb.createCellStyle();

        TestStyle.setAlignment(HorizontalAlignment.CENTER);
        TestStyle.setVerticalAlignment(VerticalAlignment.CENTER);
        TestStyle.setFillForegroundColor(IndexedColors.LIGHT_CORNFLOWER_BLUE.getIndex());
        TestStyle.setFillPattern(FillPatternType.SOLID_FOREGROUND);

        Row row = null;
        Cell cell = null;
        Row row2 = null;
        Cell cell2 = null;
        int rowNum = 0;

        String headerNames[] = new String[]{"년도", "번호", "부서명", "공사명", "공종명", "지역구분","예상수주규모","입찰","","","원도급사","발주처","착공시기","","수주가능성","상태","원청담당자","연락처","특기사항"};
        Row headerRow = null;
        Cell headerCell = null;
        headerRow = sheet.createRow(rowNum++);
        for(int i=0; i < headerNames.length; i++) {

            Cell Cell = headerRow.createCell(i);
            Cell.setCellValue(headerNames[i]); // 데이터 추가
            Cell.setCellStyle(TestStyle);

        }

        String headerNames2[] = new String[]{"", "", "", "", "", "","","구분","형태","(예정)월","","","년도","분기","","","","",""};
        Row headerRow2 = null;
        Cell headerCell2 = null;
        headerRow2 = sheet.createRow(rowNum++);
        for(int i=0; i < headerNames2.length; i++) {

            Cell Cell2 = headerRow2.createCell(i);
            Cell2.setCellValue(headerNames2[i]); // 데이터 추가
            Cell2.setCellStyle(TestStyle);

        }


        // Header 필드
//        row = sheet.createRow(rowNum++);
//        cell = row.createCell(0);
//        cell.setCellValue("년도");
//        cell = row.createCell(1);
//        cell.setCellValue("번호");
//        cell = row.createCell(2);
//        cell.setCellValue("부서명");
        sheet.addMergedRegion(new CellRangeAddress(0, 1, 0, 0)); // 년도
        sheet.addMergedRegion(new CellRangeAddress(0, 1, 1, 1)); // 번호
        sheet.addMergedRegion(new CellRangeAddress(0, 1, 2, 2)); // 부서명
        sheet.addMergedRegion(new CellRangeAddress(0, 1, 3, 3)); // 공사명
        sheet.addMergedRegion(new CellRangeAddress(0, 1, 4, 4)); // 공종명
        sheet.addMergedRegion(new CellRangeAddress(0, 1, 5, 5)); // 지역구분
        sheet.addMergedRegion(new CellRangeAddress(0, 1, 6, 6)); // 예상수주규모
        sheet.addMergedRegion(new CellRangeAddress(0, 0, 7, 9)); // 입찰 그룹헤더
        sheet.addMergedRegion(new CellRangeAddress(0, 1, 10, 10)); // 원도급사
        sheet.addMergedRegion(new CellRangeAddress(0, 1, 11, 11)); // 발주처
        sheet.addMergedRegion(new CellRangeAddress(0, 0, 12, 13)); // 착공시기 그룹헤더
        sheet.addMergedRegion(new CellRangeAddress(0, 1, 14, 14)); // 수주가능성
        sheet.addMergedRegion(new CellRangeAddress(0, 1, 15, 15)); //
        sheet.addMergedRegion(new CellRangeAddress(0, 1, 16, 16)); // 상태
        sheet.addMergedRegion(new CellRangeAddress(0, 1, 17, 17)); // 원청담당자
        sheet.addMergedRegion(new CellRangeAddress(0, 1, 18, 18)); // 연락처
        //sheet.addMergedRegion(new CellRangeAddress(0, 1, 19, 19)); // 특기사항
        // Body 본문내용
//
//        for (int i=0; i<3; i++) {
//            row = sheet.createRow(rowNum++);
//            cell = row.createCell(0);
//            cell.setCellValue("필드데이터1_" + i);
//            cell = row.createCell(1);
//            cell.setCellValue("필드데이터2_" + i);
//            cell = row.createCell(2);
//            cell.setCellValue("필드데이터3_" + i);
//        }

       // List<ListDto> objectList = new ArrayList<>();

       // List<ListDto> list2 = Userservice.list();


//        Sheet worksheet = wb.createSheet();
//        List<ListDto> objectList = new ArrayList<>();

        //ArrayList mNewList = new ArrayList(Arrays.asList(list));


       // Map<String,Object>map=null;
//        List<String> arrayList = new ArrayList<>(Arrays.asList(list));
        //List<HashMap<String, Object>> list3 = Userservice.list();
       //List<HashMap<String, Object>> list3 = Userservice.excellist();

//
//


        //List<Map<String, Object>> listMap = list2;
//        for(int i=0; i<list2.size(); i++) {
//            //System.out.println(list2.get(i));
//            String yyyy;
//            yyyy = list2.get(0).getYyyy();
//
//        }
        //System.out.println(list2.get(0)); // 첫번째

        //String add = String.valueOf(getValueFromCell(row.getCell(0)));
        //String add2 = list2.get(0).get("YYYY");
        //String add2 = list2.get(0).get("yyyy").toString();
        //System.out.println(add2);
//            row = sheet.createRow(rowNum++);
//            cell = row.createCell(0);
//            cell.setCellValue(list2.get(0));
        //System.out.println(arrayList.get(0));
       // map=new HashMap<String,Object>();
        //String[] resultArr = new String[arrayList.size()];
        //Map<Integer, String> map = new HashMap<>();

        //System.out.println(arrayList.toArray().length);
        //List<Map<String, Object>> listMap = mNewList;
        // List<String> arrayList = Arrays.asList(list);
        //System.out.println(String.valueOf(mNewList.get(1)));
        //Object[] objectArr = arrayList.toArray();
        //System.out.println(arrayList.get(0));
//            row = sheet.createRow(rowNum++);
//            cell = row.createCell(0);
//            cell.setCellValue(String.valueOf(mNewList.get(0)));
            //row = sh.createRow( i );

//            for( int k = 0; k < mNewList.size(); k++ ) {
//
//                cell = row.createCell( k );             // 열
//                cell.setCellValue(String.valueOf(mNewList.get( k )));  // DATA
//            }

        //System.out.println(mNewList.getClass().getName());
//            cell = null;
//            cell = row.createCell(0);
            //System.out.println(mNewList);

            //cell.setCellValue(mNewList.getClass());


//        for (mNewList i : a) {
//            row = sheet.createRow(rowNum++);
//            row.createCell(0).setCellValue(i.getMemberId());
//            row.createCell(1).setCellValue(i.getMemberPw());
//            row.createCell(2).setCellValue(i.getName());
//            row.createCell(3).setCellValue(i.getMobile());
//            row.createCell(4).setCellValue(i.getBirth());
//            row.createCell(5).setCellValue(i.getEntryDate());
//            row.createCell(6).setCellValue(i.getGrade());
//            row.createCell(7).setCellValue(i.getMileage());
//        }


//        for(ListDto mNewList : list) {
//            cellCnt = 0;
//            row = sheet.createRow(rowNum++);
//
//            // 성명
//            cell = row.createCell(rowNum++);
//            cell.setCellValue(vo.getUserName());
//            // 나이
//            cell = row.createCell(rowNum++);
//            cell.setCellValue(vo.getUserAge());
//
//            // 주소
//            cell = row.createCell(rowNum++);
//            cell.setCellValue(vo.getAddress());
//        }



        // 컨텐츠 타입과 파일명 지정
        response.setContentType("ms-vnd/excel");
        response.setHeader("Content-Disposition", "attachment;filename=example.xlsx");
        // Excel File Output
        wb.write(response.getOutputStream());
        wb.close();
    }







}
