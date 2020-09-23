package page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class SetColorPage {
  WebDriver driver;
  
  public SetColorPage (WebDriver driver) {
	  this.driver=driver;
  }
  
  //Element library
  @FindBy(how = How.XPATH,using="//*[@id=\"extra\"]/button[1]") WebElement SKYBLUE_BACKGROUND_BUTTON;
  @FindBy(how = How.CSS,using="body[style=\"background-color: skyblue;\"]") WebElement SKYBLUE_COLOR_ELEMENT;
  @FindBy(how = How.XPATH,using="//*[@id=\"extra\"]/button[2]") WebElement WHITE_BACKGROUND_BUTTON;
  @FindBy(how = How.CSS,using="body[style=\"background-color: white;\"]") WebElement  WHITE_COLOR_ELEMENT;
  
  
  //Method to interact with the elements
  
  public void ClickOnSetSkyBlueBackground() {
	  SKYBLUE_BACKGROUND_BUTTON.click();
  }
  public void assertSkyBlueColor() {
	  WebDriverWait wait = new WebDriverWait(driver,6);
	  wait.until(ExpectedConditions.invisibilityOf(SKYBLUE_COLOR_ELEMENT));
  }
  public void ClickOnSetWhiteBackground() {
	  WHITE_BACKGROUND_BUTTON.click();
  }
  public void assertWhiteColor() {
	  WebDriverWait wait = new WebDriverWait(driver,6);
	  wait.until(ExpectedConditions.invisibilityOf(WHITE_COLOR_ELEMENT));
  }
}
