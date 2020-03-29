Feature: Accessar google

    Scenario: Opening google page
        Given I open page
        Then I see "Google" in the title

    Scenario: Search in Google page
        Given I open page
        When I search for "COVID-19"
        Then I see the text in results page "O coronavírus (COVID-19) é uma doença infecciosa causada por um novo vírus que nunca havia sido identificado em humanos."
