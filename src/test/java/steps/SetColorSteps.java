package steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import page.SetColorPage;
import util.BrowserFactory;

public class SetColorSteps {
	
	WebDriver driver;
	BrowserFactory browserFactory;
	SetColorPage setskybluecolor;
	

	@Given("^I am on techfios\\.com website$")
	public void i_am_on_techfios_com_website() {
	driver = BrowserFactory.launchbrowser();
	setskybluecolor = PageFactory.initElements(driver, SetColorPage.class);
	
	}

	@When("^I click on the Set SkyBlue background button;$")
	public void i_click_on_the_Set_SkyBlue_background_button(){
		setskybluecolor.ClickOnSetSkyBlueBackground();
	} 
    @Then("^The color should change to sky blue;$")
    public void the_color_should_change_to_sky_blue() {
    	setskybluecolor.assertSkyBlueColor();
	
	}

	@When("^I click on white Background button;$")
	public void i_click_on_white_Background_button() {
		setskybluecolor.ClickOnSetWhiteBackground();
	}
    @Then("^The background color will change to white;$")
    public void the_background_color_will_change_to_white() {
    	setskybluecolor.assertWhiteColor();
	}
//	@After
//	public void TearDown() {
//		BrowserFactory.TearDown();
//	}
}
