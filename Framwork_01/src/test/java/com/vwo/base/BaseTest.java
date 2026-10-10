package com.vwo.base;

import java.io.IOException;
import java.io.InputStream;
import java.time.Duration;
import java.util.Properties;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;

public class BaseTest {
    protected WebDriver driver;
    protected Properties properties;

    @BeforeTest
    public void setUp() {
        try {
            properties = loadProperties();
            driver = new ChromeDriver();
            driver.manage().window().maximize();
            driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
            driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(30));
            driver.get(properties.getProperty("url", "https://app.vwo.com"));
        } catch (Exception e) {
            throw new RuntimeException("Browser setup failed.", e);
        }
    }

    @AfterTest
    public void tearDown() {
        try {
            if (driver != null) {
                driver.quit();
            }
        } catch (Exception e) {
            throw new RuntimeException("Browser teardown failed.", e);
        }
    }

    private Properties loadProperties() {
        Properties loaded = new Properties();
        try (InputStream inputStream = getClass().getClassLoader().getResourceAsStream("config.properties")) {
            if (inputStream != null) {
                loaded.load(inputStream);
            }
        } catch (IOException e) {
            throw new RuntimeException("Unable to read config.properties.", e);
        }
        return loaded;
    }
}
