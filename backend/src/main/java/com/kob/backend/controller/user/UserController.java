package com.kob.backend.controller.user;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.kob.backend.mapper.UserMapper;
import com.kob.backend.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
public class UserController {
    @Autowired //用mapper
    UserMapper userMapper;

    //映射到localhost:3000/user/all/ 查询所有用户
    @GetMapping("/user/all/")
    public List<User> getAllUsers() {
        return userMapper.selectList(null);
    }
    //select * from user where id=1
    @GetMapping("/user/{userId}/")
    public User getUser(@PathVariable int userId) {
        QueryWrapper<User> queryWrapper= new QueryWrapper<>();
        //必须要和sql里的一样
        queryWrapper.eq("id", userId);
        //查询大于等于小于等于
        //queryWrapper.ge("id", 2).le("id", 3);
        return userMapper.selectOne(queryWrapper);
    }

    //插入用post比较好
    //方便调试用get
    @GetMapping("/user/add/{userId}/{username}/{password}/")
    public String addUser(
            @PathVariable int userId,
            @PathVariable String username,
            @PathVariable String password) {
        //创建用户
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String encodedPassword = passwordEncoder.encode(password);
        User user = new User(userId, username, encodedPassword);
        //在数据库中插入
        userMapper.insert(user);
        return "add success";

    }

    //删除用户
    @GetMapping("/user/delete/{userId}/")
    public String deleteUser(@PathVariable int userId) {
        userMapper.deleteById(userId);
        return "delete success";
    }


}
