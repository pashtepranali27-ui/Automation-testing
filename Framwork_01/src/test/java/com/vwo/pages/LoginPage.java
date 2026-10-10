package com.vwo.pages;

import java.time.Duration;
import org.openqa.selenium.By;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class LoginPage {
    private final WebDriver driver;
    private final WebDriverWait wait;

    @FindBy(xpath = "//input[@type='email']")
    private WebElement emailInput;

    @FindBy(xpath = "//input[@type='password']")
    private WebElement passwordInput;

    @FindBy(xpath = "//button[@type='submit']")
    private WebElement submitButton;

    @FindBy(xpath = "//input[@type='checkbox']")
    private WebElement rememberMeCheckbox;

    public LoginPage(WebDriver driver) {
        this.driver = driver;
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(20));
        PageFactory.initElements(driver, this);
    }

    public void login(String email, String password) {
        enterEmail(email);
        enterPassword(password);
        clickLogin();
    }

    public void enterEmail(String email) {
        try {
            wait.until(ExpectedConditions.visibilityOf(emailInput)).clear();
            emailInput.sendKeys(email);
        } catch (Exception e) {
            throw new RuntimeException("Unable to enter email.", e);
        }
    }

    public void enterPassword(String password) {
        try {
            wait.until(ExpectedConditions.visibilityOf(passwordInput)).clear();
            passwordInput.sendKeys(password);
        } catch (Exception e) {
            throw new RuntimeException("Unable to enter password.", e);
        }
    }

    public void clickLogin() {
        try {
            wait.until(ExpectedConditions.elementToBeClickable(submitButton)).click();
        } catch (Exception e) {
            throw new RuntimeException("Unable to click login button.", e);
        }
    }

    public void toggleRememberMe() {
        try {
            wait.until(ExpectedConditions.visibilityOf(rememberMeCheckbox)).click();
        } catch (Exception e) {
            throw new RuntimeException("Unable to interact with remember me checkbox.", e);
        }
    }

    public String getErrorMessage() {
        try {
            WebElement message = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[contains(@class,'notification') or contains(@class,'alert') or contains(@class,'error') or contains(text(),'Please') or contains(text(),'Invalid') or contains(text(),'incorrect') or contains(text(),'password') or contains(text(),'email')]")));
            return message.getText().trim();
        } catch (TimeoutException e) {
            return "";
        } catch (Exception e) {
            throw new RuntimeException("Unable to read login message.", e);
        }
    }

    public boolean isDashboardVisible() {
        try {
            return wait.until(ExpectedConditions.or(
                ExpectedConditions.urlContains("/dashboard"),
                ExpectedConditions.urlContains("/projects"),
                ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[contains(text(),'Dashboard')] | //div[contains(text(),'Overview')] | //span[contains(text(),'Dashboard')]"))
            )) != null;
        } catch (Exception e) {
            return false;
        }
    }
}
