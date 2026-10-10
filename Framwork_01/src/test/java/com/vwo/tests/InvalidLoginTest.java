package com.vwo.tests;

import com.vwo.base.BaseTest;
import com.vwo.pages.LoginPage;
import org.testng.Assert;
import org.testng.annotations.Test;

public class InvalidLoginTest extends BaseTest {
    @Test
    public void shouldDisplayErrorForInvalidCredentials() {
        try {
            String email = System.getProperty("vwo.invalid.username", properties.getProperty("vwo.invalid.username", "invalid.user@vwo.com"));
            String password = System.getProperty("vwo.invalid.password", properties.getProperty("vwo.invalid.password", "WrongPassword123"));
            LoginPage loginPage = new LoginPage(driver);
            loginPage.toggleRememberMe();
            loginPage.login(email, password);
            String message = loginPage.getErrorMessage();
            Assert.assertFalse(message.isEmpty(), "Invalid login should show an error");
            Assert.assertTrue(message.toLowerCase().contains("invalid") || message.toLowerCase().contains("incorrect") || message.toLowerCase().contains("password") || message.toLowerCase().contains("email"), "Error should mention invalid credentials");
        } catch (Exception e) {
            throw new RuntimeException("Invalid login test failed.", e);
        }
    }
}
