package com.dage.suju.Service;

import com.dage.suju.DAO.UserDao;
import com.dage.suju.DTO.ListDto;
import com.dage.suju.DTO.UserDto;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Service
public class UserService {
    @Autowired
    UserDao Userdao;

    public UserDto chK_logIn(@Param("user_id")String user_id, @Param("user_pwd")String user_pwd){

        return Userdao.chK_logIn(user_id,user_pwd);
    }

    public UserDto auth_s(@Param("empno")String empno){
        return Userdao.auth_s(empno);
    }

    public List<ListDto> list(){
        return Userdao.list();
    }

    public List<HashMap<String, Object>> excellist(){
        return Userdao.excellist();
    }

    public List<ListDto> list_u(@Param("user_no")String user_no,@Param("sysid")String sysid){
        return Userdao.list_u(user_no,sysid);
    }
    public List<ListDto> dept_list(){ return Userdao.dept_list();}

    public List<ListDto> expect_gm_list(){ return Userdao.expect_gm_list();}

    public List<ListDto> expect_bg_list(){ return Userdao.expect_bg_list();}

    public List<ListDto> bid_tag_list() { return Userdao.bid_tag_list();}

    public List<ListDto> bid_type_list() { return Userdao.bid_type_list();}

    public List<ListDto> contractor_list() { return Userdao.contractor_list();}

    public List<ListDto> order_list() { return Userdao.order_list();}

    public List<ListDto> area_list(){ return Userdao.area_list();}

    public List<ListDto> area_list_name() { return Userdao.area_list_name();}

    public List<ListDto> act_state_list(){ return Userdao.act_state_list();}

    public List<ListDto> proj_name() { return Userdao.proj_name();}

    public List<ListDto> tbm_list() { return Userdao.tbm_list();}
    public List<ListDto> nmcivil_list() { return Userdao.nmcivil_list();}

    public List<ListDto> gi_list() { return Userdao.gi_list();}

    public List<ListDto> eg_list() { return Userdao.eg_list();}

    public List<ListDto> prog_lvl_list(){ return Userdao.prog_lvl_list();}

    public List<ListDto> work_list(@Param("proj_code")String proj_code){
        return Userdao.work_list(proj_code);
    }


    public ListDto add_list(){
        return Userdao.add_list();
    }

    public ListDto add_dtl_list(){
        return Userdao.add_dtl_list();
    }


    public ListDto mod_list(@Param("seq")String seq){
        return Userdao.mod_list(seq);
    }

    public ListDto mod_list_dtl(@Param("act_seq")String act_seq){
        return Userdao.mod_list_dtl(act_seq);
    }

    public List<ListDto> cont_user_tel(@Param("contractor_name")String contractor_name) { return Userdao.cont_user_tel(contractor_name);}
    public void act_add (@Param("yyyy")String yyyy,@Param("user_no")String user_no,@Param("proj_code")String proj_code, @Param("proj_act_name")String proj_act_name, @Param("work_type")String work_type,@Param("work_name")String work_name, @Param("region_type")String region_type, @Param("expect_gm")String expect_gm, @Param("bid_tag")String bid_tag,
                          @Param("bid_type")String bid_type, @Param("cont_dt")String cont_dt, @Param("contractor_name")String contractor_name, @Param("order_name")String order_name,
                          @Param("expect_yy")String expect_yy, @Param("expect_bg")String expect_bg, @Param("suju_state")String suju_state,
                          @Param("act_state")String act_state, @Param("cont_user_name")String cont_user_name, @Param("phone")String phone, @Param("remarks")String remarks)
    {Userdao.act_add(yyyy,user_no,proj_code,proj_act_name,work_type,work_name,region_type,expect_gm,bid_tag,bid_type,cont_dt,contractor_name,order_name,expect_yy,expect_bg,suju_state,act_state,cont_user_name,phone,remarks); }

    public void act_mod (@Param("yyyy")String yyyy,@Param("seq")String seq,@Param("user_no")String user_no,@Param("proj_code")String proj_code, @Param("proj_act_name")String proj_act_name, @Param("work_type")String work_type,
                         @Param("work_name")String work_name, @Param("region_type")String region_type, @Param("expect_gm")String expect_gm, @Param("bid_tag")String bid_tag,
                         @Param("bid_type")String bid_type, @Param("cont_dt")String cont_dt, @Param("contractor_name")String contractor_name, @Param("order_name")String order_name,
                         @Param("expect_yy")String expect_yy, @Param("expect_bg")String expect_bg,@Param("cont_user_name")String cont_user_name, @Param("phone")String phone, @Param("remarks")String remarks)
    {Userdao.act_mod(yyyy,seq,user_no,proj_code,proj_act_name,work_type,work_name,region_type,expect_gm,bid_tag,bid_type,cont_dt,contractor_name,order_name,expect_yy,expect_bg,cont_user_name,phone,remarks); }


    public void act_mod_dtl (@Param("yyyy")String yyyy,@Param("seq")String seq,@Param("user_no")String user_no,@Param("act_seq")String act_seq,@Param("act_dt")String act_dt,@Param("prog_lvl")String prog_lvl,@Param("bid_ex_dt")String bid_ex_dt,
                             @Param("suju_state")String suju_state,@Param("act_cont")String act_cont )
    {Userdao.act_mod_dtl(yyyy,seq,user_no,act_seq,act_dt,prog_lvl,bid_ex_dt,suju_state,act_cont); }



    public void act_add_dtl (@Param("user_no")String user_no, @Param("yyyy")String yyyy, @Param("seq")String seq, @Param("act_dt")String act_dt, @Param("prog_lvl")String prog_lvl, @Param("bid_ex_dt")String bid_ex_dt, @Param("suju_state")String suju_state, @Param("act_cont")String act_cont)
    {Userdao.act_add_dtl(user_no,yyyy,seq,act_dt,prog_lvl,bid_ex_dt,suju_state,act_cont); }

    public List<ListDto> search_list(@Param("yyyy_f")String yyyy_f,@Param("yyyy_t")String yyyy_t, @Param("dept_code")String dept_code,@Param("area_code")String area_code,@Param("act_state")String act_state,
                                     @Param("sysid")String sysid, @Param("user_no")String user_no)
    { return Userdao.search_list(yyyy_f,yyyy_t,dept_code,area_code,act_state,sysid,user_no); }

    public void delete_list(@Param("yyyy")String yyyy, @Param("seq")String seq){ Userdao.delete_list(yyyy,seq);}

    public void delete_list_dtl(@Param("yyyy")String yyyy, @Param("seq")String seq, @Param("act_seq")String act_seq){ Userdao.delete_list_dtl(yyyy,seq,act_seq);}

    public void delete_list_dtl2(@Param("yyyy")String yyyy, @Param("seq")String seq){ Userdao.delete_list_dtl2(yyyy,seq);}

    public List<ListDto> list_detail(@Param("yyyy")String yyyy, @Param("seq")String seq) { return Userdao.list_detail(yyyy,seq);}

    public List<ListDto> list_detail2(@Param("yyyy")String yyyy, @Param("seq")String seq) { return Userdao.list_detail2(yyyy,seq);}

}
