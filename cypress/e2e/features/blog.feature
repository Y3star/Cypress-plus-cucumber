Feature: Blog page

    Feature checking the operation of search filters and articles

    Background:
        Given User open site "https://telnyx.com/resources" and close cookies
    Scenario: Negative search
        When User type incorrect word "qwerty" in input search.
        Then User see negative message 'No results found for "qwerty"'
    Scenario: Positive search
        When User type correct word "fax" in input search.
        Then User see positive message 'Search results for "fax"'


