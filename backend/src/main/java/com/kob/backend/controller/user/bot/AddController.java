package com.kob.backend.controller.user.bot;

import com.kob.backend.service.user.bot.AddService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@CrossOrigin
public class AddController {
    @Autowired
    private AddService addService;
    //修改数据库 用post,接口地址
    @PostMapping("/user/bot/add/")
    public Map<String, String> add(@RequestParam Map<String, String> map) {
        return addService.add(map);
    }

}
