package com.kob.backend.service.impl.user.bot;

import com.kob.backend.mapper.BotMapper;
import com.kob.backend.pojo.Bot;
import com.kob.backend.pojo.User;
import com.kob.backend.service.impl.utils.UserDetailsImpl;
import com.kob.backend.service.user.bot.UpdateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class UpdateServiceImpl implements UpdateService {
    @Autowired
    private BotMapper botMapper;

    @Override
    public Map<String, String> update(Map<String, String> data) {
        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken =
                (UsernamePasswordAuthenticationToken) SecurityContextHolder.getContext().getAuthentication();
        UserDetailsImpl loggedUser = (UserDetailsImpl) usernamePasswordAuthenticationToken.getPrincipal();
        User user = loggedUser.getUser();

        int bot_id = Integer.parseInt(data.get("bot_id"));

        String title = data.get("title");
        String description = data.get("description");
        String content = data.get("content");

        Map<String, String> map = new HashMap<>();
        if(title == null || title.length() == 0){
            map.put("error_message", "title is empty");
            return map;
        }
        if(title.length() > 100){
            map.put("error_message", "title is too long");
            return map;
        }
        if(description.length() == 0){
            description = "lazy!!!!!!!!!!";

        }

        if(description != null && description.length() > 300){
            map.put("error_message", "content is too long");
            return map;
        }
        if(content == null || content.length() == 0){
            map.put("error_message", "code content is empty");
            return map;
        }
        if(content.length() > 10000){
            map.put("error_message", "code content is too long");
            return map;
        }

        Bot bot = botMapper.selectById(bot_id);
        if(bot == null){
            map.put("error_message", "bot not found");
            return map;
        }

        if(!bot.getUserId().equals(user.getId())){
            map.put("error_message", "You dont have permission to update this bot");
            return map;
        }
        Bot new_bot = new Bot(
                bot.getId(),
                user.getId(),
                title,
                description,
                content,
                bot.getRating(),
                bot.getCreatetime(),
                new Date()
        );
        botMapper.updateById(new_bot);
        map.put("success_message", "bot successfully updated");

        return map;
    }
}
