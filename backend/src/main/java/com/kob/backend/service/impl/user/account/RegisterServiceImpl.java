package com.kob.backend.service.impl.user.account;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.kob.backend.mapper.UserMapper;
import com.kob.backend.pojo.User;
import com.kob.backend.service.user.account.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class RegisterServiceImpl implements RegisterService {
    @Autowired
    private UserMapper userMapper;

    @Autowired
   private PasswordEncoder passwordEncoder;

    @Override
    public Map<String, String> register(String username, String password, String confirm_password) {
        Map<String, String> map = new HashMap<>();
        if(username.isEmpty()){
            map.put("error_message", "username is empty");
            return map;
        }
        if(password.isEmpty() || confirm_password.isEmpty()){
            map.put("error_message", "password is empty");
            return map;
        }

        username = username.trim();
        if(username.length() == 0){
            map.put("error_message", "username is empty");
            return map;
        }

        if(password.length() == 0 || confirm_password.length() == 0){
            map.put("error_message", "password is empty");
            return map;
        }
        if(username.length() > 100){
            map.put("error_message", "username is too long");
            return map;
        }
        if(password.length() > 100 || confirm_password.length() > 100){
            map.put("error_message", "password is too long");
            return map;
        }

        if(!password.equals(confirm_password)){
            map.put("error_message", "password does not match");
            return map;
        }
        QueryWrapper<User> userQueryWrapper = new QueryWrapper<>();
        userQueryWrapper.eq("username", username);
        List<User> users = userMapper.selectList(userQueryWrapper);
        if(!users.isEmpty()) {
            map.put("error_message", "user already exist");
            return map;
        }

        String encodedPassword = passwordEncoder.encode(password);
        String photo = "https://cdn.acwing.com/media/user/profile/photo/225398_lg_dae8ff549a.png";
        User user = new User(null, username, encodedPassword, photo);
        userMapper.insert(user);

        map.put("error_message", "success");
        return map;
    }
}
