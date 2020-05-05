*** Settings ***
Library    SeleniumLibrary
Library    DataDriver    ../TestData/Item.csv

Suite Setup    Open Browser    ${Web URL}    ${Browser}
Suite Teardown    Close All Browsers
Test Template    Cek Favorite  

*** Variables ***
${Web URL}    https://flamboyant-jennings-3a3dde.netlify.com
${Browser}    chrome

*** Keywords ***
Cek Favorite
    [Arguments]    ${Item}
    Sleep    2 seconds  
    Click Element    link=${Item}
    Sleep    3 seconds
    Click Element    link=favorite_border
    Sleep    2 seconds
    Click Element    link=home
    
    Sleep    2 seconds
    Click Element    link=Favorite
    Sleep    2 seconds 
    Click Element    link=${Item}
    Sleep    2 seconds
    Click Element    link=home

*** Test Cases ***
CekFavoritewithCsv to ${Item}


    