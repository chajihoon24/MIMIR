package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.UserDto;

@RestController
@RequestMapping("/users")
public class UserContoller {
	
	@GetMapping("/id")
	public UserDto getUser(@PathVariable Long id) {
		
		UserDto userDto = new UserDto();
		
		return userDto;
	}

}
