package com.vwo.tests;

import com.vwo.base.BaseTest;
import com.vwo.pages.LoginPage;
import org.testng.Assert;
import org.testng.annotations.Test;

public class ValidLoginTest extends BaseTest {
    @Test
    public void shouldLoginWithValidCredentials() {
        try {
            String email = System.getProperty("vwo.username", properties.getProperty("vwo.username", "admin@vwo.com"));
            String password = System.getProperty("vwo.password", properties.getProperty("vwo.password", "admin123"));
            LoginPage loginPage = new LoginPage(driver);
            loginPage.toggleRememberMe();
            loginPage.login(email, password);
            Assert.assertTrue(loginPage.isDashboardVisible(), "Valid login should navigate to dashboard");
        } catch (Exception e) {
            throw new RuntimeException("Valid login test failed.", e);
        }
    }
}
