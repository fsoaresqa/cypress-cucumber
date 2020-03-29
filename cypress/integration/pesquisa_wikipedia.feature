Feature: Accessar Wikipedia

    Scenario: Abrir Wikipedia
        Given Eu abro a página
        Then Eu vejo "Wikipedia" no título

    Scenario: Pesquisa na Wikipedia
        Given Eu abro a página
        When Eu pesquiso por "COVID-19"
        Then Eu vejo o resultado "COVID-19"
