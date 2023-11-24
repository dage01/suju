package com.dage.suju.DAO;

import com.dage.suju.DTO.UserDto;
import com.dage.suju.DTO.ListDto;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;

@Repository
public interface UserDao {
    UserDto chK_logIn(@Param("user_id")String user_id, @Param("user_pwd")String user_pwd); //유저 정보

    UserDto auth_s(@Param("empno")String empno);

    List<ListDto>list();

    List<HashMap<String, Object>> excellist();

    List<ListDto> list_u(@Param("user_no")String user_no, @Param("sysid")String sysid);

    List<ListDto>dept_list();

    List<ListDto>expect_gm_list();

    List<ListDto>expect_bg_list();

    List<ListDto>bid_tag_list();

    List<ListDto>bid_type_list();

    List<ListDto>contractor_list();

    List<ListDto>order_list();

    List<ListDto>area_list();

    List<ListDto>area_list_name();

    List<ListDto>act_state_list();

    List<ListDto>proj_name();

    List<ListDto>tbm_list();
    List<ListDto>nmcivil_list();

    List<ListDto>gi_list();


    List<ListDto>eg_list();

    List<ListDto>prog_lvl_list();

    List<ListDto>work_list(@Param("proj_code")String proj_code);

    ListDto mod_list(@Param("seq")String seq);

    ListDto add_list();

    ListDto add_dtl_list();

    ListDto mod_list_dtl(@Param("act_seq")String act_seq);
    List<ListDto> cont_user_tel(@Param("contractor_name")String contractor_name);
    void act_add(@Param("yyyy")String yyyy,@Param("user_no")String user_no, @Param("proj_code")String proj_code, @Param("proj_act_name")String proj_act_name,@Param("work_type")String work_type,@Param("work_name")String work_name, @Param("region_type")String region_type, @Param("expect_gm")String expect_gm, @Param("bid_tag")String bid_tag,
                 @Param("bid_type")String bid_type, @Param("cont_dt")String cont_dt, @Param("contractor_name")String contractor_name, @Param("order_name")String order_name,
                 @Param("expect_yy")String expect_yy, @Param("expect_bg")String expect_bg, @Param("suju_state")String suju_state,
                 @Param("act_state")String act_state, @Param("cont_user_name")String cont_user_name, @Param("phone")String phone, @Param("remarks")String remarks);

    void act_mod(@Param("yyyy")String yyyy,@Param("seq")String seq,@Param("user_no")String user_no, @Param("proj_code")String proj_code, @Param("proj_act_name")String proj_act_name,@Param("work_type")String work_type,
                 @Param("work_name")String work_name, @Param("region_type")String region_type, @Param("expect_gm")String expect_gm, @Param("bid_tag")String bid_tag,
                 @Param("bid_type")String bid_type, @Param("cont_dt")String cont_dt, @Param("contractor_name")String contractor_name, @Param("order_name")String order_name,
                 @Param("expect_yy")String expect_yy, @Param("expect_bg")String expect_bg, @Param("cont_user_name")String cont_user_name, @Param("phone")String phone, @Param("remarks")String remarks);

    void act_mod_dtl (@Param("yyyy")String yyyy,@Param("seq")String seq,@Param("user_no")String user_no,@Param("act_seq")String act_seq,@Param("act_dt")String act_dt,@Param("prog_lvl")String prog_lvl,@Param("bid_ex_dt")String bid_ex_dt,
                             @Param("suju_state")String suju_state,@Param("act_cont")String act_cont);
    void act_add_dtl(@Param("user_no")String user_no, @Param("yyyy")String yyyy, @Param("seq")String seq, @Param("act_dt")String act_dt, @Param("prog_lvl")String prog_lvl, @Param("bid_ex_dt")String bid_ex_dt, @Param("suju_state")String suju_state,@Param("act_cont")String act_cont);

    List<ListDto>search_list(@Param("yyyy_f")String yyyy_f, @Param("yyyy_t")String yyyy_t,@Param("dept_code")String dept_code,@Param("area_code")String area_code,@Param("act_state")String act_state,@Param("sysid")String sysid,
                             @Param("user_no")String user_no);

    void delete_list(@Param("yyyy")String yyyy,@Param("seq")String seq);

    void delete_list_dtl(@Param("yyyy")String yyyy,@Param("seq")String seq,@Param("act_seq")String act_seq);

    void delete_list_dtl2(@Param("yyyy")String yyyy,@Param("seq")String seq);

    List<ListDto>list_detail(@Param("yyyy")String yyyy,@Param("seq")String seq);

    List<ListDto>list_detail2(@Param("yyyy")String yyyy,@Param("seq")String seq);

}
