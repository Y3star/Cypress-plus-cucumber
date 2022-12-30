Feature: Main page

    Feature asserting elements on main page.

    Background:
        Given User open site telnyx.com and close cookies window
    Scenario: Assert main menu
        When Check elements is visible in main menu?
        Then Assert all title in header menu.
            | assert    |
            | Products  |
            | Solutions |
            | Network   |
            | Resources |
            | Company   |
            | Pricing   |
    Scenario: Check elements product blocks
        When Check elements is visible in product blocks.
        When Check elements contains attribute in product blocks.
        Then Assert product blocks.
            | assert product        |
            | Voice API             |
            | Elastic SIP Trunking  |
            | Messaging API         |
            | International Numbers |
            | Video API             |
            | Wireless              |
    Scenario: Check bottom product menu
        When Items are visible and clickable in the product menu.
        Then Assert product menu.
            | Products                 |
            | Elastic SIP Trunking     |
            | Call Control - Voice API |
            | Programmable SMS         |
            | Secure Faxing            |
            | Wireless - Cellular IoT  |
            | Number Lookup            |
            | Global Numbers           |
            | Verify API               |
            | See all Products         |
    Scenario: Check bottom resources menu
        When Items are visible and clickable in the resources menu.
        Then Assert resources menu.
            | Resources      |
            | Developer Docs |
            | Blog           |
            | Resource Hub   |
            | Release Notes  |
    Scenario: Check bottom pricing menu
        When Items are visible and clickable in the customer blocks.
        Then Assert pricing menu.
            | Pricing                      |
            | Elastic SIP Trunking Pricing |
            | SMS API Pricing              |
            | Voice API Pricing            |
            | Wireless Pricing             |
    Scenario: Check subdirect page
        When User type email "fake@gmail.com" in input on main page
        Then The url will contains the subdirectory "https://telnyx.com/sign-up?email=fake@gmail.com"