package com.example.erp;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.erp.web.order.mapper.OrderMapper;


@SpringBootTest(classes = GreenApplication.class)
class GreenApplicationTests {
	
	@Autowired
	OrderMapper orderMapper;

	@Test
	void contextLoads() {
		
		System.out.println(orderMapper.test());
		
	}

}
